---
layout: paper
title:  "Sigmoid Loss for Language Image Pre-Training"
date:   27 sept 2023
categories: research
paper_url: https://arxiv.org/pdf/2303.15343.pdf
code_url: 
summary: "This paper introduces a simple pairwise Sigmoid loss for Language-Image Pre-training (SigLIP), which outperforms standard contrastive learning by not requiring a global normalization of pairwise similarities. This decouples batch size from the loss, and allows the authors to increase the batch size and also improves performance even with smaller batches. Pushing the batch size to one million showed diminishing returns, with 32k being a good middle ground."
---

