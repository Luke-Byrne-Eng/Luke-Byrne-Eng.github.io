---
layout: paper
title:  "How to decay your learning rate"
date:   23 May 2021
categories: research
paper_url: https://arxiv.org/pdf/2103.12682v1
code_url: 
summary: "Empirical findings suggest that typical fine-tuned learning rate schedules decay the learning rate following weight norm fluctuations. This led to the development of ABEL, an automatic scheduler that adjusts the learning rate based on weight norm changes. ABEL performs comparably to tuned schedules but demonstrates greater robustness to parameter variations. Extensive experiments across various domains reveal that when the weight norm remains stable, simplified schedules yield equivalent performance to complex ones, resembling a constant learning rate with decay towards the end of training."
---

