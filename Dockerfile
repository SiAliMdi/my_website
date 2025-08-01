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

# Build the application
RUN npm run build

# Start the application
#CMD ["npm", "run", "preview"]
CMD ["sh", "-c", "vite preview --port $PORT --host 0.0.0.0"]
