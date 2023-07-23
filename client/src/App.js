import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import InfoHeader from './components/InfoHeader';
import Articles from './components/Articles';
function App() {
  return (
    <div className="App">
      <Header/>
      <div style={{ marginTop: "100px" }}>
        <InfoHeader />
      </div>
      <Articles/>
    </div>
  );
}

export default App;
