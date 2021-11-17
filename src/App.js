import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import Signin from './pages/signin/signin';
import Signup from './pages/signup/signup';
import About from './pages/about/about';
import Author from './pages/author/author';

import './app.scss';

function App() {
  return (
    <>
      <Navbar />
      <div className="content-wrapper">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/author' element={<Author />} />
          <Route exact path='/signin' element={<Signin />} />
          <Route exact path='/signup' element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
