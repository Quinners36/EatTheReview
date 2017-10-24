(function() {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD07XUsubZBt2kGhyG2xPOfOq49UZTyaw4",
    authDomain: "eat-the-review.firebaseapp.com",
    databaseURL: "https://eat-the-review.firebaseio.com",
    projectId: "eat-the-review",
    storageBucket: "eat-the-review.appspot.com",
    messagingSenderId: "847435972429"
  };
  firebase.initializeApp(config);

  
  const signupmail = document.getElementById("signupemail");
  const signupassword =document.getElementById("signupassword");
  const passwordrpt=document.getElementById("passwordrpt");
  const btnLogin=document.getElementById("btnLogin");
  const btnSignup=document.getElementById("btnSignup");
  
  //Add login event 
  btnLogin.addEventListener('click',e=> {
	  //get email and pass
	  const email = txtEmail.value;
	  const pass = txtPassword.value;
	  const auth = firebase.auth();
	  //sign in
	  const promise = auth.signInWithEmailAndPassword(email,password);
	  promise.catch(e => console.log(e.message));
  });
  
}());

