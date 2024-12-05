import { useState } from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/global/Layout';

function App() {
	const [count, setCount] = useState(0);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Homepage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
