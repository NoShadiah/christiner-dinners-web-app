from models.db import db
from dataclasses import dataclass
from datetime import datetime

@dataclass
class User(db.Model):
  __tablename__ = 'users'

  id: int
  first_name: str
  last_name: str
  email: str
  contact: str
  user_type: str

  id = db.Column(db.Integer, primary_key = True)
  first_name = db.Column(db.String(100),nullable=False)
  last_name = db.Column(db.String(100),nullable=False)
  email = db.Column(db.String(50))  
  contact = db.Column(db.String(200))
  user_type = db.Column(db.String(100),default="client")
  password = db.Column(db.String(10))
  registered_at = db.Column(db.String(255),nullable=True, default=datetime.now())
  updated_at = db.Column(db.String(255),nullable=True, onupdate=datetime.now())
  
  # food_categories = db.relationship("FoodCcategory",backref="user")
  # food_items = db.relationship("FoodItem", backref="user")
  # menu_items = db.relationship("MenuItem", backref="user")
  # gallery = db.relationship("Gallery", backref="user")
  # orders = db.relationship("Order",  backref="user")


  def __init__(self, first_name, last_name, email,contact,user_type,password):
   self.first_name = first_name
   self.last_name = last_name
   self.email = email
   self.contact = contact
   self.user_type = user_type
   self.password = password
   

  


  def __repr__(self):
        return f"<User {self.last_name} {self.first_name}>"
  

        
   #save a new instance
  def save(self):
        db.session.add(self)
        db.session.commit()

   #delete the item
  def delete(self):
        db.session.delete(self)
        db.session.commit()
 