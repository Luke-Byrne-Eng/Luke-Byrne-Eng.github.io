---
layout: paper
title:  "An Image is Worth More Than 16×16 Patches: Exploring Transformers on Individual Pixels"
date:   13 Jun 2024
categories: research
paper_url: https://arxiv.org/pdf/2406.09415
code_url: 
summary: "The authors challenge the necessity of locality as an inductive bias in computer vision architectures. They find that vanilla Transformers, treating each pixel as a token, achieve high performance across object classification, self-supervised learning, and image generation tasks. This contrasts with Vision Transformers (ViT) that use 16×16 patches. Despite being less computationally practical, their Pixel Transformer (PiT) demonstrates that eliminating locality can yield better results, suggesting that locality is not essential for vision tasks. This finding urges the community to reconsider locality when designing future neural architectures for computer vision."
---