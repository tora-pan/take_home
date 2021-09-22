## About The Project

### API

A simple Node/Express backend that serves property data when '/data' is pinged.

### Client

A simple React app that fetches the data form the above API, works some magic on it, and serves it in an easy to read format.

### Built With

This project was built with love and butterflies. Not really, it was actually built with:

- [Node](https://nodejs.org/en/)
- [Express](https://express.com/)
- [React](https://reactjs.org/)

### Prerequisites _MAC/WINDOWS_

Make sure to have Node / NPM installed

- [Node] (https://nodejs.org/en/)

- npm

```sh
npm install npm@latest -g
```

### Prequisites for Ubuntu 20.04+

CLI Commands:

```sh
sudo apt install npm
curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt-get install -y nodejs
```

### Installation _MAC/WINDOWS/UBUNTU_

1. Clone the repo

```sh
git clone https://github.com/tora-pan/take_home.git
```

2. Install NPM packages and start the server _terminal window 1_

```sh
cd api
npm install
npm run devStart
```

3. Install NPM packages and start the client _terminal window 2_

```sh
cd client
npm install
npm start
```

_Note: this make take a moment_

4. Once the client opens in the browser, click the button to load the property data.
