const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;

  ToDoModel.create({ text }).then((data) => {
    console.log(`${data} was added to the database`);
    res.send(data);
  });
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;
  ToDoModel.findByIdAndUpdate(_id, { text })
    .then((data) => {
      console.log(`Todo ${data} was updated with "${text}" as it's new text`);
      const newData = data;
      newData.text = text;
      res.send(newData);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;
  if (ToDoModel.findById(_id) != null) {
    ToDoModel.findByIdAndDelete(_id)
      .then(() => {
        console.log(`Todo with ${_id} was deleted from the database`);
        res.send(`Todo with the id: ${_id} was deleted from the database`);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    console.log(`Todo with ${_id} was not found in the database`);
    res.send(`Todo with the id: ${_id} was not found in the database`);
  }
};
