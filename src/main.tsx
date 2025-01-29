import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

console.log('Initializing application...');

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error('Failed to find the root element');
  throw new Error('Failed to find the root element');
}

try {
  console.log('Creating root and rendering app...');
  const root = createRoot(rootElement);
  root.render(<App />);
  console.log('Application rendered successfully');
} catch (error) {
  console.error('Error rendering application:', error);
  throw error;
}