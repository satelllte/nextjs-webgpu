abstract class Feature {
  protected static available: () => boolean;
}

// https://caniuse.com/webgpu
class WebGPUFeature extends Feature {
  public static override available() {
    return 'gpu' in navigator
  }
}

export {
  WebGPUFeature
}
