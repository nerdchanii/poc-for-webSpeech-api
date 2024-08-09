import { Button, Input } from "@mui/material";
import React from "react";

type Props = {};

const TTSDemoPage = (props: Props) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.value = "어흥 ? 어림없지";
    }
  }, []);
  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ko-KR";
    speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <Input inputRef={inputRef} />
      <Button onClick={() => speak(inputRef.current?.value || "")}>
        Speak
      </Button>
    </div>
  );
};

export default TTSDemoPage;
