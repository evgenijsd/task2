import {Product} from './components/Product'
import NoteList from './components/NoteList';
import { useProducts } from './hooks/products'
import { Loader } from './components/Loader';
import { ErrorMessage } from './components/ErrorMessage';
import { Modal } from './components/Modal';
import { CreateProduct } from './components/CreateProduct';

function App() {
  const {loading, error, products} = useProducts()

  return (
    <div className="container mx-auto max-w-2xl pt-5"> 
    <NoteList />
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      { products.map(product => <Product product={product} key={product.id} />) }      

      <Modal title="Create new">
        <CreateProduct />
      </Modal>
    </div>
  )
}

export default App;
