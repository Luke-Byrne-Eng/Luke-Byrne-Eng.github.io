---
layout: paper
title:  "On Layer Normalization in the Transformer Architecture"
date:   29 Jun 2020
categories: research
paper_url: https://arxiv.org/pdf/2002.04745.pdf
code_url: 
summary: "The Transformer is widely used in natural language processing. Training it typically requires a carefully designed learning rate warm-up stage, crucial for performance but slowing optimization and requiring more hyperparameter tuning. We provide theoretical insights into the necessity of the warm-up stage, demonstrating that the location of layer normalization affects gradient behavior. For Post-LN Transformers, with layer normalization between residual blocks, large gradients near the output layer at initialization make training unstable without warm-up. Conversely, for Pre-LN Transformers, with layer normalization inside residual blocks, gradients are well-behaved, suggesting the removal of the warm-up stage. Experimental results show that Pre-LN Transformers without warm-up achieve comparable performance with less training time and hyperparameter tuning."
---

