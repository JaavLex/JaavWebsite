import './App.css';
import Background from './components/background/main';
import NavBar from './components/navbar/main';
import HomePage from './pages/homepage';

function App() {
	return (
		<>
			<Background />
			<NavBar
				Buttons={[
					{ name: 'Home', link: '/' },
					{ name: 'About', link: '/about' },
					{ name: 'Contact', link: '/contact' },
				]}
			/>
			<HomePage />
		</>
	);
}

export default App;
