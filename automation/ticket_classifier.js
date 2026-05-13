/*
Ticket Classification Engine
Service Desk Intelligence Platform
Author: Peter Jordan
*/

function classifyTicket(ticket) {

    const categoryKeywords = {
        Network: ["vpn", "wifi", "network", "internet"],
        Hardware: ["laptop", "monitor", "keyboard"],
        Security: ["phishing", "malware", "breach"],
        Software: ["outlook", "excel", "application"]
    };

    for (const category in categoryKeywords) {
        for (const keyword of categoryKeywords[category]) {

            if (ticket.description.toLowerCase().includes(keyword)) {
                return category;
            }
        }
    }

    return "General Support";
}

const sampleTicket = {
    id: 1001,
    description: "User cannot connect to VPN from home."
};

console.log("Classification:", classifyTicket(sampleTicket));
