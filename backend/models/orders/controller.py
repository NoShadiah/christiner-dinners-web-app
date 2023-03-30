from models.db import db
from flask_jwt_extended import jwt_required
from models.users.model import User
from models.orders.model import Order
from  flasgger import swag_from
from flask import  jsonify, request, Blueprint
from flask_jwt_extended import jwt_required, get_jwt_identity

orders = Blueprint("orders", __name__, url_prefix="/api/v2/orders")

# client making an order
@orders.route("/make_order", methods=['POST'])
@jwt_required()
def specific_order():
    # checking the user type
    user_logged_in=get_jwt_identity()
    check_user_details = User.query.filter_by(id=user_logged_in).first()
    userType = check_user_details.user_type
    
    if userType != "client":
        return {"message":"Sorry only registered CLIENTS can make orders, kindly create an account"}
    else:            
            def register():
                made_by = user_logged_in
                menu_item = request.json["menu_item"]
                quantity = request.json["quantity"]
                delivery_address = request.json["delivery_address"]
                needed_by = request.json["needed_by"]
                status = "pending"
                
                if not delivery_address or menu_item or quantity or needed_by:
                    return {"message":"All fields are required"}
                
                new_order = Order(made_by=made_by,
                                  menu_item=menu_item, 
                                  quantity=quantity, 
                                  delivery_address=delivery_address, 
                                  needed_by=needed_by, 
                                  status = status)
                db.session.add(new_order)
                db.session.commit()
                return {"message":"successfully made a new food order, thank you, your order will delivered as as specified", "data": new_order}
            
            return register()
    

@orders.route("/user/orders", methods=["GET"])
@jwt_required()
def get_all():
    user_logged_in=get_jwt_identity()
    check_user_details = User.query.filter_by(id=user_logged_in).first()
    userType = check_user_details.user_type
    if userType != "client":
        return {"message":"Sorry you have no orders made yet, create an account and make an order"}
    
    else:
        
        response = [{
                "menu_item":order.menu_item,
                "quantity":order.quantity,
                "delivery_address":order.delivery_address,
                "made_at":order.made_at,
                "needed_by":order.needed_by,
                "status":order.status
        } for order in check_user_details]
        return jsonify({"You have made":len(check_user_details)+" orders", "They include":response})

#for admins to view all orders
@orders.route("/all", methods=["GET"])
@jwt_required()
def get_all():
    user_logged_in=get_jwt_identity()
    check_user_details = User.query.filter_by(id=user_logged_in).first()
    userType = check_user_details.user_type
    if userType == "client" or userType == "customer":
        return {"message":"Sorry but access denied, you are unauthorized"}
    
    orders = Order.query.all()
    response = [{
            "made_by":order.made_by,
            "menu_item":order.menu_item,
            "quantity":order.quantity,
            "delivery_address":order.delivery_address,
            "made_at":order.made_at,
            "needed_by":order.needed_by,
            "status":order.status
    } for order in orders]
    return jsonify({"total":len(orders), "data":response})
 


@orders.route("/order/<id>", methods=["GET", "PUT", "DELETE"])
@jwt_required()
def single_order(id):
     # checking the user type
    user_logged_in=get_jwt_identity()
    check_user_details = User.query.filter_by(id=user_logged_in).first()
    userType = check_user_details.user_type
    user_fname = check_user_details.first_name
    user_lname = check_user_details.last_name
    user_name = user_fname + " " + user_lname
    if userType == "client":
        return {"message":"Sorry access denied"}
    
    else:
        order = Order.query.get_or_404(id)
        if request.method == "GET":
                
                return {"messgae":f"You successfully retrieved order {id}", "details":order}
        elif request.method == "PUT":
                order.status = request.json["status"]
                order.updated_by = user_name
                
                 
                if not order.status:
                     return {"message":"Please update the status or abort opreation"}
                else:
                 
                    db.session.add(order)
                    db.session.commit()
                    return {"message":f"You successfully updated the status of order {order.id}"}
                
        elif request.method == "DELETE":
             db.session.delete(order)
             db.session.commit()
             return {"message":f"You successfully deleted {order.made_by}"}