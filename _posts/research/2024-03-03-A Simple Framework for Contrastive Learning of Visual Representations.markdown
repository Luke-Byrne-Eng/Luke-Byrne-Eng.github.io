---
layout: paper
title:  "A Simple Framework for Contrastive Learning of Visual Representations"
date:   1 Jul 2020
categories: research
paper_url: https://arxiv.org/pdf/2002.05709.pdf
code_url: 
summary: "This paper introduces SimCLR, a straightforward framework for contrastive learning of visual representations, simplifying recent algorithms without needing specialized architectures or a memory bank. It explores key framework components, finding that data augmentation composition, a learnable nonlinear transformation to the contrastive loss, and larger batch sizes with more training steps crucially enhance representation quality. SimCLR significantly surpasses previous self-supervised and semi-supervised learning methods on ImageNet. A linear classifier using SimCLR's self-supervised representations reaches 76.5% top-1 accuracy, a 7% improvement over the prior best and equal to supervised ResNet-50. With only 1% of labels, it achieves 85.8% top-5 accuracy, outdoing AlexNet with 100 times fewer labels."
---

