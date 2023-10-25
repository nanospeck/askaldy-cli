# ask-aldy-cli

This is a command-line interface (CLI) tool that allows you to interact with the OpenAI GPT-3.5 Turbo model to get brief and helpful answers to user queries. You can get an API key from [OpenAI Platform](https://platform.openai.com/account/api-keys)

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
3. You can start using `aldy` command in terminal now

    #### Examples

    ```bash
    ~ aldy how to create an array in javascript
    ```

    ```bash
    ~ aldy var vs let vs const in javascript
    ```

    ```bash
    ~ aldy what does is the meaning of ingress in aws
    ```

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.