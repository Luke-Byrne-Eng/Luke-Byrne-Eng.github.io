---
layout: paper
title:  "TinyViT: Fast Pretraining Distillation for
Small Vision Transformers"
date:   21 Jul 2022
categories: research
paper_url: https://arxiv.org/pdf/2207.10666.pdf
code_url: 
summary: "This paper introduces TinyViT, a series of compact and efficient vision transformers (ViTs) designed for devices with limited resources. The authors employ a fast distillation framework to transfer knowledge from large pretrained models to smaller ones during pretraining, using sparsified logits from teacher models to minimize memory and computational costs. TinyViT models are scaled down from larger counterparts under specific computation and parameter limits. Experiments show TinyViT achieves 84.8% top-1 accuracy on ImageNet-1k with just 21M parameters, comparable to Swin-B pretrained on ImageNet-21k but with 4.2 times fewer parameters. With increased image resolution, TinyViT reaches 86.5% accuracy, outperforming Swin-L with only 11% of its parameters, and demonstrates strong transferability across various downstream tasks."
---

