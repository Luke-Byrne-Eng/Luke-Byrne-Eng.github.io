---
layout: paper
title:  "Fine-tuning with Very Large Dropout"
date:   1 Mar 2024
categories: research
paper_url: https://arxiv.org/pdf/2403.00946.pdf
code_url: 
summary: "This study challenges the notion that machine learning practices assume training and testing data have the same distribution. It explores the effectiveness of high dropout rates, as opposed to ensemble techniques, in developing rich data representations suitable for multiple distribution scenarios. These representations surpass those achieved by traditional in-distribution performance regularization and the implicit sparsity induced by common stochastic gradient methods. While training deep networks from scratch with high dropout rates is impractical, fine-tuning pre-trained models under these conditions is feasible and yields better out-of-distribution performance than ensembles and model averaging techniques like model soups. This finding is significant due to the growing relevance of fine-tuning with large pre-trained models, offering insights into the nature of rich representations and the linear characteristics of fine-tuning large networks with small datasets."
---

