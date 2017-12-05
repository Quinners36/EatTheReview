var config = {
  apiKey: "AIzaSyD07XUsubZBt2kGhyG2xPOfOq49UZTyaw4",
  authDomain: "http://eatthereview.openode.io/",
  databaseURL: "https://eat-the-review.firebaseio.com",
  projectId: "eat-the-review",
  storageBucket: "",
  messagingSenderId: "847435972429"
};
firebase.initializeApp(config);

$(document).ready(function(){

    var user;

//User registering
  $('#btnSignup').click(function(){

      var email=$('#signupemail').val();
      var password=$('#signuppassword').val();

      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          console.log(error.code);
          console.log(error.message);
          $('#errorarea').html(error.code +'<br>'+ error.message);
          // ...
      });
	  
	setTimeout(function(){
        var user = firebase.auth().currentUser;
        console.log(user);

        if (user) {
            window.location = 'Home.html';
        } else {
            // No user is signed in.
        }
}, 1000);

  });

  $('#Login').click(function(){

      var email=$('#loginemail').val();
      var password=$('#loginpassword').val();

      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          $('#errorarea2').html(error.code +'<br>'+ error.message);
          // ...
      });

      myVar = setTimeout(function(){
        var user = firebase.auth().currentUser;
        console.log(user);

        if (user) {
            window.location = 'Home.html';
        } else {
            // No user is signed in.
        }
      }, 1000);


  });

  $('#signout').click(function(){
        firebase.auth().signOut().then(function() {
            window.location ='index.html'
        }, function(error) {
            // An error happened.
        });
    });

  $('#ChangePassword').click(function(){
    var user = firebase.auth().currentUser;
    var newPassword = $('#NewP').val();
    console.log(newPassword);


    user.updatePassword(newPassword).then(function() {
      // Update successful.
      console.log("Updated successful")
    }).catch(function(error) {
      // An error happened.
      console.log("Fail");
      console.log(error);
    });
    });

	$('#ChangeEmail').click(function(){
    var user = firebase.auth().currentUser;
    var NEmail=$('#NewE').val();

    user.updateEmail(NEmail).then(function() {
      // Update successful.
      console.log("Updated successful")
    }).catch(function(error) {
      // An error happened.
      console.log("Fail");
      console.log(error);
    });
    });

	$('#ChangeInfo').click(function(){

		user=firebase.auth().currentUser;

		var Ad1=$('#AddressL1').val();
		var Ad2=$('#AddressL2').val();
		var City=$('#City').val();
		var County=$('#County').val();
		var PCo=$('#PCode').val();
		var Country=$('#Country').val();
    console.log("Running");


		firebase.database().ref('users/' + user.uid).set({
		AddressLine1: Ad1,
		AddressLine2: Ad2,
		City : City,
		County : County,
		PostCode : PCo,
		Country : Country
		});

    });

  $('#submitReview').click(function(){
		var user = firebase.auth().currentUser;

		var a = window.location.toString();
		var Ruid = a.substring(a.indexOf("?")+1);

        var ResterauntName=$('#RName').val();
        var ResterauntRating=$('#RRating').val();
        var ResterauntReview=$('#RReview').val();

		var postData={

			Author: user.email,
            ResterauntRating: ResterauntRating,
            ResterauntReview : ResterauntReview
		}

		 // Get a key for a new Post.
		var newReviewKey = firebase.database().ref().child('Reviews').push().key;

		// Write the new post's data simultaneously in the posts list and the user's post list.
		var updates = {};
		updates['/ResterauntReviews/' + Ruid + '/' + newReviewKey] = postData;

		return firebase.database().ref().update(updates);


    });


		var a = window.location.toString();
		var Ruid = a.substring(a.indexOf("?")+1);




	  var database=firebase.database();
      var ref=database.ref('ResterauntReviews/'+Ruid+'/').orderByChild('ResterauntRating');

      //pull food from the db
      ref.once("value")
        .then(function(snapshot) {
          ref.once("value", function(snapshot) {
            snapshot.forEach(function(child) {
			var Author = child.val().Author;
			var Rating = child.val().ResterauntRating;
			var Review = child.val().ResterauntReview;

			var html=$('#RArea').html();

			html=html+'<div> Author: '+Author+'<br> Rating: '+Rating+'<br> Review:<br>'+Review+'</div>';
			$('#RArea').html(html);
			console.log(Author);
            });
          });
        });

});

  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user.uid);
      } else {

      }
  });
