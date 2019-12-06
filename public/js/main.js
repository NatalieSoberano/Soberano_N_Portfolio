(() => {
    // console.log("connected");

const
seeMoreButton = document.querySelectorAll('.thumbnail'),
lightBox = document.querySelector('.lightbox'),
button = document.querySelector('.arrow'),
nav = document.querySelector('.fixed-nav-bar'),
form = document.querySelector('form'), 
submit = form.querySelector('.submit-button'),
hero = document.querySelector('#hero');


var waypoint = new Waypoint({
    element: document.querySelector('#main'),
    handler: function(direction) {
        if (direction == 'up') {
            nav.classList.add('hide');
        }  else if (direction == 'down') {
            nav.classList.remove('hide');
        }
        console.log('waypoint')
    },
    offset: 'bottom-in-view'

   
  })

function handleMail(event) {
    event.preventDefault();

    // formdata will be the values of the fields the user fills out (the inputs)
    // maildata is an object we'll build and send through with those values

    let formdata = new FormData(form),
        maildata = {};

    // parse the form data (it's an iterable, so you have to do it this way)
    // and populate the maildata object with the input values (the formdata entries)
    for (let [key, value] of formdata.entries()) {
        maildata[key] = value;
    }

    let url = `/mail`;

    // use the POST superglobal which is more secure than GET, and hit the /mail route in index.js
    // inside the routes folder. this will take in the formdata we're sending, and use that to send our email
    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },

        body: JSON.stringify(maildata)
    })
        .then(res => res.json())
        .then(data => {
            // remove this when testing is done and everything is working
            console.log(data);

            if (data.response.includes("OK")) {
                // we successfully sent an email via gmail and nodemailer!
                // flash success here, reset the form
                form.reset();
                alert("email was sent!"); // DO NOT use alerts. they are so hacky and gross.
            }
        }) // this will be a success or fail message from the server
        .catch((err) => console.log(err));

    console.log('tried sending mail');
}


function showNav(){
    nav.classList.remove('hide');
}

function buildLightBox(portfolio, el) {
    debugger;
    lightBox.querySelector(".name").textContent = `Name/${portfolio.name}`;
    lightBox.querySelector(".img").src = `images/${portfolio.img}`;
    lightBox.querySelector(".text").textContent = `Text/${portfolio.text}`;
    // the first brackets are a class and the second image is the column in the db

    //show the popover
    lightBox.classList.add('show-lightbox');
}

  //run the fetch API and get the DB data
  function fetchData() {

    let targetEl= this, 
        url =`/svgdata/${this.id}`;


    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        //populate the popover 
        buildLightBox(data, targetEl);
    })
    .catch((err) => console.log(err));
}

const svgGraphic = document.querySelector 
("#svg-wrapper");

// svgGraphic.addEventListener("click", () => {
//     console.log(this);
// })

form.addEventListener('submit', handleMail);

button.addEventListener("click", showNav);

seeMoreButton.forEach(button => button.addEventListener("click", fetchData));

lightBox.querySelector('.close').addEventListener('click', function(){
    lightBox.classList.remove('show-lightbox');
})

})();