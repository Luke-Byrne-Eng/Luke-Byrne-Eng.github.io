---
layout: post
title:  "Data is Overrated: Perceptual Metrics Can Lead Learning in the Absence of Training Data"
date:   6 Dec 2023
categories: research
paper_url: https://arxiv.org/pdf/2312.03455.pdf
code_url: 
summary: "Perceptual metrics, designed to replicate human perceptual behavior, are utilized as loss functions in generative models to capture the inherent structure of natural signals like images and audio. This study explores an innovative approach by training a compressive autoencoder on uniform noise instead of natural data in the audio domain. Results demonstrate that using perceptual losses enhances the reconstruction quality of spectrograms and re-synthesized audio at test time compared to standard Euclidean loss, indicating improved generalization to unseen natural signals."
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