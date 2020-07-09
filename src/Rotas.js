import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import telaFinal from './Pages/Final';
import Home from './Pages/Home';

export default function Rotas(){
	return(
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Home}/>
				<Route path='/final' component={telaFinal}/>
			</Switch>
		</BrowserRouter>
	)
}