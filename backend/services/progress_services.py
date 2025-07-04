import json
import os

DATA_FILE = "progress.json"

# Load existing data or start fresh
if os.path.exists(DATA_FILE):
    with open(DATA_FILE, "r") as f:
        progress_data = json.load(f)
else:
    progress_data = {}

# Save progress for a user
def save_progress(user_id: str, data: dict):
    progress_data[user_id] = data
    with open(DATA_FILE, "w") as f:
        json.dump(progress_data, f)

# Get progress for a user
def get_progress(user_id: str):
    return progress_data.get(user_id, {})
