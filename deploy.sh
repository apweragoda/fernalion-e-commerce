#!/bin/bash

# Fernalion Deployment Script
# This script helps deploy your Fernalion e-commerce site

echo "🚀 Fernalion Luxury E-commerce Deployment"
echo "========================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node version
NODE_VERSION=$(node -v | cut -d'.' -f1 | cut -d'v' -f2)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Build the project
echo "🔨 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Build completed successfully"

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "⚠️  No .env.local file found. Copy .env.example to .env.local and configure your environment variables."
    cp .env.example .env.local
    echo "📝 Created .env.local from .env.example"
fi

echo ""
echo "🎉 Fernalion deployment ready!"
echo ""
echo "Next steps:"
echo "1. Configure environment variables in .env.local"
echo "2. Run 'npm run dev' for development"
echo "3. Run 'npm start' for production"
echo ""
echo "For Netlify deployment:"
echo "1. Push to GitHub"
echo "2. Connect repository to Netlify"
echo "3. Set build command: 'npm run build'"
echo "4. Set publish directory: '.next'"
echo ""
echo "🌟 Ready to launch your luxury fashion empire!"
