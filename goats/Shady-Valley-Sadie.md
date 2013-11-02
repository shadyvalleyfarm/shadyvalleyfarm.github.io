---
layout: default
title: Shady Valley Sadie
group: goats
tag: Sadie
---

## (Shady Valley) Sadie
| | |
|:---|:---
|**Breed:**|Pygmy
|**Date of Birth:**|October 4th, 2012
|**Eye Color:**|Brown
|**Color Description:**|White Bucksin
|**Registered:**|No
|**Dam:**|Shady Valley Sabrina
|**Sire:**|Unknown
|**Gender:**|Doe
|**For Sale:**|No

### Description

Sadie is the sister to [Samantha](/goats/Shady-Valley-Samantha) and both are
considered companion animals to our herd. Their dam became ill when they
were 7 weeks old and died a short time later.  They are great companion
animals and are friends to everyone they meet.  They are not register-able. 

### Blog posts about Sadie

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

<img src="/images/goats/Shady_Valley_Sadie/1.jpg" alt="Image of Shady Valley Sadie" class="pic"/>


