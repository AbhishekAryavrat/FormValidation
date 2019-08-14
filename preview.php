<?php
session_start()



					 	 $_SESSION["name"]=$uname;
						echo ($_SESSION["name"]);
						$_SESSION['father_name']= $fname;
						echo $_SESSION["father_name"];
						$_SESSION['mother_name']=$mname;
						$_SESSION['gender']=$gender;
						$_SESSION['address']=$address;
						$_SESSION['pincode']=$pincode;
						$_SESSION['email']=$email;
						$_SESSION['senior']=$senior;
						$_SESSION['senior_board']=$board1;
						$_SESSION['secondary']=$secondary;
						$_SESSION['secondary_board']=$board2;
						$_SESSION['graduationcourse']=$course;
						$_SESSION['percentage']=$graduation;
						$_SESSION['university']=$board3;
						$_SESSION['image_path']=$sourcePath;
						$_SESSION['image_name']=$targetPath;

?>





