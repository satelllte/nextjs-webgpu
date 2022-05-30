import { ExternalLink } from "../ExternalLink"

export const NotSupported = () => {
  return (
    <span className='text-center text-md md:text-xl'>
      WebGPU technology is not supported in your browser.<br/>
      Refer <ExternalLink href='https://caniuse.com/webgpu'>Can I Use</ExternalLink> website to see how to enable it.
    </span>
  )
}
