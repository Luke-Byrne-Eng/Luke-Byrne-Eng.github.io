---
layout: paper
title:  "Simple and Scalable Strategies to Continually Pre-train Large Language Models"
date:   13 Mar 2024
categories: research
paper_url: https://arxiv.org/pdf/2403.08763.pdf
code_url: 
summary: "Large language models (LLMs) often require re-training on new data, consuming extensive computational resources. We present an efficient method that combines learning rate re-warming, re-decaying, and data replay, effectively maintaining performance without full re-training. This approach works well across different data distributions, including minor shifts (English→English) and significant shifts (English→German), tested up to 405M and 10B parameter models. Our findings suggest that continual learning strategies can update LLMs with minimal computational cost, rivaling traditional re-training methods. Additionally, we propose alternatives to the cosine learning rate schedule to reduce forgetting, offering more flexibility in learning without a fixed token budget."
---

