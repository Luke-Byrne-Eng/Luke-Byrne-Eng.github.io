---
layout: paper
title:  "Efficient Sharpness-Aware Minimization For
Improved Training of Neural Networks"
date:   28 May 2022
categories: research
paper_url: https://arxiv.org/pdf/2110.03141
code_url: 
summary: "Overparametrized Deep Neural Networks (DNNs) can lead to severe generalization errors despite their impressive performances. It's been shown that the sharpness of the loss landscape is related to generalization error, leading to the development of the Sharpness Aware Minimizer (SAM) to improve generalization. However, SAM is computationally costly, doubling the time required compared to basic optimizers like Stochastic Gradient Descent (SGD). This paper introduces the Efficient Sharpness Aware Minimizer (ESAM), enhancing SAM's efficiency without sacrificing its generalization benefits. ESAM incorporates Stochastic Weight Perturbation and Sharpness-Sensitive Data Selection strategies for more efficient training. These methods approximate sharpness by perturbing selected weights and optimize the SAM loss with a carefully chosen subset of data, respectively. Theoretical justifications for these strategies are provided, and extensive testing on CIFAR and ImageNet shows that ESAM reduces the computational overhead of SAM from 100% to 40% while maintaining or improving test accuracies."
---

