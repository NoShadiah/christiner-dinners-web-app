from models import create_app, db
from flask_migrate import Migrate
from models.users.model import User
from models.food_categories.model import FoodCategory 
# from models.settings.model import Settings
# from models.menu.model import MenuItem
# from models.gallery.model import Gallery
# from models.food_items.model import FoodItem
# from models.orders.model import Order
from flask_jwt_extended import JWTManager

app = create_app('development')
migrate = Migrate(app, db)



@app.shell_context_processor
def make_shell_context():
   return dict(db=db, 
               User=User, 
               FoodCategory=FoodCategory, 
                
               # MenuItem=MenuItem, 
               # Category=Category, 
               # FoodItem=FoodItem,
               # Order=Order
               )