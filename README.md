# Betes Beacon
**EXTREMELY SUPER IMPORTANT DISCLAIMER**
**DO NOT MAKE INSULIN DOSING OR TREATMENT DECISIONS BASED ON A LIGHTBULB! Always test, and verify your blood glucose level before doing anything. Betes Beacon is mostly for fun, a coding exercise, and to maybe get you to not look at your phone every 5 min.**

IoT For PwD! This is a project to make a blood glucose level indicating lamp. It uses a [LIFX lightbulb](https://www.lifx.com/) communicating with a [Nightscout site](http://www.nightscout.info/). Blood glucose data for this project was supplied via [DexCom G6](https://www.dexcom.com) continuous blood glucose monitor, reading to an iPhone, and supply cloud data to the Nightscout site. The Nightscout API provides the JSON.  

## TODO
- Get data from Nightscout API endpoint (yourNightscoutURL.herokuapp.com/api/v1/entries.json)
- Return `sgv` (sensor glucose value)
- Return `direction` (where blood glucose levels are heading)
- Set bulb color based on `sgv`
- Set PULSE action based on `direction` (1 pulse for slightly rising, 2 for rising rapidly, 3 for rising very rapidly)
- Set an alert for when data is not available (loss of signal from transmitter, sensor error, etc)
- Figure out how to query Nightscout API every 5 min for the new value. Nightscout only reports a new value at this interval, additional querying would be redundant. 
