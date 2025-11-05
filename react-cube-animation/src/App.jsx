import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Cube from "./components/Cube.jsx";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies

const container = useRef();

useGSAP(
  () => {
    // gsap code here...
    gsap.to(".box", { x: 360 }); // <-- automatically reverted
  },
  { scope: container }
); // <-- scope is for selector text (optional)


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Cube />
    </>
  );
}

export default App;
