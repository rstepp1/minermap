const UNCC_BOUNDS = {
    north: 35.315700,
    south: 35.299345,
    west: -80.746187,
    east: -80.724543,
};

function initMap() {
    // The location of uncc
    const uncc = { lat: 35.3071, lng: -80.7352 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: uncc,
        disableDefaultUI: true,
        restriction: {
            latLngBounds: UNCC_BOUNDS,
            strictBounds: false,
        },
    });

    const marker = new google.maps.Marker({
        position: uncc,
        map: map,
    });
}

window.initMap = initMap;
