
import './App.css';
import { DashBoard } from "./components/dashboard/dasboard";
import { Login } from './components/login/login';
import { Menu } from './components/menu/menu';
import { Gallery } from './components/gallery/gallery';
// import { Login } from './components/login/login';
import { NoPage } from './components/nopage';
import { Home } from './components/home/home';

function App() {
  return (
    <div >
      <Link to='/'>Click here to return home</Link>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="menu" element={<Menu/>}/>
          <Route path="gallery" element={<Gallery/>}/>
          {/* <Route path="contact" element={<Contact/>}/> */}
          <Route path="login" element={<Login/>}/>
          <Route path="dashboard" element={<DashBoard/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
