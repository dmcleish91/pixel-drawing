import { useState } from 'react';
import { CirclePicker, ColorResult } from 'react-color';
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
    <div className='editor-container'>
      <h1 className='font-bold text-2xl'>8-bit Sketch</h1>
      {hideDrawingPanel && <h2 className='font-bold text-xl'>Enter Grid Dimensions</h2>}
      {hideDrawingPanel && (
        <div id='options'>
          <div className='option'>
            <input
              className='panel-input'
              name='width'
              type='number'
              defaultValue={panelWidth}
              onChange={(e) => setPanelWidth(Number.parseInt(e.target.value))}
            />
            <span>Width</span>
          </div>
          <div className='option'>
            <input
              className='panel-input'
              name='height'
              type='number'
              defaultValue={panelHeight}
              onChange={(e) => setPanelHeight(Number.parseInt(e.target.value))}
            />
            <span>Height</span>
          </div>
        </div>
      )}
      <button className='button' onClick={initializeDrawingPanel}>
        {buttonText}
      </button>

      {hideOptions && <CirclePicker color={selectedColor} onChange={(e) => colorChangeHandler(e)} />}

      {hideOptions && <DrawingPanel width={panelWidth} height={panelHeight} selectedColor={selectedColor} />}
    </div>
  );
};

export default Editor;
