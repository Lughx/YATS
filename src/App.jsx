import './App.css';
import { Header } from './components/Header';
import { Projects } from './components/Projects';
import { Technologies } from './components/Technologies';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container max-w-4xl w-full mx-auto grid gap-4 grid-cols-1">
        <Technologies />
        <Projects />
      </div>
    </div>
  );
}

export default App;
