---
layout: post
title:  "Self-Paced Curriculum Learning"
date:   1 Jan 2015
categories: research
paper_url: https://cdn.aaai.org/ojs/9608/9608-13-13136-1-2-20201228.pdf
code_url: 
summary: "Curriculum learning (CL) and self-paced learning (SPL) are methods inspired by the incremental complexity of human and animal learning, with CL using a fixed curriculum based on prior knowledge and SPL adjusting dynamically to the learner's pace but struggling with prior knowledge and overfitting. This paper introduces a unified framework called self-paced curriculum learning (SPCL), blending both methods' strengths by considering prior knowledge and ongoing learning progress through a concise optimization problem. SPCL mimics a collaborative instructor-student learning mode, showing empirical advantages in two tasks."
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