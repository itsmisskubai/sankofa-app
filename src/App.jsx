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
    heroImage: "/images/mansa/mansa-hero.jpg",
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
    desc: "An estimated 400,000-700,000 manuscripts — on mathematics, astronomy, medicine, theology, law — preserved in Timbuktu.",
    image: "/images/mansa/timbuktu-manuscripts.jpg"
  },
]
  },
  {
  id: 8,
  date: "2026-04-08",
  category: "Knowledge",
  region: "West Africa",
  period: "14th-16th Century CE",
  title: "THE CITY THAT TAUGHT THE WORLD",
  subtitle: "How Timbuktu became one of the most advanced centers of knowledge on earth",
  readingTime: "6 min",
  heroImage: "/images/timbuktu/timbuktu-hero.jpg",
  openingLine:
    "At a time when much of Europe struggled with literacy, a city in the Sahara was producing thousands of scholars, books, and ideas that shaped entire civilizations.",
  context:
    "Timbuktu, located in present-day Mali near the Niger River, emerged as a major intellectual and commercial center between the 14th and 16th centuries. It sat at the intersection of trans-Saharan trade routes, connecting West Africa to North Africa and the wider Islamic world. Gold, salt, and manuscripts flowed through the city, but unlike many trade centers, Timbuktu transformed wealth into knowledge.\n\nThe Mali Empire, and later the Songhai Empire, invested in scholarship, attracting scholars, jurists, astronomers, and theologians from across the Islamic world. Institutions like Sankore, Djinguereber, and Sidi Yahya were not just mosques—they functioned as universities, forming one of the most advanced intellectual ecosystems of the pre-modern world.",

  story:
    "Timbuktu did not become a center of knowledge by accident. Its rise was tied directly to the wealth generated from trade. Gold from the forests of West Africa moved north across the Sahara, while salt and goods came south. But what made Timbuktu different was what its leaders chose to do with that wealth.\n\nInstead of concentrating only on power or expansion, they invested in learning. Scholars were not marginal figures—they were central to the city's identity. Families built private libraries. Manuscripts were copied, traded, and preserved as valuable assets. In some cases, books were considered more valuable than gold.\n\nAt the heart of this intellectual life was Sankore University. Unlike modern universities with centralized administration, Sankore operated as a decentralized network of scholars. Students studied under individual teachers, often in small groups, progressing through disciplines such as law, theology, mathematics, astronomy, and literature.\n\nThe curriculum was rigorous. Students spent years mastering foundational texts before advancing to interpretation and original thought. Debate was encouraged. Memorization was important, but so was reasoning. Scholars issued legal opinions, wrote commentaries, and contributed to ongoing intellectual traditions that connected Timbuktu to Cairo, Fez, and beyond.\n\nThe scale was significant. At its peak, Timbuktu is believed to have had tens of thousands of students—remarkable for a city of its size. Libraries held hundreds of thousands of manuscripts, covering topics from science to philosophy to governance.\n\nBut this system was not isolated. Timbuktu's scholars were part of a global intellectual network. Ideas moved across deserts and oceans. Knowledge was not seen as belonging to one region—it was something to be built, debated, and expanded collectively.\n\nThis golden age did not last forever. In 1591, the Moroccan invasion disrupted Timbuktu's political and intellectual systems. Scholars were exiled, institutions weakened, and the city's prominence declined. But the manuscripts remained—hidden, preserved, and passed down through generations.",

  deeper:
    "What Timbuktu represents is not just a city of scholars, but a different model of civilization.\n\nFirst, it shows that knowledge was a core form of power. Unlike systems that prioritized military dominance, Timbuktu's influence came from intellectual authority. Scholars shaped law, governance, and cultural identity.\n\nSecond, it reveals that Africa was not intellectually isolated. The narrative that positions Africa as disconnected from global knowledge systems collapses when you examine Timbuktu. This was a city deeply embedded in transcontinental networks of learning.\n\nThird, it challenges the assumption that formal education must resemble Western institutions. Timbuktu's decentralized, mentor-based system produced highly advanced scholarship without centralized bureaucratic structures.\n\nFinally, it exposes how fragile knowledge systems can be. Political disruption did not just change leadership—it dismantled entire intellectual ecosystems. What was lost was not just power, but continuity of thought.",

  matters:
    "Timbuktu matters because it directly contradicts one of the most persistent narratives about Africa—that it lacked advanced systems of knowledge before colonial influence.\n\nToday, African education systems are often framed as needing to 'catch up' to global standards. But Timbuktu shows that the continent has its own legacy of intellectual leadership. The issue is not absence—it is interruption.\n\nIt also raises a deeper question: what happens when societies stop investing in knowledge as a central pillar? Timbuktu thrived when learning was valued at the highest level. Its decline reminds us that intellectual infrastructure requires protection, investment, and continuity.\n\nIn a present-day context where information is abundant but depth is rare, Timbuktu's model feels almost radical—slow learning, rigorous debate, and respect for scholarship as a societal foundation.",

  visuals: [
  {
    image: "/images/timbuktu/timbuktu-map.jpg",
    title: "Timbuktu in the Trans-Saharan Network",
    description:
      "A map showing Timbuktu's position along major trade routes, explaining how goods, people, and ideas moved between West Africa and the wider world."
  },
  {
    image: "/images/timbuktu/sankore.jpg",
    title: "Sankore University",
    description:
      "One of the central institutions of learning, where scholars taught students in a decentralized but highly rigorous system."
  },
  {
    image: "/images/timbuktu/manuscripts.jpg",
    title: "Timbuktu Manuscripts",
    description:
      "Thousands of preserved texts covering science, law, and philosophy—evidence of a deep and sustained intellectual tradition."
  }
],

  takeaways: [
    "Timbuktu was one of the most advanced centers of learning in the pre-modern world.",
    "Knowledge, not just trade, was treated as a core form of wealth and power.",
    "African intellectual systems were globally connected, not isolated."
  ],

  reflection:
"If a society once treated knowledge as its greatest asset, what does it say about how we treat learning today?"
},
{
id: 9,
  date: "2026-04-09",
  category: "Architecture",
  region: "East Africa",
  period: "12th-13th Century CE",
  title: "THE CHURCHES CARVED INTO THE EARTH",
  subtitle: "How Lalibela turned rock, faith, and engineering into one of the most radical architectural achievements on earth",
  readingTime: "6 min",
  heroImage: "/images/lalibela/lalibela-hero.jpg",
  openingLine:
    "Most monuments rise upward into the sky. Lalibela was carved downward into the ground.",
  context:
    "In the highlands of present-day Ethiopia lies Lalibela, home to one of the most extraordinary sacred architectural sites in the world. The complex consists of eleven medieval churches carved directly into volcanic rock. Instead of being built stone by stone from the ground up, these structures were excavated from the top down, released from the surrounding earth until full buildings emerged. They are associated with King Lalibela of the Zagwe dynasty and are generally dated to the 12th and 13th centuries.\n\nThe churches are not isolated buildings. They form an interconnected sacred landscape of trenches, tunnels, courtyards, passages, and ritual routes. To understand Lalibela properly, you cannot think of it merely as a set of churches. It is architecture, engineering, theology, and political imagination fused into one spatial system.",
  story:
    "The ambition behind Lalibela was enormous. According to Ethiopian Christian tradition, King Lalibela sought to create a 'New Jerusalem' after changing conditions in the eastern Mediterranean made pilgrimage to the original Jerusalem more difficult for many believers. Whether taken literally or as symbolic statecraft, the point is clear: this was not ordinary church construction. It was an attempt to reshape sacred geography itself.\n\nWhat makes Lalibela so striking is the method. A structure like Bete Giyorgis was not assembled by laying blocks on top of one another. Workers first isolated a mass of rock by cutting deep trenches into the earth around it. Then they carved into that block, shaping walls, windows, doors, columns, roofs, and interior chambers. In other words, the building was created by subtraction, not addition.\n\nThat required extraordinary planning. In ordinary construction, mistakes can sometimes be corrected by replacing or reinforcing parts. At Lalibela, a serious error during excavation could ruin the whole structure. The builders had to imagine the final form before it visibly existed. They had to think in reverse.\n\nThe churches were also designed for movement. Visitors do not simply approach a façade and enter. They descend, turn, pass through narrow trenches, emerge into light, then cross into shadowed interiors. That sequence matters. Lalibela choreographs the body. It makes worship spatial. You do not just see belief there; you move through it.\n\nDifferent churches within the complex carry different architectural expressions. Some have basilica-like forms. Others feature columns, carved details, or symbolic shapes that tie them to Ethiopian Christian traditions and wider influences. Bete Giyorgis, the most famous, appears in the shape of a cross when seen from above, a form so precise and dramatic that it still unsettles first-time viewers.\n\nAnd the site did not become significant only because it was technically impressive. It remained active. Priests continued to serve there. Pilgrims continued to come. Ritual life continued to animate the stone. That continuity matters because Lalibela is not merely a ruin admired by tourists. It is living sacred architecture.",
  deeper:
    "Lalibela matters because it expands what architecture can mean.\n\nToo often, monumental architecture is discussed as a story of height, empire, and spectacle: pyramids, cathedrals, palaces, towers. Lalibela offers another model. Its power comes not from rising above the earth, but from being cut into it. It inverts the usual visual language of monumentality and still achieves overwhelming presence.\n\nIt also reveals that African architecture cannot be reduced to the stereotypes people often carry: temporary, purely vernacular, technically limited, or lacking abstraction. Lalibela required geometry, sequencing, labor coordination, geological understanding, and a clear symbolic program. It is proof of architectural thought at civilizational scale.\n\nThere is also a political layer here. To build a site like Lalibela is to make a statement about legitimacy, devotion, and identity. It says: this kingdom can shape sacred space, not merely inherit it. It says faith can be territorial, material, and visually organized. It says a ruler's authority can be embedded in stone.\n\nAnd because the churches are carved from living rock rather than assembled from separate materials, Lalibela also refuses easy categories. It is architecture, but also sculpture. It is building, but also excavation. It is infrastructure, but also theology made visible.",
  matters:
    "Lalibela matters because it breaks narrow assumptions about African architecture and African historical complexity. It is not just evidence that Africans built beautifully. It is evidence that they conceived space symbolically, engineered with precision, and built at monumental scale in ways that still challenge modern viewers.\n\nIt also matters now because people still speak about African development as though sophistication only becomes real when it resembles Europe, North America, or parts of Asia. Lalibela reminds us that African design traditions have long contained their own forms of sophistication, logic, and sacred symbolism.\n\nIn present-day conversations about heritage, architecture, and identity, Lalibela also raises a harder question: what would it mean to study African built environments not as curious exceptions, but as central contributions to the world's architectural imagination?",
  visuals: [
    {
      image: "/images/lalibela/lalibela-map.jpg",
      title: "Lalibela in Ethiopia",
      desc: "A map locating Lalibela in the Ethiopian highlands, helping explain why it emerged as both a royal and sacred center."
    },
    {
      image: "/images/lalibela/bete-giyorgis.jpg",
      title: "Bete Giyorgis",
      desc: "The most iconic of Lalibela's churches — carved downward into rock and visible from above as a monumental cross-shaped form."
    },
    {
      image: "/images/lalibela/rock-cut.jpg",
      title: "Architecture by Excavation",
      desc: "A visual reminder that Lalibela's churches were created by cutting into living rock, requiring reverse-planned engineering rather than ordinary construction."
    }
  ],
  takeaways: [
    "Lalibela's churches were carved top-down from living rock, making subtraction — not assembly — the basis of construction.",
    "The site is a full sacred landscape of tunnels, trenches, routes, and churches, not a random cluster of buildings.",
    "Lalibela proves that African architectural traditions included monumental engineering, symbolic precision, and spatial imagination at world-historical scale."
  ],
  reflection:
    "What changes when you stop thinking of architecture as just shelter or spectacle and start seeing it as a way a civilization tells you what it believes is sacred?"
},
{
id: 10,
  date: "2026-04-10",
  category: "Art & Power",
  region: "West Africa",
  period: "16th Century onward",
  title: "THE ART THEY TOOK AND CALLED THEIR OWN",
  subtitle: "How the Benin Bronzes recorded royal power, memory, and craftsmanship — and why their afterlife still exposes empire",
  readingTime: "6 min",
  heroImage: "/images/benin/benin-hero.jpg",
  openingLine:
    "The Benin Bronzes were not decorative trophies. They were state memory cast in metal.",
  context:
    "The Benin Bronzes are a large body of brass and bronze works produced for the royal court of the Kingdom of Benin, in present-day southern Nigeria, from at least the 16th century onward. They include plaques, commemorative heads, animal and human figures, ornaments, and regalia made by specialist guild artists attached to the Oba’s court. These works were not random luxury objects. They were part of a political, historical, and spiritual system that made royal authority visible and durable.",
  story:
    "In Benin City, art was not separated from power. The royal palace was once lined with cast brass plaques showing warriors, attendants, court rituals, foreign traders, and the Oba himself. These plaques did not merely beautify the palace. They organized memory. They announced hierarchy. They taught viewers what the kingdom valued and how power was staged.\n\nThe makers were highly skilled court artists working in brass-casting guilds, using the lost-wax technique to produce works of astonishing technical precision. This was not casual craftsmanship. It was a specialized system of production tied directly to the court. Knowledge of material, form, symbolism, and ritual meaning was embedded in the work.\n\nSome objects, like commemorative heads of queens and kings, were used on ancestral altars. These were not portrait busts in the modern European sense. They were ritual objects linking the living ruler to dynastic continuity, sacred legitimacy, and the memory of those who came before.\n\nOthers, like plaques with Portuguese traders, recorded Benin’s contact with the outside world. They show that Benin was not isolated. It was engaged in trade and diplomatic exchange, and its artists were capable of absorbing outside figures into a distinctly Edo visual language without losing control of their own symbolic system.\n\nThen in 1897 came the British punitive expedition. Benin City was invaded, burned, and looted. Thousands of court objects were taken and dispersed across Europe and North America. Once removed from the palace and altar contexts that gave them meaning, they were recast in imperial collections as ethnographic curiosities, trophies, and museum masterpieces.\n\nThat afterlife matters. The same objects that once declared Benin’s sovereignty became proof of British conquest inside imperial institutions. The bronzes survived, but the story around them was violently rewritten.",
  deeper:
    "What was really going on was not simply artistic production. It was the making of political memory.\n\nThe Benin Bronzes functioned inside a court system where visual culture reinforced authority, hierarchy, and continuity. They were part of how the kingdom represented itself to itself. In that sense, they were archives in metal.\n\nThat is why the looting matters beyond theft. When the bronzes were taken, it was not only objects that were removed. A whole structure of meaning was broken. Sacred, dynastic, and architectural relationships were severed. The bronzes entered museums as isolated art objects, but they had originally lived inside a much larger system of palace ritual and royal memory.\n\nTheir later celebration in European and American museums also reveals something uncomfortable: empires often praise the beauty of what they have stolen while refusing to fully face what made that possession possible.",
  matters:
    "The Benin Bronzes matter because they force two corrections at once. First, they correct the lie that African court art lacked technical sophistication, symbolic depth, or historical self-consciousness. These works show the opposite: precision, political intelligence, and artistic systems of the highest order.\n\nSecond, they matter right now because restitution is not just about returning beautiful things. It is about whether institutions built through conquest are willing to confront the violence beneath their collections. The question is no longer whether the bronzes are important. The question is who gets to live with that importance, tell its story, and inherit its meaning.",
  visuals: [
    {
      image: "/images/benin/queen-mother-head.jpg",
      title: "Commemorative Head of a Queen Mother",
      desc: "A royal altar object showing how Benin casting preserved dynastic memory, authority, and ritual continuity."
    },
    {
      image: "/images/benin/warrior-plaque.jpg",
      title: "Plaque with Warrior and Attendants",
      desc: "One of the palace plaques that transformed court life, military hierarchy, and royal order into visual history."
    },
    {
      image: "/images/benin/portuguese-plaque.jpg",
      title: "Plaque with Portuguese Traders",
      desc: "A reminder that Benin was engaged with global exchange on its own terms long before colonial conquest recast that contact."
    }
  ],
  takeaways: [
    "The Benin Bronzes were court archives in metal, not mere decoration.",
    "Their making depended on specialized Edo guild knowledge and a deeply structured royal system.",
    "Their looting in 1897 was not just theft of objects but the violent stripping of context, sovereignty, and historical control."
  ],
  reflection:
    "When a people's memory is taken, displayed elsewhere, and admired without full accountability, what exactly is the world calling heritage?"
},
{
  id: 11,
  date: "2026-04-11",
  category: "Trade",
  region: "West Africa",
  period: "8th-16th Century CE",
  title: "THE ROADS THAT THE DESERT DID NOT STOP",
  subtitle: "How camel caravans turned the Sahara from a barrier into one of the great commercial highways of the world",
  readingTime: "6 min",
  heroImage: "/images/trans-sahara/trans-sahara-hero.jpg",
  openingLine:
    "The Sahara did not end civilization. It forced people to invent a harder one.",
  context:
    "The trans-Saharan trade routes connected North Africa to the Sahel and the forest-edge economies of West Africa for centuries. Once camel caravans made long-distance desert crossing more sustainable, the Sahara stopped being only a geographic obstacle and became a commercial corridor. Salt moved south. Gold moved north. Alongside them moved textiles, horses, manuscripts, ideas, and human beings under conditions that were not always voluntary. The desert did not separate worlds as cleanly as modern maps make it seem. It linked them.",
  story:
    "The key technological shift was the large-scale use of the camel. A desert that would have broken many earlier transport systems became traversable through caravans organized around endurance, water knowledge, and route discipline. These were not random wanderings across sand. They were structured passages shaped by wells, oasis towns, political agreements, and accumulated expertise.\n\nBy the early medieval period, cities in North Africa and the Sahel were being tied into a commercial system that moved goods across enormous distances. Salt from Saharan mines such as Taghaza was essential to life and preservation. Gold from West Africa was essential to currency, power, and wider Mediterranean and Islamic economies. That exchange created more than profit. It created cities.\n\nPlaces such as Awdaghust, Sijilmasa, Gao, Walata, and later Timbuktu rose in importance because they sat in relation to these routes. They functioned as nodes of exchange, taxation, scholarship, and political negotiation. Rulers understood quickly that control of trade did not just mean wealth. It meant leverage.\n\nEmpires such as Ghana, Mali, and Songhai did not emerge in isolation from this system. They benefited from taxing, securing, and organizing the movement of trade. Gold did not travel by itself. It moved through political worlds that could protect caravans, regulate access, and project authority over territory.\n\nBut the trade was never as simple as the clean classroom version: gold north, salt south. Textiles, copper, horses, books, and enslaved people also moved through these networks. So did religion and administrative practices. Islam spread through merchants, scholars, courts, and political incentives, becoming entangled with local structures in different ways across the region.\n\nAnd none of this was easy. The Sahara remained deadly. Caravans depended on timing, water knowledge, animal health, and collective coordination. A route was never only a line on a map. It was infrastructure built from memory, risk, and repetition.",
  deeper:
    "What was really going on was not simply exchange. It was system-building.\n\nThe trans-Saharan trade routes created economic corridors, but they also created political and intellectual corridors. States grew around them. Urban life deepened because of them. Islamic scholarship and legal culture moved through them. The desert became a medium through which institutions, not just goods, circulated.\n\nThis matters because modern people often imagine trade as something secondary to civilization, as if culture happens first and trade comes later. In reality, trade routes often generate the very conditions under which cities, courts, taxation systems, and scholarly centers become durable.\n\nIt also matters because the routes reveal that African history cannot be read through coastal contact alone. Long before Atlantic domination, West Africa was already deeply connected northward through structured exchange that shaped major states and major forms of power.",
  matters:
    "The trans-Saharan trade matters because it overturns lazy ideas of Africa as disconnected, passive, or waiting to be opened by outsiders. The Sahara was not a blank emptiness around history. It was part of history’s machinery.\n\nIt also matters now because the language of infrastructure still shapes power. Whoever controls routes, corridors, ports, customs points, logistics, and flow still shapes whose economies expand and whose remain dependent. The old caravans are gone, but the politics of movement have not disappeared.\n\nIf you understand the trans-Saharan world properly, you stop seeing Africa as a set of isolated regions and start seeing it as a continent whose internal and northward linkages helped produce wealth, states, and ideas long before Europe claimed to be the center of the map.",
  visuals: [
    {
      image: "/images/trans-sahara/routes-map.jpg",
      title: "Trade Routes Across the Western Sahara",
      desc: "A map of the major routes c. 1000-1500,showing how trade moved through the desert by way of specific corridors rather than vague empty space."
    },
    {
      image: "/images/trans-sahara/caravan.jpg",
      title: "Camel Caravan Infrastructure",
      desc: "The caravan was not just transport. It was the technology that made a commercial system across the Sahara possible."
    },
    {
      image: "/images/trans-sahara/salt-gold.jpg",
      title: "Salt and Gold",
      desc: "The famous exchange was never only symbolic. Salt sustained life; gold sustained currencies and imperial ambition."
    }
  ],
  takeaways: [
    "The Sahara was transformed from a barrier into a commercial highway through camel caravan systems and route knowledge.",
    "Trans-Saharan trade helped grow cities, empires, and scholarly networks across West Africa and North Africa.",
    "Trade did not move only goods. It moved religion, law, political influence, and human beings through systems of power."
  ],
  reflection:
    "What changes when you stop seeing a desert as empty land and start seeing it as infrastructure that shaped empires?"
},
{
  id: 12,
  date: "2026-04-12",
  category: "Empire",
  region: "Northeast Africa",
  period: "c. 1070 BCE-350 CE",
  title: "THE EMPIRE SOUTH OF EGYPT",
  subtitle: "How the Kingdom of Kush rivaled, ruled, and reshaped one of the most famous civilizations in history",
  readingTime: "6 min",
  heroImage: "/images/kush/kush-hero.jpg",
  openingLine:
    "Long before outsiders drew borders across Africa, a kingdom to the south of Egypt rose strong enough to rule it.",
  context:
    "The Kingdom of Kush emerged in what is now Sudan, along the Nile River, south of ancient Egypt. It developed through key centers like Napata and later Meroë, building political, military, and cultural strength over centuries. While often treated as a footnote to Egypt in popular narratives, Kush was a powerful state in its own right, deeply engaged with Nile Valley civilization while maintaining its own identity and systems.",
  story:
    "Kush did not begin as an isolated civilization. It grew in constant interaction with Egypt. Trade, conflict, influence, and adaptation shaped both societies over time.\n\nAt different points, Egypt controlled parts of Nubia. But power did not remain one-sided. By the 8th century BCE, Kush had consolidated enough strength to move north. Under King Piye, Kushite forces invaded and unified Egypt, establishing what is now known as the 25th Dynasty.\n\nThis was not a minor moment. For a period, rulers from Kush governed Egypt, positioning themselves as legitimate pharaohs. They adopted and adapted Egyptian religious and political traditions, presenting themselves as restorers of order rather than outsiders. Their rule stretched across a vast territory, linking regions of the Nile under one authority.\n\nAfter being pushed back by Assyrian pressure, Kush did not disappear. It re-centered itself further south at Meroë. There, it developed new forms of power. Iron production expanded. Trade networks extended deeper into Africa. A distinct script emerged. The kingdom continued to evolve rather than simply decline.\n\nOne of the most visible markers of Kushite power is its pyramids. Hundreds of them still stand in Sudan today. Smaller and steeper than Egyptian pyramids, they mark royal burials and assert dynastic continuity. They are a reminder that monumental architecture in the Nile Valley was never exclusive to Egypt.\n\nKush lasted for centuries, adapting to changing political and economic conditions before eventually declining around the 4th century CE. But its legacy did not vanish. It remains embedded in the landscape, in archaeological records, and in the broader history of African state formation.",
  deeper:
    "What was really going on was not imitation, but negotiation of power and identity.\n\nKush shows how civilizations influence each other without collapsing into each other. It engaged with Egyptian systems of religion, kingship, and symbolism, but it did not become Egypt. It maintained its own centers, its own strategies, and eventually its own innovations.\n\nIt also disrupts the tendency to treat Egyptian civilization as an isolated pinnacle. The Nile Valley was a connected corridor. Power flowed both north and south. Kushite rule over Egypt is one of the clearest examples of that reality.\n\nFinally, Kush reveals something about historical framing. When narratives are built around a single dominant civilization, neighboring powers are often reduced or ignored. Kush was not a peripheral culture. It was a major political actor whose story was compressed by later retellings.",
  matters:
    "The Kingdom of Kush matters because it forces a rethinking of how African civilizations are ranked and remembered. It challenges the idea that influence only flowed in one direction and that power in the Nile Valley was always centered in Egypt.\n\nIt also matters today because the visibility of history shapes identity. When Kush is left out or minimized, it narrows the understanding of African political and cultural complexity. Restoring its place expands what people believe was possible on the continent.\n\nIn a present-day world still shaped by narratives of hierarchy between civilizations, Kush stands as evidence that power, innovation, and statecraft in Africa were neither isolated nor secondary. They were central to the region’s historical development.",
  visuals: [
    {
      image: "/images/kush/kush-map.jpg",
      title: "Kush Along the Nile",
      desc: "A map showing the location of Kush relative to Egypt, highlighting the connected Nile corridor rather than a strict boundary."
    },
    {
      image: "/images/kush/kush-pyramids.jpg",
      title: "Pyramids of Meroë",
      desc: "The royal pyramids of Kush demonstrate that monumental architecture in the Nile Valley extended beyond Egypt."
    },
    {
      image: "/images/kush/piye-stela.jpg",
      title: "Victory Stela of King Piye",
      desc: "An inscription documenting Kush's conquest of Egypt, asserting legitimacy and authority as rulers of the Nile."
    }
  ],
  takeaways: [
    "Kush was a major Nile Valley power that at one point ruled Egypt as the 25th Dynasty.",
    "It maintained its own political and cultural identity while engaging deeply with Egyptian systems.",
    "Its pyramids, cities, and records show that advanced statecraft and architecture extended far beyond Egypt alone."
  ],
  reflection:
    "What histories have been reduced to footnotes simply because another civilization was chosen as the main story?"
},
{
  id: 13,
  date: "2026-04-13",
  category: "Power",
  region: "Southern Africa",
  period: "19th Century",
  title: "THE KING WHO REBUILT WAR",
  subtitle: "How Shaka Zulu transformed warfare, discipline, and state power in Southern Africa",
  readingTime: "6 min",
  heroImage: "/images/shaka/shaka-hero.jpg",
  openingLine:
    "Shaka Zulu did not just fight wars. He changed how they were fought.",
  context:
    "Shaka Zulu rose to power in the early 19th century in what is now South Africa. He became leader of the Zulu kingdom during a time of intense regional change known as the Mfecane. Through military innovation, discipline, and centralized authority, he transformed a small chiefdom into a dominant regional power.",
  story:
    "Before Shaka, warfare in the region often involved skirmishes and symbolic conflict. Under his leadership, it became structured, strategic, and deadly efficient.\n\nHe reorganized regiments by age, enforced strict discipline, and introduced new tactics such as the 'horns of the buffalo' formation — where forces would encircle opponents while a central force held them in place.\n\nWeapons also changed. Shaka is associated with the short stabbing spear, designed for close combat rather than throwing. This shift forced soldiers into tighter, more controlled engagements.\n\nHis system built not just an army, but a state. Loyalty, identity, and structure were enforced through military organization. The kingdom expanded rapidly, reshaping the political landscape of the region.\n\nBut his rule was also harsh. Discipline was severe, and expansion came at a human cost. After his death in 1828, internal tensions reshaped the kingdom again.",
  deeper:
    "What was really going on was the consolidation of power through system design. Shaka’s innovations were not random acts of brutality. They were part of a deliberate restructuring of how authority, loyalty, and warfare operated.\n\nHe turned military organization into social organization. Age groups became regiments. Regiments became identity. Identity became power.",
  matters:
    "Shaka Zulu matters because he challenges simplistic narratives of African leadership. He was not just a warrior king. He was a strategist who reshaped systems.\n\nBut his story also reminds us that power built through force carries consequences. Understanding him requires holding both innovation and impact together.",
  visuals: [
    {
      image: "/images/shaka/shaka-map.png",
      title: "Zulu Kingdom Expansion",
      desc: "A map showing the territorial growth and influence of the Zulu kingdom under Shaka."
    },
    {
      image: "/images/shaka/zulu-warriors.jpg",
      title: "Zulu Regiments",
      desc: "Depictions of organized regiments that defined Shaka’s military system."
    },
    {
      image: "/images/shaka/assegai.jpg",
      title: "The Assegai",
      desc: "The short stabbing spear associated with Shaka’s shift in combat tactics."
    }
  ],
  takeaways: [
    "Shaka transformed warfare through structure, discipline, and strategy.",
    "Military organization became a foundation for political power.",
    "His legacy is both innovation and disruption."
  ],
  reflection:
    "When does innovation become domination — and how should history remember that line?"
},
{
  id: 14,
  date: "2026-04-14",
  category: "Architecture",
  region: "Southern Africa",
  period: "11th–15th Century",
  title: "THE STONE CITY WITHOUT MORTAR",
  subtitle: "How Great Zimbabwe built power, trade, and architecture without written explanation",
  readingTime: "6 min",
  heroImage: "/images/zimbabwe/zimbabwe-hero.jpg",
  openingLine:
    "A city of stone rose without mortar — and outsiders refused to believe who built it.",
  context:
    "Great Zimbabwe was a powerful city-state in present-day Zimbabwe, flourishing between the 11th and 15th centuries. It served as a political and economic center connected to regional and international trade networks.",
  story:
    "The city is most famous for its massive stone walls, built without mortar. These structures required precise engineering and labor organization.\n\nGreat Zimbabwe controlled trade routes linking inland gold resources to coastal trade networks connected to the Indian Ocean.\n\nFor years, colonial narratives refused to credit Africans with building it, attributing it to outsiders. This distortion reveals more about colonial thinking than the site itself.",
  deeper:
    "What was really going on was a system of political authority supported by architecture and trade.\n\nThe walls were not just defensive. They were symbolic — expressing power, order, and permanence.",
  matters:
    "Great Zimbabwe matters because it directly challenges narratives that denied African architectural and political sophistication.\n\nIt also shows how trade, power, and design intersected in precolonial Africa.",
  visuals: [
    {
      image: "/images/zimbabwe/ruins.jpg",
      title: "Great Zimbabwe Ruins",
      desc: "The stone structures that defined the city’s architecture."
    }
  ],
  takeaways: [
    "Great Zimbabwe was a major political and economic center.",
    "Its architecture reflects advanced engineering.",
    "Narratives around it were distorted by colonial bias."
  ],
  reflection:
    "What does it mean when history refuses to credit its creators?"
},
{
  id: 15,
  date: "2026-04-15",
  category: "Culture",
  region: "East Africa",
  period: "10th–16th Century",
  title: "THE COAST THAT SPOKE MANY WORLDS",
  subtitle: "How the Swahili Coast became a meeting point of Africa, Arabia, and Asia",
  readingTime: "6 min",
  heroImage: "/images/swahili/swahili-hero.jpg",
  openingLine:
    "On the East African coast, language itself became a map of connection.",
  context:
    "The Swahili Coast stretched along East Africa, linking African societies with traders from Arabia, Persia, India, and beyond.",
  story:
    "Swahili culture developed through trade and interaction. Cities like Kilwa and Mombasa became hubs of commerce and culture.\n\nSwahili language itself reflects this exchange — rooted in Bantu languages but influenced by Arabic and others.",
  deeper:
    "What was really going on was cultural synthesis — not replacement, but blending.",
  matters:
    "The Swahili Coast shows that African identity has always been dynamic and interconnected.",
  visuals: [
    {
      image: "/images/swahili/kilwa.jpg",
      title: "Kilwa Ruins",
      desc: "One of the major Swahili trading cities."
    }
  ],
  takeaways: [
    "Swahili culture emerged through connection, not isolation.",
    "Trade shaped identity as much as economics.",
    "Language reflects history."
  ],
  reflection:
    "What does your language reveal about where you come from?"
},
{
  id: 16,
  date: "2026-04-16",
  category: "Statecraft",
  region: "West Africa",
  period: "14th–19th Century",
  title: "THE CITIES THAT TRADED AND RULED",
  subtitle: "How the Hausa city-states built wealth through trade and governance",
  readingTime: "6 min",
  heroImage: "/images/hausa/hausa-hero.jpg",
  openingLine:
    "Power does not always come from one empire. Sometimes it comes from many cities.",
  context:
    "The Hausa city-states were a network of independent but connected urban centers in West Africa.",
  story:
    "Cities like Kano and Katsina thrived through trade, crafts, and governance.\n\nThey were politically independent but economically connected.",
  deeper:
    "What was really going on was decentralized power.",
  matters:
    "They show that African political systems were not always centralized empires.",
  visuals: [
    {
      image: "/images/hausa/kano.jpg",
      title: "Kano City",
      desc: "A major Hausa city-state."
    }
  ],
  takeaways: [
    "Power can be distributed.",
    "Trade drives urban growth.",
    "Networks matter."
  ],
  reflection:
    "Is power stronger when centralized or shared?"
},
{
  id: 17,
  date: "2026-04-17",
  category: "Knowledge",
  region: "East Africa",
  period: "Medieval–Early Modern",
  title: "THE BOOKS THAT HELD A CIVILIZATION",
  subtitle: "How Ethiopian manuscripts preserved faith, history, and knowledge",
  readingTime: "6 min",
  heroImage: "/images/ethiopia/ethiopia-hero.jpg",
  openingLine:
    "Some civilizations built in stone. Others built in ink.",
  context:
    "Ethiopian manuscripts are among the oldest continuous written traditions in Africa.",
  story:
    "Religious texts, histories, and teachings were preserved through manuscripts written in Ge’ez.\n\nThese works were often illustrated and carefully protected.",
  deeper:
    "What was really going on was knowledge preservation.",
  matters:
    "They show that Africa has long traditions of literacy and scholarship.",
  visuals: [
    {
      image: "/images/ethiopia/manuscript.jpg",
      title: "Ethiopian Manuscript",
      desc: "An example of preserved written tradition."
    }
  ],
  takeaways: [
    "Knowledge systems existed deeply in Africa.",
    "Writing preserves identity.",
    "History survives through records."
  ],
  reflection:
    "What knowledge today is worth preserving for centuries?"
}
];

function formatDate(dateString) {
  const d = new Date(dateString + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function shortDate(dateString) {
  const d = new Date(dateString + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

const PALETTE = {
  cream: "#F5EDE0",
  paper: "#FFF9F0",
  charcoal: "#161311",
  charcoalSoft: "#2B2420",
  textSoft: "#6E6258",
  clay: "#C87F4F",
  orange: "#E87B1E",
  gold: "#D7A928",
  brown: "#A5642A",
  line: "rgba(32, 22, 16, 0.12)",
  white: "#FFFFFF",
};

function Label({ children, light = false }) {
  return (
    <div
      style={{
        fontSize: "12px",
        fontWeight: 900,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: light ? "rgba(255,255,255,0.78)" : PALETTE.clay,
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
        justifyContent: "center",
        padding: "10px 16px",
        borderRadius: "999px",
        background: dark ? "rgba(255,255,255,0.08)" : PALETTE.paper,
        border: dark ? "1px solid rgba(255,255,255,0.10)" : `1px solid ${PALETTE.line}`,
        color: dark ? "rgba(255,255,255,0.92)" : PALETTE.charcoalSoft,
        fontSize: "14px",
        fontWeight: 800,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}

function PatternStrip() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
        gap: "10px",
        maxWidth: "720px",
        margin: "0 auto 18px",
      }}
    >
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          style={{
            height: "18px",
            borderRadius: "999px",
            background:
              "linear-gradient(90deg, #E87B1E 0%, #E87B1E 33%, #D7A928 33%, #D7A928 66%, #A5642A 66%, #A5642A 100%)",
          }}
        />
      ))}
    </div>
  );
}

function SectionBand({ title, children, dark = false }) {
  return (
    <section
      style={{
        background: dark ? PALETTE.charcoal : PALETTE.paper,
        color: dark ? PALETTE.white : PALETTE.charcoal,
        borderRadius: "28px",
        padding: "28px",
        border: dark ? "none" : `1px solid ${PALETTE.line}`,
        boxShadow: dark
          ? "0 18px 40px rgba(0,0,0,0.18)"
          : "0 18px 40px rgba(48, 28, 14, 0.06)",
        marginBottom: "20px",
      }}
    >
      <Label light={dark}>{title}</Label>
      {children}
    </section>
  );
}

function ImageModal({ imageSrc, imageAlt, onClose }) {
  if (!imageSrc) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.88)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1100px",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "-48px",
            right: "0",
            background: "transparent",
            border: "none",
            color: "#fff",
            fontSize: "15px",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            cursor: "pointer",
          }}
        >
          Close
        </button>

        <img
          src={imageSrc}
          alt={imageAlt}
          onClick={(e) => e.stopPropagation()}
          style={{
            width: "100%",
            maxHeight: "85vh",
            objectFit: "contain",
            display: "block",
            borderRadius: "18px",
            boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
          }}
        />
      </div>
    </div>
  );
}

function VisualCard({ visual, onImageClick }) {
  return (
    <div
      style={{
        background: PALETTE.paper,
        border: `1px solid ${PALETTE.line}`,
        borderRadius: "22px",
        overflow: "hidden",
        boxShadow: "0 12px 28px rgba(48, 28, 14, 0.05)",
      }}
    >
      {visual.image && (
        <button
          onClick={() => onImageClick?.(visual.image, visual.title)}
          style={{
            padding: 0,
            border: "none",
            background: "transparent",
            width: "100%",
            cursor: "zoom-in",
            display: "block",
          }}
        >
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
        </button>
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
  if (!todayStory) {
    return (
      <div style={{ padding: "40px", color: PALETTE.charcoal }}>
        No story available for today.
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "22px 18px 80px" }}>
      <section
        style={{
          background:
            "linear-gradient(135deg, rgba(22,19,17,0.98), rgba(36,29,25,0.96))",
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
            textAlign: "center",
            marginInline: "auto",
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
            textAlign: "center",
            marginInline: "auto",
          }}
        >
          One story. One return. One deeper way of seeing the continent, its systems,
          its architecture, its people, and the worlds it built.
        </div>

        <PatternStrip />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <Pill dark>{formatDate(todayISO)}</Pill>
          <Pill dark>{todayStory.readingTime}</Pill>
          <Pill dark>{todayStory.category}</Pill>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <button
            onClick={() => onOpenStory(todayStory)}
            style={{
              background: PALETTE.orange,
              color: PALETTE.white,
              border: "none",
              borderRadius: "999px",
              padding: "18px 30px",
              fontWeight: 900,
              fontSize: "18px",
              textTransform: "uppercase",
              cursor: "pointer",
              minWidth: "320px",
              textAlign: "center",
            }}
          >
            Enter today's story
          </button>

          <button
            onClick={onOpenArchive}
            style={{
              background: "transparent",
              color: PALETTE.white,
              border: "1px solid rgba(255,255,255,0.16)",
              borderRadius: "999px",
              padding: "12px 18px",
              fontWeight: 900,
              fontSize: "14px",
              textTransform: "uppercase",
              cursor: "pointer",
              minWidth: "220px",
              textAlign: "center",
            }}
          >
            Open archive
          </button>
        </div>
      </section>

      <SectionBand title="Today's story" dark>
        <div
          style={{
            maxWidth: "920px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "clamp(34px, 6vw, 72px)",
              lineHeight: 0.94,
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.05em",
              marginBottom: "14px",
            }}
          >
            {todayStory.title}
          </div>

          <div
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "rgba(255,249,240,0.76)",
              maxWidth: "760px",
              margin: "0 auto 18px",
            }}
          >
            {todayStory.subtitle}
          </div>

          {todayStory.heroImage && (
            <img
              src={todayStory.heroImage}
              alt={todayStory.title}
              style={{
                width: "100%",
                maxWidth: "820px",
                height: "340px",
                objectFit: "cover",
                borderRadius: "22px",
                display: "block",
                margin: "0 auto 18px",
              }}
            />
          )}

          <div
            style={{
              fontSize: "16px",
              lineHeight: 1.85,
              color: PALETTE.white,
              maxWidth: "760px",
              margin: "0 auto",
            }}
          >
            {todayStory.openingLine}
          </div>
        </div>
      </SectionBand>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "18px",
        }}
      >
        <SectionBand title="Remember this">
          <div style={{ display: "grid", gap: "12px" }}>
            {todayStory.takeaways?.slice(0, 3).map((item, i) => (
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

        <SectionBand title="Reflection" dark>
          <div
            style={{
              fontSize: "20px",
              lineHeight: 1.8,
              fontWeight: 800,
              color: PALETTE.white,
            }}
          >
            {todayStory.reflection}
          </div>
        </SectionBand>
      </div>
    </div>
  );
}

function StoryView({ story, onBack, onImageClick }) {
  if (!story) {
    return (
      <div style={{ padding: "40px", color: "#fff" }}>
        No story selected.
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "24px 16px 80px" }}>
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
          background:
            "linear-gradient(135deg, rgba(22,19,17,0.98), rgba(36,29,25,0.96))",
          color: PALETTE.white,
          borderRadius: "34px",
          padding: "34px 26px",
          boxShadow: "0 24px 60px rgba(0,0,0,0.22)",
          marginBottom: "22px",
        }}
      >
        <Label light>Today's Ritual</Label>

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

        <PatternStrip />

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
          <button
            onClick={() => onImageClick?.(story.heroImage, story.title)}
            style={{
              width: "100%",
              padding: 0,
              border: "none",
              background: "transparent",
              cursor: "zoom-in",
              display: "block",
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
          </button>
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
          {Array.isArray(story.story)
            ? story.story.map((paragraph, i) => (
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
              ))
            : (
              <p
                style={{
                  margin: 0,
                  fontSize: "17px",
                  lineHeight: 1.9,
                  color: PALETTE.charcoal,
                }}
              >
                {story.story}
              </p>
            )}
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
              <VisualCard
                key={i}
                visual={visual}
                onImageClick={onImageClick}
              />
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
            {story.takeaways?.map((item, i) => (
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
                    background: PALETTE.orange,
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

function ArchiveCard({ story, onOpen, locked = false, onLockedClick }) {
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth <= 640 : false;

  return (
    <button
      onClick={() => {
        if (locked) {
          onLockedClick?.();
        } else {
          onOpen(story);
        }
      }}
      style={{
        width: "100%",
        maxWidth: "100%",
        background: PALETTE.paper,
        border: `1px solid ${PALETTE.line}`,
        borderRadius: "26px",
        padding: isMobile ? "16px" : "22px",
        cursor: "pointer",
        boxShadow: "0 12px 28px rgba(48, 28, 14, 0.05)",
        textAlign: "left",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            story.heroImage && !isMobile ? "280px minmax(0, 1fr)" : "1fr",
          gap: isMobile ? "16px" : "22px",
          alignItems: "center",
          width: "100%",
        }}
      >
        {story.heroImage && (
          <img
            src={story.heroImage}
            alt={story.title}
            style={{
              width: "100%",
              maxWidth: "100%",
              height: isMobile ? "200px" : "220px",
              objectFit: "cover",
              borderRadius: "18px",
              display: "block",
            }}
          />
        )}

        <div
          style={{
            minWidth: 0,
            width: "100%",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: isMobile ? "flex-start" : "center",
              gap: "12px",
              flexWrap: "wrap",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: locked ? PALETTE.textSoft : PALETTE.clay,
              }}
            >
              {locked ? "Upcoming" : story.category}
            </div>

            <div
              style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
                justifyContent: isMobile ? "flex-start" : "flex-end",
              }}
            >
              <Pill>{shortDate(story.date)}</Pill>
              {!locked && <Pill>{story.readingTime}</Pill>}
            </div>
          </div>

          <div
            style={{
              fontSize: isMobile
                ? "clamp(18px, 8vw, 32px)"
                : "clamp(26px, 3.4vw, 46px)",
              lineHeight: 1.02,
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              color: PALETTE.charcoal,
              marginBottom: "12px",
              maxWidth: "100%",
              overflowWrap: "anywhere",
              wordBreak: "break-word",
            }}
          >
            {story.title}
          </div>

          <div
            style={{
              fontSize: isMobile ? "15px" : "17px",
              lineHeight: 1.7,
              color: PALETTE.textSoft,
              maxWidth: "100%",
              overflowWrap: "break-word",
            }}
          >
            {locked
              ? "Not yet time. Focus on today's story first."
              : story.subtitle}
          </div>
        </div>
      </div>
    </button>
  );
}

function ArchiveView({ stories, todayISO, onOpen, onBack, onGoToday }) {
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
          background:
            "linear-gradient(135deg, rgba(22,19,17,0.98), rgba(36,29,25,0.96))",
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
    margin: "0 auto",
    textAlign: "center",
    fontSize: "clamp(34px, 6vw, 72px)",
    lineHeight: 0.94,
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: "-0.05em",
    marginBottom: "14px",
  }}
        >
          <div>Past. Present.</div>
          <div>What's next.</div>
        </div>

        <div
  style={{
    maxWidth: "720px",
    margin: "0 auto",
    textAlign: "center",
    fontSize: "18px",
    lineHeight: 1.7,
    color: "rgba(...)",
  }}
>
          Today's story stays central. Upcoming stories stay visible, but they only
          fully open on their actual day.
        </div>
      </section>

      {todayStory && (
  <SectionBand title="Today">
    <div style={{ maxWidth: "920px", margin: "0 auto" }}>
      <ArchiveCard story={todayStory} onOpen={onOpen} />
    </div>
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
                <ArchiveCard
                  key={story.id}
                  story={story}
                  onOpen={onOpen}
                  locked
                  onLockedClick={onGoToday}
                />
              ))}
          </div>
        </SectionBand>
      )}
    </div>
  );
}

export default function App() {
  const [todayISO, setTodayISO] = useState(TODAY);
  const [view, setView] = useState("home");
  const [selectedStory, setSelectedStory] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    setTodayISO(TODAY);
  }, []);

  const sortedStories = [...STORIES].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const todayStory =
    sortedStories.length > 0
      ? sortedStories.find((story) => story.date === todayISO) || sortedStories[0]
      : null;

  function openStory(story) {
    setSelectedStory(story);
    setView("story");
  }

  function goHome() {
    setSelectedStory(null);
    setView("home");
  }

  function goToTodayStory() {
    if (todayStory) {
      setSelectedStory(todayStory);
      setView("story");
    } else {
      setView("home");
    }
  }

  function openImage(imageSrc, imageAlt) {
    setActiveImage({ src: imageSrc, alt: imageAlt });
  }

  function closeImage() {
    setActiveImage(null);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `linear-gradient(180deg, #C67A30 0%, #A55F2A 120px, ${PALETTE.cream} 120px, ${PALETTE.cream} 100%)`,
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
          onGoToday={goToTodayStory}
        />
      )}

      {view === "story" && selectedStory && (
        <StoryView
          story={selectedStory}
          onBack={goHome}
          onImageClick={openImage}
        />
      )}

      <ImageModal
        imageSrc={activeImage?.src}
        imageAlt={activeImage?.alt}
        onClose={closeImage}
      />
    </div>
  );
}