---
layout: paper
title:  "Sim-to-Real 6D Object Pose Estimation via
Iterative Self-training for Robotic Bin Picking"
date:   21 Jul 2022
categories: research
paper_url: https://arxiv.org/pdf/2204.07049.pdf
code_url: 
summary: "6D object pose estimation is crucial for robotic bin-picking and essential for many industrial applications. Annotating custom datasets for each bin-picking scenario is challenging. We introduce an iterative self-training framework for sim-to-real 6D object pose estimation, enhancing cost-effective robotic grasping. We create a photo-realistic simulator for synthesizing virtual data to train an initial pose estimation network. This network, acting as a teacher model, predicts poses on unlabeled real data. We develop an adaptive selection scheme to filter reliable predictions for updating a student model with pseudo labels for real data pose estimation. By iteratively refining the teacher model with the trained student model, we improve the quality of pseudo labels. Our method, tested on a public benchmark and a newly-released dataset, shows an 11.49% and 22.62% ADD(-S) improvement, respectively, and a 19.54% increase in robotic bin-picking success, demonstrating the effectiveness of iterative sim-to-real approaches. Project homepage: www.cse.cuhk.edu.hk/~kaichen/sim2real_pose.html"
---

