const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  // TODO
  return response.json(respositories);
  
});

app.post("/repositories", (request, response) => {
  // TODO
  const  { title, url, techs } = request.body;

  const respository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0,
  }

  if(!repository){
    return response.status(400).send();
  }

  repositories.push(respository);

  return response.json(repository);
});

app.put("/repositories/:id", (request, response) => {
  // TODO
 
});

app.delete("/repositories/:id", (request, response) => {
  // TODO
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
  const { id } = request.params;

  const repository = repositories.find(repository => repository.id === id);

  if(!repository){
    return response.status(400).send();
  }

  repository.likes += 1;

  return response.json(repository);

});

module.exports = app;
