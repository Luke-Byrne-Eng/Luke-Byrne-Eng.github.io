---
layout: paper
title:  "On Separate Normalization in Self-supervised Transformers"
date:   1 Jan 1000
categories: research
paper_url: https://arxiv.org/pdf/2309.12931.pdf
code_url: 
summary: "Self-supervised transformer training methods have shown excellent results in various fields. Unlike previous models like masked autoencoders (MAE) which use a single normalization layer for the class token [CLS] and other tokens, we introduce a novel normalization technique that normalizes the [CLS] token and normal tokens separately. This approach aims to better capture their unique characteristics, improving performance in downstream tasks. Our findings indicate that using separate normalization for [CLS] embeddings results in more effective global context encoding and a more uniform distribution in anisotropic space, leading to a 2.7% average performance boost in image, natural language, and graph learning tasks."
---

