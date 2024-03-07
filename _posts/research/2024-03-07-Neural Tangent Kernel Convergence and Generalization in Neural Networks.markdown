---
layout: paper
title:  "Neural Tangent Kernel: Convergence and Generalization in Neural Networks"
date:   10 Feb 2020
categories: research
paper_url: https://arxiv.org/pdf/1806.07572.pdf
code_url: 
summary: "Artificial neural networks (ANNs) are shown to be equivalent to Gaussian processes at initialization in the infinite-width limit, connecting them to kernel methods. It's demonstrated that ANNs' behavior during training can be described using a new kernel, the Neural Tangent Kernel (NTK), which governs how the network's function evolves by following the kernel gradient of a convex functional cost during gradient descent. The NTK, initially random, stabilizes to a constant in the infinite-width limit, allowing the study of ANNs in function space. Positive-definiteness of the limiting NTK, necessary for training convergence, is proven under certain conditions. For least-squares regression, it's shown that the network function follows a linear differential equation during training, with convergence speed influenced by the NTK's principal components, supporting early stopping. Numerical studies on the NTK in wide networks confirm these theoretical findings."
---

