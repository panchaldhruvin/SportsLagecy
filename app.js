const sportsData = [
    {
        name: "Football",
        icon: "⚽",
        category: "Team Sport",
        description: "The world's most popular sport, played between two teams of eleven players with a spherical ball. It captures the imagination of billions worldwide through its simplicity and drama.",
        origin: "19th Century, England",
        
        players: "11 per team",
        duration: "90 Minutes",
        rules: "Players cannot use hands (except keepers). Goals are scored by putting the ball in the net. Offside and foul rules regulate play.",
        equipment: ["Football", "Boots", "Shin guards", "Jersey"],
        tournaments: ["FIFA World Cup", "UEFA Champions League", "Copa América"],
        legends: ["Pelé", "Diego Maradona", "Lionel Messi", "Cristiano Ronaldo"],
        fact: "The first ever international football match was played between Scotland and England in 1872."
    },
    {
        name: "Cricket",
        icon: "🏏",
        category: "Bat-and-ball Sport",
        description: "A strategic game played with a bat and ball on a field with a 22-yard pitch. It is a religion in many countries like India, Australia, and England.",
        origin: "16th Century, SE England",
        players: "11 per team",
        duration: "3 hours to 5 days",
        rules: "The batting side tries to score runs, while the bowling side tries to dismiss them. Various ways to get 'out' include bowled, caught, and LBW.",
        equipment: ["Cricket bat", "Leather ball", "Wickets", "Pads", "Helmet"],
        tournaments: ["ICC World Cup", "The Ashes", "Indian Premier League (IPL)"],
        legends: ["Don Bradman", "Sachin Tendulkar", "Shane Warne", "Viv Richards"],
        fact: "The longest cricket match in history lasted 12 days and ended in a draw."
    },
    {
        name: "Basketball",
        icon: "🏀",
        category: "Team Sport",
        description: "A fast-paced game played on a rectangular court where teams compete to shoot a ball through a hoop 10 feet high.",
        origin: "1891, USA",
        players: "5 per team",
        duration: "48 Minutes (NBA)",
        rules: "No travelling, no double dribbling. Points are awarded based on distance (2 or 3 points). Shot clock limits possession time.",
        equipment: ["Basketball", "Hoop", "Backboard", "High-top shoes"],
        tournaments: ["NBA Finals", "Olympic Basketball", "EuroLeague"],
        legends: ["Michael Jordan", "LeBron James", "Kobe Bryant", "Magic Johnson"],
        fact: "Basketball was originally played with a soccer ball and peach baskets as goals."
    },
    {
        name: "Tennis",
        icon: "🎾",
        category: "Racket Sport",
        description: "An elegant sport played individually or in pairs, involving hitting a ball over a net with a racket into the opponent's court.",
        origin: "12th Century, France",
        players: "1 or 2 per side",
        duration: "Variable (Sets)",
        rules: "Ball must land within boundaries. One bounce allowed. Scoring goes 15, 30, 40, Game. Must win by two points in deuce.",
        equipment: ["Racket", "Tennis ball", "Net", "Wristbands"],
        tournaments: ["Wimbledon", "Roland Garros", "US Open", "Australian Open"],
        legends: ["Roger Federer", "Serena Williams", "Rafael Nadal", "Novak Djokovic"],
        fact: "The shortest tennis match in history lasted only 20 minutes."
    },
    {
        name: "Formula 1",
        icon: "🏎️",
        category: "Motorsport",
        description: "The pinnacle of motorsport, featuring the world's most advanced cars racing on purpose-built tracks and street circuits.",
        origin: "1950, Europe",
        players: "20 Drivers",
        duration: "90-120 Minutes",
        rules: "Drivers compete over a series of laps. Points awarded for top 10 finishers. Pit stops allowed for tires and repairs.",
        equipment: ["F1 Car", "Helmet", "Racing suit", "HANS device"],
        tournaments: ["Monaco Grand Prix", "British Grand Prix", "World Championship"],
        legends: ["Michael Schumacher", "Ayrton Senna", "Lewis Hamilton", "Niki Lauda"],
        fact: "An F1 driver loses about 3-4kg of body weight during a single race due to G-forces."
    },
    {
        name: "Rugby",
        icon: "🏉",
        category: "Team Sport",
        description: "A high-intensity contact sport where players carry an oval ball and attempt to score tries by grounding it in the opponent's end zone.",
        origin: "1823, England",
        players: "15 per team (Union)",
        duration: "80 Minutes",
        rules: "No forward passing. Tackling allowed. Tries are worth 5 points, conversions 2, and penalties 3.",
        equipment: ["Rugby ball", "Mouthguard", "Studded boots"],
        tournaments: ["Rugby World Cup", "Six Nations", "The Rugby Championship"],
        legends: ["Jonah Lomu", "Richie McCaw", "Dan Carter", "Bryan Habana"],
        fact: "The Rugby World Cup trophy is known as the Webb Ellis Cup."
    },
    {
        name: "Golf",
        icon: "⛳",
        category: "Individual Sport",
        description: "A precision sport where players use various clubs to hit a ball into a series of holes in as few strokes as possible.",
        origin: "15th Century, Scotland",
        players: "Individual",
        duration: "4-5 hours per round",
        rules: "The player with the lowest score wins. Out of bounds results in penalties. Each hole has a 'Par' rating.",
        equipment: ["Golf clubs", "Golf ball", "Tee", "Golf bag"],
        tournaments: ["The Masters", "The Open Championship", "Ryder Cup"],
        legends: ["Tiger Woods", "Jack Nicklaus", "Arnold Palmer", "Ben Hogan"],
        fact: "Golf is the only sport to have been played on the moon (by Alan Shepard in 1971)."
    },
    {
        name: "Chess",
        icon: "♟️",
        category: "Mind Sport",
        description: "A strategic board game played between two players, often called the 'Game of Kings', requiring intense focus and calculation.",
        origin: "6th Century, India",
        players: "2 Players",
        duration: "Minutes to Hours",
        rules: "Each piece (King, Queen, Rook, etc.) moves differently. Objective is to 'checkmate' the opponent's King.",
        equipment: ["Chess board", "32 Chess pieces", "Chess clock"],
        tournaments: ["World Chess Championship", "Chess Olympiad", "Tata Steel Chess"],
        legends: ["Magnus Carlsen", "Garry Kasparov", "Bobby Fischer", "Judit Polgár"],
        fact: "The number of possible ways of playing the first four moves for both sides in a game of chess is over 318 billion."
    },
    {
        name: "MMA",
        icon: "🥋",
        category: "Combat Sport",
        description: "Mixed Martial Arts is an intense full-contact combat sport that allows striking and grappling using techniques from various martial arts.",
        origin: "Ancient Greece / Modern USA",
        players: "2 Competitors",
        duration: "3-5 Rounds (5 mins each)",
        rules: "Winning via knockout, submission, or judge decision. Bites, eye gouges, and groin strikes are strictly prohibited.",
        equipment: ["MMA gloves", "Mouthguard", "Octagon (Cage)"],
        tournaments: ["UFC Pay-Per-Views", "PFL Championship", "Bellator Events"],
        legends: ["Anderson Silva", "Georges St-Pierre", "Jon Jones", "Khabib Nurmagomedov"],
        fact: "The first UFC event was held in 1993 and was originally intended to find the most effective martial art."
    },
    {
        name: "Boxing",
        icon: "🥊",
        category: "Combat Sport",
        description: "The 'Sweet Science' of combat, where two athletes wearing protective gloves throw punches at each other for a predetermined set of time.",
        origin: "600 BC, Ancient Greece",
        players: "2 Competitors",
        duration: "10-12 Rounds (3 mins each)",
        rules: "No hitting below the belt or behind the head. Falling down results in a 10-count. Win by KO, TKO, or Decision.",
        equipment: ["Boxing gloves", "Hand wraps", "Mouthguard", "Headgear"],
        tournaments: ["World Championship Fights", "Olympic Boxing"],
        legends: ["Muhammad Ali", "Mike Tyson", "Sugar Ray Robinson", "Floyd Mayweather"],
        fact: "The ring is actually square, but it's called a ring because boxing matches used to be held in a circle formed by spectators."
    },
    {
        name: "Volleyball",
        icon: "🏐",
        category: "Team Sport",
        description: "A game played by two teams on a court divided by a high net, where players use their hands to hit a ball back and forth.",
        origin: "1895, USA",
        players: "6 per team (Indoor)",
        duration: "Variable (Sets)",
        rules: "Maximum 3 hits per side. Ball cannot touch the floor on your side. Points won on every rally (Rally Scoring).",
        equipment: ["Volleyball", "Net", "Knee pads", "Court"],
        tournaments: ["FIVB World Championship", "Olympic Volleyball"],
        legends: ["Karch Kiraly", "Giba", "Sheilla Castro", "Misty May-Treanor"],
        fact: "Volleyball was originally called 'Mintonette' when it was first invented."
    },
    {
        name: "Swimming",
        icon: "🏊",
        category: "Water Sport",
        description: "An individual or team racing sport that requires the use of one's entire body to move through water in various strokes.",
        origin: "Prehistoric times",
        players: "Individual / Relay",
        duration: "Seconds to Minutes",
        rules: "Must start with a dive (except backstroke). Touch wall with hands on turns. Different rules for Butterfly, Breaststroke, etc.",
        equipment: ["Swimsuit", "Goggles", "Swim cap", "Starting blocks"],
        tournaments: ["FINA World Championships", "Summer Olympics"],
        legends: ["Michael Phelps", "Ian Thorpe", "Katie Ledecky", "Mark Spitz"],
        fact: "The oldest known swimming technique is the breaststroke, which dates back over 10,000 years."
    },
    {
        name: "Baseball",
        icon: "⚾",
        category: "Bat-and-ball Sport",
        description: "A cherished pastime involving two teams taking turns batting and fielding, aiming to score runs by hitting a ball and running around four bases.",
        origin: "18th Century, USA / UK",
        players: "9 per team",
        duration: "Approx. 3 hours",
        rules: "Three strikes and you're out. Four balls for a walk. Nine innings per game. Score by completing a circuit of the bases.",
        equipment: ["Baseball bat", "Baseball", "Gloves", "Batting helmet"],
        tournaments: ["World Series (MLB)", "World Baseball Classic"],
        legends: ["Babe Ruth", "Jackie Robinson", "Hank Aaron", "Barry Bonds"],
        fact: "The shortest MLB game in history lasted only 51 minutes (1919)."
    },
    {
        name: "Athletics",
        icon: "🏃",
        category: "Individual Sport",
        description: "A collection of sporting events that involve competitive running, jumping, throwing, and walking.",
        origin: "776 BC, Ancient Greece",
        players: "Individual",
        duration: "Seconds to Hours",
        rules: "Varies by event (e.g., false starts in sprints, foot faults in jumps). The fastest or furthest wins.",
        equipment: ["Running spikes", "Baton (Relay)", "Discus/Javelin", "Blocks"],
        tournaments: ["Summer Olympics", "World Athletics Championships"],
        legends: ["Usain Bolt", "Carl Lewis", "Florence Griffith-Joyner", "Jesse Owens"],
        fact: "Usain Bolt holds the world record for the 100m sprint at 9.58 seconds."
    },
    {
        name: "Table Tennis",
        icon: "🏓",
        category: "Racket Sport",
        description: "A high-speed game played on a table divided by a net, where players hit a lightweight ball back and forth using small rackets.",
        origin: "19th Century, England",
        players: "1 or 2 per side",
        duration: "30-60 Minutes",
        rules: "First to 11 points wins a set. Ball must alternate sides. Service alternates every 2 points.",
        equipment: ["TT Racket (Paddle)", "TT Ball", "Net", "Table"],
        tournaments: ["World Table Tennis Championships", "World Cup"],
        legends: ["Ma Long", "Jan-Ove Waldner", "Deng Yaping", "Zhang Jike"],
        fact: "The ball can reach speeds of over 100 km/h during intense rallies."
    },
    {
        name: "Cycling",
        icon: "🚲",
        category: "Endurance Sport",
        description: "The competitive use of bicycles for racing, encompassing various disciplines like road racing, mountain biking, and track cycling.",
        origin: "19th Century, Europe",
        players: "Individual / Team",
        duration: "Minutes to Days (Stages)",
        rules: "Drafting is often allowed. First across the finish line wins. Tactics play a huge role in team-based road races.",
        equipment: ["Racing bike", "Helmet", "Cycling shoes", "Lycra"],
        tournaments: ["Tour de France", "Giro d'Italia", "UCI World Championships"],
        legends: ["Eddy Merckx", "Chris Froome", "Marianne Vos", "Tadej Pogačar"],
        fact: "The Tour de France covers approximately 3,500 kilometers over 21 stages."
    }
];

// DOM Elements
const searchInput = document.getElementById('sportSearch');
const searchBtn = document.getElementById('searchBtn');
const resultsSection = document.getElementById('resultsSection');
const welcomeSection = document.getElementById('welcomeSection');
const notFound = document.getElementById('notFound');
const sportsMenuGrid = document.getElementById('sportsMenuGrid');
const backBtn = document.getElementById('backBtn'); // BACK BUTTON ELEMENT ADDED

// Display Elements
const sportNameDisplay = document.getElementById('sportNameDisplay');
const sportCategory = document.getElementById('sportCategory');
const sportDesc = document.getElementById('sportDesc');
const sportOrigin = document.getElementById('sportOrigin');
const sportPlayers = document.getElementById('sportPlayers');
const sportDuration = document.getElementById('sportDuration');
const sportRules = document.getElementById('sportRules');
const sportEquipment = document.getElementById('sportEquipment');
const sportTournaments = document.getElementById('sportTournaments');
const sportLegends = document.getElementById('sportLegends');
const sportFact = document.getElementById('sportFact');

function searchSport(query) {
    if (!query) return;
    const sport = sportsData.find(s => s.name.toLowerCase().includes(query.toLowerCase()));
    if (sport) {
        displaySport(sport);
    } else {
        showError();
    }
}

function displaySport(sport) {
    welcomeSection.classList.add('hidden');
    notFound.classList.add('hidden');
    resultsSection.classList.remove('hidden');
    
    resultsSection.style.opacity = '0';
    setTimeout(() => { resultsSection.style.opacity = '1'; }, 50);

    sportNameDisplay.textContent = sport.name;
    sportCategory.textContent = sport.category;
    sportDesc.textContent = sport.description;
    sportOrigin.textContent = sport.origin;
    sportPlayers.textContent = sport.players;
    sportDuration.textContent = sport.duration;
    sportRules.textContent = sport.rules;
    sportFact.textContent = sport.fact;
    
    updateList(sportEquipment, sport.equipment);
    updateList(sportTournaments, sport.tournaments);
    updateList(sportLegends, sport.legends);

    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

function updateList(element, items) {
    element.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        element.appendChild(li);
    });
}

function showError() {
    welcomeSection.classList.add('hidden');
    resultsSection.classList.add('hidden');
    notFound.classList.remove('hidden');
}

function renderSportsMenu() {
    sportsMenuGrid.innerHTML = '';
    sportsData.forEach((sport, index) => {
        const card = document.createElement('div');
        card.className = 'sport-menu-card';
        card.style.animationDelay = `${index * 0.05}s`;
        
        card.innerHTML = `
            <span class="menu-card-icon">${sport.icon}</span>
            <h4>${sport.name}</h4>
            <span>${sport.category}</span>
        `;
        
        card.addEventListener('click', () => {
            displaySport(sport);
        });
        
        sportsMenuGrid.appendChild(card);
    });
}

// Initial Render
renderSportsMenu();

// Event Listeners
searchBtn.addEventListener('click', () => {
    searchSport(searchInput.value.trim());
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchSport(searchInput.value.trim());
    }
});

/* AI Chatbot Logic */
const chatbotToggle = document.getElementById('chatbotToggle');
const aiChatbot = document.getElementById('aiChatbot');
const closeChat = document.getElementById('closeChat');
const chatInput = document.getElementById('chatInput');
const sendChat = document.getElementById('sendChat');
const chatMessages = document.getElementById('chatMessages');

chatbotToggle.addEventListener('click', () => {
    aiChatbot.classList.toggle('hidden-bot');
});

closeChat.addEventListener('click', () => {
    aiChatbot.classList.add('hidden-bot');
});

function addMessage(text, isUser = false) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    msgDiv.textContent = text;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(input) {
    const query = input.toLowerCase();
    
    // Check if query matches any sport in the database
    const sport = sportsData.find(s => 
        query.includes(s.name.toLowerCase()) || 
        s.equipment.some(e => query.includes(e.toLowerCase()))
    );

    if (sport) {
        if (query.includes('legend') || query.includes('player') || query.includes('famous')) {
            return `Some legends of ${sport.name} include ${sport.legends.join(', ')}.`;
        }
        if (query.includes('rule') || query.includes('how to play')) {
            return `In ${sport.name}, ${sport.rules}`;
        }
        if (query.includes('fact')) {
            return `Did you know? ${sport.fact}`;
        }
        if (query.includes('tournament') || query.includes('cup') || query.includes('league')) {
            return `Major tournaments for ${sport.name} are ${sport.tournaments.join(', ')}.`;
        }
        return `${sport.name} is a ${sport.category}. ${sport.description}`;
    }

    // Generic sports responses
    if (query.includes('sport') || query.includes('game') || query.includes('play')) {
        return "I can help you with details about Football, Cricket, Basketball, Tennis, F1, Rugby, Golf, Chess, MMA, Boxing, Volleyball, Swimming, Baseball, Athletics, Table Tennis, and Cycling! What would you like to know?";
    }

    return "I'm specialized in sports knowledge. Please ask me about a specific sport, its rules, legends, or facts!";
}

function handleChat() {
    const text = chatInput.value.trim();
    if (!text) return;

    addMessage(text, true);
    chatInput.value = '';

    // Simulate bot thinking
    setTimeout(() => {
        const response = getBotResponse(text);
        addMessage(response);
    }, 600);
}

sendChat.addEventListener('click', handleChat);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleChat();
});

// Logo Click to return home
document.querySelector('.logo').addEventListener('click', () => {
    resultsSection.classList.add('hidden');
    notFound.classList.add('hidden');
    welcomeSection.classList.remove('hidden');
    searchInput.value = '';
});

// BACK BUTTON CLICK LOGIC ADDED
backBtn.addEventListener('click', () => {
    resultsSection.classList.add('hidden');
    notFound.classList.add('hidden');
    welcomeSection.classList.remove('hidden');
    searchInput.value = '';
});