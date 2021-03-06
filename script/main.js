(function () {
  var theImages = document.querySelectorAll('.image-holder'),
      theHeader = document.querySelector('.heading'),
      theSubhead = document.querySelector('.main-copy h2'),
      theSeasonText = document.querySelector('.main-copy p'),
      appliedClass;

      function changeElements(){

      // I want to load dynamic content here
      //debugger;
 let subImages = document.querySelector('.subImagesContainer');
 let objectIndex = dynamicContent [this.id];

//remove all the thumbnail images
while (subImages.firstChild) {
  subImages.removeChild(subImages.firstChild); //while this container has something inside of it, loop through until it has no childs in it
}


// create an image element and add it to the page
objectIndex.images.forEach(function(element, index){
  let newSubImg = document.createElement ('img');
  // add a css class
  newSubImg.classList.add('thumb');
  // add an image source
  newSubImg.src = "images/" + objectIndex.images[index];
  // append it to the container
  subImages.appendChild(newSubImg);
});

 theSubhead.classList.remove(appliedClass);
 theHeader.classList.remove(appliedClass);

 theSubhead.classList.add(this.id);
 theHeader.classList.add(this.id);

 theSubhead.firstChild.nodeValue = objectIndex.headline;
 theSeasonText.firstChild.nodeValue = objectIndex.text;

      appliedClass = this.id;
      }

      theImages.forEach(function(element, index) {
        //loop through and do stuff to each element at the top of the page
        element.addEventListener('click', changeElements, false);
      });

      //initialize the app
      //theSubhead.firstChild.nodeValue = dynamicContent['spring'].headline;
      //theSeasonText.firstChild.nodeValue = dynamicContent['spring'].text;
      //theHeader.classList.add('spring');

document.querySelector('#spring').click();

changeElements.call(document.querySelector('#spring'));


})();
