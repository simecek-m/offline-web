import Button from "../component/Button";
import Input from "../component/Input";
import Subtitle from "../component/Subtitle";
import Title from "../component/Title";
import { CgLink } from "react-icons/cg";
import toast from 'react-hot-toast';

export default function Home() {
  const showNotification = () => {
    toast.error('Invalid URL address!')
  }
  return (
    <div className="w-screen h-screen p-20">
      <Title text="offline"/>
      <p className="w-2/3 max-w-lg ">Save tweets, threads or articles for later and then remove them without reading them. Who have time nowdays anyway.</p>
      <Subtitle icon={<CgLink />} text="Link" className="mt-10"/>
      <Input placeholder="URL" className="mr-1 w-96 mt-5" />
      <Button text="unwrap" onClick={showNotification} />
    </div>
  )
}