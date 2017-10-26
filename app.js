(function() {

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyD07XUsubZBt2kGhyG2xPOfOq49UZTyaw4",
    authDomain: "eat-the-review.firebaseapp.com",
    databaseURL: "https://eat-the-review.firebaseio.com",
    projectId: "eat-the-review",
    storageBucket: "eat-the-review.appspot.com",
    messagingSenderId: "847435972429"
  };
 firebase.initializeApp(config);

  
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword =document.getElementById('txtPassword');
  const btnLogin=document.getElementById('btnLogin');
  const btnSignup=document.getElementById('btnSignup');
   const btnLogout=document.getElementById('btbLogout');
  
  
  //Add login event 
  btnLogin.addEventListener('click',e=> {
	  //get email and pass
	  const email = txtEmail.value;
	  const pass = txtPassword.value;
	  const auth = firebase.auth();
	  //sign in
	  const promise = auth.signInWithEmailAndPassword(email,pass);
	  promise.catch(e => console.log(e.message));
  });
    btnSignup.addEventListener('click',e=> {
	  //get email and pass
	  const email = txtEmail.value;
	  const pass = txtPassword.value;
	  const auth = firebase.auth();
	  //sign in
	  const promise = auth.createUserWithEmailAndPassword(email,pass);
	  promise.catch(e => console.log(e.message));
  });
  
  btnLogout.addEventListener('click', e => {
	  firebase.auth().signOut();
  });
  
  firebase.auth().onAuthStateChanged(firebaseUser => {
	  if(firebaseUser){
		  console.log(firebaseUser);
		  btnLogout.classList.remove('hide');
	  }else{
		  console.log('not logged in');
		  btnLogout.classList.remove('hide');
	  }
  
});

}());