import ProductList from './ProductList';

const List = () => {
  const products = [
    { title: '🍐', id: 1 },
    { title: '🧄', id: 2 },
    { title: '🍎', id: 3 }
  ];

  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {products.map((product) => (
          <ProductList key={product.id} id={product.id} title={product.title} />
        ))}
      </ul>
    </div>
  );
};

export default List;
