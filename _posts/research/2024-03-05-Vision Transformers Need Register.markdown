---
layout: paper
title:  "Vision Transformers Need Registers"
date:   28 Sep 2023
categories: research
paper_url: https://arxiv.org/pdf/2309.16588
code_url: 
summary: "This paper is effectively a follow-up to DinoV2. The study addresses the issue of artifacts in feature maps of Vision Transformer (ViT) networks, identified as high-norm tokens appearing mainly in low-informative background areas during inference. The authors introduce a straightforward strategy of adding extra tokens to the input sequence of the Vision Transformer, which eliminates these artifacts for both supervised and self-supervised models. This approach not only resolves the artifact issue but also establishes new benchmarks for self-supervised visual models on dense visual prediction tasks, facilitates object discovery with larger models, and results in smoother feature and attention maps for downstream visual processing tasks."
---

