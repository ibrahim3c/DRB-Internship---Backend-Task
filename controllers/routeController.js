import Route from "../models/Route.js";
import Driver from "../models/Driver.js";

export const addRoute = async (req, res, next) => {
  try {
    const { startLocation, endLocation, distance, estimatedTime } = req.body;

    const route = new Route({
      startLocation,
      endLocation,
      distance,
      estimatedTime,
    });

    // assign it to available driver
    const availableDriver = await Driver.findOne({ availability: true });

    if (availableDriver) {
      route.assignedDriver = availableDriver._id;

      // make the driver as unavailable
      availableDriver.availability = false;
      await availableDriver.save();
    }

    await route.save();
    res.status(201).json(route);
  } catch (err) {
    next(err);
  }
};

export const getSchedule = async (req, res, next) => {
  try {
    const routes = await Route.find().populate(
      "assignedDriver",
      "name licenseType"
    );

    const schedule = routes.map((route) => ({
      startLocation: route.startLocation,
      endLocation: route.endLocation,
      assignedDriver: route.assignedDriver
        ? route.assignedDriver.name
        : "Unassigned",
    }));

    res.status(200).json(schedule);
  } catch (err) {
    next(err);
  }
};

// paginated
export const getAllRoutes = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const total = await Route.countDocuments();
    const routes = await Route.find().skip(skip).limit(limit);

    res.status(200).json({
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      totalResults: total,
      routes,
    });
  } catch (err) {
    next(err);
  }
};
