---
layout: paper
title:  "DiffBIR: Towards Blind Image Restoration with Generative Diffusion Prior"
date:   29 Aug 2023
categories: research
paper_url: https://arxiv.org/pdf/2308.15070.pdf
code_url: 
summary: "We introduce DiffBIR, a framework using pretrained text-to-image diffusion models for blind image restoration. It consists of a two-stage pipeline: initially, we pretrain a restoration module on various degradations to enhance real-world applicability. Then, we use latent diffusion models for realistic restoration, including a novel injective modulation sub-network, LAControlNet, for fine-tuning, and employ pre-trained Stable Diffusion for its generative capabilities. Additionally, we provide a controllable module for users to adjust quality and fidelity during the denoising process. Our extensive tests show DiffBIR's superiority in blind image super-resolution and face restoration tasks across synthetic and real-world datasets. The code is available online."
---

