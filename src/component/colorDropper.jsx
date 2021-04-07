import React, { useState } from "react";

const ColorDropper = () => {
  const [color, setColor] = useState("#1569a8");
  const [active, setActive] = useState(false);
  const [oldColor, setOldColor] = useState();

  const handleChange = e => {
    setOldColor(color);
    setColor(e.target.value);
    setActive(!active);
  };

  return (
    <div
      className="background"
      style={{
        background: active ? oldColor : color
      }}
    >
      <h3 className="title">React html5 Colors</h3>
      <label className="color-selector">
        <span>{color}</span>
        <input
          type="color"
          value={color}
          onChange={handleChange}
          className="hidden"
        />
      </label>
    </div>
  );
};

export default ColorDropper;
