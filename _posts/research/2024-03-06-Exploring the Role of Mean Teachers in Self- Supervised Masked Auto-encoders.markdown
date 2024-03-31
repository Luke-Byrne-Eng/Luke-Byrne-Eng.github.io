---
layout: paper
title:  "Exploring the Role of Mean Teachers in Self- Supervised Masked Auto-encoders"
date:   5 Oct 2022
categories: research
paper_url: https://arxiv.org/pdf/2210.02077.pdf
code_url: 
summary: "This paper examines the role of the student/teacher paradigm in masked image modeling (MIM) for self-supervised learning (SSL) with Vision Transformers, particularly in the context of the Masked Auto-Encoder (MAE). Analysis of a simple linear model reveals that the teacher model acts as a conditional momentum regularizer by selectively filtering gradient directions based on feature similarity. Building on this insight, the authors introduce the Reconstruction-Consistent Masked Auto-Encoder (RC-MAE), which integrates an exponential moving average (EMA) teacher with MAE. RC-MAE demonstrates faster convergence, reduced memory requirements, greater robustness, and improved performance on tasks like ImageNet-1K classification, object detection, and instance segmentation compared to the original MAE."
---

