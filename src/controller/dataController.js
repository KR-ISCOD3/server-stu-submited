const Students = require("../model/dataModel.js");

const post_data = async (req, res) => {
  try {
    const { name, tel, course, time, project_name, gitlink, linkDeploy } =
      req.body;

    if (
      !name ||
      !tel ||
      !course ||
      !time ||
      !project_name ||
      !gitlink ||
      !linkDeploy
    ) {
      return res
        .status(400)
        .send({ message: "Please provide all required fields" });
    }

    const newData = new Students({
      name,
      tel,
      course,
      time,
      project_name,
      gitlink,
      linkDeploy,
    });

    await newData.save();

    res.status(201).send({ message: "Data created successfully" });
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const delete_data = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res
        .status(400)
        .send({ message: "Please provide the ID of the data to delete" });
    }

    const deletedData = await Students.findByIdAndDelete(id);

    if (!deletedData) {
      return res
        .status(404)
        .send({ message: "Data not found with the provided ID" });
    }

    res.status(200).send({ message: "Data deleted successfully" });
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const get_all_data = async (req, res) => {
  try {
    const allData = await Students.find().sort({ _id: -1 });

    if (!allData) {
      return res.status(404).send({ message: "No data found" });
    }

    res.status(200).send(allData);
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = {
  post_data,
  delete_data,
  get_all_data
};
