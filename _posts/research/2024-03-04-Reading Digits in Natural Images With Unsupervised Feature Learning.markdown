---
layout: post
title:  "Reading Digits in Natural Images With Unsupervised Feature Learning"
date:   1 Jan 2011
categories: research
paper_url: http://ufldl.stanford.edu/housenumbers/nips2011_housenumbers.pdf
code_url: 
summary: "Detecting text in natural images is a challenging task, crucial for various applications. While character recognition in documents is largely solved, recognizing characters in complex scenes, such as photographs, is much harder, with existing methods trailing behind human performance. This paper tackles digit recognition from street level photos, introducing a new dataset of over 600,000 labeled digits from Street View images. We highlight the challenge of digit recognition using hand-designed features and apply unsupervised feature learning methods, demonstrating significant improvements over traditional approaches."
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