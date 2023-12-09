import { Button, Input } from "@nextui-org/react";
import { CornerDownLeft, Link2 } from "lucide-react";

const InputBox = () => {
  return (
    <div className="flex flex-col w-[100vw]">
      < Input
        isClearable
        radius="lg"
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "w-1/2",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
          ],
        }
        }
        placeholder="Paste or Type your link here"
        startContent={
          < Link2 className="text-black/50 mb-0.5 dark:text-white/90 text-slate-500 pointer-events-none flex-shrink-0" />
        }
      />
    </div >
  );
}

export default InputBox;
