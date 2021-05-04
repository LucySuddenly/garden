FROM node as NodeBuilder 
WORKDIR /client
COPY /client /client 
RUN yarn
RUN yarn build

FROM golang as GoBuilder
WORKDIR /server
COPY /server /server
RUN CGO_ENABLED=0 go build main.go
RUN chmod +x main

FROM alpine
COPY --from=NodeBuilder /client/dist /
COPY --from=GoBuilder /server /

EXPOSE 8080 8080

CMD [ "./main" ]