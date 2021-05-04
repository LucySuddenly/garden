# Lucy Suddenly's Garden!

### Local dev

To run the parcel client hot reload dev server on port `1234`, cd to the `client` folder and run `yarn && yarn start`.

To run the garden server and serve static assets on port `8080`, export `GARDEN_LOCAL_DEV=TRUE` in your environment, run `yarn build` in the client folder, then `go run main.go` in the server folder.