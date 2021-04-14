<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="146" height="20" role="img" aria-label="Coverage:lines: 48.88%"><title>Coverage:lines: 48.88%</title><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="146" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="93" height="20" fill="#555"/><rect x="93" width="53" height="20" fill="#e05d44"/><rect width="146" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><text aria-hidden="true" x="475" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="830">Coverage:lines</text><text x="475" y="140" transform="scale(.1)" fill="#fff" textLength="830">Coverage:lines</text><text aria-hidden="true" x="1185" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="430">48.88%</text><text x="1185" y="140" transform="scale(.1)" fill="#fff" textLength="430">48.88%</text></g></svg>
# iTravel (Personal travel app)
## Udacity FEND Capstone Project - Travel App

iTravel is a simple app to plan your trips. It gives real-time weather information, pictures of your destination, and temperature using third-party APIs.

## Installation
### Dev

To run the project on the development webpack server, open the terminal in the root directory and run the command

```
npm install
```
```
npm run build-dev
```
```
npm start
```

### Prod
To run the project on the production server, open the terminal in the root directory and run the command


```
npm run build-prod
```
Then visit your localhost on port `5001` like so - `http://localhost:5001`

## Environment Variables
- `GEONAMES_USERNAME=<username>`
- `WEATHERBIT_API_KEY=<key>`
- `PIXABAY_API_KEY=<key>`

## Technologies
- HTML
- SCSS
- JS
- AXIOS
- Jest
- Webpack
- Babel
- Node
- dotenv

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

Also give it a star. I'll appreciate the attention.

## To-do
- Add e2e tests using [Cypress](https://www.cypress.io)
- Increase test coverage to at least 80%
- Add a to-do list for travellers
- Add a reminder for when a saved trip is <= 2 days

## License
[MIT](https://github.com/bidemiajala/travel-app/blob/7be020d7fa423b7670b7cc8f43daa3932e0e9468/LICENSE)