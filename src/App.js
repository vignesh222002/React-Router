import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import NavBar from './Components/NavBar';
import Order from './Components/Order';
import PageNotFound from './Components/PageNotFound';
import Product from './Components/Product';
import Featured from './Components/FeaturedProduct'
import New from './Components/NewProduct'
import Users from './Components/Users/Users';
import UserDetail from './Components/Users/UserDetail';
import Admin from './Components/Users/Admin';
import Profile from './Components/Profile/Profile';
import FetchAPI from './Components/Fetch/FetchAPI';
import AxiosAPI from './Components/Fetch/AxiosAPI';
import DataFetching from './Components/Fetch/DataFetching';
import GetPost from './Components/Fetch/GetPost';
import GetPostButton from './Components/Fetch/GetPostButton';
import DataFetchOne from './Components/Fetch/DataFetchOne';
import DataFetchTwo from './Components/Fetch/DataFetchTwo';
import { AuthProvider } from './Components/Auth/Auth';
import { Login } from './Components/Auth/Login';
import RequireAuth from './Components/Auth/RequireAuth';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='about' element={<About />} />
        <Route path='order' element={<Order />} />
        <Route path='product' element={<Product/>}>
          <Route index element={<New />} />
          <Route path='featured' element={<Featured/>} />
          <Route path='new' element={<New />} />
        </Route>
        <Route path='users' element={<Users />}>
          <Route path=':userId' element={<UserDetail />} />
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path='login' element={<Login />} />
        <Route path='fetch'>
          <Route path='fetchapi' element={<FetchAPI />} />
          <Route path='axiosapi' element={<AxiosAPI />} />
          <Route path='posts' element={<DataFetching />} />
          <Route path='get' element={<GetPost />} />
          <Route path='getPostButton' element={<GetPostButton />} />
          <Route path='dataFetchOne' element={<DataFetchOne />} />
          <Route path='dataFetchTwo' element={<DataFetchTwo />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
