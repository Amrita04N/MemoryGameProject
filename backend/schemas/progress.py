from pydantic import BaseModel
from typing import List, Optional

class Progress(BaseModel):
    scene_id: int
    path: Optional[str] = ""
    memory: Optional[List[str]] = []
    inventory: Optional[List[str]] = []
    score: Optional[int] = 0  # ✅ New field for score
