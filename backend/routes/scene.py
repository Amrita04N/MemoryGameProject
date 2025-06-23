from fastapi import APIRouter
from schemas.scene import Scene

router = APIRouter()

@router.get("/scene", response_model=Scene)
def get_scene():
    return {"id": 1, "description": "You wake up in a dark room...", "choices": ["Look around", "Stay still"]}
