import {Request, Response, NextFunction} from "express";
import { OrderController } from "../controllers/orderController";

export class Routes { 
    
    public orderController: OrderController = new OrderController() 
    
    public routes(app): void {   
        
        app.route('/')
        .get((req: Request, res: Response) => {        
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);              
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
            this.orderController.getOrders(req, res)
        })        
        
        app.route('/order').post((req: Request, res: Response, next: NextFunction) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);            
            this.orderController.addNewOrder(req, res)
        })        

        // Order detail
        app.route('/order/:orderId')
        // get specific order
        .get(this.orderController.getOrderWithID)
        .put(this.orderController.updateOrder)
        .delete(this.orderController.deleteOrder)

    }
}