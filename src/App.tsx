import {Product} from './components/Product'
import {products} from './data/products'
import NoteList from './components/NoteList';

function App() {
  return (
    <div className="container mx-auto max-w-2xl pt-5"> 
      <Product product = { products[0] } />
      <Product product = { products[1] } />
      <NoteList />
    </div>
  )
}

export default App;
