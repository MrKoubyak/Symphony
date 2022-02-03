---
title: Pages
permalink: "/content/"
layout: default
excerpt: All our files
image: "/assets/images/pages.jpeg"
---
<!-- Content -->
<main class="p-3" aria-label="Content">
    <section class="container">
        <div class="row row-cols-1 row-cols-md-3">
            <ul>
            {% for item in site.pages %}
                <li><a href="{{ item.path | absolute_url }}">{{ item.path }}</a></li>
            {% endfor %}
            </ul>
        </div>
    </section>
</main>