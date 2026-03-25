#!/bin/bash
echo "===================================================="
echo " Nextgen ShareMarket & AI — Starting Frontend"
echo "===================================================="
cd frontend
echo "Installing npm dependencies..."
npm install
echo ""
echo "Starting React frontend on http://localhost:5173"
echo ""
npm run dev
