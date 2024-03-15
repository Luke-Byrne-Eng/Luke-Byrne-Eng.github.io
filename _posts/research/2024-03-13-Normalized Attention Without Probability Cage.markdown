---
layout: paper
title:  "Normalized Attention Without Probability Cage"
date:   19 May 2020
categories: research
paper_url: https://arxiv.org/pdf/2005.09561.pdf
code_url: 
summary: "Softmax-attention architectures, especially popularized by Transformers, have seen significant advancements in various tasks. However, the geometric implications of softmax-attention remain underexplored. In this study, we demonstrate limitations arising from constraining attention weights to the probability simplex and its impact on the convex hull of value vectors. We reveal sequence length-dependent biases in Transformers towards token isolation at initialization and compare them with max- and sum-pooling, which are strong but often overlooked baselines. To address these issues, we propose a novel approach of replacing softmax with normalization in self-attention, resulting in a robust and widely applicable architecture. Our findings are supported by empirical results from over 25,000 trained models, and all results and implementations are publicly available."
---

