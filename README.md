# CommitBot

CommitBot is a node.js script that essentially hacks the github contribution graph, allowing the user to generate random commits across time and pushes them into a specific private repo.
This project was made to demonstrate how easy it is to fake profiles online and was not intended for fraudulent or unethical use.
It can be used to test commit history patterns, contribution graphs, or demo GitHub visualizations.

## Features
- Creates commits with randomized dates (past year by default).
- Writes a `data.json` file on each commit.
- Supports pushing commits automatically to your repository.
- Easy to configure and extend.

## Requirements
- Node.js (>=14)
- Git installed and configured
- A GitHub repository (private recommended)

## Installation
1. Clone or unzip the project:
   ```bash
   git clone https://github.com/YOUR-USERNAME/CommitBot.git
   cd CommitBot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage
Run the script with Node.js:
```bash
node index.js
```

This will generate 100 random commits dated within the past year and push them to your repo.

### Customizing
- Edit the number of commits in the `makeCommits(100)` call.
- Adjust the date range logic in `randomCommitDate()`.

## Disclaimer
This project is for **educational and demo purposes only**.  
Avoid using it to mislead others about your actual contribution history.
