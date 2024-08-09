import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import TTSDemoPage from "./TTSDemoPage";
import STTDemoPage from "./STTDemoPage";

function App() {
  const [selectedTab, setSelectedTab] = useState<string>("STT");

  return (
    <Box width="full" height={"100vh"} textAlign="center" m="0" p="0">
      <Box
        marginBottom="2rem"
        boxShadow={"1px 1px 0.5px 0.5px #3f3f3f50"}
        boxSizing={"border-box"}
        bgcolor={"#fafafa"}
      >
        <Tabs
          value={selectedTab}
          centered
          onChange={(_, newValue) => setSelectedTab(newValue)}
        >
          <Tab value={"TTS"} label="TTS" />
          <Tab value={"STT"} label="STT" />
        </Tabs>
      </Box>
      <TabPannel
        value={selectedTab}
        index={"STT"}
        Component={<STTDemoPage />}
      />
      <TabPannel
        value={selectedTab}
        index={"TTS"}
        Component={<TTSDemoPage />}
      />
    </Box>
  );
}

export default App;

const TabPannel = ({
  value,
  index,
  Component,
}: {
  value: string;
  index: string;
  Component?: JSX.Element;
}) => {
  if (value !== index) return null;
  return Component;
};
