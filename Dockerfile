# Faz o build
FROM maven:3.8-openjdk as build

WORKDIR /build

COPY . .

RUN mvn clean package -DskipTests

# Final app
FROM openjdk:17-jdk-alpine

WORKDIR /app

COPY --from=build /build/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
