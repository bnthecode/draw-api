import Drawing from "../models/Drawing.js";

export const createDrawing = async (req, res) => {
  try {
    const { drawing } = req.body;
    const newDrawing = new Drawing({
      creator: req.user.username,
      createdAt: new Date(),
      ...drawing,
    });
    const savedDrawing = await newDrawing.save();

    res.status(201).send(savedDrawing);
  } catch (error) {
    res.status(500).send({ message: "failure saving user drawing" });
  }
};

export const editDrawing = async (req, res) => {
  try {
    const { drawing } = req.body;
    await Drawing.findByIdAndUpdate({ _id: req.params.id }, drawing);
    res.status(200).send("done");
  } catch (error) {
    res.status(500).send({ message: "failure getting user drawings" });
  }
};

export const getDrawings = async (req, res) => {
  try {
    const foundDrawings = await Drawing.find({ isPublic: true });
    res.status(200).send(foundDrawings);
  } catch (error) {
    res.status(500).send({ message: "failure getting drawings" });
  }
};

export const getDrawing = async (req, res) => {
  try {
    const foundDrawing = await Drawing.findOne({ _id: req.params.id });
    res.status(200).send(foundDrawing);
  } catch (error) {
    res.status(500).send({ message: "failure getting drawing" });
  }
};

export const getUserDrawings = async (req, res) => {
  try {
    const foundDrawings = await Drawing.find({ creator: req.user.username });
    res.status(200).send(foundDrawings);
  } catch (error) {
    res.status(500).send({ message: "failure getting user drawings" });
  }
};

export const deleteDrawing = async (req, res) => {
  try {
    await Drawing.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send("done");
  } catch (error) {
    res.status(500).send({ message: "failure getting user drawings" });
  }
};
