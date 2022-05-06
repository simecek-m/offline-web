import { ON_CLICK_DEFAULT } from "../constant";

export default function Button({ text = "Button", onClick = ON_CLICK_DEFAULT, className }) {
  return (
    <button className={`bg-black text-brand inline-block px-10 py-4 font-black rounded-md disabled:bg-gray-400 disabled:text-white transition-all hover:bg-brand hover:text-black ${className}`} onClick={onClick}>
      {text}
    </button>
  )
}