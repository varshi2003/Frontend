// Companies data
const companies = [
    { name: "Company A", country: "USA", timezone: "America/New_York", opening: 9, closing: 17 },
    { name: "Company B", country: "India", timezone: "Asia/Kolkata", opening: 10, closing: 18 },
    { name: "Company C", country: "Japan", timezone: "Asia/Tokyo", opening: 8, closing: 16 },
    { name: "Company D", country: "UK", timezone: "Europe/London", opening: 9, closing: 17 },
    { name: "Company E", country: "Australia", timezone: "Australia/Sydney", opening: 8, closing: 16 },
    { name: "Company F", country: "Canada", timezone: "America/Toronto", opening: 9, closing: 17 },
    { name: "Company G", country: "Germany", timezone: "Europe/Berlin", opening: 9, closing: 17 },
    { name: "Company H", country: "Brazil", timezone: "America/Sao_Paulo", opening: 8, closing: 16 },
    { name: "Company I", country: "China", timezone: "Asia/Shanghai", opening: 9, closing: 18 },
    { name: "Company J", country: "South Africa", timezone: "Africa/Johannesburg", opening: 8, closing: 16 },
];

// Populate timezone dropdown
const timezoneSelect = document.getElementById("timezoneSelect");
const cardsContainer = document.getElementById("cardsContainer");

Intl.supportedValuesOf("timeZone").forEach((timezone) => {
    const option = document.createElement("option");
    option.value = timezone;
    option.textContent = timezone;
    timezoneSelect.appendChild(option);
});

// Update company cards based on selected timezone
timezoneSelect.addEventListener("change", () => {
    const selectedTimezone = timezoneSelect.value;
    if (!selectedTimezone) {
        cardsContainer.innerHTML = "<p>Please select a timezone to view company details.</p>";
        return;
    }

    cardsContainer.innerHTML = ""; // Clear existing cards
    companies.forEach((company) => {
        const currentTime = new Date().toLocaleString("en-US", { timeZone: selectedTimezone });
        const userHour = new Date(currentTime).getHours();
        const isOpen = userHour >= company.opening && userHour < company.closing;

        // Create a card for each company
        const card = document.createElement("div");
        card.className = "company-card";
        card.innerHTML = `
            <h3>${company.name}</h3>
            <p>Country: ${company.country}</p>
            <p>Opening Time: ${company.opening}:00</p>
            <p>Closing Time: ${company.closing}:00</p>
            <p>Status: <span class="${isOpen ? 'open' : 'closed'}">${isOpen ? 'OPEN' : 'CLOSED'}</span></p>
        `;
        cardsContainer.appendChild(card);
    });
});
