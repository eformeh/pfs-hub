import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from './routes/routes';
import NavBar from './components/core/navbar/NavBar';
function App() {
  return (
    <div>
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
