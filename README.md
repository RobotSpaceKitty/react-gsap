```markdown
# 🧊 Interactive Hero — React + GSAP + TailwindCSS

An interactive 3D hero section built with **React**, **GSAP**, and **TailwindCSS**, featuring a draggable glass cube and animated gradients for a dynamic visual experience.

---

## 🚀 Features

- **3D cube rotation** using GSAP’s `Draggable` plugin  
- **Perspective and depth** via CSS `transform-style: preserve-3d`  
- **Smooth motion** and constrained axis rotation (prevents flipping)  
- **Glassmorphism aesthetic** with `backdrop-blur` and gradient noise  
- **Responsive and modern build** with Vite + TailwindCSS  
- **Hero title overlay** (`BROOKS`) using custom typography  

---

## 🧩 Project Structure

```

react-gsap/
├── components/
│   └── Cube.jsx          # The interactive cube component
├── App.jsx               # Renders the cube inside the main view
├── main.jsx              # React entry point
├── index.css             # Cube faces, gradients, global styles
├── vite.config.js        # Vite + Tailwind configuration
└── package.json          # Project dependencies and scripts

````

---

## ⚙️ Installation

```bash
# Clone repository
git clone https://github.com/<your-username>/interactive-hero.git
cd interactive-hero

# Install dependencies
npm install

# Run in development mode
npm run dev
````

Then open the local server (usually [http://localhost:5173](http://localhost:5173)).

---

## 🧠 Core Logic (Cube.jsx)

```jsx
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";

const Cube = () => {
  useGSAP(() => {
    gsap.registerPlugin(Draggable);

    let rotationX = 0;
    let rotationY = 0;
    let startPointerX = 0;
    let startPointerY = 0;

    Draggable.create(".scene", {
      type: "rotation",
      onPress: (e) => {
        startPointerX = e.clientX;
        startPointerY = e.clientY;
      },
      onDrag: (e) => {
        const deltaX = e.clientX - startPointerX;
        const deltaY = e.clientY - startPointerY;

        rotationY += deltaX * 0.5;
        rotationX -= deltaY * 0.5;
        rotationX = Math.max(-90, Math.min(90, rotationX));

        gsap.set(".cube", { rotationX, rotationY });

        startPointerX = e.clientX;
        startPointerY = e.clientY;
      },
    });
  });

  return (
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
  );
};

export default Cube;
```

---

## 🎨 Styling Highlights (`index.css`)

* Uses **grainy gradients** from [Grainy Gradients](https://grainy-gradients.vercel.app/)
* Each cube face gets a unique linear gradient color
* Tailwind utilities handle layout and text scaling

Example:

```css
.front {
  background: linear-gradient(to right, skyblue, rgba(0,0,0,0)),
              url("https://grainy-gradients.vercel.app/noise.svg");
  transform: rotateY(0deg) translateZ(150px);
}
```

---

## 🧰 Built With

* [React 19](https://react.dev)
* [GSAP 3](https://greensock.com/gsap/)
* [@gsap/react](https://www.npmjs.com/package/@gsap/react)
* [TailwindCSS](https://tailwindcss.com/)
* [Vite](https://vitejs.dev)

---

## 💡 Ideas for Expansion

* Add **auto-spin animation** on idle using GSAP timelines
* Use **React Three Fiber** for real 3D geometry
* Add **parallax motion** with mouse tracking
* Integrate **scroll-based animations** for storytelling sections

---

## 📜 License

MIT © [Your Name or GitHub Handle]

---

**Demo Preview (optional):**
Deploy on [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).

```
```
