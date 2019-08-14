
<!DOCTYPE html>
 <html>
	<head>
		<title>application form</title>
			<!--Link All File-->
			<link rel="stylesheet" type="text/css" href="css/style.css">
			<script type="text/javascript" src="javascript/demo.js"></script>
			<script type="text/javascript" src="javascript/secondBlock.js"></script>
			<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
	
	</head>

	<body>
		<!--Create Application Form-->
		<h1> Application Form</h1>
		<form action="server.php"  method="POST" id="uploadForm" enctype="multipart/form-data">
		<div class="first" id="1">
			<!--Personal Details Box-->
				<h2>Personal details</h2>
				<div>
					<label for ="userName">Name:</label>
					<input type="text" name="userName" class="validValue" id="user_Name"  onchange="nameValidate(id);">
					<p name = "valid" id="unameValidate"></p>
					
					<label for ="fatherName">Father Name:</label>
					<input type="text" name="fatherName" class="validValue" id="father_Name" onchange="nameValidate(id);">
					<p name = "valid" id= "fNameValidate"></p>

					<label for ="motherName">Mother Name:</label>
					<input type="text" name="motherName" class="validValue" id="mother_Name" onchange="nameValidate(id);">
					<p name = "valid" id= "mNameValidate"></p>

					<label for="gender">Gender:
						<input type="radio" name="gender" id=male value="male">Male
						<input type="radio" name="gender" id= female  value= "female">Female
						<br>
					</label>
					<p id="genderValidation"></p>

					<label>Address:</label>
					<textarea name="Address" rows="5" cols="15"></textarea>
					<br><br>

					<label for="pincode">Pincode</label>
					<input type="text" name="pincode" class="validValue" id="_pincode" onchange="Validate(id);">
					<p name = "valid" id="pincodeValidation"></p>

					<label for="email">Email ID</label>
					<input type="text" name="email" class="validValue" id="_email" onchange="Validate(id);">
					<p name = "valid" id="emailValidation"></p>
				</div>
				<input type="button" id="next_btn1" onclick="nextStep1();" value="Next">


		</div>
		<div class="second" id="2">
			
			<!-- create Educational Details box-->
			<h2>Educational Details</h2>
			<div>
				<label for="senior">SSC(10th%)</label>
				<input type="text" name="senior" class="eduValue" placeholder="Percentage" id="sscPercent" onchange="percentValidate(id)">
				<p name="education" id="sscValidate"></p>

				<label for="sscBoard">SSC Board:</label>
				<input type="text" name="sscBoard" class="eduValue"  onchange="nameValidate(id)"  id="ssc_Board">
				<p name="education" id="sscBoardValidate"></p>
				
				<label for= "secondary">HSC(12th%):</label>
				<input type="text" name="secondary" class="eduValue" placeholder="Percentage" id="hscPercent" onchange="percentValidate(id)">
				<p name="education" id="hscValidate"></p>

				<label for=hscBoard>HSC Board:</label>
				<input type="text" name="hscBoard" id="hsc_Board" class="eduValue" onchange="nameValidate(id)">
				<p name="education" id="hscBoardValidate"></p>
			
					<label>Graduation Course:</label>
					<!--create drop down list-->
					<select name="graduation_course"  id="course">
						<option value="Blank">--------Please Select Options--------</option>
						<option value="BCA">BCA</option>
						<option value="BBA">BBA</option>
						<option value="BBA">B.COM</option>
						<option value="BBA">B.A</option>
						<option value="BBA">B.TECH</option>			
					</select>
					<p id= "courseValidation"></p>

						<label for="university">University Percentage:</label>
						<input type="text" name="university" id="university_percentage" class="eduValue" placeholder="Percentage" onchange="percentValidate(id)">
						<p name="education" id="uniValidate"></p>

						<label for="uniBoard">University:</label>
						<input type="text" name="uniBoard" id="university" class="eduValue" onchange="uniValidate(id)">
						<p name="education" id="uniBoardValidate"></p>
			</div>
						<input type="button" name="Previous1" onclick="pre_step1();" id="pre_btn1" value="Previous step">
						<input type="button" id="next_btn2" onclick="next_step();" value="Next Step">	
		</div>

		<div class="third" id="3">
		
			<!-- create photo signature box-->	
			<h2>Photo & Signature</h2>
			<div id="body-overlay">
			<!--img src="img/loading.gif" width="64px" height="64px"--></div>
					<div id="targetOuter">
						<div id="targetLayer"></div>
							<img src="img/photo.png" class="icon-choose-image">
							<!--img src="img/photo.png" class="icon-choose-image"-->
							<div class="icon-choose-image">
								<input type="file" name="userImage" id="userImage" class="inputFile" onchange="showPreview(this);" required>
							</div>
					</div>

					<div id="targetOuter1">
						<div id="targetLayer1"></div>
							<img src="img/signature.png" class="sign-choose-image">
								<div class="sign-choose-image">
									<input type="file" name="signImage" id="signImage" class="inputFile1" onchange="showPreviewSign(this);" required>
								</div>
					</div>


					<div>
						<input type="button" name="Previous2" onclick="pre_step2()" value="Previous Step" id="pre_btn2">
						<a href="formpreview.php"><input type="Submit" name="preview"  value="Submit" id="preview"  ></a>
					</div>
		</div>



		</form>
	</body>
</html>
