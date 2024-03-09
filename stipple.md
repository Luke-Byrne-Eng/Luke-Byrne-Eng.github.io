---
layout: page
title: Stipple
permalink: /stipple/
---
<div style="position: relative; width: 253px; height: 253px;">
  <!-- Hidden canvas for color sampling at reduced resolution -->
  <canvas id="hiddenCanvas" style="display: none;"></canvas>
  <!-- Visible canvas for drawing stipple points -->
  <canvas id="stippleCanvas" width="253" height="253" style="position: absolute; left: 0; top: 0;"></canvas>
</div>

<script>
  const hiddenCanvas = document.getElementById('hiddenCanvas');
  const hiddenCtx = hiddenCanvas.getContext('2d');
  const canvas = document.getElementById('stippleCanvas');
  const ctx = canvas.getContext('2d');
  let pixelData, overlayScale = 0.4 / 2;
  let currentState = 0;
  const overlayImage = new Image();

  overlayImage.onload = () => {
    // Adjust hidden canvas size to downscaled image resolution
    hiddenCanvas.width = overlayImage.width * overlayScale;
    hiddenCanvas.height = overlayImage.height * overlayScale;
    hiddenCtx.drawImage(overlayImage, 0, 0, hiddenCanvas.width, hiddenCanvas.height);
    // Fetch all pixel data from the hidden canvas for efficient color sampling
    pixelData = hiddenCtx.getImageData(0, 0, hiddenCanvas.width, hiddenCanvas.height).data;

    // Once everything is set up, start the animation
    fetch('{{ "/assets/py/stipple_states.json" | relative_url }}')
      .then(response => response.json())
      .then(data => animateStipple(data));
  };
  overlayImage.src = '{{ "/assets/py/luke-byrne.jpg" | relative_url }}'; // Update the path accordingly

  function animateStipple(data, delay = 120) { // Animation speed control
    if (currentState >= data.length) return; // Stop condition
    const points = data[currentState];
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    points.forEach(([x, y]) => {
      // Adjust the point's position for the scaled-down overlay
      const imgX = Math.floor(x * overlayScale);
      const imgY = Math.floor(y * overlayScale);
      const index = (imgY * hiddenCanvas.width + imgX) * 4;
      // Construct the color from the preloaded pixel data
      const color = `rgba(${pixelData[index]}, ${pixelData[index + 1]}, ${pixelData[index + 2]}, ${pixelData[index + 3] / 255})`;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x/2, y/2, 1.25, 0, Math.PI * 2);
      ctx.fill();
    });

    currentState++;
    setTimeout(() => requestAnimationFrame(() => animateStipple(data, delay)), delay); // Next frame
  }
</script>
