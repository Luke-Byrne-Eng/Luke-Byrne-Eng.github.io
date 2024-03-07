---
layout: paper
title:  "When Does Label Smoothing Help?"
date:   10 Jun 2020
categories: research
paper_url: https://arxiv.org/pdf/1906.02629.pdf
code_url: 
summary: "Label smoothing, which blends hard targets with a uniform distribution across labels, enhances the generalization and learning pace of multi-class neural networks. This technique is used in top models for image classification, language translation, and speech recognition, as it prevents networks from becoming overly confident. Despite its popularity, the underlying mechanisms of label smoothing remain elusive. Our findings suggest that label smoothing not only boosts generalization but also enhances model calibration, benefiting beam-search processes. However, it reduces the effectiveness of knowledge distillation when a teacher network employs label smoothing. We demonstrate that label smoothing encourages tighter clustering of same-class examples in the penultimate layer, impacting the model's ability to capture class resemblances necessary for distillation but not affecting generalization or prediction calibration."
---

