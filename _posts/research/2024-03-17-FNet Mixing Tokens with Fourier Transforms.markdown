---
layout: paper
title:  "FNet: Mixing Tokens with Fourier Transforms"
date:   26 May 2022
categories: research
paper_url: https://arxiv.org/pdf/2105.03824
code_url: 
summary: "We demonstrate that Transformer encoder architectures can be accelerated with minimal impact on accuracy by substituting self-attention sublayers with simple linear transformations. Remarkably, using a standard Fourier Transform instead of the self-attention sublayer in a Transformer encoder achieves 92-97% of BERT models' accuracy on the GLUE benchmark, while training 80% faster on GPUs and 70% faster on TPUs for standard 512 input lengths. Our FNet model significantly outperforms in speed at longer input lengths, matching the accuracy of the most accurate models on the Long Range Arena benchmark and surpassing the fastest models in speed across all sequence lengths on GPUs and shorter lengths on TPUs. Additionally, FNet is lightweight in memory use and exceptionally efficient in smaller sizes, outperforming Transformer models under the same speed and accuracy constraints."
---

