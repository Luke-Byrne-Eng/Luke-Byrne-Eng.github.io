---
layout: paper
title:  "Gradient Norm Aware Minimization Seeks First-Order Flatness and Improves Generalization"
date:   4 Jul 2023
categories: research
paper_url: https://arxiv.org/pdf/2303.03108.pdf
code_url: 
summary: "Recent advancements have highlighted the effectiveness of flat minima in enhancing generalization, particularly through Sharpness-Aware Minimization (SAM). However, existing definitions of flatness, such as zeroth-order flatness, have limitations in discerning between minima with low and high generalization errors. To address this, we propose first-order flatness, which considers maximal gradient norm within a perturbation radius. We introduce Gradient norm Aware Minimization (GAM) as a novel training approach to achieve uniformly small curvature across all directions. Experimental results demonstrate GAM's ability to enhance generalization compared to standard optimizers like SGD and AdamW across various datasets and networks. Moreover, GAM facilitates SAM in identifying flatter minima, leading to improved generalization."
---

