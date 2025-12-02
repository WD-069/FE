import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts';
import {
	Home,
	About,
	Contact,
	Destinations,
	SingleDestination,
	NotFount,
} from './pages';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/destinations' element={<Destinations />} />
					<Route path='/destinations/:slug' element={<SingleDestination />} />
					<Route path='*' element={<NotFount />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
