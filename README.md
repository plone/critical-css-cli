# @eeacms/critical-css-cli

A command-line utility to generate critical CSS from a set of URLs. The
scenario where this fits is that of a CMS-powered website, where pages are
user-defined, with multiple styles coming from various addons. Because the
website layout is generated based on the CMS content, it would be impossible to
understand what is Critical CSS at build time, only once the website is moved
to production and the "dust settles" on the main pages structure.

Typically, for the best possible performance, you'd want to generate the
critical CSS as short as possible and that means one CSS per separate page.
But this complicates things: async runners, file refresh, file invalidations,
etc, would have to be taken into account. This raises the barrier of entry for
the project.

This package tries to keep things really simple by accepting some limitations.
That is, a single CSS file is generated based on multiple provided URLs. The
CSS is optimized automatically using postcss and nanocss, so duplicated rules
are eliminated.

## Install globally

```
npm install -g eea/critical-css-cli
```

## Install from this repo

Either install it as a native package with: `yarn install` or `npm install`.

Then run the generator like:

```
bin/critical-cli -o ./out/critical.css https://biodiversity.europa.eu/ https://www.eea.europa.eu/
```

This will generate a file called `critical.css` in the `out` folder.

Run `bin/critical-generator -h` to see full options.

## Use via docker

Alternatively, you can use docker to build and use this package. Pass website
url for which critical css has to be generated as env var to `docker-compose`

```
URL=<website-url> docker-compose up
```

#### Config

Pass the `DIMENSIONS` env variable if you want to deliver critical CSS for multiple screen resolutions. Defaults to `1300x900` if you don't want.

```
URL=<website-url> DIMENSIONS="1220x300,1345x500" docker-compose up
```

Location to save the `critical.css` file. Defaults to
`/var/app/output/critical.css`

```
URL=<website-url> LOCATION=/<your-dir> docker-compose up
```

The location is relative to the current directory.
