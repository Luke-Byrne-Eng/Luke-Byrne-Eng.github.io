---
layout: paper
title:  "Scalable MatMul-free Language Modeling"
date:   18 Jun 2024
categories: research
paper_url: https://arxiv.org/pdf/2406.02528
code_url: 
summary: "The authors eliminate Matrix Multiplication (MatMul) operations in large language models (LLMs), reducing computational costs while maintaining performance at billion-parameter scales. Their MatMul-free models match state-of-the-art Transformers and cut memory usage significantly. Performance gaps narrow with larger models. A GPU-efficient implementation reduces training memory by 61% and inference memory by over 10×. A custom FPGA solution achieves brain-like efficiency at 13W for billion-parameter models, showcasing lightweight operations for future LLM accelerators."
---