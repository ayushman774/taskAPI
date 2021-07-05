const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const userRoutes = require('./routes/users.routes');

const app = new koa();
app.use(bodyParser());



app.use(userRoutes.routes()).use(userRoutes.allowedMethods());
app.listen(3000)