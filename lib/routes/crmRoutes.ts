import {Request, Response, NextFunction} from "express";
import { OrderController } from "../controllers/orderController";

export class Routes { 
    
    public orderController: OrderController = new OrderController() 
    
    public routes(app): void {   
        
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })
        
        // Order 
        app.route('/order')
        .get((req: Request, res: Response, next: NextFunction) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);            
            // if(req.query.key !== '78942ef2c1c98bf10fca09c808d718fa3734703e'){
            //     res.status(401).send('You shall not pass!');
            // } else {
            //     next();
            // }                        
        }, this.orderController.getOrders)        

        // POST endpoint
        .post(this.orderController.addNewOrder);

        // Order detail
        app.route('/order/:orderId')
        // get specific order
        .get(this.orderController.getOrderWithID)
        .put(this.orderController.updateOrder)
        .delete(this.orderController.deleteOrder)

    }
}