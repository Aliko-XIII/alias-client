import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter basename="/alias-client">
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
