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
    id = db.Column()