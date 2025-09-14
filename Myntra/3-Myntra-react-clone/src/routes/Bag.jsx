import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/bagSummary";

const Bag = () => {
  const addedItem = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  let bagItems = items.filter((item) => addedItem.includes(item.id));
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {bagItems.map((item) => (
            <BagItem key={item.id} item={item} />
          ))}
        </div>
        <BagSummary />
      </div>
    </main>
  );
};
export default Bag;
