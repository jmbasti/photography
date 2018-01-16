/*
var people = document.getElementById('people');
people.addEventListener('click', function(e){
    e.preventDefault(); 
    console.log('ok');

});
*/
/*
var testPage = document.getElementById('test1');
var divTest = document.getElementById('test');
divTest.style.display = 'none';

testPage.addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('testContainer').style.display = 'none';
    divTest.style.display = 'block';
});
*/
/*------------------------------------MAIN NAVIGATION---------------------------------------------------------*/
/*
var headerPeople = document.getElementById('containerHeaderPeople');
headerPeople.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('container').style.display = 'none';
    people.style.display = 'block';
    places.style.display = 'none';
});


var headerPlaces = document.getElementById('containerHeaderPlaces');
headerPlaces.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('container').style.display = 'none';
    places.style.display = 'block';
});


var headerAbout = document.getElementById('containerHeaderAbout');
headerAbout.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('container').style.display = 'none';
    about.style.display = 'block';
    people.style.display = 'none';
    places.style.display = 'none';
});


var headerContact = document.getElementById('containerHeaderContact');
headerContact.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('container').style.display = 'none';
    contact.style.display = 'block';
    about.style.display = 'none';
    people.style.display = 'none';
    places.style.display = 'none';
});

*/







/*------------------------------------SECTION PEOPLE---------------------------------------------------------*/
/*var people = document.getElementById('people');
people.style.display = 'none';

var sectionPeople = document.getElementById('section__people-btn');
sectionPeople.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('container').style.display = 'none';
    people.style.display = 'block';
    places.style.display = 'none';
});

*/
/*------------------------------------SECTION PLACES---------------------------------------------------------*/
/*var places = document.getElementById('places');
places.style.display = 'none';

var sectionPlaces = document.getElementById('section__places-btn');
sectionPlaces.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('container').style.display = 'none';
    places.style.display = 'block';
});
*/
/*------------------------------------SECTION ABOUT---------------------------------------------------------*/
/*
var about = document.getElementById('about');
about.style.display = 'none';

var sectionAbout = document.getElementById('section__about-btn');
sectionAbout.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('container').style.display = 'none';
    about.style.display = 'block';
    people.style.display = 'none';
    places.style.display = 'none';
});


*/
/*------------------------------------SECTION CONTACT---------------------------------------------------------*/
/*
var contact = document.getElementById('contact');
contact.style.display = 'none';

var sectionContact = document.getElementById('section__contact-btn');
sectionContact.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('container').style.display = 'none';
    contact.style.display = 'block';
    about.style.display = 'none';
    people.style.display = 'none';
    places.style.display = 'none';
});

*/
/*-------------------------------------------------------------------------------------------------------------*/
/*
$(function() {

    if (localStorage) { //if local storage
        if (!localStorage.getItem('visited')) { // if not site is visited before
            $('#slickbox').show(); //show element
        }
    } else { //if not local storage use cookies or just show element in old browsers
        $('#slickbox').show();
    }

    // shows the slickbox on clicking the noted link  
    $('#slick-show').click(function() {
        $('#slickbox').show('slow');
        return false;
    });
    // hides the slickbox on clicking the noted link  
    $('#slick-hide').click(function() {
        $('#slickbox').hide('fast');
        localStorage.setItem('visited', true); //set flag, site now visited and element hidden
        return false;
    });

    // toggles the slickbox on clicking the noted link  
    $('#slick-toggle').click(function() {
        $('#slickbox').toggle(400);
        return false;
    });
});​

*/

