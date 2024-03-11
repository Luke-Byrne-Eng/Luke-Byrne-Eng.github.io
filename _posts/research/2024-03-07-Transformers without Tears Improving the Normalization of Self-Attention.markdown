---
layout: paper
title:  "Transformers without Tears:
Improving the Normalization of Self-Attention"
date:   30 Dec 2019
categories: research
paper_url: https://arxiv.org/pdf/1910.05895.pdf
code_url: 
summary: "We propose three normalization-centric modifications to enhance Transformer training. Firstly, we introduce pre-norm residual connections (PRENORM) and smaller initializations, enabling warmup-free, validation-based training with large learning rates. Secondly, we suggest L2 normalization with a single scale parameter (SCALENORM) for faster training and improved performance. Lastly, we reaffirm the efficacy of normalizing word embeddings to a fixed length (FIXNORM). Across five low-resource translation pairs from TED Talks-based corpora, these adjustments consistently yield an average +1.1 BLEU improvement over state-of-the-art bilingual baselines, achieving a new 32.8 BLEU on IWSLT '15 English-Vietnamese. We observe sharper performance curves, more consistent gradient norms, and a linear relationship between activation scaling and decoder depth. Notably, in the high-resource setting (WMT '14 English-German), SCALENORM and FIXNORM maintain competitiveness, whereas PRENORM degrades performance."
---

