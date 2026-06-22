from fastapi import APIRouter
from sqlalchemy.orm import Session
from database import SessionLocal
from models.product import Product
from schemas.product_schema import ProductCreate

router = APIRouter()


@router.post("/products")
def create_product(product: ProductCreate):

    db: Session = SessionLocal()

    new_product = Product(
        name=product.name,
        price=product.price,
        category=product.category
    )

    db.add(new_product)
    db.commit()
    db.refresh(new_product)

    return {
        "message": "Product Created",
        "product": new_product
    }


@router.get("/products")
def get_products():

    db: Session = SessionLocal()

    products = db.query(Product).all()

    return products