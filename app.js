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
      strokeWeight: 3,
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
      
      map.setCenter({
        lat: 23.8103,
        lng: 90.4125,
      });
    }
  );

  // Define the LatLng coordinates for the polygon's path.
  const triangleCoords = [
    { lat: 31.82115566688796, lng: -75.277765625 },
    { lat: 27.46886055111971, lng: -74.5306953125 },
    { lat: 28.82500382433339, lng: -80.99065625 },
    { lat: 30.996033438254603, lng: -77.9584296875 },
    { lat: 31.97039574462498, lng: -83.1439765625 },
    { lat: 33.37601053783669, lng: -80.4193671875 },
    { lat: 32.30529932423105, lng: -65.7416328125 },
    { lat: 31.03369604870428, lng: -71.937921875 },
    { lat: 31.97039574462498, lng: -74.48675 },
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
