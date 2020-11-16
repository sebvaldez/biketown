import React from 'react'
import { TileLayer } from 'react-leaflet'
import ThemeContext from '../../contexts/Theme'

const LightTile = () => (
	<TileLayer
		attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
	/>
)
const DarkTile = () => (
	<TileLayer
		attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		url='https://api.mapbox.com/styles/v1/sebvaldez/ckh2sq6d31zw219odhj6ffpui/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2VidmFsZGV6IiwiYSI6ImNraDJzdHg3NTBmMDgyeG85eGhjZnBleTQifQ.QXsy1UVuaXzg9ouGsbYMQw'
	/>
)

export const MapTile = () => {
	const { theme } = React.useContext(ThemeContext)
	return theme === 'light' ? <DarkTile /> : <LightTile />
}
