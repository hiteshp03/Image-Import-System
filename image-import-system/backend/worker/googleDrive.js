module.exports = async function fetchImages(folderUrl) {
  // Simulated (no auth required for assignment demo)
  return [
    {
      id: "drive123",
      name: "image1.jpg",
      size: 102400,
      mimeType: "image/jpeg",
      downloadUrl: "https://via.placeholder.com/300"
    }
  ];
};
