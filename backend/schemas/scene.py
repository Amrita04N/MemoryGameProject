from pydantic import BaseModel
from typing import List

class Scene(BaseModel):
    id: int
    description: str
    choices: List[str]
