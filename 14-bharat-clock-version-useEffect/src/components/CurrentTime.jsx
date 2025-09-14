import { useEffect, useState } from "react";

function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // console.log("Start the interval")
    // let intervalId = setInterval(() => {
    //   setTime(new Date());
    // }, 1000);

    // it is used to clean the useEffect's code
    return () => {
      // clearInterval(intervalId)
      // console.log("Cancel the interval")
    };
  }, []);

  return (
    <p className="lead">
      This is current time:{time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
}
export default CurrentTime;
