from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class Message(BaseModel):
    user_id: str
    content: str

@router.post("/chat")
def chat(message: Message):
    return {"reply": f"Hello, you said: {message.content}"}
