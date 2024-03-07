---
layout: paper
title:  "Vision Transformers Need Registers"
date:   28 Sep 2023
categories: research
paper_url: https://arxiv.org/pdf/2309.16588.pdf
code_url: 
summary: "This study addresses the issue of artifacts in feature maps of both supervised and self-supervised Vision Transformer (ViT) networks, identified as high-norm tokens appearing mainly in low-informative background areas during inference. These tokens, used for internal computations, lead to discrepancies in visual representations. We introduce a straightforward yet effective strategy, adding extra tokens to the input sequence of the Vision Transformer, which successfully eliminates these artifacts for both types of models. This approach not only resolves the artifact issue but also establishes new benchmarks for self-supervised visual models on dense visual prediction tasks. It facilitates object discovery with larger models and results in smoother feature and attention maps for downstream visual processing tasks"
---

