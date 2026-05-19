import { useState } from "react";
import VideoIntro from "./VideoIntro.jsx";
import Header from "./Header.jsx";

export default function PageController() {
  const [startHeaderVideo, setStartHeaderVideo] = useState(false);

  return (
    <>
      <VideoIntro onFinish={() => setStartHeaderVideo(true)} />
      <Header start={startHeaderVideo} />
    </>
  );
}
