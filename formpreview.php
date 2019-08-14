<!-- <?php

	//session_start();
	//if(isset($_SESSION['$uname']))
	//include(header(string))
?> -->

<!DOCTYPE html>
<html>
<head>
    <title>Form Preview</title>
    <!--Link File-->
    <link href="css/previewstyle.css" type="text/css" rel="stylesheet">
    
</head>

<body>   
    <!-- Application Form Preview -->
    <h1>Application Form Preview</h1>
        <form action="form.php" method="post" enctype="multipart/form-data">
         	<div id="borderpreview">
         		<div class="personaldetails" id="first">
         			<!--Create Personal Details Box-->
            		<h2>Personal details</h2>	
					<p>Name:<input type="text" name="uname" id="name"></p>
					<p>Father Name:<input type="text" name="fname" id="fathename"></p>
					<p>Mother Name:<input type="text" name="mname" id="mothername"></p>
					
					<label>Gender:
					<input type="radio" name="gender" value="Male">Male
					<input type="radio" name="gender" value="Female">Female<br>	
					</label>

					<label>Address:</label>
					<textarea name="address" rows="5" cols="15"></textarea>
					<p>Pincode:<input type="text" name="pincode" id="pincode"></p>
					<p>EmailId:<input type="text" name="email" id="email"></p>
            	</div>
                
                <div class="photo" id="third">
			      	<!-- Create photo signature box-->
					<h2>Photo & Signature</h2>
				
					<div id="body-overlay"></div>
						<div id="targetOuter">
							<div id="targetLayer"></div>
								<div class="icon-choose-image">
									<input type="file" name="userImage" id="userImage" class="inputFile">
								</div>
						</div>

					    <div id="targetOuter1">
							<div id="targetLayer1"></div>
								<div class="sign-choose-image">
									<input type="file" name="signImage" id="signImage" class="inputFile1" >
								</div>
					    </div>

	                        <div>
	                        	<a href="applicationform.php"><input type="button" name="edit" value="Edit" id="edit"></a>
	                            <input type="submit" name="submit"  value="Submit" id="submit">
	                        </div>
		     	</div>
            
            <div class="educationaldetails" id="second">
			<!-- Create Educational Details box-->
			<h2>Educational Details</h2>
				<p>Senior(10th%):<input type="text" name="percentagefirst" placeholder="Percentage" id="percentagefirst" ></p>
				<p>Board:<input type="text" name="boardfirst"></p>
				<p>Senior Seconadry(12th%):<input type="text" name="percentagesecond" placeholder="Percentage" id="percentagesecond"></p>
				<p>Board:<input type="text" name="boardsecond"></p>
			
				<label>Graduation Course:</label>
				<!--Create drop down list-->
					<select name="graduationcourse">
						<option>BCA</option>
						<option>BBA</option>
						<option>B.COM</option>
						<option>B.A</option>
						<option>B.TECH</option>			
					</select>
                  <p>Percentage:<input type="text" name="percentagethird" id="percentagethird" placeholder="Percentage"></p>
                  <p>University/Board:<input type="text" name="boardthird"></p><br>
            </div>   
            
            
            </div>
            </form>
    </body>
</html>
<!-- <?php
	session_destroy();
?> -->