from fastapi import APIRouter
from schemas.progress import Progress
from services.progress_services import save_progress, get_progress

router = APIRouter(prefix="/progress", tags=["Progress"])

@router.get("/{user_id}")
def fetch_progress(user_id: str):
    return get_progress(user_id)

@router.post("/{user_id}")
def update_progress(user_id: str, progress: Progress):
    save_progress(user_id, progress.dict())
    return {"status": "saved"}
