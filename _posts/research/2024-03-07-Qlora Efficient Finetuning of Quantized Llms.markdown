---
layout: paper
title:  "Qlora: Efficient Finetuning of Quantized Llms"
date:   23 May 2023
categories: research
paper_url: https://arxiv.org/pdf/2305.14314.pdf
code_url: 
summary: "We introduce QLORA, a finetuning method that enables a 65B parameter model to be finetuned on a single 48GB GPU, maintaining 16-bit task performance by utilizing 4-bit quantized language models and Low Rank Adapters (LoRA). Our best-performing model family, Guanaco, surpasses all openly available models on the Vicuna benchmark, achieving 99.3% of ChatGPT's performance with only 24 hours of finetuning on one GPU. QLORA incorporates several memory-saving innovations without compromising performance, including a new 4-bit data type optimized for normally distributed weights, Double Quantization for reduced memory usage, and Paged Optimizers for managing memory spikes. We applied QLORA to finetune over 1,000 models, analyzing performance across various datasets, model types (LLaMA, T5), and scales, demonstrating its ability to achieve state-of-the-art results even with smaller models. Our findings also suggest that GPT-4 evaluations are a viable substitute for human assessments, and question the reliability of current chatbot benchmarks. A detailed comparison with ChatGPT highlights Guanaco's shortcomings. We make our models and 4-bit training code public."
---

