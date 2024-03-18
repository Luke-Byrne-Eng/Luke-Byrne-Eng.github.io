---
layout: paper
title:  "Neural Network Diffusion"
date:   20 Feb 2024
categories: research
paper_url: https://arxiv.org/pdf/2402.13144.pdf
code_url: 
summary: "Diffusion models, known for their success in image and video generation, can also generate high-performing neural network parameters, as demonstrated in this study. By employing a simple combination of an autoencoder and a standard latent diffusion model, our method involves extracting latent representations of network parameters, which are then synthesized from random noise by the diffusion model. These new representations, processed through the autoencoder's decoder, serve as fresh network parameters. Tested across various architectures and datasets, this diffusion approach consistently produces models with comparable or superior performance to traditionally trained networks at minimal extra cost. Importantly, the generated models show distinct performance differences from the trained ones, suggesting further exploration into the versatile applications of diffusion models."
---

