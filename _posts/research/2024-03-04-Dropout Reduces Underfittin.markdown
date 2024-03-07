---
layout: paper
title:  "Dropout Reduces Underfittin"
date:   31 May 2023
categories: research
paper_url: https://arxiv.org/pdf/2303.01500.pdf
code_url: 
summary: "Dropout, introduced by Hinton et al. in 2012, is a well-known technique for preventing overfitting in neural networks. This study reveals that early application of dropout can also prevent underfitting by reducing the directional variance of gradients across mini-batches and aligning them with the full dataset's gradient, which improves the stability of SGD training. We introduce early dropout where dropout is applied only during the initial training phases, and late dropout for controlling overfitting by activating dropout in later training stages. Our experiments across ImageNet and other vision tasks show these approaches enhance generalization accuracy. This suggests more exploration into regularization techniques in deep learning could be beneficial. The code is available on GitHub"
---

