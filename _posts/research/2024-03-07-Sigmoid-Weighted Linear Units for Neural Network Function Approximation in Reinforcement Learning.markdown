---
layout: post
title:  "Sigmoid-Weighted Linear Units for Neural Network Function Approximation in Reinforcement Learning"
date:   2 Nov 2017
categories: research
paper_url: https://arxiv.org/pdf/1702.03118v3.pdf
code_url: 
summary: "This study introduces two new activation functions for neural networks in reinforcement learning, the sigmoid-weighted linear unit (SiLU) and its derivative (dSiLU), and challenges the need for experience replay and separate target networks in deep reinforcement learning. By employing on-policy learning with eligibility traces and softmax action selection, the study achieves state-of-the-art results in stochastic SZ-Tetris and a small-board Tetris using TD(λ) learning and shallow dSiLU network agents. Furthermore, it outperforms the DQN algorithm in the Atari 2600 domain with a deep Sarsa(λ) agent utilizing SiLU and dSiLU hidden units, suggesting a competitive alternative to traditional DQN approaches."
---

<style>
.responsive-pdf-container {
    overflow: hidden;
    padding-top: 141.42%; /* 16:9 Aspect Ratio, adjust as needed */
    position: relative;
}

.responsive-pdf-container iframe {
    border: none;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}
</style>

<a href="{{ page.paper_url }}">{{ page.paper_url }}</a><br>
<a href="{{ page.code_url }}">{{ page.code_url }}</a>

<div class="responsive-pdf-container">
    <iframe src="{{ page.paper_url }}" style="border: none;"></iframe>
</div>