#!/usr/bin/env node
const { Command } = require("commander");

const logger = require("../src/logger");
const PRReviewer = require("../src/PRMain");

// Set up CLI
const program = new Command();

const version = require("../package.json").version;

program
  .name("code-muse")
  .description("AI-powered CLI tool for intelligent, detailed code reviews using LLM")
  .version(version)
  .requiredOption("-b, --branch <branch>", "branch name to review")
  .option("-m, --mode <mode>", "review mode (review/description)", "review")
  .option(
    "-t, --target-branch <branch>",
    "target branch to compare against",
    "development",
  )
  .option("-o, --output <output>", "output folder", "")
  .option("-v, --verbose", "enable verbose logging")
  .action(async (options) => {
    try {
      if (options.verbose) {
        logger.level = "debug";
      }

      const reviewer = new PRReviewer(options);
      await reviewer.run();
      process.exit(0);
    } catch (error) {
      logger.error("Fatal error:", error);
      process.exit(1);
    }
  });

program.parse();
