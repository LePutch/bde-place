import { ColorPicker } from './components/ColorPicker';
import { Pixel } from './components/Pixel'
import { RANGE } from './config/grid';
import { PixelProvider } from './features/selectPixel';

import "./grid.css";

const App = () => (
  <>
    <div className='layout'>
      <div className='grid'>
        <div className='scale'>
          <PixelProvider>
            {RANGE.map((i) => <div key={`line-${i}`} style={{ display: "flex" }}>
              {RANGE.map((j) => <Pixel key={i + ':' + j} id={i + ':' + j} color="red" />)}
            </div>)}
          </PixelProvider>
        </div>
      </div>
      <ColorPicker />
    </div>
  </>
)

export default App;
