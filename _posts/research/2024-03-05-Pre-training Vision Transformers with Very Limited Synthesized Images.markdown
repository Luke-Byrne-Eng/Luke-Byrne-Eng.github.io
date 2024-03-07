---
layout: paper
title:  "Pre-training Vision Transformers with Very Limited Synthesized Images"
date:   31 Jul 2023
categories: research
paper_url: https://arxiv.org/pdf/2307.14710.pdf
code_url: 
summary: "Formula-driven supervised learning (FDSL) utilizes synthetic images from mathematical formulas, like fractals, for pre-training vision transformers, demonstrating competitive performance on various downstream tasks. This study proposes that generating different instances within the same category in FDSL acts as data augmentation. By adopting this approach, we introduce a one-instance fractal database (OFDB) where only a single image per category is needed, outperforming the original method of generating multiple instances. Scaling OFDB to 21,000 categories, we achieve comparable or superior results to models pre-trained on ImageNet-21k in ImageNet-1k fine-tuning, despite OFDB's significantly smaller size of 21k images compared to ImageNet-21k's 14M. This finding suggests the potential of pre-training vision transformers on much smaller datasets."
---

