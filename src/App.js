import './App.css'
import { usePressKeyStatus } from './Libraries/usePressKeyStatus'
import { useAnimationFrameCount } from './Libraries/useAnimationFrameCount'
import { useEffect, useState } from 'react'

function App() {
  const stateOfPressKey = usePressKeyStatus()
  const frameCount = useAnimationFrameCount()

  const [point, setPoint] = useState({
    x: 256,
    y: 256
  })

  useEffect(() => {
    if (!!stateOfPressKey.left) {
      point.x -= 3
    }
    if (!!stateOfPressKey.right) {
      point.x += 3
    }

    if (!!stateOfPressKey.top) {
      point.y -= 3
    }

    if (!!stateOfPressKey.down) {
      point.y += 3
    }
    setPoint(point)
  }, [frameCount])




  return (
    <div className="App">
      <p>frame count: {frameCount}</p>
      <p>key left: {stateOfPressKey.left ? 'yes' : 'no'}</p>
      <p>key right: {stateOfPressKey.right ? 'yes' : 'no'}</p>
      <p>key up: {stateOfPressKey.top ? 'yes' : 'no'}</p>
      <p>key down: {stateOfPressKey.down ? 'yes' : 'no'}</p>
      <div id="display">

        <img id="usa" src="/usagi.png"
          style={{
            top: `${point.y}px`,
            left: `${point.x}px`,
          }}
        />
      </div>
    </div>
  )
}

export default App;