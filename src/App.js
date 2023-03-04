import './App.css';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import StartPage from './components/StartPage';

function App({ props }) {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage props={props}/>}  exact />
          {/* <Route path="/*"><WarningPage /></Route> */}
        </Routes>
      </BrowserRouter>
      <footer className='bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left font-sans'>made by 해탱</footer>
    </div>
  );
}

export default App;
