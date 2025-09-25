// Function to navigate to the destinations page
function exploreDestinations() {
    window.location.href = "destinations.html";
}

// Lazy Loading for Images
document.addEventListener("DOMContentLoaded", function () {
    let lazyImages = document.querySelectorAll("img[data-lazy]");

    const lazyLoad = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute("data-lazy");
                observer.unobserve(img);
            }
        });
    };

    const observer = new IntersectionObserver(lazyLoad, { threshold: 0.1 });

    lazyImages.forEach(img => observer.observe(img));
});

// Booking Form Validation
function validateBookingForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let destination = document.getElementById("destination").value;

    if (name === "" || email === "" || destination === "") {
        alert("Please fill out all fields.");
        return false;
    }

    alert("Booking successful!");
    return true;
}

// Destination Data Array
const destinations = [
    { name: "Paris, France", img: "https://assets.voxcity.com/uploads/blog_images/paris-blog-updated_original.jpg", description: "The city of love, art, and culture." },
    { name: "Kyoto, Japan", img: "https://media.istockphoto.com/id/1152106462/photo/architecture-in-tokyo.jpg?s=612x612&w=0&k=20&c=7JMzfszKhFzkRnwkvrR4R-_OsdDhFErc0te6BsSixVM=", description: "Experience the beauty of ancient temples and cherry blossoms." },
    { name: "Accra, Ghana", img: "https://grassroottours.com/wp-content/uploads/2019/05/IMG_5593-1-640x397.jpg", description: "Rich in history and culture, from Jamestown to Labadi Beach." },
    { name: "Rome, Italy", img: "https://media.architecturaldigest.com/photos/55f9e1e89bff6eeb3a241b96/1:1/w_426,h_426,c_limit/dam-images-daily-2015-08-roman-colosseum-roman-colosseum-italy-545.jpg", description: "Step into history with the Colosseum, Vatican City, and stunning piazzas." },
    { name: "New York, USA", img:"https://i.ytimg.com/vi/Ikr8XjPnia4/sddefault.jpg", description: "Explore Times Square, Broadway, and Central Park." },
    { name: "Dubai, UAE", img: "https://i0.wp.com/idol-man.blog/wp-content/uploads/2021/02/image-66.png?resize=329%2C493&ssl=1", description: "Luxury shopping, desert safaris, and the Burj Khalifa." },
    { name: "Cape Town, South Africa", img: "https://pix10.agoda.net/geo/poi/127278/575d676f979177dafbdf972c7b7fef0a.jpg?ca=10&ce=1&s=414x232&ar=16x9", description: "Breathtaking views from Table Mountain and the Cape of Good Hope." },
    { name: "Bali, Indonesia", img: "https://cdn5.travelconline.com/images/fit-in/0x500/filters:quality(75):strip_metadata():format(webp)/https%3A%2F%2Ftr2storage.blob.core.windows.net%2Fimagenes%2Fozm0ptft03TqxZAG7hG9AaxR.jpg", description: "Paradise on Earth, known for its stunning beaches and culture." },
    { name: "Santorini, Greece", img: "https://santorinidave.com/wp-content/uploads/2024/11/santorini-fira-where-to-stay.jpeg", description: "Famous for its whitewashed buildings and stunning sunset views." },
    { name: "Rio de Janeiro, Brazil", img: "https://www.thoughtco.com/thmb/S3YU2hCvC0z8lhnKFK8yYmUQ8H0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/christredeemer-10139156-567c92283df78ccc15684502.jpg", description: "Visit the iconic Christ the Redeemer statue and beautiful beaches." },
    { name: "Sydney, Australia", img: "https://annaeverywhere.com/wp-content/uploads/2017/04/Circular-Quay_Charlotte-Karp.jpg", description: "Home to the Sydney Opera House and Harbour Bridge." },
    { name: "Cairo, Egypt", img: "https://cdn.thecollector.com/wp-content/uploads/2024/07/history-cairo-monuments.jpg", description: "Discover the Great Pyramids of Giza and the ancient Sphinx." },
    { name: "Amsterdam, Netherlands", img: "https://cdn.audleytravel.com/1050/749/79/15985180-canal-cruise-in-amsterdam-netherlands.webp", description: "Experience the city's iconic canals and historic architecture." },
    { name: "Toronto, Canada", img: "https://as1.ftcdn.net/v2/jpg/02/09/58/58/1000_F_209585829_NSOqdMwXdO5Q0zsqJyAWzuFSQ69WGlSU.jpg", description: "Visit the CN Tower and the vibrant multicultural city." },
    { name: "Machu Picchu, Peru", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/800px-Machu_Picchu%2C_Peru.jpg", description: "Explore the breathtaking Incan ruins high in the Andes Mountains." },
    { name: "Venice, Italy", img: "https://cdn.britannica.com/62/153462-050-3D4F41AF/Grand-Canal-Venice.jpg", description: "Navigate the romantic canals on a gondola ride." },
    { name: "Bangkok, Thailand", img: "https://dntour.vn/uploads/images/6-bangkok.jpg", description: "Discover stunning temples, bustling markets, and vibrant nightlife." },
    { name: "Barcelona, Spain", img: "https://www.berlinsbi.com/uploads/sites/2/2023/06/web-banner-barcelona.jpg?w=1854&h=1043&crop=1", description: "Explore Gaudi’s stunning architecture, including the Sagrada Familia." }
];

// Function to Load Destinations Dynamically
function loadDestinations() {
    let destinationSection = document.getElementById("destinations");
    destinationSection.innerHTML = ""; // Clear previous content

    destinations.forEach(destination => {
        let card = document.createElement("div");
        card.classList.add("destination-card");

        card.innerHTML = `
            <h3>${destination.name}</h3>
            <img src="${destination.img}" alt="${destination.name}">
            <p>${destination.description}</p>
            <button onclick="saveFavorite('${destination.name}')">Save to Favorites</button>
            <button class="book-now" onclick="goToBooking('${destination.name}')">Book Now</button>
        `;

        destinationSection.appendChild(card);
    });
}

// Function to Redirect to Booking Page
function goToBooking(destinationName) {
    window.location.href = `booking.html?destination=${encodeURIComponent(destinationName)}`;
}

// Load destinations on page load
document.addEventListener("DOMContentLoaded", loadDestinations);

// Function to Save Favorite Destination
function saveFavorite(destination) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.includes(destination)) {
        favorites.push(destination);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        alert(`${destination} has been added to your favorites!`);
    } else {
        alert(`${destination} is already in your favorites.`);
    }
}

// Function to Filter Destinations
function filterDestinations() {
    let input = document.getElementById("destinationSearch").value.toLowerCase();
    let cards = document.querySelectorAll(".destination-card");

    cards.forEach(card => {
        let title = card.querySelector("h3").textContent.toLowerCase();
        card.style.display = title.includes(input) ? "block" : "none";
    });
}


// Travel Tips Data Array
const travelTips = [
    { 
        title: "Packing Essentials", 
        img: "https://publish.purewow.net/wp-content/uploads/sites/2/2019/08/International-Travel-Packing-List-uni.jpg?fit=2050%2C1100",
        description: "Pack light, bring essential documents, and use packing cubes for organization."
    },
    { 
        title: "Budget Travel Tips", 
        img: "https://heymondo.com/blog/wp-content/uploads/2022/03/10_tips_to-travel-on-a-budget.jpg.webp",
        description: "Use flight comparison websites, book in advance, and travel during the off-season."
    },
    { 
        title: "Safety & Health", 
        img: "https://www.chase.com/content/dam/unified-assets/photography/articles/credit-card/basics/seo_chase-sapphire-travel-insurance-guide_113023.jpg",
        description: "Keep copies of important documents, be aware of your surroundings, and get travel insurance."
    },
    { 
        title: "Stay Connected", 
        img: "https://play-lh.googleusercontent.com/CBF2OX2bf7AND3NxvwxQqWOPizPTtAVR4ydpazER_CT7Ex35Q22NNSpClIzeQEgenyg",
        description: "Get a local SIM card or portable WiFi to avoid high roaming charges."
    },
    { 
        title: "Learn Basic Local Phrases", 
        img: "https://duagency.com/wp-content/uploads/2019/10/bigstock-translation-business-and-tec-271224799-1024x683.jpg",
        description: "Knowing simple phrases like 'Hello' and 'Thank you' in the local language enhances interactions."
    },
    { 
        title: "Travel Light", 
        img: "https://www.scti.com.au/-/media/project/scti/nz/images/travel-advice/ultimate-travel-packing-list/ultimate-travel-packing-checklist-450x338.jpg",
        description: "Choose multi-purpose clothing, avoid overpacking, and use a carry-on when possible."
    },
    { 
        title: "Use Public Transportation", 
        img: "https://cdn.vox-cdn.com/thumbor/7tA9E3eLFs_ojWbCzNYEimCeEx4=/0x0:1599x1146/1200x800/filters:focal(673x446:927x700)/cdn.vox-cdn.com/uploads/chorus_image/image/54927363/LA_Metro_200_bus_stop_on_Alvarado_Street.0.jpg",
        description: "Buses, trains, and metro systems are often cheaper and give a more local experience."
    },
    { 
        title: "Respect Local Customs", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQESsWj5mvhVcN_cqz93kLoBajIkQr3SsauBw&s",
        description: "Research cultural norms and dress codes before visiting a country."
    },
    { 
        title: "Keep Your Valuables Safe", 
        img: "https://cdn1.matadornetwork.com/blogs/1/2022/02/How-to-protect-your-valuables-when-traveling-money-passports.jpg",
        description: "Use a money belt or a hidden pouch to keep cash, cards, and passports secure."
    },
    { 
        title: "Try Local Food", 
        img: "https://i.pinimg.com/736x/89/33/75/8933758210a93984b11bd99b358d39c7.jpg",
        description: "Eat where locals eat to experience authentic cuisine and save money."
    },
    { 
        title: "Stay Hydrated", 
        img: "https://newsnetwork.mayoclinic.org/n7-mcnn/7bcc9724adf7b803/uploads/2018/08/woman-drinking-out-of-a-water-bottle-after-exercising-staying-hydrated-16x9.jpg",
        description: "Drink plenty of water, especially in hot climates, to avoid dehydration."
    },
    { 
        title: "Plan But Be Flexible", 
        img: "https://fierceinc.com/wp-content/uploads/2024/01/Blog-Banner-Template-8.png",
        description: "Have a plan but leave room for spontaneous adventures!"
    }
];

// Function to Load Travel Tips Dynamically
function loadTravelTips() {
    let tipsContainer = document.getElementById("tips-container");
    tipsContainer.innerHTML = ""; // Clear previous content

    travelTips.forEach(tip => {
        let tipCard = document.createElement("div");
        tipCard.classList.add("tip-card");

        tipCard.innerHTML = `
            <img src="${tip.img}" alt="${tip.title}">
            <div class="tip-content">
                <h2>${tip.title}</h2>
                <p>${tip.description}</p>
            </div>
        `;

        tipsContainer.appendChild(tipCard);
    });
}

// Load travel tips on page load
document.addEventListener("DOMContentLoaded", loadTravelTips);


// Luxury & Adventure Experiences Data
const luxuryAdventures = [
    { 
        title: "African Safari – Serengeti, Tanzania", 
        img: "https://encloseafricasafaris.com/wp-content/uploads/2020/09/126.jpg",
        description: "Witness the Great Migration and enjoy luxury lodges in the Serengeti National Park."
    },
    { 
        title: "Private Overwater Villa – Maldives", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc50G1LOTBxgkIAaDSMhegQ_aTLq_4VT6rUQ&s",
        description: "Experience ultimate relaxation in a private overwater bungalow with crystal-clear waters."
    },
    { 
        title: "Hot Air Balloon Ride – Cappadocia, Turkey", 
        img: "https://www.planetware.com/wpimages/2023/05/turkey-cappadocia-hot-air-ballooning-complete-guide-intro-paragraph-balloons.jpg",
        description: "Float above the stunning rock formations of Cappadocia at sunrise."
    },
    { 
        title: "Luxury Train Journey – Venice Simplon-Orient-Express", 
        img: "https://i.pinimg.com/736x/0d/56/02/0d56022ffcddd10728cee2dc2976da81.jpg",
        description: "Travel in opulence aboard the world's most luxurious train from Paris to Venice."
    },
    { 
        title: "Diving with Great White Sharks – South Africa", 
        img: "https://i0.wp.com/www.wildvoyager.com/wp-content/uploads/2021/05/shark.jpg?fit=1800%2C600&ssl=1",
        description: "Experience the thrill of cage diving with great white sharks in Gansbaai, South Africa."
    },
    { 
        title: "Aurora Borealis Expedition – Lapland, Finland", 
        img: "https://www.travelandleisure.com/thmb/43OcjS_sHETV6BtYc_ItwUKmOEE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-aurora-pyramids-northern-lights-FINLAPLAND0424-202f9a41a8974d76842024b020a9d5eb.jpg",
        description: "Stay in a glass igloo and witness the magical Northern Lights in Lapland."
    },
    { 
        title: "Luxury Yacht Cruise – French Riviera", 
        img: "https://image.yachtcharterfleet.com/w336/h234/qh/cs149-86-1557-1089/od-1/k9f67cb73/vessel/resource/1109549/charter-aquarius-yacht.jpg",
        description: "Sail through the Mediterranean in a private yacht along the French Riviera."
    },
    { 
        title: "Trekking to Everest Base Camp – Nepal", 
        img: "https://www.adventurewhitemountain.com/uploads/img/1644228268-everest-base-camp-trek-in-nepal.jpg",
        description: "Embark on the adventure of a lifetime trekking to the base of Mount Everest."
    },
    { 
        title: "Glacier Hiking & Ice Caves – Iceland", 
        img: "https://res.cloudinary.com/itb-database/image/upload/s--BXjaAiIZ--/c_fill,dpr_auto,f_auto,q_auto:eco,w_1470/v1/ServiceProviders/44665e5b71deaacd1e88c13d3a43e393",
        description: "Explore stunning ice caves and hike on glaciers in Iceland’s breathtaking landscapes."
    },
    { 
        title: "Luxury Safari in Botswana", 
        img: "https://artofsafari.travel/wp-content/uploads/2016/12/Botswana_OkavangoDelta_andBeyondSandibe_Wildlife_GuestArea6.jpg",
        description: "Witness the Big Five in Botswana’s Okavango Delta with top-tier luxury lodges."
    },
    { 
        title: "Exploring Petra – Jordan", 
        img: "https://m.economictimes.com/thumb/msid-63249335,width-1600,height-900,resizemode-4,imgsize-63886/jordans-petra-a-keeper-of-secrets.jpg",
        description: "Discover the ancient city of Petra, one of the New Seven Wonders of the World."
    },
    { 
        title: "Helicopter Tour Over the Grand Canyon – USA", 
        img: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/10/01/b2/29.jpg",
        description: "Experience the Grand Canyon from above with a private helicopter tour."
    }
];

// Function to Load Luxury & Adventure Experiences Dynamically
function loadLuxuryAdventures() {
    let adventureSection = document.getElementById("luxury-adventures");
    adventureSection.innerHTML = ""; // Clear previous content

    luxuryAdventures.forEach(exp => {
        let card = document.createElement("div");
        card.classList.add("adventure-card");

        card.innerHTML = `
            <img src="${exp.img}" alt="${exp.title}">
            <div class="adventure-content">
                <h2>${exp.title}</h2>
                <p>${exp.description}</p>
            </div>
        `;

        adventureSection.appendChild(card);
    });
}

// Load adventures on page load
document.addEventListener("DOMContentLoaded", loadLuxuryAdventures);


// Travel Stories Data
const travelStories = [
    { 
        title: "Lost in the Streets of Marrakech", 
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/9f/11/0a/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_8e5215ef0ffaccc19ef9",
        description: "A journey through the vibrant souks and hidden gems of Marrakech."
    },
    { 
        title: "Solo Backpacking Through Thailand", 
        img: "https://www.travelzoo.com/images/tzoo.13733.0.1101855.BackpackingThailand-iStock-638886256.jpg",
        description: "Exploring Thailand’s stunning beaches, street food, and local culture."
    },
    { 
        title: "Hiking the Inca Trail to Machu Picchu", 
        img: "https://www.tierrasvivas.com/img/inca-trail-05-051.jpg",
        description: "An unforgettable trek through ancient ruins and breathtaking mountains."
    },
    { 
        title: "Northern Lights in Norway", 
        img: "https://www.originaltravel.co.uk/travel-blog/ShowPhoto/3413/0",
        description: "Chasing the magical Aurora Borealis in Norway’s winter wonderland."
    },
    { 
        title: "Scuba Diving in the Great Barrier Reef", 
        img: "https://checkyeti.imgix.net/images/prod/products/14948/guided-dives-on-the-great-barrier-reef-for-certified-divers-passions-of-paradise-hero1.jpg",
        description: "Discovering an underwater paradise filled with marine life and corals."
    },
    { 
        title: "Road Trip Across the USA", 
        img: "https://imageio.forbes.com/specials-images/imageserve/5eea8d466ef66b00061158cd/Women-reading-map-in-convertible-on-remote-road/0x0.jpg?format=jpg&crop=1466,978,x2,y0,safe&width=960",
        description: "A coast-to-coast adventure through America’s most scenic highways."
    }
];

// Function to Load Travel Stories Dynamically
function loadTravelStories() {
    let storiesSection = document.getElementById("travel-stories");
    storiesSection.innerHTML = ""; // Clear previous content

    travelStories.forEach(story => {
        let card = document.createElement("div");
        card.classList.add("story-card");

        card.innerHTML = `
            <img src="${story.img}" alt="${story.title}">
            <div class="story-content">
                <h2>${story.title}</h2>
                <p>${story.description}</p>
            </div>
        `;

        storiesSection.appendChild(card);
    });
}

// Load stories on page load
document.addEventListener("DOMContentLoaded", loadTravelStories);


// Best Travel Deals Data
const travelDeals = [
    { 
        title: "Luxury Maldives Getaway – 7 Nights", 
        img: "https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2023/06/best-hotels-resorts-maldives.jpg?fit=1280%2C720&ssl=1",
        price: "$4,999 per person",
        description: "Enjoy 7 nights in a private overwater villa with all-inclusive dining and spa access.",
        discount: "Limited Time: Save 20%"
    },
    { 
        title: "Paris & Rome Explorer – 10 Days", 
        img: "https://a.storyblok.com/f/51678/1749x1000/fbf849e598/itinerary-hero-desktop-1-lprb.jpg/m/636x1000",
        price: "$3,499 per person",
        description: "A breathtaking journey through Paris and Rome with guided city tours and fine dining.",
        discount: "Exclusive: Free Eiffel Tower Dinner"
    },
    { 
        title: "African Safari Adventure – 6 Nights", 
        img: "https://cdn.prod.website-files.com/636e23f049cf12406b2feccd/638c37b45b1f46336207e184_elephant-game-drive-south-africa.jpeg",
        price: "$5,299 per person",
        description: "Explore the Serengeti with luxury tented camps and private wildlife safaris.",
        discount: "Early Booking: Free Hot Air Balloon Ride"
    },
    { 
        title: "Caribbean Cruise – 8 Nights", 
        img: "https://sailawaymagazine.com/wp-content/uploads/2024/06/DJI_0968-scaled.jpg",
        price: "$2,999 per person",
        description: "Set sail across the Caribbean with luxury suites, gourmet dining, and island excursions.",
        discount: "VIP Package: $500 Onboard Credit"
    },
    { 
        title: "Santorini & Mykonos Retreat – 7 Nights", 
        img: "https://res.cloudinary.com/zicasso/image/fetch/ar_1.8,c_fill,g_north,w_412/e_sharpen:70/f_auto/https://images.zicasso.com/4f360dabd8f3ce40653892b52a5a1ede.jpg",
        price: "$4,299 per person",
        description: "Stay in cliffside luxury resorts with breathtaking views of the Greek Islands.",
        discount: "Special Offer: Free Wine Tasting Tour"
    },
    { 
        title: "Tokyo & Kyoto Luxury Tour – 9 Nights", 
        img: "https://saudiarabiatours.net/wp-content/uploads/2023/03/s-korea-and-japan-edited.jpg",
        price: "$4,799 per person",
        description: "Explore Japan's ancient temples and futuristic cities with 5-star accommodations.",
        discount: "VIP Experience: Private Tea Ceremony Included"
    },
    { 
        title: "Dubai Desert Escape – 5 Nights", 
        img: "https://skylandtourism.com/wp-content/uploads/2019/08/Royal.jpg",
        price: "$3,199 per person",
        description: "Experience luxury in the desert with private dune safaris and 7-star hotel stays.",
        discount: "Bonus: Free Skydiving Experience"
    },
    { 
        title: "Bali Private Villa & Spa – 10 Nights", 
        img: "https://images.trvl-media.com/lodging/12000000/11970000/11968400/11968368/38f354be.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
        price: "$3,599 per person",
        description: "A peaceful retreat in a private Bali villa with daily spa treatments and ocean views.",
        discount: "Exclusive: Free Private Chef for One Night"
    },
    { 
        title: "Machu Picchu Luxury Expedition – 6 Nights", 
        img: "https://www.redsavannah.com/-/media/countries/peru/accommodation/inkaterra-machu-picchu-pueblo/peru---inkaterra-machu-picchu-pueblo---evening.jpg",
        price: "$4,099 per person",
        description: "Explore the ancient ruins of Machu Picchu with luxury lodges and private guides.",
        discount: "Limited Deal: Free Train Upgrade to First Class"
    },
    { 
        title: "Antarctica Cruise Expedition – 14 Nights", 
        img: "https://content.api.news/v3/images/bin/c63dc30299e88d581c67babeef801e15",
        price: "$9,999 per person",
        description: "Sail through the frozen landscapes of Antarctica with expert-led wildlife tours.",
        discount: "Special Offer: Complimentary Iceberg Kayaking Experience"
    },
    { 
        title: "Venice & Amalfi Coast Tour – 8 Nights", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN_aT8P43nVILx5ZWbO6ufv8rEzJB_ZyiB_w&s",
        price: "$4,499 per person",
        description: "Discover Italy’s most beautiful coastal destinations in unmatched luxury.",
        discount: "VIP Deal: Private Gondola Ride in Venice"
    },
    { 
        title: "Norwegian Fjords Adventure – 7 Nights", 
        img: "https://i0.wp.com/usturiunluxurytravel.com/wp-content/uploads/2024/01/Eco-Friendly-Thrills-Norways-Fjords-Driving-Adventure-with-Luxury-Stays-1.jpg?resize=1024%2C410&ssl=1",
        price: "$3,899 per person",
        description: "Cruise through breathtaking fjords with exclusive excursions and fine dining.",
        discount: "Early Bird: Free Helicopter Tour Over the Fjords"
    }
];

// Function to Load Travel Deals Dynamically
function loadTravelDeals() {
    let dealsSection = document.getElementById("travel-deals");
    dealsSection.innerHTML = ""; // Clear previous content

    travelDeals.forEach(deal => {
        let dealCard = document.createElement("div");
        dealCard.classList.add("deal-card");

        dealCard.innerHTML = `
            <img src="${deal.img}" alt="${deal.title}">
            <div class="deal-content">
                <h2>${deal.title}</h2>
                <p><strong>Price:</strong> ${deal.price}</p>
                <p>${deal.description}</p>
                <p class="discount">${deal.discount}</p>
                <button onclick="bookDeal('${deal.title}')">Book Now</button>
            </div>
        `;

        dealsSection.appendChild(dealCard);
    });
}

// Function to Handle Booking
function bookDeal(dealName) {
    document.getElementById("selected-deal").value = dealName;
    window.scrollTo({ top: document.getElementById("booking-form").offsetTop, behavior: "smooth" });
}

// Load deals on page load
document.addEventListener("DOMContentLoaded", loadTravelDeals);
