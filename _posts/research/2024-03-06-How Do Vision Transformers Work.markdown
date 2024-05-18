---
layout: paper
title:  "How Do Vision Transformers Work"
date:   8 jun 2022
categories: research
paper_url: https://arxiv.org/pdf/2202.06709
code_url: 
summary: "This study explores the operational mechanics of multi-head self-attentions (MSAs) and Vision Transformers (ViTs). The authors find that MSAs enhance accuracy and generalization by smoothing loss landscapes, attributed more to data specificity than managing long-range dependencies. ViTs, however, grapple with non-convex losses, mitigated by large datasets and specific smoothing techniques. The research contrasts MSAs and convolutional layers (Convs), noting their complementary nature as low-pass and high-pass filters, respectively. Multi-stage neural networks are found to function like a series of small models, with MSAs crucial for predictions at stage ends. The study introduces AlterNet, a model where Conv blocks are substituted with MSA blocks at stage ends, achieving superior performance over CNNs across both large and small data scenarios."
---

