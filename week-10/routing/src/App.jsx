import './App.css';
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function App() {
  return (
    <>    
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route path="/neet/online-coaching-class-11" element={<Class11Program/>} />
          <Route path="/neet/online-coaching-class-12" element={<Class12Program/>} />
          <Route path="/" element={<Landing/>} />
          <Route path="*" element={<Error/>} />
          </Route>
        </Routes>
        
      </BrowserRouter>
    </>
  );
}
 function Layout(){
   return  <div style= {{height: "100vh", background:'grey'}}>
     <Header/>
   
      <div style = {{height :"90vh",background :"red"}}>
     <Outlet/>
     </div>
    footer 
   </div>
 }
   function Header(){
      return  <div>
    <Link to="/">Allen</Link> | 
    <Link to="/neet/online-coaching-class-11">Class 11</Link> | 
    <Link to="/neet/online-coaching-class-12">Class 12</Link>
    </div>
   }

function Landing() {
  return <div>Welcome to Allen</div>;
}
function Error() {
  return <div>not find anything</div>;
}

function Class11Program() {
  return <div>NEET Program for Class 11</div>;
}

function Class12Program() {
  const navigate = useNavigate();

  function redirectUser() {
    navigate("/");
  }

  return (
    <div>
      NEET Program For Class 12th.
      <button onClick={redirectUser}>Go back to landing page</button>
    </div>
  );
}

export default App;
