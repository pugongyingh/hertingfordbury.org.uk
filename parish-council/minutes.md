---
layout: gh-pages
permalink: /parish-council/minutes/
---

{{ site.data.minutes.years[0].2008.file }}

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
