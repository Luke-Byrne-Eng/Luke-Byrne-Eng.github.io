---
layout: paper
title:  "Surrogate Gap Minimization Improves Sharpness-Aware Training"
date:   19 Mar 2022
categories: research
paper_url: https://arxiv.org/pdf/2203.08065
code_url: 
summary: "Sharpness-Aware Minimization (SAM) enhances generalization by optimizing a neighborhood-based perturbed loss, but it doesn't always favor flat minima due to both sharp and flat minima having low perturbed losses. We introduce a new measure, the surrogate gap, reflecting the dominant Hessian eigenvalue at small neighborhood radii, which is simple to compute and can be minimized during training. We propose the Surrogate Gap Guided Sharpness-Aware Minimization (GSAM), an advancement over SAM with minimal additional computational cost. GSAM employs a dual-step approach: first, minimizing the perturbed loss similar to SAM, and second, reducing the surrogate gap without affecting the perturbed loss to target regions with low loss and sharpness, thus achieving superior generalization. GSAM is theoretically robust, showing better convergence and empirical generalization improvements, notably a +3.2% gain over SAM and +5.4% over AdamW in ImageNet accuracy for ViT-B/32."
---

