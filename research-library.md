---
layout: page
title: Research Library
permalink: /research-library/
---

An interconnected library of papers I've read.

<h1>{{ page.title }}</h1>
<ul>
  {% for post in site.categories.research %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <br>{{ post.date | date: "%B %d, %Y" }}
      <br>{{ post.summary }}
    </li>
  {% endfor %}
</ul>
