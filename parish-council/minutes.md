---
layout: gh-pages
permalink: /parish-council/minutes/
products:
 - top-level: Product One
   arbitrary: Value
   nested-products:
    - nested: Associated Product
      sub-arbitrary: Associated Value
    - nested: Another associate
      sub-arbitrary: with its associated value
 - top-level: Product Two
   arbitrary: Value
   nested-products:
    - nested: nested product Two
      sub-arbitrary: Two's nested's associate value
 - top-level: Product Three
   arbitrary: Value
 - top-level: Product Four
   arbitrary: SomeValue



minutes:
 - years:
   - year: 2008
     - file:
       - jan: abc.pdf


---

<ul>{% for product in page.products %}
  <li>{{ product.top-level }}: {{ product.arbitrary }}{% if product.nested-products %}
    <ul>
    {% for nestedproduct in product.nested-products %}  <li>{{ nestedproduct.nested }}: {{ nestedproduct.sub-arbitrary }}</li>
    {% endfor %}</ul>
  {% endif %}</li>{% endfor %}
</ul>

{{ page.minutes.year }}

{{ site.data.minutes.years[0].2008.file }}


{% for year in site.data.minutes %}

{% endfor %}


<ul>
	{% for year in site.data.minutes %}
		<li>
			{{ member.name }}
		</li>
	{% endfor %}
</ul>


<cfoutput>
	<div class="panelLeft">
		<h2>Minutes of Previous Meetings</h2>

		<ul>
			<cfloop array="#rc.minutes#" item="local.minute">
				<li>
					<a href="/council/minutes/#local.minute.year#/#local.minute.name#">#local.minute.date#</a>
				</li>
			</cfloop>
		</ul>

		<br />

		<h3>Other Years</h3>

		<ul>
			<cfloop query="#rc.years#">
				<li><a href="#buildURL('parish-council.minutes', '', {'#rc.years.name#'=''})#">#rc.years.name#</a></li>
			</cfloop>
		</ul>
	</div>

	<div class="panelLeft">
		<img src="/common/image/noticeBoard.jpg" alt="Notice Board" width="300" height="309" />
	</div>
</cfoutput>
