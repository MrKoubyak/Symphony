---
permalink: /pages/
layout: default
title: Pages
excerpt: All our articles
image: /assets/images/pages.jpeg
---
<!-- Content -->
<main class="p-3" aria-label="Content">
    <section class="container">
        <div class="row row-cols-1 row-cols-md-3">
            {% assign filteredPages = site.pages | where: "layout", "page" %}
            {% for item in filteredPages %}
            {% if item.title %}
            {% include card.html display="post" %}
            {% endif %}
            {% endfor %}
        </div>
    </section>
</main>