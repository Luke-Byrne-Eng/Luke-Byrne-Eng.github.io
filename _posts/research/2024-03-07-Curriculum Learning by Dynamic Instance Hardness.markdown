---
layout: post
title:  "Curriculum Learning by Dynamic Instance Hardness"
date:   6 Dec 2020
categories: research
paper_url: https://proceedings.neurips.cc/paper/2020/file/62000dee5a05a6a71de3a6127a68778a-Paper.pdf
code_url: 
summary: "This paper explores the adaptation of deep neural network (DNN) training using a method called dynamic instance hardness (DIH), which measures a sample's learning difficulty over time. By tracking the exponential moving average of a sample's hardness, DIH provides a stable indicator of learning progress. Early predictions of a sample's DIH allow for prioritizing more challenging samples and deprioritizing easier ones, leading to a DIH guided curriculum learning (DIHCL) approach. DIHCL enhances learning efficiency and model accuracy without extra computational costs, as it leverages data from the training process itself. Tested on 11 datasets, DIHCL surpasses traditional training methods and recent curriculum learning techniques in both efficiency and effectiveness. The implementation is publicly available."
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