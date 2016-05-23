# Rise-Core

Rise-Core is a next generation crypto-currency and decentralized application interface, written in Javascript. It runs best on the Rise Hosting Platform, a Docker based platform for hosting Rise-core and Dapps.

## Installation

**NOTE:** The following is applicable to: **Ubuntu 14.04 (LTS) - x86_64**.

Install essentials:

```
sudo apt-get update
sudo apt-get install curl build-essential python
```

Install PostgreSQL (version 9.5.2):

```
sudo apt-get install postgresql
sudo -u postgres psql
CREATE DATABASE Rise_Test;
CREATE USER Rise with password 'RISETESTPASSWORD';
GRANT ALL PRIVILEGES ON DATABASE Rise_Test TO Rise;
```

Install Node.js (version 6.x.x) + npm:

```
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Install grunt-cli and bower(globally):

```
sudo npm install grunt-cli bower -g
```

Install node modules:

```
npm install
```


Load git submodules ([web-ui](https://bitbucket.org/risevisionfoundation/web-ui)

```
git submodule init
git submodule update
```

Build the user-interface:

```
cd public
npm install
bower install
grunt release
```
** In a future release, the UI will be in a seperate application to be run separately.

## Launch

To launch Rise:

```
node app.js
```

**NOTE:** The **port**, **address** and **config-path** can be overridden by providing the relevant command switch:

```
node app.js -p [port] -a [address] -c [config-path]
```

## Tests

Before running any tests, please ensure Rise is configured to run on the same testnet as used by the test-suite.

Replace **config.json** and **genesisBlock.json** with the corresponding files under the **test** directory:

```
cp test/config.json test/genesisBlock.json .
```

**NOTE:** The master passphrase for this genesis block is as follows:

```
wagon stock borrow episode laundry kitten salute link globe zero feed marble
```

Install mocha (globally):

```
sudo npm install mocha -g
```

Launch Rise (runs on port 4000):

```
node app.js
```

Run the test suite:

```
npm test
```

Run individual tests:

```
mocha test/lib/accounts.js
mocha test/lib/transactions.js
```

## Authors

- Justin R. Donnaruma <justin@rise.vision>

## License

The MIT License (MIT)

Copyright (c) 2016 Rise Vision Foundation
Copyright (c) 2016 Lisk
Copyright (c) 2014-2015 Crypti

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
