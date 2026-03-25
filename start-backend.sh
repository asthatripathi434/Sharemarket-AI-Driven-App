#!/bin/bash
echo "===================================================="
echo " Nextgen ShareMarket & AI — Starting Backend"
echo "===================================================="
cd backend
if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv venv
fi
source venv/bin/activate
echo "Installing dependencies..."
pip install -r requirements.txt
echo ""
echo "Starting FastAPI backend on http://localhost:8000"
echo "API docs at http://localhost:8000/docs"
echo ""
python main.py
