---
layout: paper
title:  "Searching for Activation Functions"
date:   27 Oct 2017
categories: research
paper_url: https://arxiv.org/pdf/1710.05941.pdf
code_url: 
summary: "This study explores the impact of activation functions on deep network training and performance. While Rectified Linear Unit (ReLU) is widely used, alternatives have not consistently outperformed it. We propose using automatic search techniques to discover new activation functions. Through exhaustive and reinforcement learning-based searches, we identify novel functions. Empirical evaluation shows that our best discovered function, Swish (f(x) = x · sigmoid(βx)), performs better than ReLU on deeper models across challenging datasets. Replacing ReLUs with Swish units improves classification accuracy on ImageNet, for example, by 0.9% for Mobile NASNet-A and 0.6% for Inception-ResNet-v2. Swish's simplicity and similarity to ReLU facilitate its adoption in neural networks."
---

