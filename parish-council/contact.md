---
layout: gh-pages
permalink: /parish-council/contact/
---

<h2>Contact the Parish Council</h2>

<fieldset>
	<p>For Parish Magazine news items please contact <a href="mailto:brian51giddings@googlemail.com">Brian Giddings</a>. For Parish Magazine advertisments please contact Jane Hoare on 01992 582891.</p>

	<p>It is not necessary for you to provide your name if you do not want to.</p>

	<p>If you would like a reply you must provide either your telephone number or email address so that we have a way to contact you.</p>

	<p>* = an entry for this field is required. </p>

	<form id="forContact" name="forContact" method="post" action="{{ site.subsume }}hertingfordbury/contact">
		<p>
			<cfoutput>
				<label for="name">Name</label>
				<input id="name" name="name" type="text" value="" />
				<br />

				<label for="telephone">Telephone Number</label>
				<input id="telephone" name="telephone" type="text" value="" />
				<br />

				<label for="emailAddress">Email Address</label>
				<input id="emailAddress" name="emailAddress" type="text" value="" />
				<br />

				<label for="subject">* Subject</label>
				<input id="subject" name="subject" type="text" value="" />
				<br />

				<label for="enquiry">* Enquiry</label>
				<textarea id="enquiry" name="enquiry" cols="45" rows="5"></textarea>
				<br />

				<label></label>
				<input id="btnReset" name="btnReset" type="reset" value="Reset" style="width:60px;" />
				<input id="btnSubmit" name="btnSubmit" type="submit" value="Submit" style="width:60px;" />
			</cfoutput>
		</p>
	</form>
	<br />
	<p>The Clerk to Hertingfordbury Parish Council can also be contacted here:</p>
	<p>Nina L Villa</p>
	<p>Clerk to the Council<br />
		Hertingfordbury Parish Council<br />
		20 Church End<br />
		Braughing<br />
		SG11 2QA</p>
</fieldset>