from models.db import db
from datetime import datetime
from dataclasses import dataclass


@dataclass
class GalleryItem(db.Model):
    id:int
    name:str
    image:str
    description:str
    registered_at:str
    

    __tablename__ = "Gallery"
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(100))
    image = db.Column(db.String(200))
    description = db.Column(db.String(250))
    registered_by = db.Column(db.Integer, db.ForeignKey('users.id'))
    registered_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, onupdate=datetime.now())

    def __repr__():
        return(f"<Category>..............{GalleryItem.name}")
