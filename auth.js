var contributions = 0

//listen for auth status changes
auth.onAuthStateChanged(user => {
    if(user){
        //get data
        db.collection('clothing').onSnapshot(snapshot => {
        setUpClothing(snapshot.docs);
        setupUI(user);
})
        console.log('user logged in: ', user);
    }
    else{
        setupUI();
        setUpClothing([]);
        console.log('user logged out');
        
    }

})

//create new guide
const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', (e) => {
    e.preventDefault();
    contributions += 1
    db.collection('clothing').add({
        clothing_item: createForm['item'].value,
        description: createForm['text'].value,
        source: createForm['source-text'].value
     }).then(() => {
        //close modal and reset form
        const modal = document.querySelector('#modal-create');
        M.Modal.getInstance(modal).close();
        createForm.reset();
     }).catch(err =>{
        console.log(err.message)
     })
})

//signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    //signup the user
    auth.createUserWithEmailAndPassword(email, password).then(cred =>{
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    })
})

//logout
const logout = document.querySelector('#logout');
logout.addEventListener("click", (e) => {
    e.preventDefault();
    auth.signOut()
});

//login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    //get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
        
        
    })
})



