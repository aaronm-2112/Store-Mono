import express, { Request, Response } from "express";
import * as path from "path";

const app = express();

// treat the react application's build folder as the rppt directory to serve static React assets
app.use(express.static(path.resolve(__dirname, "../../client/build")));

// api routes
app.get("/api/v1/*", (req: Request, res: Response) => {
  return res.sendStatus(201);
});

// all non api routes go to the React app
app.get("*", (req: Request, res: Response) => {
  return res.sendFile(
    path.join(__dirname, "../../client", "build", "index.html")
  );
});

export default app;
