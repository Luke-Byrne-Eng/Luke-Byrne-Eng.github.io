---
layout: paper
title:  "Exponentially Faster Language Modeling"
date:   21 Nov 2023
categories: research
paper_url: https://arxiv.org/pdf/2311.10770
code_url: 
summary: "UltraFastBERT, a BERT variant, operates with just 0.3% of its neurons—selectively using 12 out of 4095 neurons per layer—for inference, matching the performance of similar models. It replaces conventional feedforward networks with fast feedforward networks (FFFs) to achieve this efficiency. Although fully efficient conditional neural execution isn't yet practical, we offer a high-level CPU code that achieves a 78x speedup and a PyTorch implementation with a 40x speedup over standard batched feedforward inference."
---

