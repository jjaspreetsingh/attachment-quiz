# Attachment Style Quiz

A beautiful, interactive React component that helps users discover their attachment style through a series of thoughtful questions. Built with React, Tailwind CSS, and Lucide icons.

## Features

- **Interactive Quiz**: 6 carefully crafted questions to assess attachment style
- **4 Attachment Styles**: Secure, Anxious, Avoidant, and Fearful-Avoidant
- **Responsive Design**: Works on all devices with a stunning gradient background
- **Smooth Animations**: Engaging transitions between screens
- **Accessibility**: ARIA labels and keyboard navigation support
- **Personalized Results**: Detailed descriptions, strengths, and growth suggestions

## Installation

1. **Create a new React app** (if you don't have one):
   ```bash
   npx create-react-app attachment-quiz
   cd attachment-quiz
   ```

2. **Install dependencies**:
   ```bash
   npm install lucide-react
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

3. **Configure Tailwind CSS**:
   Update `tailwind.config.js`:
   ```js
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: [
       "./src/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

   Add to `src/index.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

4. **Add the component**:
   Copy `AttachmentStyleQuiz.jsx` to your `src/` directory.

5. **Use the component**:
   In `src/App.js`:
   ```jsx
   import AttachmentStyleQuiz from './AttachmentStyleQuiz';

   function App() {
     return (
       <div className="App">
         <AttachmentStyleQuiz />
       </div>
     );
   }

   export default App;
   ```

## Usage

Simply import and render the `AttachmentStyleQuiz` component in your React app. The quiz handles all state management internally.

```jsx
import AttachmentStyleQuiz from './AttachmentStyleQuiz';

function App() {
  return <AttachmentStyleQuiz />;
}
```

## Deployment

### Option 1: Netlify (Recommended)

1. **Build your app**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop your `build` folder onto the dashboard
   - Your site will be live instantly!

### Option 2: Vercel

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```
   Follow the prompts to deploy your app.

### Option 3: GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**:
   ```json
   "homepage": "https://yourusername.github.io/attachment-quiz",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

## Customization

- **Questions**: Modify the `questions` array in `AttachmentStyleQuiz.jsx`
- **Styles**: Adjust Tailwind classes for different themes
- **Attachment Data**: Update `attachmentStyles` object with new content

## License

MIT License - feel free to use in your projects!

## Contributing

Pull requests welcome! Please ensure code follows React best practices and includes proper documentation.