---
layout: paper
title:  "Denoising Masked Autoencoders Help Robust Classification"
date:   7 Mar 2023
categories: research
paper_url: https://arxiv.org/pdf/2210.06983.pdf
code_url: 
summary: "This paper introduces Denoising Masked AutoEncoders (DMAE), a novel self-supervised method for developing robust image classifiers. By corrupting images with Gaussian noise and masking patches, then reconstructing them using a Transformer-based model, DMAE's encoder captures essential semantics resistant to Gaussian noise. It demonstrates that this encoder can serve as a base for Gaussian smoothed models, enabling the computation of a certified radius for robustness. The method, though simple, significantly enhances performance in classification tasks. The DMAE ViT-Base model achieves comparable or superior certified accuracy with far fewer parameters than previous approaches, while the ViT-Large model sets a new benchmark on the ImageNet dataset. The model also shows high transferability to the CIFAR-10 dataset, indicating its broad applicability. Models and code are shared online."
---

