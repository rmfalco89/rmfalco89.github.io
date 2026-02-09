#!/bin/bash
# Quick deployment script for GitHub Pages

set -e

echo "🚀 Portfolio Website Deployment"
echo "================================"
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit: Portfolio website"
fi

# Check if GitHub CLI is installed
if ! command -v gh &> /dev/null; then
    echo "⚠️  GitHub CLI not found. Install with: brew install gh"
    echo ""
    echo "Manual setup:"
    echo "1. Create a repo on GitHub: https://github.com/new"
    echo "2. Name it: yourusername.github.io"
    echo "3. Run: git remote add origin https://github.com/yourusername/yourusername.github.io.git"
    echo "4. Run: git push -u origin main"
    exit 1
fi

# Prompt for GitHub username
read -p "Enter your GitHub username: " username

if [ -z "$username" ]; then
    echo "❌ Username cannot be empty"
    exit 1
fi

repo_name="${username}.github.io"

echo ""
echo "Creating repository: $repo_name"
echo ""

# Create repo
gh repo create "$repo_name" --public --source=. --remote=origin --push || {
    echo "⚠️  Repository might already exist. Trying to push..."
    git remote add origin "https://github.com/$username/$repo_name.git" 2>/dev/null || true
    git branch -M main
    git push -u origin main
}

echo ""
echo "✅ Deployment complete!"
echo ""
echo "🌐 Your site will be live at: https://$repo_name"
echo ""
echo "⚙️  Enable GitHub Pages:"
echo "1. Go to: https://github.com/$username/$repo_name/settings/pages"
echo "2. Under 'Source', select 'main' branch"
echo "3. Click 'Save'"
echo ""
echo "📝 Don't forget to update:"
echo "• LinkedIn profile link in index.html"
echo ""
