// These are our questions. We will store following values in the array with index:value format
// Question
// Type of the question - any from [choices, blanks, truefalse]
// If choices or truefalse - we will have number of choices, according to the requirement of the question.
// (For example: truefalse type needs only 2 choices, while multiple choice question requires more than 2)
// Correct answer for the question
// User entered/selected answer
// Result - Whether the question was answered correctly or not.
// Locked - If user chose to see the answer, it will be locked
// underreview - If user marks the question for review, this param will be set
// Explanation - explanation about the answer of the question.
var quizes = [
{	question: "Now that Pluto is no longer included, how many planets are there in the Solar System?",
	type: "choices",
	choice1: "Six Planets",
	choice2: "Seven Planets",
	choice3: "Eight Planets",
	choice4: "Nine Planets",
	correctans: "Eight Planets",
	userans: "",
	ansresult: "",
	locked: false,
	underreview: false,
	explanation: "There are eight planets in the solar system: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. The four inner solar system planets (Mercury, Venus, Earth, and Mars) fall under the category of terrestrial planets; Jupiter and Saturn are gas giants (giant plants composed mostly of hydrogen and helium) while Uranus and Neptune are the ice giants (containing mainly elements heavier than hydrogen and helium)." }, 
	
	
{ 	question: "What is the smallest planet in the Solar System?",
	type: "choices",
	choice1: "Neptune",
	choice2: "Saturn",
	choice3: "Earth",
	choice4: "Mercury",
	correctans: "Mercury",
	userans: "",
	ansresult: "",
	locked: false,
	underreview: false,
	explanation: "If we put our planets in ‘size order’ they would be listed as the following, from large to small: Jupiter, Saturn, Uranus, Neptune, Earth, Venus, Mars, and Mercury.  Since we lost Pluto as an official planet, it appears that Mercury is now considered the smallest planet in the solar system.  But if you look at Mercury, it is quite sizable." },
	
{
	question: "What is the largest planet in the Solar System?",
	type: "blanks",
	correctans: "Jupiter",
	userans: "",
	ansresult: "",
	locked: false,
	underreview: false,
	explanation: "The largest planet in our solar system by far is Jupiter, which beats out all the other planets in both mass and volume. Jupiter's mass is more than 300 times that of Earth, and its diameter, at 140,000 km, is about 11 times Earth's diameter. (Jupiter's Great Red Spot, even at its current diminished size, spans 15,900, just over a full Earth diameter.) Jupiter is 2½ times more massive than the rest of the planets in the solar system combined. Despite its bulk, though, Jupiter has a fast rotation period of just 10 hours!" },

{
	question: "What is the hottest planet in the Solar System?",
	type: "blanks",
	correctans: "Venus",
	userans: "",
	ansresult: "",
	locked: false,
	underreview: false,
	explanation: "We have eight planets in our solar system, each one circling the sun at a different distance.  Earth is the third planet and we are in what is called the 'Goldilocks Zone'. That means we aren't too hot and we aren't too cold; we are just right.  This has allowed life to thrive on earth because the temperature is perfect enough to allow liquid water, which is believed to be one of the key elements to have life on a planet. Mercury is the planet that is closest to the sun and therefore gets more direct heat, but even it isn't the hottest. Venus is the second planet from the sun and has a temperature that is maintained at 462 degrees Celsius, no matter where you go on the planet. It is the hottest planet in the solar system." },
	
{
	question: "True or false? Neptune is larger than Saturn.",
	type: "truefalse",
	correctans: "false",
	userans: "",
	ansresult: "",
	locked: false,
	underreview: false,
	explanation: "According to NASA, this is the estimated radii of the eight planets in our solar system, in order of size. We also have included the radii sizes relative to Earth to help you picture them better.<br>1. Jupiter (69,911 km / 43,441 miles) - 1,120% the size of Earth<br>2. Saturn (58,232 km / 36,184 miles) -- 945% the size of Earth<br>3. Uranus (25,362 km / 15,759 miles) -- 400% the size of Earth<br>4. Neptune (24,622 km / 15,299 miles) -- 388% the size of Earth<br>5. Earth (6,371 km / 3,959 miles)<br>6. Venus (6,052 km / 3,761 miles) -- 95% the size of Earth<br>7. Mars (3,390 km / 2,460 miles) -- 53% the size of Earth<br>8. Mercury (2,440 km / 1,516 miles) -- 38% the size of Earth" },

{
	question: "True or false? Venus has more atmospheric pressure than Earth?",
	type: "truefalse",
	correctans: "true",
	userans: "",
	ansresult: "",
	locked: false,
	underreview: false,
	explanation: "<br/><br/>Earth's has a mean radius of 6,371 km (3,958.8 mi), and a mass of 5.97 x 1024 kg, whereas Jupiter has a mean radius of 69,911 +- 6 km (43441 mi) and a mass of 1.8986x1027 kg. In short, Jupiter is almost 11 times the size of Earth, and just under 318 times as massive. However, Earth's density is significantly higher, since it is a terrestrial planet - 5.514 g/cm3 compared to 1.326 g/cm8.<br/><br/>Because of this, Jupiter's 'surface' gravity is significantly higher than Earth normal - i.e. 9.8 m/s² or 1 g. While, as a gas giant, Jupiter has no surface per se, astronomers believe that within Jupiter's atmosphere where the atmospheric pressure is equal to 1 bar (which is equal to Earth's at sea level), Jupiter experiences a gravitational force of 24.79 m/s2 (which is the equivalent of 2.528 g)." }];
	
var quesposition = 0;

$(document).ready(function() {
	
	// PRint all the values of current quizes array
	function printvalues() {
		$.each(quizes, function(index, val) {
			$.each(val, function(index, textval) {
				console.log(index+"-"+textval);
			});
			console.log("---------------------------------");			
		});
	}
	
	// Lock the current question. Set the locked param of the question
	function lockupcurrent() {
		if($("#proquestion").find("input[type=text]").lenght > 0) {
			console.log("gound");
			$("#proquestion").find("input[type=text]").attr('disabled', true);
		} else {
			$("#proquestion").find("input").attr('disabled', true);
		}
	}
	
	function getcurrentquestion(pos) {
		
		if(pos == 0) {
			$("#btnPrev").hide(); }
		else {
			$("#btnPrev").show();}
		
		if(pos == quizes.length-1)
			$("#btnNext").hide();
		else
			$("#btnNext").show();
		
		// create a variable called htmlcontent which shall be appended to the question div visible to the user.
		var htmlcontent = "";
		// Create a div with question number id and append it to the htmlcontent
		htmlcontent += "<div id='ques"+(pos+1)+"'>";
		// Get the question from the quizes variable, on a given position passed in pos variable.
		// Example: pos = 1, Get the question present at index 1 in quizes
		var question = quizes[pos].question;
		var type = quizes[pos].type;
		var locked = quizes[pos].locked;
		var choice1 = quizes[pos].choice1;
		var choice2 = quizes[pos].choice2;
		var choice3 = quizes[pos].choice3;
		var choice4 = quizes[pos].choice4;
		var userans = quizes[pos].userans;
		
		// Add question number and question into the htmlcontent
		htmlcontent += "<center><h1><b> Question "+(pos+1)+"</b><br/>";
		htmlcontent += question+"</h1></center>";
		var content = "";
		// Check if the question type is multiple choices, then add the radio button in the html content
		if(type == "choices") {
			var choice = 1;
			var questionno = pos+1;
			if(locked)
				content = "disabled = 'disabled'";
			
			htmlcontent += "<h3><div style='width: 40%; margin: 0 auto;'>";
			htmlcontent += "<div>";
			htmlcontent += "<input type='radio' id='ques"+questionno+"choice"+(choice)+"' name='ques"+questionno+"radiobuttons' value='"+choice1+"' "+content+"/>";
			htmlcontent += "<label for='ques"+questionno+"choice"+(choice++)+"'>"+choice1+"</label>";
			htmlcontent += "</div>";
			htmlcontent += "<div>";
			htmlcontent += "<input type='radio' id='ques"+questionno+"choice"+(choice)+"' name='ques"+questionno+"radiobuttons' value='"+choice2+"' "+content+" />";
			htmlcontent += "<label for='ques"+questionno+"choice"+(choice++)+"'>"+choice2+"</label>";
			htmlcontent += "</div>";
			htmlcontent += "<div>";
			htmlcontent += "<input type='radio' id='ques"+questionno+"choice"+(choice)+"' name='ques"+questionno+"radiobuttons' value='"+choice3+"' "+content+" />";
			htmlcontent += "<label for='ques"+questionno+"choice"+(choice++)+"'>"+choice3+"</label>";
			htmlcontent += "</div>";
			htmlcontent += "<div>";
			htmlcontent += "<input type='radio' id='ques"+questionno+"choice"+(choice)+"' name='ques"+questionno+"radiobuttons' value='"+choice4+"' "+content+" />";
			htmlcontent += "<label for='ques"+questionno+"choice"+(choice++)+"'>"+choice4+"</label>";
			htmlcontent += "</div>";
			htmlcontent += "</div></h3>";
			
		// If the type is true false, add two radio buttons in the question content
		} else if(type == "truefalse") {
			var choice = 1;
			var questionno = pos+1;
			htmlcontent += "<h3><div style='width: 40%; margin: 0 auto;'>";
			htmlcontent += "<div>";
			htmlcontent += "<input type='radio' id='ques"+questionno+"choice"+(choice)+"' name='ques"+questionno+"radiobuttons' value='true' "+content+" />";
			htmlcontent += "<label for='ques"+questionno+"choice"+(choice++)+"'>True</label>";
			htmlcontent += "</div>";
			htmlcontent += "<div>";
			htmlcontent += "<input type='radio' id='ques"+questionno+"choice"+(choice)+"' name='ques"+questionno+"radiobuttons' value='false' "+content+" />";
			htmlcontent += "<label for='ques"+questionno+"choice"+(choice++)+"'>False</label>";
			htmlcontent += "</div>";
			htmlcontent += "</div></h3>";
			
		// Else the question type shall be blanks. Add a text box in the question content
		} else {
			var questionno = pos+1;
			htmlcontent += "<h3><div style='width: 40%; margin: 0 auto;'>";
			htmlcontent += "<input type='text' style='width: 300px; height: 50px; padding: 4px; font-size: 24px;' value='' "+content+" />";
			htmlcontent += "</div></h3>";
		}
		
		// Clear the question visible to the user, add the content 
		$("#proquestion").empty();
		$("#proquestion").append(htmlcontent);
		if(userans != "") {
			console.log("Ans Presnt");
			if($("#proquestion").find("input[type=text]").length > 0) {
				$("#proquestion").find("input[type=text]").val(userans);
			} else {
				$("#proquestion").find("[value="+userans+"]").prop('checked', true);
			}
		}
		
		if(quizes[pos].underreview) {
			$("#btnReview").text("Under Review");
			$("#btnReview").css("background", "gray");
		}
		else {
			$("#btnReview").text("Mark For Review");
			$("#btnReview").css("background", "linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)");
		}
		
		if($("#proquestion").find("input[type=radio]").length > 0) {
			$("#proquestion").find("input[type=radio]").on('change', function() {
				if(quizes[pos].underreview){
					quizes[quesposition].underreview = false;
					$("#btnReview").text("Mark For Review");
					$("#btnReview").css("background", "linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)");
				}
			});
		} else {
			$("#proquestion").find("input[type=text]").on('input propertychange paste', function() {
				if(quizes[pos].underreview){
					quizes[quesposition].underreview = false;
					$("#btnReview").text("Mark For Review");
					$("#btnReview").css("background", "linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)");
				}
			});
		}
		
		if(quizes[pos].locked) {
			$("#proquestion").find("input").attr('disabled', true);
			$("#pro_que_explain").empty();
			var expcontent = "";
			expcontent += "<center><h1> Explanation </h1>";
			expcontent += "<h3>Correct Answer: "+quizes[quesposition].correctans+"</h3>";
			expcontent += "<h4>Explanation: "+quizes[quesposition].explanation+"</h4>";
			$("#pro_que_explain").append(expcontent);
			$("#pro_que_explain").css('display', 'block');
			$("#pro_que_explain").css('border', '1px solid');
			
		} else {
			$("#proquestion").find("input").removeAttr('disabled');
			$("#pro_que_explain").empty();
			$("#pro_que_explain").hide();
		}
	}
	
	getcurrentquestion(quesposition);
	
	$("#prolist span").each(function() {
		$(this).on("click", function() {
			var ques = $(this).text();
			getcurrentquestion(parseInt(ques)-1);
			quesposition = ques - 1;
		});
	});
	
	$("#btnReview").click(function() {
		if(quizes[quesposition].locked)
			return;
		
		if(quizes[quesposition].underreview) {
			quizes[quesposition].underreview = false;
			$("#btnReview").text("Mark For Review");
			$("#btnReview").css("background", "linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)");
		} else {
			quizes[quesposition].underreview = true;
			$("#btnReview").text("Under Review");
			$("#btnReview").css("background", "gray");
		}
		
		if($(document).find("input[type=radio]").length > 0) {
			if($(document).find("input[name='ques"+(quesposition+1)+"radiobuttons']:checked").val()) {
				var selectedans = $(document).find("input[name='ques"+(quesposition+1)+"radiobuttons']:checked").val();
				quizes[quesposition].userans = selectedans;
			}
		} else {
			if($(document).find("input[type=text]").val()) {
				var enteredans = $(document).find("input[type=text]").val();
				quizes[quesposition].userans = enteredans;
			}
		}
	});
	
	$("#btnNext").click(function() {
		// These are to check whether the current question is under review or locked.
		// If under review,or locked, we don't need to check answer, so return back.
		if(quizes[quesposition].underreview || quizes[quesposition].locked) {
			getcurrentquestion(++quesposition);
			return
		}
		
		if($(document).find("input[type=radio]").length > 0) {
			// Check if selected or not?
			if(!$(document).find("input[name='ques"+(quesposition+1)+"radiobuttons']:checked").val()) {
				//this means not selected.
				alert("Please select the answer");
			} else {
				// so else part, means selected. save the answer.
				var selectedans = $(document).find("input[name='ques"+(quesposition+1)+"radiobuttons']:checked").val();
				quizes[quesposition].userans = selectedans;
				if(quizes[quesposition].correctans != selectedans)
					quizes[quesposition].ansresult = "wrong";
				else
					quizes[quesposition].ansresult = "right";
				
				getcurrentquestion(++quesposition);
			}
		} else {
			if(!$(document).find("input[type=text]").val()) {
				alert("Please select the answer");
			} else {
				var enteredans = $(document).find("input[type=text]").val();
				quizes[quesposition].userans = enteredans;
				if(quizes[quesposition].correctans != enteredans)
					quizes[quesposition].ansresult = "wrong";
				else
					quizes[quesposition].ansresult = "right";
				
				getcurrentquestion(++quesposition);
			}
		}
		
		//printvalues();
	});
	
	$("#btnPrev").click(function() {
		if(quizes[quesposition].underreview || quizes[quesposition].locked) {
			getcurrentquestion(--quesposition);
			return
		}
		
		if($(document).find("input[type=radio]").length > 0) {
			if(!$(document).find("input[name='ques"+(quesposition+1)+"radiobuttons']:checked").val()) {
				alert("Please select the answer");
			} else {
				var selectedans = $(document).find("input[name='ques"+(quesposition+1)+"radiobuttons']:checked").val();
				quizes[quesposition].userans = selectedans;
				if(quizes[quesposition].correctans != selectedans)
					quizes[quesposition].ansresult = "wrong";
				else
					quizes[quesposition].ansresult = "right";
				
				getcurrentquestion(--quesposition);
			}
		} else {
			if(!$(document).find("input[type=text]").val()) {
				alert("Please select the answer");
			} else {
				var enteredans = $(document).find("input[type=text]").val();
				quizes[quesposition].userans = enteredans;
				if(quizes[quesposition].correctans != enteredans)
					quizes[quesposition].ansresult = "wrong";
				else
					quizes[quesposition].ansresult = "right";
				
				getcurrentquestion(--quesposition);
			}
		}
		
		//printvalues();
	});
	
	$("#btnView").click(function() {
		if(confirm("This question will be marked incorrect & locked if you choose to see the answer right now")) {
			quizes[quesposition].locked = true;
			var htmlcontent = "";
			htmlcontent += "<center><h1> Explanation </h1>";
			htmlcontent += "<h3>Correct Answer: "+quizes[quesposition].correctans+"</h3>";
			htmlcontent += "<h4>Explanation: "+quizes[quesposition].explanation+"</h4></center>";
			$("#pro_que_explain").empty();
			$("#pro_que_explain").append(htmlcontent);
			$("#pro_que_explain").css('display', 'block');
			$("#pro_que_explain").css('border', '1px solid');
			lockupcurrent();
		} else {
			//alert("Selected no");
		}
	});
	
	$("#btnFinish").click(function() {
		
		if($(document).find("input[type=radio]").length > 0) {
			var selectedans = $(document).find("input[name='ques"+(quesposition+1)+"radiobuttons']:checked").val();
			quizes[quesposition].userans = selectedans;
			if(quizes[quesposition].correctans != selectedans)
				quizes[quesposition].ansresult = "wrong";
			else
				quizes[quesposition].ansresult = "right";
		} else {
			var enteredans = $(document).find("input[type=text]").val();
			quizes[quesposition].userans = enteredans;
			if(quizes[quesposition].correctans != enteredans)
				quizes[quesposition].ansresult = "wrong";
			else
				quizes[quesposition].ansresult = "right";
		}
		
		var flag = 0;
		var rights = 0;
		$.each(quizes, function(index, val) {
			$.each(val, function(index, textval) {
				if(index == 'underreview' && textval == true) {
					flag = 1;
				}
				if(index == 'ansresult' && textval == 'right') {
					rights++;
				}
			});		
		});
		if(flag == 1) {
			if(confirm("You still have questions under review. Do you want to finish the quiz anyway?")) {
				$("#pro_que_explain").empty();
				var htmlcontent = "";
				htmlcontent += "<center><h1> Quiz Complete </h1>";
				htmlcontent += "<h2> You Scored "+rights+" out of "+quizes.length+"</h2>";
				htmlcontent += "<button id='restartquiz' name='restart' onClick='window.location.reload()'> Restart Quiz </button></center>";
				$("#pro_que_explain").append(htmlcontent);
				$("#pro_que_explain").css('display', 'block');
				$("#pro_que_explain").css('border', '1px solid');
				
				$("#btnPrev").hide();
				$("#btnReview").hide();
				$("#btnNext").hide();
				$("#btnView").hide();
				$("#btnFinish").hide();
			} 
		} else {
			$("#pro_que_explain").empty();
				var htmlcontent = "";
				htmlcontent += "<center><h1> Quiz Complete </h1>";
				htmlcontent += "<h2> You Scored "+rights+" out of "+quizes.length+"</h2>";
				htmlcontent += "<button id='restartquiz' name='restart' onClick='window.location.reload()'> Restart Quiz </button></center>";
				$("#pro_que_explain").append(htmlcontent);
				$("#pro_que_explain").css('display', 'block');
				$("#pro_que_explain").css('border', '1px solid');
				
				$("#btnPrev").hide();
				$("#btnReview").hide();
				$("#btnNext").hide();
				$("#btnView").hide();
				$("#btnFinish").hide();
		}
	});
});