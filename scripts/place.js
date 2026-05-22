document.addEventListener("DOMContentLoaded", () => {
    // 1. Dynamic Footer Elements
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

    // 2. Wind Chill Calculation Formula
    // Formula Requirements for Metric (Celsius & km/h):
    // Twc = 13.12 + 0.6215*T - 11.37*(V^0.16) + 0.3965*T*(V^0.16)
    // Formula conditions: Temp <= 10 °C and Wind Speed > 4.8 km/h
    const tempElement = document.getElementById("temperature");
    const windElement = document.getElementById("windspeed");
    const chillElement = document.getElementById("windchill");

    if (tempElement && windElement && chillElement) {
        const t = parseFloat(tempElement.textContent);
        const v = parseFloat(windElement.textContent);

        if (t <= 10 && v > 4.8) {
            const windChill = 13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16));
            chillElement.textContent = `${windChill.toFixed(1)}°C`;
        } else {
            chillElement.textContent = "N/A";
        }
    }
});