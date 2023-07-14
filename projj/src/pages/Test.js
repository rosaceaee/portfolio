import { useRef } from "react";
import Prop from "./Prop";
const Test = () => {
  const ref = useRef();
  const getscroll = () => {
    const scroll = Math.abs(
      ref.current.getBoundingClientRect().top - ref.current.offsetTop
    );
    console.log(scroll);
  };
  return (
    <>
      <button onClick={getscroll}>Scrozll</button>
      <div style={{ height: "100vh", overflow: "scroll" }}>
        <div style={{ height: "100px", overflow: "hidden" }} ref={ref}>
          <h4>Hello</h4>
          <Prop name="dd" color="blue" />
        </div>
      </div>
    </>
  );
};
export default Test;
