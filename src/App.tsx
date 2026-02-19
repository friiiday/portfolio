import './App.css'
import { MainMenu } from './components/mainMenu/MainMenu'
import { Experience } from './areas/Experience'
import { Projects } from './areas/Projects'
import { Welcome } from './areas/Welcome'
import { LanguageButton } from './components/languageButton/LanguageButton'
import { Header } from './components/header/Header'
import { SoftCodeFlowBackground } from './components/background/SoftCodeFlowBackground'

function App() {

	return (
		<>
			<SoftCodeFlowBackground />
			<Header />
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
