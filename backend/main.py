from fastapi import FastAPI
from database import engine, Base
from models.product import Product
from routes.product_routes import router

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(router)

@app.get("/")
def home():
    return {"message": "Gaming Store Backend Running"}