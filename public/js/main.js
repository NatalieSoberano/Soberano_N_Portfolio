(() => {
const
seeMoreButton = document.querySelectorAll('.thumbnail'),
lighBox = document.querySelector('.lightbox');

function buildLightBox(portfolio, el) {
    lightBox.querySelector(".image").data = `images/${portfoliodata.IMG}`;
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

seeMoreButton.forEach(button => button.addEventListener("click", fetchData));

lightBox.querySelector('.close').addEventListener('click', function(){
    lightBox.classList.remove('show-lightbox');
})

})();