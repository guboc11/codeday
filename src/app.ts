import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

class Post {
  title : string;
  body : string;
  createdAt : Date;

  constructor(title : string, body : string, createdAt : Date) {
    this.title = title;
    this.body = body;
    this.createdAt = createdAt;
  }
}


var posts : Post[] = [];


const app = express();
app.use(cors());
app.use(bodyParser.json());

app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.json({
    title: "get",
    body: "body"
  });
});

app.get("/posts", (req, res) => {
  res.json(posts)
})

app.post("/", (req, res) => {
  const { title, body, createdAt } = req.body;
  const newPost : Post = new Post(title, body, createdAt);
  console.log(newPost)
  posts.push(newPost)
  res.json(posts)
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번에서 대기중");
});