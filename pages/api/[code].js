import Urls from "../../models/urls";
import connectMongo from "../../utils/connectMongo";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { code } = req.query;
    await connectMongo();
    const data = await Urls.findOne({ code });
    console.log(data);
    if (data) {
        data.clicked+=1;
        data.save();
      res.redirect(data.url);
    } else {
      return res.status(404);
    }
  } else {
    return res.status(400);
  }
}
