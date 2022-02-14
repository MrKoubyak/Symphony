---
title: Content
permalink: "/content/"
layout: page
excerpt: All our files
image: "/assets/images/pages.jpeg"
---
<div class="row row-cols-1 row-cols-md-3">
    <ul>
    {% for item in site.pages %}
        <li><a href="{{ item.url | absolute_url }}">from {{ item.path }}</a></li>
    {% endfor %}
    </ul>
</div>