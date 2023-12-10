import { useState } from "react";
import { Button } from "@nextui-org/react";
import { useAtom } from "jotai";
import { Toaster, toast } from "sonner";
import { CornerDownLeft } from "lucide-react";
import InputBox from "./components/InputBox/InputBox";
import { targetURLAtom } from "./states/atom";
import { shortenURLDetails } from "./interfaces";
import { getShortenURL } from "./utils/helpers";
import ResultCard from "./components/ResultCard/ResultCard";

function App() {
  const [targetURL] = useAtom(targetURLAtom);
  const [result, setResult] = useState<Array<shortenURLDetails>>([]);

  const handleSubmit = async () => {
    const resultData = await getShortenURL(targetURL);
    if (resultData) {
      setResult((prev) => [...prev, resultData]);
      toast.success("YAY! Your URL is ready");
    } else {
      toast.error("Please enter a valid link");
    }
  };

  return (
    <div className="w-[100vw] overflow-hidden h-[100vh] px-20 flex justify-center items-center bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
      <Toaster richColors position="top-right" />
      <div className="flex flex-col w-2/6">
        <h1 className="text-7xl">YAY!</h1>
        <br />
        <h1 className="text-7xl">You're Here</h1>
      </div>
      <div className=" w-4/6 px-10 flex flex-col justify-evenly">
        <h2 className="text-5xl mb-4">Get rid of long messy URL</h2>
        <InputBox />
        <div className="w-96">
          <Button
            fullWidth
            aria-label="short url"
            className="mt-4 text-white"
            color="primary"
            onClick={handleSubmit}
            endContent={
              <CornerDownLeft className="text-black/50 mb-0.5 dark:text-white/66660 text-white pointer-events-none flex-shrink-0" />
            }
          />
        </div>
        <div className="mt-6 overflow-y-auto scrollbar-thumb-primary scrollbar-track-thin h-[400px] ">
          {result.map((res) => (
            <ResultCard key={res.url} {...res} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
