(function () {


var theImages = document.querySelectorAll('.image-holder'),
    theHeader = document.querySelector('.header'),
    theSubhead = document.querySelector('.main-copy h2'),
    theSeasonText = document.querySelector('.main-copy p'),
    appliedClass;

    function changeElements () {

      //i want to load dynamic content here

      debugger;

    }

    theImages.forEach(function(element, index) {
    //loop through and do stuff to each element at the top of the page
    element.addEventListener('click', changeElements, false)
    });


})();
