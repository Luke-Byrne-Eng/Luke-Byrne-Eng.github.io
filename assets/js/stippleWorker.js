// stippleWorker.js

// Replace this URL with the latest version available or the version you wish to use
importScripts('https://cdn.jsdelivr.net/npm/d3-delaunay@6/dist/d3-delaunay.min.js');

self.onmessage = function(event) {
try{
    const { data: buffer, width, height, n } = event.data;
    const data = new Float32Array(buffer);
    const points = new Float64Array(n * 2);
    const centroids = new Float64Array(n * 2); // For storing centroids
    const weights = new Float64Array(n); // For storing weights

    // Initialize the points using rejection sampling based on grayscale intensity
    for (let i = 0; i < n; ++i) {
        let success = false;
        for (let attempt = 0; attempt < 30 && !success; ++attempt) {
            const x = Math.floor(Math.random() * width);
            const y = Math.floor(Math.random() * height);
            if (Math.random() < data[y * width + x]) {
                points[i * 2] = x;
                points[i * 2 + 1] = y;
                success = true;
            }
        }
    }

    const delaunay = d3.Delaunay.from(points);
    const voronoi = delaunay.voronoi([0, 0, width, height]);
    centroids.fill(0);
    weights.fill(0);

    // Compute weighted centroids
    for (let y = 0; y < height; ++y) {
        for (let x = 0; x < width; ++x) {
            const index = delaunay.find(x + 0.5, y + 0.5);
            const weight = data[y * width + x];
            weights[index] += weight;
            centroids[index * 2] += weight * (x + 0.5);
            centroids[index * 2 + 1] += weight * (y + 0.5);
        }
    }

    // Main loop for adjusting points according to weighted centroids
    for (let iteration = 0; iteration < 80; ++iteration) {

        // Adjust points towards weighted centroids
        for (let i = 0; i < n; ++i) {
            if (weights[i] > 0) {
                const cx = centroids[i * 2] / weights[i];
                const cy = centroids[i * 2 + 1] / weights[i];
                // Relaxation step - moving points towards centroids
                points[i * 2] += (cx - points[i * 2]) * 0.8;
                points[i * 2 + 1] += (cy - points[i * 2 + 1]) * 0.8;
            }
        }
        
        console.log("Iteration", iteration);
        console.log("Points", points);

        // Post the intermediate points for visualization (optional)
        self.postMessage({ type: 'progress', points: new Float64Array(points) });
    }

    console.log("Final points", points);
    // Send the final points back to the main thread
    self.postMessage({ type: 'complete', points: points.buffer }, [points.buffer]);

    console.log(event.data);

} catch(error){
        console.log("Worker error:", error);
    }
};

