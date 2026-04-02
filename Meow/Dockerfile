FROM openjdk:17-jdk-slim
WORKDIR /app
COPY . .

# build jar
RUN chmod +x mvnw || true
RUN ./mvnw clean package -DskipTests || mvn clean package -DskipTests

# expose for Render 
EXPOSE 8080

# start Spring Boot
CMD ["sh", "-c", "java -jar target/*.jar"]