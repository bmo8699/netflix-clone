import { Route, Redirect } from "react-router-dom";

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }
        if (user) {
          console.log(loggedInPath);
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }
      }}
    />
  );
}

export function ProtectedRoute({user, children, ...rest}) {
  return (
    <Route
      {...rest}
      render={({location}) => {
        if (user) {
          return children;
        }
        if (!user) {
          return (
            <Redirect
              to={{
                pathname: "",
                //TODO: explain how state works ? 
                state: {from: location},
              }}
            />
          );
        }

        return null;
      }}
    />
  )
}