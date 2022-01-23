---
permalink: /tags/
title: Tags
excerpt: Browse content by Tag
image: /assets/images/illustrations/news.png
---
<!-- Content -->
<main class="p-3" aria-label="Content">
    <section class="container">
    {% for tag in site.tags %}
        <h3>{{ tag | first | capitalize }}</h3>
        <div class="row row-cols-1 row-cols-md-3">
            {% for item in tag.last %}
            {% include /snippets/card.html %}
            {% endfor %}
        </div>
    {% endfor %}
    </section>
</main>