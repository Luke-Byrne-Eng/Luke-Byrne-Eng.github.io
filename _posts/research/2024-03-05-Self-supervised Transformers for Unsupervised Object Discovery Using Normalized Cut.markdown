---
layout: paper
title:  "Self-supervised Transformers for Unsupervised Object Discovery Using Normalized Cut"
date:   24 Mar 2022
categories: research
paper_url: https://arxiv.org/pdf/2202.11539.pdf
code_url: 
summary: "This study introduces a graph-based method leveraging self-supervised transformer features, specifically those trained with self-distillation loss (DINO), for object discovery in images. It treats visual tokens as nodes within a weighted graph, where edges represent the similarity between tokens. By applying a normalized graph-cut through spectral clustering and generalized eigendecomposition, it segments foreground objects based on the second smallest eigenvector's indication of a token's likelihood to belong to a foreground object. This straightforward yet effective approach surpasses the state-of-the-art LOST by significant margins on VOC07, VOC12, and COCO20K datasets. Additionally, incorporating a second stage class-agnostic detector (CAD) further enhances performance. The method also extends to unsupervised saliency detection, improving IoU on benchmarks like ECSSD, DUTS, DUT-OMRON, and achieves competitive results in weakly supervised object detection on CUB and ImageNet. The code is available at https://www.m-psi.fr/Papers/TokenCut2022/."
---

