export default function Input({ placeholder = "", type="text", className, ...rest }) {
  return (
    <input className={`bg-gray-100 px-5 py-4 rounded-md focus:outline-none ${className}`} type={type} placeholder={placeholder} {...rest}/>
  )
}