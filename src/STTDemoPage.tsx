import {
  Box,
  Button,
  Container,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useRef } from "react";

const STTDemoPage = (props: any) => {
  const tempvalueContainerRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = "ko-KR";
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.start();
    recognition.onresult = (event: SpeechRecognitionEvent) => {
      if (event.results.item(event.resultIndex).isFinal == false) {
        if (tempvalueContainerRef.current) {
          const container = tempvalueContainerRef.current;
          container.innerText = event.results.item(
            event.resultIndex
          )[0].transcript;
        }
      }
      // if (event.results.item(event.resultIndex).isFinal == true) {
      //   if (tempvalueContainerRef.current) {
      //     const container = tempvalueContainerRef.current;
      //     container.innerText += event.results.item(
      //       event.resultIndex
      //     )[0].transcript;
      //     if (
      //       ["다", "요"].some(
      //         (value) =>
      //           container.innerText[container.innerText.length - 1] === value
      //       )
      //     )
      //       container.innerText += ". ";
      //   }
      // }
      recognition.onend = () => {
        console.log("end");
      };

      return () => {
        recognition.stop();
      };
    };
  }, []);

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ko-KR";
    utterance.voice = speechSynthesis.getVoices().find((voice) => {
      return voice.name === "Google 한국의";
    })!;
    utterance.rate = 0.95;
    utterance.pitch = 0.55;
    speechSynthesis.speak(utterance);
  };

  return (
    <Box>
      <Typography
        ref={tempvalueContainerRef}
        variant="body2"
        width={"800px"}
        border={"1px solid black"}
        minHeight={"100px"}
        m="auto"
        padding={".5rem"}
        textAlign={"left"}
      >
        음성을 입력하면 여기에 텍스트가 대체될겁니다. 이제 음성을 STT로 바꾸는
        세계를 경험하시게 되는거에요.
      </Typography>
      <Typography variant="body2" width={"800px"} m="auto" textAlign={"center"}>
        음성을 입력하면, 위의 박스에 텍스트로 변환됩니다.
      </Typography>
      <Button
        onClick={() => speak(tempvalueContainerRef.current?.innerText || "")}
      >
        말해라 이새끼야!
      </Button>
    </Box>
  );
};

export default STTDemoPage;
