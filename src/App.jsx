import { useState, useEffect } from "react";

// ─── CONSTANTS ────────────────────────────────────────────────────────────────
const TODAY = "2026-04-01";

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
    date: "2026-03-26",
    category: "Folktale",
    region: "West Africa",
    period: "Ancient — still told today",
    title: "Why the Spider Owns the Stories",
    subtitle: "The Akan tale of how Anansi outsmarted the Sky God — and what that spider still carries",
    readingTime: "5 min",
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
      { icon: "🗺️", title: "The Akan Homeland", desc: "Present-day Ghana and Côte d'Ivoire — the birthplace of the Anansi tradition, a culture whose storytelling shaped diaspora communities across three continents." },
      { icon: "🕷️", title: "The Spider as Symbol", desc: "In Akan tradition, the spider is a weaver — of webs and of worlds. Its form is deliberate: patient, architectural, invisible until the trap is complete." },
      { icon: "🧵", title: "Kente Cloth", desc: "Akan weavers encode proverbs and histories into cloth patterns — another tradition of carrying deep meaning in plain sight, in a form anyone can see but only some can read." }
    ]
  },
  {
    id: 2,
    date: "2026-03-27",
    category: "Trade",
    region: "East Africa",
    period: "9th–16th Century CE",
    title: "The Coast That Traded With the World",
    subtitle: "How East African city-states built a civilization at the meeting point of Africa, Arabia, and Asia",
    readingTime: "6 min",
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
      { icon: "🗺️", title: "The Swahili Coast", desc: "1,800 miles from Somalia to Mozambique — each port city a node in the Indian Ocean network, shaped by the monsoon winds that made regular, predictable trade voyages possible." },
      { icon: "⛵", title: "The Monsoon System", desc: "The seasonal wind reversal that powered Indian Ocean trade — a natural infrastructure understood and exploited by Swahili merchants for centuries before any European ship appeared in these waters." },
      { icon: "🏛️", title: "Kilwa Kisiwani", desc: "The great stone ruins of Kilwa, Tanzania — a UNESCO World Heritage site, the city Ibn Battuta called one of the world's most beautiful, now slowly reclaimed by ocean and jungle." }
    ]
  },
  {
    id: 3,
    date: "2026-03-28",
    category: "Architecture",
    region: "Southern Africa",
    period: "11th–15th Century CE",
    title: "The City They Said Africans Didn't Build",
    subtitle: "How Great Zimbabwe was erased, misattributed, and finally reclaimed",
    readingTime: "6 min",
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
      { icon: "🏗️", title: "The Great Enclosure", desc: "250 meters in circumference, walls up to 11 meters high — built without mortar, using precisely cut granite blocks. Still standing after nine hundred years." },
      { icon: "🗺️", title: "Southern Africa", desc: "The ruins sit in the Masvingo province of present-day Zimbabwe, in a valley between granite-rich hills — the very landscape that provided its building material." },
      { icon: "⚱️", title: "The Trade Record", desc: "Chinese porcelain, Arabian glass, Persian beads, and gold artifacts found inside Great Zimbabwe — a physical inventory of a civilization connected to the Indian Ocean world." }
    ]
  },
  {
    id: 4,
    date: "2026-03-29",
    category: "Resistance",
    region: "Central Africa",
    period: "17th Century CE",
    title: "The Queen Who Refused to Sit on the Floor",
    subtitle: "How Nzinga of Ndongo turned every encounter with Portugal into a statement of sovereignty",
    readingTime: "6 min",
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
      { icon: "🗺️", title: "The Kingdom of Ndongo", desc: "Present-day Angola — the territory Nzinga defended across four decades, and which she expanded through the capture of the Kingdom of Matamba after losing Ndongo's capital." },
      { icon: "👑", title: "Nzinga's Statue, Luanda", desc: "A monumental statue of Queen Nzinga stands today in central Luanda — erected after Angolan independence as a national symbol of resistance and self-determination." },
      { icon: "⚔️", title: "The Dutch Alliance", desc: "Nzinga's partnership with the VOC (Dutch East India Company) against Portugal — a geopolitical maneuver that exploited European rivalry for African strategic benefit." }
    ]
  },
  {
    id: 5,
    date: "2026-03-30",
    category: "Culture",
    region: "West Africa",
    period: "Ancient — present day",
    title: "The Memory of a People",
    subtitle: "What the griots carried across generations — and why it was more powerful than any written archive",
    readingTime: "5 min",
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
      { icon: "🎵", title: "The Kora", desc: "A 21-string bridge harp unique to West Africa — the primary instrument of the griot tradition, capable of extraordinary harmonic complexity and the primary vehicle for encoded historical knowledge." },
      { icon: "📜", title: "The Living Archive", desc: "A trained griot holds genealogies stretching back 15+ generations, the terms of long-ago treaties, battle histories, and ceremonial songs — an oral library built and maintained through daily practice across a lifetime." },
      { icon: "🗺️", title: "The Griot Belt", desc: "The tradition spans Senegal, Gambia, Mali, Guinea, Burkina Faso — mapping almost exactly onto the old footprint of the Mali and Songhai Empires, the civilizations that first institutionalized the role." }
    ]
  },
  {
    id: 6,
    date: "2026-03-31",
    category: "Belief Systems",
    region: "West Africa",
    period: "Ancient — 20th Century",
    title: "The Star the Textbooks Missed",
    subtitle: "The Dogon people described Sirius B in precise detail — centuries before telescopes could find it",
    readingTime: "6 min",
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
      { icon: "⭐", title: "Sirius and Sirius B", desc: "Sirius is the brightest star in the night sky. Its companion Sirius B — a white dwarf — is invisible to the naked eye and requires a powerful telescope. The Dogon described both, and the orbital relationship between them." },
      { icon: "🏔️", title: "The Bandiagara Escarpment", desc: "The dramatic cliff landscape of Mali where the Dogon have lived for over a thousand years — their villages built into the cliff face, their cosmology mapped onto the landscape itself." },
      { icon: "🔭", title: "The Sigui Ceremony", desc: "Held once every 60 years, the Sigui is one of the Dogon's most important rituals — a ceremony of renewal, memory, and transmission connected directly to their astronomical calendar and the Sirius system." }
    ]
  },
  {
    id: 7,
    date: "2026-04-01",
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
      { icon: "🕌", title: "Djinguereber Mosque, Timbuktu", desc: "Built in 1327 CE by Abu Ishaq al-Sahili — the architect Mansa Musa brought back from his pilgrimage. Still standing. Still in use. A building that is almost seven hundred years old." },
      { icon: "🗺️", title: "The Catalan Atlas, 1375", desc: "The medieval map that placed Mansa Musa at Africa's center — gold in his hand, crown on his head — forcing European cartography to acknowledge what existed south of the Sahara." },
      { icon: "📚", title: "Timbuktu's Manuscripts", desc: "An estimated 400,000–700,000 manuscripts — on mathematics, astronomy, medicine, theology, law — preserved in Timbuktu. Many were hidden from French colonial forces by local families. Many survive." }
    ]
  }
];

// ─── UTILITIES ────────────────────────────────────────────────────────────────
function formatDate(dateStr) {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
}
function shortDate(dateStr) {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

// ─── HOME VIEW ────────────────────────────────────────────────────────────────
function HomeView({ story, onEnter, onArchive }) {
  const cat = CAT[story.category];

  return (
    <div style={{ background: "#F5EDE0", minHeight: "100vh", fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      {/* Top bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px 16px", borderBottom: "1px solid #E0CEB8" }}>
        <div>
          <div style={{ fontSize: "20px", fontWeight: "700", color: "#1A0D02", letterSpacing: "0.08em", fontFamily: "system-ui, sans-serif" }}>SANKOFA</div>
          <div style={{ fontSize: "11px", color: "#9A8070", letterSpacing: "0.12em", fontFamily: "system-ui, sans-serif", marginTop: "2px" }}>A DAILY AFRICAN STORY</div>
        </div>
        <button
          onClick={onArchive}
          style={{ background: "none", border: "1px solid #C8B89A", color: "#7A6555", padding: "7px 16px", borderRadius: "20px", fontSize: "13px", cursor: "pointer", fontFamily: "system-ui, sans-serif", letterSpacing: "0.05em" }}>
          Archive
        </button>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: "480px", margin: "0 auto", padding: "32px 20px 60px" }}>
        {/* Date */}
        <div style={{ fontSize: "13px", color: "#9A8070", fontFamily: "system-ui, sans-serif", letterSpacing: "0.08em", marginBottom: "8px", textAlign: "center" }}>
          {formatDate(TODAY).toUpperCase()}
        </div>
        <div style={{ textAlign: "center", fontSize: "13px", color: "#B8521E", fontFamily: "system-ui, sans-serif", letterSpacing: "0.15em", fontWeight: "600", marginBottom: "32px" }}>
          TODAY'S STORY
        </div>

        {/* Story card */}
        <div
          onClick={onEnter}
          style={{ background: "#FFFCF5", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 24px rgba(60,30,0,0.10)", cursor: "pointer", border: "1px solid #EAD9C4" }}>

          {/* Hero gradient */}
          <div style={{
            background: `linear-gradient(145deg, ${cat.heroA} 0%, ${cat.heroB} 100%)`,
            height: "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "20px",
            position: "relative"
          }}>
            {/* Subtle pattern overlay */}
            <div style={{ position: "absolute", inset: 0, opacity: 0.06, backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
            <div style={{ position: "relative" }}>
              <div style={{ display: "flex", gap: "8px", marginBottom: "10px", alignItems: "center" }}>
                <span style={{ background: "rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.95)", padding: "3px 10px", borderRadius: "12px", fontSize: "11px", fontFamily: "system-ui, sans-serif", letterSpacing: "0.1em" }}>
                  {story.category.toUpperCase()}
                </span>
                <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "11px", fontFamily: "system-ui, sans-serif" }}>
                  · {story.readingTime} read
                </span>
              </div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", fontFamily: "system-ui, sans-serif", letterSpacing: "0.06em" }}>
                {story.region} · {story.period}
              </div>
            </div>
          </div>

          {/* Text content */}
          <div style={{ padding: "24px 22px 22px" }}>
            <h2 style={{ fontSize: "24px", lineHeight: "1.25", color: "#1A0D02", margin: "0 0 8px", fontWeight: "700" }}>
              {story.title}
            </h2>
            <p style={{ fontSize: "14px", color: "#7A6555", margin: "0 0 20px", lineHeight: "1.5", fontStyle: "italic" }}>
              {story.subtitle}
            </p>
            <p style={{ fontSize: "15px", color: "#4A3020", margin: "0 0 22px", lineHeight: "1.65", borderLeft: "3px solid #C4871F", paddingLeft: "14px" }}>
              {story.openingLine}
            </p>
            <button
              style={{ width: "100%", background: `linear-gradient(135deg, ${cat.heroA}, ${cat.heroB})`, color: "white", border: "none", padding: "14px", borderRadius: "10px", fontSize: "15px", fontFamily: "system-ui, sans-serif", fontWeight: "600", cursor: "pointer", letterSpacing: "0.04em" }}>
              Enter Today's Story →
            </button>
          </div>
        </div>

        {/* Footer nudge */}
        <p style={{ textAlign: "center", fontSize: "13px", color: "#B8A898", marginTop: "28px", fontFamily: "system-ui, sans-serif", lineHeight: "1.6" }}>
          Five to seven minutes.<br />One story. Every day.
        </p>
      </div>
    </div>
  );
}

// ─── STORY VIEW ───────────────────────────────────────────────────────────────
function StoryView({ story, onBack }) {
  const cat = CAT[story.category];

  useEffect(() => { window.scrollTo(0, 0); }, [story]);

  return (
    <div style={{ background: "#F5EDE0", minHeight: "100vh", fontFamily: "'Georgia', 'Times New Roman', serif" }}>

      {/* Back button */}
      <div style={{ padding: "16px 20px", borderBottom: "1px solid #E0CEB8", background: "#F5EDE0", position: "sticky", top: 0, zIndex: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button onClick={onBack} style={{ background: "none", border: "none", color: "#7A6555", fontSize: "14px", cursor: "pointer", fontFamily: "system-ui, sans-serif", display: "flex", alignItems: "center", gap: "6px" }}>
          ← Back
        </button>
        <div style={{ fontSize: "11px", color: "#B8A898", fontFamily: "system-ui, sans-serif", letterSpacing: "0.1em" }}>SANKOFA</div>
      </div>

      {/* Hero */}
      <div style={{ background: `linear-gradient(155deg, ${cat.heroA} 0%, ${cat.heroB} 100%)`, padding: "40px 24px 36px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.06, backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 75% 80%, white 1px, transparent 1px), radial-gradient(circle at 50% 20%, white 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div style={{ maxWidth: "680px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "16px", flexWrap: "wrap" }}>
            <span style={{ background: "rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.95)", padding: "4px 12px", borderRadius: "14px", fontSize: "11px", fontFamily: "system-ui, sans-serif", letterSpacing: "0.12em", fontWeight: "600" }}>
              {story.category.toUpperCase()}
            </span>
            <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "12px", fontFamily: "system-ui, sans-serif" }}>
              {story.readingTime} read
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(26px, 5vw, 38px)", lineHeight: "1.15", color: "white", margin: "0 0 12px", fontWeight: "700" }}>
            {story.title}
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.78)", margin: "0 0 20px", lineHeight: "1.5", fontStyle: "italic" }}>
            {story.subtitle}
          </p>
          <div style={{ display: "flex", gap: "16px", fontSize: "12px", color: "rgba(255,255,255,0.6)", fontFamily: "system-ui, sans-serif", letterSpacing: "0.05em" }}>
            <span>📍 {story.region}</span>
            <span>📅 {story.period}</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "0 20px 80px" }}>

        {/* Opening pull quote */}
        <div style={{ margin: "36px 0 32px", padding: "20px 22px", background: "#FFFCF5", borderRadius: "12px", borderLeft: "4px solid #C4871F", boxShadow: "0 2px 12px rgba(60,30,0,0.06)" }}>
          <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#2A1400", margin: 0, fontStyle: "italic", fontWeight: "500" }}>
            "{story.openingLine}"
          </p>
        </div>

        {/* Context */}
        <SectionBlock label="CONTEXT" labelColor={cat.badge}>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#3A2010", margin: 0 }}>
            {story.context}
          </p>
        </SectionBlock>

        {/* The Story */}
        <SectionBlock label="THE STORY" labelColor={cat.badge}>
          {story.story.map((para, i) => (
            <p key={i} style={{ fontSize: "16px", lineHeight: "1.85", color: "#2A1400", margin: "0 0 18px", whiteSpace: "pre-line" }}>
              {para}
            </p>
          ))}
        </SectionBlock>

        {/* What Was Really Going On */}
        <SectionBlock label="WHAT WAS REALLY GOING ON" labelColor={cat.badge} accent>
          {story.deeper.split("\n\n").map((para, i) => (
            <p key={i} style={{ fontSize: "16px", lineHeight: "1.85", color: "#2A1400", margin: "0 0 16px" }}>
              {para}
            </p>
          ))}
        </SectionBlock>

        {/* Why It Matters */}
        <SectionBlock label="WHY IT MATTERS" labelColor={cat.badge}>
          <p style={{ fontSize: "16px", lineHeight: "1.85", color: "#2A1400", margin: 0 }}>
            {story.matters}
          </p>
        </SectionBlock>

        {/* Supporting visuals */}
        <div style={{ margin: "36px 0" }}>
          <div style={{ fontSize: "11px", color: "#B8A898", fontFamily: "system-ui, sans-serif", letterSpacing: "0.14em", marginBottom: "16px" }}>VISUALIZE IT</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {story.visuals.map((v, i) => (
              <div key={i} style={{ background: "#FFFCF5", borderRadius: "12px", padding: "16px 18px", border: "1px solid #EAD9C4", display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "26px", lineHeight: 1, flexShrink: 0, marginTop: "2px" }}>{v.icon}</span>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: "700", color: "#1A0D02", fontFamily: "system-ui, sans-serif", marginBottom: "5px" }}>{v.title}</div>
                  <div style={{ fontSize: "13px", color: "#7A6555", lineHeight: "1.6" }}>{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Remember This */}
        <div style={{ background: `linear-gradient(135deg, ${cat.heroA}18, ${cat.heroB}10)`, borderRadius: "14px", padding: "24px 22px", border: `1px solid ${cat.badge}22`, margin: "36px 0" }}>
          <div style={{ fontSize: "11px", color: cat.badge, fontFamily: "system-ui, sans-serif", letterSpacing: "0.14em", fontWeight: "600", marginBottom: "18px" }}>REMEMBER THIS</div>
          {story.takeaways.map((t, i) => (
            <div key={i} style={{ display: "flex", gap: "12px", marginBottom: i < story.takeaways.length - 1 ? "14px" : 0 }}>
              <span style={{ color: cat.badge, fontWeight: "700", fontFamily: "system-ui, sans-serif", fontSize: "15px", flexShrink: 0, marginTop: "2px" }}>{i + 1}.</span>
              <p style={{ fontSize: "15px", lineHeight: "1.65", color: "#2A1400", margin: 0 }}>{t}</p>
            </div>
          ))}
        </div>

        {/* Reflection */}
        <div style={{ background: "#1A0D02", borderRadius: "14px", padding: "28px 24px", margin: "36px 0" }}>
          <div style={{ fontSize: "11px", color: "#C4871F", fontFamily: "system-ui, sans-serif", letterSpacing: "0.14em", fontWeight: "600", marginBottom: "16px" }}>TODAY'S REFLECTION</div>
          <p style={{ fontSize: "18px", lineHeight: "1.65", color: "#F5EDE0", margin: 0, fontStyle: "italic", fontWeight: "500" }}>
            {story.reflection}
          </p>
        </div>

        {/* Story date */}
        <p style={{ textAlign: "center", fontSize: "12px", color: "#C8B89A", fontFamily: "system-ui, sans-serif", letterSpacing: "0.08em" }}>
          {formatDate(story.date)}
        </p>
      </div>
    </div>
  );
}

function SectionBlock({ label, labelColor, accent, children }) {
  return (
    <div style={{ margin: "32px 0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
        <div style={{ fontSize: "11px", color: labelColor, fontFamily: "system-ui, sans-serif", letterSpacing: "0.14em", fontWeight: "600" }}>{label}</div>
        <div style={{ flex: 1, height: "1px", background: "#E0CEB8" }} />
      </div>
      {accent ? (
        <div style={{ background: "#FFFCF5", borderRadius: "12px", padding: "20px", border: "1px solid #EAD9C4" }}>
          {children}
        </div>
      ) : children}
    </div>
  );
}

// ─── ARCHIVE VIEW ─────────────────────────────────────────────────────────────
function ArchiveView({ stories, onOpen, onBack }) {
  return (
    <div style={{ background: "#F5EDE0", minHeight: "100vh", fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      <div style={{ padding: "16px 20px", borderBottom: "1px solid #E0CEB8", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#F5EDE0", position: "sticky", top: 0, zIndex: 10 }}>
        <button onClick={onBack} style={{ background: "none", border: "none", color: "#7A6555", fontSize: "14px", cursor: "pointer", fontFamily: "system-ui, sans-serif", display: "flex", alignItems: "center", gap: "6px" }}>
          ← Home
        </button>
        <div style={{ fontSize: "11px", color: "#B8A898", fontFamily: "system-ui, sans-serif", letterSpacing: "0.1em" }}>SANKOFA</div>
      </div>

      <div style={{ maxWidth: "560px", margin: "0 auto", padding: "32px 20px 60px" }}>
        <h2 style={{ fontSize: "26px", color: "#1A0D02", margin: "0 0 6px", fontWeight: "700" }}>Past Stories</h2>
        <p style={{ fontSize: "14px", color: "#9A8070", margin: "0 0 32px", fontFamily: "system-ui, sans-serif" }}>
          {stories.length} stor{stories.length !== 1 ? "ies" : "y"} in your archive
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {stories.map((s) => {
            const cat = CAT[s.category];
            return (
              <div
                key={s.id}
                onClick={() => onOpen(s)}
                style={{ background: "#FFFCF5", borderRadius: "14px", padding: "0", overflow: "hidden", border: "1px solid #EAD9C4", cursor: "pointer", display: "flex", boxShadow: "0 2px 10px rgba(60,30,0,0.06)" }}>
                {/* Color strip */}
                <div style={{ width: "6px", background: `linear-gradient(to bottom, ${cat.heroA}, ${cat.heroB})`, flexShrink: 0 }} />
                <div style={{ padding: "16px 18px", flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "10px" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "7px", flexWrap: "wrap" }}>
                        <span style={{ fontSize: "10px", fontFamily: "system-ui, sans-serif", letterSpacing: "0.1em", color: cat.badge, background: cat.badgeBg, padding: "2px 8px", borderRadius: "10px", fontWeight: "600" }}>
                          {s.category.toUpperCase()}
                        </span>
                        <span style={{ fontSize: "11px", color: "#B8A898", fontFamily: "system-ui, sans-serif" }}>
                          {s.readingTime} · {s.region}
                        </span>
                      </div>
                      <div style={{ fontSize: "16px", fontWeight: "700", color: "#1A0D02", lineHeight: "1.3", marginBottom: "5px" }}>
                        {s.title}
                      </div>
                      <div style={{ fontSize: "13px", color: "#7A6555", lineHeight: "1.4", fontStyle: "italic" }}>
                        {s.subtitle}
                      </div>
                    </div>
                    <div style={{ fontSize: "12px", color: "#C8B89A", fontFamily: "system-ui, sans-serif", flexShrink: 0, textAlign: "right", lineHeight: "1.4" }}>
                      {shortDate(s.date)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function Sankofa() {
  const [view, setView] = useState("home");
  const [activeStory, setActiveStory] = useState(null);

  const todayStory = STORIES.find(s => s.date === TODAY);
  const pastStories = STORIES.filter(s => s.date < TODAY).sort((a, b) => b.date.localeCompare(a.date));

  const openStory = (story) => {
    setActiveStory(story);
    setView("story");
  };

  if (view === "story" && activeStory) {
    const fromArchive = activeStory.date < TODAY;
    return <StoryView story={activeStory} onBack={() => setView(fromArchive ? "archive" : "home")} />;
  }

  if (view === "archive") {
    return <ArchiveView stories={pastStories} onOpen={openStory} onBack={() => setView("home")} />;
  }

  return <HomeView story={todayStory} onEnter={() => openStory(todayStory)} onArchive={() => setView("archive")} />;
}
