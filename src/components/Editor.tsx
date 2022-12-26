import { useState } from 'react';
import { CirclePicker, ColorResult } from 'react-color';
import { motion, AnimatePresence } from 'framer-motion';
import DrawingPanel from './DrawingPanel';

const Editor = () => {
  const [panelWidth, setPanelWidth] = useState(16);
  const [panelHeight, setPanelHeight] = useState(16);
  const [hideOptions, setHideOptions] = useState(false);
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
  const [buttonText, setButtonText] = useState('sketch');
  const [selectedColor, setSelectedColor] = useState('#f44336');

  const initializeDrawingPanel = () => {
    setHideOptions(!hideOptions);
    setHideDrawingPanel(!hideDrawingPanel);
    setSelectedColor('#f44336');
    buttonText === 'sketch' ? setButtonText('reset') : setButtonText('sketch');
  };

  const colorChangeHandler = (color: ColorResult) => setSelectedColor(color.hex);

  return (
    <motion.div
      className='flex flex-col items-center mt-8 p-2'
      layout
      transition={{ layout: { duration: 0.8, type: 'spring' } }}>
      <motion.h1 className='font-bold text-2xl mb-6' layout>
        8-bit Sketch
      </motion.h1>
      {hideDrawingPanel && <h2 className='font-bold text-xl mb-4'>Enter Grid Dimensions</h2>}
      {hideDrawingPanel && (
        <motion.div
          className='flex flex-row justify-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.4 } }}
          exit={{ opacity: 0 }}>
          <div className='flex flex-col'>
            <input
              className='panel-input'
              name='width'
              type='number'
              defaultValue={panelWidth}
              onChange={(e) => setPanelWidth(Number.parseInt(e.target.value))}
            />
            <span>Width</span>
          </div>
          <div className='flex flex-col'>
            <input
              className='panel-input'
              name='height'
              type='number'
              defaultValue={panelHeight}
              onChange={(e) => setPanelHeight(Number.parseInt(e.target.value))}
            />
            <span>Height</span>
          </div>
        </motion.div>
      )}

      {hideOptions && <CirclePicker color={selectedColor} onChange={(e) => colorChangeHandler(e)} />}

      {hideOptions && <DrawingPanel width={panelWidth} height={panelHeight} selectedColor={selectedColor} />}

      <button
        className='text-xl bg-lime-600 text-white border rounded border-transparent uppercase py-4 px-12 my-8 transition duration-200 ease-in-out hover:bg-transparent hover:border-lime-600'
        onClick={initializeDrawingPanel}>
        {buttonText}
      </button>
    </motion.div>
  );
};

export default Editor;
