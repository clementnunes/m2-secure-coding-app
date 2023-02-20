FROM python:alpine3.11

ENV PORT=5000

WORKDIR /simple-flask-app

COPY . .

EXPOSE 5000 8000

RUN pip install -r requirements.txt

ENTRYPOINT ["python","app.py"]
