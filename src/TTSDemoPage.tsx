import { Box, Button, Input } from "@mui/material";
import React from "react";

const TTSDemoPage = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.placeholder =
        "여기 있는 텍스트는 음성으로 읽히게 됩니다. 텍스트를 입력해보세요.";
    }
  }, []);
  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ko-KR";
    speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <Box width={"600px"} m="auto" mb="2rem">
        <Input inputRef={inputRef} fullWidth />
      </Box>
      <Button onClick={() => speak(inputRef.current?.value || "")}>
        Speak
      </Button>
    </div>
  );
};

export default TTSDemoPage;
