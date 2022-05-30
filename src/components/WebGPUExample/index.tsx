import { WebGPUFeature } from "../../utils/feature-detection"
import { NotSupported } from "./NotSupported"

export const WebGPUExample = () => {
  if (!WebGPUFeature.isSupported()) {
    return <NotSupported/>
  }

  return (
    <canvas/>
  )
}
