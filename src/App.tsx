import {Product} from './components/Product'
import {products} from './data/products'
import {notes} from './data/notes'
import {categories} from './data/categories'
import {NoteList} from './components/NoteList';
import {CategoryList} from './components/CategoryList';

function App() {
  return (
    <div className="container mx-auto max-w-2xl pt-5"> 
      <Product product = { products[0] } />
      <Product product = { products[1] } />
      <NoteList note = { notes[0] } />
      <CategoryList category = { categories[0] } />
    </div>
  )
}

export default App;
