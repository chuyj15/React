import logo from './logo.svg';
import './App.css';
import ProductDetial from './components/ProductDetial';

function App() {
  let product = { productId: 'P100001', name: '베이직 폴라 니트',
  price: 42000, quantity: 1, img: 'https://i.imgur.com/1vpSkbW.png'}

  return (
    <ProductDetial product={product}></ProductDetial>
  );
}

export default App;
