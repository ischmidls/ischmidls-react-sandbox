import { useStore } from "../hooks/useStore"
import { useKeyboard } from "../hooks/useKeyboard"
import {useState, useEffect} from 'react'
import  MultiPlayer from  './Audio';
import Piano from "./piano/Piano";


export const Menu = () => {
	const [saveWorld, resetWorld] = useStore((state) => [state.saveWorld, state.resetWorld])
	const [visible, setVisible] = useState(true)
	const [showMenuItemControls, setShowMenuItemControls] = useState(false)
	const [showMenuItemAudio, setShowMenuItemAudio] = useState(false)
	const [showMenuItemPiano, setShowMenuItemPiano] = useState(false)
	const {menu} = useKeyboard(); 
	// const menuStyle ={
	//  width: String(Dimensions.get('window').width * 3 / 4)
	// }

	function toggleMenu() {setVisible(prevVisible => !prevVisible)}
	function toggleMenuItem(item) {
		if (item === "Controls") {
			setShowMenuItemControls(
				prevShowMenuItemControls => !prevShowMenuItemControls)
		} else if (item === "Audio") {
			setShowMenuItemAudio(
				prevShowMenuItemAudio => !prevShowMenuItemAudio)
		} else if (item === "Piano") {
			setShowMenuItemPiano(
				prevShowMenuItemPiano => !prevShowMenuItemPiano)
		}
	}

	const urls = [
		          'https://upload.wikimedia.org/wikipedia/commons/4/4b/Fr%C3%A9d%C3%A9ric_Chopin_-_Nocturne_in_B-flat_minor%2C_Op._9%2C_No._1.ogg',
		          'https://upload.wikimedia.org/wikipedia/commons/5/5c/Frederic_Chopin_-_Nocturne_Eb_major_Opus_9%2C_number_2.ogg',
		          'https://upload.wikimedia.org/wikipedia/commons/9/90/Erik_Satie_-_gymnopedies_-_la_1_ere._lent_et_douloureux.ogg',
		        ]

	const Controls = () => (
	  <div id="results" className="search-results">
	    <p>[w], [a], [s], [d], & [space] ..... move</p>
		<p>[1]-[5] .................. change blocks</p>
		<p>[click] ................... place blocks</p>
		<p>[alt + click] ............. break blocks</p>
		<p>[m] ........................ toggle menu</p>
		<p>[esc] .................... toggle cursor</p>
	  </div>
	)

	// toggle menu with m key
	useEffect(() => {
		if (menu) {
			toggleMenu()
		}
	}, [menu])

	return (visible &&
	<div className="menu centered absolute">
		<button className="exit" onClick={() => toggleMenu()}>X</button>
		<h2>Take Me Back to 11/18/2011</h2>
		<hr />

		<p>World Options</p>
		<button onClick={() => saveWorld()}>Save</button>
		<button onClick={() => resetWorld()}>Reset</button>
		<hr />

		<p>More Options</p>
		<button onClick={() => toggleMenuItem("Controls")}>Controls</button>
		<button onClick={() => toggleMenuItem("Audio")}>Audio</button>
		<button onClick={() => toggleMenuItem("Piano")}>Piano</button>

		{ showMenuItemControls ? <div><hr /><Controls /></div> : null }
		{ showMenuItemAudio ? <div><hr /><MultiPlayer urls={urls} /></div> : null}
		{ showMenuItemPiano ? <div><hr /><Piano /></div> : null }
		<hr />
		<sub>Thank you to <a href="https://github.com/danba340">Daniel Bark</a> and <a href="https://github.com/ganeshmani">Ganesh Mani</a> for the tutorials</sub>
	</div>
	)
}
