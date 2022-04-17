import { Pixel } from './components/Pixel'
import { RANGE } from './config/grid';
const App = () => (
  <>
    {RANGE.map((i) => <div key={`line-${i}`} style={{ display: "flex" }}>
      {RANGE.map((j) => <Pixel key={i + ':' + j} color="red" />)}
    </div>)}
  </>
)

export default App;
