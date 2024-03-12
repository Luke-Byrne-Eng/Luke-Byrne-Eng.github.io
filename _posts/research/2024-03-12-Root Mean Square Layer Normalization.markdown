---
layout: paper
title:  "Root Mean Square Layer Normalization"
date:   16 Oct 2019
categories: research
paper_url: https://arxiv.org/pdf/1910.07467.pdf
code_url: 
summary: "Layer normalization (LayerNorm) enhances deep neural network stability and convergence by re-centering and re-scaling inputs and weight matrices. However, its computational overhead slows networks, particularly RNNs. We introduce RMSNorm, which replaces re-centering with root mean square (RMS) regularization. RMSNorm maintains re-scaling invariance and adapts learning rates implicitly, while being computationally simpler than LayerNorm. We also propose partial RMSNorm (pRMSNorm), estimating RMS from a subset of inputs. Empirical results across various tasks and architectures demonstrate that RMSNorm achieves comparable performance to LayerNorm while reducing running time by 7%∼64%."
---

