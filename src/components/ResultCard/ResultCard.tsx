import { useRef } from "react";
import { Chip, Card, Tooltip } from "@nextui-org/react";
import { toast } from "sonner";
import {
  Copy,
  Link as LinkSVG,
  MoreVertical,
  MousePointerClick,
} from "lucide-react";
import { shortenURLDetails } from "../../interfaces";

const ResultCard = ({ url, target_url, clicks }: shortenURLDetails) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const handleCopyClick = () => {
    if (textareaRef.current) {
      textareaRef.current.value = url;
      textareaRef.current.select();

      try {
        // Execute the copy command
        document.execCommand("copy");
        toast.success("Text copied to clipboard");
      } catch (err) {
        console.error("Unable to copy text to clipboard", err);
      }
    }
  };
  return (
    <Card
      className="max-w-[600px] 
            text-black/90 dark:text-white/90 mt-4 py-2 flex justify-between shadow-xl
            w-1/2
            bg-default-200/50
            dark:bg-default/60
            backdrop-blur-xl
            backdrop-saturate-200
            hover:bg-default-200/70
            dark:hover:bg-default/70
            !cursor-text"
    >
      <div className="flex justify-between p-2">
        <div className="flex justify-center items-center">
          <LinkSVG size={22} className="ml-2" />
        </div>
        <div className="flex flex-col w-5/6">
          <div className="flex justify-between">
            <p className="text-lg text-black">{url}</p>
            <textarea
              ref={textareaRef}
              style={{ position: "absolute", left: "-9999px" }}
              readOnly
            />
            <Copy onClick={handleCopyClick} cursor={"pointer"} size={18} />
            <Tooltip
              className="mb-2 bg-default-200/80 cursor-pointer"
              content={`${clicks} Clicks`}
            >
              <Chip
                startContent={<MousePointerClick cursor="pointer" size={20} />}
                variant="light"
                className="shadow-md cursor-pointer "
              >
                {clicks} clicks
              </Chip>
            </Tooltip>
          </div>
          <p aria-label={target_url} className="pointer text-slate-700 text-md">
            {target_url}
          </p>
        </div>
        <div>
          <MoreVertical cursor={"pointer"} size={20} />
        </div>
      </div>
    </Card>
  );
};

export default ResultCard;
