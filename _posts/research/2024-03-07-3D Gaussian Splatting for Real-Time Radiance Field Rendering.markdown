---
layout: paper
title:  "3D Gaussian Splatting for Real-Time Radiance Field Rendering"
date:   8 Aug 2022
categories: research
paper_url: https://arxiv.org/pdf/2308.04079.pdf
code_url: 
summary: "Radiance Field methods have significantly advanced novel-view synthesis for scenes from multiple photos or videos, but high visual quality requires costly training and rendering, with faster methods sacrificing quality. Existing methods struggle to display unbounded, complete scenes at 1080p resolution in real-time. We introduce a novel approach with three key innovations: 1) Utilizing sparse points from camera calibration to represent scenes with 3D Gaussians, optimizing scene fidelity while reducing computation in empty spaces. 2) Implementing interleaved optimization and density control of the 3D Gaussians, including anisotropic covariance adjustment for accurate scene depiction. 3) Developing a fast, visibility-aware rendering algorithm enabling anisotropic splatting, which speeds up training and supports real-time (≥ 30 fps) rendering at 1080p. Our method demonstrates superior visual quality and real-time rendering capabilities across several datasets."
---

