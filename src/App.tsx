import {Product} from './components/Product'
import {products} from './data/products'
import {notes} from './data/notes'
import {categories} from './data/categories'
import {NoteList} from './components/NoteList';
import {CategoryList} from './components/CategoryList';
import { Routes, Route } from 'react-router-dom';
import { EditPage } from './pages/EditPage';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />    
      <Routes>
        <Route path="/edit" element={ <EditPage />} />

      </Routes>
    </>
  )
}
      // <div className="container mx-auto max-w-2xl pt-5"> 
      //   <Product product = { products[0] } />
      //   <Product product = { products[1] } />
      //   <NoteList note = { notes[0] } />
      //   <CategoryList category = { categories[0] } />
      // </div>

export default App;
