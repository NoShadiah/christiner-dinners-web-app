from models.db import db
from datetime import datetime
from dataclasses import dataclass

@dataclass
class Order(db.Model):
    id:int
    # made_by:str
    menu_item:str
    quantity:str
    # delivery_mode:str
    delivery_address:str
    made_at:str
    needed_by:str
    status:str

    __tablename__ = "orders"
    id = db.Column(db.Integer, primary_key = True)
    made_by = db.Column(db.String(250), db.ForeignKey('users.id'))
    menu_item = db.Column(db.Integer, db.ForeignKey('Menu.id'))
    quantity = db.Column(db.Integer)
    # delivery_mode = db.Column(db.String(10)) 
    delivery_address = db.Column(db.String(255))
    made_at = db.Column(db.DateTime, default = datetime.now())
    needed_by = db.Column(db.String(7))
    status = db.Column(db.String(9))
    updated_at = db.Column(db.DateTime, onupdate=datetime.now())
    updated_by = db.Column(db.String(50))

    def __repr__():
        return f"Menu item number, {Order.menu}"