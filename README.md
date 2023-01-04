<img src="https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png" alt="minecraft" height="200" />
<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="reactjs" height="200" />

# UPDATES

- [x] fix jumping by incorporating jump time to avoid additional jump at extrema
- [ ] fix walking looking down/up vertical?
- [ ] fix cursor standard position to center durring all states
		- [ ] possibly circle loads while player places cursor in center
- [x] add shaders light and shadows directional to all meshes? 
- [x] hide save & reset in menu to access with "m"
- [x] add control instructions and music to menu
- [ ] import GLTF model & textures (probably mob , like a horse, maybe modify textures with blue sweater)
	- [x] model component is available but throws errors 
	- [ ] add horse movement 
	- [ ] animate horse movement
- [ ] change ground from 100x100 surface mesh to 10x10x2 blocks plane
	- [ ] only render visible faces
	- [ ] render textures from texture sheet
	- [ ] load x, y, z from storage with chunks
- [ ] fix player collision size two blocks high && pne block wide
- [ ] fix mouse (context?) on menu
- [ ] add mobile controller/joystick
	- NOTE: learn Typescript bc controller written in TS
	- NOTE: learn JS class & constructor bc controller not just ReactJS Hooks
		- NOTE: learn prototypes & inheritence
	- [x] convert direction component to React Hook
	- [ ] implement useContext Hook wrapping all App components 
		- OR create custom hook similar to useKeyboard to set joystick direction state to exiting player movement states 
	- [ ] hide controller when menu is visible
- [x] implement React.Dimensions for mobile compatible UI
	- NOTE: only for react native, so I used CSS percentage units instead
- [ ] always show textureSelector on mobile browsers
	- [ ] control textureSelector with touch input not just useKeyboard


# NOTES
- npm install... npm audit fix --force...npm run start
- https://github.com/pmndrs/drei
- https://github.com/pmndrs/react-three-fiber
- https://github.com/pmndrs/use-cannon
- https://github.com/facebook/create-react-app
- https://stackoverflow.com/questions/47686345/playing-sound-in-react-js
- horse files: https://sketchfab.com/3d-models/horse-walk-93b53ddcec414592842753d1819f3133
- joystick: https://github.com/elmarti/react-joystick-component
