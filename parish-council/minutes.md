---
layout: gh-pages
permalink: /parish-council/minutes/
---

{%- assign latestYear = site.data.minutes.years.data | first -%}
{%- assign dataFile = 'minutes-' | append: latestYear.year -%}
{%- assign year = site.data.minutes[dataFile] -%}

<div class="panelLeft">
	{%- include minutes.html -%}

	<br />

	{%- include years.html -%}
</div>

<div class="panelLeft">
	<img src="/common/image/noticeBoard.jpg" alt="Notice Board" width="300" height="309" />
</div>
