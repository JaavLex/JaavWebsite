import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Title from './components/global/Title';
import Homepage from './pages/Homepage';
import Introduction from './pages/Introduction';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/global/Layout';

function App() {
	const [count, setCount] = useState(0);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Homepage />} />
					<Route path="introduction" element={<Introduction />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
