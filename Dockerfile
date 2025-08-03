# Use an official Node.js runtime as the base image
FROM node:24-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Accept build arguments for environment variables
ARG VITE_PORT
ARG VITE_HK_HOST_1
ARG VITE_HK_HOST_2
ARG VITE_HK_HOST_3

# Build the application
RUN VITE_PORT=$VITE_PORT VITE_HK_HOST_1=$VITE_HK_HOST_1 VITE_HK_HOST_2=$VITE_HK_HOST_2 VITE_HK_HOST_3=$VITE_HK_HOST_3 npm run build

# Start the application
CMD ["npm", "run", "preview"]
