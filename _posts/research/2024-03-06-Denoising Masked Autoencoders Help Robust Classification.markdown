---
layout: paper
title:  "Denoising Masked Autoencoders Help Robust Classification"
date:   7 Mar 2023
categories: research
paper_url: https://arxiv.org/pdf/2210.06983
code_url: 
summary: "This paper introduces Denoising Masked AutoEncoders (DMAE), a self-supervised method for developing robust image classifiers. By corrupting images with Gaussian noise and masking patches, then reconstructing them using a Transformer-based model, DMAE's encoder captures essential semantics resistant to Gaussian noise. This encoder serves as a base for Gaussian smoothed models, enabling the computation of a certified radius for robustness. The DMAE ViT-Base model achieves comparable or superior certified accuracy with fewer parameters than previous approaches, while the ViT-Large model sets a new benchmark on ImageNet. The model also shows high transferability to CIFAR-10, indicating its broad applicability."
---

