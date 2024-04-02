import '../css/main.css';
import $ from 'jquery';
import _ from 'lodash';

$('body').prepend('<div id="logo"></div>');
$("<p>Holberton Dashboard</p>").appendTo('body');
$("<p>Dashboard data for the students</p>").appendTo('body');
$("<button>Click here to get started</button>").appendTo('body');
$("<p id='count'></p>").appendTo('body');
$("<p>Copyright - Holberton School</p>").appendTo('body');

let count = 0;

function updateCounter() {
    count++;
    $("#count").html(`${count} clicks on the button`);
};

$('button').on('click', _.debounce(updateCounter, 500));