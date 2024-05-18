---
layout: paper
title:  "Sim-to-Real 6D Object Pose Estimation via
Iterative Self-training for Robotic Bin Picking"
date:   21 Jul 2022
categories: research
paper_url: https://arxiv.org/pdf/2204.07049
code_url: 
summary: "This paper introduces an iterative self-training framework for sim-to-real 6D object pose estimation to enable cost-effective robotic bin-picking. The authors create a photo-realistic simulator to synthesize virtual data for training an initial pose estimation network (teacher model). This teacher predicts poses on unlabeled real data, and an adaptive selection scheme filters reliable predictions to generate pseudo-labels for training a student model on real data. Iteratively refining the teacher with the student improves pseudo-label quality. Evaluated on public benchmarks and a new dataset, their method shows 11.49% and 22.62% ADD(-S) improvements and a 19.54% increase in bin-picking success, demonstrating the effectiveness of this iterative sim-to-real approach."
---

