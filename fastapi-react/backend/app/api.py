from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

# Dummy data for todos
todos = [
    {"id": "1", "item": "Read a book."},
    {"id": "2", "item": "Cycle around town."}
]

@app.get("/todo", tags=["todos"])
async def get_todos():
    return {"data": todos}

@app.post("/todo", tags=["todos"])
async def add_todo(todo: dict):
    todos.append(todo)
    return {"data": {"message": "Todo added."}}
   