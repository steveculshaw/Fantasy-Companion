@echo off

cls

set version=0.0.8

REM =================================================
REM Run Script Fantasy Compendium BUILD {rsfcbuild}
REM =================================================

echo.
echo building Fantasy Companion version: %VERSION%

:START
pushd
cd F:\Fantasy-Companion\
f:

set tgt=Fantasy-Companion.zip

REM echo.
REM echo ================================================================
REM echo   DID I UPDATE THE VERSION IN MODULE.JSON !!!!
REM echo.
REM echo   also update the readme.md with version for ease of checking !
REM echo ================================================================

echo.
echo remove old zip ...
if exist %tgt% del %tgt%
echo create new zip ...
7z a -r -tzip -aoa -xr!.git -x!*.py -x!*.sh %tgt% *.*

echo.
echo.
echo git commit changes for version: %VERSION% ...
git commit -a -m "stage and commit from Fantasy-Companion build script version:%version%"

echo.
echo.
echo push changes to GitHub ...
git push origin master

:ALLDONE
REM popd
REM c:

echo.
echo all done ...

REM pause

REM timeout 5
