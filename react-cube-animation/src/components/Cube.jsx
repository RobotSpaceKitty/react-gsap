import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";

const Cube = () => {
  useGSAP(() => {
    gsap.registerPlugin(Draggable);
    //Track rotation state for x and Y axis
    let rotationX = 0;
    let rotationY = 0;

    //Track starting point position for drag calculations
    let startPointerX = 0;
    let startPointerY = 0;

    Draggable.create(".scene", {
      type: "rotation", // enables rotation dragging
      onPress: function (e) {
        startPointerX = e.clientX;
        startPointerY = e.clientY;
      },

      onDrag: function (e) {
        //Calculate the change in pointer position
        const currentPointerX = e.clientX;
        const currentPointerY = e.clientY;

        //Difference between current and last pointer positions
        const deltaX = currentPointerX - startPointerX;
        const deltaY = currentPointerY - startPointerY;

        //Update Cube's Y rotation based on horizontal drag
        rotationY += deltaX * 0.5;
        //Update Cube's X rotation based on horizontal drag
        rotationX -= deltaY * 0.5;

        //Limit rotationX to avoid flipping too far (like tilting upside down)
        rotationX = Math.max(-90, Math.min(90, rotationX));

        //Apply new rotation to the cube
        gsap.set(".cube", {
          rotationX,
          rotationY,
        });

        //Update starting positions for the next drag calculation
        startPointerX = currentPointerX;
        startPointerY = currentPointerY;
      },
    });
  }); // <-- scope is for selector text (optional)
  return (
    <>
      <div className="h-screen bg-neutral-950 flex items-center justify-center">
        <h1 className="text-[14rem] tracking-widest text-white uppercase absolute z-10 pointer-events-none">
          brooks
        </h1>
        <div className="scene w-[300px] h-[300px] perspective-[1000px]">
          <div className="cube h-full w-full transform-3d -rotate-x-45 relative">
            <div className="front absolute w-[300px] h-[300px] backdrop-blur-lg"></div>
            <div className="back absolute w-[300px] h-[300px] backdrop-blur-lg"></div>
            <div className="right absolute w-[300px] h-[300px] backdrop-blur-lg"></div>
            <div className="left absolute w-[300px] h-[300px] backdrop-blur-lg"></div>
            <div className="top absolute w-[300px] h-[300px] backdrop-blur-lg"></div>
            <div className="bottom absolute w-[300px] h-[300px] backdrop-blur-lg"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cube;
