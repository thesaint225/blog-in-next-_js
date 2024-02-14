import Navbar from "../Navbar/Navbar";

export default async function Page() {
  // Fetch cryptocurrency news data from the News API
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=${process.env.NEWS_API_KEY}`
  );
  const data = await res.json();

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar component */}
      <Navbar />
      <div className="container mx-auto py-8">
        {/* Title */}
        <h2 className="text-2xl font-semibold mb-4">Cryptocurrency News</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Map through each article and display it */}
          {data.articles.map((article) => (
            <div
              key={article.title}
              className="bg-white shadow-md p-4 rounded-lg"
            >
              {/* Check if article has an image URL before displaying */}
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="rounded-t-lg w-full h-48 object-cover mb-4"
                />
              )}
              {/* Author */}
              <p className="italic text-gray-500 mb-2">
                Author: {article.author}
              </p>
              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
              {/* Description */}
              <p className="text-gray-700">{article.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
