# Docker image
FROM node:latest

# Create app directory
WORKDIR /app

# Install app dependencies
# Wildcard includes package.json and package-lock.json
COPY package*.json ./

# Install dependencies from package.json
RUN npm install
# Prouction builds replace with: RUN npm ci --only=production

# Bundle app source
COPY . .

# Expose port, run command2
EXPOSE 3000
CMD [ "npm", "run", "dev" ]
