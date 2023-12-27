# ProgrammersKE Web

## Project setup

### Create .env file

create .env file in root directory and add following variables

```bash
VITE_X_RAPID_API_HOST='judge0-ce.p.rapidapi.com'
VITE_X_RAPID_API_URL='https://judge0-ce.p.rapidapi.com/submissions'
VITE_X_RAPID_API_KEY='your-api-key'
```
<!-- NOTE: The above variables are still under development. However, make use of your own API keys, which you can get from [RapidAPI](https://rapidapi.com/). -->

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

## Docker (under development)

Ensure you have Docker installed on your machine, then run the following 

```bash
chmod +x run_docker.sh
./run_docker.sh
```
