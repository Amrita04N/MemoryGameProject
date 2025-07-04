from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


scenes = {
    1: {
        "id": 1,
        "title": "The Forest",
        "narrative": "You are standing in a dark forest. Two paths lie ahead.",
        "image": "forest.png",
        "choices": ["Take the left path", "Take the right path"]
    },
    2: {
        "id": 2,
        "title": "The River",
        "narrative": "You reach a rushing river.",
        "image": "river.png",
        "choices": ["Build a raft", "Turn back"]
    }
}

class Choice(BaseModel):
    choice: str

@router.get("/scene/{scene_id}")
def get_scene(scene_id: int):
    return scenes.get(scene_id, {"error": "Scene not found"})

@router.post("/choice")
def make_choice(choice: Choice):
    return scenes.get(2)  
