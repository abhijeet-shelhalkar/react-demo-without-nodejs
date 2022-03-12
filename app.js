// get root element
const rootElement = document.getElementById('root');

// Create ES6 class component    
class SocialMediaList extends React.Component {
  // Use the render function to return JSX component      
  render() {
    return (
      <div className="media-list">
        <h1>{this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Facebook</li>
          <li>Twitter</li>
        </ul>
      </div>
    );
  }
}

// Create a function to wrap up your component
function App() {
  return (
    <div>
      <SocialMediaList name="Social Media Platforms:" />
    </div>
  );
}

// Use the ReactDOM.render to show your component on the browser
ReactDOM.render(<App />, rootElement);
