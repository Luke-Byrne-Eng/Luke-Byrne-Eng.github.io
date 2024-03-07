---
layout: paper
title:  "Loss of Plasticity in Deep Continual Learning"
date:   18 Aug 2023
categories: research
paper_url: https://arxiv.org/pdf/2306.13812.pdf
code_url: https://github.com/shibhansh/loss-of-plasticity
summary: "Modern deep-learning systems, designed for one-time training, struggle in continual-learning environments where training is ongoing. They not only forget previous examples but also lose the ability to learn new ones, known as loss of plasticity. This was demonstrated using MNIST and ImageNet datasets adapted for continual learning. On the 2000th task in ImageNet, accuracy fell from 89% to 77%, similar to a linear network. Various architectures and techniques were tested, with L2-regularization and weight perturbation somewhat mitigating the issue. A new approach, continual backpropagation, which slightly alters backpropagation to periodically reinitialize less-used units, shows promise in maintaining learning ability indefinitely. "
---

