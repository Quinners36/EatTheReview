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

      user = firebase.auth().currentUser;

      if (user) {
          window.location = 'Home.html';
      } else {
          // No user is signed in.
      }

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
    var newPassword = $('NPassword').val();

    user.updatePassword(newPassword).then(function() {
      // Update successful.
      console.log("Updated successful")
    }).catch(function(error) {
      // An error happened.
      console.log("Fail")
    });
    });

	$('#ChangeEmail').click(function(){
    var user = firebase.auth().currentUser;
    var NEmail=$('Email').val();

    user.updateEmail(NEmail).then(function() {
      // Update successful.
      console.log("Updated successful")
    }).catch(function(error) {
      // An error happened.
      console.log("Fail")
    });
    });

	$('#ChangeInfo').click(function(){

		user=firebase.auth().currentUser;
		var Ad1=$('#AddressL1').val();
		var Ad2=$('#AddressL2').val();
		var City=$('City').val();
		var County=$('#Country').val();
		var PC=$('#PCode').val();
		var Country=$('#Country').val();


		firebase.database().ref('users/' + user).set({
		AddressLine1: Ad1,
		AddressLine2: Ad2,
		City : City,
		County : County,
		PostCode : PC,
		Country : Country
		});

    });

  $('#submitReview').click(function(){


        var ResterauntName=$('#RName').val();
        var ResterauntRating=$('#RRating').val();
        var ResterauntReview=$('#RReview').val();

        firebase.database().ref('Reviews').push({
            ResterauntName: ResterauntName,
            ResterauntRating: ResterauntRating,
            ResterauntReview : ResterauntReview
        });
    });

});

  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user.uid);
      } else {

      }
  });
