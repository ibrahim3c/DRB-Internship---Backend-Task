import Driver from "../models/Driver.js";
import Route from "../models/Route.js";
import httpStatusText from "../utils/httpStatusText.js";

export const addDriver = async (req, res, next) => {
  try {
    const { id, name, licenseType, availability } = req.body;
    const driver = new Driver({ id, name, licenseType, availability });
    await driver.save();
    res.status(201).json({status:httpStatusText.SUCCESS,data:driver});
  } catch (err) {
    next(err);
  }
};

export const getDriverHistory = async (req, res, next) => {
  try {
    const driverId = req.params.id;
    const routes = await Route.find({ assignedDriver: driverId });

    res.status(200).json({status:httpStatusText.SUCCESS,data:{
      driverId,
      routes,
    }});
  } catch (err) {
    next(err);
  }
};
