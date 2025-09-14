import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { bagActions } from "../store/bagSlice";

const BagItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleRemoveFromBag=()=>{
    dispatch(bagActions.removeFromBag(item.id))
  }

  return (
    <div className="bag-item-container">
      <div className="item-left-part">
        <img className="bag-item-img" src={item.image} />
      </div>
      <div className="item-right-part">
        <div className="company">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price-container">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount-percentage">
            ({item.discount_percentage}% OFF)
          </span>
        </div>
        <div className="return-period">
          <span className="return-period-days">{item.return_period} days</span>{" "}
          return available
        </div>
        <div className="delivery-details">
          Delivery by
          <span className="delivery-details-days">{item.delivery_date}</span>
        </div>
      </div>
      <span
        class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger dltSpan" style={{cursor:"pointer"}}
        onClick={handleRemoveFromBag}
      >
        <RxCross1  className="delete-btn"/>
      </span>
    </div>
  );
};
export default BagItem;
