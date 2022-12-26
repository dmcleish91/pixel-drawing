import Pixel from './Pixel';

const Row: React.FC<{ width: number; selectedColor: string }> = ({ width, selectedColor }) => {
  const pixels = [];

  for (let i = 0; i < width; i++) {
    pixels.push(<Pixel key={i} selectedColor={selectedColor} />);
  }
  return <div className='flex w-fit'>{pixels}</div>;
};

export default Row;
