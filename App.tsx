import { AutoplayContextProvider } from "./context/AutoplayContext";
import MovieContextProvider from "./context/MovieContext";
import { PlayContextProvider } from "./context/PlayContext";
import { Broadcast } from "./pages/Broadcast";
import Log from "./pages/Log";
import Movie from "./pages/Movie";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from "./pages/SignUp";
import LoginContextProvider from "./context/LoginContext";
import MyList from "./pages/MyList";
import { ListContextProvider } from "./context/ListContext";
import Warning from "./pages/Warning";



function App() {
  return (
    <MovieContextProvider>
      <ListContextProvider>
        <PlayContextProvider>
        <AutoplayContextProvider>
          <LoginContextProvider>
            <div className="site-body">
              <Router>
                <Routes>
                  <Route path="/" element={<Warning />} />
                  <Route path="/welcome" element={<Movie />} />
                  <Route path="/broadcast" element={<Broadcast />} />
                  <Route path="/log" element={<Log />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/mylist" element={<MyList />} />
                </Routes>
              </Router>
            </div>
          </LoginContextProvider>    
        </AutoplayContextProvider>  
      </PlayContextProvider>
      </ListContextProvider>
    </MovieContextProvider>
  );
}



export default App;

