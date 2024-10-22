import Box from "@mui/material/Box"
import PhotoAlbum from "react-photo-album"
import "react-photo-album/styles.css"
import "./Gallery.css"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import Settings, { useSettings } from "../components/Gallery/Settings.tsx"

function Playground() {
  const { ref: shopRef, inView: galleryView } = useInView({ triggerOnce: true })
  const { photos, layout, columns, targetRowHeight, spacing, padding, width } = useSettings()

  return (
    <div className="gallery">
      <motion.h1 className="shop-title" style={{ marginTop: "5rem" }} animate={galleryView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: "easeOut" }}>
        Our Art Gallery
      </motion.h1>
      <Box sx={{ width: `${width}%`, mx: "auto" }}>
        <PhotoAlbum
          photos={photos}
          layout={layout}
          columns={columns}
          spacing={spacing}
          padding={padding}
          targetRowHeight={targetRowHeight}
          render={{
            wrapper: ({ style, ...rest }) => (
              <div
                style={{
                  ...style,
                  borderRadius: padding > 2 ? "4px" : 0,
                  boxShadow: spacing + padding > 0 ? "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)" : "none",
                  transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                }}
                {...rest}
              />
            ),
          }}
        />
      </Box>
    </div>
  )
}

export default function Gallery() {
  return (
    <Settings>
      <Playground />
    </Settings>
  )
}
