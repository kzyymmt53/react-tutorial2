import './App.css';
import Todos from './components/Todos';

function App() {
  return (
    <div>
      <Todos items={["Lear React", "Learn Typescript"] } />
    </div>
  );
}

export default App;
