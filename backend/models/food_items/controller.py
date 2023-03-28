from models.db import db
from models.food_items.model import FoodItem
from models.users.model import User
from flasgger import swag_from
from flask import  jsonify, request, Blueprint
from flask_jwt_extended import jwt_required, get_jwt_identity

fooditems = Blueprint("fooditems", __name__, url_prefix="/api/v2/fooditems")

@fooditems.route("/all", methods=["GET"])
@jwt_required()
def get_all():
    user_logged_in=get_jwt_identity()
    check_user_details = User.query.filter_by(id=user_logged_in).first()
    userType = check_user_details.user_type
    if userType != "sper admin":
        return {"message":"Sorry access denied"}
    else:
        items = FoodItem.query.all()
        response = [{
            "name":item.name,
            "image":item.image,
            "description":item .description
    } for item in items]
        return {"total":len(items), "data":response}

@fooditems.route("/catgory/<id>", methods=['POST'])
@jwt_required()
def specific_item(id):
    # checking the user type
    user_logged_in=get_jwt_identity()
    check_user_details = User.query.filter_by(id=user_logged_in).first()
    userType = check_user_details.user_type
    if userType != "sper admin":
        return {"message":"Sorry access denied"}
    else:            
            def register():
                name = request.json("name")
                image = request.json("image")
                description = request.json("description")
                registered_by =user_logged_in
                if not name or image or description:
                    return {"message":"All fields are required"}
                
                new_item = FoodItem(name=name, image=image, description=description, registered_by=registered_by)
                db.session.add(new_item)
                db.session.commit()
                return {"message":"successfully added a new food item", "data": new_item}
            
            return register()
    
@fooditems.route("/item/<id>", methods=["GET", "PUT", "DELETE"])
@jwt_required()
def single_item(id):
     # checking the user type
    user_logged_in=get_jwt_identity()
    check_user_details = User.query.filter_by(id=user_logged_in).first()
    userType = check_user_details.user_type
    if userType != "sper admin":
        return {"message":"Sorry access denied"}
    
    else:
        item = FoodItem.query.get_or_404(id)
        if request.method == "GET":
                
                return {"messgae":f"You successfully retrieved item {id}", "details":item}
        elif request.method == "PUT":
                item.name = request.json["name"]
                item.image = request.json["image"]
                item.description = request.json["description"]
                
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
        


        
