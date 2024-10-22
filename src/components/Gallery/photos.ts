import type { Photo } from "react-photo-album"

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48]

function assetLink(asset: string, width: number) {
  return `/assets/art-gallery/${asset}`
}

const imagesContext = require.context("/public/assets/art-gallery", false, /\.(png|jpe?g|gif|svg)$/)

const getImageDimensions = (src: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve) => {
    const img = new Image()
    img.src = src
    img.onload = () => resolve({ width: img.width, height: img.height })
  })
}

const photos: Photo[] = await Promise.all(
  imagesContext.keys().map(async (fileName) => {
    const asset = fileName.replace("./", "")
    const src = assetLink(asset, 1080)

    const { width, height } = await getImageDimensions(src)

    return {
      src,
      alt: asset.split(".")[0],
      width,
      height,
      srcSet: breakpoints.map((breakpoint) => ({
        src: assetLink(asset, breakpoint),
        width: breakpoint,
        height: Math.round((height / width) * breakpoint),
      })),
    } as Photo
  })
)

// Export the resolved photos array
export default photos
