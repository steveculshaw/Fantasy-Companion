@echo off

REM =================================================
REM Run Script Fantasy Compendium BUILD {rsfcbuild}
REM =================================================

set VERSION=0.0.2
set TGT=Fantasy-Companion.zip
cd C:\OneDrive\Resources\code-repos\Fantasy-Companion\
C:

:START
cls
echo building Fantasy Companion version: %VERSION%

:ZIPSTEPS
echo.
echo remove old zip ...
if exist %TGT% del %TGT%
echo create new zip ...
7z a -r -tzip -aoa -xr!.git -xr!.github -xr!.vscode -xr!old -xr!build-scripts -x!.gitignore %TGT% *.*

:GITSTEPS
echo.
echo.
echo git commit changes for version: %VERSION% ...
git commit -a -m "stage and commit from Fantasy-Companion build script version: %VERSION%"

echo.
echo.
echo push changes to GitHub ...
git push origin master

:ALLDONE
echo.
echo all done ...

pause

REM timeout 5
