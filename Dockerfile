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
ARG VITE_PHD_CERTIFICATE_URL
ARG VITE_PHD_JURY_REPORT_URL
ARG VITE_ENG_CERTIFICATE_URL
ARG VITE_CV_URL

# Build the application
RUN VITE_PORT=$VITE_PORT VITE_HK_HOST_1=$VITE_HK_HOST_1 VITE_HK_HOST_2=$VITE_HK_HOST_2 VITE_HK_HOST_3=$VITE_HK_HOST_3 \
    VITE_PHD_CERTIFICATE_URL=$VITE_PHD_CERTIFICATE_URL \
    VITE_PHD_JURY_REPORT_URL=$VITE_PHD_JURY_REPORT_URL \
    VITE_ENG_CERTIFICATE_URL=$VITE_ENG_CERTIFICATE_URL \
    VITE_CV_URL=$VITE_CV_URL \
    npm run build

# Start the application
CMD ["npm", "run", "preview"]
