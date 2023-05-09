import React from "react";

const Parallax = ({ classes, styles, name, inner_classes, content, hrStyle }) => {
  return (
    <>
      <div className={classes} style={styles}>
        <div className="bg-image2-main center-div" style={{ height: "0%" }}>
          <div className={inner_classes}>
            <h2 className="">{name}</h2>
            <p>{content}</p>
            <div style={hrStyle}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Parallax;
