from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"message": "Hello Homelab Dashboard"}
  
@app.get("/ping")
def ping():
    return {"status": "ok" }