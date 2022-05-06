import Button from "../component/Button";
import Input from "../component/Input";
import Subtitle from "../component/Subtitle";
import Title from "../component/Title";
import { CgLink } from "react-icons/cg";
import { useState } from "react";
import toast from "react-hot-toast";
import { string } from 'yup';

export default function Home() {
  const [ url, setUrl ] = useState("https://");

  const validateAddress = async () => {
    try {
      await string().url().validate(url);
      toast.success("Saved!");
    } catch (e) {
      toast.error("Invalid address!");
    }
  }
  return (
    <div className="w-screen h-screen p-20">
      <Title text="offline"/>
      <p className="w-2/3 max-w-lg ">Save tweets, threads or articles for later and then remove them without reading them. Who have time nowdays anyway.</p>
      <Subtitle icon={<CgLink />} text="Link" className="mt-10"/>
      <Input placeholder="URL" className="mr-1 w-96 mt-5" value={url} onChange={e => setUrl(e.target.value)}/>
      <Button text="unwrap" onClick={validateAddress} />
    </div>
  )
}