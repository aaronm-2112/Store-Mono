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

  console.log("In route");
  setTimeout(() => {
    console.log("Happening now");
    const products: { id: number; name: string; price: number }[] = [
      {
        id: 1,
        name: "china",
        price: 12.5,
      },
      {
        id: 2,
        name: "crepes",
        price: 6.5,
      },
      {
        id: 3,
        name: "crepes",
        price: 6.5,
      },
      {
        id: 4,
        name: "crepes",
        price: 6.5,
      },
      {
        id: 5,
        name: "sandbags",
        price: 12.5,
      },
      {
        id: 6,
        name: "crepes",
        price: 6.5,
      },
      {
        id: 7,
        name: "crepes",
        price: 6.5,
      },
      {
        id: 8,
        name: "crepes",
        price: 6.5,
      },
      {
        id: 9,
        name: "sandbags",
        price: 12.5,
      },
      {
        id: 10,
        name: "crepes",
        price: 6.5,
      },
      {
        id: 11,
        name: "crepes",
        price: 6.5,
      },
      {
        id: 12,
        name: "crepes",
        price: 6.5,
      },
      {
        id: 13,
        name: "sandbags",
        price: 12.5,
      },
      {
        id: 14,
        name: "crepes",
        price: 6.5,
      },
      {
        id: 15,
        name: "crepes",
        price: 6.5,
      },
      {
        id: 16,
        name: "crepes",
        price: 6.5,
      },
      {
        id: 17,
        name: "sandbags",
        price: 12.5,
      },
      {
        id: 18,
        name: "crepes",
        price: 6.5,
      },
      {
        id: 19,
        name: "crepes",
        price: 6.5,
      },
      {
        id: 20,
        name: "crepes",
        price: 6.5,
      },
      {
        id: 21,
        name: "sandbags",
        price: 12.5,
      },
      {
        id: 22,
        name: "crepes",
        price: 6.5,
      },
      {
        id: 23,
        name: "crepes",
        price: 6.5,
      },
      {
        id: 24,
        name: "crepes",
        price: 6.5,
      },
      {
        id: 25,
        name: "sandbags",
        price: 12.5,
      },
      {
        id: 26,
        name: "crepes",
        price: 6.5,
      },
      {
        id: 27,
        name: "crepes",
        price: 6.5,
      },
      {
        id: 28,
        name: "crepes",
        price: 6.5,
      },
      {
        id: 29,
        name: "sandbags",
        price: 12.5,
      },
      {
        id: 30,
        name: "crepes",
        price: 6.5,
      },
      {
        id: 31,
        name: "crepes",
        price: 6.5,
      },
      {
        id: 32,
        name: "crepes",
        price: 6.5,
      },
    ];
    return res.status(201).send(products);
  }, 1000);
});

// all non api routes go to the React app
app.get("*", (req: Request, res: Response) => {
  return res.sendFile(
    path.join(__dirname, "../../client", "build", "index.html")
  );
});

export default app;
