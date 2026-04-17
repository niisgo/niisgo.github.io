@echo off
echo ================================================
echo  Nico Tillmann Portfolio — Setup ^& Start
echo ================================================
echo.

:: Check if node_modules exists
IF NOT EXIST "node_modules\" (
  echo [1/2] Installing dependencies...
  npm install
  echo.
) ELSE (
  echo [1/2] Dependencies already installed. Skipping.
  echo.
)

echo [2/2] Starting dev server at http://localhost:4200
echo       Press Ctrl+C to stop.
echo.
npm start
