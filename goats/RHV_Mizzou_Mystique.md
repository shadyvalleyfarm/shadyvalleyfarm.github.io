---
layout: default
title: RHV Mizzou Mystique
group: goats
pedigree: yes
tag: RHV_Mizzou_Mystique
---

## RHV Mizzou Mystique
| | |
|:---|:---
|**Breed:**|Nigerian Dwarf
|**Date of Birth:**|March 19, 2013
|**Eye Color:**|Brown
|**Registered:**|ADGA, AGS
|**Gender:**|Buck
|**For Sale:**|No

### Description

Mizzou comes to us from Red Horse Valley and will be our sole herd sire for the next yearish. 
Mizzou's sire has an [interesting story](http://www.redhorsevalley.com/centos-story/) and I recommend reading
about him and the excellent work by the team at University of Missouri - Columbia Veterinary Teaching Hospital. Mizzou was
given his name because of this work. 

Mizzou has some strong family lines with good records. On top of that he has a great personality and I am looking forward
to seeing what he produces.

Check out his pedigree below or the [ADGA Genetics Profile](http://www.adgagenetics.org/GoatDetail.aspx?RegNumber=D001630035)

### Pedigree

I am experimenting with a pedigree widget. This is the first draft. You could call this "beta" 
especailly since it does not do much at this time.

<iframe src="/goats/pedigrees/RHV_Mizzou_Mystique.html" marginwidth="0" marginheight="0" scrolling="no"></iframe>

### Blogs about Mizzou

<ul>
  {% for post in site.posts %}
    {% for tag in post.tags %}
      {% if tag == page.tag %}
        <li>
           <a href="{{ post.url }}">{{ post.date | date_to_string }} - {{ post.title }}</a>
        </li>
      {% endif %}
    {% endfor %}
  {% endfor %}
</ul>


### Photos

<img src="/images/goats/RHV_Mizzou_Mystique/1.jpg" alt="Image of RHV Mizzou Mystique" class="pic"/>

