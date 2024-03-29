---
layout: paper
title:  "FixMatch: Simplifying Semi-Supervised Learning with Consistency and Confidence"
date:   21 Jan 2020
categories: research
paper_url: https://arxiv.org/ftp/arxiv/papers/2001/2001.07685.pdf
code_url: 
summary: "Semi-supervised learning (SSL) utilizes unlabeled data to boost model performance but often at the expense of increased complexity. This paper introduces FixMatch, a streamlined SSL algorithm that simplifies existing methods. FixMatch uses a model's predictions on weakly-augmented unlabeled images to generate pseudo-labels, which are only used if they are highly confident. The model then learns from these pseudo-labels using strongly-augmented versions of the images. Remarkably, FixMatch demonstrates superior performance on several SSL benchmarks, achieving 94.93% accuracy on CIFAR-10 with 250 labels and 88.61% accuracy with only 40 labels. An in-depth ablation study highlights the key factors behind FixMatch's effectiveness. The code is publicly available."
---

