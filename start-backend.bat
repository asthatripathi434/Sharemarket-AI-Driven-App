@echo off
echo ====================================================
echo  Nextgen ShareMarket & AI — Starting Backend
echo ====================================================
cd backend
if not exist venv (
    echo Creating virtual environment...
    python -m venv venv
)
call venv\Scripts\activate
echo Installing dependencies...
pip install -r requirements.txt
echo.
echo Starting FastAPI backend on http://localhost:8000
echo API docs at http://localhost:8000/docs
echo.
python main.py
pause
