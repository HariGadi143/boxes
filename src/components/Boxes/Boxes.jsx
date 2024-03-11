import React from "react";
import styles from "./Boxes.module.css";


const Boxes = () => {
    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.boxHead}>Boxes</h1>
            <div className={styles.boxesContainer}>
                {boxesData.map((box, index) => {
                    return (
                        <div key={index} style={{background: `${box?.bgColor}`, height: `${box?.boxHeight}`, width: `${box?.boxWidth}`}} className={styles.boxItem}>
                            {box?.title}
                            </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Boxes;




const boxesData=[
    {
        id: 1,
        title : "Small",
        bgColor: "#fbbf24",
        boxWidth: "100px",
        boxHeight : '100px',
    },
    {
        id: 2,
        title : "Medium",
        bgColor: "#38bdf8",
        boxWidth: "150px",
        boxHeight : '150px',
    },    {
        id: 3,
        title : "Large",
        bgColor: "#ec4899",
        boxWidth: "200px",
        boxHeight : '200px',
    },
]