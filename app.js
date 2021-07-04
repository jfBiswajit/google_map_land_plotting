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
  const triangleCoords = [
    { lat: 23.935707144748452, lng: 89.08784488577032 },
    { lat: 23.935721854002622, lng: 89.08810371894026 },
    { lat: 23.935631146908552, lng: 89.08810774225378 },
    { lat: 23.93561643764405, lng: 89.08785293239737 },
  ];

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
