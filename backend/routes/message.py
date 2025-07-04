
from fastapi import APIRouter
from schemas.message import ChoiceRequest, SceneResponse

router = APIRouter()

mock_scenes = {
    1: {
        "id": 1,
        "title": "The Forest",
        "narrative": "You are standing in a dark forest. Two paths lie ahead.",
        "image": "forest.png",
        "choices": ["Take the left path", "Take the right path"]
    },
    2: {
        "id": 2,
        "title": "Left Path",
        "narrative": "You took the left path and found a river.",
        "image": "river.png",
        "choices": ["Swim across", "Follow the river"]
    },
    3: {
        "id": 3,
        "title": "Right Path",
        "narrative": "You took the right path and found a cabin.",
        "image": "cabin.png",
        "choices": ["Enter the cabin", "Look around"]
    },
}

@router.post("/choice", response_model=SceneResponse)
def make_choice(choice_request: ChoiceRequest):
    choice = choice_request.choice
    if choice == "Take the left path":
        return mock_scenes[2]
    elif choice == "Take the right path":
        return mock_scenes[3]
    else:
        return mock_scenes[1]
