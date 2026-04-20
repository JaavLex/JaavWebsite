import './App.css';
import NavBar from './components/navbar/main';
import HomePage from './pages/homepage';

function App() {
	return (
		<>
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
