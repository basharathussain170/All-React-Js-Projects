import { BsServer } from "react-icons/bs";
const WelcomeMssg = ({onGetPostClick}) => {
  return (
    <center className="welcome-message">
      <h1>There are not any Post Yet!</h1>
      {/* <button
        type="button"
        className="btn btn-primary"
        onClick={onGetPostClick}
      >
        Get Post From <BsServer />
      </button> */}
    </center>
  );
};
export default WelcomeMssg;
