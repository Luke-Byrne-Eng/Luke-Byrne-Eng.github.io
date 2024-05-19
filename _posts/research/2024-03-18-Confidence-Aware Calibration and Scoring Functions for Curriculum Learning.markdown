---
layout: paper
title:  "Confidence-Aware Calibration and Scoring Functions for Curriculum Learning"
date:   29 Jan 2023
categories: research
paper_url: https://arxiv.org/pdf/2301.12589
code_url: 
summary: "State-of-the-art deep neural networks often exhibit over-confidence in predictions, indicating miscalibration. Label Smoothing has been proposed to address this by softening hard targets during training, redistributing part of the probability mass from a ‘one-hot’ label uniformly to all other labels. However, neither model nor human confidence in a label is likely uniformly distributed, as some labels are more likely to be confused than others. This paper integrates model and human confidence with label smoothing, termed Model Confidence LS and Human Confidence LS, to improve model calibration and generalization. The study demonstrates how these confidence scores enhance curriculum learning, a strategy inspired by progressing from easier to harder tasks. Higher confidence scores indicate more recognizable and easier samples, serving as a scoring function to rank samples in curriculum learning. Evaluations using four state-of-the-art architectures for image and text classification, with multi-rater label annotations, show that integrating confidence information in label smoothing and curriculum learning improves both model performance and calibration. The code is available at https://github.com/AoShuang92/Confidence-Calibration-CL."
---

