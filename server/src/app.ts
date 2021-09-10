import express, { json, Request, Response } from "express";
import * as path from "path";
import cors from "cors";

const app = express();

app.use(json());
app.use(cors());

// treat the react application's build folder as the rppt directory to serve static React assets
app.use(express.static(path.resolve(__dirname, "../../client/build")));

// api routes
app.get("/api/v1/*", (req: Request, res: Response) => {
  console.log("In the route");
  const products: { id: number; name: string; price: number }[] = [
    {
      id: 1,
      name: "sandbags",
      price: 12.5,
    },
    {
      id: 2,
      name: "crepes",
      price: 6.5,
    },
  ];
  return res.status(201).send(products);
});

// all non api routes go to the React app
app.get("*", (req: Request, res: Response) => {
  return res.sendFile(
    path.join(__dirname, "../../client", "build", "index.html")
  );
});

export default app;
