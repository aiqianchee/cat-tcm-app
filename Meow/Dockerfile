FROM eclipse-temurin:17-jdk
WORKDIR /app
COPY . .

# build jar
RUN chmod +x mvnw 
RUN ./mvnw clean package -DskipTests 

# expose for Render 
EXPOSE 8080

# start Spring Boot
CMD ["java", "-jar", "target/*.jar"]