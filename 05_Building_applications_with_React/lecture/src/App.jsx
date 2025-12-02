import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
	Link,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Users from './pages/Users';
import UserProfile from './pages/UserProfile';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/users' element={<Users />} />
					<Route path='/users/:id' element={<UserProfile />} />
          <Route path='*' element={<NotFound />}/>
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
