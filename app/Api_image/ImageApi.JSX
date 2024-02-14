const ImageComponent = () => {
  // State to store the image URL
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    // Function to fetch the image from the API
    const fetchImage = async () => {
      try {
        // Make a GET request to the API endpoint
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=b3e58e462e8240e28310346a1b0606d7"
        );
        // Parse the response as JSON
        const data = await response.json();
        // Extract the image URL from the response data
        const imageUrl = data.articles.urlToImage;
        // Set the image URL in the state
        setImageUrl(imageUrl);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    // Call the fetchImage function when the component mounts
    fetchImage();
  }, []);

  return (
    <div>
      {/* Display the image using the fetched image URL */}
      <img src={imageUrl} alt="Fetched Image" />
    </div>
  );
};

export default ImageComponent;
