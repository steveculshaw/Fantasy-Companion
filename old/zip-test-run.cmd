@echo off

set VERSION=0.9.51
set TGT=Fantasy-Companion.zip
cd C:\OneDrive\Resources\code-repos\Fantasy-Companion\
C:

:START
cls

:ZIPSTEPS
echo.
echo remove old zip ...
if exist %TGT% del %TGT%
echo create new zip ...

REM 7z a -r -tzip -aoa -xr!.git -xr!.github -xr!.vscode -xr!old -x!*.py -x!*.sh -x!.gitignore %TGT% *.*
7z a -r -tzip -aoa -xr!.git -xr!.github -xr!.vscode -xr!old -xr!build-scripts -x!.gitignore %TGT% *.*
