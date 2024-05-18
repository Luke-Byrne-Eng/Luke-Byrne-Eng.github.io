---
layout: paper
title:  "On Layer Normalization in the Transformer Architectur"
date:   29 Jun 2020
categories: research
paper_url: https://arxiv.org/pdf/2002.04745
code_url: 
summary: "This paper investigates the importance of the warm-up stage in training transformers, and the impact of layer normalization placement. Using mean field theory, the authors demonstrate that the original Post-LN Transformer's design results in large initial gradients, necessitating a warm-up stage for stability. Conversely, placing layer normalization inside residual blocks, as seen in Pre-LN Transformers, stabilizes initial gradients, allowing the elimination of the warm-up stage. Experiments reveal that Pre-LN Transformers achieve comparable performance to traditional models with less training time and fewer hyper-parameters across various applications."
---

