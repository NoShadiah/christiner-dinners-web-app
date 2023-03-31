from models.db import db
from models.menu.model import MenuItem
from models.users.model import User
from flasgger import swag_from
from flask import  jsonify, request, Blueprint
from flask_jwt_extended import jwt_required, get_jwt_identity

menu = Blueprint("menu", __name__, url_prefix="/api/v2/menu")

@menu.route("/clients_view", methods=["GET"])
# @jwt_required()
def get_menu():
    # user_logged_in=get_jwt_identity()
    # check_user_details = User.query.filter_by(id=user_logged_in).first()
    # userType = check_user_details.user_type
    # if userType == "sper admin" or userType=="admin":
    #     return {"message":"Sorry, clients are legible to access this menu in this org"}
    # else:
        menuitems = MenuItem.query.all()
        response = [{
                "name":item.name,
                "image":item.image,
                "description":item.description,
                "price_unit":item.price_unit,
                "price":item.price,
                "served_at":item.served_at
        } for item in menuitems]
        return {"total":len(menuitems), "data":response}

@menu.route("/all", methods=["GET"])
@jwt_required()
def get_all():
    user_logged_in=get_jwt_identity()
    check_user_details = User.query.filter_by(id=user_logged_in).first()
    userType = check_user_details.user_type
    if userType == "client":
        return {"message":"Sorry access denied"}
    else:
        menuitems = MenuItem.query.all()
        response = [{
                "name":item.name,
                "image":item.image,
                "description":item.description,
                "price_unit":item.price_unit,
                "price":item.price,
                "served_at":item.served_at,
                "category":item.category_id,
                "reg_at":item.reg_at,
                "updated":item.upd_at
        } for item in menuitems]
        return {"total":len(menuitems), "data":response}


@menu.route("/register", methods=['POST'])
@jwt_required()
def specific_item(id):
    # checking the user type
    user_logged_in=get_jwt_identity()
    check_user_details = User.query.filter_by(id=user_logged_in).first()
    userType = check_user_details.user_type
    if userType == "client":
        return {"message":"Sorry access denied"}
    else:            
            def register():
                name = request.json["name"]
                image = request.json["image"]
                description = request.json["description"]
                registered_by = user_logged_in
                price_unit = "UGX"
                price = request.json["price"]
                served_at = request.json["served_at"]
                category_id = request.json["category_id"]

                if not name or image or description:
                    return {"message":"All fields are required"}
                
                new_item = MenuItem(name=name, 
                                    image=image, 
                                    description=description, 
                                    reg_by=registered_by, 
                                    price_unit=price_unit, 
                                    price = price, 
                                    served_at = served_at,
                                    category_id = category_id,
                                    upd_by = "notyet")
                db.session.add(new_item)
                db.session.commit()
                return {"message":"successfully added a new menu item", "data": new_item}
            
            return register()
    
@menu.route("/item/<id>", methods=["GET", "PUT", "DELETE"])
@jwt_required()
def single_item(id):
     # checking the user type
    user_logged_in=get_jwt_identity()
    check_user_details = User.query.filter_by(id=user_logged_in).first()
    userType = check_user_details.user_type
    if userType == "client":
        return {"message":"Sorry access denied"}
    
    else:
        item = MenuItem.query.get_or_404(id)
        if request.method == "GET":
                return {"messgae":f"You successfully retrieved item {id}", "details":item}
        
        elif request.method == "PUT":
                item.name = request.json["name"]
                item.image = request.json["image"]
                item.description = request.json["description"]
                item.price_unit = "UGX"
                item.price = request.json["price"]
                item.served_at = request.json["served_at"]
                item.category_id = request.json["category_id"]
                item.upd_by = user_logged_in
                 
                if not item.name or item.image or item.decription:
                     return {"message":"All fields required"}
                else:
                 
                    db.session.add(item)
                    db.session.commit()
                    return {"message":f"You successfully updated food item {item.id}"}
                
        elif request.method == "DELETE":
             db.session.delete(item)
             db.session.commit()
             return {"message":f"You successfully deleted {item.name}"}