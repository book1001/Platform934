/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

function initialize() {
  const coordinate = { lat: 51.5324529, lng: -0.1235041 };
  // const coordinate = { lat: 51.5320134, lng: -0.1241403 };

  const streetView = document.getElementById('street-view');
  const map = new google.maps.Map(streetView, {
      center: coordinate,
      zoom: 18,
      streetViewControl: false,
    }
  );

  // Show Street View Panorama
  const panorama = map.getStreetView();
  panorama.setPosition(coordinate);
  panorama.setPov({
    heading: 320,
    pitch: 18,
  });
  panorama.setVisible(true);

  // Marker
  const markers = [
    [
      "",
      37.5505987,
      126.9188974,
      "./icons/Detail_2021_able.svg",
      300,
      300,
      '<div id="firstHeading">Karan</div>' +
        '<div id="bodyContent">' +
        "When will I learn to dance?"
    ],
    [
      "",
      44.2621678,
      -0.0712577,
      "./icons/dancing5.gif",
      400,
      400,
      '<div id="firstHeading">Ben</div>' +
        '<div id="bodyContent">' +
        "YAY!"
    ],
    // [
    //   "",
    //   37.6808539,
    //   127.3943471,
    //   "./icons/dancing2.gif",
    //   400,
    //   400,
    //   '<div id="firstHeading">Sunho</div>' +
    //     '<div id="bodyContent">' +
    //     "I stay dancin'"
    // ],
    [
      "",
      -41.2923999,
      174.7789901,
      "./icons/dancing2.gif",
      400,
      400,
      '<div id="firstHeading">Ian</div>' +
        '<div id="bodyContent">' +
        "I've always wanted to visit New Zealand so I'm glad I was able to dance here!"
    ],
  ];

  for (let i = 0; i<markers.length; i++){
    const currMarker = markers[i];

    const marker = new google.maps.Marker({
      position: { lat: currMarker[1], lng: currMarker[2] },
      map,
      title: currMarker[0],

      icon: {
        url: currMarker[3],
        scaledSize: new google.maps.Size(currMarker[4],currMarker[5]) //GoogleMaps Size(pixel,pixel)
      },
    });
    const infowindow = new google.maps.InfoWindow({
      content: currMarker[6],
      maxWidth: 400
    });
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
  }
  //~Marker



  const input = document.getElementById('input');
  panorama.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  const address = document.getElementById('address');
  const autocomplete = new google.maps.places.Autocomplete(address);
  autocomplete.addListener('place_changed', function () {
    const place = autocomplete.getPlace();

    const latitude = place.geometry['location'].lat();
    const longitude = place.geometry['location'].lng();

    if (latitude !== undefined && longitude !== undefined) {
      document.getElementById('latitude').value = latitude;
      document.getElementById('longitude').value = longitude;

      panorama.setPosition({
        lat: latitude,
        lng: longitude,
      });
    }
  });
}

window.initialize = initialize;
