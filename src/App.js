import 'normalize.css';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

function App() {
  return (
      <div>
        <Sidebar/>
        <Header/>
        <Footer/>
        <Main/>
      </div>
  );
}

export default App;
