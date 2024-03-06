---
layout: post
title:  "Layer Normalization"
date:   21 Jul 2016
categories: research
paper_url: https://arxiv.org/pdf/1607.06450.pdf
code_url: 
summary: "Training deep neural networks is computationally intensive. Normalizing neuron activities can speed up training, with batch normalization being a popular method that uses mini-batch data to normalize neuron inputs, reducing training time for feed-forward networks. However, its effectiveness varies with mini-batch size and adapting it to recurrent neural networks (RNNs) is challenging. This paper introduces layer normalization as an alternative, normalizing inputs across a single training case's entire layer and maintaining consistent computations across training and testing phases. Layer normalization, which includes adaptive bias and gain for each neuron, stabilizes hidden state dynamics in RNNs and significantly cuts training time, offering a practical solution for both feed-forward and recurrent architectures."
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