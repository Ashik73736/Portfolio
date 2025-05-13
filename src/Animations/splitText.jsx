import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef, useState } from "react";

export default function SplitText({ text, role }) {
  const containerRef = useRef(null);

  const [subText, setSubText] = useState("");

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      // Hide the container until the fonts are loaded
      containerRef.current.style.visibility = "visible";

      const { words } = splitText(containerRef.current.querySelector("h1"));

      // Animate the words in the h1
      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        }
      );
    });

    let index = 0;
    setSubText("");
    const interval = setInterval(() => {
      setSubText((prev) => prev + role.charAt(index));
      index++;

      if (index === role.length) {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [role]);

  return (
    <div className="split w-full flex justify-center h-[100%] items-center">
      <div className="text-cont w-[100%] rounded-r-full py-14 bg-red-600 px-10 text-white" ref={containerRef}>
        <h1 className="h1 text-3xl sm:text-sm md:text-4xl  lg:text-6xl font-bold text-shadow-sm text-shadow-black">{text}</h1>
        <h2 className="sub text-2xl">{subText}</h2>
       <Stylesheet />
      </div>
    </div>
  );
}

function Stylesheet() {
  return (
    <style>{`
            @import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Lexend:wght@100..900&display=swap");

            .sub {
                  font-family: "Fira Code", monospace;
                  font-optical-sizing: auto;
                  font-weight: 200;
                  font-style: normal;
                }
            .split-word {
                will-change: transform, opacity;
            }

            .sub::after {
                content: '|';
                animation: blink 1s  infinite;
             
            }

            @keyframes blink {
                50% { opacity: 0; }
            }


        `}</style>
  );
}
