const captions = [
  // 1
  "Happy birthday, Acey. My sweet, my love for life.",
  // 2
  "We've been in this together since childhood, and my absolute favorite memories all have you in them. Endless hours of playing with dolls, hunting for pretty rocks, building our little kingdoms, and taking our imaginary science and ghost-hunting careers entirely too seriously.",
  // 3
  "Back when our biggest problems were crush panics, petty drama, and full-blown catfights over nothing. We had our fair share of elementary school misunderstandings, but not once did I ever consider replacing you as my best friend.",
  // 4
  "One of my all-time favorite photos of us. Grade 7, entering private school, and suddenly feeling like we were a world away from home. It was our first real taste of freedom, and even though the school came with endless drama, the memories we made were priceless.",
  // 5
  "Back when our world was just the distance between our front doors. Everyday laag and endless house-hopping and turning our homes into kingdoms where every room had a game of its own.",
  // 6
  "When you went to Capitol and I went to Tomas, my whole world shifted. Up until then, I genuinely thought it would just be the two of us forever, and to be honest, I resented you for a while for picking a different school. But life had other plans. Even through the quiet months where we lost touch, you were always on my mind. Looking back, God gave us the chance to step outside our little bubble and meet people who'd shape us\u2014proof that our world could grow without losing where we came from.",
  // 7
  "After five years of doing life separately, we both ended up here. (Okay, I heavily influenced/low-key scammed you into this degree, but only because I was determined to rekindle our friendship).",
  // 8
  "Different sections and chaotic college routines meant we couldn't hang out as much as I hoped. But when we finally did, the floodgates opened. Hours felt like minutes, talking endlessly like we never missed a beat.",
  // 9
  "One of my absolute favorite photos of you. I remember standing there thinking the sunlight was made just for you that day. You looked so genuinely happy, glowing like a sunflower, while aggressively waving around that katana umbrella like it was the coolest thing on earth.",
  // 10
  "The crown jewel of my camera roll. You look ridiculously cute holding that handmade purple flower. Peak Girlfriend's Day behavior (August 1st core memory!) and easily my number one photo of you.",
  // 11
  "Attending an anime convention with you is a whole different level of fun. There's nothing quite like navigating the crowds, taking in the chaos, and soaking up the energy side by side with you.",
  // 12
  "My number one fan, personal cheerleader, and ultimate hype woman. Hearing you say I was your favorite cosplayer completely melted my heart. Thank you for always making me feel so seen and supported.",
  // 13
  "Just hanging out with you on campus feels like living out the dream we talked about for years. Seeing us actually here, walking these grounds side by side, makes the college routine feel a little like magic.",
  // 14
  "Whenever we sit together here, I can't help but look back at how far we've come. From neighborhood playhouses and childhood drama to surviving the college grind together, we really grew up.",
  // 15
  "More convention pictures with you! And with Frieren <3",
  // 16
  "Nth convention picture! This time, with Vaggie :3",
  // 17
  "*/Inserts Minecraft villager noises HAHAHHAHAHA",
  // 18
  "Commute struggles turned into the biggest blessing in disguise. Moving into our dorm gave us our first true taste of freedom side by side. We navigated the sudden weight of growing up by finding magic in the little things and holding onto each other. Living with you really was a dream come true.",
  // 19
  "Even when the vibes at CCCM were questionable and we weren't the biggest fans of the people, we weathered it together. We actually started going to church way more often, though at first, we genuinely whispered to each other that we might have accidentally joined a cult because of how weird the environment felt. But little by little, we adjusted, figured out their ways, and found our own quiet peace in the routine.",
  // 20
  "Living with you is pure magic wrapped in absolute daily stress, haha. The eternal panic of 'what are we eating?' paired with the desperate struggle not to rot in bed all day. But carving out our own little corners in that room made it feel like home.",
  // 21
  "You consistently say yes to every single chaotic plan I cook up\u2014even the ones where I can visibly see your soul leaving your body, haha. Call it people-pleasing, but I know it's just your quiet way of showing you love me. No matter how unhinged my ideas get, you are always, unconditionally IN. My absolute ride-or-die!",
  // 22
  "Never forgetting the night I offered a midnight makeover, got exhausted halfway through, and left you looking like Two-Face with zero remorse, HAHAHA. Thank you for being my most patient, half-glammed victim.",
  // 23
  "I might be the worst late night makeup artist on earth, but you were undeniably working it. Half-done and still looking pretty as ever! SLAYYY QUEEN!",
  // 24
  "A moment of silence for the beloved and iconic yellow fan. It may not have survived, but your pure sunflower-level obsession with the color yellow never gets old.",
  // 25
  "Thank you for this libreng pizza! Way back in our ultimate paldogs era. Even on our absolute zero-peso days, at least we were broke together, haha. I miss our spontaneous pizza dates so much. I need us to run this back immediately.",
  // 26
  "Locked out of the dorm until 6 AM, running entirely on caffeine and desperation. It was brutally exhausting, but while you were stressing over deadlines, I was having the time of my life taking candid, unfiltered photos of your suffering. My deepest apologies for making your survival mode my personal comedy show, HAHAHA.",
  // 27
  "Your zero-hesitation cat-cuddle policy gives me anxiety every single time. While I'm over here panicking about street germs, you're treating every stray like a long-lost child. A true testament to your kind, gentle heart. Nobody loves a wisswiss quite like you do.",
  // 28
  "Church photos to prove nga mabuting tao tayo, HAHAHA. Peak dorm event where we sat on the cold floor praying and legitimately asked ourselves, 'Did we just accidentally join a cult?!' It was undeniably weird and a little confusing, but looking back, strangely fulfilling to experience it together.",
  // 29
  "You in that violently eyesore neon yellow shirt, HAHAHA. My retinas were fighting for their lives, but honestly? It actually matched your hair color, so I'll let you have this one.",
  // 30
  "Peak delusion hours: blasting music to drown out the impending doom of our Calc exam while aggressively writing on whiteboards. Bringing entire boards to the lounge was pure clout chaser energy, but if we were going down, we were going down looking like serious math scholars, AHAHAHAHA.",
  // 31
  "Caught red-handed! I live for the exact split second your eyes lock onto my camera lens. Absolute cinema every time you realize you've just become the star of another candid photo shoot, HAHAHAHAHAHA. Talk about the look of pure betrayal! OAVER HAHAHA",
  // 32
  "Fresh out of church and back to crime, HAHAHA. That look of pure, unadulterated betrayal\u2014like I broke all ten commandments by snapping this photo, HAHAHA. I live for this reaction every single time.",
  // 33 (maps to image 34)
  "Stolen without permission, zero regrets. You looked so cute in this mirror pic on Facebook that I had to recruit it for the gallery, HAHAHAHA.",
  // 34 (maps to image 35)
  "Reindeer yan siya, and definitely the prettiest one out there. Stolen straight from your timeline again, HAHAHAHAHA. Loving the shorter hair on you here!",
  // 35 (maps to image 36)
  "Our first year-end celebration at CCCM was such a blast! We even took home an award for having one of the cleanest rooms. A historical achievement we will probably never repeat again, HAHAHHAHA. Here you are serving soft-girl cuteness, while I'm giving badass bitch energy. Polar opposite attracts, I guess?",
  // 36 (maps to image 37)
  "Another one from that night. Honestly just think we looked really cute here, haha.",
  // 37 (maps to image 38)
  "Elphaba-themed glam! Finally finished an entire face of makeup on you without passing out halfway through, haha. The girlies bailed on the night out, so we took our fully glammed-up selves back to the dorm and just drank together. Honestly, way better that way.",
  // 38 (maps to image 39)
  "Thank you for staying up until sunrise with me gluing individual petals together like certified maniacs. You were so invested, staring at these flowers like a proud mother, projecting the exact cinematic tearjerker reaction he owed us.",
  // 39 (maps to image 40)
  "Switch flipped from supportive bestie to psychotic killer in negative three seconds. That look screams: 'If he doesn't frame these flowers on his wall, I will end his bloodline myself.' Straight-up horror movie villain smile, ready to paint the town red. Protect our sleep-deprived arts-and-crafts at ALL COSTS!",
  // 40 (maps to image 41)
  "CCCM recollection era! We were supposed to be having a holy, introspective spiritual awakening, but instead, we hijacked the entire event into a cinematic set for your short film, HAHAHA. Running around taking videos like certified maniacs. It breaks my heart that moving out this sem means no more dorm recollections for us, but man, did we milk this one for every drop of chaotic fun.",
  // 41 (maps to image 42)
  "The post-recollection aftermath. We were so bone-tired from travelling back that you literally chose the cold dorm floor as your bed. Stepped into the shower, stepped out 15 minutes later, and you were fully in dreamland down there. Iconic crashout.",
  // 42 (maps to image 43)
  "Finding you crumpled on our bathroom floor, still in your work uniform, completely shattered from that shift. I tried to laugh and crack jokes just to keep the air from feeling so heavy, but behind that, my heart was genuinely breaking for you. Living together stripped away every filter. It forced us to witness the rawest, most exhausted, unguarded parts of each other. It goes both ways, but above everything, I am endlessly grateful that when the world got too heavy, I was right there to sit in the trenches with you.",
  // 43 (maps to image 44)
  "AceyBerry moment. Honestly just looked way too cute here to not give it a spot on the site.",
  // 44 (maps to image 45)
  "Audition photo 1 for the official Acey profile picture. The stress you put me through just to pick one!",
  // 45 (maps to image 46)
  "Audition photo 2: peak dewy wet-girl aesthetic. Flawless skin, zero notes. How was I supposed to choose?!",
  // 46 (maps to image 47)
  "Audition photo 3: Very Slayyy. Honestly glad I saved all three because each one deserved its own billboard.",
  // 47 (maps to image 48)
  "Thesis proposal update in full swing. Everyone's blood pressure is through the roof, life or death academic stakes. Meanwhile, you're locked in on your laptop, most likely scrolling through TikTok, HAHAHA. Peak coping mechanism.",
  // 48 (maps to image 49)
  "Exhibit B: The absolute audacity! I caught you cracking a whole smile at your screen. In what universe is THAT the face of someone fighting for their life to save the presentation?! Stressed where?! Definitely knee-deep on your FYP, HAHAHA.",
  // 49 (maps to image 50)
  "The moment you clocked my camera and decided we needed matching side-tongue poses right before our thesis presentation update, HAHAHA. Kinsa ragud na si maam? Research what? Maximum clownery.",
  // 50 (maps to image 51)
  "Just a normal day living with you: casually glancing over only to see you wearing earphones directly on your eyes. Revolutionary scientific discovery: Acey's eyes can hear! Why put earphones in your ears like a normal, functioning human when you can suction them directly onto your eyelids? Peak dorm delusion at its absolute finest, HAHAHA.",
  // 51 (maps to image 52)
  "Discrete Math survival mode, HAHAHA. Absolutely battered, bruised, and fighting for our lives trying to finish those never-ending assignments. Literal nga smiling through the pain. Proof that suffering together builds character (and massive resentment).",
  // 52 (maps to image 53)
  "Complete and utter spiritual dissociation. Discrete Math has officially ejected your soul from your mortal vessel. Staring into the middle distance with negative three thoughts in your head, completely numb to the homework terror, HAHAHA.",
  // 53 (maps to image 54)
  "Looking up at me like a Victorian orphan who has surrendered all will to survive. Zero hope left in that body to even register a blink, HAHAHAHA. Just two dead eyes begging the universe to wipe Discrete Math off the academic curriculum.",
  // 54 (maps to image 55)
  "Buying an entire cake on a totally unremarkable weekday with literally zero occasions to justify it, HAHAHA. No birthdays, no milestones, just two feral dorm roommates devouring it like maniacs straight out of the box. A certified reward for the exhausting, daily chore of simply staying alive!",
  // 55 (maps to image 56)
  "Malupetang thirstrap! Sarap\u2026",
];

export default captions;
