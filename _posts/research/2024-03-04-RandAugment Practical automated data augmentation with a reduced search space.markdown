---
layout: paper
title:  "RandAugment: Practical automated data augmentation with a reduced search space"
date:   14 Nov 2019
categories: research
paper_url: https://arxiv.org/pdf/1909.13719.pdf
code_url: 
summary: "Recent advancements have shown the effectiveness of data augmentation in enhancing deep learning model generalization, with automated strategies setting new benchmarks in image classification and object detection. These methods also improved semi-supervised learning and robustness against image corruptions. However, their adoption is hindered by a separate search phase that increases training complexity and computational costs, and they cannot adapt regularization based on model or dataset size. Our work, RandAugment, addresses these issues by reducing the search space, allowing direct training on the target task without a separate proxy task, and enabling customization of regularization strength. It achieves or exceeds all previous automated augmentation methods on various datasets, including a notable accuracy improvement on ImageNet and object detection tasks. RandAugment's interpretable hyperparameter also facilitates exploration of data augmentation's impact across different models and datasets. Code is available online."
---

