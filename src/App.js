import { ColorPicker } from './components/ColorPicker';
import { Pixel } from './components/Pixel'
import { RANGE } from './config/grid';
import { PixelProvider } from './features/selectPixel';

import "./grid.css";

const App = () => (
  <PixelProvider>
    <div className='layout'>
      <div className='grid'>
        <div className='scale'>
          {RANGE.map((i) => <div key={`line-${i}`} style={{ display: "flex" }}>
            {RANGE.map((j) => <Pixel key={i + ':' + j} id={i + ':' + j} color="red" />)}
          </div>)}
        </div>
      </div>
      <ColorPicker />
    </div>
  </PixelProvider>
)

export default App;
