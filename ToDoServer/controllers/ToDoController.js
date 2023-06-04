const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.status(200).send(toDo);
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;

  ToDoModel.create({ text }).then((data) => {
    console.log(`${data} was added to the database`);
    res.status(200).send(data);
  });
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;
  ToDoModel.findByIdAndUpdate(_id, { text })
    .then((data) => {
      console.log(`Todo ${data} was updated with "${text}" as it's new text`);
      const newData = data;
      newData.text = text;
      res.status(200).send(newData);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.deleteToDo = async (req, res) => {
  const { id } = req.params;

  console.log(`id : ${id}`);

  if (ToDoModel.findById(id) != null) {
    ToDoModel.findByIdAndDelete(id)
      .then(() => {
        console.log(`ToDo with ${id} was deleted from the database`);
        res.status(200).send(`ToDo with the id: ${id} was deleted successfully !`);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    console.log(`ToDo with ${id} was not found in the database`);
    res.status(400).send(`ToDo with the id: ${id} was not found in the database`);
  }
};
