---
permalink: /news/
title: News
excerpt: Information about our World
image: illustrations/news.png
---
<!-- Content -->
<main class="p-3" aria-label="Content">
    <section class="container">
        <div class="row row-cols-1 row-cols-md-3">
            {% for item in site.posts %}
            {% include /snippets/card.html %}
            {% endfor %}
        </div>
    </section>
</main>