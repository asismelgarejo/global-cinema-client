# Use the official Node image as a base image for building the React app
FROM node:latest as builder

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Use a smaller base image for the final production image
FROM nginx:alpine

# Copy the built app from the builder stage to the nginx directory
# COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Command to run the nginx server
CMD ["nginx", "-g", "daemon off;"]
