# Step 1: Use a Gradle image with Java 17 pre-installed
FROM gradle:8-jdk17 AS build
WORKDIR /app

# Copy Gradle wrapper and settings first (for Docker caching efficiency)
COPY gradlew settings.gradle build.gradle ./
COPY gradle gradle
RUN chmod +x gradlew

# Copy the rest of the project files
COPY . .

# Ensure Java 17 is set correctly
RUN java -version
RUN ./gradlew build --no-daemon --stacktrace --info

# Step 2: Use a lightweight Java runtime to run the app
FROM openjdk:17-jdk-slim
WORKDIR /app

# Copy the built JAR from the previous build step
COPY --from=build /app/build/libs/*.jar app.jar

# Expose the application port
EXPOSE 8081

# Run the application
ENTRYPOINT ["java", "-jar", "/app.jar"]
