// Extending the built-in Console interface
declare global {
  interface Console {
    help: () => void;
    joke: () => void;
    rain: () => void;
    about: () => void;
  }
}

export {};
