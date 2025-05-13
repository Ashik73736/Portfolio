import React, { useEffect, useState } from "react";
import PortImg from "../assets/CoverImage.png";
import { motion } from "framer-motion";

function AnimeImage() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setShow(true);
    });
  }, []);

  return (
    <div className="right flex justify-center ">
      {show && (
        <motion.img
          src={PortImg}
          alt="Animated"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
            ease: "easeOut",
            type: "spring",
            bounce: 0.25,
          }}
          className="w-[80%] pt-4 h-auto object-contain "
        />
      )}
    </div>
  );
}

export default AnimeImage;
