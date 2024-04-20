import './scss/app.scss';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>123</p>
      </header> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
