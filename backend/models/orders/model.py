from models.db import db
from datetime import datetime
from dataclasses import dataclass

@dataclass
class Order(db.Model):
    id:int
    