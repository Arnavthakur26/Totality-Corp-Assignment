import React from "react";
import styles from "./heading.module.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

function HeadingComponent({ heading }) {
  return (
    <div className={raleway.className}>
      <div className="text-4xl font-semibold max-w-lg mx-auto my-10">
        <div className={styles.h1}>
          <h1 className={styles.heading}>{heading}</h1>
        </div>
      </div>
    </div>
  );
}

export default HeadingComponent;
