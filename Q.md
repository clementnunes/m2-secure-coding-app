# M2 - Secure Coding - 
# TP1

## Q3 - Why do we need both a database constrain and a validation in typescript for the same check?

We do not need both, it's for security purpose : double security ; validation as application level validators & database level constraints

## Q4 - How models validations, such as the one you just wrote, can serve the security of your application? Give an example.

# TP2

## Q1 - Please write a small paper about that naming convention. 

Entity naming convention :
Singular : entity
Plural : entities

Get collection of Entity (URL) : https://api.endpoint/entities
Get an instance of Entity (URL) : https://api.endpoint/entities/{entityId}
Create entity : https://api.endpoint/entities (POST) or https://api.endpoint/entities/{entityId} (PUT, id given)
Patch entity : https://api.endpoint/entities/{entityId}

No underscore => hyphens
No upper cases
No file extensions
No actions in URL

URL => more readable

## Q2 - Considering they use REST naming convention, what would do POST /web-api/users and POST /web-api/sessions endpoints?

POST request on /web-api/users endpoint should create an user and POST request on /web-api/sessions should create a session.
Both could be used as object updater (POST can be used to modify entity : replacing all fields of entity by new ones)