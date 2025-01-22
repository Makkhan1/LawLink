import { Provider } from 'react-redux';
import { store } from './app/store';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import NavigatePage from './components/NavigatePage';
import ProfilePage from './pages/ProfilePage';
import Toast from './components/Toast';

function App() {
  
  return (
    <Provider store={store}>
      <Router>
        <NavigatePage/>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Routes>
        </main>
        <ScrollToTop />
        <Toast/>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
