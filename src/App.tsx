import './App.css'
import { MainMenu } from './components/mainMenu/MainMenu'
import { Experience } from './areas/Experience'
import { Projects } from './areas/Projects'
import { Welcome } from './areas/Welcome'

function App() {

	return (
		<>
			<MainMenu />
			{/* <Welcome /> */}
			{/* <Experience /> */}
			<Projects />
		</>
	)
}

export default App
