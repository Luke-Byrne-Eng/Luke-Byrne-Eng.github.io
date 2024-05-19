---
layout: paper
title:  "CL-MAE: Curriculum-Learned Masked Autoencoders"
date:   28 Feb 2024
categories: research
paper_url: https://arxiv.org/pdf/2308.16572
code_url: 
summary: "This paper proposes a curriculum learning approach that updates the masking strategy of Masked Auto Encoders (MAE) to progressively increase the complexity of the self-supervised reconstruction task. To achieve this, a novel learnable masking module is introduced, capable of generating masks of varying complexities, and integrated into masked autoencoders (MAE). This module is jointly trained with the MAE, adjusting its behavior from partner (optimizing the same reconstruction loss) to adversary (optimizing the opposite loss), with a smooth transition regulated by a factor multiplied with the reconstruction loss. This training procedure creates an easy-to-hard curriculum. The Curriculum-Learned Masked Autoencoder (CL-MAE) is trained on ImageNet and demonstrates superior representation learning compared to MAE. Empirical results on five downstream tasks confirm that curriculum learning can successfully self-supervise masked autoencoders."
---

