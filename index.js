


const express =  require("express");
const  dotenv = require("dotenv");
const  morgan = require("morgan");
const  helmet = require("helmet");
const  cors  =  require("cors");
const bodyParser = require("body-parser");
dotenv.config();



// uploadImageUpload image
const uploadImage = require("./utils/ImageUpload");
// routes app
const  userroute =  require("./routes/users/userRoute");
const  authroute =  require("./routes/users/authUserRoute");
const  managerroute =  require("./routes/responsableRoute");
const  clientroute =  require("./routes/clientRoute");
const  blogroute =  require("./routes/blogRoute");
const  serviceroute =  require("./routes/serviceRoute");
const  messageroute =  require("./routes/messageRoute");
const  parameteroute =  require("./routes/parameterRoute");
const  temoinroute =  require("./routes/temoinRoute");



// connection a la base données
const LanchMogoDb = require("./utils/ConnectMongodb");
LanchMogoDb();

// demargae application
const app = express();

// middlwares de l'application 
app.use(cors({origin:"*"}));
app.use(morgan('common'));
app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ limit: "500mb" }));
app.use(bodyParser.json({ limit: '1000mb' }));
app.use(bodyParser.urlencoded({
  limit: '1000mb',
  extended: false,
}));
app.use(helmet());
// access control
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST ');
  res.setHeader('Authorization','Bearer Sb5xnq9Gwe4mIlyucQJpi0lCoyn+faar5SRVzAFGDAqZbr6kRROW/');
  next();
})



// upload image
app.post("/uploadImage", (req, res) => {
  uploadImage(req.body.image)
    .then((url) => res.send(url))
    .catch((err) => res.status(500).send(err));
});



app.get("/", (req, res) => {
  res.send({
    article:"Application démaré avec succès "
  });
  console.log("api vu ...")
});

// routes
app.use("/api/v1/users" ,userroute );
//authentificate
app.use("/api/v1" ,authroute);
app.use("/api/v1/managers" ,managerroute );
app.use("/api/v1/temoins" ,temoinroute );
app.use("/api/v1/clients" ,clientroute);
app.use("/api/v1/blog" ,blogroute);
app.use("/api/v1/service" ,serviceroute);
app.use("/api/v1/message" ,messageroute);
app.use("/api/v1/parameter" ,parameteroute);



// Serveur
const port = process.env.PORT
//const port = 5000
app.listen(port, () => {
  console.log(`serveur démare sur le lien http://localhost:${port}`);
});