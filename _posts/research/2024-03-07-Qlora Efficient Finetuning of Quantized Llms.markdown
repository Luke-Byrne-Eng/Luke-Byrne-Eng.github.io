---
layout: paper
title:  "Qlora: Efficient Finetuning of Quantized Llms"
date:   23 May 2023
categories: research
paper_url: https://arxiv.org/pdf/2305.14314.pdf
code_url: 
summary: "This paper introduces QLORA, a finetuning method that enables a 65B parameter model to be finetuned on a single 48GB GPU while maintaining 16-bit task performance. QLORA utilizes 4-bit quantized language models and Low Rank Adapters (LoRA) and incorporates several memory-saving innovations without compromising performance. The authors' best-performing model family, Guanaco, surpasses all openly available models on the Vicuna benchmark, achieving 99.3% of ChatGPT's performance with only 24 hours of finetuning on one GPU. The authors applied QLORA to finetune over 1,000 models and analyzed performance across various datasets, model types, and scales, demonstrating its ability to achieve state-of-the-art results even with smaller models. Their findings suggest that GPT-4 evaluations are a viable substitute for human assessments and question the reliability of current chatbot benchmarks. The authors make their models and 4-bit training code public."
---

