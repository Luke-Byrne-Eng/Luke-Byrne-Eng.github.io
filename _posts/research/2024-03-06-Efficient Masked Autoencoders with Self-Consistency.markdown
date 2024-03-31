---
layout: paper
title:  "Efficient Masked Autoencoders with Self-Consistency"
date:   28 Feb 2023
categories: research
paper_url: https://arxiv.org/pdf/2302.14431.pdf
code_url: 
summary: "This paper introduces efficient masked autoencoders with self-consistency (EMAE) to enhance pre-training efficiency and prediction consistency for masked image modeling (MIM). EMAE divides the image into non-overlapping parts, each subject to a random mask with a uniform mask ratio, to perform parallel MIM tasks and generate predictions. A self-consistency module ensures consistent predictions for overlapping masked patches. EMAE improves data utilization and achieves reliable representations, showing superior results on ImageNet with only 300 pre-training epochs under ViT-Base compared to MAE's 1600 epochs. EMAE also demonstrates top-tier transfer performance in various downstream tasks, such as object detection and semantic segmentation."
---

