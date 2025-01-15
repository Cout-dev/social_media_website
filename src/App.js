import "./App.css";
import { Auth, SignUp } from "./pages/Auth/Auth";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom"; /*The BrowserRouter component wraps the entire app to enable routing.
Routes are used to define different URL paths and associate them with corresponding components.
 */

function App() {
  return (
    <BrowserRouter>
      <Routes> // different react pages home profile etc
        <Route
          path="/"
          element={
            <div className="App">
              <div className="blur" style={{ top: "-18%", right: "0" }}></div>
              <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
              <Auth />
            </div>
          }
        />
        <Route
          path="profile"
          element={
            <div className="App">
              <div className="blur" style={{ top: "-18%", right: "0" }}></div>
              <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
              <Profile />
            </div>
          }
        />
        <Route
          path="home"
          element={
            <div className="App">
              <div className="blur" style={{ top: "-18%", right: "0" }}></div>
              <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
              <Home />
            </div>
          }
        />
        <Route
          path="signup"
          element={
            <div className="App">
              <div className="blur" style={{ top: "-18%", right: "0" }}></div>
              <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
              <SignUp />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
