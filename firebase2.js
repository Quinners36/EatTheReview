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


	$('#signout').click(function(){ 
		firebase.auth().signOut().then(function() {
			window.location ='index.html'
			}, function(error) {
			// An error happened.
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

    console.log(user);




});
