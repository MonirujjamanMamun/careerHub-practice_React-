import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div id="error-page">
      <div className="ml-11 my-5">
        <h1 className="text-2xl my-3">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <div className="w-fit mx-auto h-full my-auto">
        <Link to="/">Go to Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
