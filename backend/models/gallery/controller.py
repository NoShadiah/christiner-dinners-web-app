from models.db import db
from models.gallery.model import GalleryItem
from models.users.model import User
from flasgger import swag_from
from flask import  jsonify, request, Blueprint
from flask_jwt_extended import jwt_required, get_jwt_identity

gallery = Blueprint("gallery", __name__, url_prefix="/api/v2/gallery")

@gallery.route("/all", methods=["GET"])
# @jwt_required()
def get_all():
    
        galleryitems = GalleryItem.query.all()
        response = [{
               "id":gallery_item.id,
            "name":gallery_item.name,
            "image":gallery_item.image,
            "description":gallery_item .description
    } for gallery_item in galleryitems]
        return {"total":len(galleryitems), "data":response}

@gallery.route("/register", methods=['POST'])
# @jwt_required()
def specific_gallery_item():
    # # checking the user type
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
                # registered_by =user_logged_in
                registered_by = "11"
                if not name or not image or not description:
                    return {"message":"All fields are required"}
                
                new_gallery_item = GalleryItem(name=name, image=image, description=description, registered_by=registered_by)
                db.session.add(new_gallery_item)
                db.session.commit()
                return {"message":"successfully added a new  gallery_item", "data": new_gallery_item}
            
            return register()
    
@gallery.route("/gallery_item/<id>", methods=["GET", "PUT", "DELETE"])
# @jwt_required()
def single_gallery_item(id):
    #  # checking the user type
    # user_logged_in=get_jwt_identity()
    # check_user_details = User.query.filter_by(id=user_logged_in).first()
    # userType = check_user_details.user_type
    # if userType != "sper admin":
    #     return {"message":"Sorry access denied"}
    
    # else:
        gallery_item = GalleryItem.query.get_or_404(id)
        if request.method == "GET":
                
                return {"messgae":f"You successfully retrieved gallery_item {id}", "details":gallery_item}
        elif request.method == "PUT":
                gallery_item.name = request.json["name"]
                gallery_item.image = request.json["image"]
                gallery_item.description = request.json["description"]
                if not gallery_item.name or not gallery_item.image or not gallery_item.decription:
                     return {"message":"All fields required"}
                else:
                 
                    db.session.add(gallery_item)
                    db.session.commit()
                    return {"message":f"You successfully updated food gallery_item {gallery_item.id}"}

        elif request.method == "DELETE":
             db.session.delete(gallery_item)
             db.session.commit()
             return {"message":f"You successfully deleted {gallery_item.name}"}
        


        
