# Start from official Node image
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app code
COPY . .

# Expose port 3000
EXPOSE 3000

# Run the app
CMD ["npm", "start"]