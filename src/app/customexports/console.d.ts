// Extending the built-in Console interface
declare global {
  interface Console {
    help: () => void;
    about: () => void;
    joke: () => void;
    rain: () => void;
  }
}

export {};
