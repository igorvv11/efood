import Product from "../Products";
import { CardListContain } from "./styles";

const ProductList = () => (
  <div className="container">
    <CardListContain>
      <li>
        <Product />
      </li>
      <li>
        <Product />
      </li>
      <li>
        <Product />
      </li>
      <li>
        <Product />
      </li>
      <li>
        <Product />
      </li>
      <li>
        <Product />
      </li>
    </CardListContain>
  </div>
);

export default ProductList;
