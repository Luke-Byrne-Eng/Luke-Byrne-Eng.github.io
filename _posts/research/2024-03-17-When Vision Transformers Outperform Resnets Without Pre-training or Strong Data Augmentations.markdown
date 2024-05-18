---
layout: paper
title:  "When Vision Transformers Outperform Resnets Without Pre-training or Strong Data Augmentations"
date:   13 Mar 2020
categories: research
paper_url: https://arxiv.org/pdf/2106.01548
code_url: 
summary: "This paper explores the potential of Vision Transformers (ViTs) and MLP-Mixers to replace traditional neural architectures, which rely heavily on hand-wired features, by using a general-purpose approach. Despite previous models requiring massive datasets and strong data augmentations, they still faced optimization issues, such as sensitivity to initialization and learning rates. Through examining loss geometry, the study aims to enhance data efficiency and generalization of these models. Findings reveal that the models tend to converge to extremely sharp local minima. The application of a sharpness-aware optimizer significantly boosts the accuracy and robustness of ViTs and MLP-Mixers across a range of tasks, including supervised, adversarial, contrastive, and transfer learning, achieving substantial improvements in accuracy on ImageNet with simple preprocessing techniques. The improved performance is attributed to sparser active neurons in the initial layers, allowing ViTs to surpass the performance of similarly sized ResNets on ImageNet without the need for large-scale pre-training or intensive data augmentations."
---

