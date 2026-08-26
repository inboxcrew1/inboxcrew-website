import React, { Component, ErrorInfo, ReactNode } from 'react';
import { RefreshCw, AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in component tree:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="w-full min-h-[300px] flex flex-col items-center justify-center p-8 bg-black/90 border border-blue-500/30 rounded-2xl text-center font-mono my-8">
          <AlertTriangle className="w-10 h-10 text-amber-400 mb-4 animate-pulse" />
          <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2">
            COMPONENT_RENDER_RECOVERY
          </h3>
          <p className="text-xs text-zinc-400 max-w-md mb-6 leading-relaxed">
            A minor rendering exception occurred. The rest of the INBOXCREW platform remains active and secure.
          </p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Restore Module</span>
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
