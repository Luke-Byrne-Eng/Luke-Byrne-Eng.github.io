---
layout: paper
title:  "Understanding and Improving Layer Normalization"
date:   Dec 8 2019
categories: research
paper_url: https://proceedings.neurips.cc/paper_files/paper/2019/file/2f4fe03d77724a7217006e5d16728874-Paper.pdf
code_url: 
summary: "Layer normalization (LayerNorm) enhances gradient smoothness, accelerates training, and improves generalization accuracy. While its effectiveness has been attributed to forward normalization in previous studies, our research reveals that re-centering and re-scaling backward gradients through derivatives of mean and variance play a crucial role. Moreover, we find that parameters like bias and gain in LayerNorm exacerbate overfitting and are often ineffective. Experiments demonstrate that a simplified version of LayerNorm (LayerNorm-simple) without bias and gain outperforms traditional LayerNorm on multiple datasets, achieving state-of-the-art results in En-Vi machine translation. To mitigate overfitting, we introduce Adaptive Normalization (AdaNorm), which replaces bias and gain with a new transformation function. Experimental results indicate that AdaNorm outperforms LayerNorm on the majority of datasets, suggesting its efficacy in addressing overfitting concerns."
---

