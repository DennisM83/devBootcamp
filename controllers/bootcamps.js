const Bootcamp = require('../models/Bootcamp');

// @desc    Get All Bootcamps
// @route   GET /api/v1/bootcamps
// @access  PUBLIC
exports.getBootcamps = (req,res,next) => {
    res.status(200).send({ success: true, msg: "Show all bootcamps" });
}

// @desc    Get A Single Bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  PUBLIC
exports.getBootcamp = (req,res,next) => {
    res
      .status(200)
      .send({ success: true, msg: `Show Bootcamp ${req.params.id}` });
}

// @desc    Create A Bootcamp
// @route   POST /api/v1/bootcamps/:id
// @access  PRIVATE
exports.createBootcamp = async (req,res,next) => {
    const bootcamp = await Bootcamp.create(req.body);

    res.status(201).json({ 
        success: true,
        data: bootcamp
    });
};

// @desc    Update A Bootcamp
// @route   POST /api/v1/bootcamps/:id
// @access  PRIVATE
exports.updateBootcamp = (req,res,next) => {
    res
      .status(200)
      .send({ success: true, msg: `Update Bootcamp ${req.params.id}` });
}

// @desc    Delete A Bootcamp
// @route   POST /api/v1/bootcamps/:id
// @access  PRIVATE
exports.deleteBootcamp = (req,res,next) => {
    res
      .status(200)
      .send({ success: true, msg: `Delete Bootcamp ${req.params.id}` });
}
