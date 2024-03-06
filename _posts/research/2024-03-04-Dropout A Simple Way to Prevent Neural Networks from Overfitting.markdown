---
layout: post
title:  "Dropout: A Simple Way to Prevent Neural Networks from Overfitting"
date:   1 Jan 2014
categories: research
paper_url: https://www.cs.toronto.edu/~rsalakhu/papers/srivastava14a.pdf
code_url: 
summary: "Deep neural networks, while powerful, face overfitting and slow usage issues. Dropout is a technique that addresses these by randomly omitting units during training, leading to an exponential number of thinned networks. This method not only combats overfitting by preventing co-adaptation of units but also simplifies the process at test time through the use of a single network with adjusted weights. Demonstrated across various tasks like vision, speech recognition, and document classification, dropout significantly enhances performance and achieves state-of-the-art results on numerous benchmarks."
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