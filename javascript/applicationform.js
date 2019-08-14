
function next_step1()//create a function for go on the second block and check current block validation.
{	
	//Declaring variables
	var name = document.getElementById('name').value;
	var fatherName = document.getElementById('father_name').value;
	var motherName = document.getElementById('mother_name').value;
	var radio_check = document.getElementsByName('gender');
	var pincode = document.getElementById('pincode').value;
	var email = document.getElementById('email').value;

    
    if(!nameValidation(name))
    {
    	return false;
    }
    
    if(!nameValidation(fatherName))
    {
        return false;
    }
     
    if(!nameValidation(motherName))
    {
        return false;
    }
    
	var count=0; // Decalre a variable 
    if(radio_check[0].checked == false && radio_check[1].checked == false)// Check radio button is empty.
    		{ 
					var y=0;
					alert("Fill the Radio Buttons(Gender)(107)");
					return false;
			}
			else{
					var y=1;
				}
    

   		if(!nullValidation(pincode))
       		{    
				return false;
			}

		if(!pincodePattern(pincode))// check pincode format
			 {
			 	alert("Pincode Format was Incorrect(109)");
			 	return false;
			 }

		 if(!nullValidation(email))// Check Email is not empty.
			 {
			 	return false;
			 }

		 if(emailPattern(email))// Check Email format 
			 {
			 	alert("Email Format  was Incorrect(111)");
			 	return false;
			 }
   
    	document.getElementById("1").style.display = "block";// display first block
   	 	document.getElementById("2").style.display = "block";// display second block
   	 	document.getElementById("3").style.display = "none";// hide third block
    }

	
	function nameValidation(name)// Create a function for name validation. 
	{
		var name_length = name;
		var alpha = /^[a-zA-Z\s]+$/;  // Name format pattern only alphabets with space.
		var string_length = /^[a-zA-Z ]{2,15}$/;

		try 
		{
			if(name_length == 0)// check name is empty or not.
					{
				 		
						throw "Name Won't be Empty";
				 		
					}
				else if(!name_length.match(alpha))// Match format according to the Pattern.
					{
						throw 
						alert(name_length + " "  +  "format is Incorrect(104)");
		                return false;
					}

				else if(!name_length.match(string_length))
					{
						alert (name_length + " " + "name is too large(105)");
		                return false;
					}
					else{
						return true;
					}
		}


		catch(err)
		{
				alert(err);
				return false;
		}
		
				

}

    
		
 			function nullValidation(name)
 			{
 		    	var inputBox = name;
 		    	if(inputBox == 0)
 		    	{
 		        	alert("Fill All boxes");
 		        	return false;
 		    	}
 		    	else{
 		    		return true;
 		    	}
 			}
	
 		function pincodePattern(pin)// Create a function for check pincode format.
 			{
         		var pincode_pattern = /^\d{6}$/;// pincode format only 6 numbers.
 				 if(!pin.match(pincode_pattern))//Match format according to the Pattern.
 					{
 					return false;
 					}
 					else{
 						return true;
 					}
         	}

 	function emailPattern(email)// Create a function for check emial format.
 	{
 	var emailpattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
 ;//email pattern
 		if(!email.match(emailpattern))// match format according to the input.
 			{
 				return false;
 			}
 			else{
 				return true;
 			}

 	}


 	function pre_step1()// create a function for go on the previous block.
 		{
 		    document.getElementById("1").style.display = "block";//display first block.
 		    document.getElementById("2").style.display = "none";// hide second block.
 		    document.getElementById("3").style.display = "none";//hide second block.
 		}

 	function next_step2() // Create a function for go on the next step on third block and check current block validation
 	{
 		// Declare all variables.
 		var senior_percentage = document.getElementById('senior_percentage').value;
 		var secondary_percentage = document.getElementById('secondary_percentage').value;
 		var university_percentage = document.getElementById('university_percentage').value;
 		var seniorBoard = document.getElementById('seniorBoard').value;
  		var secondaryBoard = document.getElementById('secondaryBoard').value;
  		var university = document.getElementById('university').value; 

			
 			if(!nullValidation(senior_percentage))// Check senior percentage is empty
 				{
 					return false;
 				}
 			if(!validatePercentage(senior_percentage))// Check senior percentage is empty
 				{
 					return false;
 				}
	
 			if(!nameValidation(seniorBoard))// Check SeniorBoard  is empty or not.
 				{
 					return false;
 				}	
 			if(!nullValidation(secondary_percentage))// Check senior percentage is empty
 				{
 					return false;
 				}
 			if(!validatePercentage(secondary_percentage))// Check senior percentage is empty
 				{
 					return false;
 				}	
 			if(!nameValidation(secondaryBoard))// Check SeniorBoard  is empty or not.
 				{
 					return false;
 				}	

 			if(!nullValidation(university_percentage))// Check senior percentage is empty
 				{
 					return false;
 				}
 			if(!validatePercentage(university_percentage))// Check senior percentage is empty
 				{
 					return false;
 				}	
 			if(!nameValidation(university))// Check SeniorBoard  is empty or not.
 				{
 					return false;
 				}	 

 	    document.getElementById("1").style.display = "block";//display first block.
 	    document.getElementById("2").style.display = "block";// display second block.
 	    document.getElementById("3").style.display = "block";// display third block.
 	}



 	function validatePercentage(percent)// for validate percentage value
 	{
 		var percentage = /(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/i;// pattern for validate percent.
 			if(!percent.match(percentage)) //match format according to the patern.
 			{
				
 				alert(percent + " " + "Format is Incorrect");
 				return false;
 			}
 			else{
 				return true;
 			}
 	}

 	function pre_step2() // Create function for go on the second block.
 		{
 		    document.getElementById("1").style.display = "block";//display first block.
 		    document.getElementById("2").style.display = "block";// display second block.
 		    document.getElementById("3").style.display = "none";// hide third block.
 		}
 	
  	function board(obj) // Create function for given input change in the uppercase.
  		{
  			obj.value = obj.value.toUpperCase();
  		}

 	function showPreview(objFileInput)// Create function for image insert and validation.
 	{
 		var exten = $("#userImage").val().split('.').pop().toLowerCase();// decalre a variable.
		
					
 					if($("#userImage").value == "")// check image is not empty.
 						{
 							alert("Image is Required(124)");
 							return false;
 						}
 					if (jQuery.inArray(exten, ['jpg','jpeg']) == -1)// only jpg , jpeg images are insert.
 						{
 							alert("Please Select a Valid Image(Only jpeg, jpg Images)(125)");
 							return false;
 						}
					
 		if(objFileInput.files[0])
 		{
 			var fileReader= new FileReader();
			
 			fileReader.onload=function (e)
 			{

 				$("#targetLayer").html('<img src=" '+e.target.result+'" width="200px" height="200px" class="upload-preview">')
 				$("#targetLayer").css('opacity','');
 				$(".icon-choose-image").css('opacity','');
 			}
 			fileReader.readAsDataURL(objFileInput.files[0]);
 		}
 	}

 	$("#uploadForm").on('submit', (function  (e){
 			e.preventDefault();
	
 					$.ajax({
						
 						url:"formpreview.php",
 						type:"POST",
 						data: new FormData(this),
 						beforeSend: function()
 						{	
 							$("#body-overlay").show();
 						},
 						contentType:false,
 						processData:false,
 						success:function(data)
 						{
 							$("#targetLayer").html(data);						
 							$("#targetLayer").css('opacity','1');
 							setInterval(function(){$("#body-overlay").hide(); },500);
 						},
 						error: function()
 						{

 						}
 				});
			
			
 		}));

 function showPreviewSign(objFileInput1)	{
 			var exten = $("#signImage").val().split('.').pop().toLowerCase();//decalre a variable.
					
 					if($("#signImage").val()== "")// check image is not empty.
 						{
 							alert("Image is Required(126)");
 							return false;
 						}
 					 if (jQuery.inArray(exten,['jpg','jpeg']) == -1)// only jpg , jpeg images are insert.
 						{
 							alert("Please Select a valid Image(Only jpeg, jpg Images)(127) ");
 							return false;
 						}
				
						


 		if(objFileInput1.files[0])		{
 			var fileReader= new FileReader();
 			fileReader.onload=function (e)
 			{

 				$("#targetLayer1").html('<img src=" '+e.target.result+'" width="200px" height="50px" class="upload-preview">')
 				$("#targetLayer1").css('opacity','');
 				$(".sign-choose-image").css('opacity','');
 			}
 			fileReader.readAsDataURL(objFileInput1.files[0]);
 		}
 	}
	

 	//$(document).ready( function (e)
	
 		$("#uploadForm").on('submit', (function  (e){
 			e.preventDefault();
 			$.ajax({
 						url:"formpreview.php",
 						type:"POST",
 						data: new FormData(this),
 						beforeSend: function()
 						{$("#body-overlay").show();},
 						contentType:false,
 						processData:false,
 						success:function(data)
 				{
 					$("#targetLayer1").html(data);
 					$("#targetLayer1").css('opacity','1');
 					setInterval(function(){$("#body-overlay").hide(); },500);
 				},
 				error: function()
 				{

 				}
 			});
 		}));


