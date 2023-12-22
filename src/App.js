
import ListArticle from './components/listArticle';
import ListeClients from'./components/ListeClients';
import Menu from './components/menu';
import AddArticle from './components/addArticle';
import EditArticle from './components/editArticle';
import ListCards from './components/clientSide/ListCards';
import Cart from './components/clientSide/Cart';
import AddClient from './components/addClient';
import PdfCart from './components/PdfCart';
import { CartProvider } from "use-shopping-cart";
import LoginClient from './components/authentificationClient/loginClient';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import EditClient from './components/EditClient';
import LoginAdmin from './components/authentificationAdmin/loginAdmin';
import Signup from './components/authentificationClient/signup';
import SignupAdmin from './components/authentificationAdmin/signupAdmin';
function App() {
  return(
<CartProvider>
<Router>
    
 <Routes>
    <Route path='/articles' element={<ListArticle/>}/>
    <Route path='/client' element={<ListeClients/>}/>
    <Route path='/EditClient/:id' element={<EditClient/>}/>
    <Route path='/AddClient' element={<AddClient/>}/>
    <Route path='/AddArticle' element={<AddArticle/>}/>
    <Route path='/editArticle/:id' element={<EditArticle/>}/>
    <Route path='/' element={<ListCards/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/pdfCart' element={<PdfCart/>}/>
    <Route path="/loginclient" exact element={<LoginClient/>}/>
    <Route path="/admin" exact element={<LoginAdmin/>}/>
    <Route path="/signup" exact element={<Signup/>}/>
    <Route path="/signupAdmin" exact element={<SignupAdmin/>}/>
    </Routes>
    </Router></CartProvider>
  );

}
export default App;