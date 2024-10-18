<<<<<<< HEAD
# NEXUS


 NEXUS is a simple and clean ecommerce theme built for a fictional furniture business.
 
 The project is built using HTML, CSS and Javascript.
 
 It contains the following pages which are:
 
 1. Homepage
 2. Shop
 3. Account
 4. About
 5. Contact

 And Individual Page For Each Product

For task 1 the commands we used are as follow:
docker build -t my-backend -f Dockerfile.backend .

docker build -t my-frontend -f Dockerfile.frontend .

docker build -t custom-mongodb -f Dockerfile.db .



docker run -d --name mongodb --network=my_custom_network -p 27017:27017 custom-mongodb

docker run -d --name frontend --network=my_custom_network -p 80:80 my-frontend

docker run -d --name backend --network=my_custom_network -p 5000:5000 my-backend
 
 

