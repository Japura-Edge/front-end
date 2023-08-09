import "../assets/bestSelling.css";
import ProductCard from "./productCard";

const BestSelling = ({ backEndServer }: any) => {
  return (
    <div className="best-selling-section column">
      <h1>Best Selling</h1>
      <div className="best-selling-container">
        <ProductCard backEndServer={backEndServer} />
      </div>
    </div>
  );
};

export default BestSelling;
