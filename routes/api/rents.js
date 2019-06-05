const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const Rent = require('../../models/Rent');
const User = require('../../models/User');
const auth = require('../../middleware/auth');

// @route GET api/rents
// @desc  get all rents
// @acess Public
router.get('/', async (req, res) => {
  try {
    const rents = await Rent.find().sort({ createdAt: -1 });

    res.json(rents);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route GET api/rents/:id
// @desc  get  rent by id
// @acess Public
router.get('/:id', async (req, res) => {
  try {
    const rent = await Rent.findById(req.params.id);

    if (!rent) {
      return res.status(404).json({ msg: 'Rent not found' });
    }

    res.json(rent);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Rent not found' });
    }
    res.status(500).send('Server error');
  }
});

// @route POST api/rents
// @desc  Create rent
// @acess Private
router.post(
  '/',
  [
    auth,
    [
      check('type', 'Type is required')
        .not()
        .isEmpty(),
      check('city', 'City is required')
        .not()
        .isEmpty(),
      check('description', 'description is required')
        .not()
        .isEmpty(),
      check('price', 'price is required')
        .not()
        .isEmpty(),
      check('image', 'image is required')
        .not()
        .isEmpty(),
      check('district', 'district is required')
        .not()
        .isEmpty(),
      check('street', 'street is required')
        .not()
        .isEmpty(),
      check('bedroom', 'bedroom is required')
        .not()
        .isEmpty(),
      check('bathroom', 'bathroom is required')
        .not()
        .isEmpty(),
      check('garage', 'garage is required')
        .not()
        .isEmpty(),
      check('lat', 'lat is required')
        .not()
        .isEmpty(),
      check('lng', 'lng is required')
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');

      const {
        price,
        image,
        image2,
        image3,
        description,
        type,
        street,
        district,
        bedroom,
        bathroom,
        garage,
        number,
        city,
        area,
        petFriendly,
        lat,
        lng,
        email,
        tel,
        zap,
      } = req.body;

      const newRent = new Rent({
        author: req.user.id,
        authorName: user.name,
        avatar: user.avatar,
        price,
        image,
        image2,
        image3,
        description,
        type,
        street,
        district,
        bedroom,
        bathroom,
        garage,
        number,
        city,
        area,
        petFriendly,
        lat,
        lng,
        email,
        tel,
        zap,
      });

      const rent = await newRent.save();

      res.json(rent);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route DELETE api/rents/:id
// @desc  Delete rent
// @acess Private
router.delete('/:id', auth, async (req, res) => {
  try {
    // Remove rent
    const rent = await Rent.findById(req.params.id);

    if (!rent) {
      return res.status(404).json({ msg: 'Rent not found' });
    }
    // Check user
    if (rent.author.toString() !== req.user.id) {
      return res.status(401).send('User not authorized');
    }

    await rent.remove();

    res.json({ msg: 'Rent removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Rent not found' });
    }
    res.status(500).send('Server error');
  }
});

module.exports = router;
