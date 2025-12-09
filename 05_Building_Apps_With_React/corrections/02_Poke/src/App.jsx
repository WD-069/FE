import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts';
import { Home, Details } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/pokemon/:name' element={<Details />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
