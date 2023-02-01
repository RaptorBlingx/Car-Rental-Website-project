import Car from '../models/Car.js'

export const createCar = async (req, res) => {
    const newCar = new Car (req.body)

    try {
        const savedCar = await newCar.save()

        res
        .status(200)
        .json({
            success:true,
            message: "Successfully careated",
            data: savedCar,
        })
    } catch (err) {
        res
        .status(500)
        .json({success:false, message: "failed to create. Try again "});
    }
};