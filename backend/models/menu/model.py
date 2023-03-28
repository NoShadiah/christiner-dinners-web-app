from models.db import db
from datetime import datetime
from dataclasses import dataclass

@dataclass
class MenuItem(db.Model):
    id:int
    name:str
    description:str
    Image:str
    price_unit:str
    price:str
    served_at:str
    
    __table__ = "Menu"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30))
    description = db.Column(db.String(255))
    image = db.Column(db.String(255))
    served_at = db.Column(db.String(255))
    category_id = db.Column(db.Integer)
    price_unit = db.Column(db.String(3))
    price = db.Column(db.Integer)
    reg_at = db.Column(db.DateTime, default = datetime.now())