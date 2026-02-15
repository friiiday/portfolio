import './App.css'
import { MainMenu } from './components/mainMenu/MainMenu'
import { Experience } from './areas/Experience'
import { Projects } from './areas/Projects'
import { Welcome } from './areas/Welcome'
import { LanguageButton } from './components/LanguageButton'

function App() {

	return (
		<>
			<MainMenu />
			<LanguageButton />
			<div className="areas">
				<Welcome />
				<Experience />
				<Projects />
			</div>
		</>
	)
}

export default App
