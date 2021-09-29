import logo from './logo.svg';
import './App.css';
import Recepies from './components/Recepies'

function App() {
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu</h2>
          <div className="underline"></div>
        </div>
        <Recepies />
      </section>
    </main>
  );
}

export default App;
