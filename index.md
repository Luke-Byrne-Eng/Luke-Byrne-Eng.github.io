---
layout: page
title: 
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
  let pixelData;
  let currentState = 0;
  const totalSteps = 10; // Total steps for the color transition
  const overlayImage = new Image();
  const overlayScale = 0.5;

  // Determine the theme and set the path to the JSON file accordingly
  const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const jsonPath = theme === 'dark' 
    ? '{{ "/assets/py/stipple_states_dark.json" | relative_url }}'
    : '{{ "/assets/py/stipple_states_light.json" | relative_url }}';

  overlayImage.onload = () => {
    hiddenCanvas.width = overlayImage.width * overlayScale;
    hiddenCanvas.height = overlayImage.height * overlayScale;
    hiddenCtx.drawImage(overlayImage, 0, 0, hiddenCanvas.width, hiddenCanvas.height);
    pixelData = hiddenCtx.getImageData(0, 0, hiddenCanvas.width, hiddenCanvas.height).data;

    fetch(jsonPath)
      .then(response => response.json())
      .then(data => animateStipple(data));
  };
  overlayImage.src = '{{ "/assets/py/luke-byrne.jpg" | relative_url }}';

  function interpolateColor(startColor, endColor, factor) {
    return startColor.map((startVal, i) => {
      return startVal + (endColor[i] - startVal) * factor;
    });
  }

  function animateStipple(data, delay = 100) {
    if (currentState >= data.length) return;
    if (currentState == 1){let delay = 300};
    const points = data[currentState];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    let blendFactor = currentState / totalSteps; // Calculate blend factor based on current step
    if (blendFactor > 1){blendFactor = 1};

    points.forEach(([x, y]) => {
      const imgX = Math.floor((x * overlayScale));
      const imgY = Math.floor((y * overlayScale));
      const index = (imgY * hiddenCanvas.width + imgX) * 4;
      const sampledColor = [pixelData[index], pixelData[index + 1], pixelData[index + 2], pixelData[index + 3] / 255];
      const blackColor = [122, 122, 122, 1]; // Starting color (black)
      const finalColor = interpolateColor(blackColor, sampledColor, blendFactor); // Interpolate between black and sampled color
      const colorStr = `rgba(${finalColor[0]}, ${finalColor[1]}, ${finalColor[2]}, ${finalColor[3]})`;
      ctx.fillStyle = colorStr;
      ctx.beginPath();
      ctx.arc(x/2, y/2, 1.15, 0, Math.PI * 2);
      ctx.fill();
    });

    currentState++;
    setTimeout(() => requestAnimationFrame(() => animateStipple(data, delay)), delay);
  }
</script>


# Electronics, Robotics, and Machine Learning Engineer

### About
Highly motivated engineer with significant experience in electronics, robotics, and AI. Skilled programmer in C, C++, and Python. Designed analogue and digital circuits (PCBs) for the medical industry. Briefly ran a successful electronics repair business. Designed industrial robots for process automation. Currently a PhD student at Strathclyde University, researching machine learning for video processing. Published scientific research on cutting-edge machine learning techniques.

### Technical Skills
- **Programming**: C, C++, Python, Matlab, Simulink
- **Machine Vision**: Classical and AI vision systems, OpenCV, Pytorch
- **Embedded Systems**: Design and use
- **PCB Design**: Digital and analogue, experience with Eagle
- **CAD**: Fusion 360 and ANSYS
- **Control Theory**: Classical and state-space 
- **Control Systems**: PLC programming, ladder logic etc. Some seimens, mostly Mitsubishi
- **Robotics**: Programming Fanuc and ABB robots, Electrical cabinet design
- **Machine Learning**: Pytorch, Tensorboard

### Relevant Work Experience

**Phd Researcher**  
_Strathclyde University_ • 2023 – Present  
Improving state of the art machine learning and AI systems, with special interest in video and image processing. Published research on behaviour classification in video and fundamental archetecture design to improve AI machine vision systems.

**Robotics Engineer**  
_PS Autogrinding_ • 2022 – 2023  
Designing and installing robotic loading cells for use in the metalworking industry. Programming Fanuc and ABB robots. Using custom machine vision solutions for part tracking and identification. Programming PLCs using ladder logic. Assembling electrical panels, and setting up Proface HMIs.

**Electronics Engineer**  
_GM Instruments_ • 2021 – 2022  
Designed and manufactured medical devices, mostly audiometers. Focused on analogue electronics and signal processing. Updated older designs to use modern technologies. Wrote firmware in C and designed PCBs with Eagle. Performed component-level repair using oscilloscopes and logic analyzers.

**Electronics Repair Technician**  
_Self Employed_ • 2018 – 2021  
Repaired consumer electronics: TVs, phones, laptops, etc. Designed automated test jigs for high volume work. Performed reverse engineering when schematics were unavailable. Expert in micro-soldering and hot-air rework of surface mount components. Managed stock levels and job scheduling, dealt directly with customers.

### Education

**MEng Electrical and Electronic Engineering**  
Glasgow Caledonian University • 2020 – 2021

**BEng (Hons) Electrical and Electronic Engineering – 1st Class**  
Glasgow Caledonian University • 2017 – 2020


### Contact
- Phone: (+44) 7456 342115
- Email: [luke.byrne.jp@gmail.com](mailto:luke.byrne.jp@gmail.com)