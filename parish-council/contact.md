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

	<form id="forContact" name="forContact" method="post" action="">
		<p>
			<cfoutput>
				<label for="strName">Name</label>
				<input id="strName" name="strName" type="text" value="" />
				<br />

				<label for="strPhone">Telephone Number</label>
				<input id="strPhone" name="strPhone" type="text" value="" />
				<br />

				<label for="strEmailAddress">Email Address</label>
				<input id="strEmailAddress" name="strEmailAddress" type="text" value="" />
				<br />

				<label for="strSubject">* Subject</label>
				<input id="strSubject" name="strSubject" type="text" value="" />
				<br />

				<label for="strEnquiry">* Enquiry</label>
				<textarea id="strEnquiry" name="strEnquiry" cols="45" rows="5"></textarea>
				<br />

				<label></label>
				<input id="btnReset" name="btnReset" type="reset" value="Reset" style="width:60px;" />
				<input id="btnSubmit" name="btnSubmit" type="submit" value="Submit" style="width:60px;" />
			</cfoutput>
		</p>
	</form>
	<br />
	<p>The Clerk to Hertingfordbury Parish Council can also be contacted here:</p>
	<p>Mr Tom Brindley</p>
	<p>Clerk to the Council<br />
		Hertingfordbury Parish Council<br />
		191 High Street<br />
		Codicote<br />
	SG4 8UD</p>
	<p>Tel: 01438 820477</p>
</fieldset>