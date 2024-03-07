---
layout: paper
title:  "Understanding Self-Supervised Pretraining with Part-Aware Representation Learning"
date:   23 Jan 2024
categories: research
paper_url: https://arxiv.org/pdf/2301.11915.pdf
code_url: 
summary: "This paper explores self-supervised pretraining by examining how these methods learn part-aware representations, motivated by the use of random views in contrastive learning and random masked patches in masked image modeling, which often focus on object parts. It describes contrastive learning as transforming part representations into whole object representations and masked image modeling as inferring masked object parts from visible ones, suggesting these methods predispose encoders to recognize object parts. Through empirical comparison of off-the-shelf encoders pretrained with various methods on object- and part-level recognition, it is found that while fully-supervised models excel in object-level recognition, self-supervised models, particularly those using contrastive learning and masked image modeling, perform better in part-level recognition. Combining contrastive learning and masked image modeling further enhances performance."
---

