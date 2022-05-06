import { IconBase } from "react-icons";

export default function Subtitle({ icon = null, text = "Subtitle", className }) {
  return (
    <h2 className={`text-3xl font-black ${className}`}>
      { icon && (
        <IconBase className="inline">
          { icon }
          </IconBase>
        )}
      { text }
    </h2>
  )
}