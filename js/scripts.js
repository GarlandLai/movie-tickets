//-------- Business Logic ------- //

function Ticket(movie, age, time, student) {
  this.movie = movie
  this.age = age
  this.time = time
  this.student = student
}
// This function evalutaes the movie input and adds 1 if its a new movie //
function evalMovie(movie) {
  if (movie === 1){
    return 1
  } else {
    return 0
  }
}

// This function evaluates the time input and asigns different prices depending on time //
function evalTime(time) {
  if (time === 2) {
    return 1
  } else if (time === 1) {
    return 2
  }
}

// This function evaluates the age input //
function evalAge(age) {
  if (age <= 12 || age >= 65) {
    return 1
  } else {
    return 2
  }
}

// This function evaluates the student input //
function evalStudent(student) {
  if (student === "true") {
    return 1
  } else {
    return 0
  }
}


//-------- User Logic --------- //

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var movieInput = parseInt($("#movie").val());
    // console.log(movieInput);
    var timeInput = parseInt($("input:radio[name=time]:checked").val());
    var ageInput = parseInt($("#age").val());
    var studentInput = ($("input:checkbox[name=student]:checked").val());
    var basePrice = 3;
    var firstEval = evalMovie(movieInput);
    basePrice = basePrice + firstEval;
    var secondEval = evalTime(timeInput);
    basePrice = basePrice + secondEval;
    var thirdEval = evalAge(ageInput);
    basePrice = basePrice + thirdEval;
    var fourthEval = evalStudent(studentInput);
    basePrice = basePrice - fourthEval;
    var finalPrice = basePrice;
    $(".output").text("$" + finalPrice + ".00");
  });
});
