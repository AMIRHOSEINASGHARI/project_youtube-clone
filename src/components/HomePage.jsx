"use client";

import { useContext } from "react";
//* Components
import { VideoCard } from ".";
//* Context
import { MainContext } from "@/utils/ContextProvider";

const HomePage = ({ data }) => {
  const { showMenu } = useContext(MainContext);

  return (
    <section
      className={`max-w-[2000px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-5 ${
        showMenu
          ? "md:pl-[200px] lg:pl-[220px]"
          : "md:pl-[78px] lg:pl-[100px] xl:grid-cols-4"
      } lg:pr-6 sm:px-3 pt-[130px] md:pt-[80px]`}
    >
      {data?.items.map((video) => {
        const { id, snippet } = video;

        return (
          <VideoCard
            key={id.videoId}
            videoId={id.videoId}
            publishedAt={snippet.publishedAt}
            channelId={snippet.channelId}
            title={snippet.title}
            thumbnails={snippet.thumbnails}
            channelTitle={snippet.channelTitle}
          />
        );
      })}
    </section>
  );
};

export default HomePage;
