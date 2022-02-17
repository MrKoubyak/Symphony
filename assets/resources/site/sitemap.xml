---
permalink: "/sitemap.xml"
layout: null
---
<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" 
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <url>
    <loc>{{ site.url | absolute_url }}</loc>
    <lastmod>{{ "now" | date_to_xmlschema }}</lastmod>
    <priority>1.0</priority>
  </url>
<!-- Pages -->
{% for page in site.pages %}
{% if page.title %}
  <url>
    <loc>{{ page.url | absolute_url }}</loc>
    <lastmod>{{ "now" | date_to_xmlschema }}</lastmod>
    <priority>0.8</priority>
  </url>
{% endif %}
{% endfor %}
<!-- Post -->
{% for page in site.posts %}
  <url>
    <loc>{{ page.url | absolute_url }}</loc>
    <lastmod>{{ "now" | date_to_xmlschema }}</lastmod>
    <priority>0.6</priority>
  </url>
{% endfor %}
</urlset>