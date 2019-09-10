import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import { Data } from '@react-google-maps/api';
// https://react-google-maps-api-docs.netlify.com/

class APP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            googleKey: '',
            zoom: 15
        };
    }

    onFormSubmited(formData) {
        alert('form submitted: ' + JSON.stringify(formData));
        this.setState(formData)
    }

    render() {
        return (
            <div>
                <div>
                    <KeyForm onFormSubmited={this.onFormSubmited.bind(this)} />
                </div>
                <div>
                    <MapContainer apiKey={this.state.googleKey} zoom={this.state.zoom} />
                </div>
            </div>)
    }
}

class KeyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            googleKey: '',
            zoom: 15
        };

        this.handleKeyChanged = this.handleKeyChanged.bind(this);
        this.handleZoomChanged = this.handleZoomChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleKeyChanged(event) {
        this.setState({ googleKey: event.target.value });
    }

    handleZoomChanged(event) {
        this.setState({ zoom: parseInt(event.target.value) });
    }


    handleSubmit(event) {
        event.preventDefault();
        this.props.onFormSubmited(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>  Google Key:    <input type="text" value={this.state.googleKey} onChange={this.handleKeyChanged} />  </label>
                <label>  Zoom:    <input type="text" value={this.state.zoom} onChange={this.handleZoomChanged} />  </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

class MapContainer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log('Pepe ' + this.props.apiKey)
        return (
            <LoadScript
                id="script-loader"
                googleMapsApiKey={"" + this.props.apiKey + ""}

            >
                <GoogleMap
                    id="data-example"
                    mapContainerStyle={{
                        height: "700px",
                        width: "1000px"
                    }}
                    zoom={this.props.zoom}
                    center={{
                        lat: -32.0759594,
                        lng: -60.4665987
                    }}
                >
                    <Data
                        onLoad={data => {
                            console.log('data: ', data)
                        }}
                        options={{
                            controlPosition: "TOP_LEFT",
                            controls: ["Point"],
                            drawingMode: "Point", //  "LineString" or "Polygon".
                            featureFactory: geometry => {
                                console.log("geometry: ", geometry);
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
                        }}
                    />
                </GoogleMap>
            </LoadScript>
        )
    }
}

ReactDOM.render(
    <APP />,
    document.getElementById('root')
);
