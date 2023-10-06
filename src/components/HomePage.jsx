import { fetchVideos } from "@/utils/fetchFromApi";

const HomePage = async () => {
  const data = await fetchVideos();

  return <div>HomePage</div>;
};

export default HomePage;
