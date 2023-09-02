const fs = require("fs");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

function readFile() {
  try {
    const read = fs.readFileSync("./db.json", "utf-8");
    return JSON.parse(read);
  } catch (err) {
    return { users: [] };
  }
}
function genRandomId(db){
 const userId = db.users.reduce((max, user)=>{
  return user.id > max ? user.id : max
 }, 0)
 return userId+1
}

app.post("/register", (req, res) => {
  const db = readFile();
  const user = db.users.find((ele) => {
    return ele.email === req.body.email;
  });
  if(user) {
    return res.status(400).json({message:"user already exist."})
  }
  const id = genRandomId(db)
  db.users.push({...req.body, id});
  fs.writeFileSync("./db.json", JSON.stringify(db), "utf-8");
  res.status(200).json({message:"user registered is successfully."})
  console.log(db);
});

app.post("/login", (req, res)=>{
  const db = readFile();
  const auth = db.users.find((ele)=>{
    return req.body.email === ele.email && req.body.password === ele.password
  })
  if(auth){
    return res.status(200).json({message:"login succesful"})
  }
  res.status(400).json({message:'wrong emailid or password'})
})

app.listen(8000, () => {
  console.log("listening on port 8000");
});
