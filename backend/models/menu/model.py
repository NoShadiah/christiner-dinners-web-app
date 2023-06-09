from models.db import db
from datetime import datetime
from dataclasses import dataclass

@dataclass
class MenuItem(db.Model):
    id:int
    name:str
    description:str
    image:str
    price_unit:str
    price:str
    served_at:str
    
    __tablename__ = "Menu"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30))
    description = db.Column(db.String(255))
    image = db.Column(db.String(255))
    served_at = db.Column(db.String(255))
    category_id = db.Column(db.Integer, db.ForeignKey('Food_Categories.id'))
    price_unit = db.Column(db.String(3))
    price = db.Column(db.Integer)
    registered_by = db.Column(db.String(50))
    updated_by = db.Column(db.String(50), onupdate="admin")
    reg_at = db.Column(db.String(200), default = datetime.now())
    upd_at = db.Column(db.String(200), onupdate = datetime.now())

    orders = db.relationship("Order", backref = "menuitem")

    def __repr__():
        return f"<Menu Item>>>>>>>>>{MenuItem.name}"