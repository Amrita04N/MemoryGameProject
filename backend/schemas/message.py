# backend/schemas/message.py
from pydantic import BaseModel
from typing import List

class SceneResponse(BaseModel):
    id: int
    title: str
    narrative: str
    image: str
    choices: List[str]

class ChoiceRequest(BaseModel):
    choice: str
