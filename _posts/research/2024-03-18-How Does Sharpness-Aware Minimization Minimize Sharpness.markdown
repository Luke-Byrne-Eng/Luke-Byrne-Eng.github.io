---
layout: paper
title:  "How Does Sharpness-Aware Minimization Minimize Sharpness?"
date:   5 Jan 2023
categories: research
paper_url: https://arxiv.org/pdf/2211.05729.pdf
code_url: 
summary: "Sharpness-Aware Minimization (SAM) enhances deep neural networks' generalization across various settings. Although SAM aims to penalize model sharpness using a computationally efficient approach, its exact operational mechanism and the sharpness notion it regularizes remain unclear, partly due to differing sharpness concepts used in its theoretical framework and empirical validation. This study identifies the precise sharpness concept SAM regulates and explains its mechanism. It reveals that the combined effect of SAM's two-step approximations, despite being individually misleading, correctly improves generalization when using full-batch gradients. Moreover, we demonstrate that the stochastic SAM version indeed regularizes a third sharpness notion, aligning more closely with practical performance. This effectiveness is attributed to the gradient's alignment with the Hessian's top eigenvector under SAM."
---

