import { createServer } from "http";
import express from "express";
import cookieParser from "cookie-parser";
import { Server as socketServer } from "socket.io";
import path from "path";
import { indexRouter } from "./routes/index";
import { indexWS } from "./ws/indexWS";

const app = express();
const httpServer = createServer(app);
indexWS(new socketServer(httpServer));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/tsPublic", express.static(path.join(__dirname, "public")));

app.use("/", indexRouter.router);

httpServer.listen(3000);
