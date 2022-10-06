import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
//import AppContext from '../context/AppContext';
//import useInitialState from '../hooks/useInitialState';
import '@styles/global.scss';

function App() {
  return (
			<BrowserRouter>
					<Routes>
						{/* agregar /portafolio para produccion en el path */}
						<Route path="/" element={<Home/>} />
					</Routes>
			</BrowserRouter>
  );
}

export default App;