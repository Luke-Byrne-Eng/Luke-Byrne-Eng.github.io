---
layout: paper
title:  "When to Learn What: Model-Adaptive Data Augmentation Curriculum"
date:   30 Sep 2023
categories: research
paper_url: https://arxiv.org/pdf/2309.04747
code_url: 
summary: "Data augmentation (DA) improves neural network generalization by enforcing invariances and symmetries to predefined transformations applied to input data. However, fixed augmentation policies affect samples differently at various training stages, and existing approaches cannot adapt policies to individual samples and the training model. This paper proposes Model-Adaptive Data Augmentation (MADAug) which trains an augmentation policy network to determine when to learn what. Unlike previous work, MADAug selects augmentation operators for each input image with a model-adaptive policy that varies between training stages, creating an optimized data augmentation curriculum. The policy is trained using a bi-level optimization scheme to minimize validation-set loss of a model trained with policy-produced augmentations. Extensive evaluations on multiple image classification tasks and network architectures show that MADAug outperforms or matches existing DA approaches, enhances fairness by improving all classes, particularly the difficult ones, and performs better when transferred to fine-grained datasets. Additionally, the auto-optimized policy in MADAug gradually increases perturbations, forming an easy-to-hard curriculum."
---

