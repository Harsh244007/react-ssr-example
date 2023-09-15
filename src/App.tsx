import { Suspense } from "react";
import { About, Error, Home, Navigation } from "./components/index.tsx";
import { generateRandomString } from "./components/Common/commonFn.tsx";
import { Routes, Route } from "react-router-dom";
const App = () => {
  const randomString = generateRandomString(5);
  return (
    <>
      <Navigation RandomString={randomString} />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <Error />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default App;
