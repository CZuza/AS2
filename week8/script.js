/* EXERCISE 3
function loadFunction() {
    var element = document.getElementById('pageHeading');
    element.firstChild.nodeValue = 'Changed Heading Text';

    var element = document.getElementById('pageParagraph');
    element.firstChild.nodeValue = 'Changed Paragraph Text';
}

document.addEventListener('DOMContentLoaded', loadFunction); */

/* EXERCISE 4
function myClickFunctionH1() {
    var h1 = document.getElementById('pageHeading');
    h1.firstChild.nodeValue = 'This h1 has been changed';
}

function myClickFunctionP() {
    var p = document.getElementById('pageParagraph');
    p.firstChild.nodeValue = 'This p has been changed too';
}

function myLoad() {
    var h1 = document.getElementById('pageHeading');
    h1.addEventListener('click', myClickFunctionH1);

    var p = document.getElementById('pageParagraph');
    p.addEventListener('click', myClickFunctionP);

}

document.addEventListener('DOMContentLoaded', myLoad); */
