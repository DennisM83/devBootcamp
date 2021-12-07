const Bootcamp = require("../models/Bootcamp");

// @desc    Get All Bootcamps
// @route   GET /api/v1/bootcamps
// @access  PUBLIC
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res.status(200).json({ success: true, data: bootcamps });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Get A Single Bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  PUBLIC
exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);

        if(!bootcamp) {
            return res.status(400).json({ success: false })
        }

        res.status(200).json({ success: true, data: bootcamp });
      } catch (err) {
        res.status(400).json({ success: false });
      }
};

// @desc    Create A Bootcamp
// @route   POST /api/v1/bootcamps/:id
// @access  PRIVATE
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);

    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};

// @desc    Update A Bootcamp
// @route   POST /api/v1/bootcamps/:id
// @access  PRIVATE
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!bootcamp) {
      return res.status(400).json({ success: false })
    } 
    res.status(200).json({ success: true, data: bootcamp })
  } catch (err) {
    return res.status(400).json({ success: false })
  }
};

// @desc    Delete A Bootcamp
// @route   POST /api/v1/bootcamps/:id
// @access  PRIVATE
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .send({ success: true, msg: `Delete Bootcamp ${req.params.id}` });
};
