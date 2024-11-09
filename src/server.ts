import app from "./app";

const startServer = async () => {
    app.listen(process.env.PORT, () => {
        console.log(`Application envirnment ${process.env.NODE_ENV}`)
        console.log(`Server up and running on PORT ${process.env.PORT}`)
    })
}

startServer();