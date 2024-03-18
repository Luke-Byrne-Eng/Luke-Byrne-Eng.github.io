---
layout: paper
title:  "Sharpness-Aware Training for Free"
date:   2 Mar 2023
categories: research
paper_url: https://arxiv.org/pdf/2205.14083.pdf
code_url: 
summary: "Modern deep neural networks (DNNs) excel in performance but often suffer from over-parameterization, leading to increased generalization error without tailored training strategies. Sharpness-Aware Minimization (SAM) has proven effective in reducing generalization error by minimizing sharpness in the loss landscape. However, SAM incurs a significant computational overhead. This paper introduces Sharpness-Aware Training for Free (SAF), which mitigates sharpness at nearly zero additional computational cost. SAF achieves this by preventing sudden drops in loss within sharp local minima during weight updates. A novel trajectory loss, based on KL-divergence between current and past DNN outputs, replaces SAM's sharpness measure, guiding convergence towards flat minima for enhanced generalization. Empirical results demonstrate SAF's effectiveness on ImageNet with comparable computational efficiency to the base optimizer."
---

