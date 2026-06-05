from fastapi import FastAPI
'''
from → Import something from a module.
fastapi → The FastAPI package/module.
import → Bring an object into the current file.
FastAPI → A class provided by FastAPI used to create a web application.

Import the FastAPI class from the fastapi package.
'''

app = FastAPI()



'''
app → Variable name that stores your application object.
= → Assignment operator.
FastAPI() → Creates an instance (object) of the FastAPI application.

Meaning:
Create a FastAPI application and store it in the variable app.
'''


@app.get('/') #route
def hello_world():
    return {'Hello!!!!: World'}  #dictionary in json format data we pass to web 


'''
@ → Decorator symbol.
app → Your FastAPI application object.
. → Access a method of the object.
get → Method used to define a GET request route.
('/') → URL path.

Meaning:
When someone visits the URL / using a GET request, run the function below it.
'''

'''
http://127.0.0.1:8000/
This route is often called the root route or home route.

def hello_world():
'''



# cmd to run app -> python -m uvicorn demorestapi:app --reload
