---
layout: paper
title:  "AdaSAM: Boosting Sharpness-Aware Minimization with Adaptive Learning Rate and Momentum for Training Deep Neural Networks"
date:   1 Mar 2023
categories: research
paper_url: https://arxiv.org/pdf/2303.00565
code_url: 
summary: "The Sharpness Aware Minimization (SAM) optimizer, known for enhancing the generalization of deep neural networks by introducing extra perturbation steps, is further developed into AdaSAM by integrating adaptive learning rates and momentum acceleration. Although AdaSAM has been empirically applied to large-scale networks, a theoretical understanding of its performance, considering the complexity of its components, was lacking. This study presents a theoretical analysis of AdaSAM's convergence in stochastic non-convex settings, demonstrating a convergence rate of O(1/√bT) that scales linearly with mini-batch size. By introducing a delayed second-order momentum term, the study successfully decouples and analyzes the intertwined effects of stochastic gradients, adaptive learning rates, and perturbations. This is the first work to offer a detailed convergence rate for SAM with adaptive mechanisms. Experimental results on various NLP tasks indicate AdaSAM's superior performance over SGD, AMSGrad, and SAM optimizers."
---

