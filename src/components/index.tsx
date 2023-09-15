import React from "react";
const Navigation = React.lazy(() => import("./Navigation/index.tsx"));
const Error = React.lazy(() => import("./Error/index.tsx"));
const Home = React.lazy(() => import("./Home/index.tsx"));
const About = React.lazy(() => import("./About/index.tsx"));
export { Navigation, Error, Home, About };
