//Create a function that selects a number(salary cap) between 20-150.//
//to do that we need 120-19= 101 + 19 //

$ (document).ready (function(){
	var Random=Math.floor(Math.random()*130+20)

// next have to append var=random to randomNumber id in html//
//class=numberMatch//
// also has to be global//

	$('#randomNumber').text(Random);

// next have to make random number (salary) function per player//
//set salary per player from 1-12 so you do 12-1=11+1//

	var n1= Math.floor(Math.random()*11+1)
	var n2= Math.floor(Math.random()*11+1)
	var n3= Math.floor(Math.random()*11+1)
	var n4= Math.floor(Math.random()*11+1)
  var n5= Math.floor(Math.random()*11+1)
  var n6= Math.floor(Math.random()*11+1)
  var n7= Math.floor(Math.random()*11+1)
  var n8= Math.floor(Math.random()*11+1)


// click function enable for the players //
	$('#porzingis').on('click',function(){
    userTotal = userTotal + n1;
    console.log("New userTotal= " + userTotal);
    $('#scoreTotal').text(userTotal); 
    //sets win/lose conditions
        if (userTotal == Random){
          winner();
        }
        else if (userTotal > Random){
          loser();
     	}
 	})

    $('#kyrie').on('click',function(){
    userTotal = userTotal + n2;
    console.log("New userTotal= " + userTotal);
    $('#scoreTotal').text(userTotal); 
    //sets win/lose conditions
        if (userTotal == Random){
          winner();
        }
        else if (userTotal > Random){
          loser();
      	}
    })


    $('#derozen').on('click',function(){
    userTotal = userTotal + n3;
    console.log("New userTotal= " + userTotal);
    $('#scoreTotal').text(userTotal); 
    //sets win/lose conditions
        if (userTotal == Random){
          winner();
        }
        else if (userTotal > Random){
          loser();
      	}
    })


    $('#kobe').on('click',function(){
    userTotal = userTotal + n4;
    console.log("New userTotal= " + userTotal);
    $('#scoreTotal').text(userTotal); 
    //sets win/lose conditions
        if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
      	}
    })

    $('#harden').on('click',function(){
    userTotal = userTotal + n5;
    console.log("New userTotal= " + userTotal);
    $('#scoreTotal').text(userTotal); 
    //sets win/lose conditions
        if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        }
    })

    $('#westbrook').on('click',function(){
    userTotal = userTotal + n6;
    console.log("New userTotal= " + userTotal);
    $('#scoreTotal').text(userTotal); 
    //sets win/lose conditions
        if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        }
    })

    $('#lebron').on('click',function(){
    userTotal = userTotal + n7;
    console.log("New userTotal= " + userTotal);
    $('#scoreTotal').text(userTotal); 
    //sets win/lose conditions
        if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        }
    })

    $('#steph').on('click',function(){
    userTotal = userTotal + n8;
    console.log("New userTotal= " + userTotal);
    $('#scoreTotal').text(userTotal); 
    //sets win/lose conditions
        if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        }
    });


// number counter for wins and losses and append to html//

	var userTotal = 0;
	var wins = 0;
	var losses = 0;

$('numberWins').text(wins);
$('numberLosses').text(losses);

// win alert function //

function winner(){
	alert("Congrats on your Dream Team! Let's win some rings!");
	wins++;
	$('#numberWins').text(wins);
	reset();
}

// lose alert function //

function loser(){
	alert("You have BLOWN your Salary Cap! Sorry we are broke.")
	losses++;
	$('#numberLosses').text(losses);
	reset();
}


// resetting function - after result//

function reset(){
	Random=Math.floor (Math.random()*101+19);
	console.log(Random)
	
	$('#randomNumber').text(Random);
	n1= Math.floor(Math.random()*11+1);
	n2= Math.floor(Math.random()*11+1);
	n3= Math.floor(Math.random()*11+1);
	n4= Math.floor(Math.random()*11+1);
	userTotal = 0;
	$('#scoreTotal').text(userTotal);
	}

});