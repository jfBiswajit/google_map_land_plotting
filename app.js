// This example requires the Drawing library. Include the libraries=drawing
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=drawing">
function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 24.886, lng: -70.268 },
    zoom: 5,
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
      strokeWeight: 2,
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
      console.log('polygon complete');

     for (var i = 0; i < polygon.getPath().getLength(); i++) {
      //  landShape.push({lat:});
        console.log(polygon.getPath().getAt(i).toUrlValue(6));
     }
    }
  );

  // Define the LatLng coordinates for the polygon's path.
  const triangleCoords = [
    { lat: 25.774, lng: -80.19 },
    { lat: 18.466, lng: -66.118 },
    { lat: 32.321, lng: -64.757 },
    { lat: 25.774, lng: -80.19 },
  ];

  // Construct the polygon.
  const bermudaTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
  });
  bermudaTriangle.setMap(map);
}
