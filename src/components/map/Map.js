import React from 'react'
import PropTypes from 'prop-types'
import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	useMapEvents,
} from 'react-leaflet'

function LocationMarker() {
	const [position, setPosition] = React.useState(null)

	const map = useMapEvents({
		click() {
			map.locate()
		},
		locationfound(e) {
			setPosition(e.latlng)
			map.flyTo(e.latlng, map.getZoom())
		},
	})

	return position === null ? null : (
		<Marker position={position}>
			<Popup>
				<div>
					<h3>Your Location</h3>
				</div>
			</Popup>
		</Marker>
	)
}

function Map() {
	return (
		<>
			<MapContainer
				center={{ lat: 45.5411642, lon: -122.672712999 }}
				zoom={13}
				scrollWheelZoom={false}
			>
				<LocationMarker />
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Marker position={[51.505, -0.09]}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</>
	)
}

export default Map
