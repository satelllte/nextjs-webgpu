import { useEffect, useRef } from "react"
import shader from './shader.wgsl'

export const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    (async() => {
      const canvas = canvasRef.current as HTMLCanvasElement
      const adapter = await navigator.gpu.requestAdapter() as GPUAdapter
      const device = await adapter.requestDevice() as GPUDevice
      const context = canvas.getContext('webgpu') as GPUCanvasContext
      const format: GPUTextureFormat = 'bgra8unorm'
      context.configure({ device, format })

      const pipeline = device.createRenderPipeline({
        vertex: {
          module: device.createShaderModule({ code: shader }),
          entryPoint: 'vs_main',
        },
        fragment: {
          module: device.createShaderModule({ code: shader }),
          entryPoint: 'fs_main',
          targets: [{ format }],
        },
        primitive: {
          topology: 'triangle-list'
        },
        layout: 'auto'
      })

      const commandEncoder = device.createCommandEncoder()
      const textureView = context.getCurrentTexture().createView()
      const renderPass = commandEncoder.beginRenderPass({
        colorAttachments: [{
          view: textureView,
          // clearValue: { r: 0.2, g: 0.247, b: 0.314, a: 1.0 }, // background color
          loadOp: 'clear',
          storeOp: 'store',
        }]
      })
      renderPass.setPipeline(pipeline)
      renderPass.draw(3, 1, 0, 0)
      renderPass.end()

      device.queue.submit([commandEncoder.finish()])
    })()
  }, [])

  return (
    <canvas ref={canvasRef}/>
  )
}
