from models.db import db
from flask_jwt_extended import jwt_required
from models.users.model import User
from models.orders.model import Order
from  flasgger import swag_from
from flask import  jsonify, request, Blueprint
from flask_jwt_extended import jwt_required, get_jwt_identity

orders = Blueprint("orders", __name__, url_prefix="/api/v2/orders")

@orders.route("/all", methods=["GET"])
@jwt_required()
def get_all():
    user_logged_in=get_jwt_identity()
    check_user_details = User.query.filter_by(id=user_logged_in).first()
    userType = check_user_details.user_type
    # if userType != "sper admin":
    #     return {"message":"Sorry access denied"}
    
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

@orders.route("/catgory/<id>", methods=['POST'])
@jwt_required()
def specific_order(id):
    # checking the user type
    user_logged_in=get_jwt_identity()
    check_user_details = User.query.filter_by(id=user_logged_in).first()
    userType = check_user_details.user_type
    if userType != "cuctomer":
        return {"message":"Sorry only registered CLIENTS can make orders"}
    else:            
            def register():
                made_by = user_logged_in
                menu_item = request.json["menu_item"]
                quantity = request.json["quantity"]
                delivery_address = request.json["delivery_address"]
                needed_by = request.json["needed_by"]

                
                if not made_by or menu_item or quantity:
                    return {"message":"All fields are required"}
                
                new_order = Order(made_by=made_by, menu_item=menu_item, quantity=quantity, delivery_address=delivery_address)
                db.session.add(new_order)
                db.session.commit()
                return {"message":"successfully added a new food order", "data": new_order}
            
            return register()
    
@orders.route("/order/<id>", methods=["GET", "PUT", "DELETE"])
@jwt_required()
def single_order(id):
     # checking the user type
    user_logged_in=get_jwt_identity()
    check_user_details = User.query.filter_by(id=user_logged_in).first()
    userType = check_user_details.user_type
    if userType != "super admin":
        return {"message":"Sorry access denied"}
    
    else:
        order = Order.query.get_or_404(id)
        if request.method == "GET":
                
                return {"messgae":f"You successfully retrieved order {id}", "details":order}
        elif request.method == "PUT":
                order.made_by = request.json["made_by"]
                order.menu_item = request.json["menu_item"]
                order.quantity = request.json["quantity"]
                 
                if not order.made_by or order.menu_item or order.decription:
                     return {"message":"All fields required"}
                else:
                 
                    db.session.add(order)
                    db.session.commit()
                    return {"message":f"You successfully updated food order {order.id}"}
                
        elif request.method == "DELETE":
             db.session.delete(order)
             db.session.commit()
             return {"message":f"You successfully deleted {order.made_by}"}