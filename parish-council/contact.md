---
layout: gh-pages
permalink: /parish-council/contact/
---

<h2>Contact the Parish Council</h2>

<fieldset>
	<p>For Parish Magazine news items please contact <a href="mailto:kpjuniper@yahoo.co.uk">Philip Juniper</a> on 01992 558321. For Parish Magazine advertisements please contact <a href="mailto:Robinhbishop@gmail.com">Robin Bishop</a> on 01992 551946.</p>

	<p>It is not necessary for you to provide your name if you do not want to.</p>

	<p>If you would like a reply you must provide either your telephone number or email address so that we have a way to contact you.</p>

	<p>* = an entry for this field is required. </p>

	<form id="forContact" name="forContact" method="post" action="{{ site.subsume }}hertingfordbury/v1/contact">
		<p>
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
		</p>
		<div class="g-recaptcha" data-sitekey="{{ site.recaptchaKey }}"></div>
	</form>
	<br />
	<p>The Clerk to Hertingfordbury Parish Council can also be contacted here:</p>

	<p>
		Clerk to the Council<br />
		Hertingfordbury Parish Council<br />
		Tom Brindley<br />
		191 High Street,<br />
		Codicote, Herts<br />
		SG4 8UD<br />
		Tel: 07956 381764
	</p>

	<p>If you want to send an attachment, please email the Clerk directly - <a href="mailto:parishclerk@hertingfordbury.org.uk">parishclerk@hertingfordbury.org.uk</a></p>
</fieldset>
