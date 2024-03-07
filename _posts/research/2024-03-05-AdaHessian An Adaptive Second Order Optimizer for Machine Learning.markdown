---
layout: paper
title:  "AdaHessian: An Adaptive Second Order Optimizer for Machine Learning"
date:   29 Apr 2021
categories: research
paper_url: https://arxiv.org/pdf/2006.00719.pdf
code_url: 
summary: "AdaHessian is a novel second-order stochastic optimization algorithm that dynamically incorporates the curvature of the loss function through adaptive Hessian estimates, offering superior convergence properties compared to first-order methods like SGD and Adam. Traditional second-order methods face challenges in computation and accuracy, which AdaHessian addresses through innovative techniques: a fast Hutchinson-based method for curvature matrix approximation, a root-mean-square exponential moving average for Hessian diagonal variation smoothing, and block diagonal averaging for variance reduction. AdaHessian sets new benchmarks, outperforming adaptive methods across computer vision (CV), natural language processing (NLP), and recommendation systems. Key achievements include significantly higher accuracy on CIFAR10 and ImageNet, improved BLEU scores and perplexity (PPL) for NLP tasks, better performance on the GLUE benchmark, and superior results on the Criteo Ad Kaggle dataset compared to leading algorithms like AdamW and Adagrad. AdaHessian maintains a competitive computation cost per iteration similar to first-order methods and demonstrates robustness towards hyperparameter settings. The algorithm is open-sourced for public use."
---

