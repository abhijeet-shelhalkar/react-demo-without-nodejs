// Obtain the root 
const rootElement = document.getElementById('root');

// Create a ES6 class component    
class ShoppingList extends React.Component {
  // Use the render function to return JSX component      
  render() {
    return (
      <div className="shopping-list">
        <h1>{this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Facebook</li>
        </ul>
      </div>
    );
  }
}

// Create a function to wrap up your component
function App() {
  return (
    <div>
      <ShoppingList name="Social Media Platforms List:" />
    </div>
  );
}

// Use the ReactDOM.render to show your component on the browser
ReactDOM.render(<App />, rootElement);
