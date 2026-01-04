@echo off
TITLE MCM Research Archive Server
echo Starting MCM Research Archive development server...
if not exist node_modules (
    echo [INFO] node_modules not found. Running npm install...
    call npm install
)
echo [INFO] Fetching latest research stats from WCG...
python scripts/fetch_real_data_bs4.py
echo.
echo Server is starting...
echo Local Address: http://localhost:5173/
echo.
npm run dev
pause