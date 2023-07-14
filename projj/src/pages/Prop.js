import { useRef } from "react";
function Prop({ name, color }) {
  // props 대신 비구조화 할당
  return (
    <div>
      <main>
        <h1 style={{ color }}>안녕하세요. {name} 입니다.</h1>
      </main>
    </div>
  );
}

export default Prop;
