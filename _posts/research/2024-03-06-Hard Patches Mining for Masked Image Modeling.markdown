---
layout: paper
title:  "Hard Patches Mining for Masked Image Modeling"
date:   12 Apr 2023
categories: research
paper_url: https://arxiv.org/pdf/2304.05919.pdf
code_url: 
summary: "Masked image modeling (MIM) is a promising approach for learning scalable visual representations by focusing on predicting the contents of masked patches, with performance depending on mask strategies. We propose a novel framework, Hard Patches Mining (HPM), for MIM pre-training that goes beyond simply solving given problems. HPM aims for the model to also generate more challenging tasks for itself, akin to a teacher-student dynamic. It uses reconstruction loss as a metric for task difficulty and incorporates an auxiliary loss predictor to determine which patches to mask based on predicted patch-wise losses, using a strategy to avoid overfitting. Experiments show HPM's effectiveness in creating challenging masked images and enhancing representation quality through the loss prediction objective, highlighting its ability to identify and learn from hard-to-reconstruct areas."
---

