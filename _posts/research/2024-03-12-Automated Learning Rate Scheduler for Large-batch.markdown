---
layout: paper
title:  "Automated Learning Rate Scheduler for Large-batch"
date:   13 Jul 2021
categories: research
paper_url: https://arxiv.org/pdf/2107.05855.pdf
code_url: 
summary: "Large-batch training is crucial for deep learning with large datasets and models, but requires specific learning rate (LR) schedules for optimal performance, especially under limited training epochs. This work introduces an automated LR scheduling algorithm for large-batch neural network training within a fixed epoch budget, consisting of adaptive warmup and predefined decay phases. The LR is dynamically adjusted based on training loss monitored through Gaussian process smoothing, facilitating low computational overhead. When integrated with adaptive stochastic optimizers like AdamP and LAMB, this scheduler eliminates the need for extensive hyperparameter tuning and achieves competitive or superior results on various image classification tasks across different batch sizes and architectures."
---

