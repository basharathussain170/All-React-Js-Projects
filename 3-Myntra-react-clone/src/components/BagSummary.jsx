import { useSelector } from "react-redux";

const BagSummary = () => {
  const bagsSummary = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  let bagItems = items.filter((item) => bagsSummary.includes(item.id));

  let originalPrice = 0;
  let currentPrice = 0;
  let Convenience = 0;

  bagItems.map((item) => {
    originalPrice += item.original_price;
    currentPrice += item.current_price;
    if (currentPrice > 0) {
      Convenience = 99;
    }
  });

  const bagSummary = {
    Convenience_fee: Convenience,
    totalItem: bagItems.length,
    totalMRP: originalPrice,
    totalDiscount: currentPrice,
    finalPayment: originalPrice - currentPrice + Convenience,
  };
  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({bagSummary.totalItem} Items){" "}
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{bagSummary.totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{bagSummary.totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">
            ₹{bagSummary.Convenience_fee}
          </span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{bagSummary.finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};
export default BagSummary;
