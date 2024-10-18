# Use an official Node.js runtime as a parent image for the build stage
FROM node:16 AS builder

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies, including dev dependencies like nodemon
RUN npm install

# Copy the rest of the application code
COPY . .

# Use the full image for the final build
FROM node:16

# Set the working directory
WORKDIR /usr/src/app

# Copy only the necessary files from the builder image
COPY --from=builder /usr/src/app .

# Expose the port your app runs on
EXPOSE 5000

# Run the application using nodemon
CMD ["npx", "nodemon", "src/index.js"]

