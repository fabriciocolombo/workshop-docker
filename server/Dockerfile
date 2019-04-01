FROM openjdk:8-jre-alpine

ENV JAVA_OPTS="" \
    RUN_ARGS=""

RUN mkdir /app

WORKDIR /app

ADD ./build/libs/*.jar ./app.jar

EXPOSE 8080

CMD java -Djava.security.egd=file:/dev/./urandom\
   ${JAVA_OPTS} -jar ./app.jar ${RUN_ARGS}