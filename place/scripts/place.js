const temp = 30; // Temperature in Celsius
const windSpeed = 15; // Wind speed in km/h

function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return (
            13.12 +
            0.6215 * temp -
            11.37 * Math.pow(windSpeed, 0.16) +
            0.3965 * temp * Math.pow(windSpeed, 0.16)
        ).toFixed(1);
    }
    return "N/A";
}

document.getElementById("wind-chill").textContent = calculateWindChill(temp, windSpeed);