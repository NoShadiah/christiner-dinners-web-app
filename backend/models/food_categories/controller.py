from models.db import db
from models.food_categories.model import FoodCategory
from models.users.model import User
from flasgger import swag_from
from flask import  jsonify, request, Blueprint
from flask_jwt_extended import jwt_required, get_jwt_identity

foodcategories = Blueprint("foodcategories", __name__, url_prefix="/api/v2/foodcategories")

@foodcategories.route("/all", methods=["GET"])
# @jwt_required()
def get_all():
    # user_logged_in=get_jwt_identity()
    # check_user_details = User.query.filter_by(id=user_logged_in).first()
    # userType = check_user_details.user_type
    # if userType != "super admin":
    #     return {"message":"Sorry access denied"}
    # else:
        categories = FoodCategory.query.all()
        response = [{
             "id":category.id,
            "name":category.name,
            "image":category.image,
            "description":category.description,
            "registrered at":category.registered_at,
            "registerd_by":category.registered_by,
            "updated_at":category.updated_at
    } for category in categories]
        return jsonify(response)

@foodcategories.route("/register", methods=['POST'])
# @jwt_required()
def registercategory():
    # checking the user type
    # user_logged_in=get_jwt_identity()
    # check_user_details = User.query.filter_by(id=user_logged_in).first()
    # userType = check_user_details.user_type
    # if userType == "client":
    #     return {"message":"Sorry access denied"}
    # else:            
            def register():
                name = request.json["name"]
                image = request.json["image"]
                description = request.json["description"]
                # registered_by = user_logged_in
                registered_by = "11"
                if not name or not image or not description:
                    return {"message":"All fields are required"}
                
                new_category = FoodCategory(name=name, image=image, description=description, registered_by=registered_by)
                db.session.add(new_category)
                db.session.commit()
                return {"message":"successfully added a new food category", "data": new_category}
            
            return register()
    
@foodcategories.route("/category/<id>", methods=["GET", "PUT", "DELETE"])
# @jwt_required()
def single_category(id):
    # #  checking the user type
    # user_logged_in=get_jwt_identity()
    # check_user_details = User.query.filter_by(id=user_logged_in).first()
    # userType = check_user_details.user_type
    # if userType != "super admin":
    #     return {"message":"Sorry access denied"}
    
    # else:
        category = FoodCategory.query.get_or_404(id)
        if request.method == "GET":
                
                return {"messgae":f"You successfully retrieved category {id}", "details":category}
        elif request.method == "PUT":
                category.name = request.json["name"]
                category.image = request.json["image"]
                category.description = request.json["description"]
                 
                if not category.name or category.image or category.decription:
                     return {"message":"All fields required"}
                else:
                 
                    db.session.add(category)
                    db.session.commit()
                    return {"message":f"You successfully updated food category {category.id}"}
                
        elif request.method == "DELETE":
             db.session.delete(category)
             db.session.commit()
             return {"message":f"You successfully deleted {category.name}"}
        



