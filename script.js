// Mock Data
const blogPosts = [
  { title: "Tech Trends 2024", category: "Tech" },
  { title: "Healthy Living Tips", category: "Lifestyle" },
  { title: "AI in Everyday Life", category: "Tech" },
  { title: "Minimalism: A New Lifestyle", category: "Lifestyle" },
  { title: "Advancements in Robotics", category: "Tech" }
];

let filteredCategory = "All";

// Show loading animation
function showLoading() {
  document.getElementById('loading').style.display = 'block';
}

// Hide loading animation
function hideLoading() {
  document.getElementById('loading').style.display = 'none';
}

// Filter Results
function filterResults(category) {
  filteredCategory = category;
  search();
}

// Perform Search
function search() {
  showLoading(); // Show loading animation
  const query = document.getElementById('searchInput').value.toLowerCase();
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = ""; // Clear previous results

  // Filter and Search Logic
  const filteredPosts = blogPosts.filter(post =>
    (filteredCategory === "All" || post.category === filteredCategory) &&
    post.title.toLowerCase().includes(query)
  );

  // Display Results
  setTimeout(() => { // Simulate delay
    hideLoading(); // Hide loading animation
    if (filteredPosts.length > 0) {
      filteredPosts.forEach(post => {
        const resultDiv = document.createElement('div');
        resultDiv.className = "result-item";
        resultDiv.innerText = `${post.title} (${post.category})`;
        resultsContainer.appendChild(resultDiv);
      });
    } else {
      resultsContainer.innerHTML = "<p>No results found.</p>";
    }
  }, 1000); // Simulated delay for loading effect
}
