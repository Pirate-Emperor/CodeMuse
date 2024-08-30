# CodeMuse

**CodeMuse** is an AI-powered code review CLI tool that leverages Large Language Models (LLMs) to analyze pull requests, generate insightful code reviews, and create detailed PR descriptions. Designed for developers, it simplifies code reviews by providing structured insights and markdown-formatted outputs.

---

## Features 🚀

- 🔍 **Automated Code Reviews**: Comprehensive analysis of your code changes.
- 📝 **PR Description Generation**: Detailed descriptions with technical context and diagrams.
- 🎯 **Flexible Review Modes**: Choose between brief summaries, in-depth reviews, or PR descriptions.
- 📊 **Structured Git Diff Analysis**: Organized change breakdowns.
- 📋 **Extensive Logging**: Detailed logs for easier debugging.
- 🛡️ **Robust Error Handling**: Graceful failure recovery and cleanup.

---

## Prerequisites 📋

- **Node.js**: Version 14 or higher
- **npm**: Version 6 or higher
- **Git**: Installed and configured
- **OpenAI API Key**: Required for LLM integration

### Setting Up the OpenAI API Key

```bash
# Linux/macOS
export OPEN_API_KEY=your_openai_api_key

# Windows (Command Prompt)
set OPEN_API_KEY=your_openai_api_key

# Windows (PowerShell)
$env:OPEN_API_KEY="your_openai_api_key"
```

---

## Installation 🛠️

1. Install required dependencies:
   ```bash
   npm install commander winston
   ```

2. Install CodeMuse globally:
   ```bash
   npm install -g .
   ```

---

## Usage 📖

### Command Structure
```bash
code-muse [options]
```

### Options
```
Options:
  -V, --version                 Output version number
  -b, --branch <branch>         Branch name to review (required)
  -m, --mode <mode>             Review mode (review/description/brief) (default: "review")
  -t, --target-branch <branch>  Target branch to compare against (default: "development")
  -v, --verbose                 Enable verbose logging
  -o, --output <output>         Output folder (default: "tmp")
  -h, --help                    Display help for command
```

### Examples
```bash
# Basic review of a branch
code-muse -b feature/new-feature

# Generate a detailed PR description
code-muse -b feature/new-feature -m description -t main

# Verbose logging for debugging
code-muse -b feature/new-feature -v

# Help menu
code-muse --help
```

---

## Review Modes 📝

1. **review** (default)
   - Detailed code review with issue identification and improvement suggestions.
   - Includes best practices and performance analysis.

2. **description**
   - Comprehensive PR descriptions with technical details and diagrams.
   - Lists key changes and their impact.

3. **brief**
   - High-level summary of changes.
   - Focused on key points for reviewers.

---

## Output 📂

Generated files include:

- `combined.log`: Full execution log.
- `error.log`: Logs of errors encountered.
- Temporary Git diff files (automatically cleaned).
- AI-generated review or description output in markdown format.

---

## How CodeMuse Works 🔍

1. **Initialization**:
   - Parses CLI arguments.
   - Sets up the environment and logging.

2. **Git Diff Analysis**:
   - Compares the specified branch with the target branch.
   - Structures the changes for analysis.

3. **AI Processing**:
   - Sends structured changes to LLM.
   - Generates markdown-formatted outputs.

4. **Logging & Cleanup**:
   - Logs operation details.
   - Cleans temporary files.

---

## Troubleshooting 🔧

### Common Issues
1. **Git Operation Failures**:
   - Ensure Git is installed and configured correctly.

2. **API Key Errors**:
   - Verify that `OPEN_API_KEY` is correctly set.

3. **Invalid Branch/Diff**:
   - Check if the branch exists and has valid changes.

---

## Development 💻

### Project Structure
```
code-muse/
├── src/
│   ├── GitOperations.js
│   ├── DiffParser.js
│   ├── ReviewGenerator.js
│   ├── LLMAdapter.js
├── logs/
│   ├── combined.log
│   └── error.log
└── package.json
```

### Adding Features
- Follow the modular design of the project.
- Include proper error handling and logging.

---

## Customizing Prompts ✍️

Prompts can be tailored to fit your needs by editing `prompts.js` in the project root.

```js
module.exports = {
  PROMPTS: {
    review: "Custom review prompt...",
    description: "Custom description prompt...",
    brief: "Custom brief prompt...",
  },
};
```

---

## Contributing 🤝

1. Fork the repository.
2. Create a feature branch.
3. Submit a pull request with a detailed description.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

**Pirate-Emperor**

[![Twitter](https://skillicons.dev/icons?i=twitter)](https://twitter.com/PirateKingRahul)
[![Discord](https://skillicons.dev/icons?i=discord)](https://discord.com/users/1200728704981143634)
[![LinkedIn](https://skillicons.dev/icons?i=linkedin)](https://www.linkedin.com/in/piratekingrahul)

[![Reddit](https://img.shields.io/badge/Reddit-FF5700?style=for-the-badge&logo=reddit&logoColor=white)](https://www.reddit.com/u/PirateKingRahul)
[![Medium](https://img.shields.io/badge/Medium-42404E?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@piratekingrahul)

- GitHub: [Pirate-Emperor](https://github.com/Pirate-Emperor)
- Reddit: [PirateKingRahul](https://www.reddit.com/u/PirateKingRahul/)
- Twitter: [PirateKingRahul](https://twitter.com/PirateKingRahul)
- Discord: [PirateKingRahul](https://discord.com/users/1200728704981143634)
- LinkedIn: [PirateKingRahul](https://www.linkedin.com/in/piratekingrahul)
- Skype: [Join Skype](https://join.skype.com/invite/yfjOJG3wv9Ki)
- Medium: [PirateKingRahul](https://medium.com/@piratekingrahul)

Thank you for visiting the CipherX project!

---

For more details, please refer to the [GitHub repository](https://github.com/Pirate-Emperor/CipherX).