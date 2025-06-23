from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/progress", tags=["progress"])

# Simulated in-memory store
player_progress = {}

class ProgressData(BaseModel):
    user_id: str
    path: list[int]
    inventory: list[str]
    memory: list[str]

@router.post("/{user_id}")
def update_progress(user_id: str, data: ProgressData):
    player_progress[user_id] = data.dict()
    return {"message": "Progress updated."}

@router.get("/{user_id}")
def get_progress(user_id: str):
    return player_progress.get(user_id, {"message": "No progress yet."})
