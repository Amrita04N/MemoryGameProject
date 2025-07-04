from pydantic import BaseModel
from typing import List

class Progress(BaseModel):
    user_id: str
    path: List[int]
    inventory: List[str]
    memory: List[str]
