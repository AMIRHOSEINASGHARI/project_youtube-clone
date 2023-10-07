//* Components
import { HomePage } from "@/components";
//* Utility Functions
import { fetchVideos } from "@/utils/fetchFromApi";

const Home = async () => {
  const data = await fetchVideos("NextJS");

  return <HomePage data={data} />;
};

export default Home;
