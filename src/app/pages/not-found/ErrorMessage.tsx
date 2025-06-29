type ErrorMessageProps = {
    title?: string;
    message?: string;
  };
  
  export function ErrorMessage({
    title = "Page not found",
    message = "Sorry, the page you’re looking for doesn’t exist or has been moved.",
  }: ErrorMessageProps) {
    return (
      <div className="text-center space-y-2">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">{title}</h1>
        <p className="text-gray-600">{message}</p>
      </div>
    );
  }
  