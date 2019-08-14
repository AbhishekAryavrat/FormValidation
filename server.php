<?php
	
	//session_start();
 	 $servername="localhost";
 	 $username ="root";
 	 $password='';
 	 $dbname="applicationform";
 	 // database connect to server
 	 $connect=mysqli_connect("$servername","$username","$password","$dbname");

 	 if(!$connect)
 	 	{
 	 		die("connection failed".mysqli_connect_error());

 	 	}
 	 		
 	 		/*else
 	 		{
 	 		echo" connection successfully";
 		 	}*/
 		 	
           		//print_r($_FILES);exit;
                
 		 			//user photo insertion and move in folder
					if (is_uploaded_file($_FILES['userImage']['tmp_name']))
						{    
                            
							$sourcePath=$_FILES['userImage']['tmp_name'];
							$targetPath= "img/".$_FILES['userImage']['name'];					
							move_uploaded_file($sourcePath, $targetPath);
						}
                   		
					//user siganture insert and move in folder
                   	 if(is_uploaded_file($_FILES['signImage']['tmp_name']))
                   		{
                   			$sourcePath1=$_FILES['signImage']['tmp_name'];
							$targetPath1= "img/".$_FILES['signImage']['name'];
							move_uploaded_file($sourcePath1, $targetPath1);
						}


						// declare all variables by post method
					 	 $uname= $_POST['userName'];
					 	 //echo ($uname);					 	 
					 	 $fatherName=$_POST['fatherName'];
					 	 $motherName=$_POST['motherName'];
					 	 $gender=$_POST['gender'];
					 	 $address=$_POST['Address'];
					 	 $pincode=$_POST['pincode'];
					 	 $email=$_POST['email'];
					 	 $senior_percentage=$_POST['senior'];
					 	 $secondary_percentage=$_POST['secondary'];
					 	 $university_percentage=$_POST['university'];
					 	 $senior_board=$_POST['sscBoard'];
					 	 $secondary_board=$_POST['hscBoard'];
					 	 $university=$_POST['uniBoard'];
					 	 $course=$_POST['graduation_course'];



							//insert value into database

			 				$sql= "INSERT INTO formdb (name,father_name,mother_name,gender,address,pincode,email,senior,senior_board,secondary,secondary_board,graduation_course,percentage,university,image_path,image_name,sign_path,sign_name) VALUES ('$uname','$fatherName','$motherName','$gender','$address','$pincode','$email','$senior_percentage','$senior_board','$secondary_percentage','$secondary_board','$course','$university_percentage','$university','$sourcePath','$targetPath','$sourcePath1','$targetPath1')";
 				

						 	 if(mysqli_query($connect,$sql))
						 	 	{
						 	 		echo "Submit form successfully";
						 	 	}
						 	 	//check error to submit form
						 	 else
							 	 {	
							 	 	echo "Error: " . $sql . "<br>" . $connect->error;
							 	 }
						 		
						 		
							//close connection
						 	mysqli_close($connect);
						 	// session_destroy();
						 	
			 
 	
 	 ?>
 	 