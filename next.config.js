/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {

    // shaders loader
    config.module.rules.push({
      test: /\.(wgsl|glsl|vs|fs)$/,
      loader: 'ts-shader-loader'
    })

    return config
  },
}

module.exports = nextConfig
