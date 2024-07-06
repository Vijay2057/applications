FROM python:3.10

COPY ./requirements.txt /app/

RUN pip install -r /app/requirements.txt

COPY ./main.py /app/

WORKDIR /app

EXPOSE 5000

CMD ["python", "main.py"]