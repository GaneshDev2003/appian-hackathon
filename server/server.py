# Import necessary libraries
from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional

# Initialize the FastAPI app
app = FastAPI()

# Define the data model for symptoms
class Symptoms(BaseModel):
    fever: Optional[bool] = None
    cough: Optional[bool] = None
    body_ache: Optional[bool] = None
    stomach_ache: Optional[bool] = None
    weakness: Optional[bool] = None

# Define the disease detection logic
def disease_detection(symptoms: Symptoms) -> str:
    if symptoms.fever and symptoms.cough and not symptoms.stomach_ache:
        if symptoms.body_ache:
            return "Possible diseases: Flu, Pneumonia"
        else:
            return "Possible diseases: Common Cold, Bronchitis"
    elif symptoms.stomach_ache and symptoms.weakness:
        if symptoms.fever:
            return "Possible diseases: Gastroenteritis, Urinary Tract Infection"
        else:
            return "Possible diseases: Gastroenteritis, Food Poisoning"
    elif symptoms.body_ache and symptoms.weakness and not symptoms.fever and not symptoms.cough:
        return "Possible disease: Migraine"
    elif symptoms.cough and not symptoms.fever and not symptoms.body_ache:
        return "Possible disease: Allergic Rhinitis"
    else:
        return "No match found in the rule-based matrix"

# Define the FastAPI endpoint
@app.post("/detect_disease/")
async def detect_disease(symptoms: Symptoms):
    result = disease_detection(symptoms)
    return {"diagnosis": result}

# Additional endpoints and logic can be added as needed
