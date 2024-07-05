"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
class Post {
    constructor(title, body, createdAt) {
        this.title = title;
        this.body = body;
        this.createdAt = createdAt;
    }
}
var posts = [];
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.set("port", process.env.PORT || 3000);
app.get("/", (req, res) => {
    res.json({
        title: "get",
        body: "body"
    });
});
app.get("/posts", (req, res) => {
    res.json(posts);
});
app.post("/", (req, res) => {
    const { title, body, createdAt } = req.body;
    const newPost = new Post(title, body, createdAt);
    console.log(newPost);
    posts.push(newPost);
    res.json(posts);
});
app.listen(app.get("port"), () => {
    console.log(app.get("port"), "번에서 대기중");
});
