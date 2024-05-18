---
layout: paper
title:  "On the Maximum Hessian Eigenvalue and Generalization"
date:   23 May 2023
categories: research
paper_url: https://arxiv.org/pdf/2206.10654
code_url: 
summary: "This study investigates the relationship between training interventions and the generalization of deep networks. While previous research suggests that flatter solutions generalize better than sharper ones, particularly measured by λmax, the largest eigenvalue of the Hessian of the loss, this paper challenges this notion. Through experiments, we demonstrate that larger learning rates reduce λmax for all batch sizes but do not consistently improve generalization. Additionally, scaling batch size and learning rate simultaneously can change λmax without affecting generalization. Sharpness-Aware Minimization (SAM) produces smaller λmax but does not consistently enhance generalization, especially with larger batch sizes. Excessive dropout probabilities can degrade generalization, despite promoting smaller λmax. Batch normalization, while not consistently reducing λmax, still improves generalization. These findings question λmax's role in explaining generalization in neural networks, highlighting the limits of its explanatory power."
---

