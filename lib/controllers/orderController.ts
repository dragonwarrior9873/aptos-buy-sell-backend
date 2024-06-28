import * as mongoose from 'mongoose';
import { OrderSchema } from '../models/orderModel';
import { Request, Response } from 'express';

const Order = mongoose.model('Order', OrderSchema);

export class OrderController{

    public addNewOrder (req: Request, res: Response) {                
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);    
        let newOrder = new Order(req.body);

        newOrder.save((err, order) => {
            if(err){
                res.send(err);
            }    
            res.json(order);
        });
    }

    public getOrders (req: Request, res: Response) {           
        Order.find({}, (err, order) => {
            if(err){
                res.send(err);
            }
            res.json(order);
        });
    }

    public getOrderWithID (req: Request, res: Response) {           
        Order.findById(req.params.orderId, (err, order) => {
            if(err){
                res.send(err);
            }
            res.json(order);
        });
    }

    public updateOrder (req: Request, res: Response) {           
        Order.findOneAndUpdate({ _id: req.params.orderId }, req.body, { new: true }, (err, order) => {
            if(err){
                res.send(err);
            }
            res.json(order);
        });
    }

    public deleteOrder (req: Request, res: Response) {           
        Order.remove({ _id: req.params.orderId }, (err, order) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted order!'});
        });
    }
    
}