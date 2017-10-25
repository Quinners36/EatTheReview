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


});
