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
      className='w-6 h-6 border border-slate-2s00'
      style={{ backgroundColor: pixelColor }}
      onClick={colorApplicationHandler}
      onMouseEnter={colorHoverHandler}
      onMouseLeave={resetColorHandler}></div>
  );
};

export default Pixel;
