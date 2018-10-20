
import 'normalize.css';
import './assets/styles/styles.styl';
import FilterBox from './components/filter-box/filter-box';

let locationDisplay = false;
let proceDisplay = false;
let deadlineDisplay = false;

function render () {
    FilterBox.showLocationList();
}

render();

$('.main-filter__location').click('fast', function (event) {
    event.stopPropagation();

    if (!locationDisplay) {
        locationDisplay = true;
        $('.location-input__tips').show();
        $('.location-input__dynamic-label').addClass('location-input__dynamic-label_lifted');
        $('.location-input__bottom-line').addClass('location-input__bottom-line_expanded');
    } 
});

$('.main-filter__price').click('fast', function (event) {
    event.stopPropagation();

    if (!proceDisplay) {
        proceDisplay = true;
        $('.price-input__dynamic-label').addClass('price-input__dynamic-label_lifted');
        $('.price-input__bottom-line').addClass('price-input__bottom-line_expanded');
    } 
});

$('.main-filter__deadline').click('fast', function (event) {
    event.stopPropagation();

    if (!deadlineDisplay) {
        deadlineDisplay = true;
        $('.deadline-input__dynamic-label').addClass('deadline-input__dynamic-label_lifted');
        $('.deadline-input__bottom-line').addClass('deadline-input__bottom-line_expanded');
    } 
});

/* Remove active effects */
$('html').click('fast', function () {
    if (locationDisplay) {
        locationDisplay = false;
        $(".location-input__tips").hide();
        $('.location-input__dynamic-label').removeClass('location-input__dynamic-label_lifted');
        $('.location-input__bottom-line').removeClass('location-input__bottom-line_expanded');
    }

    if (proceDisplay) {
        proceDisplay = false;
        $('.price-input__dynamic-label').removeClass('price-input__dynamic-label_lifted');
        $('.price-input__bottom-line').removeClass('price-input__bottom-line_expanded');
    }

    if (deadlineDisplay) {
        deadlineDisplay = false;
        $('.deadline-input__dynamic-label').removeClass('deadline-input__dynamic-label_lifted');
        $('.deadline-input__bottom-line').removeClass('deadline-input__bottom-line_expanded');
    }
});