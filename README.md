# critical-css-generator

Docker service for generating critical CSS from a URL

#### Usage

Pass website url for which critical css has to be generated as env var to `docker-compose`

```
URL=<website-url> docker-compose up
```

#### Config

pass the `DIMENSIONS` env variable if you want to deliver critical CSS for multiple screen resolutions. Defaults to `1300x900` if you don't want.

```
URL=<website-url> DIMENSIONS="1220x300,1345x500" docker-compose up

```

Location to save the `critical.css` file. Defaults to `/output/critical.css`

```
URL=<website-url> LOCATION=<your-dir>/critical.css docker-compose up

```

the location is relative to the current directory.
