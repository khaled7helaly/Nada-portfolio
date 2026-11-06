import { Component } from "react";

/** Last line of defence: a render error or a failed lazy chunk shows a reload prompt instead of a blank page. */
export default class ErrorBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error) {
    console.error(error);
  }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <main className="grid min-h-screen place-items-center px-6 text-center">
        <div>
          <p className="font-serif text-2xl italic text-brand">Something went wrong.</p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-6 cursor-pointer text-[13px] outline-offset-4 hover:text-brand focus-visible:outline-2 focus-visible:outline-brand"
          >
            ( reload )
          </button>
        </div>
      </main>
    );
  }
}
