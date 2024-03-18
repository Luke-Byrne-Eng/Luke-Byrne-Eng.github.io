---
layout: paper
title:  "Penalizing Gradient Norm for Efficiently Improving Generalization in Deep Learning"
date:   26 Jun 2022
categories: research
paper_url: https://arxiv.org/pdf/2202.03599.pdf
code_url: 
summary: "This paper proposes a method to enhance the generalization of deep neural networks (DNNs) by penalizing the gradient norm of the loss function during optimization. By constraining the gradient norm, the optimizers tend to find flat minima, improving generalization. We efficiently implement this method using first-order approximation within the gradient descent framework. Experimental results demonstrate improved generalization across various models and datasets. Additionally, we show that a recent method, sharpness-aware minimization, is a special case of our approach, with our method achieving new state-of-the-art performance on tested tasks."
---

