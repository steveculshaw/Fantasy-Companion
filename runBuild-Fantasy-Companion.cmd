@echo off

cls

set version=0.0.7

REM =================================================
REM Run Script Fantasy Compendium BUILD {rsfcbuild}
REM =================================================

echo.
echo building Fantasy Companion ...
echo.

:START
pushd
cd F:\Fantasy-Companion\
f:

set tgt=Fantasy-Companion.zip

echo.
echo ================================================================
echo   DID I UPDATE THE VERSION IN MODULE.JSON !!!!
echo.
echo   also update the readme.md with version for ease of checking !
echo ================================================================

echo.
echo remove old zip ...
if exist %tgt% del %tgt%

echo.
echo create new zip ...
7z a -r -tzip -aoa -xr!.git -x!*.py -x!*.sh %tgt% *.*

echo.
echo git commit changes version:%version% ...
git commit -a -m "stage and commit from Fantasy-Companion build script version:%version%"

echo.
echo push changes to GitHub ...
git push origin master

:ALLDONE
popd
c:

echo.
echo all done ...

REM pause

REM timeout 5
