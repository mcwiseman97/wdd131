document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

    const temperature = 6; 
    const windSpeed = 6;   
    const chillElement = document.getElementById("windchill");

    if (chillElement) {
        if (temperature <= 10 && windSpeed > 4.8) {
            const wcFactor = calculateWindChill(temperature, windSpeed);
            chillElement.textContent = `${wcFactor.toFixed(1)}°C`;
        } else {
            chillElement.textContent = "N/A";
        }
    }
});

function calculateWindChill(t, v) {
    return 13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16));
}