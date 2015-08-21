---
layout: gh-pages
permalink: /parish-council/when-and-where-we-meet/
---

<h2>When and Where We Meet</h2>

<div class="panelLeft">
	<p>Hertingfordbury Parish Council meets regularly throughout the year on the 2nd Wednesday of every month (except August) in the Main Hall of <a href="http://www.hertingfordbury.herts.sch.uk/">Hertingfordbury Cowper C of E (VA) Primary School</a> in Birch Green at 7.30pm. All meetings are open to the public.</p>
	<p>Future Dates are:</p>

	<div id="meetings">
		<ul id="meetingDates"></ul>
	</div>
</div>

<div class="panelRight">
	<img src="/common/image/birchGreenPlayArea.jpg" alt="Birch Green Play Area" width="300" height="159" />

	<p />

	<p style="text-align:left;width:300px;float:right;">The Annual Parish Meeting and the Annual Meeting of Hertingfordbury Parish Council are held in April and May respectively.</p>
</div>

<script>
	$(function(){
		$.ajax('{{ site.subsume }}hertingfordbury/meetings', {
			 type: 'GET'
			,success: function(meetingDates) {
				if (meetingDates.length == 0) {
					$('div#meetings').html('<ul><li>Sorry, we are unable to display the schedule of meetings at this time</li></ul>');
				} else {
					var meetingList = $('ul#meetingDates')

					$.each(meetingDates, function(i, listItem) {
						meetingList.append(
							$('<li>' + listItem + '</li>')
						);
					});
				}
			}
			,error: function(xhr, status, error) {
				var response = '<ul><li>Sorry, we are unable to display the schedule of meetings at this time</li></ul>'

				$('div#meetings').html(response);
			}
		});
	});
</script>