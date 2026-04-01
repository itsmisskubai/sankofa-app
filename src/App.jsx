import { useState, useEffect } from "react";

// ─── CONSTANTS ────────────────────────────────────────────────────────────────
const TODAY = new Date().toLocaleDateString("en-CA");
const CAT = {
  "Folktale":          { badge: "#276749", badgeBg: "#e3f2eb", heroA: "#1B4332", heroB: "#52A875" },
  "Trade":             { badge: "#174B6B", badgeBg: "#dceef9", heroA: "#0f3651", heroB: "#2980B9" },
  "Architecture":      { badge: "#7A5C00", badgeBg: "#fdf3d0", heroA: "#4A3800", heroB: "#C49A17" },
  "Resistance":        { badge: "#8B2118", badgeBg: "#fde8e6", heroA: "#6B1A13", heroB: "#C0392B" },
  "Culture":           { badge: "#5E2090", badgeBg: "#f2e8fb", heroA: "#3D145C", heroB: "#8E44AD" },
  "Belief Systems":    { badge: "#0E6655", badgeBg: "#d9f0ea", heroA: "#084C3F", heroB: "#17A589" },
  "Political History": { badge: "#7A4B00", badgeBg: "#fef0d5", heroA: "#5C3400", heroB: "#C47A1A" },
};

// ─── STORIES ─────────────────────────────────────────────────────────────────
const STORIES = [
  {
    id: 1,
    date: "2026-04-01",
    category: "Folktale",
    region: "West Africa",
    period: "Ancient — still told today",
    title: "Why the Spider Owns the Stories",
    subtitle: "The Akan tale of how Anansi outsmarted the Sky God — and what that spider still carries",
    readingTime: "5 min",
    heroImage: "/images/anansi/anansi-hero.png",
    openingLine: "Every story in the world once belonged to someone else. This is how Anansi stole them all.",
    context: "The Akan people of present-day Ghana and Côte d'Ivoire are among the richest storytelling cultures on the continent. At the center of their world is Anansi — a spider who is small, patient, and endlessly clever. During the slave trade, Anansi stories crossed the Atlantic, taking root in the Caribbean and the American South as the trickster tradition. But the original stories were always about the same thing: how wit defeats power.",
    story: [
      "Long ago, all the stories in the world belonged to Nyame, the Sky God. He kept them locked away in a golden chest, and no one on earth could tell a story without his permission.",
      "Anansi the spider went to Nyame and asked to buy the stories.",
      "Nyame laughed. \"Others have tried. What can a small spider offer me for such a treasure?\"\n\"Name your price,\" said Anansi.",
      "Nyame set what seemed impossible: bring me Onini the python, Osebo the leopard, and the Mboro hornets — the three most dangerous creatures in the forest.",
      "Anansi went home and thought.",
      "For the python, he cut a long bamboo pole and walked through the forest muttering aloud: \"He's longer than the pole. No — the pole is longer. I simply cannot decide.\" Onini, who was extraordinarily vain, slithered over to prove himself. He stretched his full length against the pole — and Anansi tied him fast.",
      "For the hornets, he filled a gourd with water and poured it over himself in a light rain. Then he ran to a bush shouting: \"The rains have come! Find shelter!\" The hornets flew into the gourd — and Anansi stopped the opening with a leaf.",
      "For the leopard, he dug a deep pit, covered it with thin branches, and waited. Osebo fell in. \"I am trapped,\" the leopard growled. \"Help me out.\" Anansi lowered a vine — halfway — then tied it to a branch and walked away.",
      "He brought all three to Nyame.",
      "The Sky God was silent for a long moment. Then he opened the chest and gave Anansi every story in the world. And that is why, to this day, when the Akan people begin a tale, they say: we return these stories not to Nyame. We return them to Anansi."
    ],
    deeper: "The Anansi story is not entertainment. It is a survival philosophy.\n\nAnansi cannot fight Nyame directly. He cannot overpower a python, outrun a leopard, or outfly hornets. So he does something more durable than fighting: he thinks carefully, moves patiently, and turns each creature's vanity against itself.\n\nBut look at what he actually wants. Not food. Not safety. Not land. He wants the stories — which means he wants the power to shape meaning, to control how the world is understood and remembered. The man who owns the stories owns the culture.\n\nWhen enslaved Akan people carried Anansi across the Atlantic, they were not taking a children's tale for comfort. They were carrying a complete theory of resistance: that intelligence is available to anyone, regardless of what they're permitted to own, say, or carry. The trickster tradition that emerged in the Caribbean and American South — Brer Rabbit, Signifying Monkey, the countless clever folk heroes — is Anansi's lineage. It survived the Middle Passage because it was useful, not just beautiful.",
    matters: "Anansi is a philosophical position dressed as a spider. He insists that intelligence is a form of power available to anyone — regardless of size, status, or resources. This is why these stories outlasted empires and survived the worst destruction human beings have inflicted on each other. They described something true about how the powerless navigate the powerful, and they passed that skill across generations in a form no one could confiscate.",
    takeaways: [
      "Anansi stories originated with the Akan people of Ghana and Côte d'Ivoire and spread across the Atlantic during the slave trade, directly shaping Caribbean and African-American folk traditions.",
      "The tale encodes a full philosophy: intelligence defeats power, patience outperforms brute force, and narrative control is itself a form of sovereignty.",
      "Anansi's pursuit of \"the stories\" — not gold or land — is the key insight: whoever shapes how a culture understands itself holds a power that cannot be taken by force."
    ],
    reflection: "Think of a time you had less power than someone else in a situation. What did you reach for instead of force — and did it work?",
    visuals: [
  {
    icon: "🗺️",
    title: "The Akan Homeland",
    desc: "Present-day Ghana and Côte d'Ivoire — the birthplace of the Anansi tradition, a culture whose storytelling shaped diaspora communities across three continents.",
    image: "/images/anansi/akan-map.png"
  },
  {
    icon: "🕷️",
    title: "The Spider as Symbol",
    desc: "In Akan tradition, the spider is a weaver — of webs and of worlds. Its form is deliberate: patient, architectural, invisible until the trap is complete.",
    image: "/images/anansi/anansi-hero.png"
  },
  {
    icon: "🧵",
    title: "Kente Cloth",
    desc: "Akan weavers encode proverbs and histories into cloth patterns — another tradition of carrying deep meaning in plain sight, in a form anyone can see but only some can read.",
    image: "/images/anansi/kente-cloth.jpg"
  }
]
  },
  {
    id: 2,
    date: "2026-04-02",
    category: "Trade",
    region: "East Africa",
    period: "9th–16th Century CE",
    title: "The Coast That Traded With the World",
    subtitle: "How East African city-states built a civilization at the meeting point of Africa, Arabia, and Asia",
    readingTime: "6 min",
    heroImage: "/images/swahili/kilwa-hero.jpg",
    openingLine: "Before Europe \"discovered\" the sea routes to Asia, East African merchants had been running them for five hundred years.",
    context: "The Swahili Coast stretches roughly 1,800 miles along the eastern edge of Africa — from present-day Somalia through Kenya, Tanzania, and Mozambique. Between the 9th and 16th centuries, a string of city-states rose along this shore: Mombasa, Malindi, Kilwa, Sofala, Zanzibar. These were not fishing villages. They were sophisticated trading cities with stone architecture, complex governance, and economic connections that ran from the Chinese coast to the interior of Africa.",
    story: [
      "The ships came with the wind. The Indian Ocean monsoon is one of the most reliable weather systems on earth — blowing northeast from November to March, then reversing southwest from May to September. This seasonal conveyor belt made ocean travel predictable, and the people of the Swahili Coast had spent generations understanding it. They built their port infrastructure around it. They scheduled their markets, their inventories, their social calendar around it. The monsoon wasn't a force they adapted to — it was a system they used.",
      "What moved through these ports? Gold and ivory from the African interior. Copper and iron. Enslaved people, moving in multiple directions. Porcelain and silk from China. Glass beads from India. Cotton textiles from Arabia and Persia. The archaeological record of Kilwa — a city-state on the Tanzanian coast — contains shards of Chinese porcelain buried alongside local pottery, a physical record of a civilization at ease with the world.",
      "Ibn Battuta, the Moroccan scholar who traveled more of the known world in the 14th century than almost any person alive, arrived at Kilwa in 1331. He called it one of the most beautiful cities in the world. He described its courts, its governance, its generosity — the sultan gave food and alms to all who came.",
      "The Swahili language itself is a record of this convergence. Its grammatical structure is Bantu — rooted in the African interior. But its vocabulary carries deep borrowings from Arabic, Persian, and later Portuguese and English. It is a language built by centuries of trade and encounter. Not conquest — conversation.",
      "The Portuguese arrived in the late 15th century and changed the terms of everything. They didn't come to trade as equals. They came with cannons and the conviction that ocean commerce should flow through them. They bombarded port cities that refused to pay tribute. They disrupted trade networks that had operated for five hundred years. Kilwa was sacked in 1505. Mombasa was attacked multiple times. The cities that had been nodes in a planetary network gradually became peripheries of a European one."
    ],
    deeper: "What the Swahili Coast reveals is that the Indian Ocean world — which carried perhaps the largest volume of long-distance trade in human history before the 19th century — was not a European invention. It was a pre-existing system that Europeans disrupted, co-opted, and then claimed credit for opening.\n\nThe Swahili city-states were not passive recipients of outside contact. They were active builders of their own economic and cultural world. They built in coral stone. They governed through councils and sultanates. They produced a hybrid civilization that was genuinely new — neither purely African nor Arabian nor Asian, but something that emerged from centuries of contact and creative synthesis.\n\nThe word \"Swahili\" comes from the Arabic sawahil, meaning \"of the coast.\" But the people of the coast took that borrowed word and made it the name of a distinct identity — a language, a culture, a way of being in the world that belonged to no single origin.",
    matters: "The Swahili Coast dismantles the narrative of Africa as isolated from global exchange before European arrival. These cities were nodes in a planetary network, conducting sophisticated commerce with partners thousands of miles away. The Portuguese didn't open Africa to the world. They broke a system that was already running — and replaced it with one that extracted rather than exchanged.",
    takeaways: [
      "The Swahili Coast city-states (9th–16th century) were connected to the Indian Ocean trade network linking Africa with Arabia, India, Persia, and China — centuries before European contact.",
      "Ibn Battuta described Kilwa in 1331 as one of the most beautiful cities in the world — evidence of a thriving, sophisticated civilization operating at the center of global commerce.",
      "Portuguese arrival in the late 1400s deliberately dismantled a functioning 500-year trade system, replacing African-led exchange networks with European-controlled extraction."
    ],
    reflection: "What does it mean for a culture to be \"open to the world\"? And what is the difference between trade as exchange and trade as conquest?",
    visuals: [
  {
    icon: "🗺️",
    title: "The Swahili Coast",
    desc: "1,800 miles from Somalia to Mozambique — each port city a node in the Indian Ocean network, shaped by the monsoon winds that made regular, predictable trade voyages possible.",
    image: "/images/swahili/swahili-map.png"
  },
  {
    icon: "⛵",
    title: "The Monsoon System",
    desc: "The seasonal wind reversal that powered Indian Ocean trade — a natural infrastructure understood and exploited by Swahili merchants for centuries before any European ship appeared in these waters.",
    image: "/images/swahili/monsoon-map.jpg"
  },
  {
    icon: "🏛️",
    title: "Kilwa Kisiwani",
    desc: "The great stone ruins of Kilwa, Tanzania — a UNESCO World Heritage site, the city Ibn Battuta called one of the world's most beautiful, now slowly reclaimed by ocean and jungle.",
    image: "/images/swahili/kilwa-hero.jpg"
  }
]
  },
  {
    id: 3,
    date: "2026-04-03",
    category: "Architecture",
    region: "Southern Africa",
    period: "11th–15th Century CE",
    title: "The City They Said Africans Didn't Build",
    subtitle: "How Great Zimbabwe was erased, misattributed, and finally reclaimed",
    readingTime: "6 min",
    heroImage: "/images/zimbabwe/great-zimbabwe-hero.jpg",
    openingLine: "When European explorers arrived at the ruins, they looked at the walls and asked everyone except the people who lived there who had built them.",
    context: "Great Zimbabwe is a complex of stone enclosures in present-day Zimbabwe — built without mortar, with granite blocks fitted so precisely that sections of the wall have stood for nearly a thousand years. At its height it was the capital of a powerful trading empire, home to perhaps 18,000 people. The word \"Zimbabwe\" itself comes from the Shona dzimba dza mabwe — houses of stone. The modern country took its name from this place.",
    story: [
      "The walls of Great Zimbabwe rise nearly eleven meters in some places. The outer wall of the Great Enclosure — the largest ancient stone structure south of the Sahara — stretches 250 meters in circumference. There are no windows, no mortar, no architectural drawings that survive. The stone was quarried from local granite formations, shaped by hand, and laid in careful courses using a technique that required understanding of natural rock cleavage and the physics of weight distribution. These walls have not needed repair in nine hundred years.",
      "Inside the enclosures, archaeologists have found gold artifacts, Chinese porcelain, Arabian glass beads, and copper ingots — evidence of a civilization operating at the center of an intercontinental trade network. The Shona people who built it were part of the Mutapa state, trading gold and ivory along routes that connected them to the Swahili Coast and from there to the world.",
      "When the German geologist Karl Mauch arrived in 1871, he found the ruins and immediately began speculating about who had really built them. His theories included ancient Phoenicians, King Solomon, the Queen of Sheba. Anyone, essentially, except the ancestors of the Shona people standing around him.",
      "This was not casual ignorance. The colonial government of Rhodesia actively suppressed evidence of African origins. A man named Richard Hall was appointed as excavator in the late 1800s and methodically destroyed archaeological layers containing African artifacts — classifying them as contamination. A century of scholarship was corrupted at the source.",
      "The colonial state needed these ruins to belong to someone else. If Great Zimbabwe had been built by Africans, the central justification for colonialism — that Africans had no complex civilization and required European stewardship — collapsed.",
      "By the mid-20th century, the archaeological consensus was unambiguous: Great Zimbabwe was built by the ancestors of the Shona people, beginning around the 11th century and flourishing in the 14th and 15th. When Zimbabwe achieved independence in 1980, the new government named the country after this place. That was not a coincidence. It was a declaration."
    ],
    deeper: "The denial of Great Zimbabwe is not primarily a story about archaeological confusion. It is a story about the politics of knowledge — about how systems of power produce the histories they need.\n\nColonialism required a particular past. Not just military control, but a story that made control seem natural, even generous. If Africa had produced complex stone cities before Europeans arrived, the story fell apart. So those cities had to be erased, or attributed to others, or kept out of the curriculum.\n\nThis pattern repeated across the continent: the Benin Bronzes described as \"surprisingly sophisticated.\" Ancient Egypt routinely severed from its African context. The Kingdom of Kush, the Mali Empire, the Kingdom of Aksum — rendered peripheral or invisible in curricula that centered European narratives.\n\nThe question Great Zimbabwe forces us to ask is not only who built these walls. It is: who decided we shouldn't know?",
    matters: "Great Zimbabwe stands as evidence that complex civilization, urban planning, and long-distance trade were not European introductions to Africa. They were already here. The sustained effort to deny this — and the institutions built to enforce that denial — is part of the same project as the slave trade and colonization: the erasure of African capacity as a precondition for exploitation.",
    takeaways: [
      "Great Zimbabwe was built by the Shona people between the 11th and 15th centuries — the largest ancient stone structure in sub-Saharan Africa, built without mortar and still standing.",
      "Colonial officials in Rhodesia actively destroyed archaeological evidence of African origins to protect the political narrative that Africans lacked the capacity for complex civilization.",
      "Zimbabwe named itself after these ruins upon independence in 1980 — a deliberate act of historical reclamation, restoring an erased identity to the center of national consciousness."
    ],
    reflection: "When a history is erased or deliberately distorted, what is actually being protected — and by whom? And who benefits when the correction is finally made?",
    visuals: [
  {
    icon: "🏗️",
    title: "The Great Enclosure",
    desc: "250 meters in circumference, walls up to 11 meters high — built without mortar, using precisely cut granite blocks. Still standing after nine hundred years.",
    image: "/images/zimbabwe/great-zimbabwe-hero.jpg"
  },
  {
    icon: "🗺️",
    title: "Southern Africa",
    desc: "The ruins sit in the Masvingo province of present-day Zimbabwe, in a valley between granite-rich hills — the very landscape that provided its building material.",
    image: "/images/zimbabwe/great-zimbabwe-aerial-2.jpg"
  },
  {
    icon: "⚱️",
    title: "The Trade Record",
    desc: "Chinese porcelain, Arabian glass, Persian beads, and gold artifacts found inside Great Zimbabwe — a physical inventory of a civilization connected to the Indian Ocean world.",
    image: "/images/zimbabwe/zimbabwe-bird.svg"
  }
]
  },
  {
    id: 4,
    date: "2026-04-04",
    category: "Resistance",
    region: "Central Africa",
    period: "17th Century CE",
    title: "The Queen Who Refused to Sit on the Floor",
    subtitle: "How Nzinga of Ndongo turned every encounter with Portugal into a statement of sovereignty",
    readingTime: "6 min",
    heroImage: "/images/nzinga/nzinga-hero.png",
    openingLine: "When the Portuguese governor refused to offer her a chair, she had one of her attendants kneel on all fours and sat on his back instead.",
    context: "The Kingdom of Ndongo occupied much of present-day Angola. By the early 17th century, the Portuguese had spent decades pressing against its borders — using military force, trade manipulation, and the slave trade to erode sovereignty. When Nzinga Mbande came to power around 1624, she inherited a kingdom under siege. She spent four decades refusing to surrender it.",
    story: [
      "The chair story is not legend. It happened during her first diplomatic mission to Luanda in 1622, when she was representing her brother, the king. The Portuguese governor — apparently believing that forcing her to sit on the floor would mark her as subordinate — offered no seat. Nzinga did not kneel. She turned, motioned to one of her attendants, who dropped to all fours. She sat on his back. For the duration of the meeting, that was her throne.",
      "This was not theater. It was a statement about the terms of negotiation: that she came as an equal, and she would be received as one, and if the room refused to recognize that, she would bring her own architecture of dignity.",
      "Throughout her reign, Nzinga fought on every available front. She converted to Christianity and took a Portuguese baptismal name — not out of genuine faith, but as a diplomatic credential. Christian framing gave her access to the language of European legitimacy; she could write to the Pope, engage Portuguese church officials, and operate within a framework Europeans were obligated to take seriously.",
      "She formed a strategic alliance with the Dutch East India Company, who were fighting Portugal across multiple continents and needed African partners with local knowledge. She offered them intelligence and access. They offered her military support.",
      "She opened her territory to escaped enslaved people and freedmen, building her forces partly from those the Portuguese considered lost property. She understood that the slave trade was the engine of Portuguese power in the region — and she attacked it at the source.",
      "When the Portuguese pushed her out of Ndongo, she moved east and captured the Kingdom of Matamba, making it her new base of operations. She fought military campaigns into her eighties. She outlived multiple Portuguese governors.",
      "She died in 1663 at approximately eighty years old, having converted back to Catholicism in her final years — possibly genuine, possibly one last diplomatic move — but never having formally surrendered her kingdom."
    ],
    deeper: "Nzinga represents a form of strategic intelligence that operated across multiple registers simultaneously. She was not simply a military commander. She was a code-switcher of the highest order — moving between Ndongo ceremonial tradition, Christian theological language, Portuguese diplomatic protocol, and Dutch military alliance as the situation demanded. Each framework was a tool. None was her master.\n\nWhat she understood — and what many of her contemporaries did not — is that the Portuguese were not an unstoppable force. They were a particular kind of power with specific weaknesses: overextended, commercially motivated, internally divided, and capable of being played against their European rivals.\n\nThe tragedy of her story is that this extraordinary strategic intelligence was deployed entirely in defense. She was not expanding. She was surviving. The fact that she survived for four decades against a colonial power with superior weapons and a seemingly bottomless supply of ships is, itself, a form of victory.",
    matters: "Nzinga is a masterclass in asymmetric resistance — in how to fight a vastly more powerful enemy using intelligence, adaptability, and the willingness to use the enemy's own tools against them. But her story is also a reminder that survival is not a consolation prize. In the conditions she operated under, outlasting the enemy long enough to die on your own terms is an act of profound defiance.",
    takeaways: [
      "Nzinga of Ndongo (c. 1583–1663) resisted Portuguese colonialism in present-day Angola for over four decades using military, diplomatic, and economic strategies simultaneously.",
      "Her conversions to Christianity and alliance with the Dutch were calculated tools — she used European systems against European interests, demonstrating a sophisticated understanding of colonial power structures.",
      "She built her military partly from escaped enslaved people, directly attacking the slave trade's logic and offering the continent's most marginalized people a reason to fight."
    ],
    reflection: "Nzinga used the enemy's language, religion, and alliances as weapons. What does it mean to operate fully within a system while resisting it — and where does strategy end and compromise begin?",
    visuals: [
  {
    icon: "🗺️",
    title: "The Kingdom of Ndongo",
    desc: "Present-day Angola — the territory Nzinga defended across four decades, and which she expanded through the capture of the Kingdom of Matamba after losing Ndongo's capital.",
    image: "/images/nzinga/ndongo-map.svg"
  },
  {
    icon: "👑",
    title: "Nzinga's Statue, Luanda",
    desc: "A monumental statue of Queen Nzinga stands today in central Luanda — erected after Angolan independence as a national symbol of resistance and self-determination.",
    image: "/images/nzinga/nzinga-statue.jpg"
  },
  {
    icon: "⚔️",
    title: "The Dutch Alliance",
    desc: "Nzinga's partnership with the VOC (Dutch East India Company) against Portugal — a geopolitical maneuver that exploited European rivalry for African strategic benefit.",
    image: "/images/nzinga/nzinga-hero.png"
  }
]
  },
  {
    id: 5,
    date: "2026-04-05",
    category: "Culture",
    region: "West Africa",
    period: "Ancient — present day",
    title: "The Memory of a People",
    subtitle: "What the griots carried across generations — and why it was more powerful than any written archive",
    readingTime: "5 min",
    heroImage: "/images/griot/kora-hero.jpg",
    openingLine: "In West Africa, they say: when an elder dies, a library burns. The griot's job was to make sure libraries didn't burn.",
    context: "The griot — called jeli in Manding languages — is a hereditary oral historian, musician, genealogist, and diplomat found across West Africa: in the Mali Empire, in Senegal, Gambia, Guinea-Bissau, Guinea, and beyond. The tradition is at least a thousand years old and was structurally embedded in the most important institutions of West African governance. Griots were not entertainers. They were the living memory of civilizations.",
    story: [
      "Every great ruler in the Mali Empire kept a griot. Not as decoration, but as necessity.",
      "The griot knew everything: the ruling family's genealogy going back fifteen or twenty generations, the details of every alliance and every betrayal, the names of warriors who distinguished themselves in battle, the exact terms of treaties with neighboring states, the appropriate songs for naming ceremonies and funerals and coronations, the proverbs that applied to specific crises. All of this existed in memory — trained, tested, and transmitted through oral apprenticeship from griot to griot across centuries.",
      "When Mansa Musa made his pilgrimage to Mecca in 1324, his griot traveled with him. When a dispute arose over territorial boundaries or royal lineage, the griot was called to testify. Their word carried legal weight. In a world without printing presses, the griot was the archive. And unlike a written document, the archive could walk into the room, read the situation, and respond.",
      "The training was lifelong. A young griot apprenticed under an elder, memorizing thousands of lines of genealogy, history, and song. They learned to read a gathering — to know when the moment called for praise, for warning, for grief, for celebration. They were trusted with secrets. They were often the only people permitted to speak freely to a king — to offer criticism in the form of a song that no one else could safely deliver.",
      "Today the tradition lives and breathes. In Senegal and Guinea, celebrated griots fill stadiums and appear at state ceremonies. The kora — a 21-string bridge harp unique to West Africa — is heard now in concert halls from London to Tokyo. And across the African diaspora, the griot has become a conceptual framework: for the spoken word tradition in hip-hop, for the Black preacher-orator, for the elder who holds the family story when no one else remembers."
    ],
    deeper: "The griot system is often romanticized. What it actually represents is sophisticated information technology — engineered for a specific problem: how do you preserve complex knowledge across long time periods in the absence of widespread literacy?\n\nThe answer the griots provide is this: train specific people, across their entire lives, to be memory specialists, and embed them in the most important institutions of society. Give their knowledge legal standing. Create ceremonies that require their participation. Make their presence structurally necessary.\n\nThis system has advantages that written archives do not. A griot can read the room. They can emphasize what's relevant to the present moment. They can translate between registers, simplify for a new audience, or expand for a specialist. Written documents are static. The griot is dynamic.\n\nThe vulnerability, of course, is mortality and corruption. Griots can die. Knowledge can be distorted under political pressure. But then — libraries can be burned. Archives can be seized. Both systems are fragile. The difference is in who controls access.",
    matters: "The griot tradition is a reminder that information technology is not a recent phenomenon, and that writing is not the only legitimate form of knowledge preservation. Oral traditions have carried histories across millennia with a depth and precision that rivals written archives — and often exceeds them in emotional resonance, cultural adaptability, and accessibility. The tendency to dismiss oral knowledge as unreliable or primitive says more about the prejudices of the dismisser than the quality of the tradition.",
    takeaways: [
      "Griots (jelis) are hereditary oral historians, musicians, and diplomats in West Africa — the living archives of kingdoms, genealogies, and cultural knowledge, trained across a lifetime for their role.",
      "In the Mali Empire and beyond, griots held legal standing — their testimony on lineage, treaties, and historical events was treated as authoritative evidence in disputes.",
      "The griot tradition continues globally: in West African ceremonies and politics, in the kora's presence in world music, and as a conceptual ancestor of oral knowledge traditions in the African diaspora."
    ],
    reflection: "In an age of search engines and digital archives, what are we losing by no longer needing to hold knowledge inside our bodies, our voices, and our relationships?",
    visuals: [
  {
    icon: "🎵",
    title: "The Kora",
    desc: "A 21-string bridge harp unique to West Africa — the primary instrument of the griot tradition, capable of extraordinary harmonic complexity and the primary vehicle for encoded historical knowledge.",
    image: "/images/griot/kora-hero.jpg"
  },
  {
    icon: "📜",
    title: "The Living Archive",
    desc: "A trained griot holds genealogies stretching back 15+ generations, the terms of long-ago treaties, battle histories, and ceremonial songs — an oral library built and maintained through daily practice across a lifetime.",
    image: "/images/griot/timbuktu-manuscript.jpg"
  },
  {
    icon: "🗺️",
    title: "The Griot Belt",
    desc: "The tradition spans Senegal, Gambia, Mali, Guinea, Burkina Faso — mapping almost exactly onto the old footprint of the Mali and Songhai Empires, the civilizations that first institutionalized the role.",
    image: "/images/griot/mali-empire-map.png"
  }
]
  },
  {
    id: 6,
    date: "2026-04-06",
    category: "Belief Systems",
    region: "West Africa",
    period: "Ancient — 20th Century",
    title: "The Star the Textbooks Missed",
    subtitle: "The Dogon people described Sirius B in precise detail — centuries before telescopes could find it",
    readingTime: "6 min",
    heroImage: "/images/dogon/sirius-hero.jpg",
    openingLine: "In 1931, French anthropologists asked Dogon elders about their cosmology. The elders began describing a star that no instrument on earth could yet confirm.",
    context: "The Dogon people live on and around the Bandiagara Escarpment in present-day Mali — a dramatic landscape of cliffs and plateau where they have maintained a complex civilization for at least a thousand years. Their theology, cosmology, and ritual practice are among the most thoroughly documented in any African culture. When the anthropologists Marcel Griaule and Germaine Dieterlen spent years in conversation with Dogon knowledge-keepers, they found something that has unsettled and fascinated scholars ever since.",
    story: [
      "The Dogon called it po tolo — the smallest, heaviest seed. They said it was invisible to the eye but real. They said it orbited the star the rest of the world calls Sirius in a cycle of approximately fifty years. They said it was dense beyond ordinary comprehension, that a small piece of it would weigh more than all the iron in the world. They incorporated this knowledge into ceremonies that they traced back to the earliest remembered generations.",
      "The problem — and the fascination — is this: Sirius B, the white dwarf companion star of Sirius, was not photographed until 1970. Its existence was inferred by astronomers in 1844, but it cannot be seen by the naked eye under any conditions. Its extraordinary density — a teaspoon of white dwarf material weighs roughly five tons — was only understood in the 20th century with advances in stellar physics. Yet the Dogon described it accurately.",
      "Griaule published his findings in 1950, in a book called Conversations with Ogotemmêli. The scholarly world split. Skeptics argued that the Dogon must have learned about Sirius B from European missionaries or travelers in the early 20th century and incorporated it into their explanations when asked. Believers pointed to the depth and internal consistency of Dogon cosmological knowledge — too detailed, too structured, to be a recent insertion.",
      "The debate has never been fully resolved. What is not in dispute is that the Dogon have one of the most sophisticated cosmological frameworks documented in any culture — a detailed account of the origin of the universe, the structure of matter, the nature of vibration and creation, that has structural parallels to modern physics that remain, at minimum, extraordinary.",
      "Their creation story describes the universe emerging from a single point of vibration. They describe water as the primary medium of existence. They have a concept called digitaria — the seed of all seeds — that maps uncomfortably close to ideas about fundamental particles. None of this proves anything supernatural. But all of it demands a serious question: what were these people doing with their minds, across generations, that produced this level of cosmological precision?"
    ],
    deeper: "The Dogon case raises a question that goes beyond the specific puzzle of Sirius B: how do non-literate peoples develop and preserve complex astronomical knowledge across centuries?\n\nThe answer, in the Dogon case, is that their ritual structure was their research infrastructure. The Sigui — a ceremony performed once every sixty years — ensured that astronomical observations were maintained and transmitted across generational timescales that dwarf anything a single person can manage. The ceremony was the continuity mechanism. The theology was the data management system.\n\nThis is not mystical. It is engineering — social engineering, designed to solve a specific problem: how do you keep precise knowledge alive when no one lives long enough to remember where it started? You build a ceremony. You make the knowledge sacred. You make forgetting unthinkable.",
    matters: "The Dogon challenge a comfortable assumption: that scientific precision is the exclusive product of a particular kind of institution — the university, the observatory, the peer-reviewed journal. These are powerful systems. But they are not the only ones. Across Africa and the world, complex knowledge about astronomy, medicine, ecology, and mathematics was developed and preserved through oral tradition, ritual practice, and intergenerational apprenticeship. The Dogon are one example among many that our definitions of knowledge, science, and intellectual tradition are much narrower than the actual range of human achievement.",
    takeaways: [
      "The Dogon people of Mali described Sirius B — a white dwarf star invisible to the naked eye — with apparent accuracy in detail, before Western astronomy could photograph or fully characterize it.",
      "Their cosmological system includes structural parallels to modern physics and stellar theory, including concepts related to density, vibration, and the origin of matter.",
      "The Dogon case demonstrates how ritual and ceremony can function as long-duration scientific instruments — preserving and transmitting precise astronomical knowledge across generations without writing."
    ],
    reflection: "What knowledge systems do we dismiss because they don't look like what we've been taught knowledge should look like — and what might we be missing as a result?",
    visuals: [
  {
    icon: "⭐",
    title: "Sirius and Sirius B",
    desc: "Sirius is the brightest star in the night sky. Its companion Sirius B — a white dwarf — is invisible to the naked eye and requires a powerful telescope. The Dogon described both, and the orbital relationship between them.",
    image: "/images/dogon/sirius-hero.jpg"
  },
  {
    icon: "🏔️",
    title: "The Bandiagara Escarpment",
    desc: "The dramatic cliff landscape of Mali where the Dogon have lived for over a thousand years — their villages built into the cliff face, their cosmology mapped onto the landscape itself.",
    image: "/images/dogon/bandiagara.jpg"
  },
  {
    icon: "🔭",
    title: "The Sigui Ceremony",
    desc: "Held once every 60 years, the Sigui is one of the Dogon's most important rituals — a ceremony of renewal, memory, and transmission connected directly to their astronomical calendar and the Sirius system.",
    image: "/images/dogon/dogon-dance.jpg"
  }
]
  },
  {
    id: 7,
    date: "2026-04-07",
    category: "Political History",
    region: "West Africa",
    period: "1324 CE",
    title: "The Man Who Made the Sun Bow",
    subtitle: "How Mansa Musa's pilgrimage broke the Egyptian economy — and forced Africa onto the world's maps",
    readingTime: "6 min",
    openingLine: "In 1324, a king left West Africa with so much gold that he accidentally crashed the Egyptian economy for over a decade.",
    context: "The Mali Empire in the 14th century stretched across much of West Africa — covering present-day Mali, Senegal, The Gambia, Guinea, Sierra Leone, and parts of several other nations. It controlled the trans-Saharan trade routes that moved gold, salt, and goods across the continent. Mansa Musa, its tenth emperor, is estimated by some economists to have been the wealthiest individual in recorded human history. When he made the hajj to Mecca in 1324, he did not travel as a pilgrim. He traveled as an empire.",
    story: [
      "He came with sixty thousand people. Twelve thousand were personal attendants, each carrying four pounds of gold. His personal herald marched before him bearing a golden staff. Five hundred enslaved men preceded his path, each holding a gold staff weighing six pounds. Eighty camels followed in his train, each loaded with three hundred pounds of gold dust.",
      "This was not ostentation for its own sake. It was a calculated political statement: that the Mali Empire was not a peripheral civilization on the edge of the known world. It was a center.",
      "When the procession reached Cairo, Musa gave. He gave to officials and beggars, to scholars and merchants, to mosque construction funds and individual supplicants. He gave at a scale that stunned contemporary observers. He remained in Egypt for three months, and in that time released so much gold into the local economy that the metal's value collapsed across the Mediterranean. Cairo, Medina, and Mecca all felt the economic disruption. Historians estimate the shock to gold markets lasted more than ten years.",
      "European cartographers noticed. The Catalan Atlas of 1375 — one of the most important maps of the medieval world — shows Mansa Musa seated at the center of Africa on a golden throne, holding a crown and a gold nugget. Beneath him: a description of his almost incomprehensible wealth. He was the only African ruler depicted by name on any European map of that era. He had made himself impossible to ignore.",
      "But what happened when he returned home is the deeper story.",
      "He brought back Abu Ishaq al-Sahili, a scholar-architect from Andalusia, who designed mosques and learning centers across the empire. In Timbuktu, al-Sahili built the Djinguereber Mosque — which still stands, still in use, today. Musa invested in the infrastructure of knowledge. The Sankore Madrassa in Timbuktu grew into one of the world's great universities, holding between 400,000 and 700,000 manuscripts at its height. Scholars traveled from across the Muslim world to study there. Timbuktu — a name now used in English as a synonym for the remotest possible place — was, in the 14th and 15th centuries, a place people traveled thousands of miles to reach."
    ],
    deeper: "What Mansa Musa understood — and what his story reveals about power — is that wealth without visibility is strategically irrelevant on the world stage.\n\nThe Mali Empire had been wealthy for generations before him. But Musa grasped that power requires a story. It requires presence. It requires being legible to the world in a language the world is willing to read. He forced his way onto European maps not through conquest but through sheer, undeniable scale. You cannot pretend someone does not exist after they have crashed your economy.\n\nThe Catalan Atlas placing him at the center of Africa wasn't courtesy. It was cartographic acknowledgment that economic gravity existed in places Europe's maps had previously left blank or labeled with monsters.\n\nThe disruption he caused in Egyptian markets was not embarrassing excess. It was proof of the Mali Empire's scale — that a single man's generosity could destabilize Mediterranean commerce. That is a different kind of power than the maps were willing to show, and Musa made them show it anyway.",
    matters: "Mansa Musa's story dismantles the inherited assumption that wealth, institutional complexity, and cultural sophistication existed only in certain places and among certain peoples. For centuries, African wealth has been framed as natural resource — as raw material that others extracted — rather than as constructed, accumulated, institutional power. Musa's pilgrimage tears that framing apart. The Mali Empire was wealthy because generations of people built the governance systems, trade networks, taxation infrastructure, and diplomatic relationships that could produce and sustain that scale. The wealth was a product of civilization, not of luck or landscape.",
    takeaways: [
      "Mansa Musa's 1324 hajj pilgrimage released so much gold into Mediterranean markets that it crashed the price of the metal for over a decade — a single act that measured the astonishing scale of the Mali Empire.",
      "The Catalan Atlas of 1375 placed him at the center of Africa — the only African ruler named on a European medieval map — a direct consequence of the visibility his pilgrimage created.",
      "He used the journey to import scholars and architects, building Timbuktu into one of the world's leading intellectual centers, with hundreds of thousands of manuscripts that proved African civilization was not only rich in gold but in ideas."
    ],
    reflection: "When you think about the places and peoples you've been taught to associate with wealth, power, and civilization — what were you never shown? And who made that decision?",
    visuals: [
  {
    icon: "🕌",
    title: "Djinguereber Mosque, Timbuktu",
    desc: "Built in 1327 CE by Abu Ishaq al-Sahili — the architect Mansa Musa brought back from his pilgrimage. Still standing. Still in use. A building that is almost seven hundred years old.",
    image: "/images/mansa/djinguereber.jpg"
  },
  {
    icon: "🗺️",
    title: "The Catalan Atlas, 1375",
    desc: "The medieval map that placed Mansa Musa at Africa's center — gold in his hand, crown on his head — forcing European cartography to acknowledge what existed south of the Sahara.",
    image: "/images/mansa/mansa-hero.jpg"
  },
  {
    icon: "📚",
    title: "Timbuktu's Manuscripts",
    desc: "An estimated 400,000–700,000 manuscripts — on mathematics, astronomy, medicine, theology, law — preserved in Timbuktu.",
    image: "/images/mansa/timbuktu-manuscripts.jpg"
  }
]
  }
];
const PALETTE = {
  cream: "#F3EBDD",
  sand: "#D8C2A6",
  clay: "#A55F2A",
  burnt: "#D96A1B",
  gold: "#D8A928",
  charcoal: "#161311",
  charcoalSoft: "#241D19",
  brown: "#4E2D1A",
  line: "rgba(40, 27, 17, 0.12)",
  white: "#FFF9F0",
};

function getTodayISO() {
  return new Date().toLocaleDateString("en-CA");
}

function formatDate(dateString) {
  const d = new Date(dateString);
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function Label({ children, light = false }) {
  return (
    <div
      style={{
        fontSize: "12px",
        fontWeight: 900,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: light ? "rgba(255,249,240,0.72)" : PALETTE.clay,
        marginBottom: "10px",
      }}
    >
      {children}
    </div>
  );
}

function Pill({ children, dark = false }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "10px 14px",
        borderRadius: "999px",
        background: dark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.55)",
        border: dark
          ? "1px solid rgba(255,255,255,0.10)"
          : `1px solid ${PALETTE.line}`,
        color: dark ? PALETTE.white : PALETTE.charcoalSoft,
        fontSize: "14px",
        fontWeight: 800,
      }}
    >
      {children}
    </span>
  );
}

function SectionBand({ title, children, dark = false }) {
  return (
    <section
      style={{
        background: dark ? PALETTE.charcoal : PALETTE.white,
        color: dark ? PALETTE.white : PALETTE.charcoal,
        borderRadius: "28px",
        padding: "28px",
        border: dark ? "none" : `1px solid ${PALETTE.line}`,
        boxShadow: dark
          ? "0 18px 40px rgba(0,0,0,0.18)"
          : "0 18px 40px rgba(48, 28, 14, 0.06)",
        marginBottom: "22px",
      }}
    >
      <Label light={dark}>{title}</Label>
      {children}
    </section>
  );
}

function PatternStrip({ dark = false }) {
  return (
    <div
      style={{
        height: "18px",
        borderRadius: "999px",
        margin: "12px 0 18px",
        background: dark
          ? `
            repeating-linear-gradient(
              90deg,
              #D96A1B 0px,
              #D96A1B 26px,
              #D8A928 26px,
              #D8A928 52px,
              #A55F2A 52px,
              #A55F2A 78px,
              #241D19 78px,
              #241D19 104px
            )
          `
          : `
            repeating-linear-gradient(
              90deg,
              rgba(217,106,27,0.95) 0px,
              rgba(217,106,27,0.95) 26px,
              rgba(216,169,40,0.95) 26px,
              rgba(216,169,40,0.95) 52px,
              rgba(165,95,42,0.95) 52px,
              rgba(165,95,42,0.95) 78px,
              rgba(36,29,25,0.9) 78px,
              rgba(36,29,25,0.9) 104px
            )
          `,
      }}
    />
  );
}

function StoryPreviewCard({ story, onOpen, accent = false }) {
  return (
    <button
      onClick={() => onOpen(story)}
      style={{
        width: "100%",
        textAlign: "left",
        background: accent ? PALETTE.charcoal : PALETTE.white,
        color: accent ? PALETTE.white : PALETTE.charcoal,
        border: accent ? "none" : `1px solid ${PALETTE.line}`,
        borderRadius: "26px",
        padding: "24px",
        cursor: "pointer",
        boxShadow: accent
          ? "0 18px 40px rgba(0,0,0,0.18)"
          : "0 18px 40px rgba(48, 28, 14, 0.06)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "14px",
        }}
      >
        <Pill dark={accent}>{story.category}</Pill>
        <Pill dark={accent}>{story.readingTime}</Pill>
      </div>

      <div
        style={{
          fontSize: "clamp(28px, 4vw, 54px)",
          lineHeight: 0.95,
          fontWeight: 900,
          textTransform: "uppercase",
          letterSpacing: "-0.03em",
          marginBottom: "12px",
        }}
      >
        {story.title}
      </div>

      <div
        style={{
          fontSize: "18px",
          lineHeight: 1.6,
          color: accent ? "rgba(255,249,240,0.76)" : "#5E534A",
          maxWidth: "760px",
          marginBottom: "16px",
        }}
      >
        {story.subtitle}
      </div>

      {story.heroImage && (
        <img
          src={story.heroImage}
          alt={story.title}
          style={{
            width: "100%",
            height: "320px",
            objectFit: "cover",
            borderRadius: "20px",
            display: "block",
            marginBottom: "16px",
          }}
        />
      )}

      <div
        style={{
          fontSize: "16px",
          lineHeight: 1.8,
          color: accent ? PALETTE.white : PALETTE.charcoalSoft,
          marginBottom: "18px",
        }}
      >
        {story.openingLine}
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          color: accent ? "rgba(255,249,240,0.72)" : "#7B6B5C",
          fontSize: "14px",
          fontWeight: 700,
        }}
      >
        <span>{story.region}</span>
        <span>•</span>
        <span>{story.period}</span>
        <span>•</span>
        <span>{formatDate(story.date)}</span>
      </div>
    </button>
  );
}

function ArchiveCard({ story, onOpen }) {
  return (
    <button
      onClick={() => onOpen(story)}
      style={{
        width: "100%",
        textAlign: "left",
        background: PALETTE.white,
        border: `1px solid ${PALETTE.line}`,
        borderRadius: "22px",
        padding: "20px",
        cursor: "pointer",
        boxShadow: "0 12px 28px rgba(48, 28, 14, 0.05)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "18px",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: 1, minWidth: "240px" }}>
          <div
            style={{
              fontSize: "13px",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: PALETTE.clay,
              marginBottom: "8px",
            }}
          >
            {story.category}
          </div>

          <div
            style={{
              fontSize: "28px",
              lineHeight: 1,
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
              color: PALETTE.charcoal,
              marginBottom: "8px",
            }}
          >
            {story.title}
          </div>

          <div
            style={{
              fontSize: "16px",
              lineHeight: 1.65,
              color: "#6C5E53",
            }}
          >
            {story.subtitle}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gap: "8px",
            minWidth: "180px",
          }}
        >
          <Pill>{story.readingTime}</Pill>
          <Pill>{formatDate(story.date)}</Pill>
        </div>
      </div>
    </button>
  );
}

function VisualCard({ visual }) {
  return (
    <div
      style={{
        background: PALETTE.white,
        border: `1px solid ${PALETTE.line}`,
        borderRadius: "22px",
        overflow: "hidden",
        boxShadow: "0 12px 28px rgba(48, 28, 14, 0.05)",
      }}
    >
      {visual.image && (
        <img
          src={visual.image}
          alt={visual.title}
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
            display: "block",
          }}
        />
      )}

      <div style={{ padding: "18px" }}>
        {!visual.image && visual.icon && (
          <div style={{ fontSize: "34px", marginBottom: "10px" }}>{visual.icon}</div>
        )}

        <div
          style={{
            fontSize: "22px",
            lineHeight: 1,
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            color: PALETTE.charcoal,
            marginBottom: "10px",
          }}
        >
          {visual.title}
        </div>

        <div
          style={{
            fontSize: "15px",
            lineHeight: 1.7,
            color: "#66594E",
          }}
        >
          {visual.desc}
        </div>
      </div>
    </div>
  );
}

function HomeView({ todayStory, todayISO, onOpenArchive, onOpenStory }) {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "22px 18px 80px" }}>
      <section
        style={{
          background: `
            linear-gradient(135deg, rgba(22,19,17,0.98), rgba(36,29,25,0.96)),
            repeating-linear-gradient(
              135deg,
              rgba(255,255,255,0.02) 0px,
              rgba(255,255,255,0.02) 16px,
              rgba(0,0,0,0.02) 16px,
              rgba(0,0,0,0.02) 32px
            )
          `,
          color: PALETTE.white,
          borderRadius: "34px",
          padding: "34px 26px",
          boxShadow: "0 24px 60px rgba(0,0,0,0.22)",
          marginBottom: "22px",
        }}
      >
        <Label light>The Daily Sankofa</Label>

        <div
          style={{
            maxWidth: "980px",
            fontSize: "clamp(42px, 8vw, 96px)",
            lineHeight: 0.92,
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "-0.05em",
            marginBottom: "16px",
          }}
        >
          African memory.
          <br />
          Built daily.
        </div>

        <div
          style={{
            maxWidth: "760px",
            fontSize: "18px",
            lineHeight: 1.7,
            color: "rgba(255,249,240,0.78)",
            marginBottom: "16px",
          }}
        >
          One story. One return. One deeper way of seeing the continent, its systems,
          its architecture, its people, and the worlds it built.
        </div>

        <PatternStrip dark />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "16px",
          }}
        >
          <Pill dark>{formatDate(todayISO)}</Pill>
          {todayStory && <Pill dark>{todayStory.readingTime}</Pill>}
          {todayStory && <Pill dark>{todayStory.category}</Pill>}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          <button
            onClick={() => onOpenStory(todayStory)}
            style={{
              background: PALETTE.burnt,
              color: PALETTE.white,
              border: "none",
              borderRadius: "999px",
              padding: "14px 18px",
              fontWeight: 900,
              fontSize: "15px",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Enter today’s story
          </button>

          <button
            onClick={onOpenArchive}
            style={{
              background: "transparent",
              color: PALETTE.white,
              border: "1px solid rgba(255,255,255,0.16)",
              borderRadius: "999px",
              padding: "14px 18px",
              fontWeight: 900,
              fontSize: "15px",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Open archive
          </button>
        </div>
      </section>

      <StoryPreviewCard story={todayStory} onOpen={onOpenStory} accent />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "18px",
          marginTop: "22px",
        }}
      >
        <SectionBand title="Today at a glance">
          <div style={{ display: "grid", gap: "12px" }}>
            <Pill>{todayStory.region}</Pill>
            <Pill>{todayStory.period}</Pill>
            <Pill>{todayStory.readingTime}</Pill>
          </div>
        </SectionBand>

        <SectionBand title="Remember this">
          <div style={{ display: "grid", gap: "12px" }}>
            {todayStory.takeaways.slice(0, 2).map((item, i) => (
              <div
                key={i}
                style={{
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: PALETTE.charcoalSoft,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </SectionBand>

        <SectionBand title="Reflection">
          <div
            style={{
              fontSize: "18px",
              lineHeight: 1.8,
              fontWeight: 700,
              color: PALETTE.charcoal,
            }}
          >
            {todayStory.reflection}
          </div>
        </SectionBand>
      </div>
    </div>
  );
}

function StoryView({ story, onBack }) {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "22px 18px 80px" }}>
      <button
        onClick={onBack}
        style={{
          background: "transparent",
          border: "none",
          color: PALETTE.clay,
          fontWeight: 900,
          fontSize: "14px",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          cursor: "pointer",
          padding: 0,
          marginBottom: "14px",
        }}
      >
        ← Back
      </button>

      <section
        style={{
          background: `
            linear-gradient(135deg, rgba(22,19,17,0.98), rgba(36,29,25,0.96)),
            repeating-linear-gradient(
              135deg,
              rgba(255,255,255,0.02) 0px,
              rgba(255,255,255,0.02) 16px,
              rgba(0,0,0,0.02) 16px,
              rgba(0,0,0,0.02) 32px
            )
          `,
          color: PALETTE.white,
          borderRadius: "34px",
          padding: "34px 26px",
          boxShadow: "0 24px 60px rgba(0,0,0,0.22)",
          marginBottom: "22px",
        }}
      >
        <Label light>Today’s Ritual</Label>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "14px" }}>
          <Pill dark>{story.category}</Pill>
          <Pill dark>{story.readingTime}</Pill>
          <Pill dark>{story.region}</Pill>
        </div>

        <div
          style={{
            maxWidth: "980px",
            fontSize: "clamp(38px, 7vw, 84px)",
            lineHeight: 0.92,
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "-0.05em",
            marginBottom: "14px",
          }}
        >
          {story.title}
        </div>

        <div
          style={{
            maxWidth: "760px",
            fontSize: "18px",
            lineHeight: 1.7,
            color: "rgba(255,249,240,0.78)",
            marginBottom: "16px",
          }}
        >
          {story.subtitle}
        </div>

        <PatternStrip dark />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px 14px",
            color: "rgba(255,249,240,0.72)",
            fontSize: "14px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          <span>{story.period}</span>
          <span>•</span>
          <span>{formatDate(story.date)}</span>
        </div>
      </section>

      {story.heroImage && (
        <section
          style={{
            marginBottom: "22px",
            borderRadius: "30px",
            overflow: "hidden",
            boxShadow: "0 18px 40px rgba(48, 28, 14, 0.08)",
          }}
        >
          <img
            src={story.heroImage}
            alt={story.title}
            style={{
              width: "100%",
              height: "min(520px, 60vw)",
              minHeight: "280px",
              objectFit: "cover",
              display: "block",
            }}
          />
        </section>
      )}

      <SectionBand title="Opening line" dark>
        <div
          style={{
            fontSize: "clamp(24px, 4vw, 40px)",
            lineHeight: 1.18,
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "-0.03em",
          }}
        >
          {story.openingLine}
        </div>
      </SectionBand>

      <SectionBand title="Context">
        <div style={{ fontSize: "17px", lineHeight: 1.9, color: PALETTE.charcoalSoft }}>
          {story.context}
        </div>
      </SectionBand>

      <SectionBand title="The story">
        <div style={{ display: "grid", gap: "16px" }}>
          {story.story.map((paragraph, i) => (
            <p
              key={i}
              style={{
                margin: 0,
                fontSize: "17px",
                lineHeight: 1.9,
                color: PALETTE.charcoal,
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </SectionBand>

      <SectionBand title="What was really going on" dark>
        <div
          style={{
            fontSize: "17px",
            lineHeight: 1.9,
            color: "rgba(255,249,240,0.84)",
            whiteSpace: "pre-line",
          }}
        >
          {story.deeper}
        </div>
      </SectionBand>

      <SectionBand title="Why it matters">
        <div style={{ fontSize: "17px", lineHeight: 1.9, color: PALETTE.charcoalSoft }}>
          {story.matters}
        </div>
      </SectionBand>

      {story.visuals?.length > 0 && (
        <SectionBand title="See it clearly">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "18px",
            }}
          >
            {story.visuals.map((visual, i) => (
              <VisualCard key={i} visual={visual} />
            ))}
          </div>
        </SectionBand>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "18px",
        }}
      >
        <SectionBand title="Remember this">
          <div style={{ display: "grid", gap: "14px" }}>
            {story.takeaways.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "30px 1fr",
                  gap: "12px",
                  alignItems: "start",
                }}
              >
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "999px",
                    background: PALETTE.burnt,
                    color: PALETTE.white,
                    fontSize: "14px",
                    fontWeight: 900,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {i + 1}
                </div>

                <div
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.8,
                    color: PALETTE.charcoalSoft,
                  }}
                >
                  {item}
                </div>
              </div>
            ))}
          </div>
        </SectionBand>

        <SectionBand title="Reflection" dark>
          <div
            style={{
              fontSize: "20px",
              lineHeight: 1.8,
              fontWeight: 800,
              color: PALETTE.white,
            }}
          >
            {story.reflection}
          </div>
        </SectionBand>
      </div>
    </div>
  );
}

function ArchiveView({ stories, todayISO, onOpen, onBack }) {
  const pastStories = stories.filter((story) => story.date < todayISO);
  const todayStory = stories.find((story) => story.date === todayISO);
  const upcomingStories = stories.filter((story) => story.date > todayISO);

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "22px 18px 80px" }}>
      <button
        onClick={onBack}
        style={{
          background: "transparent",
          border: "none",
          color: PALETTE.clay,
          fontWeight: 900,
          fontSize: "14px",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          cursor: "pointer",
          padding: 0,
          marginBottom: "14px",
        }}
      >
        ← Back
      </button>

      <section
        style={{
          background: `
            linear-gradient(135deg, rgba(22,19,17,0.98), rgba(36,29,25,0.96)),
            repeating-linear-gradient(
              135deg,
              rgba(255,255,255,0.02) 0px,
              rgba(255,255,255,0.02) 16px,
              rgba(0,0,0,0.02) 16px,
              rgba(0,0,0,0.02) 32px
            )
          `,
          color: PALETTE.white,
          borderRadius: "34px",
          padding: "34px 26px",
          boxShadow: "0 24px 60px rgba(0,0,0,0.22)",
          marginBottom: "22px",
        }}
      >
        <Label light>The Archive</Label>

        <div
          style={{
            maxWidth: "900px",
            fontSize: "clamp(34px, 6vw, 72px)",
            lineHeight: 0.94,
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "-0.05em",
            marginBottom: "14px",
          }}
        >
          Past. Present.
          <br />
          What’s next.
        </div>

        <div
          style={{
            maxWidth: "720px",
            fontSize: "18px",
            lineHeight: 1.7,
            color: "rgba(255,249,240,0.78)",
          }}
        >
          Today stays central, but memory deepens when you can revisit, compare, and
          move through stories with intention.
        </div>
      </section>

      {todayStory && (
        <SectionBand title="Today">
          <ArchiveCard story={todayStory} onOpen={onOpen} />
        </SectionBand>
      )}

      {pastStories.length > 0 && (
        <SectionBand title="Past">
          <div style={{ display: "grid", gap: "16px" }}>
            {pastStories
              .sort((a, b) => new Date(a.date) - new Date(b.date))
              .map((story) => (
                <ArchiveCard key={story.id} story={story} onOpen={onOpen} />
              ))}
          </div>
        </SectionBand>
      )}

      {upcomingStories.length > 0 && (
        <SectionBand title="Upcoming" dark>
          <div style={{ display: "grid", gap: "16px" }}>
            {upcomingStories
              .sort((a, b) => new Date(a.date) - new Date(b.date))
              .map((story) => (
                <ArchiveCard key={story.id} story={story} onOpen={onOpen} />
              ))}
          </div>
        </SectionBand>
      )}
    </div>
  );
}

export default function App() {
  const [todayISO, setTodayISO] = useState(getTodayISO());
  const [view, setView] = useState("home");
  const [selectedStory, setSelectedStory] = useState(null);

  useEffect(() => {
    setTodayISO(getTodayISO());
  }, []);

  const sortedStories = [...STORIES].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const todayStory =
    sortedStories.find((story) => story.date === todayISO) || sortedStories[0];

  function openStory(story) {
    setSelectedStory(story);
    setView("story");
  }

  function goHome() {
    setSelectedStory(null);
    setView("home");
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `
          linear-gradient(180deg, #C67A30 0%, #A55F2A 120px, ${PALETTE.cream} 120px, ${PALETTE.cream} 100%)
        `,
        color: PALETTE.charcoal,
        fontFamily:
          'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
      }}
    >
      {view === "home" && (
        <HomeView
          todayStory={todayStory}
          todayISO={todayISO}
          onOpenArchive={() => setView("archive")}
          onOpenStory={openStory}
        />
      )}

      {view === "archive" && (
        <ArchiveView
          stories={sortedStories}
          todayISO={todayISO}
          onOpen={openStory}
          onBack={goHome}
        />
      )}

      {view === "story" && selectedStory && (
        <StoryView story={selectedStory} onBack={goHome} />
      )}
    </div>
  );
}