import React from 'react'
import { useGeolocation } from 'react-use'
import PropTypes from 'prop-types'
import { MapContainer, Marker, Popup, useMapEvents } from 'react-leaflet'
import ThemeContext from '../../contexts/Theme'
import { MapTile } from './MapTile'

// todo FIX GETTING LOCATION TIME AND BUG... JUST MAKE IT YOUR OWN HOOK

function LocationMarker({ onFetchLocation }) {
	const [position, setPosition] = React.useState(null)
	const location = useGeolocation({
		maximumAge: 0,
		enableHighAccuracy: true,
	})

	const map = useMapEvents({
		click() {
			console.log('locaiton marker click', location)
			const { loading, latitude, longitude } = location
			if (loading) {
				onFetchLocation(loading)
			} else {
				let latlng = { lon: longitude, lat: latitude }
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
	const { theme, toggleTheme } = React.useContext(ThemeContext)
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
				<MapTile />
				<LocationMarker onFetchLocation={handleLocationLoad} />
			</MapContainer>
		</>
	)
}

export default Map
