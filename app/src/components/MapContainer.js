import React from 'react';
import { GoogleMap, LoadScript, Data } from '@react-google-maps/api'
import { Typography, Box, makeStyles, Grid } from '@material-ui/core';

function MapContainer() {
  let apiKey = '';
  let zoom = 45;
  const [lat, setLat] = React.useState('');
  const [lng, setLgn] = React.useState('');

  const mapOptions = {
    // controlPosition: "TOP_LEFT",
    controls: ["Point"],
    drawingMode: "Point", //  "LineString" or "Polygon".
    featureFactory: geometry => {
      console.log(geometry);
      setLat(geometry.g.lat());
      setLgn(geometry.g.lng());
    },
    // Type:  boolean
    // If true, the marker receives mouse and touch events. Default value is true.
    clickable: true,

    // Type:  string
    // Mouse cursor to show on hover. Only applies to point geometries.
    // cursor: 'cursor',

    // Type:  boolean
    // If true, the object can be dragged across the map and the underlying feature will have its geometry updated. Default value is false.
    draggable: true,

    // Type:  boolean
    // If true, the object can be edited by dragging control points and the underlying feature will have its geometry updated. Only applies to LineString and Polygon geometries. Default value is false.
    editable: false,

    // Type:  string
    // The fill color. All CSS3 colors are supported except for extended named colors. Only applies to polygon geometries.
    fillColor: "#FF0055",

    // Type:  number
    // The fill opacity between 0.0 and 1.0. Only applies to polygon geometries.
    fillOpacity: 1,

    // Type:  string|Icon|Symbol
    // Icon for the foreground. If a string is provided, it is treated as though it were an Icon with the string as url. Only applies to point geometries.
    // icon: 'icon',

    // Type:  MarkerShape
    // Defines the image map used for hit detection. Only applies to point geometries.
    // shape: 'shape',

    // Type:  string
    // The stroke color. All CSS3 colors are supported except for extended named colors. Only applies to line and polygon geometries.
    strokeColor: "#00FF55",

    // Type:  number
    // The stroke opacity between 0.0 and 1.0. Only applies to line and polygon geometries.
    strokeOpacity: 1,

    // Type:  number
    // The stroke width in pixels. Only applies to line and polygon geometries.
    strokeWeight: 2,

    // Type:  string
    // Rollover text. Only applies to point geometries.
    title: "Title",

    // Type:  boolean
    // Whether the feature is visible. Defaults to true.
    visible: true,

    // Type:  number
    // All features are displayed on the map in order of their zIndex, with higher values displaying in front of features with lower values. Markers are always displayed in front of line-strings and polygons.
    zIndex: 2
  };

  return (
    <Box>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={6}>
          <LoadScript
            id="script-loader"
            googleMapsApiKey={"" + apiKey + ""}
          >
            <GoogleMap
              id="data-example"
              mapContainerStyle={{
                height: '30vh',
                width: '35vw',
                margin: 'auto'
              }}
              zoom={zoom}
              center={{
                lat: -62.0759594,
                lng: -60.4665987
              }}
            >
              <Data
                onLoad={data => {
                  console.log('data: ', data)
                }}
                options={mapOptions}
              />
            </GoogleMap>
          </LoadScript>
        </Grid>
        <Grid item xs={6}>
          {/* <Box style={{ marginLeft: '33%' }}> */}
            <Typography variant='h4'>Coordenadas</Typography>
            <Typography variant='h6'>Lat: [{lat}]</Typography>
            <Typography variant='h6'>Long: [{lng}]</Typography>
          {/* </Box> */}
        </Grid>
      </Grid>
    </Box>
  )
}

export default MapContainer;