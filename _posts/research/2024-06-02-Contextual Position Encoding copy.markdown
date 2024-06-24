---
layout: paper
title:  "Contextual Position Encoding: Learning to Count What’s Important"
date:   30 May 2024
categories: research
paper_url: https://arxiv.org/pdf/2405.18719
code_url: 
summary: "This paper argues that we should not be assigning position encodings naively based only on absolute or relative position, but instead based partly on location and partly on the context. This is acheived via a gating mechanism sigmoid(qk), where q is the current token and k is the target token. Position encodings are incremented as you move away from the current token but only incremented by sigmoid(qk). This is shown to help a lot with counting, copying etc and generalisation to larger contexts than training."
---

