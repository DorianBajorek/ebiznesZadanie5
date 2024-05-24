FROM gradle:7.3.3-jdk11 AS build

WORKDIR /app

COPY . .

RUN gradle build --no-daemon

FROM openjdk:11-jre-slim

WORKDIR /app

COPY --from=build /app/build/libs/*.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]
