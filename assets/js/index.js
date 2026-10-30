var NASA_API_KEY = "khLq89JLJh9BHrNbDT6ckdfNFTkkDfgDtDnmGPWF";
var NASA_URL = "https://api.nasa.gov/planetary/apod";
var LAUNCHES_URL = "https://lldev.thespacedevs.com/2.3.0/launches/upcoming/?limit=10";
var apodImage = document.getElementById("apod-image");
var apodTitle = document.getElementById("apod-title");
var apodExplanation = document.getElementById("apod-explanation");
var apodDate = document.getElementById("apod-date");
var apodDateDetail = document.getElementById("apod-date-detail");
var apodDateInfo = document.getElementById("apod-date-info");
var apodCopyright = document.getElementById("apod-copyright");
var apodMediaType = document.getElementById("apod-media-type");
var dateInput = document.getElementById("apod-date-input");
var apodLoading = document.getElementById("apod-loading");
var launchesGrid = document.getElementById("launches-grid");
var featuredLaunch = document.getElementById("featured-launch");
var launchesCount = document.getElementById("launches-count");
var launchesCountMobile = document.getElementById("launches-count-mobile");
var planetsGrid = document.getElementById("planets-grid");
var comparisonBody = document.getElementById("planet-comparison-tbody");
    var planetsData = [
    {
        englishName: "Mercury",
        semimajorAxis: 57909050,
        meanRadius: 2439.7,
        mass: { massValue: 3.301, massExponent: 23 },
        sideralOrbit: 87.97,
        moons: [],
        bodyType: "Terrestrial Planet",
        description: "Mercury is the smallest planet and the closest planet to the Sun.",
        density: 5.43,
        sideralRotation: 1407.6,
        discoveredBy: "Known since antiquity",
        discoveryDate: "Ancient",
        vol: { volValue: 6.083, volExponent: 10 },
        perihelion: 46001200,
        aphelion: 69816900,
        eccentricity: 0.2056,
        inclination: 7.0,
        axialTilt: 0.034,
        avgTemp: 440,
        escape: 4250
    },
    {
        englishName: "Venus",
        semimajorAxis: 108208000,
        meanRadius: 6051.8,
        mass: { massValue: 4.867, massExponent: 24 },
        sideralOrbit: 224.7,
        moons: [],
        bodyType: "Terrestrial Planet",
        description: "Venus is the hottest planet in our Solar System because of its thick atmosphere.",
        density: 5.24,
        sideralRotation: -5832.5,
        discoveredBy: "Known since antiquity",
        discoveryDate: "Ancient",
        vol: { volValue: 9.284, volExponent: 11 },
        perihelion: 107477000,
        aphelion: 108939000,
        eccentricity: 0.0068,
        inclination: 3.39,
        axialTilt: 177.36,
        avgTemp: 737,
        escape: 10360
    },
    {
        englishName: "Earth",
        semimajorAxis: 149598023,
        meanRadius: 6371,
        mass: { massValue: 5.972, massExponent: 24 },
        sideralOrbit: 365.25,
        moons: [{}],
        bodyType: "Terrestrial Planet",
        description: "Earth is our home planet and the only known planet to support life.",
        density: 5.51,
        sideralRotation: 23.93,
        discoveredBy: "Known since antiquity",
        discoveryDate: "Ancient",
        vol: { volValue: 1.083, volExponent: 12 },
        perihelion: 147095000,
        aphelion: 152100000,
        eccentricity: 0.0167,
        inclination: 0,
        axialTilt: 23.44,
        avgTemp: 288,
        escape: 11186
    },
    {
        englishName: "Mars",
        semimajorAxis: 227939200,
        meanRadius: 3389.5,
        mass: { massValue: 6.417, massExponent: 23 },
        sideralOrbit: 687,
        moons: [{}, {}],
        bodyType: "Terrestrial Planet",
        description: "Mars is known as the Red Planet because of its reddish surface.",
        density: 3.93,
        sideralRotation: 24.62,
        discoveredBy: "Known since antiquity",
        discoveryDate: "Ancient",
        vol: { volValue: 1.631, volExponent: 11 },
        perihelion: 206650000,
        aphelion: 249230000,
        eccentricity: 0.0934,
        inclination: 1.85,
        axialTilt: 25.19,
        avgTemp: 210,
        escape: 5027
    },
    {
        englishName: "Jupiter",
        semimajorAxis: 778570000,
        meanRadius: 69911,
        mass: { massValue: 1.898, massExponent: 27 },
        sideralOrbit: 4332.59,
        moons: Array(95).fill({}),
        bodyType: "Gas Giant",
        description: "Jupiter is the largest planet in our Solar System.",
        density: 1.33,
        sideralRotation: 9.93,
        discoveredBy: "Known since antiquity",
        discoveryDate: "Ancient",
        vol: { volValue: 1.431, volExponent: 15 },
        perihelion: 740520000,
        aphelion: 816620000,
        eccentricity: 0.0489,
        inclination: 1.303,
        axialTilt: 3.13,
        avgTemp: 165,
        escape: 59500
    },
    {
        englishName: "Saturn",
        semimajorAxis: 1433530000,
        meanRadius: 58232,
        mass: { massValue: 5.683, massExponent: 26 },
        sideralOrbit: 10759,
        moons: Array(146).fill({}),
        bodyType: "Gas Giant",
        description: "Saturn is famous for its beautiful rings made of ice and rock.",
        density: 0.69,
        sideralRotation: 10.7,
        discoveredBy: "Known since antiquity",
        discoveryDate: "Ancient",
        vol: { volValue: 8.271, volExponent: 14 },
        perihelion: 1352550000,
        aphelion: 1514500000,
        eccentricity: 0.0565,
        inclination: 2.485,
        axialTilt: 26.73,
        avgTemp: 134,
        escape: 35500
    },
    {
        englishName: "Uranus",
        semimajorAxis: 2872460000,
        meanRadius: 25362,
        mass: { massValue: 8.681, massExponent: 25 },
        sideralOrbit: 30687,
        moons: Array(28).fill({}),
        bodyType: "Ice Giant",
        description: "Uranus is an ice giant that rotates almost on its side.",
        density: 1.27,
        sideralRotation: -17.24,
        discoveredBy: "William Herschel",
        discoveryDate: "1781",
        vol: { volValue: 6.833, volExponent: 13 },
        perihelion: 2735560000,
        aphelion: 3006390000,
        eccentricity: 0.0472,
        inclination: 0.773,
        axialTilt: 97.77,
        avgTemp: 76,
        escape: 21300
    },
    {
        englishName: "Neptune",
        semimajorAxis: 4495060000,
        meanRadius: 24622,
        mass: { massValue: 1.024, massExponent: 26 },
        sideralOrbit: 60190,
        moons: Array(16).fill({}),
        bodyType: "Ice Giant",
        description: "Neptune is a distant blue planet with extremely strong winds.",
        density: 1.64,
        sideralRotation: 16.11,
        discoveredBy: "Johann Galle",
        discoveryDate: "1846",
        vol: { volValue: 6.254, volExponent: 13 },
        perihelion: 4444450000,
        aphelion: 4545670000,
        eccentricity: 0.0086,
        inclination: 1.77,
        axialTilt: 28.32,
        avgTemp: 72,
        escape: 23500
    }
];
function showError(container, message) {
    if (container) {
        container.innerHTML = `
            <p class="text-red-400 text-center col-span-full py-6">
                ${message}
            </p>
        `;
    }
}
function formatDate(dateString) {
    if (!dateString) return "Date not available";
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}
function formatNumber(value) {
    if (value === null || value === undefined || value === "") {
        return "N/A";
    }
    return Number(value).toLocaleString("en-US", {
        maximumFractionDigits: 2
    });
}
function setText(id, value) {
    var element = document.getElementById(id);
    if (element) {
        element.textContent = value ?? "N/A";
    }
}
async function getAPOD(date) {
    if (apodLoading) apodLoading.classList.remove("hidden");
    if (apodImage) apodImage.classList.add("hidden");
    try {
        var url = NASA_URL + "?api_key=" + NASA_API_KEY;
        if (date) {
            url += "&date=" + date;
        }
        var response = await fetch(url);
        if (!response.ok) {
            throw new Error("Could not load NASA picture.");
        }
        var data = await response.json();
        if (apodTitle) apodTitle.textContent = data.title;
        if (apodExplanation) apodExplanation.textContent = data.explanation;
        if (apodDate) {
            apodDate.textContent =
                "Astronomy Picture of the Day - " + formatDate(data.date);
        }
        if (apodDateDetail) apodDateDetail.textContent = data.date;
        if (apodDateInfo) apodDateInfo.textContent = data.date;
        if (apodMediaType) apodMediaType.textContent = data.media_type;
        if (apodCopyright) {
            apodCopyright.textContent = data.copyright
                ? "© " + data.copyright
                : "© NASA";
        }
        if (apodImage) {
            if (data.media_type === "image") {
                apodImage.src = data.url;
                apodImage.alt = data.title;
            } else {
                apodImage.src = "./images/placeholder.webp";
                if (apodExplanation) {
                    apodExplanation.textContent +=
                        "\n\nThis APOD is a video. Open it here: " + data.url;
                }
            }
            apodImage.dataset.fullImage = data.hdurl || data.url;
            apodImage.classList.remove("hidden");
        }
    } catch (error) {
        if (apodTitle) {
            apodTitle.textContent = "Unable to load today's picture";
        }
        if (apodExplanation) {
            apodExplanation.textContent = error.message;
        }
    } finally {
        if (apodLoading) {
            apodLoading.classList.add("hidden");
        }
    }
}
var loadDateBtn = document.getElementById("load-date-btn");
if (loadDateBtn) {
    loadDateBtn.addEventListener("click", function () {
        if (dateInput && dateInput.value) {
            getAPOD(dateInput.value);
        }
    });
}
var todayApodBtn = document.getElementById("today-apod-btn");
if (todayApodBtn) {
    todayApodBtn.addEventListener("click", function () {
        if (dateInput) {
            dateInput.value = new Date().toISOString().split("T")[0];
        }
        getAPOD();
    });
}
var apodImageContainer =
    document.getElementById("apod-image-container");
if (apodImageContainer) {
    apodImageContainer.addEventListener("click", function () {
        if (apodImage) {
            var imageUrl =
                apodImage.dataset.fullImage || apodImage.src;
            if (imageUrl) {
                window.open(imageUrl, "_blank");
            }
        }
    });
}
if (dateInput) {
    dateInput.max = new Date().toISOString().split("T")[0];
}
function getLaunchImage(launch) {
    if (!launch.image) {
        return "./assets/images/launch-placeholder.png";
    }
    if (typeof launch.image === "string") {
        return launch.image;
    }
    return launch.image.image_url ||
        launch.image.thumbnail_url ||
        "./assets/images/launch-placeholder.png";
}
async function getLaunches() {
    if (!launchesGrid) return;
    launchesGrid.innerHTML = `
        <p class="text-slate-400 text-center col-span-full py-6">
            Loading upcoming launches...
        </p>
    `;
    try {
        var response = await fetch(LAUNCHES_URL);
        if (!response.ok) {
            throw new Error("Could not load launches.");
        }
        var data = await response.json();
        var launches = data.results || [];
        if (launches.length === 0) {
            showError(launchesGrid, "No upcoming launches found.");
            return;
        }
        launchesGrid.innerHTML = "";
        launches.forEach(function (launch) {
            var card = document.createElement("div");
            card.className =
                "bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all group";
            var missionName = launch.name || "Unnamed mission";
            var provider = launch.launch_service_provider?.name || "Unknown provider";
            var rocket = launch.rocket?.configuration?.name || "Unknown rocket";
            var pad = launch.pad?.name || "Location not available";
            var date = launch.net ? formatDate(launch.net) : "Date TBC";
            var time = launch.net
                ? new Date(launch.net).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    timeZone: "UTC",
                    timeZoneName: "short"
                })
                : "Time TBC";
            var status = launch.status?.abbrev || "TBD";
            // Get image URL
            var image = "";
            if (launch.image) {
                if (typeof launch.image === "string") {
                    image = launch.image;
                } else {
                    image =
                        launch.image.image_url ||
                        launch.image.thumbnail_url ||
                        "";
                }
            }
            var description =
                launch.mission?.description || "No mission description available.";
            var detailsUrl = launch.url || "";
            card.innerHTML = `
                <div class="relative h-48 bg-slate-900/50 flex items-center justify-center overflow-hidden">
                    <img
                        src="${image || "./assets/images/launch-placeholder.png"}"
                        alt="${missionName}"
                        class="w-full h-full object-cover"
                        onerror="this.onerror=null; this.src='./assets/images/launch-placeholder.png';"
                    >
                    <div class="absolute top-3 right-3">
                        <span class="px-3 py-1 bg-blue-500/90 text-white rounded-full text-xs font-semibold">
                            ${status}
                        </span>
                    </div>
                </div>
                <div class="p-5">
                    <div class="mb-3">
                        <h4 class="font-bold text-lg mb-2 line-clamp-2 group-hover:text-blue-400">
                            ${missionName}
                        </h4>
                        <p class="text-sm text-slate-400 flex items-center gap-2">
                            <i class="fas fa-building text-xs"></i>
                            ${provider}
                        </p>
                    </div>
                    <div class="space-y-2 mb-4">
                        <div class="flex items-center gap-2 text-sm">
                            <i class="fas fa-calendar text-slate-500 w-4"></i>
                            <span class="text-slate-300">${date}</span>
                        </div>
                        <div class="flex items-center gap-2 text-sm">
                            <i class="fas fa-clock text-slate-500 w-4"></i>
                            <span class="text-slate-300">${time}</span>
                        </div>
                        <div class="flex items-center gap-2 text-sm">
                            <i class="fas fa-rocket text-slate-500 w-4"></i>
                            <span class="text-slate-300">${rocket}</span>
                        </div>
                        <div class="flex items-center gap-2 text-sm">
                            <i class="fas fa-map-marker-alt text-slate-500 w-4"></i>
                            <span class="text-slate-300 line-clamp-1">${pad}</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 pt-4 border-t border-slate-700">
                        <button class="launch-details flex-1 px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 text-sm font-semibold">
                            Details
                        </button>
                    </div>
                </div>
            `;
            card.querySelector(".launch-details").addEventListener(
                "click",
                function () {
                    alert(missionName + "\n\n" + description);
                    if (detailsUrl) {
                        window.open(detailsUrl, "_blank");
                    }
                }
            );
            launchesGrid.appendChild(card);
        });
        if (launchesCount) {
            launchesCount.textContent = launches.length + " Launches";
        }
        if (launchesCountMobile) {
            launchesCountMobile.textContent = launches.length;
        }
        showFeaturedLaunch(launches[0]);
    } catch (error) {
        showError(launchesGrid, error.message);
    }
}
function showFeaturedLaunch(launch) {
    if (!featuredLaunch || !launch) return;
    var name = launch.name || "Unnamed mission";
    var provider = launch.launch_service_provider?.name || "Unknown provider";
    var rocket = launch.rocket?.configuration?.name || "Unknown rocket";
    var date = launch.net ? formatDate(launch.net) : "Date TBC";
    var time = launch.net
        ? new Date(launch.net).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            timeZone: "UTC",
            timeZoneName: "short"
        })
        : "Time TBC";
    var location =
        launch.pad?.location?.name ||
        launch.pad?.name ||
        "Location not available";
    var country = launch.pad?.country?.name || "Country not available";
    var description =
        launch.mission?.description || "No mission description available.";
    var image = launch.image || "";
    featuredLaunch.innerHTML = `
        <div class="relative bg-slate-800/30 border border-slate-700 rounded-3xl overflow-hidden">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 p-8">
                <div>
                    <span class="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold mb-4">
                        <i class="fas fa-star mr-2"></i>
                        Featured Launch
                    </span>
                    <h3 class="text-3xl font-bold mb-3">${name}</h3>
                    <p class="text-slate-400 mb-2">
                        <i class="fas fa-building mr-2"></i>${provider}
                    </p>
                    <p class="text-slate-400 mb-6">
                        <i class="fas fa-rocket mr-2"></i>${rocket}
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div class="bg-slate-900/50 rounded-xl p-4">
                            <p class="text-xs text-slate-400 mb-1">Launch Date</p>
                            <p class="font-semibold">${date}</p>
                        </div>
                        <div class="bg-slate-900/50 rounded-xl p-4">
                            <p class="text-xs text-slate-400 mb-1">Launch Time</p>
                            <p class="font-semibold">${time}</p>
                        </div>
                        <div class="bg-slate-900/50 rounded-xl p-4">
                            <p class="text-xs text-slate-400 mb-1">Location</p>
                            <p class="font-semibold text-sm">${location}</p>
                        </div>
                        <div class="bg-slate-900/50 rounded-xl p-4">
                            <p class="text-xs text-slate-400 mb-1">Country</p>
                            <p class="font-semibold">${country}</p>
                        </div>
                    </div>
                    <p class="text-slate-300 leading-relaxed">
                        ${description}
                    </p>
                </div>
                <div class="relative min-h-[300px] rounded-2xl overflow-hidden bg-slate-900/50 flex items-center justify-center">
                    ${
                        image
                        ? `<img src="${image}" alt="${name}" class="w-full h-full object-cover absolute inset-0">`
                        : `<i class="fas fa-rocket text-9xl text-slate-700/50"></i>`
                    }
                </div>
            </div>
        </div>
    `;
}
function getPlanets() {
    if (!planetsGrid) return;
    planetsData.sort(function (a, b) {
        return a.semimajorAxis - b.semimajorAxis;
    });
    displayPlanetCards();
    displayPlanetComparison();
    var earth = planetsData.find(function (planet) {
        return planet.englishName === "Earth";
    });
    if (earth) {
        showPlanetDetails(earth);
    }
}
function displayPlanetCards() {
    if (!planetsGrid) return;
    planetsGrid.innerHTML = "";
    planetsData.forEach(function (planet) {
        var planetName = planet.englishName;
        var planetId = planetName.toLowerCase();
        var card = document.createElement("div");
        card.className =
            "planet-card bg-slate-800/50 border border-slate-700 rounded-2xl p-4 transition-all cursor-pointer group";
        card.dataset.planetId = planetId;
        card.innerHTML = `
            <div class="relative mb-3 h-24 flex items-center justify-center">
                <img
                    class="w-20 h-20 object-contain group-hover:scale-110 transition-transform"
                    src="./assets/images/${planetId}.png"
                    alt="${planetName}"
                    onerror="this.style.display='none'"
                >
            </div>
            <h4 class="font-semibold text-center text-sm">
                ${planetName}
            </h4>
            <p class="text-xs text-slate-400 text-center">
                ${(planet.semimajorAxis / 149597870.7).toFixed(2)} AU
            </p>
        `;
        card.addEventListener("click", function () {
            showPlanetDetails(planet);
        });
        planetsGrid.appendChild(card);
    });
}
function displayPlanetComparison() {
    if (!comparisonBody) return;
    comparisonBody.innerHTML = "";
    planetsData.forEach(function (planet) {
        var distance = planet.semimajorAxis
            ? (planet.semimajorAxis / 149597870.7).toFixed(2)
            : "N/A";
        var diameter = planet.meanRadius
            ? formatNumber(planet.meanRadius * 2)
            : "N/A";
        var mass = planet.mass?.massValue &&
            planet.mass?.massExponent !== undefined
            ? planet.mass.massValue + " × 10^" + planet.mass.massExponent
            : "N/A";
        var orbitalPeriod = planet.sideralOrbit
            ? formatNumber(planet.sideralOrbit) + " days"
            : "N/A";
        var moons = planet.moons ? planet.moons.length : 0;
        var row = document.createElement("tr");
        row.className = "hover:bg-slate-800/30 transition-colors";
        row.innerHTML = `
            <td class="px-4 md:px-6 py-3 md:py-4 font-semibold sticky left-0 bg-slate-800 z-10">
                ${planet.englishName}
            </td>
            <td class="px-4 md:px-6 py-3 md:py-4">${distance}</td>
            <td class="px-4 md:px-6 py-3 md:py-4">${diameter}</td>
            <td class="px-4 md:px-6 py-3 md:py-4">${mass}</td>
            <td class="px-4 md:px-6 py-3 md:py-4">${orbitalPeriod}</td>
            <td class="px-4 md:px-6 py-3 md:py-4">${moons}</td>
            <td class="px-4 md:px-6 py-3 md:py-4">
                ${planet.bodyType || "Planet"}
            </td>
        `;
        comparisonBody.appendChild(row);
    });
}
function showPlanetDetails(planet) {
    if (!planet) return;
    var name = planet.englishName;
    var imageName = name.toLowerCase();
    setText("planet-detail-name", name);
    setText(
        "planet-detail-description",
        planet.description || name + " is a planet in our Solar System."
    );
    var image = document.getElementById("planet-detail-image");
    if (image) {
        image.src = "./assets/images/" + imageName + ".png";
        image.alt = name;
    }
    setText(
        "planet-distance",
        planet.semimajorAxis
            ? formatNumber(planet.semimajorAxis / 1000000) + "M km"
            : "N/A"
    );
    setText(
        "planet-radius",
        planet.meanRadius
            ? formatNumber(planet.meanRadius) + " km"
            : "N/A"
    );
    setText(
        "planet-mass",
        planet.mass
            ? planet.mass.massValue + " × 10^" + planet.mass.massExponent + " kg"
            : "N/A"
    );
    setText(
        "planet-density",
        planet.density
            ? formatNumber(planet.density) + " g/cm³"
            : "N/A"
    );
    setText(
        "planet-orbital-period",
        planet.sideralOrbit
            ? formatNumber(planet.sideralOrbit) + " days"
            : "N/A"
    );
    setText(
        "planet-rotation",
        planet.sideralRotation
            ? formatNumber(planet.sideralRotation) + " hours"
            : "N/A"
    );
    setText("planet-moons", planet.moons ? planet.moons.length : 0);
    setText(
        "planet-gravity",
        planet.gravity
            ? formatNumber(planet.gravity) + " m/s²"
            : "N/A"
    );
    setText("planet-discoverer", planet.discoveredBy || "Known since antiquity");
    setText("planet-discovery-date", planet.discoveryDate || "Ancient");
    setText("planet-body-type", planet.bodyType || "Planet");
    setText(
        "planet-volume",
        planet.vol
            ? formatNumber(planet.vol.volValue) + " × 10^" + planet.vol.volExponent + " km³"
            : "N/A"
    );
    setText(
        "planet-perihelion",
        planet.perihelion
            ? formatNumber(planet.perihelion / 1000000) + "M km"
            : "N/A"
    );
    setText(
        "planet-aphelion",
        planet.aphelion
            ? formatNumber(planet.aphelion / 1000000) + "M km"
            : "N/A"
    );
    setText("planet-eccentricity", planet.eccentricity ?? "N/A");
    setText(
        "planet-inclination",
        planet.inclination
            ? formatNumber(planet.inclination) + "°"
            : "N/A"
    );
    setText(
        "planet-axial-tilt",
        planet.axialTilt
            ? formatNumber(planet.axialTilt) + "°"
            : "N/A"
    );
    setText(
        "planet-temp",
        planet.avgTemp
            ? formatNumber(planet.avgTemp - 273.15) + "°C"
            : "N/A"
    );
    setText(
        "planet-escape",
        planet.escape
            ? formatNumber(planet.escape / 1000) + " km/s"
            : "N/A"
    );
    document.querySelectorAll(".planet-card").forEach(function (card) {
        card.classList.remove("border-blue-500");
    });
    var selectedCard = document.querySelector(
        '[data-planet-id="' + imageName + '"]'
    );
    if (selectedCard) {
        selectedCard.classList.add("border-blue-500");
    }
}
var navLinks = document.querySelectorAll(".nav-link");
var sections = document.querySelectorAll(".app-section");
navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        var sectionId = link.dataset.section;
        var selectedSection = document.getElementById(sectionId);
        if (!selectedSection) return;
        sections.forEach(function (section) {
            section.classList.add("hidden");
        });
        selectedSection.classList.remove("hidden");
        navLinks.forEach(function (navLink) {
            navLink.classList.remove(
                "bg-blue-500/10",
                "text-blue-400"
            );
            navLink.classList.add("text-slate-300");
        });
        link.classList.add("bg-blue-500/10", "text-blue-400");
        link.classList.remove("text-slate-300");
        var sidebar = document.getElementById("sidebar");
        if (sidebar) {
            sidebar.classList.remove("sidebar-open");
        }
    });
});
var sidebarToggle = document.getElementById("sidebar-toggle");
if (sidebarToggle) {
    sidebarToggle.addEventListener("click", function () {
        var sidebar = document.getElementById("sidebar");
        if (sidebar) {
            sidebar.classList.toggle("sidebar-open");
        }
    });
}
getAPOD();
getLaunches();
getPlanets();
