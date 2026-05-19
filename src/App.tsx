import './App.css'
import { MainMenu } from './components/mainMenu/MainMenu'
import { Experience } from './areas/Experience'
import { Projects } from './areas/Projects'
import { Welcome } from './areas/Welcome'
import { Header } from './components/header/Header'
import { SoftCodeFlowBackground } from './components/background/SoftCodeFlowBackground'
import { Spacer } from './components/spacer/Spacer'

function App() {

	return (
		<>
			<SoftCodeFlowBackground />
			<Header />
			<MainMenu />
			<div className="areas">
				<Welcome />
				<Spacer/>
				<Experience />
				<Spacer/>
				<Projects />
			</div>
		</>
	)
}

export default App
