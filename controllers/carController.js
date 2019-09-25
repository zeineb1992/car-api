const Car = require('../models/CarModel');

class CarController {
    static async getAllCars(request, response) {
        try {
            const cars = await Car.find({}).exec();
            console.log(JSON.stringify(cars));
            response.status(200).json({ result: 'success', cars, message: 'An array of cars' });
        } catch (error) {
            console.log(error);
            response.status(500).json({ result: 'failed', message: error });
        }
    }
    static async getACar(request, response) {
        try {
            const { slug } = request.params;
            const car = await Car.findOne({ slug }).exec();
            response.status(200).json({ result: 'success', car, message: 'A car' });
        } catch (error) {
            console.log(error);
            response.status(404).json({ result: 'failed', message: error });
        }
    }
    static async addNewCar(request, response) {
        try {
            const { model, brand, price } = request.body;
            const car = new Car({ model, brand, price });
            await car.save();
            response.status(201).json({ result: 'success', car, message: 'Car created' });
        } catch (error) {
            console.log(error);
            response.status(500).json({ result: 'failed', message: error });
        }
    }
    static async deleteCar(request, response) {
        try {
            const { slug } = request.params;
            const car = Car.findOne({ slug }).exec();
            await car.remove();
            response.status(200).json({ result: 'success', message: 'Car removed' });
        } catch (error) {
            console.log(error);
            response.status(404).json({ result: 'failed', message: error });
        }
    }
    static async updateCar(request, response) {
        try {
            const { slug } = request.params;
            const car = await Car.findOne({ slug }).exec();
            await car.updateOne({ ...request.body });
            response.status(200).json({ result: 'success', message: 'Car updated' });
        } catch (error) {
            console.log(error);
            response.status(404).json({ result: 'failed', message: error });
        }
    }
}
module.exports = CarController;