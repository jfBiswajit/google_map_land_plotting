// This example requires the Drawing library. Include the libraries=drawing
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=drawing">
function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 23.93567, lng: 89.08797 },
    zoom: 20,
  });

  const drawingManager = new google.maps.drawing.DrawingManager({
    drawingMode: google.maps.drawing.OverlayType.MARKER,
    drawingControl: true,
    drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER,
      drawingModes: [google.maps.drawing.OverlayType.POLYGON],
    },
    markerOptions: {
      visible: false,
    },
    polygonOptions: {
      fillColor: '#ff0800',
      fillOpacity: 0.35,
      strokeWeight: 5,
      strokeColor: '#ff0800',
      clickable: false,
      editable: false,
      zIndex: 1,
    },
  });

  drawingManager.setMap(map);

  // Testing
  var landShape = [];

  google.maps.event.addListener(
    drawingManager,
    'polygoncomplete',
    function (polygon) {
      var path = polygon.getPath();

      for (var i = 0; i < path.length; i++) {
        landShape.push({
          lat: path.getAt(i).lat(),
          lng: path.getAt(i).lng(),
        });
      }
      
      console.log(JSON.stringify(landShape));
      
      // map.setCenter({
      //   lat: 23.8103,
      //   lng: 90.4125,
      // });
    }
  );

  // land one
  const landOneCordinate = [
    { lat: 23.935707144748452, lng: 89.08784488577032 },
    { lat: 23.935721854002622, lng: 89.08810371894026 },
    { lat: 23.935631146908552, lng: 89.08810774225378 },
    { lat: 23.93561643764405, lng: 89.08785293239737 },
  ];

  const landOne = new google.maps.Polygon({
    paths: landOneCordinate,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
  });
  
  // land two
  const landTwoCordinate = [
    { lat: 23.936088551008456, lng: 89.08922401891432 },
    { lat: 23.93607751909933, lng: 89.08933935390196 },
    { lat: 23.93597455456866, lng: 89.08932594285689 },
    { lat: 23.935989263792358, lng: 89.08920524345122 },
  ];

  const landTwo = new google.maps.Polygon({
    paths: landTwoCordinate,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
  });
  
  // land three
  const landThreeCordinate = [
    { lat: 23.934736373658737, lng: 89.0898780214887 },
    { lat: 23.934616247116857, lng: 89.08984583498052 },
    { lat: 23.93458682835486, lng: 89.08995580555013 },
    { lat: 23.934699600239426, lng: 89.08998799205831 },
  ];

  const landThree = new google.maps.Polygon({
    paths: landThreeCordinate,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
  });
  
  landOne.setMap(map);
  landTwo.setMap(map);
  landThree.setMap(map);
}
