const Router = require('express').Router;
const CarController = require('../controllers/carController');

const router = Router();

router.route('/car')
    .get(CarController.getAllCars)
    .post(CarController.addNewCar);


router.route('/car/:slug')
    .get(CarController.getACar)
    .patch(CarController.updateCar)
    .delete(CarController.deleteCar);
module.exports = router;