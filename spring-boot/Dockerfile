# Step 1: Use a Gradle image to build the application
FROM gradle:8-jdk-alpine AS build
WORKDIR /app

# Copy only the necessary Gradle files to leverage Docker caching
COPY build.gradle settings.gradle gradlew ./
COPY gradle gradle
RUN chmod +x gradlew

# Copy the rest of the project files
COPY . .

# Build the project
RUN ./gradlew build --no-daemon

# Step 2: Use a lightweight JDK image to run the built application
FROM openjdk:17-jdk-slim
WORKDIR /app

# Copy the built JAR from the previous step
COPY --from=build /app/build/libs/*.jar app.jar

# Expose the application port
EXPOSE 8081

# Run the application
ENTRYPOINT ["java", "-jar", "/app.jar"]
