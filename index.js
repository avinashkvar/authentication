const express = require('express');
const { connect } = require('./db/connect');
const cors = require('cors');
const { userRouter } = require('./routes/user.routes');

const app = express();
app.use(express.json())
app.use(cors())

app.use('/',userRouter)

connect()
.then(()=>{
    app.listen(3001, () => {
			console.log('listening on port 3001');
		});
}).catch((err)=>{
    console.error(err);
})

module.exports = app;