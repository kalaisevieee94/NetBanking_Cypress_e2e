#!/bin/bash
# This script clones the current repository into the GitHub Actions workspace.

# Exit if any command fails
set -e

# Clone the repository into the workspace directory
echo "Cloning repository: $GITHUB_REPOSITORY"
git clone --depth=1 https://github.com/${GITHUB_REPOSITORY}.git $GITHUB_WORKSPACE

# Navigate into the workspace
cd $GITHUB_WORKSPACE

# Checkout the correct commit or branch
if [ -n "$GITHUB_SHA" ]; then
    echo "Checking out commit: $GITHUB_SHA"
    git checkout $GITHUB_SHA
else
    echo "No commit SHA provided, using the default branch"
fi
