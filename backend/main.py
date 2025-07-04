from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import message, scene, progress  # ✅ import all routers

app = FastAPI()

# ✅ CORS Setup (allow frontend access)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Include all routes
app.include_router(message.router)
app.include_router(scene.router)
app.include_router(progress.router)

@app.get("/")
def root():
    return {"message": "Backend is working 🚀"}


