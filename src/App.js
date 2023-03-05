import './App.css';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import StartPage from './components/StartPage';
import QuestionPage from './components/QuestionPage';
import EndPage from './components/EndPage';

function App({ props }) {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<StartPage props={props}/>}  exact />
          <Route path="/questionPage" element={<QuestionPage props={props}/>}  exact />
          <Route path="/endPage" element={<EndPage props={props}/>}  exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
