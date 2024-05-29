---
layout: paper
title:  "xLSTM: Extended Long Short-Term Memory"
date:   7 May 2024
categories: research
paper_url: https://arxiv.org/pdf/2405.04517
code_url: 
summary: "LSTMs were introduced in the 1990's, and were used as part of the first Large Language Models (LLMs). Transformers have since passed LSTMs at scale. This study explores scaling LSTMs to billions of parameters using modern LLM techniques while addressing LSTM limitations. It introduces exponential gating with normalization and stabilization techniques and modifies the LSTM memory structure, creating (i) sLSTM with scalar memory, scalar update, and new memory mixing, and (ii) mLSTM with fully parallelizable matrix memory and covariance update. These extensions form xLSTM blocks, residually stacked into xLSTM architectures, enabling xLSTMs to perform comparably to state-of-the-art Transformers and State Space Models in performance and scaling."
---

