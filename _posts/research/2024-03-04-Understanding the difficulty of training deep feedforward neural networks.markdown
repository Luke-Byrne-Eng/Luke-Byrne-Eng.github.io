---
layout: paper
title:  "Understanding the difficulty of training deep feedforward neural networks"
date:   31 Mar 2010
categories: research
paper_url: https://proceedings.mlr.press/v9/glorot10a/glorot10a.pdf
code_url: 
summary: "Before 2006, deep multi-layer neural networks were difficult to train, but recent algorithms have enabled successful training, showing that deeper architectures outperform shallower ones. These advancements were achieved with new initialization or training mechanisms. This study aims to understand why standard gradient descent from random initialization struggles with deep neural networks, to improve upon current successes and develop better future algorithms. It investigates the impact of non-linear activation functions, finding the logistic sigmoid activation unsuitable for deep networks due to saturation issues in top hidden layers. It discovers that saturated units can desaturate over time, which explains training plateaus. A new non-linearity that saturates less is suggested as beneficial. The study also examines how activations and gradients change across layers and during training, proposing a new initialization scheme for faster convergence, highlighting the importance of the singular values of the Jacobian associated with each layer being close to 1."
---

