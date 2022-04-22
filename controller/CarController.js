const { car } = require('../models');

module.exports = class {

    //data masih belum bisa di return
    static getCar(req, res) {
        car.findAll().then((result) => {
            res.status(200).json({
                status: 200,
                data: result
            });
        }).catch((err) => {
            console.log(err);
        });
    }
    
    static getOneCar(req, res) {
        car.findOne({
            where: { id: req.params.id }
        }).then((result) => {
            res.status(200).json({
                status: 200,
                data: result
            });
        }).catch((err) => {
            res.status(400).send(err)
        });
    }
    
    static addCar(req, res) {
        car.create(req.body).then((result) => {
            res.status(201).json({
                status: 201,
                message: "car data has been create",
                data: req.body
            })
        }).catch((err) => {
            console.log(err)
        });
    }

    static updateCar(req, res) {
        car.update(req.body, {
            where: {id: req.params.id}
        }).then((result) => {
            res.status(200).json({
                status: 201,
                message: "car data has been update",
                data: req.body
            })
        }).catch((err) => {
            console.log(err);
        });
    }

    static deleteCar(req, res) {
        car.destroy({
            where: { id: req.params.id }
        }).then((result) => {
            res.status(200).json({
                status: 200,
                message: "data car has been removed"
            });
        }).catch((err) => {
            res.status(400).send(err)
        });
    }
} 