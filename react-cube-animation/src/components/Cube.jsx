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
      type: "rotation", // valid Draggable type for drag-based rotation
      onPress: function (e) {
        const point = e.touches ? e.touches[0] : e;
        startPointerX = point.clientX;
        startPointerY = point.clientY;
      },

      onDrag: function (e) {
        const point = e.touches ? e.touches[0] : e;

        const currentPointerX = point.clientX;
        const currentPointerY = point.clientY;

        const deltaX = currentPointerX - startPointerX;
        const deltaY = currentPointerY - startPointerY;

        rotationY += deltaX * 0.25;
        rotationX -= deltaY * 0.25;
        rotationX = Math.max(-90, Math.min(90, rotationX));

        gsap.set(".cube", { rotationX, rotationY });

        startPointerX = currentPointerX;
        startPointerY = currentPointerY;
      },
    });
  });
  return (
    <>
      <div className="h-screen bg-neutral-950 flex items-center justify-center">
        <h1 className="md:text-[14rem] text-[4rem] tracking-widest text-white uppercase absolute z-10 pointer-events-none">
          CubeZilla
        </h1>
        <div className="scene md:w-[300px] w-[200px] aspect-square perspective-[1000px]">
          <div className="cube h-full w-full transform-3d -rotate-x-45 relative">
            <div className="front absolute inset-0 backdrop-blur-lg"></div>
            <div className="back absolute inset-0 backdrop-blur-lg"></div>
            <div className="right absolute inset-0 backdrop-blur-lg"></div>
            <div className="left absolute inset-0 backdrop-blur-lg"></div>
            <div className="top absolute inset-0 backdrop-blur-lg"></div>
            <div className="bottom absolute inset-0 backdrop-blur-lg"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cube;
