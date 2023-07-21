import React, { Component } from "react";

interface Props {
  fallback?: React.ReactNode;
  children: React.ReactNode | JSX.Element;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    console.log(error);

    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(this.state.hasError);

    console.error(error.message);
    console.error(errorInfo.componentStack);
  }

  render(): JSX.Element | React.ReactNode {
    if (this.state.hasError) {
      return (this.props.fallback || <div>에러!!!!!</div>) as JSX.Element;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
