#!/bin/sh

rm fantasycompanion.zip
cd .. && zip -x\*.git\* -r fantasycompanion/fantasycompanion.zip fantasycompanion -x \*.git\* \*zipit.sh \*.archive\*
