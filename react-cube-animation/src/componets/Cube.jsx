const Cube = () => {
  return (
    <>
      <div className="h-screen bg-neutral-950">
        <div className="scene w-[300px] h-[300px]">
          <div className="cube h-full w-full relative">
            <div className="front absolute w-[300px] h-[300px]"></div>
            <div className="back absolute w-[300px] h-[300px]"></div>
            <div className="right absolute w-[300px] h-[300px]"></div>
            <div className="left absolute w-[300px] h-[300px]"></div>
            <div className="top absolute w-[300px] h-[300px]"></div>
            <div className="bottom absolute w-[300px] h-[300px]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cube;
