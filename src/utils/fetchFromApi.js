const headers = {
  "X-RapidAPI-Key": process.env.API_KEY,
  "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
};

export async function fetchVideos(searchTerm = "Most popular") {
  const res = await fetch(
    `https://youtube-v31.p.rapidapi.com/search?q=${searchTerm}&maxResults=50&part=snippet,id&regionCode=US`,
    {
      headers: headers,
    }
  );
  const data = await res.json();
  return data;
}
