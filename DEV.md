## Local Development


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

Should enable execute permission for index.js to run and test the project locally

```bash
chmod +x index.js
```

You need to add your API key from OpenAI using the following command:

```bash
./index.js --config API_KEY=YOUR_KEY
```

Try running locally

```bash
./index.js how to bake bread
```


Alternatively you can do it manually as follows:

1. Create a configuration file named `.aldy_config.json` in your home directory (`~`).

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
