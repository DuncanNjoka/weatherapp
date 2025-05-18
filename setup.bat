@echo off
echo Setting up environment variables...

:: Add PHP and MySQL to PATH
setx PATH "%PATH%;C:\xampp\php;C:\xampp\mysql\bin" /M

:: Start XAMPP services
echo Starting XAMPP services...
start "" "C:\xampp\xampp-control.exe"

:: Wait for services to start
timeout /t 5

:: Test PHP
echo Testing PHP installation...
C:\xampp\php\php.exe -v

:: Test Node.js
echo Testing Node.js installation...
node -v

:: Test Composer
echo Testing Composer installation...
composer -V

echo Setup complete! Please check the XAMPP Control Panel to ensure Apache and MySQL are running.
pause 