# ask-aldy-cli

This is a command-line interface (CLI) tool that allows you to interact with the OpenAI GPT-3.5 Turbo model to get brief and helpful answers to user queries.

## Getting Started

Follow these steps to set up and use the `askaldy-cli`:

### Installation

1. Clone this repository to your local machine:

   ```bash
   npm install -g askaldy-cli
   ```
2. Get new API key from OpenAI portal and set it as the environment variable. It will be saved locally. In 'Users/usernam/.aldy_config.json'
   
    ```bash
    aldy --config API_KEY=NEW_API_KEY
    ```
3. You can start using **aldy** command in terminal now

    ```bash
    ~ aldy how to make easy pancakes
    ```
    ```bash
    ~ aldy what does is the meaning of ingress in aws
    ```


### Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/nanospeck/askaldy-cli.git
   ```

2. Navigate to the project directory:

   ```bash
   cd askaldy-cli
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

### Configuration

You need to add your API key from OpenAI using the following command:

```bash
aldy --config API_KEY=NEW_API_KEY
```

Alternatively you can do it manually as follows:

1. Create a configuration file named `.aa_config.json` in your home directory (`~`).

2. Add your OpenAI API key to this file in the following format:

   ```json
   {
     "API_KEY": "YOUR_API_KEY"
   }
   ```

### Usage

You can use the CLI by running the `aa` command followed by your query:

```bash
aldy "What is the capital of France?"
```

If you need to update your API key, use the following command:

```bash
aldy --config API_KEY=NEW_API_KEY
```

## Project Structure

- `index.js`: The main JavaScript file that handles CLI operations.
- `package.json`: Contains project metadata, dependencies, and scripts.

## Dependencies

- `axios`: v1.5.1
- `fs`: v0.0.1-security
- `openai`: v4.13.0
- `yargs`: v17.7.2


## Local Development

Should enable execute permission for index.js to run and test the project locally

```bash
chmod +x index.js
```

Set your API key value

```bash
./index.js --config API_KEY=YOUR_KEY
```

Try running locally

```bash
./index.js how to bake bread
```

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.