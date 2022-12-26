import { useState } from 'react';

const Pixel: React.FC<{ selectedColor: string }> = ({ selectedColor }) => {
  const [pixelColor, setPixelColor] = useState('#fff');
  const [oldColor, setOldColor] = useState(pixelColor);
  const [canChangeColor, setCanChangeColor] = useState(true);

  const colorApplicationHandler = () => {
    setPixelColor(selectedColor);
    setCanChangeColor(false);
  };

  const colorHoverHandler = () => {
    setOldColor(pixelColor);
    setPixelColor(selectedColor);
  };

  const resetColorHandler = () => {
    if (canChangeColor) setPixelColor(oldColor);

    setCanChangeColor(true);
  };

  return (
    <div
      className='pixel'
      style={{ backgroundColor: pixelColor }}
      onClick={colorApplicationHandler}
      onMouseEnter={colorHoverHandler}
      onMouseLeave={resetColorHandler}></div>
  );
};

export default Pixel;
