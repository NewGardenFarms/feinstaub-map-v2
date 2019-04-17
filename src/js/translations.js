module.exports = {
// table headings
	"(Sensor)": {
				"de": "Sensor",
	},
	"PM10 &micro;g/m&sup3;": {
	},
	"PM2.5 &micro;g/m&sup3;":{
	},
	"AQI US": {
	},
	"Temperature °C": {
				"de": "Temperatur °C",
	},
	"Humidity %": {
				"de": "Feuchtigkeit %",
	},
	"Pressure hPa": {
				"de": "Luftdruck hPa",
	},

// select options
	" Temperature": {
				"de": " Temperatur",
	},
	" rel. Humidity": {
				"de": " rel. Luftfeuchte",
	},
	" Pressure": {
				"de": " Luftdruck",
	},

// sidebar
	"Hide explanation": {
				"de": "Erklärung ausblenden",
	},
	"Show explanation": {
				"de": "Erklärung einblenden",
	},
	"(close)": {
				"de": "(schließen)",
	},

// last update
	"Last update": {
				"de": "Letztes Update",
	},

// explanation
	"<p>The hexagons represent the median of the current values of the sensors which are contained in the area, according to the option selected (PM10, PM2.5, temperature, relative humidity, pressure, AQI). You can refer to the scale on the left side of the map.</p> \
<p>By clicking on a hexagon, you can display a list of all the corresponding sensors as a table. The first column lists the sensor-IDs. In the first line, you can see the amount of sensor in the area and the median value.</p> \
<p>By clicking on the plus symbol next to a sensor ID, you can display two graphics: the individual measurements for the last 24 hours and the 24 hours floating mean for the last seven days. For technical reasons, the first of the 8 days displayed on the graphic has to stay empty.\
The values are refreshed every 5 minutes in order to fit with the measurement frequency of the Airrohr sensors.</p> \
<p>The Air Quality Index (AQI) is calculated according to the recommandations of the United States Environmental Protection Agency. Further information is available on the official page.(<a href='https://www.airnow.gov/index.cfm?action=aqibasics.aqi'>Link</a>). Hover over the AQI scale to display the levels of health concern.</p>" : {
				"de": "<p>Die Kacheln zeigen aktuell den Durchschnitt der PM10-Werte aller in der Zelle befindlichen Sensoren. Diese werden nach der Skala unten links entsprechend eingefärbt.</p> \
<p>Die Zahlen in der ersten Spalte enthält die Sensor-IDs. Befinden sich mehrere Sensoren in der Kachel, so wird der Durchschnittswerte aller in der Zelle enthaltenen Sensoren berechnet.</p> \
<p><b>Achtung</b>: Wir zeigen auf der Karte die Werte der <b>letzten 5 Minuten</b> an. Die von den jeweiligen Landesbehörden veröffentlichen Werte werden als ein 24-Stunden-Mittelwert angegeben. Dadurch können die Werte deutlich vom 24-Stunden-Mittelwert abweichen.</p> \
<p>Ein Klick auf das Plus vor der Sensor-ID blendet zwei Grafiken ein. Die erste Grafik zeigt den '24 h floating average' (den gleitenden 24-Stunden-Mittelwert) der letzten 7 Tage an. \
Die zweite Grafik 'Last 24 hours' zeigt den Tagesverlauf für die letzten 24 Stunden.</p>",
	},
}