import { Pixel } from './components/Pixel'
import { RANGE } from './config/grid';
import { PixelProvider } from './features/selectPixel';
const App = () => (
  <PixelProvider>
    {RANGE.map((i) => <div key={`line-${i}`} style={{ display: "flex" }}>
      {RANGE.map((j) => <Pixel key={i + ':' + j} id={i + ':' + j} color="red" />)}
    </div>)}
  </PixelProvider>
)

export default App;
