from fastapi import APIRouter
from schemas.message import Message

router = APIRouter()

@router.get("/message", response_model=Message)
def get_message():
    return {"message": "Hello from FastAPI!"}
