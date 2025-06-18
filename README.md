# Movie Watch App

A responsive web application for browsing and watching movies with admin functionality for editing movie titles.

## Features

- **Movie Grid Display**: Shows movie thumbnails in a responsive grid layout.
- **Search Functionality**: Filter movies by title in real-time.
- **Media Player**: Fullscreen video player for watching movies.
- **Admin Controls**:
  - Login/Logout functionality (password: `control_14`)
  - Edit movie titles (visible only when logged in as admin)
- **Responsive Design**: Works on various screen sizes with smooth hover effects.

## Technologies Used

- HTML5
- CSS3 (with modern gradients and transitions)
- JavaScript (ES6)

## Installation & Usage

1. Clone or download the repository.
2. Open `index.html` in a web browser.
3. Use the search bar to find movies.
4. Click on any movie to play it in fullscreen mode.
5. Admin users can click the login button to enable title editing.

## File Structure

- `index.html` - Main application structure
- `style.css` - All styling for the application
- `script.js` - Core functionality including:
  - Movie data management
  - Search implementation
  - Media player controls
  - Admin authentication system

## Customization

To add more movies, edit the `movies` array in `script.js`:

```javascript
const movies = [
  { title: "New Movie", thumbnail: "path/to/thumbnail.jpg", video: "path/to/video.mp4" },
  // Add more movies here
];
