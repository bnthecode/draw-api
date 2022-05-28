import Drawing from "../models/Drawing.js";

export const createDrawing = async (req, res) => {
    const { imgUrl, creator } = req.body;
    const drawing = new Drawing({
        creator,
        createdAt: 'today',
        imgUrl,
      });
      const savedDrawing = await drawing.save();
      res.status(201).send(savedDrawing);
}



export const editDrawing = async (req, res) => {

}


export const getDrawings = async (req, res) => {
    const foundDrawings = await Drawing.find();
    
    res.status(200).send(foundDrawings);
}
