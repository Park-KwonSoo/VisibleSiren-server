const Koa = require('koa');
const Router = require('koa-router');
const bodyparser = require('koa-bodyparser');
const mongoose = require('mongoose');

require('dotenv').config();

const app = new Koa();
const router = new Router();

// eslint-disable-next-line no-undef
const { SERVER_PORT, MONGO_URL } = process.env;

app.use(bodyparser());

mongoose.connect(MONGO_URL, {
    useFindAndModify : false,
    useNewUrlParser : true,
    useUnifiedTopology: true,
    useCreateIndex : true
}).then(() => {
    console.log("MongoDB 연결 : ", MONGO_URL);
}).catch(err => {
    console.log("MongoDB 연결 실패 : ", err);
});

app.listen(SERVER_PORT, () => {
    console.log("서버 연결 성공 : ", SERVER_PORT, '\n');
});