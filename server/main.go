package main

import (
	"log"
	"net/http"
	"os"
)

func main() {
	dir := "./"

	if os.Getenv("GARDEN_LOCAL_DEV") == "TRUE" {
		log.Print("local development")
		dir = "./client/dist"
	}

	http.Handle("/", http.FileServer(http.Dir(dir)))
	http.ListenAndServe(":8080", nil)
}
