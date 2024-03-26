---
layout: paper
title:  "Bootstrap Your Own Latent A New Approach to Self-Supervised Learning"
date:   10 Sep 2020
categories: research
paper_url: https://arxiv.org/pdf/2006.07733.pdf
code_url: https://github.com/google-deepmind/deepmind-research/tree/master/byol
summary: "This paper introduces BYOL, a self-supervised learning method that does not need negative pairs. BYOL uses a teacher student pair of networks, where the teacher is the EMA of the student. The teacher and student are given two differently augmented versionos the input, and the loss is the cross entropy difference between the outputs."
---

