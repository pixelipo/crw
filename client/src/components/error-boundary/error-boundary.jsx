import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
        hasError: false
    };
  }

  static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.log(error);
  }

  render() {
    if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
            <div>
                <div style={{backgroundImage: `url(${this.props.imageUrl})`}}>
                    <h2>Sorry, this page is lost.</h2>
                </div>
            </div>
        );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
