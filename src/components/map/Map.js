import React from 'react'
import { useGeolocation } from 'react-use'
import PropTypes from 'prop-types'
import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	useMapEvents,
} from 'react-leaflet'

function LocationMarker({ onFetchLocation }) {
	const [position, setPosition] = React.useState(null)
	const location = useGeolocation({
		maximumAge: 0,
		enableHighAccuracy: true,
		timeout: 3000,
	})

	const map = useMapEvents({
		click() {
			console.log('locaiton marker click', location)
			const { loading, latitude, longitude } = location
			if (loading) {
				onFetchLocation(loading)
			} else {
				let latlng = { lat: latitude, lon: longitude }
				setPosition(latlng)
				onFetchLocation(loading)
				map.flyTo(latlng, map.getZoom())
			}
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

LocationMarker.proptypes = {
	onFetchLocation: PropTypes.func.isRequired,
}

function Map() {
	const [loadingLocation, setLoadingLocation] = React.useState(null)
	if (loadingLocation) {
		return <h2>Getting Your location... </h2>
	}

	const handleLocationLoad = (loading) => {
		console.log('handle location load')
		setLoadingLocation(loading)
	}

	return (
		<>
			<MapContainer
				center={{ lat: 45.5411642, lon: -122.672712999 }}
				zoom={14}
				scrollWheelZoom={false}
			>
				<LocationMarker onFetchLocation={handleLocationLoad} />
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

Map.proptypes = {
	theme: PropTypes.object.isRequired,
}
