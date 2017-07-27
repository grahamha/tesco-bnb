import React, {Component} from 'react';
import { withGoogleMap, GoogleMap, Marker  } from "react-google-maps";
import { getOutcode } from '../api/PostCodesIO';

class Map extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            map: null
        }

        this.getMarker = this.getMarker.bind(this);
    }

    mapMoved() {
        let center = this.state.map.getCenter();
        let location = {
            lat: center.lat(),
            lng: center.lng(),
        };

        getOutcode(location, (data) => {
            if (data.result) {
                this.props.findStore(data.result[0].outcode);
            } else {
                this.props.findStore(null);
            }
        });
    }

    mapLoaded(map) {
        if (this.state.map == null) {
            this.setState({
                map: map
            })
        }
    }

    mapZoomed() {
        //console.log('zoomed', this.state.map.getZoom());
        const center = this.state.map.getCenter();
        //console.log(center.lat(), center.lng());
    }

    getMarker(marker) {
        if (this.props.activeStore != null) {
            if (marker.key === this.props.activeStore.id) {
                return {
                    url: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
                };
            }
        }
        return {
            url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
        };
    }

    onMouseOver(marker) {
        this.props.selected(marker);
    }

    render() {
        return (
            <GoogleMap
                ref={this.mapLoaded.bind(this)}
                onDragEnd={this.mapMoved.bind(this)}
                onZoomChanged={this.mapZoomed.bind(this)}
                defaultZoom={12}
                defaultCenter={{
                    lat: 52.0567,
                    lng: 1.1482
                }}
            >
                {this.props.markers.map((marker, index) => (
                    <Marker {...marker} 
                        onClick={this.onMouseOver.bind(this, marker)}
                        icon={this.getMarker(marker)}
                    />
                ))}
            </GoogleMap>
        );
    }
}

export default withGoogleMap(Map);