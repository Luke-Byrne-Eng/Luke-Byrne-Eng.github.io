---
layout: paper
title:  "3D Gaussian Splatting for Real-Time Radiance Field Rendering"
date:   8 Aug 2022
categories: research
paper_url: https://arxiv.org/pdf/2308.04079
code_url: 
summary: "This paper introduces a novel approach to Radiance Field methods for novel-view synthesis that addresses the challenges of high visual quality, costly training, and real-time rendering of unbounded, complete scenes at 1080p resolution. The authors propose three key innovations: 1) Utilizing sparse points from camera calibration to represent scenes with 3D Gaussians, optimizing scene fidelity while reducing computation in empty spaces. 2) Implementing interleaved optimization and density control of the 3D Gaussians, including anisotropic covariance adjustment for accurate scene depiction. 3) Developing a fast, visibility-aware rendering algorithm enabling anisotropic splatting, which speeds up training and supports real-time (≥ 30 fps) rendering at 1080p. The method demonstrates superior visual quality and real-time rendering capabilities across several datasets."
---

