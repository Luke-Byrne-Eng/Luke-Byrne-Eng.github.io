---
layout: page
title: null
permalink: /art/
---

Here are some weird digital art projects I'm working on:

<h1>{{ page.title }}</h1>
<ul>
  {% for post in site.categories.art %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      - {{ post.date | date: "%B %d, %Y" }}
      <br>
      {{ post.summary }}
    </li>
  {% endfor %}
</ul>