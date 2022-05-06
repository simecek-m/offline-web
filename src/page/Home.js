import Button from "../component/Button";
import Input from "../component/Input";
import Title from "../component/Title";

export default function Home() {
  return (
    <div className="w-screen h-screen p-20">
      <Title text="offline"/>
      <p className="w-2/3 max-w-lg ">Save tweets, threads or articles for later and then remove them without reading them. Who have time nowdays anyway.</p>
      <Input placeholder="URL" className="mr-1 w-96" />
      <Button text="unwrap" />
    </div>
  )
}