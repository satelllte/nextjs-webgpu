import { WebGPUFeature } from "../../utils/feature-detection"
import { Canvas } from "./Canvas"
import { NotSupported } from "./NotSupported"

export const WebGPUExample = () => {
  if (!WebGPUFeature.isSupported()) {
    return <NotSupported/>
  }

  return (
    <Canvas/>
  )
}
