---
layout: paper
title:  "Masked Autoencoders Are Scalable Vision Learners"
date:   19 Dec 2021
categories: research
paper_url: https://arxiv.org/pdf/2111.06377.pdf
code_url: 
summary: "This paper presents masked autoencoders (MAE) as efficient and scalable self-supervised learners for computer vision. The MAE methodology involves masking random patches of an input image and reconstructing the missing pixels. This approach is underpinned by two key designs: an asymmetric encoder-decoder architecture, where the encoder processes only visible patches, and a lightweight decoder reconstructs the image using the latent representation and mask tokens. Additionally, masking a significant portion of the input image, such as 75%, creates a challenging yet informative self-supervisory task. These innovations allow for the efficient training of large models, tripling training speed and enhancing accuracy. A standout result is a vanilla ViT-Huge model reaching top accuracy (87.8%) on ImageNet-1K data among similar methods. Moreover, the model's transfer performance in downstream tasks surpasses that of supervised pre-training, indicating a promising scaling potential."
---

