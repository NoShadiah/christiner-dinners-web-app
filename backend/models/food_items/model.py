from models.db import db
from datetime import datetime
from dataclasses import dataclass


@dataclass
class FoodItem(db.Model):
    id:int
    name:str
    image:str
    description:str
    registered_at:str
    

    __tablename__ = "Food_Items"
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(100))
    image = db.Column(db.String(200))
    description = db.Column(db.String(250))
    in_category = db.Column(db.Integer, db.ForeignKey('Food_Categories.id'))
    registered_by = db.Column(db.Integer, db.ForeignKey('users.id'))
    registered_at = db.Column(db.String(200), default=datetime.now())
    updated_at = db.Column(db.String(200), onupdate=datetime.now())

    def __repr__():
        return(f"<Item>..............{FoodItem.name}")
