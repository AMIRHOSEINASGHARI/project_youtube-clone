const url = "https://youtube138.p.rapidapi.com";

const headers = {
  "X-RapidAPI-Key": process.env.API_KEY,
  "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
};

export async function fetchVideos(searchTerm = "") {
  const res = await fetch(`${url}/search/`, {
    headers: headers,
    params: {
      q: searchTerm ? searchTerm : "Most popular",
      hl: "en",
      gl: "US",
    },
  });
  const data = await res.json();
  return data;
}
