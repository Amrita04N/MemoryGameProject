from fastapi import APIRouter, HTTPException
from schemas.progress import Progress
from services.progress_services import save_progress, get_progress
import json
import os

router = APIRouter(prefix="/progress", tags=["Progress"])

PROGRESS_FILE = "progress.json"

@router.get("/{user_id}")
def fetch_progress(user_id: str):
    return get_progress(user_id)

@router.post("/{user_id}")
def update_progress(user_id: str, progress: Progress):
    save_progress(user_id, progress.dict())
    return {"status": "saved"}

@router.delete("/{user_id}")
def reset_progress(user_id: str):
    if not os.path.exists(PROGRESS_FILE):
        raise HTTPException(status_code=404, detail="Progress file not found")

    with open(PROGRESS_FILE, "r+") as f:
        try:
            data = json.load(f)
        except json.JSONDecodeError:
            data = {}

        if user_id in data:
            del data[user_id]
            f.seek(0)
            f.truncate()
            json.dump(data, f, indent=2)
            return {"message": f"Progress for {user_id} reset."}
        else:
            raise HTTPException(status_code=404, detail="User progress not found")
