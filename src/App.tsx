import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import MainLayout from './layouts/MainLayout';

const App = () => {
  return (
    <>
      <Router>
        <MainLayout>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
};

export default App;
