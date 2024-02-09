# Cocktail API Wrapper

This project is a wrapper API for The Cocktail DB, providing functionality to paginate and filter cocktail data. The API is built using NodeJS and Express and integrates with The Cocktail DB's API.

## Features

- Pagination of cocktail data.
- Filtering based on ingredients.

## Requirements

- Node.js
- npm (Node package manager)

## Installation

To get the project up and running on your local machine, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/cnf2500/Cocktail_API.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Cocktail_API
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

To start the server, run the following command:

```bash
npm run
```

The API can then be accessed at `http://localhost:3000`.

## Endpoints

`GET /cocktails`: Retrieves a list of cocktails.

Query parameters:

- `page`: Specify which page of results to retrieve.
- `limit`: The number of results per page.

## Tests

To run the test suite, execute:

```bash
npm test
```

## Contributing

If you wish to contribute to this project, please create a pull request with your proposed changes.

## Acknowledgments

This wrapper API is built for educational purposes as part of a technical interview project.
