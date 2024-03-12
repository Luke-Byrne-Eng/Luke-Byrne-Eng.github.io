---
layout: paper
title:  "Don't Decay the Learning Rate, Increase the Batch Size"
date:   1 Nov 2017
categories: research
paper_url: https://arxiv.org/pdf/1711.00489.pdf
code_url: 
summary: "This study demonstrates that increasing the batch size during training achieves similar learning outcomes as the common practice of decaying the learning rate, applicable to stochastic gradient descent and its variants, including with momentum and Adam optimization. This approach not only matches test accuracies within the same number of epochs but also enhances parallelism and reduces training time due to fewer parameter updates. Efficiency can be further improved by adjusting the learning rate and batch size proportionally, and although increasing the momentum coefficient and scaling the batch size accordingly may slightly lower test accuracy, it enables the use of large batch training without needing to tune hyper-parameters. Using these methods, ResNet-50 was trained on ImageNet to a 76.1% validation accuracy in less than 30 minutes."
---

