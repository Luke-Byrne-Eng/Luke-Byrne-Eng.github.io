---
layout: paper
title:  "Large Batch Training of Convolutional Networks"
date:   13 Sept 2017
categories: research
paper_url: https://arxiv.org/abs/1708.03888
code_url: 
summary: "To expedite the training of large convolutional networks, computational units are added and trained with data-parallel synchronous Stochastic Gradient Descent (SGD) across units, increasing batch size with node count. However, larger batch sizes can reduce model accuracy. The existing method of large batch training—linear learning rate scaling with warm-up—is not universally effective and may cause training divergence. To address these challenges, we introduce a novel training algorithm, Layer-wise Adaptive Rate Scaling (LARS), enabling us to train Alexnet with a batch size of 8K and Resnet-50 with a batch size of 32K, without compromising accuracy."
---

