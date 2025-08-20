const colorCodes = {
    0: { name: "Black", hex: "#000000" },
    1: { name: "Brown", hex: "#964B00" },
    2: { name: "Red", hex: "#FF0000" },
    3: { name: "Orange", hex: "#FFA500" },
    4: { name: "Yellow", hex: "#FFFF00" },
    5: { name: "Green", hex: "#008000" },
    6: { name: "Blue", hex: "#0000FF" },
    7: { name: "Violet", hex: "#8F00FF" },
    8: { name: "Gray", hex: "#808080" },
    9: { name: "White", hex: "#FFFFFF" },
    tolerance: {
        1: { name: "Brown ±1%", hex: "#964B00" },
        2: { name: "Red ±2%", hex: "#FF0000" },
        5: { name: "Gold ±5%", hex: "#FFD700" },
        10: { name: "Silver ±10%", hex: "#C0C0C0" }
    }
};

// Function to generate color code from resistor value
function generateColorCode() {
    const resistorValue = parseInt(document.getElementById("resistorValue").value);

    if (isNaN(resistorValue) || resistorValue < 1) {
        alert("Please enter a valid resistor value.");
        return;
    }

    let digits = resistorValue.toString();
    let band1 = parseInt(digits[0]);
    let band2 = parseInt(digits[1] || 0);
    let multiplier = digits.length - 2;

    const color1 = colorCodes[band1];
    const color2 = colorCodes[band2];
    const multiplierColor = colorCodes[multiplier + 1];

    document.getElementById("resistorResult").innerHTML = `
        <div>
            <p><strong>Color Bands:</strong></p>
            <div style="background-color:${color1.hex}; width:50px; height:50px; display:inline-block;"></div>
            <span>${color1.name}</span>
            <div style="background-color:${color2.hex}; width:50px; height:50px; display:inline-block;"></div>
            <span>${color2.name}</span>
            <div style="background-color:${multiplierColor.hex}; width:50px; height:50px; display:inline-block;"></div>
            <span>${multiplierColor.name}</span>
        </div>`;
}

// Function to generate resistor value from 4 color bands
function generateResistorValue() {
    const color1 = parseInt(document.getElementById("color1").value);
    const color2 = parseInt(document.getElementById("color2").value);
    const multiplier = parseInt(document.getElementById("color3").value);
    const tolerance = parseInt(document.getElementById("color4").value);

    const resistorValue = (color1 * 10 + color2) * multiplier;

    const color1Details = colorCodes[color1];
    const color2Details = colorCodes[color2];
    const multiplierColorDetails = colorCodes[multiplier / Math.pow(10, (Math.log10(multiplier)))];
    const toleranceColorDetails = colorCodes.tolerance[tolerance];

    document.getElementById("resistorResult").innerHTML = `
        <div>
            <p><strong>Resistor Value:</strong> ${resistorValue} Ω</p>
            <p><strong>Selected Colors:</strong></p>
            <div style="background-color:${color1Details.hex}; width:50px; height:50px; display:inline-block;"></div>
            <span>${color1Details.name}</span>
            <div style="background-color:${color2Details.hex}; width:50px; height:50px; display:inline-block;"></div>
            <span>${color2Details.name}</span>
            <div style="background-color:${multiplierColorDetails.hex}; width:50px; height:50px; display:inline-block;"></div>
            <span>${multiplierColorDetails.name}</span>
            <div style="background-color:${toleranceColorDetails.hex}; width:50px; height:50px; display:inline-block;"></div>
            <span>${toleranceColorDetails.name}</span>
        </div>`;
}

