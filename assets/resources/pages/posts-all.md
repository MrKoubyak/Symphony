---
title: Posts
permalink: "/posts/"
layout: default
excerpt: Information about our World
image: "/assets/images/posts.jpeg"
---

<section class="py-5">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {% for item in site.posts %}
        {% include card.html %}
        {% endfor %}
    </div>
</section>
