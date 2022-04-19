import { ColorPicker } from './components/ColorPicker';
import { Pixel } from './components/Pixel'
import { RANGE } from './config/grid';
import { PixelProvider } from './features/selectPixel';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import "./grid.css";

const App = () => (
  <PixelProvider>
    <div className='layout'>
      <TransformWrapper minScale={2} maxScale={50}>
        <TransformComponent wrapperClass='grid-wrapper'>
          <div className='grid'>
            {RANGE.map((i) => <div key={`line-${i}`} style={{ display: "flex" }}>
              {RANGE.map((j) => <Pixel key={i + ':' + j} id={i + ':' + j} color="red" />)}
            </div>)}
          </div>
        </TransformComponent>
      </TransformWrapper>
      <ColorPicker />
    </div>
  </PixelProvider>
)

export default App;
