# Stage 1: Build React app
FROM node:14 as build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install ALL dependencies, including development dependencies
RUN npm install

# Copy app source code
COPY . .

# Build the React app
RUN npm run build


# Expose the port on which the React app will run (adjust if needed)
EXPOSE 3000

# Specify the command to run on container startup
CMD ["npm", "start"]
