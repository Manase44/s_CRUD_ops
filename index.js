const express = require("express")

const app = express()

app.listen(4002,
    (error) => {
        console.log('server running at port 4002')
    }
)