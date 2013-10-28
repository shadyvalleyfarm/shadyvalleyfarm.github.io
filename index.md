---
layout: default
title: Home
comments: yes
sitemap:
  priority: 0.7
  changefreq: daily
  lastmod: 2013-10-15T01:10:30-05:00
---
{% include JB/setup %}

<img src="/images/goats/Shady_Valley_Buddy/1.jpg" alt="Image of Shady Valley Buddy" class="pic"/>

## Welcome

Welcome to our homestead on the web.

We are a small farm located outside of Fredericktown, MO.  We love
the beauty of freedom that Missouri has to offer.  We raise chickens
and goats on our little farm. We have pygmy and nigerian dwarf goats.
Our most recent additions are registered nigerian dwarfs and we will
be offering their offspring for sale in 2014.

## Blog

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.date | date_to_string }} - {{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

