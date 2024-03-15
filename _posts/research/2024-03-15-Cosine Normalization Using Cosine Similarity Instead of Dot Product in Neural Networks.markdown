---
layout: paper
title:  "Cosine Normalization: Using Cosine Similarity Instead of Dot Product in
Neural Networks"
date:   23 Oct 2017
categories: research
paper_url: https://arxiv.org/pdf/1702.05870.pdf%EF%BC%89
code_url: 
summary: "In traditional multi-layer neural networks, the dot product between the output and weight vectors of preceding layers serves as input to the activation function, resulting in unbounded outputs and increased variance. This variance can lead to poor generalization and hinder training by exacerbating internal covariate shift. To address this, we propose cosine normalization, which replaces the dot product with cosine similarity or centered cosine similarity (Pearson Correlation Coefficient). We evaluate cosine normalization against batch, weight, and layer normalization in fully-connected and convolutional neural networks across various datasets. Our experiments demonstrate that cosine normalization outperforms other normalization techniques."
---

