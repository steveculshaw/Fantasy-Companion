@echo off

REM =================================================
REM Run Script Fantasy Compendium BUILD {rsfcbuild}
REM =================================================

REM Build - using GitHub actions for version, rather than raw URL
REM Build - one location for the version number
REM Build - validate image paths in worlds db
REM Build - yaml in https://github.com/mclemente/fvtt-initiative-double-click/blob/main/.github/workflows/main.yml

set VERSION=0.1.1
set TGT=Fantasy-Companion.zip
cd F:\Fantasy-Companion\
F:

:START
cls
echo.
echo building Fantasy Companion version: %VERSION%

REM echo.
REM echo ================================================================
REM echo   DID I UPDATE THE VERSION IN MODULE.JSON !!!!
REM echo.
REM echo   also update the readme.md with version for ease of checking !
REM echo ================================================================

:ZIPSTEPS
echo.
echo remove old zip ...
if exist %TGT% del %TGT%
echo create new zip ...
7z a -r -tzip -aoa -xr!.git -x!*.py -x!*.sh %TGT% *.*

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

REM pause

REM timeout 5
