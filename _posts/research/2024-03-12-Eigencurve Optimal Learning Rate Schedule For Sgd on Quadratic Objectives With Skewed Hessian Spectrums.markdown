---
layout: paper
title:  "Eigencurve: Optimal Learning Rate Schedule For Sgd on Quadratic Objectives With Skewed Hessian Spectrums"
date:   14 Jun 2022
categories: research
paper_url: https://arxiv.org/pdf/2110.14109
code_url: 
summary: "Learning rate schedulers are essential in deep neural network training, but there's a gap between practical usage and theoretical understanding. This paper introduces Eigencurve, the first set of learning rate schedules achieving minimax optimal convergence rates for SGD on quadratic objectives with skewed eigenvalue distributions of the Hessian matrix. This condition is common in practice. Experimental results on CIFAR-10 image classification tasks demonstrate Eigencurve's superiority over step decay, particularly with fewer epochs. The theory inspires practical schedulers approximating Eigencurve, resembling cosine decay for some problems while outperforming it in others."
---

