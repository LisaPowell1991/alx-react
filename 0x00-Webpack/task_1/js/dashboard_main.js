import $ from 'jquery';
import _ from 'lodash';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;

function updateCounter() {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
}

// Debounce to prevent spamming
const debouncedUpdateCounter = _.debounce(updateCounter, 300);

// Bind the debounced function to button click event
$('#start-btn').on('click', debouncedUpdateCounter);