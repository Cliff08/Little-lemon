import './App.css';
import Layout from './Components/Layout/Layout';
import HomePage from './Components/HomePage/HomePage';
import BookingPage from './Components/BookingPage/BookingPage';
import { Route, Routes } from "react-router-dom";
import CallToAction from './Components/CallToAction/CallToAction';
import Specials from './Components/Specials/Specials';
import Chicago from './Components/Chicago/Chicago';
import CustomersSay from './Components/CustomersSay/CustomersSay';
import NoContent from './Components/NoContent/NoContent';
function App() {
  return (
    <Layout>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/calltoaction" element={<CallToAction/>}></Route>
      <Route path="/specials" element={<Specials/>}></Route>
      <Route className='about' path="/chicago" element={<Chicago/>}></Route>
      <Route path="/customersay" element={<CustomersSay/>}></Route>
      <Route path="/booking" element={<BookingPage/>}></Route>
      <Route path="/nocontent" element={<NoContent/>}></Route>
    </Routes>
    </Layout>
  );
}

export default App;
