// interface Props {
//   id: number;
//   title: string;
// }

type Props = {
  id: number;
  title: string;
};

const ProductList = ({ id, title }: Props) => {
  return (
    <li>
      {title}-{id}
    </li>
  );
};

export default ProductList;
