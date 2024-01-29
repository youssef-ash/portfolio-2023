import styles from "@styles/work.module.scss";
import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

interface GalleryProps {
  images: StaticImageData[];
  setSelected: Dispatch<SetStateAction<StaticImageData[] | null>>;
}

export default function Gallery({ images, setSelected }: GalleryProps) {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive(active === images.length - 1 ? 0 : active + 1);
  };

  const handlePrev = () => {
    setActive(active === 0 ? images.length - 1 : active - 1);
  };

  return (
    <div className={styles.galleryCover} onClick={() => setSelected(null)}>
      <div
        className={styles.imagesContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <button id={styles.prev} className={styles.button} onClick={handlePrev}>
          <FaAngleLeft size="1.45em" />
        </button>
        <div className={styles.images}>
          <img src={images[active].src}></img>
        </div>
        <button id={styles.next} className={styles.button} onClick={handleNext}>
          <FaAngleRight size="1.45em" />
        </button>
      </div>
    </div>
  );
}