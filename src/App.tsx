import './App.css';
import Todos from './components/todo/Todos';

function App() {
  const appName = 'TODO App';
  return (
    <>
      <header>
        <h1>{appName}</h1>
      </header>

      <main>
        <Todos />
      </main>

      <footer>
        <p>@2024 {appName}</p>
      </footer>
    </>
  );
}

export default App;
