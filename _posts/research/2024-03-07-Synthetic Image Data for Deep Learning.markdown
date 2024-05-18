---
layout: paper
title:  "Synthetic Image Data for Deep Learning"
date:   12 Dec 2022
categories: research
paper_url: https://arxiv.org/pdf/2212.06232
code_url: 
summary: "This paper investigates using high-quality rendering software and domain randomization to generate a large synthetic dataset from 3D CAD models of a real vehicle. This synthetic dataset is used to augment limited real training data for image classification and semantic segmentation tasks. While models trained solely on synthetic images showed low accuracy on real validation data, including even small amounts of real data significantly improved performance. Augmenting real training data with synthetic images outperformed using only real images. Furthermore, pretraining models on the synthetic dataset before transfer learning significantly reduced training costs by allowing most of the training to be completed upfront using the synthetic data."
---

