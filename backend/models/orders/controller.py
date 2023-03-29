from models.db import db
from flask_jwt_extended import jwt_required
from models.users.model import User
from models.orders.model import Order
from  flasgger import swag_from
from flask import  jsonify, request, Blueprint
from flask_jwt_extended import jwt_required, get_jwt_identity

orders = Blueprint("orders", __name__, url_prefix="/api/v2/orders")

@orders.route("/user/orders", methods=["GET"])
@jwt_required()
def get_all():
    user_logged_in=get_jwt_identity()
    check_user_details = User.query.filter_by(id=user_logged_in).first()
    userType = check_user_details.user_type
    # if userType != "sper admin":
    #     return {"message":"Sorry access denied"}
    
    orders = Order.query.all()
    response = [{
            "menu_item":order.menu_item,
            "quantity":order.quantity,
            "delivery_address":order.delivery_address,
            "made_at":order.made_at,
            "needed_by":order.needed_by,
            "status":order.status
    } for order in orders]
    return {"total":len(orders), "data":response}

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
    return {"total":len(orders), "data":response}
 

@orders.route("/order", methods=['POST'])
@jwt_required()
def specific_order():
    # checking the user type
    user_logged_in=get_jwt_identity()
    check_user_details = User.query.filter_by(id=user_logged_in).first()
    userType = check_user_details.user_type
    if userType != "client":
        return {"message":"Sorry only registered CLIENTS can make orders, create an account or login"}
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
                                  status =status)
                db.session.add(new_order)
                db.session.commit()
                return {"message":"successfully made a new food order, thank you, your order will delivered as needed", "data": new_order}
            
            return register()
    
@orders.route("/order/<id>", methods=["GET", "PUT", "DELETE"])
@jwt_required()
def single_order(id):
     # checking the user type
    user_logged_in=get_jwt_identity()
    check_user_details = User.query.filter_by(id=user_logged_in).first()
    userType = check_user_details.user_type
    if userType != "super admin" or userType != "admin":
        return {"message":"Sorry access denied"}
    
    else:
        order = Order.query.get_or_404(id)
        if request.method == "GET":
                
                return {"messgae":f"You successfully retrieved order {id}", "details":order}
        elif request.method == "PUT":
                order.status = request.json["status"]
                
                 
                if not order.status:
                     return {"message":"All fields required"}
                else:
                 
                    db.session.add(order)
                    db.session.commit()
                    return {"message":f"You successfully updated the status of order {order.id}"}
                
        elif request.method == "DELETE":
             db.session.delete(order)
             db.session.commit()
             return {"message":f"You successfully deleted {order.made_by}"}