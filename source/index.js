
import 'normalize.css';
import './assets/styles/styles.styl';
import FilterBox from './components/filter-box/filter-box';

let locationDisplay = false;
let priceDisplay = false;
let deadlineDisplay = false;
let additionalDisplay = false;

function render () {
    FilterBox.showLocationList();
}

render();

function searchClickInputCB (inputType, event) {
    event.stopPropagation();

    if (inputType === 'location') {
        locationDisplay = true;
        $('.location-input__tips').show();
        $('.location-input__dynamic-label').addClass('location-input__dynamic-label_lifted');
        $('.location-input__bottom-line').addClass('location-input__bottom-line_expanded');
    } else if (inputType !== 'location' && locationDisplay) {
        $(".location-input__tips").hide();
        $('.location-input__dynamic-label').removeClass('location-input__dynamic-label_lifted');
        $('.location-input__bottom-line').removeClass('location-input__bottom-line_expanded');
    }

    if (inputType === 'price') {
        priceDisplay = true;
        $('.price-input__dynamic-label').addClass('price-input__dynamic-label_lifted');
        $('.price-input__bottom-line').addClass('price-input__bottom-line_expanded');
    } else if (inputType !== 'price' && priceDisplay) {
        $('.price-input__dynamic-label').removeClass('price-input__dynamic-label_lifted');
        $('.price-input__bottom-line').removeClass('price-input__bottom-line_expanded');
    }

    if (inputType === 'deadline') {
        deadlineDisplay = true;
        $('.deadline-input__dynamic-label').addClass('deadline-input__dynamic-label_lifted');
        $('.deadline-input__bottom-line').addClass('deadline-input__bottom-line_expanded');
    } else if (inputType !== 'deadline' && deadlineDisplay) {
        $('.deadline-input__dynamic-label').removeClass('deadline-input__dynamic-label_lifted');
        $('.deadline-input__bottom-line').removeClass('deadline-input__bottom-line_expanded');
    }
}

$('.main-filter__location').click('fast', searchClickInputCB.bind(this, 'location'));
$('.main-filter__price').click('fast', searchClickInputCB.bind(this, 'price'));
$('.main-filter__deadline').click('fast', searchClickInputCB.bind(this, 'deadline'));

/* Remove active effects */
$('html').click('fast', function () {
    if (locationDisplay) {
        locationDisplay = false;
        $(".location-input__tips").hide();
        $('.location-input__dynamic-label').removeClass('location-input__dynamic-label_lifted');
        $('.location-input__bottom-line').removeClass('location-input__bottom-line_expanded');
    }

    if (priceDisplay) {
        priceDisplay = false;
        $('.price-input__dynamic-label').removeClass('price-input__dynamic-label_lifted');
        $('.price-input__bottom-line').removeClass('price-input__bottom-line_expanded');
    }

    if (deadlineDisplay) {
        deadlineDisplay = false;
        $('.deadline-input__dynamic-label').removeClass('deadline-input__dynamic-label_lifted');
        $('.deadline-input__bottom-line').removeClass('deadline-input__bottom-line_expanded');
    }
});

$('.controls-group__additional').click('fast', function () {
    additionalDisplay = !additionalDisplay;

    if (additionalDisplay) {
        $('.additional-params__arrow').addClass('additional-params__arrow_expanded')
        $('.main-filter__additional').addClass('main-filter__additional_expanded')
    } else {
        $('.additional-params__arrow').removeClass('additional-params__arrow_expanded')
        $('.main-filter__additional ').removeClass('main-filter__additional_expanded')
    }
})