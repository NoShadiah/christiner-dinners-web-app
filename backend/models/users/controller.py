#register a new user
from flask import  jsonify, request, Blueprint
from models.users.model import User
from models.db import db
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token, create_refresh_token
from flasgger import swag_from

users = Blueprint('users', __name__, url_prefix='/api/v2/users')

#user login
@users.route("/login", methods=["POST"])
# @swag_from('../documentation/docs/user/login.yaml')
def login():
    email = request.json.get("email")
    user_password = request.json.get("password")
    user = User.query.filter_by(email=email).first()

    if not email or not user_password:
        return jsonify({"message": "All fields are required"})
    if user:
        
        def password():
            u_password = user_password
        
            password_hashed = user.password
            validate=check_password_hash(password_hashed, u_password)
            if validate:
                access_token = create_access_token(identity=user.id) #to make JSON Web Tokens for authentication
                return {"message":"you successfully logged in", "access token":access_token}
            else:
                return "Provided an incorrect password"
        return password()
    else:
        return "email does not exist"   
        

        
    

#get all users
@users.route("/all")
def all_users():
    users= User.query.all()
    return jsonify({
            "success":True,
            "data":users,
            "total":len(users)
        }),200

@users.route('/register',methods=['POST'])
def create_user():
    user_fname =request.json['first name']
    user_lname = request.json['last name']
    user_email = request.json['email']
    user_contact =request.json['contact']  
    user_password = request.json['password']
    user_user_type=request.json['user_type']
    password_hash = generate_password_hash(user_password)
  


    # validations
    #getting the user a data
    if not user_fname:
        return jsonify({'Message':"First name is required"}),400

    if not user_lname:
        return jsonify({'Message':"Last name is required"}),400
    
    if not user_email:
        return jsonify({'Message':"Email is required"}),400
    
    if not user_contact:
        return jsonify({'Message':"Contact is required"}),400
    
    if not user_password:
        return jsonify({'Message':"Password is required"}),400
    if  not user_user_type:
        default = "customer"
        user_user_type = default
    
    # password validation length
    if len(user_password)<6:
        return jsonify({'Message':"Password must be atleast 6 characters long"})
    
    
    
    #constaints
    if User.query.filter_by(email=user_email).first():
       return jsonify({'Message':"Email already exists"}),409
    
    
    existing_user_contact=User.query.filter_by(contact=user_contact).first()
    if existing_user_contact:
            return jsonify({'Message':"Contact already in use"}),409
     
    

    #storing new user
    new_user = User( first_name = user_fname,
                    last_name = user_lname,
                    email = user_email,
                    contact = user_contact,
                    password=password_hash,
                     user_type=user_user_type)
    #  address = user_address,
    

    #adding a new users to the database
    db.session.add(new_user)
    db.session.commit()
    return jsonify({
                    'Success':True,
                    'Message':f"{new_user.first_name} you have successfully created an account",
                    }),201




    


@users.route('/user/<user_id>', methods=['GET', 'PUT', 'DELETE'])
def handle_user(user_id):
    user = User.query.get_or_404(user_id)

    if request.method == 'GET':
        response = {
            "id":user.id,
            "name": user.first_name + user.last_name,
            "user_type":user.user_type,
            "email": user.email,
            "contact": user.contact
        }
        return {"success": True,"message":"User details retrieved", "user": response}

    elif request.method == 'PUT':
        data = request.get_json()

        if not data['first name']:
            return jsonify({"message":"Your name is required"})

        if not data['last name']:
            return jsonify({"message":"Your name is required"})
        
        if not data['email']:
            return jsonify({"message":"Your email address is required"})
        
        if not data['contact']:
            return jsonify({"message":"Your contact is required"})
        
        if not data['password'] or len(data['password'])<6:
            return jsonify({"message":"Your password is required and must be greater than 6 characters"})
        
        user.first_name = data['first name']
        user.last_name = data['last name']
        user.email = data['email']
        user.contact = data['contact']
        user.password = generate_password_hash(data['password'])
        user.updated_at = datetime.now()
        db.session.add(user)
        db.session.commit()
        return {"message": f"User details of {user.first_name} updated successfully"}

    elif request.method == 'DELETE':
        if user is None:
            return{"message":"User identity not found", "status code":"404"}
        else:
            db.session.delete(user)
            db.session.commit()
            return {"message": f"User {user.first_name} successfully deleted."}   
  



