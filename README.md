# StatNLP Ladrawex (LaTeX Draw) website
[![Build Status](https://travis-ci.org/sutd-statnlp/web-ladrawex.svg?branch=master)](https://travis-ci.org/sutd-statnlp/web-ladrawex)
[![Coverage Status](https://coveralls.io/repos/github/sutd-statnlp/web-ladrawex/badge.svg?branch=master)](https://coveralls.io/github/sutd-statnlp/web-ladrawex?branch=master)
[![dependencies Status](https://david-dm.org/sutd-statnlp/web-ladrawex/status.svg)](https://david-dm.org/sutd-statnlp/web-ladrawex)
[![devDependencies Status](https://david-dm.org/sutd-statnlp/web-ladrawex/dev-status.svg)](https://david-dm.org/sutd-statnlp/web-ladrawex?type=dev)
[![](https://images.microbadger.com/badges/image/statnlp/web-ladrawex.svg)](https://microbadger.com/images/statnlp/web-ladrawex)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/sutd-statnlp/web-ladrawex/blob/master/LICENSE)

## Installation

``` bash
# install dependencies
npm install

```

## Testing

``` bash
# run tests
npm test

# run e2e tests
npm run e2e
```

## Build and Run

``` bash

# serve with hot reload at localhost:4200
npm start

# build for production with minification
npm run build

```
## Docker support

Build docker image

```
bash Dockerbuild.sh
```

Run docker container

```
docker run -d --name web-ladrawex -p 8000:8000 statnlp/web-ladrawex
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/sutd-statnlp/web-ladrawex/tags).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
