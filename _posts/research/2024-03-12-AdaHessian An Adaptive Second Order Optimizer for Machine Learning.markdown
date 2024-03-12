---
layout: paper
title:  "AdaHessian: An Adaptive Second Order Optimizer for Machine Learning"
date:   29 Apr 2021
categories: research
paper_url: https://arxiv.org/pdf/2006.00719.pdf
code_url: 
summary: "We present AdaHessian, a novel second-order stochastic optimization algorithm that dynamically incorporates the curvature of the loss function via adaptive estimates of the Hessian. Despite the superior convergence properties of second-order methods over first-order methods like SGD and Adam, traditional second-order methods suffer from heavier per-iteration computation and poor accuracy. AdaHessian addresses these issues through innovative approaches, including a fast Hutchinson-based method for low computational overhead in approximating the curvature matrix, a root-mean-square exponential moving average to smooth out variations of the Hessian diagonal, and block diagonal averaging to reduce the variance of Hessian diagonal elements. Empirical results demonstrate that AdaHessian significantly outperforms other adaptive optimization methods, including variants of Adam, across various tasks such as computer vision, natural language processing, and recommendation systems. Specifically, AdaHessian achieves higher accuracy in image classification tasks, outperforms AdamW in transformer models, and achieves superior performance in tasks such as GLUE and recommendation systems. Importantly, AdaHessian demonstrates comparable per-iteration cost to first-order methods and robustness to hyperparameters."
---

