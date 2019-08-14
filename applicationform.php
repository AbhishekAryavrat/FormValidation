<!--  <?php

 //session_start();
//if(isset($_SESSION['$uname']))
 ?> -->


<!DOCTYPE html>
 <html>
	<head>
		<title>application form</title>
			<!--Link All File-->
			<link rel="stylesheet" type="text/css" href="css/style.css">
			<script type="text/javascript" src="javascript/applicationform.js"></script>
			<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
	</head>

	<body>
		<!--Create Application Form-->
		<h1> Application Form</h1>
		<form action="form.php"  method="POST" id="uploadForm" enctype="multipart/form-data">
		<div class="first" id="1">
			<!--Personal Details Box-->
				<h2>Personal details</h2>	
				<p>Name:<input type="text" name="uname" id="name"></p>
				<p>Father Name:<input type="text" name="fatherName" id="father_name"></p>
				<p>Mother Name:<input type="text" name="motherName" id="mother_name"></p>
				
				<!--Gender Radio Buttons-->
				<label>Gender:
				<input type="radio" name="gender" value="Male">Male
				<input type="radio" name="gender" value="Female">Female<br>	
				</label>
				<label>Address:</label>
				<textarea name="address" rows="5" cols="15"></textarea>
				<p>Pincode<input type="text" name="pincode" id="pincode"></p>
				<p>Email Id<input type="text" name="email" id="email"></p>

				<p><input type="button" id="next_btn1" onclick="next_step1()" value="Next"></p>
		</div>
	
		<div class="second" id="2">
			
			<!-- create Educational Details box-->
			<h2>Educational Details</h2>
				<p>Senior(10th%)<input type="text" name="senior_percentage" placeholder="Percentage" id="senior_percentage" ></p>
				<p>Board:<input type="text" name="seniorBoard"  onkeyup="board(this)" value="" id="seniorBoard"></p>
				<p>Senior Seconadry(12th%):<input type="text" name="secondary_percentage" placeholder="Percentage" id="secondary_percentage"></p>
				<p>Board:<input type="text" name="secondaryBoard" onkeyup="board(this)" value="" id="secondaryBoard"></p>
			
					<label>Graduation Course:</label>
					<!--create drop down list-->
					<select name="graduation_course">
						<option value="BCA">BCA</option>
						<option value="BBA">BBA</option>
						<option value="BBA">B.COM</option>
						<option value="BBA">B.A</option>
						<option value="BBA">B.TECH</option>			
					</select>
						<p>Percentage:<input type="text" name="university_percentage" id="university_percentage" placeholder="Percentage">
						<p>University/Board:<input type="text" name="university"  onkeyup="board(this)" value="" id="university"><br>
						<input type="button" name="Previous1" onclick="pre_step1()" id="pre_btn1" value="Previous step">
						<input type="button" name="Next" onclick="next_step2()" id="next_btn2" value="Next step">		
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
