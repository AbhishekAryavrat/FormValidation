function percentValidate(info)// for percentage validation
{
	// alert(info);
	if(info == 'sscPercent'){percentValidation(info, "sscValidate", "SSC");}
	if(info == 'hscPercent'){percentValidation(info, "hscValidate", "HSE");}
	if(info == 'university_percentage'){percentValidation(info, "uniValidate", "University");}
}

function percentValidation(info, errDis, errName)// Regular expression and error handling
{
	try
	{
		let per = document.getElementById(info).value;

		let percentExp =  /(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/i;
		if(!per.match(percentExp)) {throw "Incorrect Percentage of";}
		else{document.getElementById(errDis).innerHTML = "";}
	}
	catch(err)
	{
		document.getElementById(errDis).innerHTML = err + " " + errName;
	}
}

function uniValidate(info)//University name validation
	{
		if(info == 'university'){uniValidation(info,"uniBoardValidate", "University Board");}
	}

function uniValidation(info,errDis,errName)// for regular expression and error handling
{
	try{
			
			let name = document.getElementById(info).value;

			if(name == 0) 
				{throw " Field can not be empty";} 
			else{document.getElementById(errDis).innerHTML = "";}

				let val = name.trim();
				let len = val.length;

				if(len < 2) {throw "Value is too low";}else{document.getElementById(errDis).innerHTML = "";}
				if(len > 40) {throw "Value is too High";}else{document.getElementById(errDis).innerHTML = "";}

				let alpha = /^[a-zA-Z\s]+$/;
				if(!name.match(alpha)) {throw "Value should be only Alphabets";}
				else{document.getElementById(errDis).innerHTML = "";}		
		}
	catch(err)
	{
		document.getElementById(errDis).innerHTML = errName + " " + err;		
	}
}

function pre_step1()// for go on the previous step
{
	document.getElementById('1').style.display = "block";
	document.getElementById('2').style.display = "none";
	document.getElementById('3').style.display = "none";
	count = 1;
}

function courseValid()// for select button validation
{

	try
	{
		var course = document.getElementById("course").value;
		var errDis =  "courseValidation";
		var courseCount = 0;
		if(course == "Blank")			
		{
			courseCount++;
			throw "Please Select a course" ;
		}
		else
		{
			document.getElementById(errDis).innerHTML = "";
			courseCount = 0;
		}
	}
	catch(err)
	{
		document.getElementById(errDis).innerHTML = err; 
	}
	return courseCount;
}

function eduClass()// manage errors for go on the next step
{
	var x = document.getElementsByClassName('eduValue').length;
	var eduCount = 0;
	for(var i=0; i<x; i++)
	{
		if(document.getElementsByClassName('eduValue')[i].value == 0)
		{
			eduCount++;
		}
	}
	return eduCount;
}

function nameCount()//manage errors
{
	var y= document.getElementsByName('education').length;
	var nameCount = 0;
	for(var i=0; i<y; i++)
	{
		if(document.getElementsByName('education')[i].textContent == "")
		{
			nameCount++;
		}
	}
	return nameCount;
}

function next_step()// function check all validation and go on the next block
{
	var courseResult= courseValid();
	var nameResult = nameCount();
	var eduResult = eduClass();
	//alert(nameResult);

	if(eduResult == 6 && nameResult == 0)
	{
				document.getElementById('1').style.display = "block";
				document.getElementById('2').style.display = "none";
				document.getElementById('3').style.display = "none";
	}

	if (eduResult == 0 && nameResult == 6 && courseResult == 0)
	{
		document.getElementById('1').style.display = "block";
		document.getElementById('2').style.display = "block";
		document.getElementById('3').style.display = "block";
	}
	else
	{
		alert("Fill all details");
	}
}

function pre_step2()// for previous step
{
	document.getElementById('1').style.display = "block";
	document.getElementById('2').style.display = "block";
	document.getElementById('3').style.display = "none";
}



function showPreview(objFileInput)// Create function for image insert and validation.
	{
		var exten = $("#userImage").val().split('.').pop().toLowerCase();// decalre a variable.
		
					
					if($("#userImage").value == "")// check image is not empty.
						{
							alert("Image is Required");
							return false;
						}
					if (jQuery.inArray(exten, ['jpg','jpeg']) == -1)// only jpg , jpeg images are insert.
						{
							alert("Please Select a Valid Image(Only jpeg, jpg Images");
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
							alert("Image is Required");
							return false;
						}
					 if (jQuery.inArray(exten,['jpg','jpeg']) == -1)// only jpg , jpeg images are insert.
						{
							alert("Please Select a valid Image(Only jpeg, jpg Images");
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
