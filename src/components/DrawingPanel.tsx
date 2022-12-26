import Row from './Row';

const DrawingPanel: React.FC<{ width: number; height: number; selectedColor: string }> = ({ width, height, selectedColor }) => {
  const rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width} selectedColor={selectedColor} />);
  }

  return (
    <div className='flex flex-col items-center'>
      <div>{rows}</div>
    </div>
  );
};

export default DrawingPanel;
