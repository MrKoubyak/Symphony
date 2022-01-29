---
permalink: /articles/
title: Articles
excerpt: All our articles
image: pages.jpg
---
<!-- Content -->
<main class="p-3" aria-label="Content">
    <section class="container">
        <div class="row row-cols-1 row-cols-md-3">
            {% assign filteredPages = site.pages | where: "layout", "page" %}
            {% for item in filteredPages %}
            {% include /snippets/card.html %}
            {% endfor %}
        </div>
    </section>
</main>