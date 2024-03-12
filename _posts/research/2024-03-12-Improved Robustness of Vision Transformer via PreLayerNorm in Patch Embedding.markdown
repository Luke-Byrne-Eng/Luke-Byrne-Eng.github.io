---
layout: paper
title:  "Improved Robustness of Vision Transformer via PreLayerNorm in Patch Embedding"
date:   16 Nov 2021
categories: research
paper_url: https://arxiv.org/pdf/2111.08413.pdf
code_url: 
summary: "Recent advancements in vision transformers (ViTs) have shown superior performance across diverse visual tasks, surpassing convolutional neural networks (CNNs). Given ViT's distinct architecture, understanding its behavior and reliability is imperative. This paper investigates ViT's robustness by comparing it with CNNs under various image corruptions relevant to real-world vision tasks. While ViT generally exhibits comparable or improved robustness over CNNs, it consistently underperforms in contrast enhancement tasks. Analysis suggests that positional embedding in ViT's patch embedding may malfunction with color scale changes. We propose PreLayerNorm, a modified patch embedding structure, to address this issue and ensure scale-invariant behavior in ViT. ViT with PreLayerNorm demonstrates enhanced robustness across various corruptions, particularly in contrast-varying environments."
---

