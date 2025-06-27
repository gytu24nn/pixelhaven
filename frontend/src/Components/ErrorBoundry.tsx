import { FallbackProps } from "react-error-boundary";
import "../CSS/ErrorBoundary.css";

function ErrorBoundary({
    error,
    resetErrorBoundary,
    title = "Something went wrong! An error occurred.",
    children,
}: FallbackProps & {title?: string, children?: React.ReactNode}) {

    console.error("ErrorBoundary caught an error:", error);

    return (
        <div className="error-boundary-container">
            <h2 className="errorBoundary-Title">{title}</h2>
            <p className="errorBoundary-Message">{error.message}</p>
            {children}
            <button className="errorBoundary-Btn" onClick={resetErrorBoundary}>Try again!</button>
        </div>
    )
}

export default ErrorBoundary;