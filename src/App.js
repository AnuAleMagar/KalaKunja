import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import AdminLogin from "./pages/AdminLogin";
import AdminRouteGuard from "./components/AdminRouteGuard";
import SellerLogin from "./pages/SellerLogin";
import SellerSignup from "./pages/SellerSignup";
import TrainingInfo from "./pages/TrainningInfo.jsx";
import MapRoute from "./pages/MapRoute.jsx";
function App() {
  return (
    <div className="App" class="">
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/userLogin" element={<UserLogin />} />
            <Route exact path="/userSignup" element={<UserSignup />} />
            <Route exact path="/sellerLogin" element={<SellerLogin />} />
            <Route exact path="/sellerSignup" element={<SellerSignup />} />
            <Route path="/informationCenter" element={<TrainingInfo />} />
            <Route path="/mapRoute" element={<MapRoute />} />

            {/* Use AdminRouteGuard to protect the /admin route */}
            <Route
              path="/admin"
              element={<AdminRouteGuard element={<Admin />} />}
            />
            <Route exact path="/adminlogin" element={<AdminLogin />} />
            {/* <Route exact path="/all" element={<AllOrder />} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
