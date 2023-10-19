import Todo from "../model/Todo.js";

export const addTodo = async (req, res) => {
  const { title, description, status } = req.body;
  try {
    const newTodo = await Todo.create({
      title,
      description,
      status,
      createdAt: Date.now(),
    });
    await newTodo.save();
    return res.status(200).json(newTodo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({}).sort({ createdAt: -1 });
    return res.status(200).json(todos);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const toggletodoDone = async (req, res) => {
  try {
    const todoRef = await Todo.findById(req.params.id);
    const todoo = await Todo.findOneAndUpdate(
      { _id: req.params.id },
      { status: !todoRef.status }
    );
    await todoo.save();
    return res.status(200).json(todoo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const updateTodo = async (req, res) => {
  const { title, description, status } = req.body;
  try {
    await Todo.findOneAndUpdate(
      { _id: req.params.id },
      { title, description, status }
    );

    const todo = await Todo.findById(req.params.id);

    return res.status(200).json(todo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    return res.status(200).json(todo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
