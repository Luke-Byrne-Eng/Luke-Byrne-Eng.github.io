// stipple.js

document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('sourceImage');
    const canvas = document.getElementById('stippleCanvas');
    const ctx = canvas.getContext('2d');

    // Ensure the canvas size matches the image size
    canvas.width = image.width;
    canvas.height = image.height;

    // Draw the image onto the canvas to get its pixel data
    ctx.drawImage(image, 0, 0, image.width, image.height);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

    // Convert image data to grayscale and normalize
    let data = new Float32Array(image.width * image.height);
    for (let i = 0; i < data.length; i++) {
        const r = imageData[i * 4];
        const g = imageData[i * 4 + 1];
        const b = imageData[i * 4 + 2];
        // Simple average for grayscale
        data[i] = (r + g + b) / (3 * 255);
    }

    // Prepare to send data to worker
    const worker = new Worker('/assets/js/stippleWorker.js');
    console.log('worker', worker);
    console.log('data', data);

    worker.onmessage = function(event) {
        console.log("Message received from worker:", event.data);
        if (event.data.type === 'progress' || event.data.type === 'complete') {
            console.log("Complete message received from worker:", event.data);
            const points = new Float64Array(event.data.points); // Assuming you're transferring the buffer back
            console.log('points', points);
            // Clear the canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw the points received from the worker
            ctx.fillStyle = '#000';
            for (let i = 0; i < points.length; i += 2) {
                ctx.beginPath();
                ctx.arc(points[i], points[i + 1], 1, 0, Math.PI * 2);
                ctx.fill();
            }
        };
        }

    worker.onerror = function(error) {
        console.error("Error from worker:", error);
    };

    worker.postMessage({ data: data.buffer, width: image.width, height: image.height, n: 5000 }, [data.buffer]);


});
