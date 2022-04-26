import Koa from "koa";
import convert from "koa-convert";
import onerror from "koa-onerror";
import Router from "koa-router";
import json from "koa-json";
import bodyParser from "koa-bodyparser";
import logger from "koa-logger";

import config from "./configs";
import api from "./api";

const app = new Koa();
onerror(app, {
  accepts() {
    return "json";
  }
});

const router = Router();

// middlewares
app.use(
  bodyParser({
    enableTypes: ["json", "form", "text"]
  })
);
app.use(json());
app.use(logger());

// allow cross domin
const cors = require('koa2-cors');
app.use(cors()); 


import "./models/mongodb";


// logger
app.use(async (ctx, next) => {
  const start = new Date();

  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

router.use("/favicon.ico", ctx => {
  return;
});

// api/router
app.use(api());

app.use(router.routes()).use(router.allowedMethods());

app.on("error", err => {
  // console.error(err);
});

// create server
app.listen(config.app.port, () => {
  console.log("The server is running at http://localhost:" + config.app.port);
});

export default app;
