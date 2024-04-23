from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from PIL import Image
import io
import numpy as np
from fastapi.middleware.cors import CORSMiddleware
from transformers import CLIPProcessor, CLIPModel
import torch

app = FastAPI(title='petFacial Backend')

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

# CORS settings
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Successfully connected with petFacial."}

name1 = "IB-07: SOL 644 // petFAcial"
@app.get("/greet/{name}")
async def name(name: str = name1):
    return {"message": f"Welcome to {name}"}

@app.get("/health")
def check_health():
    return {"status": "API is working!!"}


def clip_predict(image):
    inputs = processor(text=["Happy", "Sad", "Angry", "Other"], images=image, return_tensors="pt", padding=True)
    outputs = model(**inputs)

    logits_per_image = outputs.logits_per_image
    probs = logits_per_image.softmax(dim=1)
    
    predicted_labels = ["Happy", "Sad", "Angry", "Other"]
    max_prob, predicted_idx = torch.max(probs, dim=1)

    predicted_label = predicted_labels[predicted_idx[0].item()]
    return (predicted_label)

@app.post("/predict/")  # Use form objects only
async def form_predict(image: UploadFile = File(...)):
    # Read the image data
    image_data = await image.read()
    image = Image.open(io.BytesIO(image_data)).convert('RGB') # Read the image as RGB

    
    label = clip_predict(image)

    return {"prediction": label}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend:app", host="0.0.0.0", port=7644)
