
const clothingList = document.querySelector('.clothing');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');

const setupUI = (user) => {
    if(user){
        //account info
        const html = `
        <div>User: ${user.email}</div>
        `;
        const additions = `
        <div>Contributions Today: ${contributions}</div>
        `;
        accountDetails.innerHTML = html + additions;
        //toggle UI elements
        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
    }
    else{
        //hide account info
        accountDetails.innerHTML = '';
        //toggle UI elements
        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');
    }
}

//setup guides
const setUpClothing = (data) => {

    if(data.length) {
        let html = '';
        data.forEach(doc => {
        const clothes = doc.data();
        console.log(clothes);
        const li = `
        <li>
            <div class="collapsible-header grey lighten-4"> ${clothes.clothing_item} </div>
            <div class="collapsible-body white"> 
            <h6>${clothes.description} </h6>
            <h6> <small>Source: ${clothes.source}</small></h6>
            </div>
        </li>
        `;
        html += li;
        });
    
    clothingList.innerHTML = html;
    }
    else {
        clothingList.innerHTML = '<h5 class = "center-align" style = "color: black; position:relative; top:100px; font-weight: bold;">Login to view closet</h5>  '
    }
  };
/*const setUpClothing = (data) => {
    let html = '';
    data.forEach(doc => {
        const clothing = doc.data();
        const li = `
        <li>
            <div class = "collapsible-header grey lighten-4">${clothing.title}</div>
            <div class = "collapsible-body white">${clothing.content}</div>
        </li>
        `;
        html += li
    });

    clothingList.innerHTML = html;
}
*/

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });

