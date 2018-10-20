
import 'normalize.css';
import './assets/styles/styles.styl';
import FilterBox from './components/filter-box/filter-box';

let locationListDisplay = false;

function render () {
    FilterBox.showLocationList();
}

render();

$('.main-filter__location').click('fast', function () {
    locationListDisplay = !locationListDisplay;

    if (locationListDisplay === true) {
        $('.location-input__tips').show();
        $('.location-input__dynamic-label').addClass('location-input__dynamic-label_lifted');
    } else if (locationListDisplay === false) {
        $(".location-input__tips").hide();
        $('.location-input__dynamic-label').removeClass('location-input__dynamic-label_lifted');
    }
});