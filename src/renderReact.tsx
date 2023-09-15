import  { StaticRouter } from "react-router-dom/server";
import App from "./App.tsx";
import express from "express";
import { renderToPipeableStream } from "react-dom/server";
const app = express();



app.get("*", (req, res) => {
  const location = req.url;
  const jsx = (
    <StaticRouter location={location}>
      <App />
    </StaticRouter>
  );

  const reactDom = renderToPipeableStream(jsx);
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Your App</title>
      </head>
      <body>
        <div id="app">${reactDom}</div>
      </body>
    </html>
  `);
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});