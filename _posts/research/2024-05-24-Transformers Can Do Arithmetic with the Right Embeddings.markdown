---
layout: paper
title:  "Transformers Can Do Arithmetic with the
Right Embeddings"
date:   27 May 2024
categories: research
paper_url: https://arxiv.org/pdf/2405.17399
code_url: 
summary: "Transformers perform poorly on arithmetic due to their inability to track the exact position of each digit within a number. This issue is addressed by adding an embedding to each digit that encodes its position relative to the start of the number. With positions resolved, the study investigates whether transformers can solve arithmetic problems that are larger and more complex than their training data. Training on 20-digit numbers with a single GPU for one day achieves state-of-the-art performance, with up to 99% accuracy on 100-digit addition problems. Additionally, these improvements in numeracy also enhance performance on other multi-step reasoning tasks, including sorting and multiplication."
---

