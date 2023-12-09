// import { invoke } from "@tauri-apps/api/tauri";
import InputBox from "./InputBox";
import { Button } from "@nextui-org/react";
import { CornerDownLeft } from "lucide-react";

function App() {
  // const [greetMsg, setGreetMsg] = useState("");
  // const [name, setName] = useState("");

  // async function greet() {
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  return (

    <div className="w-[100vw] overflow-hidden h-[100vh] px-20 flex justify-center items-center bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
      <div className='flex flex-col w-2/6'>
        <h1 className="text-7xl">YAY!</h1>
        <br />
        <h1 className="text-7xl">You're Here</h1>
      </div>
      <div className="h-60 w-4/6 px-10 flex flex-col justify-evenly">
        <h2 className="text-5xl">Get rid of long messy URL</h2>
        <InputBox />
        <div className="w-5/6">
          < Button
            aria-label="short url"
            fullWidth
            className='mt-4 text-white'
            color="primary"
            endContent={
              < CornerDownLeft className="text-black/50 mb-0.5 dark:text-white/66660 text-white pointer-events-none flex-shrink-0" />
            } />
        </div>

      </div>
    </div >
  );
}

export default App;
