---
layout: gh-pages
permalink: /parish-council/when-and-where-we-meet/
---

<h2>When and Where We Meet</h2>

<div class="panelLeft">
	<p>Hertingfordbury Parish Council meets regularly throughout the year on the 2nd Wednesday of every month (except August) in the Main Hall of <a href="http://www.hertingfordbury.herts.sch.uk/">Hertingfordbury Cowper C of E (VA) Primary School</a> in Birch Green at 7.30pm. All meetings are open to the public.</p>
	<p>Future Dates are:</p>

	<div id="meetings"></div>
</div>

<div class="panelRight">
	<img src="/common/image/birchGreenPlayArea.jpg" alt="Birch Green Play Area" width="300" height="159" />

	<p />

	<p style="text-align:left;width:300px;float:right;">The Annual Parish Meeting and the Annual Meeting of Hertingfordbury Parish Council are held in April and May respectively.</p>
</div>

<script>
	$.ajax('meetings.cfm', {
		 type: 'get'
		,dataType: 'html'
		,success : function(response) {
			$('#meetings').html(response);
		}
		,error: function() {
			var response = '<ul><li>Unable to display meeting schedule at this time.</li></ul>'
			$('#meetings').html(response);
		}
	});
</script>
