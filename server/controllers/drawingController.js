import Drawing from "../models/Drawing.js";

export const createDrawing = async (req, res) => {
  const { drawing } = req.body;
  const newDrawing = new Drawing({
    creator: req.user.username,
    createdAt: new Date(),
    ...drawing,
  });
  const savedDrawing = await newDrawing.save();
  res.status(201).send(savedDrawing);
};

export const editDrawing = async (req, res) => {};

export const getDrawings = async (req, res) => {
  const foundDrawings = await Drawing.find({ isPublic: true });
  res.status(200).send(foundDrawings);
};
