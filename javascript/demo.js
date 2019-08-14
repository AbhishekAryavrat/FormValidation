
var name = "";

function nameValidate(info)//For name validation
{
	//alert(document.getElementsByClassName('validValue')[0].value);
	if(info == 'user_Name'){nameValidation(info,"unameValidate","Name ");}
	if(info == 'father_Name'){nameValidation(info,"fNameValidate","Father Name ");}
	if(info == 'mother_Name'){nameValidation(info,"mNameValidate","Mother Name ");}
	if(info == 'ssc_Board'){nameValidation(info,"sscBoardValidate","SSC Board ");}
	if(info == 'hsc_Board'){nameValidation(info, "hscBoardValidate", "HSE Board ");}

}

function nameValidation(info,errDis,errName)// All regular expression with show error
{
	try{
			
			let name = document.getElementById(info).value;

			if(name == 0) 	
			{throw " Field can not be empty";} 
			else{document.getElementById(errDis).innerHTML = "";}

				let val = name.trim();
				let len = val.length;

				if(len < 2) {throw "Value is too low";}else{document.getElementById(errDis).innerHTML = "";}
				if(len > 15) {throw "Value is too High";}else{document.getElementById(errDis).innerHTML = "";}

				let alpha = /^[a-zA-Z\s]+$/;
				if(!name.match(alpha)) {throw "Value should be only Alphabets";}
				else{document.getElementById(errDis).innerHTML = "";}	
		}
	catch(err)
	{
		document.getElementById(errDis).innerHTML = errName + err;
		
	}
}


function Validate(info)//validation for pincode and email
{	
	let regEx1 = /^\d{6}$/;
	let regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(info === '_email'){emaPinValid(info,"emailValidation","Email ID",regEx);}
	if(info === '_pincode'){emaPinValid(info,"pincodeValidation","Pincode",regEx1);}
}

function emaPinValid (info,errDis,errName,expr)// error handling
{
	let name = document.getElementById(info).value;
	try
	{if(!name.match(expr)){throw "Incorrect Format of ";}
	else{document.getElementById(errDis).innerHTML = "";}}
	
	catch(err)
	{
		document.getElementById(errDis).innerHTML = err + errName;
		
	}
}

function genderValidate() // Gender validation
{
	var radio_check = document.getElementsByName("gender");
	let errDis = "genderValidation";
	var genCount = 1;
	try{if(radio_check[0].checked == false && radio_check[1].checked == false ){genCount++; throw "Fill the Gender Buttons";}
		else{document.getElementById(errDis).innerHTML = "";genCount = 0;}
		}
	catch(err)
	{
		document.getElementById(errDis).innerHTML = err ;
	}

	return genCount;
}


function nextStep1()// Call all function in a function and manage all errors
{

	var genResult = genderValidate();
	var classResult = classcount();
	var tagResult = tagCount();

	if(classResult == 5 && tagResult == 0)
	{
				document.getElementById('1').style.display = "block";
				document.getElementById('2').style.display = "none";
				document.getElementById('3').style.display = "none";
	}


	if(classResult == 0 && tagResult == 5 && genResult == 0)
	{
		document.getElementById('1').style.display = "block";
		document.getElementById('2').style.display = "block";
		document.getElementById('3').style.display = "none";
	}
	else
	{
		alert("Fill all The details");
	}
}

function classcount()//manage errors.
{
	var x = document.getElementsByClassName('validValue').length;
	var validCount = 0;
	for(var i = 0; i < x; i++)
	{
		if(document.getElementsByClassName('validValue')[i].value == 0)
		{
			validCount++;
		}
	}
	return validCount;
}

function tagCount()//manage errors.
{
	var x = document.getElementsByName('valid').length;
	var validCount = 0;
	for(var i = 0; i < x; i++)
	{
		if(document.getElementsByName('valid')[i].textContent == "")
		{
			validCount++;
		}
	}

	return validCount;
}
