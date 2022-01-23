---
permalink: /news/
title: News
excerpt: Information about our World
image: /assets/images/illustrations/news.png
---
<!-- Content -->
<main class="p-3" aria-label="Content">
    <section class="container">
        <div class="row row-cols-1 row-cols-md-3">
            {% for post in site.posts %}
            <div class="col">
                <div class="card text-dark bg-light h-100">
                    <img src="{{ post.image | absolute_url }}" class="card-img-top" alt="{{ post.title }}">
                    <div class="card-body">
                        <h5 class="card-title">{{ post.title }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{{ post.date | date_to_string }}</h6>
                        <p class="card-text">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
                        {% if post.categories %}
                        <div>
                            <ul id="categories" class="nav">
                            {% for category in post.categories %}
                                <li class="nav-item mx-1 badge bg-primary">{{ category }}</li>
                            {% endfor %}
                            </ul>
                        </div>
                        {% endif %}
                    </div>
                    <div class="card-footer text-muted text-end">
                        <a href="{{ post.url | absolute_url }}" class="btn btn-primary" title="Read {{ post.title }}">Read More</a>
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>
    </section>
</main>