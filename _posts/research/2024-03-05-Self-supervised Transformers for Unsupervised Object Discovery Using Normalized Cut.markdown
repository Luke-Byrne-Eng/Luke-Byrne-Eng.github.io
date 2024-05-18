---
layout: paper
title:  "Self-supervised Transformers for Unsupervised Object Discovery Using Normalized Cut"
date:   24 Mar 2022
categories: research
paper_url: https://arxiv.org/pdf/2202.11539
code_url: 
summary: "This paper presents a graph-based method for object discovery in images using self-supervised transformer features, specifically those trained with self-distillation loss (DINO). The authors treat visual tokens as nodes within a weighted graph, with edges representing similarity between tokens. By applying a normalized graph-cut through spectral clustering and generalized eigendecomposition, they segment foreground objects based on the second smallest eigenvector. The method outperforms the state-of-the-art LOST on VOC07, VOC12, and COCO20K datasets, and incorporating a second stage class-agnostic detector (CAD) further improves performance. The approach also extends to unsupervised saliency detection and achieves competitive results in weakly supervised object detection on CUB and ImageNet."
---

