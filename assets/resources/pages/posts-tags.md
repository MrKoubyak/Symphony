---
title: Tags
permalink: "/tags/"
layout: default
excerpt: Browse content by Tag
image: "/assets/images/tags.jpeg"
---

<!-- Content -->
<main class="p-3" aria-label="Content">
    <section class="container">
    <ul>
        {% for tag in site.tags %}
        {% assign tagItems = tag.last %}
        <li>{{ tag | first | capitalize }} - {{ tagItems.size }} - {{ tag.last.size }}</li>
        {% endfor %}
    </ul>

    {% for tag in site.tags %}
        <h3 id="{{ tag | first | slugify }}" class="border-bottom py-2 mb-3">{{ tag | first | capitalize }}</h3>
        <div class="row row-cols-1 row-cols-md-3">
            {% for item in tag.last %}
            {% include card.html %}
            {% endfor %}
        </div>
    {% endfor %}
    </section>
</main>