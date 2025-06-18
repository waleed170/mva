// Sample movie data
const movies = [
    { title: "Movie 1", thumbnail: "movies/movie1.jpg", video: "movies/movie1.mp4" },
    { title: "Movie 2", thumbnail: "movies/movie2.jpg", video: "movies/movie2.mp4" },
    { title: "Movie 3", thumbnail: "movies/movie3.jpg", video: "movies/movie3.mp4" },
    { title: "Movie 4", thumbnail: "movies/movie4.jpg", video: "movies/movie4.mp4" },
    // Add more movies here
  ];
  
  // DOM Elements
  const movieGrid = document.getElementById("movie-grid");
  const searchBar = document.getElementById("search-bar");
  const mediaPlayer = document.getElementById("media-player");
  const videoPlayer = document.getElementById("video-player");
  const closePlayerButton = document.getElementById("close-player");
  const loginButton = document.getElementById("login-button");
  const logoutButton = document.getElementById("logout-button");
  
  let isAdmin = false; // Track admin login status
  
  // Admin Login Functionality
  loginButton.addEventListener("click", () => {
    const password = prompt("Enter admin password:");
    if (password === "password") { // Simple password check
      isAdmin = true;
      loginButton.classList.add("hidden");
      logoutButton.classList.remove("hidden");
      renderMovies(movies); // Re-render movies to show edit buttons
    } else {
      alert("Incorrect password!");
    }
  });
  
  // Admin Logout Functionality
  logoutButton.addEventListener("click", () => {
    isAdmin = false;
    loginButton.classList.remove("hidden");
    logoutButton.classList.add("hidden");
    renderMovies(movies); // Re-render movies to hide edit buttons
  });
  
  // Render Movies
  function renderMovies(filteredMovies) {
    movieGrid.innerHTML = "";
    filteredMovies.forEach((movie) => {
      const card = document.createElement("div");
      card.classList.add("movie-card");
  
      // Thumbnail Image
      const img = document.createElement("img");
      img.src = movie.thumbnail;
      img.alt = movie.title;
  
      // Movie Title
      const title = document.createElement("div");
      title.classList.add("movie-title");
      title.textContent = movie.title;
  
      // Edit Button (Visible only for admin)
      const editButton = document.createElement("button");
      editButton.classList.add("edit-button");
      if (isAdmin) editButton.classList.add("visible"); // Show edit button if admin is logged in
      editButton.textContent = "✎";
      editButton.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent the card click event from firing
        const newTitle = prompt("Enter new movie title:", movie.title);
        if (newTitle && newTitle.trim() !== "") {
          movie.title = newTitle.trim();
          renderMovies(movies); // Re-render the movie grid
        }
      });
  
      // Append elements to the card
      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(editButton);
  
      // Add click event to open media player
      card.addEventListener("click", () => openMediaPlayer(movie.video));
  
      // Append card to the grid
      movieGrid.appendChild(card);
    });
  }
  
  // Search Functionality
  searchBar.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query)
    );
    renderMovies(filteredMovies);
  });
  
  // Open Media Player
  function openMediaPlayer(videoSrc) {
    videoPlayer.src = videoSrc;
    mediaPlayer.classList.remove("hidden");
  }
  
  // Close Media Player
  closePlayerButton.addEventListener("click", () => {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    mediaPlayer.classList.add("hidden");
  });
  
  // Initial Render
  renderMovies(movies);