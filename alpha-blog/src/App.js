import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';


function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <h1>Alpha Blog</h1>
        <div id="page-body">
          Welcome weary traveller!
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticlesListPage />} />
            <Route path="/articles/:articleId" element={<ArticlePage />} />
          </Routes>

        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;