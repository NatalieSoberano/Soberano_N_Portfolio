(() => {
    // console.log("connected");

const
seeMoreButton = document.querySelectorAll('.thumbnail'),
lightBox = document.querySelector('.lightbox'),
button = document.querySelector('.arrow'),
nav = document.querySelector('.fixed-nav-bar');

function showNav(){
    nav.classList.remove('hide');

    // console.log("hi");
}

function buildLightBox(portfolio, el) {
    lightBox.querySelector(".name").text = `Name/${portfolio.name}`;
    lightBox.querySelector(".img").data = `Image/${portfolio.img}`;
    lightBox.querySelector(".text").data = `Text/${portfolio.text}`;
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

button.addEventListener("click", showNav);

seeMoreButton.forEach(button => button.addEventListener("click", fetchData));

lightBox.querySelector('.close').addEventListener('click', function(){
    lightBox.classList.remove('show-lightbox');
})

})();