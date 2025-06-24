:: This is .bat file to run python server in device for windows only

@echo off

:: Check if Python is available
where python >nul 2>nul
if errorlevel 1 (
    echo Python is not installed or not in PATH.
    pause
    exit /b
)

REM Starts a local server using Python
echo Starting local server at http://localhost:8000
python -m http.server 8000
pause