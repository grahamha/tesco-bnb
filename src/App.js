import React, { Component } from 'react';
import StoreList from './components/StoreList'; 
import Map from './components/Map';
import './App.css';
import _ from 'lodash';
import { getStores } from './api/TescoStoreLocation';
import { getOutcode } from './api/PostCodesIO';

class App extends Component {
    startingLatLng = {
        lat: 52.0567,
        lng: 1.1482
    };

    constructor() {
        super();

        this.state = {
            stores: [],
            activeStore: null
        };
        
        this.findStore = this.findStore.bind(this);      
        this.setStores = this.setStores.bind(this);
        this.setActiveStore = this.setActiveStore.bind(this);
        this.mapStoreSelected = this.mapStoreSelected.bind(this);
    }

    componentDidMount() {
        getOutcode(this.startingLatLng, (data) => {                       
            getStores(data.result[0].outcode, this.setStores);            
        });
    }

    findStore(outcode) {
        if (outcode) {
            getStores(outcode, this.setStores);            
        } else {
            this.setStores([]);
        }
    }

    setStores(stores) {
        this.setState({
            stores: stores
        });
    }

    setActiveStore(store) { 
        this.setState({
            activeStore: store
        });
    }

    getMapMarkers() {
        const markers = this.state.stores.map(s => {
            return {
                position: {
                    lat: s.location.geo.coordinates.latitude,
                    lng: s.location.geo.coordinates.longitude
                },
                key: s.location.id,
                defaultAnimation: 2,                        
            }
        });

        return markers;
    }

    mapStoreSelected(marker) {
        const store = _.find(this.state.stores, (s) => s.location.id === marker.key);

        if (typeof store !== 'undefined') {
            this.setState({
                activeStore: store.location
            });
        }
    }

    render() {
        return (
            <div className="container">               
                <StoreList 
                    stores={this.state.stores} 
                    storeSelected={this.setActiveStore} 
                    activeStore={this.state.activeStore} 
                />   
                <Map
                    selected={this.mapStoreSelected}
                    activeStore={this.state.activeStore} 
                    containerElement={<div className="map"></div>}
                    mapElement={<div style={{ height: '100%' }}></div>} 
                    markers={this.getMapMarkers()}
                    findStore={this.findStore.bind(this)}
                />                
            </div>
        );
    }
}

export default App;
