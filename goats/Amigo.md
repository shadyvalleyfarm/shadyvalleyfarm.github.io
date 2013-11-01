---
layout: default
title: (RHV) Amigo
group: goats
tag: Amigo
---

## (Critter Grove) Amigo
| | |
|:---|:---
|**Breed:**|Nigerian Dwarf
|**Date of Birth:**|April 29, 2013
|**Eye Color:**|Brown
|**Color Description:**|Brown with moondpots
|**Registered:**|No
|**Gender:**|Wether
|**For Sale:**|No

### Description

Amigo is the companion of [Mizzou](/goats/RHV_Mizzou_Mystique).

### Blogs about Amigo

<ul>
  {% for post in site.posts %}
    {% for tag in post.tags %}
      {% if tag == page.tag %}
        <li><a href="{{ post.url }}">{{ post.date | date_to_string }} - {{ post.title }}</a></li>
      {% endif %}
    {% endfor %}
  {% endfor %}
</ul>

### Photos

Check back soon

