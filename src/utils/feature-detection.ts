abstract class Feature {
  protected static isSupported: () => boolean;
}

// https://caniuse.com/webgpu
export class WebGPUFeature extends Feature {
  public static override isSupported() {
    return 'gpu' in navigator
  }
}

