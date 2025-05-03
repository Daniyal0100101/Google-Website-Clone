# Google Clone

A pixel-perfect static replica of Google.com, crafted with pure HTML, CSS, and JavaScript. This project replicates the Google homepage, retaining its core functionality while introducing a themed dark mode and multi-search engine integration, a feature not present in the original Google site. This enhancement was added for an engaging collaborative experience.

## Features

### Core Functionality

- **Pixel-Perfect UI**: Accurately replicates Google.com's visual design, including spacing, fonts, and colors.
- **Dark Mode**: Faithfully recreates Google's dark theme with an accurate color palette.
- **Responsive Design**: Fully adapts to various screen sizes with precise breakpoints.
- **Accessibility Features**: Supports ARIA labels and keyboard navigation.

### Search Functionality

- **Multi-Engine Search**: Integrates Google, Perplexity AI, and ChatGPT search engines.
- **Dropdown Menu**: Displays search engine options when hovering over the search box.
- **Search Persistence**: Retains the last used search engine using localStorage.
- **I'm Feeling Lucky**: Redirects to Google's "I'm Feeling Lucky" search results.

### User Experience

- **Keyboard Navigation**: Tab index and focus states align with Google's behavior.
- **Voice & Camera Icons**: Authentic replicas of Google's search interface elements.
- **Header/Footer Links**: Functional links to Google services.

## Cloning Process & Implementation Details

### HTML Structure

- **Semantic HTML5**: Utilizes a proper semantic structure for enhanced accessibility.
- **SVG Implementation**: Incorporates the Google logo as inline SVG for crisp rendering at any scale.
- **Search Form**: Structured to match Google's exact markup pattern.
- **Dropdown Menu**: Custom implementation of Google's search options dropdown.

### CSS Styling

- **CSS Variables**: Ensures consistent color theming across light and dark modes.
- **CSS Flexbox**: Delivers responsive layouts without frameworks.
- **Media Queries**: Matches Google's responsive behavior with breakpoints at 768px and 480px.
- **Focus States**: Custom focus indicators that align with Google's accessibility patterns.

### JavaScript Features

- **Theme System**: Detects and applies the user's preferred color scheme.
- **Local Storage**: Persists user preferences between sessions.
- **Event Delegation**: Handles dropdown interactions efficiently.
- **Search Routing**: Constructs dynamic URLs based on the selected search engine.

### Conditional Features

- **Dark Mode Toggle**: Switches between light and dark themes seamlessly.
- **URL Parameter Handling**: Correctly escapes and encodes query strings.
- **Search Engine Selection**: Adapts behavior based on the chosen engine.
- **Hover States**: Varied hover effects for buttons, links, and dropdown elements.

## File Structure Breakdown

```
├── index.html          # Main HTML document with semantic structure
├── styles.css          # Complete styling with dark/light mode support
├── script.js           # Search functionality and theme management
├── README.md           # Project documentation
├── icons               # Directory containing icons (e.g., Google logo)
```

### Responsive Design

The clone emulates Google's responsive behavior across devices:

- **Desktop**: Full layout with all navigation elements.
- **Tablet**: Adjusted spacing and button sizes.
- **Mobile**: Simplified header with core functionality preserved.

### Dark Mode Implementation

Key features of dark mode implementation:

- **System Detection**: Respects the user's system preference.
- **Manual Toggle**: Allows overriding system preference.
- **Persistent Choice**: Saves preference in localStorage.
- **No Flash**: Prevents white flash on initial load.

### Search Engine Switching

Enables searching with three different engines:

1. **Google**: Default search engine (`https://www.google.com/search?q=`)
2. **Perplexity AI**: Alternative AI search (`https://www.perplexity.ai/search?q=`)
3. **ChatGPT**: OpenAI's ChatGPT (`https://chat.openai.com/search?q=`)

## Local Development

To test the site locally:

1. Clone the repository.
2. Open `index.html` in any browser or start a local server:

   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve
   ```

3. Access it at `http://localhost:8000`.

No build steps or server setup are required, as this is a static site.

## Educational Note

This project illustrates:

- Pixel-perfect recreation of a real-world website.
- Implementation of multiple themes with CSS variables.
- User preference persistence with localStorage.
- Advanced dropdown menu behavior.
- Multiple search engine integrations.

## License

This project is created for educational purposes only. Google and its logos are trademarks of Google LLC. This project is not affiliated with Google in any way.
