export default function Title({ text = "Title", className }) {
  return (
    <div className={`inline-block ${className}`}>
      <h1 className="relative text-5xl font-black z-10 mx-3">{text}</h1>
      <div className="w-120p max-w-xl bg-brand h-4 relative bottom-3"></div>
    </div>
  )
}
