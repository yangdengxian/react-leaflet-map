/* 
import React from 'react';
import ReactDOM from 'react-dom';
import FormContianer from './js/components/container/FormContainer';

const wrapper = document.getElementById("create-article-form");
wrapper ?
    ReactDOM.render(
        <FormContianer />,
        wrapper
    ) : 
    false ; */
import React from 'react'
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const position = [51.505, -0.09]
const map = (
    <Map center={position} zoom={13}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
            <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
    </Map>
)

render(map, document.getElementById('map'));



