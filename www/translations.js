// The Black File — game & UI text data for all supported languages.
// Loaded before app.js (must load first: app.js reads the global TRANSLATIONS).

const TRANSLATIONS = {
        en: {
            appTitle: "The Black File | Othmane Ettoumi",
            appSub: "Smart Detective Game – 20 Criminal Cases",
            profileBtn: "👤 Detective Profile",
            chatBtn: "💬 Friends Chat",
            mpBtn: "🌐 Play with Friends",
            statusReady: "Ready for Duty",
            archiveTitle: "📁 Case Archives (20 Crimes)",
            archiveDesc: "Choose from 20 progressive difficulty cases to start your investigation.",
            footerText: "The Black File © 2026 - Designed by: Othmane Ettoumi | 100% Offline (Multiplayer needs internet)",
            filterAll: "All",
            filterEasy: "Easy",
            filterMedium: "Medium",
            filterHard: "Hard",
            filterExtreme: "Extreme",
            backArchive: "← Back to Archives",
            crimeSceneBanner: "CRIME SCENE INVESTIGATION",
            startInv: "Proceed to Crime Scene →",
            backBrief: "← Back to Case Brief",
            notesBtn: "📝 Detective Notes",
            hintBtn: "💡 Request Hint",
            evidenceHeader: "🔍 Physical Evidence",
            suspectsHeader: "👥 Suspects Interrogation",
            accuseBtn: "⚖️ Accuse Suspect & Solve Case",
            returnMenu: "Return to Archives",
            retryCase: "Reinvestigate Case",
            close: "Close",
            interrogateQ: "Interrogation Questions:",
            accuseModalTitle: "⚖️ Final Accusation",
            accuseModalDesc: "Select the true culprit carefully. Wrong accusation will damage your detective rank!",
            cancel: "Cancel",
            confirmAccuse: "Confirm Accusation",
            notesTitle: "📝 Detective Notes",
            notesDesc: "Write down your observations and theories:",
            notesClose: "Close",
            notesSave: "Save Notes",
            hintTitle: "💡 Detective Hint",
            hintClose: "Got it",
            profileTitle: "👤 Detective Profile",
            proNameLabel: "Detective Name:",
            proRankLabel: "Rank:",
            achLabel: "🎖️ Achievements",
            onboardTitle: "Welcome, Detective",
            onboardBody: "You have 20 criminal cases to solve. Read the case brief, examine the physical evidence, and interrogate every suspect carefully — their answers hide the truth. Use hints only if you're stuck (max 3 per case), then make your final accusation. Choose wisely: an innocent accusation lets the real culprit escape!",
            onboardBtn: "Let's Investigate →",
            proClose: "Cancel",
            proSave: "Save Profile",
            mpTitle: "🌐 Play with Friends Room",
            mpDesc: "Connect with detective friends over WiFi, *3, or *6 (Morocco) to compete in solving cases.",
            mpClose: "Close",
            mpJoin: "Connect Room",
            mpCreate: "Create Room",
            mpLeave: "Leave Room",
            roomLeft: "You left the room.",
            roomCreating: "Creating your room...",
            roomCreated: "Room ready! Share this code with your friend: {code}",
            roomWaiting: "Waiting for a friend to join room {code}...",
            roomFriendJoined: "Your friend joined! You are now connected.",
            roomConnectFailed: "Couldn't connect. Check that you (and your friend) have internet via WiFi, *3, or *6, then try again.",
            roomDisconnected: "Your friend disconnected.",
            chatConnectedDisclaimer: "Connected live with a real friend.",
            friendJoinedMsg: "Your friend has joined the room!",
            chatHeading: "💬 Detective Friends Chat",
            chatDisclaimer: "Simulated demo chat — not connected to real players.",
            chatSend: "Send",
            chatWelcomeMsg: "Welcome to the network, detectives! Any new leads on the latest case?",
            chatInputPlaceholder: "Type a message...",
            notesPlaceholder: "Type your clues here...",
            roomCodePlaceholder: "Enter Room Code (e.g., CASE-99)",
            answerLabel: "Answer:",
            selectSuspectAlert: "Please select a suspect before confirming accusation.",
            resultSolvedTitle: "Case Successfully Solved!",
            resultSolvedDesc: "Great job, detective! You correctly identified the culprit.",
            resultWrongTitle: "Wrong Accusation!",
            resultWrongDesc: "You accused an innocent person. The real culprit escaped.",
            caseExplanationLabel: "Case Explanation:",
            micNotSupported: "Voice recording is not supported on this device.",
            micPermissionDenied: "Microphone access was denied. Please allow microphone permission in your browser settings.",
            micTitle: "Voice Note (tap to record, tap again to send)",
            micListening: "Recording… tap to send",
            micNoFriend: "Connect with a friend first to send a voice note.",
            callBtnTitle: "Voice Call",
            callActive: "🔊 Voice call connected",
            callConnecting: "📞 Calling your friend…",
            callEnded: "Call ended.",
            roomEnterCode: "Please enter a valid room code.",
            roomConnecting: "Connecting to room {code} via secure network...",
            roomRetrying: "Room not found yet — retrying... ({n} attempt(s) left)",
            roomConnected: "Successfully connected to room {code}! Ready for challenge.",
            botName: "Inspector John",
            botReplies: [
                "Make sure to inspect all physical evidence carefully.",
                "Check the suspect alibis for any subtle contradictions.",
                "Have you reviewed the victim's personal notes?",
                "Keep digging, detective! The truth is in the details."
            ],
            cases: [
                {
                    "tag":"Murder Case",
                    "difficulty":"easy",
                    "title":"Silence in the Manor",
                    "brief":"Wealthy merchant Karim Ouazzani was found murdered in his private study inside his manor from a fatal stab wound. The door was locked from inside and the window open.",
                    "victim":"Victim: Karim Ouazzani (54) - Businessman.",
                    "culprit":"Yahya Alami",
                    "evidence":[
                        {"name":"Silver Dagger","desc":"Wiped carefully, leaving a partial fingerprint matching partner Yahya."},
                        {"name":"Torn Financial Letter","desc":"Proves the victim owed a huge debt to his business partner Yahya."},
                        {"name":"Muddy Footprint","desc":"Large shoe print near the window matching the manor garden mud."},
                        {"name":"Stopped Wristwatch","desc":"Stopped at 9:42 PM, the precise time of the murder."},
                        {"name":"Security Camera Log","desc":"Shows suspicious movement in the hallway leading to the study."}
                    ],
                    "suspects":[
                        {"name":"Salma Ouazzani","role":"Wife","alibi":"Sleeping in her room since 9:00 PM.","qs":[{"q":"Did you hear any noise?","a":"No, it was completely quiet."},{"q":"Where were you at the time?","a":"In my room sleeping alone."},{"q":"Did you have financial disputes?","a":"I had no involvement with his money."}]},
                        {"name":"Yahya Alami","role":"Business Partner","alibi":"Smoking a cigarette on the back balcony.","qs":[{"q":"What was the financial dispute?","a":"Just a regular business partnership."},{"q":"Why was your fingerprint on the dagger?","a":"I was there in the morning for work."},{"q":"Where were you at 9:40 PM?","a":"On the balcony smoking."}]},
                        {"name":"Fatima","role":"Housemaid","alibi":"Discovered the body in the morning while cleaning.","qs":[{"q":"When did you open the study?","a":"At 8:00 AM."},{"q":"Was the door locked?","a":"Yes, locked from inside."},{"q":"Notice anything unusual?","a":"The window was slightly open."}]},
                        {"name":"Omar","role":"Bodyguard","alibi":"On patrol around the perimeter walls.","qs":[{"q":"Did any intruder enter?","a":"The main gates were locked."},{"q":"Why did you hear nothing?","a":"The study is soundproofed and wind was loud."},{"q":"What were your duties?","a":"Patrolling every hour."}]}
                    ],
                    "explain":"Yahya Alami is the culprit: He admitted being near the balcony. His partial fingerprint on the dagger and muddy footprints match the garden path due to the large debt dispute.",
                    "hints":["Hint 1: Inspect the physical evidence left on the silver dagger and the garden path outside the open window.","Hint 2: Review who had a major financial dispute and debt conflict with the victim.","Hint 3: Yahya Alami's balcony alibi collapses when matched with his partial fingerprint on the murder weapon and muddy footprints."]
                },
                {
                    "tag":"Theft Case",
                    "difficulty":"easy",
                    "title":"Eye of the Nile Gem",
                    "brief":"The rare blue \"Eye of the Nile\" diamond vanished from its display glass case at the National Museum on opening night without breaking any lock.",
                    "victim":"Location: National Museum - Gem valued at $10 Million.",
                    "culprit":"Maher the Curator",
                    "evidence":[
                        {"name":"Cut Silk Glove","desc":"Found beside the glass display box."},
                        {"name":"VIP Access Card","desc":"Carries hidden fingerprints belonging to the curator."},
                        {"name":"Camera Footage","desc":"Shows a figure in a black coat leaving the hall hurriedly."},
                        {"name":"Strand of Hair","desc":"Found snagged on the frame of the case."},
                        {"name":"Matching Master Keys","desc":"Master key set belonging to the administrative officer."}
                    ],
                    "suspects":[
                        {"name":"Raid the Director","role":"Museum Director","alibi":"Welcoming VIP guests in the main hall.","qs":[{"q":"Who has the keys?","a":"Only myself and security."},{"q":"Where were you during theft?","a":"With VIP guests."},{"q":"Notice the loss immediately?","a":"No, we discovered it later."}]},
                        {"name":"Sanaa Security","role":"Head of Security","alibi":"Monitoring CCTV in the back control room.","qs":[{"q":"Why did cameras cut out for 1 min?","a":"A sudden power glitch."},{"q":"Did you walk the hall?","a":"Only during routine patrol."},{"q":"Who entered after closing?","a":"Nobody."}]},
                        {"name":"Maher the Curator","role":"Curator & Restorer","alibi":"Restoring paintings in the east wing.","qs":[{"q":"Why was your glove found?","a":"I wore it while cleaning exhibits."},{"q":"Do you have access?","a":"Yes, as part of my job."},{"q":"Where were you at 10 PM?","a":"In the workshop alone."}]},
                        {"name":"Mona Journalist","role":"Event Reporter","alibi":"Interviewing guests around the room.","qs":[{"q":"Did you photograph the gem?","a":"Yes, earlier in the evening."},{"q":"When did you leave?","a":"Shortly before the incident."},{"q":"See anyone suspicious?","a":"I saw someone wearing a coat."}]}
                    ],
                    "explain":"Maher the Curator stole the diamond using restoration access and left silk glove fibers near the glass display.",
                    "hints":["Hint 1: Check the cut silk glove left right beside the glass display showcase.","Hint 2: Focus on who had professional restoration access to handle museum exhibits without forcing locks.","Hint 3: Maher the Curator's excuse doesn't explain why his glove fibers and access fingerprints were found at the scene."]
                },
                {
                    "tag":"Disappearance",
                    "difficulty":"easy",
                    "title":"Where is Yasmine?",
                    "brief":"University student Yasmine Alaoui vanished 3 days ago. Her car was found parked near the dark forest with keys left in the ignition.",
                    "victim":"Missing Person: Yasmine Alaoui (22).",
                    "culprit":"Ziad the Ex",
                    "evidence":[
                        {"name":"Shattered Phone","desc":"Found on roadside; last call was to her ex-fiancé."},
                        {"name":"Handwritten Threat","desc":"Handwritten threatening note inside her handbag."},
                        {"name":"Tire Track Impression","desc":"Rare sport tire marks matching her college classmate's car."},
                        {"name":"Coffee Cup","desc":"Still warm on the car passenger seat."},
                        {"name":"Personal Journal","desc":"Mentions her constant fear of someone stalking her."}
                    ],
                    "suspects":[
                        {"name":"Ziad the Ex","role":"Ex-Fiancé","alibi":"At work all day and did not see her.","qs":[{"q":"When were you last in her car?","a":"About a week ago."},{"q":"Why threaten her in the letter?","a":"It was a past misunderstanding."},{"q":"Where was your car that night?","a":"In my home garage."}]},
                        {"name":"Sami Classmate","role":"College Classmate","alibi":"Studying in the public library.","qs":[{"q":"What was your relation?","a":"Just university classmates."},{"q":"Why do tire prints match?","a":"Many students own that tire model."},{"q":"Where were you Tuesday?","a":"At the library until 8 PM."}]},
                        {"name":"Nawal Neighbor","role":"Dorm Neighbor","alibi":"Traveling to visit family in neighboring town.","qs":[{"q":"Hear an argument?","a":"Never, her place was quiet."},{"q":"When did you return?","a":"The next morning."},{"q":"See Ziad near the apartment?","a":"Yes, twice last week."}]},
                        {"name":"Dr. Tariq","role":"Professor","alibi":"Grading exam papers at university.","qs":[{"q":"Did she miss class?","a":"Yes, a day before vanishing."},{"q":"Did she have issues?","a":"She seemed anxious lately."},{"q":"How was her performance?","a":"Diligent and hardworking."}]}
                    ],
                    "explain":"Ziad the Ex is responsible: Sports tire tracks and contradictory statements regarding past threats link him directly.",
                    "hints":["Hint 1: Inspect the shattered phone records and the threatening letter found in her bag.","Hint 2: Look closely at the tire track impressions found near the dark forest where her car was abandoned.","Hint 3: Ziad the Ex gave contradictory statements about his whereabouts and past threats against the victim."]
                },
                {
                    "tag":"Poisoning",
                    "difficulty":"easy",
                    "title":"Poison in the Glass",
                    "brief":"Prominent literary critic Ramzi Hamid died immediately after sipping juice at his honor ceremony inside the Opera House.",
                    "victim":"Victim: Ramzi Hamid (61).",
                    "culprit":"Samer the Rival Writer",
                    "evidence":[
                        {"name":"Contaminated Juice Bottle","desc":"Contains traces of lethal cyanide poison."},
                        {"name":"Folded Napkin","desc":"Has toxic powder residue and a partial fingerprint."},
                        {"name":"Event Program","desc":"Shows exact beverage service schedule."},
                        {"name":"Glass Tumbler","desc":"Victim's prints and foreign chemical substance on rim."},
                        {"name":"Harsh Review Article","desc":"A sharp review written by victim attacking an amateur writer."}
                    ],
                    "suspects":[
                        {"name":"Mona Hostess","role":"Event Hostess","alibi":"Served drinks per organizers instructions.","qs":[{"q":"Who prepared glasses?","a":"Myself and bar assistant."},{"q":"Did you leave table?","a":"For a minute to grab ice."},{"q":"See anyone approach?","a":"I saw the young writer nearby."}]},
                        {"name":"Samer the Rival Writer","role":"Rival Writer","alibi":"Talking with publisher chief all evening.","qs":[{"q":"Why did critic attack you?","a":"He ruined my latest novel unfairly."},{"q":"Did you put anything in drink?","a":"God forbid, I am professional."},{"q":"Where were you at incident?","a":"In front of ceremony stage."}]},
                        {"name":"Laila Ramzi","role":"Daughter","alibi":"Presenting awards on behalf of father.","qs":[{"q":"Were you on good terms?","a":"Of course, he is my father."},{"q":"Who inherits wealth?","a":"Me and a charity foundation."},{"q":"Suspect anyone?","a":"Writer Samer threatened him."}]},
                        {"name":"Essam Guard","role":"Security Guard","alibi":"Guarding main entrance of hall.","qs":[{"q":"Who entered back door?","a":"Catering staff only."},{"q":"Know about cyanide?","a":"I know nothing about chemicals."},{"q":"Are cameras working?","a":"Yes, recording everything."}]}
                    ],
                    "explain":"Samer the Rival Writer took revenge for his ruined reputation and poisoned the glass during the hostess's brief absence.",
                    "hints":["Hint 1: Check the contaminated juice bottle and toxic powder residue on the napkin.","Hint 2: Review the harsh review article written by the victim attacking an amateur writer.","Hint 3: Samer the Rival Writer had a powerful revenge motive and the opportunity when the hostess stepped away."]
                },
                {
                    "tag":"Murder Case",
                    "difficulty":"easy",
                    "title":"The Locked Room Riddle",
                    "brief":"Businessman Mamdouh Sabri was found stabbed inside his hotel room. All doors and windows were securely locked from inside with no exit.",
                    "victim":"Victim: Mamdouh Sabri (48).",
                    "culprit":"Khaled Maintenance",
                    "evidence":[
                        {"name":"Air Conditioner","desc":"Jammed with metal shim to delay auto door lock mechanism."},
                        {"name":"Starter Pistol","desc":"Thrown from top floor window."},
                        {"name":"Thin Fishing Line","desc":"Long transparent thread used for locked room trick."},
                        {"name":"Hotel Register","desc":"Shows only maintenance staff logged access."},
                        {"name":"Victim Diary","desc":"Refers to blackmail attempts from his business partner."}
                    ],
                    "suspects":[
                        {"name":"Bahgat Partner","role":"Business Partner","alibi":"Having dinner with clients on ground floor.","qs":[{"q":"What about blackmail?","a":"Just normal business disputes."},{"q":"How enter room?","a":"I never entered."},{"q":"Have spare key?","a":"Only hotel management."}]},
                        {"name":"Nadine Secretary","role":"Victim Assistant","alibi":"In adjacent room preparing travel files.","qs":[{"q":"Hear an argument?","a":"Faint sound then silence."},{"q":"When last saw him alive?","a":"An hour before incident."},{"q":"Who visited evening?","a":"Maintenance worker."}]},
                        {"name":"Khaled Maintenance","role":"Hotel Technician","alibi":"Repaired electric light bulb and left.","qs":[{"q":"Why tool set left there?","a":"Left it by mistake on table."},{"q":"Tamper with AC?","a":"Never, I only worked on lights."},{"q":"Did he ask anything?","a":"Asked for total quiet."}]},
                        {"name":"Raouf Brother","role":"Victim Brother","alibi":"Sleeping in his 3rd floor room.","qs":[{"q":"Inheritance dispute?","a":"We split everything amicably."},{"q":"How enter locked room?","a":"I was not there."},{"q":"What about thread?","a":"I know nothing about tricks."}]}
                    ],
                    "explain":"Khaled the Maintenance technician used thread and AC trick to fake a locked room from inside after committing the crime.",
                    "hints":["Hint 1: Examine the air conditioner unit and the thin fishing line found in the room.","Hint 2: Check the hotel access logs and the technician's tools left behind.","Hint 3: Khaled the Maintenance worker used a metal shim and string trick via the AC unit to fake the locked room."]
                },
                {
                    "tag":"Theft Case",
                    "difficulty":"medium",
                    "title":"Stolen Masterpiece",
                    "brief":"An original painting by a world-renowned artist was stolen from the International Gallery, leaving a precise duplicate replica hanging in its place.",
                    "victim":"Location: International Art Gallery - $5M Value.",
                    "culprit":"Fouad the Painter",
                    "evidence":[
                        {"name":"Empty Wooden Frame","desc":"Found hidden behind tool storage."},
                        {"name":"Professional Paintbrush","desc":"Carries fresh oil paint formulation."},
                        {"name":"Clear Fingerprint","desc":"On wall behind the fake replica painting."},
                        {"name":"Train Ticket","desc":"Dated night of theft bound for border."},
                        {"name":"CCTV Camera Log","desc":"Disabled for exactly 10 minutes."}
                    ],
                    "suspects":[
                        {"name":"Fouad the Painter","role":"Artist & Forger","alibi":"Painting a portrait at home all night.","qs":[{"q":"Why own same oil paints?","a":"I am an artist, I use them."},{"q":"Did you visit gallery?","a":"Yes, to view exhibits."},{"q":"Where at 2 AM?","a":"In my private studio."}]},
                        {"name":"Hanan Art Critic","role":"Art Critic","alibi":"Writing a press article in press room.","qs":[{"q":"Notice the forgery?","a":"No, replica looked authentic."},{"q":"Who has copying skills?","a":"Fouad obviously."},{"q":"When did you leave?","a":"Around midnight."}]},
                        {"name":"Jamal Guard","role":"Gallery Guard","alibi":"On security walk on upper floor.","qs":[{"q":"Why did CCTV fail?","a":"Power outage glitch."},{"q":"See anyone strange?","a":"Nobody at all."},{"q":"When patrol started?","a":"At 11 PM."}]},
                        {"name":"Sahar Collector","role":"Art Collector","alibi":"At dinner party with investors.","qs":[{"q":"Offer to buy painting?","a":"Museum refused to sell."},{"q":"Where at theft time?","a":"In fancy restaurant."},{"q":"Suspect anyone?","a":"Fouad was obsessed with it."}]}
                    ],
                    "explain":"Fouad the Painter used forgery skill to swap original painting with his replica, dropping his custom paintbrush.",
                    "hints":["Hint 1: Inspect the professional paintbrush left behind carrying fresh oil paint.","Hint 2: Look at the fingerprint on the wall directly behind the fake replica painting.","Hint 3: Fouad the Painter is the only suspect possessing the precise forgery skills and paint formulation needed for the swap."]
                },
                {
                    "tag":"Murder Case",
                    "difficulty":"medium",
                    "title":"Midnight Lab Murder",
                    "brief":"Chemist Dr. Murad was killed in his locked laboratory. His final typed PC code points towards his killer.",
                    "victim":"Victim: Dr. Murad (55) - Chemist.",
                    "culprit":"Hani Lead Assistant",
                    "evidence":[
                        {"name":"Shattered Beaker","desc":"Contains nerve agent toxin residues."},
                        {"name":"Laptop Computer","desc":"Final typed cipher matching lead assistant name."},
                        {"name":"Rubber Glove","desc":"Torn rubber glove found near lab window."},
                        {"name":"Confidential Report","desc":"Reveals theft of critical chemical research."},
                        {"name":"Door Keycard Log","desc":"Single entry using valid keycard access."}
                    ],
                    "suspects":[
                        {"name":"Dr. Samir","role":"Research Colleague","alibi":"Conducting experiments in nearby building.","qs":[{"q":"Nature of stolen research?","a":"Advanced medicinal formulas."},{"q":"Why enter his log?","a":"Looking for scientific paper."},{"q":"Where at crime time?","a":"In my private lab."}]},
                        {"name":"Nada Student","role":"Lab Assistant","alibi":"Left early to work on thesis.","qs":[{"q":"When did you leave?","a":"At 7 PM."},{"q":"Who had night keycard?","a":"Dr. Murad and Dr. Samir."},{"q":"Was he worried?","a":"Receiving threatening phone calls."}]},
                        {"name":"Hani Lead Assistant","role":"Senior Assistant","alibi":"At home with family.","qs":[{"q":"Why PC typed your name?","a":"A joke or false accusation."},{"q":"Access to research?","a":"Yes, full access."},{"q":"Where all night?","a":"Home with my family."}]},
                        {"name":"Souad Researcher","role":"Visiting Scholar","alibi":"At scientific conference out of town.","qs":[{"q":"When returned to city?","a":"Next morning."},{"q":"Had disputes with him?","a":"He refused my paper publication."},{"q":"Know Hani?","a":"Yes, work colleague."}]}
                    ],
                    "explain":"Hani Lead Assistant killed Dr. Murad to steal research, failing to notice the victim typed his cipher identification.",
                    "hints":["Hint 1: Examine the shattered beaker with nerve toxin and the laptop computer.","Hint 2: Review who had full research access and authorization to enter the laboratory.","Hint 3: The victim's final typed PC code points explicitly to Hani Lead Assistant."]
                },
                {
                    "tag":"Murder Case",
                    "difficulty":"medium",
                    "title":"Assassination on Express",
                    "brief":"Retired intelligence agent died inside sleeper train carriage from silencer gunshot in dark tunnel.",
                    "victim":"Victim: Kamal Eddine (62).",
                    "culprit":"Salim Mysterious",
                    "evidence":[
                        {"name":"Metal Suppressor","desc":"Thrown onto tracks during tunnel crossing."},
                        {"name":"Forged Ticket","desc":"Fake identity ticket seated in next car."},
                        {"name":"Leaked Secret File","desc":"Missing from victim personal briefcase."},
                        {"name":"Invisible Ink Traces","desc":"Found on fingers of suspect #2."},
                        {"name":"Passenger Movement Log","desc":"Shows suspicious movement between cars."}
                    ],
                    "suspects":[
                        {"name":"Maher Journalist","role":"Carriage Passenger","alibi":"Writing article on laptop all trip.","qs":[{"q":"Destination?","a":"Capital city for job interview."},{"q":"Hear gunshot sound?","a":"Only train wheel friction."},{"q":"Why nervous?","a":"I dislike long train rides."}]},
                        {"name":"Salim Mysterious","role":"Businessman","alibi":"Sleeping in private locked cabin.","qs":[{"q":"Reason for sudden trip?","a":"Urgent business deal."},{"q":"Why ink on fingers?","a":"Signing contracts with liquid pen."},{"q":"Know the victim?","a":"Never saw him in my life."}]},
                        {"name":"Rasha Attendant","role":"Train Stewardess","alibi":"Serving drinks in front carriage.","qs":[{"q":"Who moved between cars?","a":"A person in black coat."},{"q":"Lights out in tunnel?","a":"No, normal tunnel darkness."},{"q":"Notice anything unusual?","a":"Faint gunpowder smell."}]},
                        {"name":"Jehad Guard","role":"Private Escort","alibi":"Guarding rear cargo door.","qs":[{"q":"Anyone pass by you?","a":"Nobody crossed rear door."},{"q":"Carrying firearm?","a":"Yes, licensed official sidearm."},{"q":"Shift started when?","a":"Since departure."}]}
                    ],
                    "explain":"Salim Mysterious carried out silent assassination using suppressor in tunnel under forged identity.",
                    "hints":["Hint 1: Check the metal suppressor thrown onto the tracks and the passenger movement logs.","Hint 2: Look at the invisible ink traces and the forged ticket found in the next car.","Hint 3: Salim Mysterious traveled under a false identity and executed the silent shooting in the tunnel."]
                },
                {
                    "tag":"Theft Case",
                    "difficulty":"medium",
                    "title":"Vault Heist",
                    "brief":"Millions vanished from national cable company safe without forced entry; digital key was with Director only.",
                    "victim":"National Cable Corp - $2M Loss.",
                    "culprit":"Ziad Accountant",
                    "evidence":[
                        {"name":"Hidden Camera Clip","desc":"Shows individual entering PIN code carefully."},
                        {"name":"Note Slip","desc":"Contains hints to old passcode."},
                        {"name":"Partial Print","desc":"On vault keypad submit button."},
                        {"name":"Electronic Keycard","desc":"Backup keycard missing from drawer."},
                        {"name":"Debt Invoice","desc":"Belongs to company accountant."}
                    ],
                    "suspects":[
                        {"name":"Saleh Director","role":"Company Director","alibi":"In board meeting all morning.","qs":[{"q":"Who knows PIN?","a":"Only myself and accountant."},{"q":"Lost backup keycard?","a":"No, in my pocket always."},{"q":"Who do you suspect?","a":"Accountant has heavy debts."}]},
                        {"name":"Fatima Secretary","role":"Executive Secretary","alibi":"Scheduling appointments in lobby.","qs":[{"q":"Have vault access?","a":"No, never."},{"q":"Who entered office?","a":"Accountant and cleaners."},{"q":"Notice anything?","a":"Door was slightly ajar."}]},
                        {"name":"Ziad Accountant","role":"Financial Accountant","alibi":"Preparing annual audit in office.","qs":[{"q":"Why heavy debts?","a":"Family issues now resolved."},{"q":"How know PIN code?","a":"Part of financial duty at times."},{"q":"Where yesterday noon?","a":"At bank branch."}]},
                        {"name":"Adel Security","role":"Building Guard","alibi":"Guarding front entrance.","qs":[{"q":"Anyone leave with bags?","a":"Only regular staff leaving."},{"q":"CCTV functional?","a":"Working perfectly."},{"q":"Shift start?","a":"Early morning."}]}
                    ],
                    "explain":"Ziad Accountant leveraged debt motive and PIN knowledge to steal vault money using backup card.",
                    "hints":["Hint 1: Examine the hidden camera clip showing the PIN entry and the missing backup keycard.","Hint 2: Check the financial debt invoice belonging to the staff.","Hint 3: Ziad Accountant had both the financial motive (heavy debts) and the PIN knowledge to empty the vault."]
                },
                {
                    "tag":"Murder Case",
                    "difficulty":"medium",
                    "title":"Andalusia Beach Crime",
                    "brief":"Fisherman found dead on sand at dawn beside small boat with running engine.",
                    "victim":"Victim: Ibrahim Fisherman (50).",
                    "culprit":"Hamza Youth",
                    "evidence":[
                        {"name":"Broken Wooden Oar","desc":"Bloodied with fight marks."},
                        {"name":"Torn Fishing Net","desc":"Scattered near water line."},
                        {"name":"Cheap Wristwatch","desc":"Belongs to local village youth."},
                        {"name":"Footprints on Sand","desc":"Leading towards coastal road."},
                        {"name":"Open Tackle Box","desc":"Sharp tools missing."}
                    ],
                    "suspects":[
                        {"name":"Hamza Youth","role":"Unemployed Youth","alibi":"Sleeping at home all night.","qs":[{"q":"Why was watch found?","a":"Must have lost it swimming."},{"q":"Had arguments?","a":"Fought over fishing rights."},{"q":"Where at 4 AM?","a":"In my bed."}]},
                        {"name":"Mousa Fisherman","role":"Rival Fisherman","alibi":"Night fishing out at sea.","qs":[{"q":"Return time?","a":"At sunrise."},{"q":"See Hamza nearby?","a":"Saw him near boat."},{"q":"Relation with victim?","a":"Fair work competition."}]},
                        {"name":"Salem Cafe Owner","role":"Shopkeeper","alibi":"Opening coffee shop.","qs":[{"q":"Hear screams?","a":"Just ocean waves."},{"q":"Who visits beach night?","a":"Fishermen and youth."},{"q":"See strangers?","a":"Nobody."}]},
                        {"name":"Khadija Wife","role":"Homemaker","alibi":"Home with children.","qs":[{"q":"When did he leave?","a":"Midnight as usual."},{"q":"Had trouble?","a":"Financial dispute with Hamza."},{"q":"Leave note?","a":"No."}]}
                    ],
                    "explain":"Hamza Youth fought over fishing spots and struck the fisherman with an oar, dropping his watch.",
                    "hints":["Hint 1: Inspect the broken wooden oar and the cheap wristwatch found in the sand.","Hint 2: Check the footprints leading away from the beach toward the coastal road.","Hint 3: Hamza Youth had ongoing disputes over fishing rights and dropped his personal watch during the violent struggle."]
                },
                {
                    "tag":"Disappearance",
                    "difficulty":"hard",
                    "title":"Missing Antique Painting",
                    "brief":"Rare painting vanished from ancient royal palace without triggering alarm system.",
                    "victim":"Late Prince Palace - Rare Artwork.",
                    "culprit":"Maher Decorator",
                    "evidence":[
                        {"name":"Alarm Bypass Tool","desc":"High tech bypass gadget."},
                        {"name":"Cloth Glove","desc":"Carries old palace dust."},
                        {"name":"Palace Blueprint","desc":"Found on decorator phone."},
                        {"name":"Torn Fabric","desc":"Torn from room curtain."},
                        {"name":"Visitor Log","desc":"Logs interior designer night visit."}
                    ],
                    "suspects":[
                        {"name":"Prince Khalid","role":"Palace Heir","alibi":"Business trip abroad.","qs":[{"q":"Who has access?","a":"Me and maintenance team."},{"q":"Is painting insured?","a":"Yes for millions."},{"q":"Suspect staff?","a":"New interior designer."}]},
                        {"name":"Maher Decorator","role":"Restoration Expert","alibi":"Measuring walls for renovation.","qs":[{"q":"Why possess blueprints?","a":"Required for design work."},{"q":"Bypass alarm?","a":"Only checked damaged wires."},{"q":"Where is painting?","a":"I know nothing."}]},
                        {"name":"Souad Historian","role":"Archivist","alibi":"Cataloging items in archive.","qs":[{"q":"Last room visit?","a":"Last week."},{"q":"Notice changes?","a":"Everything in place."},{"q":"Who likes art?","a":"Prince himself."}]},
                        {"name":"Essam Head Guard","role":"Chief Guard","alibi":"Supervising outer gates.","qs":[{"q":"Spot intruder?","a":"CCTV showed nobody."},{"q":"Alarm triggered?","a":"Cut for minutes then resumed."},{"q":"Who disarmed system?","a":"An expert."}]}
                    ],
                    "explain":"Maher Decorator used blueprint access and tech skills to disarm alarm and steal the painting.",
                    "hints":["Hint 1: Check the alarm bypass tool and palace blueprints found on the decorator's phone.","Hint 2: Review the visitor log showing night access by the interior designer.","Hint 3: Maher Decorator used his blueprint access and technical gadgetry to disarm the alarm and steal the painting."]
                },
                {
                    "tag":"Murder Case",
                    "difficulty":"hard",
                    "title":"Famous Actor Murder",
                    "brief":"A prominent actor was found dead in theater green room following final stage performance.",
                    "victim":"Victim: Rafat Rami (45).",
                    "culprit":"Bassem Understudy",
                    "evidence":[
                        {"name":"Torn Script","desc":"Harsh written notes about lead role."},
                        {"name":"Prop Rope","desc":"Fake prop converted into real strangulation tool."},
                        {"name":"Wooden Shoe Print","desc":"Behind dark backstage corridor."},
                        {"name":"Call Records","desc":"Repeated threats from minor understudy actor."},
                        {"name":"Stage Costume","desc":"Discarded in trash bin."}
                    ],
                    "suspects":[
                        {"name":"Salaf Actress","role":"Lead Actress","alibi":"Celebrating with fans in cafeteria.","qs":[{"q":"Relation with him?","a":"Strictly artistic rivalry."},{"q":"Did you argue?","a":"Competed for starring spot."},{"q":"Where at murder time?","a":"With fans in hall."}]},
                        {"name":"Sami Director","role":"Stage Director","alibi":"Checking lighting with crew.","qs":[{"q":"How was victim performance?","a":"Great but arrogant."},{"q":"Who entered green room?","a":"Understudy actor angrily."},{"q":"Hear screams?","a":"Music drowned sounds."}]},
                        {"name":"Ziad Writer","role":"Playwright","alibi":"Signing books for audience outside.","qs":[{"q":"Did he alter script?","a":"Demanded changes constantly."},{"q":"Where after curtain?","a":"Autographing books."},{"q":"Like his acting?","a":"He fit role well."}]},
                        {"name":"Bassem Understudy","role":"Secondary Actor","alibi":"Changing clothes in dressing room.","qs":[{"q":"Why threaten him?","a":"He stole my lead role greedily."},{"q":"Did you kill him?","a":"I was angry but didn't kill."},{"q":"Where exactly?","a":"In room alone."}]}
                    ],
                    "explain":"Bassem Understudy strangled Rafat out of rage over stolen lead role using backstage prop.",
                    "hints":["Hint 1: Inspect the call records showing repeated threats from a co-worker.","Hint 2: Check the prop rope converted into a real strangulation tool backstage.","Hint 3: Bassem Understudy had a strong rage motive after Rafat stole his lead role."]
                },
                {
                    "tag":"Theft Case",
                    "difficulty":"hard",
                    "title":"Golden Train Robbery",
                    "brief":"Gold bullion shipment worth $1M vanished from fast cargo train mid-journey between cities at night.",
                    "victim":"Express Transit Corp - Gold Bullion.",
                    "culprit":"Sameh Train Driver",
                    "evidence":[
                        {"name":"Hydraulic Jack","desc":"Hidden beside railway tracks."},
                        {"name":"Walkie-Talkie","desc":"Uses train company security radio frequency."},
                        {"name":"Soiled Work Glove","desc":"Carries shipping company logo."},
                        {"name":"Heavy Truck Tracks","desc":"Near train emergency stop marker."},
                        {"name":"Maintenance Log","desc":"Shows intentional 1-minute train brake halt."}
                    ],
                    "suspects":[
                        {"name":"Sameh Train Driver","role":"Freight Driver","alibi":"Stopped due to sudden signal glitch.","qs":[{"q":"Why stop here?","a":"Emergency red signal from tower."},{"q":"Know cargo value?","a":"Yes, secured gold."},{"q":"Who has radio?","a":"Control crew."}]},
                        {"name":"Majed Dispatcher","role":"Signal Controller","alibi":"Monitoring lines from control tower.","qs":[{"q":"Order train stop?","a":"Signals were green."},{"q":"Who tampered panel?","a":"Someone with frequency."},{"q":"Where at 1 AM?","a":"In tower alone."}]},
                        {"name":"Daniel Guard","role":"Cargo Escort","alibi":"Guarding interior rear wagon door.","qs":[{"q":"Why not fire weapon?","a":"Knocked out by gas."},{"q":"Who was inside?","a":"Just me and boxes."},{"q":"When woke up?","a":"Hour after stop."}]},
                        {"name":"Essam Mechanic","role":"Maintenance Worker","alibi":"Repairing track at nearby station.","qs":[{"q":"Own hydraulic jack?","a":"Yes, for track maintenance."},{"q":"Where were tools?","a":"In service truck."},{"q":"Like quick money?","a":"Who doesn't? But I am honest."}]}
                    ],
                    "explain":"Sameh Train Driver colluded with Essam Mechanic to stop train intentionally and offload gold.",
                    "hints":["Hint 1: Check the hydraulic jack and walkie-talkie tuned to company radio frequency.","Hint 2: Review the maintenance log showing an intentional 1-minute emergency brake halt.","Hint 3: Sameh the Train Driver colluded with mechanic Essam to halt the train and offload the gold shipment."]
                },
                {
                    "tag":"Murder Case",
                    "difficulty":"hard",
                    "title":"Archaeologist Death",
                    "brief":"Renowned archaeologist found dead inside newly opened tomb with relic chest forced open.",
                    "victim":"Victim: Dr. Fadel (58).",
                    "culprit":"Maher Smuggler",
                    "evidence":[
                        {"name":"Archaeological Pickaxe","desc":"Bloodstained with victim blood and prints."},
                        {"name":"Gold Figurine","desc":"Dropped by fleeing killer."},
                        {"name":"Flashlight","desc":"Carries local hardware store branding."},
                        {"name":"Dirt Footprints","desc":"Leading toward main excavation entrance."},
                        {"name":"Expedition Log","desc":"Details dispute over splitting finds."}
                    ],
                    "suspects":[
                        {"name":"Dr. Adel","role":"Co-Expedition Lead","alibi":"Documenting inscriptions in West chamber.","qs":[{"q":"Why argue?","a":"Over research credit."},{"q":"Enter treasure room?","a":"In morning only."},{"q":"Where at crime time?","a":"In other chamber."}]},
                        {"name":"Souad Assistant","role":"Dig Assistant","alibi":"Organizing tools in outer camp.","qs":[{"q":"Who visited tomb night?","a":"Dr. Fadel alone."},{"q":"Missing relics?","a":"Rare golden figurine."},{"q":"When discovered?","a":"Next morning."}]},
                        {"name":"Maher Smuggler","role":"Suspicious Individual","alibi":"Hunting wildlife near desert edge.","qs":[{"q":"Why near tomb?","a":"Hunting wild game."},{"q":"Why flashlight found?","a":"Lost it earlier."},{"q":"Smuggle relics?","a":"False accusation."}]},
                        {"name":"Jehad Guard","role":"Site Guard","alibi":"Guarding expedition tents outside.","qs":[{"q":"See stranger approach?","a":"Saw person carrying heavy bag."},{"q":"Why not stop them?","a":"Thought it was researcher."},{"q":"Hear screams?","a":"Wind was too loud."}]}
                    ],
                    "explain":"Maher Smuggler infiltrated tomb to steal gold figurine and murdered archaeologist when caught.",
                    "hints":["Hint 1: Inspect the flashlight branded with local hardware store markings dropped at the scene.","Hint 2: Check the gold figurine left behind by the fleeing culprit.","Hint 3: Maher Smuggler infiltrated the tomb for illegal trade and murdered Dr. Fadel when caught."]
                },
                {
                    "tag":"Disappearance",
                    "difficulty":"hard",
                    "title":"Vanished Private Jet",
                    "brief":"A private business jet vanished over rugged mountain airspace near dense pine forest.",
                    "victim":"Private Aircraft - 4 Passengers.",
                    "culprit":"Samer Co-Pilot",
                    "evidence":[
                        {"name":"Crushed Flight Box","desc":"Shows deliberate tampering with autopilot system."},
                        {"name":"Contaminated Fuel","desc":"Chemical agent added causing engine shutdown."},
                        {"name":"Forged Suicide Note","desc":"Found on assistant laptop."},
                        {"name":"Parachute Lines","desc":"Tangled in high pine tree branches."},
                        {"name":"Altered Flight Plan","desc":"Diverts path toward mountains intentionally."}
                    ],
                    "suspects":[
                        {"name":"Captain Rami","role":"Chief Pilot","alibi":"Flying aircraft per official directions.","qs":[{"q":"Why route change?","a":"To avoid severe storm."},{"q":"Engine failure?","a":"Engines stopped unexpectedly."},{"q":"Crash site?","a":"Middle of forest."}]},
                        {"name":"Samer Co-Pilot","role":"First Officer","alibi":"Monitoring cockpit instrument panel.","qs":[{"q":"Who changed plan?","a":"Captain requested to save fuel."},{"q":"Leave aircraft?","a":"I remained onboard."},{"q":"What about parachute?","a":"Emergency kit item."}]},
                        {"name":"Monir Investor","role":"Aircraft Owner","alibi":"Reviewing documents in passenger seat.","qs":[{"q":"Is jet insured?","a":"Insured heavily."},{"q":"Notice tension?","a":"Pilots argued quietly."},{"q":"Where is luggage?","a":"Burned in crash."}]},
                        {"name":"Laila Officer","role":"Personal Aide","alibi":"Seated in rear section.","qs":[{"q":"Hear explosion?","a":"Strange sound then rapid drop."},{"q":"Like flying?","a":"I dislike high altitude."},{"q":"Who benefits?","a":"Insurance policies."}]}
                    ],
                    "explain":"Samer Co-Pilot sabotaged fuel, altered navigation, and parachuted out prior to crash.",
                    "hints":["Hint 1: Check the crushed flight box and the contaminated fuel leading to engine failure.","Hint 2: Inspect the parachute lines tangled in high pine tree branches near the crash path.","Hint 3: Samer Co-Pilot sabotaged the flight, altered navigation, and parachuted out before impact."]
                },
                {
                    "tag":"Murder Case",
                    "difficulty":"extreme",
                    "title":"Invisible Poison",
                    "brief":"Tycoon poisoned inside fortified vault office using rare undetectable bio-compound.",
                    "victim":"Victim: Fouad Al-Moatasem (60).",
                    "culprit":"Dr. Ziad",
                    "evidence":[
                        {"name":"Medical Dropper","desc":"Contains micro drops of neuro-toxin."},
                        {"name":"Water Tumbler","desc":"Mixed with odorless bio-compound."},
                        {"name":"Surgical Glove","desc":"Discarded in trash bin."},
                        {"name":"Updated Will","desc":"Reassigns inheritance to charity foundation."},
                        {"name":"CCTV Footage","desc":"Shows individual wearing doctor coat."}
                    ],
                    "suspects":[
                        {"name":"Dr. Ziad","role":"Personal Physician","alibi":"Checking victim blood pressure in afternoon.","qs":[{"q":"Daily medicine?","a":"Heart vitamins only."},{"q":"Why dropper found?","a":"Used for eye drops."},{"q":"Know about new will?","a":"No, unaware."}]},
                        {"name":"Sawsan Wife","role":"Victim Wife","alibi":"Preparing tea in outer kitchen.","qs":[{"q":"Who drank water?","a":"My husband alone."},{"q":"Dispute over will?","a":"Saddened but did not kill."},{"q":"Who visited today?","a":"His personal doctor."}]},
                        {"name":"Maher Pharmacist","role":"Family Pharmacist","alibi":"Running pharmacy all day.","qs":[{"q":"Dispense toxin?","a":"Only authorized medication."},{"q":"Who holds bio-compound?","a":"High level labs."},{"q":"Visit mansion?","a":"A month ago."}]},
                        {"name":"Omar Guard","role":"Mansion Guard","alibi":"Guarding main gate.","qs":[{"q":"Who entered in doctor coat?","a":"Doctor Ziad as usual."},{"q":"See stranger?","a":"Nobody stranger."},{"q":"Shift start?","a":"Early morning."}]}
                    ],
                    "explain":"Dr. Ziad Personal Physician poisoned medicine supply using bio-compound to claim estate funds.",
                    "hints":["Hint 1: Examine the medical dropper containing micro-doses of neuro-toxin.","Hint 2: Check the CCTV footage showing someone in a doctor's coat entering the fortified vault office.","Hint 3: Dr. Ziad Personal Physician poisoned the victim's medicine supply to secure inheritance funds."]
                },
                {
                    "tag":"Theft Case",
                    "difficulty":"extreme",
                    "title":"Local Museum Heist",
                    "brief":"Ancient bronze statues vanished from local museum display case without breaking locks.",
                    "victim":"Local Museum - 3 Statues.",
                    "culprit":"Rami Curator",
                    "evidence":[
                        {"name":"Standard Key Set","desc":"Unlocks glass display case smoothly."},
                        {"name":"Blue Ink Mark","desc":"On display cabinet handle."},
                        {"name":"Entry Logbook","desc":"Shows curator logged in late at night."},
                        {"name":"Canvas Bag","desc":"Left behind seating benches."},
                        {"name":"Sales Receipt","desc":"Shows sale of similar items to dealer."}
                    ],
                    "suspects":[
                        {"name":"Rami Curator","role":"Museum Curator","alibi":"Updating records in office.","qs":[{"q":"Who has display key?","a":"Only myself."},{"q":"Why logged late night?","a":"Reviewing inventory."},{"q":"Where are statues?","a":"Stolen, I don't know by whom."}]},
                        {"name":"Souad Guard","role":"Museum Guard","alibi":"Stationed at front gate.","qs":[{"q":"Anyone carry bags?","a":"Saw Rami carrying canvas bag."},{"q":"Alarm triggered?","a":"No, original key used."},{"q":"When did Rami leave?","a":"After midnight."}]},
                        {"name":"Ziad Visitor","role":"Antique Enthusiast","alibi":"Viewing exhibits during day.","qs":[{"q":"When visited?","a":"Two days before heist."},{"q":"Meet Rami?","a":"Discussed statues with him."},{"q":"Buy antiques?","a":"Only through legal means."}]},
                        {"name":"Fatima Cleaner","role":"Cleaning Staff","alibi":"Cleaning halls in morning.","qs":[{"q":"Notice missing items?","a":"Empty display case in morning."},{"q":"Who enters at night?","a":"Curator Rami."},{"q":"Open display cases?","a":"Never."}]}
                    ],
                    "explain":"Rami Curator stole bronze statues using official master key and sold them to illegal dealer.",
                    "hints":["Hint 1: Check the entry logbook showing the curator logged in late at night.","Hint 2: Review the standard key set used to open display cases without forced locks.","Hint 3: Rami Curator used his official master keys to steal the bronze statues and sell them."]
                },
                {
                    "tag":"Murder Case",
                    "difficulty":"extreme",
                    "title":"Haunted House Crime",
                    "brief":"An elderly man was found murdered in abandoned forest home with front door locked inside.",
                    "victim":"Victim: Saleh (75).",
                    "culprit":"Nabil Nephew",
                    "evidence":[
                        {"name":"Spare Key","desc":"Hidden under door mat."},
                        {"name":"Wooden Club","desc":"Bloodstained with struggle marks."},
                        {"name":"Cash Box","desc":"Emptied and scattered."},
                        {"name":"Muddy Footprint","desc":"Near rear window frame."},
                        {"name":"Inheritance Note","desc":"From nephew demanding money."}
                    ],
                    "suspects":[
                        {"name":"Nabil Nephew","role":"Victim Relative","alibi":"Selling property in town.","qs":[{"q":"Why demand money?","a":"He was my uncle, needed help."},{"q":"Know key hideout?","a":"Yes, old hiding spot."},{"q":"Where at incident time?","a":"In town market."}]},
                        {"name":"Saeed Neighbor","role":"Elderly Neighbor","alibi":"Fixing farm fence.","qs":[{"q":"Hear argument?","a":"Faint scream then silence."},{"q":"Who visits house?","a":"His nephew Nabil."},{"q":"Enter house?","a":"Never."}]},
                        {"name":"Mona Daughter","role":"Student","alibi":"Gathering herbs near forest.","qs":[{"q":"See stranger?","a":"Saw Nabil carrying metal box."},{"q":"When seen?","a":"Just before sunset."},{"q":"Tell anyone?","a":"I was scared."}]},
                        {"name":"Khaled Officer","role":"Retired Cop","alibi":"Fishing in nearby river.","qs":[{"q":"Visit Saleh recently?","a":"Week ago for tea."},{"q":"His mood?","a":"Fearful of Nabil's greed."},{"q":"Like forest?","a":"Spend hours there."}]}
                    ],
                    "explain":"Nabil Nephew killed his uncle for money box using spare key hiding spot he knew about.",
                    "hints":["Hint 1: Inspect the spare key hidden under the door mat that only family knew about.","Hint 2: Check the inheritance note demanding money found in the house.","Hint 3: Nabil Nephew used the hidden spare key to enter and murder his uncle for the cash box."]
                },
                {
                    "tag":"Disappearance",
                    "difficulty":"extreme",
                    "title":"Diplomatic Document",
                    "brief":"Top secret diplomatic document vanished from ambassador briefcase during crowded reception.",
                    "victim":"Foreign Embassy - Secret Document.",
                    "culprit":"Daniel Reporter",
                    "evidence":[
                        {"name":"Matching Briefcase","desc":"Swapped skilfully with original."},
                        {"name":"Forged Invitation","desc":"Has fake guest name."},
                        {"name":"CCTV Clip","desc":"Person wearing dark formal suit."},
                        {"name":"Silk Handkerchief","desc":"Scented with French perfume."},
                        {"name":"Guest Register","desc":"Logs entry of mysterious reporter."}
                    ],
                    "suspects":[
                        {"name":"Ambassador Murad","role":"Chief Diplomat","alibi":"Greeting guests in main hall.","qs":[{"q":"Who holds briefcase?","a":"My aide always."},{"q":"When noticed loss?","a":"Right after guests left."},{"q":"Is document critical?","a":"Top secret."}]},
                        {"name":"Saeed Aide","role":"Diplomatic Aide","alibi":"Serving refreshments to guests.","qs":[{"q":"Where was briefcase?","a":"Next to private desk."},{"q":"Who approached?","a":"Foreign journalist."},{"q":"Leave it alone?","a":"For minutes to fetch files."}]},
                        {"name":"Daniel Reporter","role":"Foreign Journalist","alibi":"Interviewing diplomats.","qs":[{"q":"Why swap briefcase?","a":"Accidental mix-up."},{"q":"French perfume?","a":"Gift from friend."},{"q":"Seeking scoops?","a":"I seek truth."}]},
                        {"name":"Nadine Translator","role":"Official Translator","alibi":"Translating on stage.","qs":[{"q":"Notice strange activity?","a":"Daniel hovered near briefcase."},{"q":"Who invited him?","a":"Private invitations."},{"q":"Documents secure?","a":"Strict protocol."}]}
                    ],
                    "explain":"Daniel Reporter spy swapped identical briefcase during reception commotion to steal document.",
                    "hints":["Hint 1: Check the swapped briefcase and guest register logging a mysterious reporter.","Hint 2: Notice the silk handkerchief scented with French perfume left at the scene.","Hint 3: Daniel Reporter used a fake invitation and swapped briefcases during the reception commotion."]
                },
                {
                    "tag":"Murder Case",
                    "difficulty":"extreme",
                    "title":"High-Rise Assassination",
                    "brief":"Tycoon found dead from poisoned dart inside 50th floor glass tower office.",
                    "victim":"Victim: Ghassan Al-Malik (65).",
                    "culprit":"Ziad Rival",
                    "evidence":[
                        {"name":"Poisoned Micro Dart","desc":"Fired from window of opposing building."},
                        {"name":"Professional Crossbow","desc":"Mounted on tripod in opposite building."},
                        {"name":"Partial Print","desc":"On crossbow grip in dark room."},
                        {"name":"Dissolved Contract","desc":"Shows major loss for main competitor."},
                        {"name":"High Power Scope","desc":"Used for long range precision targeting."}
                    ],
                    "suspects":[
                        {"name":"Ziad Rival","role":"Rival Tycoon","alibi":"In bank meetings all day.","qs":[{"q":"Relation with victim?","a":"Fierce market competition."},{"q":"Hire sniper?","a":"I am legal businessman."},{"q":"Where at crime time?","a":"In finance tower."}]},
                        {"name":"Sahar Secretary","role":"Executive Assistant","alibi":"Preparing coffee in lounge.","qs":[{"q":"Who has office access?","a":"Me and security chief."},{"q":"Hear window sound?","a":"Glass is soundproof."},{"q":"Was he scared?","a":"Received death threats."}]},
                        {"name":"Maher Security Chief","role":"Head of Guard","alibi":"Monitoring lower floor cameras.","qs":[{"q":"Why miss sniper?","a":"Opposite building abandoned."},{"q":"Who holds opposite key?","a":"Bankrupt contractor."},{"q":"Cameras cover opposite?","a":"Angle misses it."}]},
                        {"name":"Jehad Sniper","role":"Mysterious Mercenary","alibi":"Renting room under alias.","qs":[{"q":"Why in opposite tower?","a":"Enthusiast photography."},{"q":"Why print on crossbow?","a":"Executed contract for money."},{"q":"Who paid you?","a":"Rival Ziad."}]}
                    ],
                    "explain":"Ziad Rival hired Jehad Mercenary to execute long-range cross-building assassination.",
                    "hints":["Hint 1: Examine the poisoned micro dart and professional crossbow mounted in the opposite building.","Hint 2: Check the dissolved contract showing major financial losses for the main market rival.","Hint 3: Ziad Rival hired Jehad Sniper in the abandoned opposing building to execute the tower assassination."]
                }
            ]
        },
        ary: {
                    appTitle: "الملف الأسود | عثمان التومي",
        appSub: "لعبة التحقيق الذكية – 20 جريمة",
        profileBtn: "👤 بروفايل المحقق",
        chatBtn: "💬 شات الأصدقاء",
        mpBtn: "🌐 اللعب مع الأصدقاء",
        statusReady: "جاهز للخدمة",
        archiveTitle: "📁 أرشيف القضايا (20 جريمة)",
        archiveDesc: "اختر من بين 20 قضية بتدرج في الصعوبة باش تبدأ التحقيق ديالك.",
        footerText: "الملف الأسود © 2026 - صمم بواسطة: عثمان التومي | 100% بدون إنترنت (اللعب مع الأصدقاء خاصو إنترنت)",
        filterAll: "الكل",
        filterEasy: "سهل",
        filterMedium: "متوسط",
        filterHard: "صعب",
        filterExtreme: "مستحيل",
        backArchive: "← رجوع للأرشيف",
        crimeSceneBanner: "تحقيق مسرح الجريمة",
        startInv: "انتقل لمسرح الجريمة ←",
        backBrief: "← رجوع لملخص القضية",
        notesBtn: "📝 ملاحظات المحقق",
        hintBtn: "💡 طلب تلميح",
        evidenceHeader: "🔍 الأدلة المادية",
        suspectsHeader: "👥 استنطاق المشتبه فيهم",
        accuseBtn: "⚖️ اتهام المشتبه فيه وحل القضية",
        returnMenu: "الرجوع للأرشيف",
        retryCase: "إعادة التحقيق في القضية",
        close: "إغلاق",
        interrogateQ: "أسئلة الاستنطاق:",
        accuseModalTitle: "⚖️ الاتهام النهائي",
        accuseModalDesc: "اختر المجرم الحقيقي بعناية. الاتهام الخطأ غادي ينقص من الرتبة ديالك كَمحقق!",
        cancel: "إلغاء",
        confirmAccuse: "تأكيد الاتهام",
        notesTitle: "📝 ملاحظات المحقق",
        notesDesc: "كتب الملاحظات والنظريات ديالك:",
        notesClose: "إغلاق",
        notesSave: "حفظ الملاحظات",
        hintTitle: "💡 تلميح المحقق",
        hintClose: "فهمت",
        profileTitle: "👤 بروفايل المحقق",
        proNameLabel: "سمية المحقق:",
        proRankLabel: "الرتبة:",
        achLabel: "🎖️ الإنجازات",
        onboardTitle: "أهلاً بك أيها المحقق",
        onboardBody: "أمامك 20 قضية جنائية لحلّها. اقرأ ملخص القضية، افحص الأدلة المادية بعناية، واستجوب كل مشتبه به — إجاباتهم تخفي الحقيقة. استخدم التلميحات فقط عند الحاجة (3 كحد أقصى لكل قضية)، ثم قدّم اتهامك النهائي. اختر بحكمة: اتهام بريء يترك الجاني الحقيقي يهرب!",
        onboardBtn: "لنبدأ التحقيق ←",
        proClose: "إلغاء",
        proSave: "حفظ البروفايل",
        mpTitle: "🌐 غرفة اللعب مع الأصدقاء",
        mpDesc: "تواصل مع أصحابك المحققين عبر الواي فاي، أو *3، أو *6 باش تنافسو في حل القضايا.",
        mpClose: "إغلاق",
        mpJoin: "اتصال بالغرفة",
        mpCreate: "إنشاء غرفة",
        mpLeave: "خروج من الغرفة",
        roomLeft: "خرجتي من الغرفة.",
        roomCreating: "كنديرو الغرفة ديالك...",
        roomCreated: "الغرفة واجدة! عطي هاد الكود لصاحبك: {code}",
        roomWaiting: "كنتسناو صاحبك يدخل للغرفة {code}...",
        roomFriendJoined: "صاحبك دخل! دابا راكم مرتبطين.",
        roomConnectFailed: "ماقدرناش نتصلو. تأكد راك مرتبط بالأنترنت (واي فاي، *3، أو *6) نتا وصاحبك، وعاود المحاولة.",
        roomDisconnected: "صاحبك خرج من الغرفة.",
        chatConnectedDisclaimer: "دابا مرتبط بصاحبك حقيقي مباشرة.",
        friendJoinedMsg: "صاحبك دخل للغرفة!",
        chatHeading: "💬 شات الأصدقاء المحققين",
        chatDisclaimer: "شات تجريبي وهمي — ماشي مربوط بلاير حقيقيين.",
        chatSend: "إرسال",
        chatWelcomeMsg: "مرحبا بيكم فالشبكة يا محققين! واش عندكم شي جديد على آخر قضية؟",
        chatInputPlaceholder: "كتب رسالتك...",
        notesPlaceholder: "كتب الأدلة ديالك هنا...",
        roomCodePlaceholder: "دخل كود الغرفة (مثلا CASE-99)",
        answerLabel: "الجواب:",
        selectSuspectAlert: "خاصك تختار مشتبه فيه قبل ما تأكد الاتهام.",
        resultSolvedTitle: "حليتي القضية بنجاح!",
        resultSolvedDesc: "برافو يا المحقق! عرفتي المجرم الحقيقي.",
        resultWrongTitle: "اتهام خاطئ!",
        resultWrongDesc: "اتهمتي شخص بريء. المجرم الحقيقي هرب.",
        caseExplanationLabel: "تفسير القضية:",
        micNotSupported: "تسجيل الصوت ماشي مدعوم فهاد الجهاز.",
        micPermissionDenied: "تم رفض الوصول للميكروفون. المرجو السماح بإذن الميكروفون فإعدادات المتصفح.",
        micTitle: "رسالة صوتية (دوز عليه باش تسجل، دوز عليه مرة أخرى باش تصيفط)",
        micListening: "كيسجل... دوز عليه باش تصيفط",
        micNoFriend: "قوّد الاتصال بصاحبك أولا باش تصيفط رسالة صوتية.",
        callBtnTitle: "مكالمة صوتية",
        callActive: "🔊 المكالمة الصوتية متصلة",
        callConnecting: "📞 كنتصل بصاحبك...",
        callEnded: "المكالمة سالات.",
        roomEnterCode: "عافاك دخل كود غرفة صحيح.",
        roomConnecting: "جاري الاتصال بالغرفة {code} عبر شبكة مؤمنة...",
        roomRetrying: "الغرفة ماكايناش دابا — كنعاودو المحاولة... (باقي {n})",
        roomConnected: "تم الاتصال بالغرفة {code} بنجاح! جاهز للتحدي.",
        botName: "المفتش جون",
        botReplies: [
            "تأكد باش تفحص كاع الأدلة المادية مزيان.",
            "شوف الأليبي (أقوال) ديال المشتبه فيهم واش فيها شي تناقضات خفيفة.",
            "واش راجعتي المذكرات الشخصية ديال الضحية؟",
            "زيد بحث مزيان آ المحقق! الحقيقة كاينا في التفاصيل الصغار."
        ],
        cases: [
            {
                "tag":"قضية قتل",
                "difficulty":"easy",
                "title":"صمت في القصر",
                "brief":"التاجر الغني كريم وازاني تلاقاو مقتول في المكتب الخاص ديالو داخل القصر بضربة موس قاتلة. الباب كان مقفول من الداخل والسرجم محلول.",
                "victim":"الضحية: كريم وازاني (54 عام) - رجل أعمال.",
                "culprit":"يحيى العلمي",
                "evidence":[
                    {"name":"موس من الفضة","desc":"مسوح مزيان، وخلف بصمة جزئية كتطابق الشريك يحيى."},
                    {"name":"رسالة مالية ممزقة","desc":"كتثبت بلي الضحية كان كيسلّ ديون كبيرة للشريك التجاري ديالو يحيى."},
                    {"name":"أثر رجلي مخوخ بالطين","desc":"أثر سبرديلة كبيرة قرب السرجم كيتطابق مع طين جنينة القصر."},
                    {"name":"ساعة اليد واقفة","desc":"وقفت مع 9:42 ديال الليل، الوقت بالضبط فاش وقعات الجريمة."},
                    {"name":"سجل كاميرات الحراسة","desc":"كيبين حركة مشبوهة في الممر المؤدي للمكتب."}
                ],
                "suspects":[
                    {"name":"سلمى وازاني","role":"المرأة (الزوجة)","alibi":"كانت ناعسة في بيتها من 9:00 ديال الليل.","qs":[{"q":"واش سمعتي شي صداع؟","a":"لا، كان كلشي ساكت تماماً."},{"q":"فين كنتي وقت الجريمة؟","a":"في بيتي ناعسة بوحدي."},{"q":"واش كان بيناتكم نزاع مالي؟","a":"ما كانت عندي حتى علاقة بفلوسه."}]},
                    {"name":"يحيى العلمي","role":"الشريك التجاري","alibi":"كان كيكمي كارو في البالكون اللوراني.","qs":[{"q":"شنو كان هداك النزاع المالي؟","a":"مجرد شراكة تجارية عادية."},{"q":"علاش بصمتك كانت في الموس؟","a":"كنت تما في الصباح خدام."},{"q":"فين كنتي مع 9:40 ديال الليل؟","a":"في البالكون كنجرّ كارو."}]},
                    {"name":"فاطمة","role":"الخادمة","alibi":"لقات الجثة في الصباح فاش كانت كتشقي وتتنظف.","qs":[{"q":"فاش فتحتي المكتب؟","a":"مع 8:00 ديال الصباح."},{"q":"واش الباب كان مسدود؟","a":"هيه، مسدود من الداخل."},{"q":"لاحظتي شي حاجة غريبة؟","a":"السرجم كان محلول شي شوية."}]},
                    {"name":"عمر","role":"الحارس","alibi":"كان كيدور يراقب السور برا.","qs":[{"q":"واش دخل شي برّاني؟","a":"البيبان الكبار كانو مسدودين."},{"q":"علاش ما سمعتي والو؟","a":"المكتب معزول للصوت والريح كان مجهد."},{"q":"شنو كانت مهمتك؟","a":"دورة مراقبة كل ساعة."}]}
                ],
                "explain":"يحيى العلمي هو المجرم: اعترف بلي كان قرب البالكون. البصمة الجزئية ديالو في الموس وآثار الطين كيتطابقو مع طريق الجنينة بسبب نزاع الدين الكبير.",
                "hints":["تلميح 1: تفقد الأدلة المادية لي تخلو فوق الموس الفضي وطريق الجنينة برا السرجم المحلول.","تلميح 2: راجع شكون لي كان عندو نزاع مالي كبير ومشكلة ديون مع الضحية.","تلميح 3: الأليبي ديال يحيى العلمي في البالكون كيطيح فاش كنقارنوه مع بصمتو الجزئية في سلاح الجريمة وآثار الطين."]
            },
            {
                "tag":"قضية سرقة",
                "difficulty":"easy",
                "title":"جوهرة عين النيل",
                "brief":"ألماسة 'عين النيل' الزرقاء النادرة تحضات واختفت من الفاتريند ديال الزاج في المتحف الوطني ليلة الافتتاح بلا ما يتهرس حتى شي قفل.",
                "victim":"المكان: المتحف الوطني - جوهرة كتعادل 10 مليون دولار.",
                "culprit":"ماهر المحافظ",
                "evidence":[
                    {"name":"گواني (قفاز) ديال الحرير مقطوع","desc":"تلقى محطوط حدا صندوق العرض الزجاجي."},
                    {"name":"كارط ديال الدخول VIP","desc":"هز بصمات مخبأة كتنسب لمحافظ المتحف."},
                    {"name":"تسجيل الكاميرا","desc":"كيبين شخص كابس كبوط كحل وغارج هارب بسرعة."},
                    {"name":"زغبة ديال الشعر","desc":"تلقات لاصقة في إطار الفاتريند."},
                    {"name":"سوارات السواري (المفاتيح الرئيسية)","desc":"سلسلة سوارات رئيسية كتعود للمسؤول الإداري."}
                ],
                "suspects":[
                    {"name":"رائد المدير","role":"مدير المتحف","alibi":"كان كيستقبل الضيوف الكبار (VIP) في القاعة الكبيرة.","qs":[{"q":"شكون عندو السواري؟","a":"أنا بوحدي والأمن."},{"q":"فين كنتي وقت السرقة؟","a":"مع ضيوف الڤي آي بي."},{"q":"فاش فقتو للسرقة؟","a":"لا، اكتشفناها من بعد."}]},
                    {"name":"سناء الأمن","role":"رئيسة الأمن","alibi":"كانت كتراقب الكاميرات (CCTV) في غرفة المراقبة اللورانية.","qs":[{"q":"علاش الكاميرات طفاو دقيقة وحدة؟","a":"مغوتة (مشكل) مفاجئ في الضوء."},{"q":"واش دزتي في القاعة؟","a":"غير في الدورة ديال المراقبة العادية."},{"q":"شكون دخل من بعد التسديرة؟","a":"حتى شي واحد."}]},
                    {"name":"ماهر المحافظ","role":"محافظ ومرمم اللوحات","alibi":"كان كيرمم اللوحات في الجناح الشرقي.","qs":[{"q":"علاش الگانوي ديالك تلاقى؟","a":"لبستو وأنا كننظف المعروضات."},{"q":"واش عندك حق الوصول؟","a":"هيه، كجزء من خدمتي."},{"q":"فين كنتي مع 10 ديال الليل؟","a":"في الورشة بوحدي."}]},
                    {"name":"منى الصحفية","role":"صاحبة تغطية الحدث","alibi":"كانت كدير استجوابات للضيوف في القاعة.","qs":[{"q":"واش صوريتي الجوهرة؟","a":"هيه، في الأول ديال السهرة."},{"q":"وقتاش مشيتي في حالتك؟","a":"قبل ما توقع الحكاية بشوية."},{"q":"شفتي شي حد مشبوه؟","a":"شفت واحد لابس كبوط."}]}
                ],
                "explain":"ماهر المحافظ سرق الألماسة مستغل تصريح الترميم ديالو وخلى خيوط الگانوي ديال الحرير قرب الزاج.",
                "hints":["تلميح 1: تفقد الگانوي ديال الحرير المقطوع محطوط حدا الفاتريند ديال الزاج.","تلميح 2: ركز على شكون لي كان عندو تصريح ترميم مهني باش يتعامل مع معروضات المتحف بلا ما يهرس قفول.","تلميح 3: العذر ديال ماهر المحافظ ما كيوضحش علاش خيوط الگانوي وبصماته تلاقاو في مسرح الجريمة."]
            },
            {
                "tag":"اختفاء",
                "difficulty":"easy",
                "title":"فين هي ياسمين؟",
                "brief":"الطالبة الجامعية ياسمين العلوي غبرات هادي 3 أيام. طوموبيلتها تلقات محطوطة قرب الغابة المظلمة والسواري (المفاتيح) باقين في الكونتاكت.",
                "victim":"مختفية: ياسمين العلوي (22 عام).",
                "culprit":"زياد الاكس",
                "evidence":[
                    {"name":"تلفون مهرس","desc":"تلقى في الجناب ديال الطريق؛ آخر مكالمة كانت مع الاكس خطيبها."},
                    {"name":"رسالة تهديد مكتوبة بخط اليد","desc":"رسالة تهديد بخط الإيد داخل صاكها."},
                    {"name":"أثر رويد الطوموبيل (السيريات)","desc":"آثار ديال سبرديلاط (إطارات) رياضية نادرة كتطابق مع طوموبيل زميلها في الكلية."},
                    {"name":"كأس قهوة","desc":"باقي سخون فوق siège ديال الطوموبيل."},
                    {"name":"مذكراتها الشخصية","desc":"كتهضر على الخوف الدائم ديالها بلي شي حد متبعها ومراقبها."}
                ],
                "suspects":[
                    {"name":"زياد الاكس","role":"الخطيب القديم","alibi":"كان خدام نهار كامل وما شافهاش.","qs":[{"q":"وقتاش ركبتي في طوموبيلتها؟","a":"هادي شي سيمانة تقريباً."},{"q":"علاش هددتيها في الرسالة؟","a":"كان غير سوء تفاهم داز."},{"q":"فين كانت طوموبيلتك ديك الليلة؟","a":"في كراج دارنا."}]},
                    {"name":"سامي الزميل","role":"زميل في الكلية","alibi":"كان كيقرا في المكتبة العمومية.","qs":[{"q":"شنو كانت علاقتكم؟","a":"غير زملاء في الجامع وبس."},{"q":"علاش آثار الرويد كيتطابقو؟","a":"بزاف ديال الطلبة عندهم نفس الرويد."},{"q":"فين كنتي نهار الثلاثاء؟","a":"في المكتبة حتى لـ 8 ديال الليل."}]},
                    {"name":"نوال الجارة","role":"جارة الدار (الحومة)","alibi":"كانت مسافرة تزور عائلتها في مدينة مجاورة.","qs":[{"q":"سمعتي شي عراك؟","a":"عمر، دارها كانت هادئة."},{"q":"وقتاش رجعتي؟","a":"الصباح بكري ديال غليه."},{"q":"شفتي زياد قرب العمارة؟","a":"هيه، جوج مرات المرة السابقة."}]},
                    {"name":"الدكتور طارق","role":"أستاذ جامعي","alibi":"كان كيصحح أوراق الامتحانات في الجامعة.","qs":[{"q":"واش غبرات على القسم؟","a":"هيه، نهار قبل ما تغبر."},{"q":"واش كانت عندها مشاكل؟","a":"بانت مقلقة ومخلوعة مؤخراً."},{"q":"كيفاش كان مستواها؟","a":"متهلية ومجتهدة."}]}
                ],
                "explain":"زياد الاكس هو المسؤول: آثار الرويد الرياضية والأقوال المتناقضة على التهديدات السابقة كيربطوه ديريكت بالجريمة.",
                "hints":["تلميح 1: تفقد التلفون المهرس وسجل المكالمات ورسالة التهديد في صاكها.","تلميح 2: شوف مزيان في آثار الرويد لي تلقاو قرب الغابة المظلمة فين تخبات طوموبيلتها.","تلميح 3: زياد الاكس عطى أقوال متناقضة على بلاكتو والتهديدات السابقة للضحية."]
            },
            {
                "tag":"تسميم",
                "difficulty":"easy",
                "title":"السم في الكاس",
                "brief":"الناقد الأدبي الكبير رمزي حامد مات ديريكت مور ما شرب العصير في حفل تكريمي داخل المسرح الوطني.",
                "victim":"الضحية: رمزي حامد (61 عام).",
                "culprit":"سامر الكاتب المنافس",
                "evidence":[
                    {"name":"قرعة عصير فيها سم","desc":"فيه آثار ديال سم السيانور القاتل."},
                    {"name":"سربيتة (منديل) مطوية","desc":"فيها بقايا بودرة سامة وبصمة جزئية."},
                    {"name":"برنامج الحفل","desc":"كيبين التوقيت بالضبط ديال تقديم المشروبات."},
                    {"name":"كأس زاج (تومبلر)","desc":"بصمات الضحية ومادة كيميائية برانية في الحواف ديالو."},
                    {"name":"مقال نقدي قاصح","desc":"مقال شارد كتبه الضحية كيهاجم فيه كاتب مبتدئ."}
                ],
                "suspects":[
                    {"name":"منى المضيفة","role":"مضيفة الحفل","alibi":"قدمات الكاسات حسب تعليمات المنظمين.","qs":[{"q":"شكون وجد الكاسات؟","a":"أنا ومساعد البار."},{"q":"واش خلتي الطبلة؟","a":"غير دقيقة نمشي نجيب الثلج."},{"q":"شفتي شي حد قرب؟","a":"شفت الكاتب الصغير قريب."}]},
                    {"name":"سامر الكاتب المنافس","role":"كاتب منافس","alibi":"كان كيهضر مع رئيس دار النشر طيلة السهرة.","qs":[{"q":"علاش الناقد هاجمك؟","a":"خسر لي الرواية الجديدة ظلماً."},{"q":"واش درتي شي حاجة في العصير؟","a":"حاشا لله، أنا محترف."},{"q":"فين كنتي وقت الحكاية؟","a":"قدام المراسيم ديال الحفل."}]},
                    {"name":"ليلى رمزي","role":"البنت (الابنة)","alibi":"كانت كتقدم الجوائز نيابة על باباها.","qs":[{"q":"واش كنتو مزيانين؟","a":"بطبيعة الحال، هو بابا."},{"q":"شكون كيرث الفلوس؟","a":"أنا ومؤسسة خيرية."},{"q":"كاتشك في شي حد؟","a":"الكاتب سامر هددة."}]},
                    {"name":"عصام الحارس","role":"حارس الأمن","alibi":"كان حارس الباب الرئيسي ديال القاعة.","qs":[{"q":"شكون دخل من الباب اللوراني؟","a":"غير عمال الكاترينگ وحددوا."},{"q":"كاتعرف شي حاجة على السيانور؟","a":"ما عارف والو في الكيميائيات."},{"q":"واش الكاميرات خدامين؟","a":"هيه، كيسجلوا كلشي."}]}
                ],
                "explain":"سامر الكاتب المنافس انتقم للسمعة ديالو لي تهرسات وسمم الكأس فالتغفيلة فاش غيبات المضيفة دقيقة.",
                "hints":["تلميح 1: تحقق من قرعة العصير المسمومة وبقايا البودرة السامة في السربيتة.","تلميح 2: راجع المقال النقدي القاصح لي كتبه الضحية كيهجم فيه على كاتب مبتدئ.","تلميح 3: سامر الكاتب المنافس كان عندو دافع قوي للانتقام والفرصة فاش بعدات المضيفة."]
            },
            {
                "tag":"قضية قتل",
                "difficulty":"easy",
                "title":"لغز الغرفة المغلقة",
                "brief":"رجل الأعمال ممدوح صبري تلاقى مقتول بالموس داخل بيتو فيوطيل. كاع البِيبان والسرجم كانوا مسدودين ومتبوتين من الداخل وما كاين حتى مخرج.",
                "victim":"الضحية: ممدوح صبري (48 عام).",
                "culprit":"خالد مول الصيانة",
                "evidence":[
                    {"name":"الكليماتيزور (مكيف الهواء)","desc":"مخرب بقطعة حديدية باش يتعطل سيستيم قفل الباب التوماتيكي."},
                    {"name":"مسدس بداية (Starter)","desc":"ملاح من سرجم الطبقة اللفوقية."},
                    {"name":"خيوط صيد سمك رقيق","desc":"خيط شفاف طويل تستعمل في لعبة الغرفة المغلقة."},
                    {"name":"سجل الفندق","desc":"كيبين بلي غير عمال الصيانة بوحدهم لي تسجل الدخول ديالهم."},
                    {"name":"مذكرات الضحية","desc":"كتشير لمحاولات ابتزاز من الشريك التجاري ديالو."}
                ],
                "suspects":[
                    {"name":"بهجت الشريك","role":"الشريك التجاري","alibi":"كان كيتعشى مع كليان في الطبلة التحتانية.","qs":[{"q":"شنو قصة الابتزاز؟","a":"مجرد نزاعات تجارية عادية."},{"q":"كيفاش دخلت لبيتو؟","a":"عمرني دخلت ليه."},{"q":"عندك ساري إضافي؟","a":"غير إدارة الفندق بوحدها."}]},
                    {"name":"نادية السكرتيرة","role":"مساعدة الضحية","alibi":"كانت في البيت المجاور كتوجد ملفات السفر.","qs":[{"q":"سمعتي شي عراك؟","a":"صوت خفيف ومن بعد سكات."},{"q":"وقتاش شفتيه حيي آخر مرة؟","a":"ساعة قبل الحادثة."},{"q":"شكون زاره في العشية؟","a":"عامل الصيانة."}]},
                    {"name":"خالد مول الصيانة","role":"تقني الفندق","alibi":"صلح البوولة (المصباح) وخرج في حالتو.","qs":[{"q":"علاش صاكك ديال الأدوات تخلى تما؟","a":"نسيتو بالزربة فوق الطبلة."},{"q":"قست الكليماتيزور؟","a":"عمر، خدمت غير على الضو والبولات."},{"q":"واش طلبك فشي حاجة؟","a":"طلب مني السكوت التام."}]},
                    {"name":"رؤوف الخو","role":"خو الضحية","alibi":"كان ناعس في بيتو في الطبة 3.","qs":[{"q":"مشكل الإرث؟","a":"قسمنا كلشي بالرضا والمحبة."},{"q":"كيفاش دخلتي للغرفة المغلقة؟","a":"ما كنتش تما كاع."},{"q":"شنو قصة الخيط؟","a":"ما عارف والو على هاد اللعبات."}]}
                ],
                "explain":"خالد التقني استعمل الخيوط ولعبة الكليماتيزور باش يدير قصة غرفة مغلقة مزورة من الداخل من بعد ما ارتكب الجريمة.",
                "hints":["تلميح 1: فحص الكليماتيزور وخيط الصيد الرقيق لي تلاقى في الغرفة.","تلميح 2: شوف سجلات دخول الفندق وأدوات التقني لي تخلو موراها.","تلميح 3: خالد تقني الصيانة استعمل صفيحة حديدية وخيط عبر الكليماتيزور باش يزور الغرفة المغلقة."]
            },
            {
                "tag":"قضية سرقة",
                "difficulty":"medium",
                "title":"اللوحة المسروقة",
                "brief":"لوحة أصلية ديال فنان عالمي اتسرقت من المعرض الدولي، وخلاو بلاصتها نسخة مطابقة للأصلية بلصق معلق بدقة.",
                "victim":"المكان: المعرض الفني الدولي - قيمة 5 مليون دولار.",
                "culprit":"فؤاد الرسام",
                "evidence":[
                    {"name":"إطار خشبي خاوي","desc":"تلاقى مخبي وراء صندوق تخزين العدة."},
                    {"name":"شيتة (فرشاة) رسام مهنية","desc":"فيها صباغة زيتية جديدة وباقي طرية."},
                    {"name":"بصمة واضحة","desc":"فوق الحيط مور اللوحة المزورة."},
                    {"name":"تذكرة قطار","desc":"مؤرخة بليل السرقة غادي الحدود."},
                    {"name":"سجل كاميرات الحراسة","desc":"مطفية بالضبط لمدة 10 دقائق."}
                ],
                "suspects":[
                    {"name":"فؤاد الرسام","role":"فنان ورسام مزور","alibi":"كان كيرسم بورتريه في دارو طيلة الليل.","qs":[{"q":"علاش عندك نفس الصباغات؟","a":"أنا رسام، كنستعملهم في خدمتي."},{"q":"واش زرتي المعرض؟","a":"هيه، تفرجت في اللوحات."},{"q":"فين كنتي مع 2 ديال الليل؟","a":"في الاستوديو الخاص ديالي."}]},
                    {"name":"حنان الناقدة الفنية","role":"ناقدة فنية","alibi":"كانت كتقيد مقال صحفي في غرفة الصحافة.","qs":[{"q":"لاحظتي التزوير؟","a":"لا، النسخة كانت بان ليا أصلية."},{"q":"شكون عندو مهارة النسخ؟","a":"فؤاد بطبيعة الحال."},{"q":"وقتاش مشيتي؟","a":"مع نص الليل تقريباً."}]},
                    {"name":"جمال الحارس","role":"حارس المعرض","alibi":"كان في دورة مراقبة في الطابق الفوقاني.","qs":[{"q":"علاش طفات الكاميرات؟","a":"مشكل تقني فجائي في الضو."},{"q":"شفتي شي حد غريب؟","a":"حتى شي مخلوق."},{"q":"وقتاش بدات دورتك؟","a":"مع 11 ديال الليل."}]},
                    {"name":"سحر الجامعة للتحف","role":"جامعة تحف فنية","alibi":"كانت في عشاء مع مستثمرين كبار.","qs":[{"q":"عرضتي تشري اللوحة؟","a":"المعرض رفض يبيعها."},{"q":"فين كنتي وقت السرقة؟","a":"في ريستو (مطعم) فخم."},{"q":"كاتشك في شي حد؟","a":"فؤاد كان مهووس بيها بزاف."}]}
                ],
                "explain":"فؤاد الرسام استغل مهارات التزوير باش يبدل اللوحة الأصلية بنسخة مزورة، وخلّى الشيتة الخاصة بيه.",
                "hints":["تلميح 1: تفقد شيتة الرسم المهنية لي تخلو وراها وفيها صباغة زيتية طرية.","تلميح 2: شوف البصمة لي فوق الحيط ديريكت ورا اللوحة المزورة.","تلميح 3: فؤاد الرسام هو المشتبه فيه الوحيد اللي عنده مهارات التزوير والمواد باش يدير هاد المبادلة."]
            },
            {
                "tag":"قضية قتل",
                "difficulty":"medium",
                "title":"جريمة مختبر نص الليل",
                "brief":"الكيميائي الدكتور مراد تقتل في مختبره المغلق. الكود الأخير لي كتب في بيسي (حاسوب) ديالو كيوجه أصابع الاتهام للقاتل.",
                "victim":"الضحية: الدكتور مراد (55 عام) - كيميائي.",
                "culprit":"هاني المساعد الرئيسي",
                "evidence":[
                    {"name":"بيكر (كأس مختبر) مهرس","desc":"فيه آثار ديال سم عصبي خطير."},
                    {"name":"جهاز كمبيوتر محمول (بيسي)","desc":"آخر شفرة مكتوبة كاتطابق مع سمية المساعد الرئيسي."},
                    {"name":"گانوي (قفاز) مطاطي","desc":"گانوي مقطع تلاقى قرب سرجم المختبر."},
                    {"name":"تقرير سري","desc":"كيكشف على سرقة أبحاث كيميائية حساسة."},
                    {"name":"سجل مفتاح الدخول (Keycard)","desc":"تسجيل دخول وحيد ببطاقة صحيحة."}
                ],
                "suspects":[
                    {"name":"الدكتور سمير","role":"زميل بحث","alibi":"كان كيدير تجارب في البناية المجاورة.","qs":[{"q":"ماهي طبيعة الأبحاث المسروقة؟","a":"تركيبات طبية متقدمة."},{"q":"علاش دخلتي في السجل ديالو؟","a":"كنت كقلب على مقال علمي."},{"q":"فين كنتي وقت الجريمة؟","a":"في المختبر ديالي الخاص."}]},
                    {"name":"نادية الطالبة","role":"مساعدة في المختبر","alibi":"خرجت بكري باش تكمل بحث التخرج ديالا.","qs":[{"q":"وقتاش خرجتي؟","a":"مع 7 ديال العشية."},{"q":"شكون لي كان عنده بطاقة الليل؟","a":"الدكتور مراد والدكتور سمير."},{"q":"واش كان مقلق؟","a":"كان كيتوصل بمكالمات تهديد."}]},
                    {"name":"هاني المساعد الرئيسي","role":"مساعد رئيسي قديم","alibi":"كان في دارو مع عائلته طيلة الليل.","qs":[{"q":"علاش البيسي كتب سميتك؟","a":"مجرد خطأ أو اتهام باطل."},{"q":"عندك وصول للأبحاث؟","a":"هيه، عندي وصول تام."},{"q":"فين كنتي ليل كامل؟","a":"في داري مع عائلتي."}]},
                    {"name":"سعاد باحثة","role":"باحثة ضيفة","alibi":"كانت في مؤتمر علمي برا المدينة.","qs":[{"q":"وقتاش رجعتي للمدينة؟","a":"الصباح ديال غليه."},{"q":"واش كان بيناتكم نزاع؟","a":"رفض ينشر لي المقال ديالي."},{"q":"كاتعرف هاني؟","a":"هيه، زميل في الخدمة."}]}
                ],
                "explain":"هاني المساعد الرئيسي قتل الدكتور مراد باش يسرق الأبحاث، وما ردش البال بلي الضحية كتب كوده التعريفي في اللحظات اللخيرة.",
                "hints":["تلميح 1: فحص البيكر المهرس لي فيه السم العصبي والكمبيوتر المحمول.","تلميح 2: راجع شكون لي كان عنده حق الوصول الكامل للأبحاث والدخول للمختبر.","تلميح 3: الكود الأخير لي كتبه الضحية في البيسي كيوجه الشبهة لهاني المساعد الرئيسي."]
            },
            {
                "tag":"قضية قتل",
                "difficulty":"medium",
                "title":"اغتيال في القطار السريع",
                "brief":"عميل مخابرات متقاعد مات داخل مقصورة قطار النوم برصاصة من مسدس بسكاتش (كاتم صوت) في ظلام النفق.",
                "victim":"الضحية: كمال الدين (62 عام).",
                "culprit":"سليم الغامض",
                "evidence":[
                    {"name":"كاتم صوت معدني (Suppressor)","desc":"تلاح فوق السكة الحديدية وقت عبور النفق."},
                    {"name":"تذكرة مزورة","desc":"تذكرة بهوية مزورة مسجلة في الكاروسة لي حداه."},
                    {"name":"ملف سري مسرب","desc":"مفقد من صاك الضحية الشخصي."},
                    {"name":"آثار حبر سري","desc":"تلقات فوق صباع المشتبه فيه رقم 2."},
                    {"name":"سجل حركة الركاب","desc":"كيبين حركة مشبوهة بين العربات."}
                ],
                "suspects":[
                    {"name":"ماهر الصحفي","role":"راكب في المقصورة","alibi":"كان كيكتب مقال في البيسي طول الرحلة.","qs":[{"q":"فين غادي؟","a":"للعاصمة عندي مقابلة عمل."},{"q":"سمعتي صوت الرصاص؟","a":"غير صوت احتكاك رويد القطار."},{"q":"علاش مخلوع؟","a":"ما كنحملش السفر الطويل في القطار."}]},
                    {"name":"سليم الغامض","role":"رجل أعمال","alibi":"كان ناعس في مقصورته الخاصة المغلقة.","qs":[{"q":"سبب السفر المفاجئ؟","a":"صفقة تجارية مستعجلة."},{"q":"علاش الحبر في صباعك؟","a":"كنمضي عقود بستيلو سائل."},{"q":"كاتعرف الضحية؟","a":"عمرني شفتو في حياتي."}]},
                    {"name":"رشا المضيفة","role":"مضيفة القطار","alibi":"كانت كتصوب المشروبات في العربة الأمامية.","qs":[{"q":"شكون تحرك بين العربات؟","a":"شخص لابس كبوط كحل."},{"q":"الضو طفا في النفق؟","a":"لا، ظلام النفق العادي."},{"q":"لاحظتي شي حاجة غريبة؟","a":"ريحة البارود خفيفة."}]},
                    {"name":"جهاد الحارس","role":"حارس خاص (Escort)","alibi":"كان حارس باب السلع اللوراني.","qs":[{"q":"دوز شي حد من عندك؟","a":"حتى شي مخلوق ما داز من الباب اللوراني."},{"q":"هاز سلاح ناري؟","a":"هيه، سلاح الخدمة المرخص."},{"q":"وقتاش بدات نوبتك؟","a":"من نهار طلعنا من المحطة."}]}
                ],
                "explain":"سليم الغامض دار الاغتيال الصامت مستعمل كاتم الصوت في النفق بهوية مزورة.",
                "hints":["تلميح 1: تحقق من كاتم الصوت الملاح فوق السكة وسجل حركة الركاب.","تلميح 2: شوف آثار الحبر السري والتذكرة المزورة في العربة لي حداه.","تلميح 3: سليم الغامض سافر بهوية مزورة ونفذ إطلاق النار الصامت في النفق."]
            },
            {
                "tag":"قضية سرقة",
                "difficulty":"medium",
                "title":"سرقة الخزنة الكبرى",
                "brief":"ملايين اختفات من خزنة شركة الاتصالات الوطنية بلا كسر؛ الكود الرقمي كان عند المدير بوحدو.",
                "victim":"شركة الاتصالات الوطنية - خسارة 2 مليون دولار.",
                "culprit":"زياد المحاسب",
                "evidence":[
                    {"name":"فيديو كاميرا مخبأة","desc":"كيبين شخص كيدخل رقم الكود (PIN) بعناية."},
                    {"name":"وريقة ورقة ملاحظات","desc":"فيها تلميحات لكود السر القديم."},
                    {"name":"بصمة جزئية","desc":"فوق زر إدخال الخزنة."},
                    {"name":"بطاقة رقمية (Keycard)","desc":"البطاقة الاحتياطية ناقصة من الدرج."},
                    {"name":"فاتورة ديون","desc":"كاتعني محاسب الشركة."}
                ],
                "suspects":[
                    {"name":"صالح المدير","role":"مدير الشركة","alibi":"كان في اجتماع المجلس طيلة الصباح.","qs":[{"q":"شكون كيعرف الكود؟","a":"أنا والمحاسب بوحدنا."},{"q":"ضيعتي البطاقة الاحتياطية؟","a":"لا، ديما في جيبي."},{"q":"شكون كتشك فيه؟","a":"المحاسب عنده ديون ثقيلة."}]},
                    {"name":"فاطمة السكرتيرة","role":"سكرتيرة تنفيذية","alibi":"كانت كترتب المواعيد في الاستقبال.","qs":[{"q":"عندك وصول للخزنة؟","a":"لا، نهائياً."},{"q":"شكون دخل لمكتب المدير؟","a":"المحاسب وعمال التنظيف."},{"q":"لاحظتي شي حاجة؟","a":"الباب كان محلول شي شوية."}]},
                    {"name":"زياد المحاسب","role":"محاسب مالي","alibi":"كان كيوجد المراجعة السنوية في مكتبه.","qs":[{"q":"علاش عندك ديون ثقيلة؟","a":"مشاكل عائلية وتكات."},{"q":"كيفاش عرفتي الكود؟","a":"كجزء من الخدمة المالية أحياناً."},{"q":"فين كنتي البارح مع الظهر؟","a":"في الوكالة البنكية."}]},
                    {"name":"عادل الحارس","role":"حارس العمارة","alibi":"كان حارس الباب الرئيسي.","qs":[{"q":"شي حد خرج بصاكات؟","a":"غير الموظفين العاديين لي خارجين."},{"q":"الكاميرات خدامين؟","a":"خدامين مزيان."},{"q":"وقتاش بدات نوبتك؟","a":"في الصباح بكري."}]}
                ],
                "explain":"زياد المحاسب استغل دافع الديون ومعرفته بالكود باش يسرق فلوس الخزنة بالبطاقة الاحتياطية.",
                "hints":["تلميح 1: فحص فيديو الكاميرا المخبأة لي كيبين إدخال الكود والبطاقة الناقصة.","تلميح 2: تحقق من فاتورة الديون المالية العائدة للموظف.","تلميح 3: زياد المحاسب كان عنده الدافع المالي (الديون) ومعرفة بالكود باش يخوي الخزنة."]
            },
            {
                "tag":"قضية قتل",
                "difficulty":"medium",
                "title":"جريمة شاطئ الأندلس",
                "brief":"صيدال (صياد) تلاقى مقتول في الرمل مع الفجر حدا طوموبيلته الصغيورة (فلوكة) والماكينة باقية خدامة.",
                "victim":"الضحية: إبراهيم الصياد (50 عام).",
                "culprit":"حمزة الشاب",
                "evidence":[
                    {"name":"مجداف خشبي مهرس","desc":"مغرق بالدم وفيه آثار عراك."},
                    {"name":"شبكة صيد مقطعة","desc":"مشتتة قرب خط الما."},
                    {"name":"ساعة يد رخيصة","desc":"كاتعني شاب من شباب الدوار المحلي."},
                    {"name":"آثار رجلي في الرمل","desc":"كاتمشي اتجاه الطريق الساحلية."},
                    {"name":"صندوق معدات محلول","desc":"الأدوات الحادة ناقصة منه."}
                ],
                "suspects":[
                    {"name":"حمزة الشاب","role":"شاب عاطل","alibi":"كان ناعس في دارو ليل كامل.","qs":[{"q":"علاش ساعتك تلاقيت؟","a":"غالباً طاحت ليا وأنا كنعوم."},{"q":"كان عندك مشاكل معاه؟","a":"تصارعنا على بلاصة الصيد."},{"q":"فين كنتي مع 4 ديال الصباح؟","a":"في ناموستيتي."}]},
                    {"name":"موسى الصياد","role":"صياد منافس","alibi":"كان كيصيد بالليل في البحر.","qs":[{"q":"وقتاش رجعتي؟","a":"مع طلوع الفجر."},{"q":"شفتي حمزة قريب؟","a":"شفتو قريب للبلاصة ديال الفلوكة."},{"q":"شنو علاقتك بالضحية؟","a":"منافسة مهنية عادية."}]},
                    {"name":"سالم مول القهوة","role":"صاحب الحانوت","alibi":"كان كيحل القهوة ديالو.","qs":[{"q":"سمعتي غوات؟","a":"غير صوت أمواج البحر."},{"q":"شكون كيجي للشاطئ بالليل؟","a":"الصيادة والشباب."},{"q":"شفتي برانيين؟","a":"حتى شي واحد."}]},
                    {"name":"خديجة المرات","role":"ربة بيت","alibi":"كانت في دارها مع الولاد.","qs":[{"q":"وقتاش خرج لخدمتو؟","a":"مع نص الليل كيف ديما."},{"q":"واش كان عنده مشاكل؟","a":"نزاع مالي مع حمزة."},{"q":"خلا شي ورقة؟","a":"لا."}]}
                ],
                "explain":"حمزة الشاب تصارع مع الصياد على بلاصة الصيد وضربو بالمجداف وطيح ساعته تما.",
                "hints":["تلميح 1: فحص المجداف الخشبي المهرس والساعة الرخيصة الملقات في الرمل.","تلميح 2: شوف آثار الأرجلي لي خارجة من الشاطئ اتجاه الطريق الساحلية.","تلميح 3: حمزة الشاب كان عنده نزاع مستمر على حقوق الصيد وطيح ساعته الشخصية وقت العراك."]
            },
            {
                "tag":"اختفاء",
                "difficulty":"hard",
                "title":"اللوحة الأثرية المختفية",
                "brief":"لوحة نادرة غبرات من قصر ملكي قديم بلا ما تدور سيستيم الإنذار (الألارم).",
                "victim":"قصر الأمير الراحل - عمل فني نادر.",
                "culprit":"ماهر الديكوراتور",
                "evidence":[
                    {"name":"أداة تعطيل الألارم","desc":"أداة تقنية عالية لتجاوز الإنذار."},
                    {"name":"گواني قماش","desc":"فيه غبار القصر القديم."},
                    {"name":"تصميم القصر (Blueprint)","desc":"تلاقى في تلفون الديكوراتور."},
                    {"name":"قماش مقطع","desc":"مقطع من ستارة الغرفة."},
                    {"name":"سجل الزوار","desc":"كيجل زيارة ليلية لمصمم الديكور."}
                ],
                "suspects":[
                    {"name":"الأمير خالد","role":"وريث القصر","alibi":"في رحلة عمل على برا البلاد.","qs":[{"q":"شكون عنده حق الوصول؟","a":"أنا وفريق الصيانة."},{"q":"واش اللوحة مؤمنة؟","a":"هيه بملايين الدراهم."},{"q":"كاتشك في الموظفين؟","a":"مصمم الديكور الجديد."}]},
                    {"name":"ماهر الديكوراتور","role":"خبير ترميم وديكور","alibi":"كان كيعبر الحيطة للإصلاح.","qs":[{"q":"علاش عندك تصاميم القصر؟","a":"ضرورية لخدمة الديكور."},{"q":"عطلت الألارم؟","a":"فحست غير الخيوط المهرسة."},{"q":"فين كاينا اللوحة؟","a":"ما عارف والو."}]},
                    {"name":"سعاد المؤرخة","role":"أمينة الأرشيف","alibi":"كانت كتجرد العناصر في الأرشيف.","qs":[{"q":"آخر زيارة للغرفة؟","a":"السيمانة اللي فاتت."},{"q":"لاحظتي شي تغيير؟","a":"كلشي في بلاصتو."},{"q":"شكون كيعجبو الفن؟","a":"الأمير براسه."}]},
                    {"name":"عصام رئيس الحراس","role":"رئيس الأمن","alibi":"كان كيراقب البيبان البرانيين.","qs":[{"q":"شفتي شي متسلل؟","a":"الكاميرات ما شافو حد."},{"q":"الألارم تسكت؟","a":"تطفى دقائق ورجع خدم."},{"q":"شكون طفاه؟","a":"شي خبير فنان."}]}
                ],
                "explain":"ماهر الديكوراستور استغل تصاميم القصر ومهاراته التقنية باش يعطل الألارم ويسرق اللوحة.",
                "hints":["تلميح 1: تحقق من أداة تعطيل الألارم وتصاميم القصر في تلفون المصمم.","تلميح 2: راجع سجل الزوار لي كيبين دخول المصمم بالليل.","تلميح 3: ماهر الديكوراتور استغل وصوله للتصاميم والأدوات التقنية باش يعطل الألارم ويسرق اللوحة."]
            },
            {
                "tag":"قضية قتل",
                "difficulty":"hard",
                "title":"مقتل الممثل الشهير",
                "brief":"ممثل معروف تلاقى مقتول في كواليس المسرح (Green Room) مور العرض المسرحي الأخير.",
                "victim":"الضحية: رأفت رامي (45 عام).",
                "culprit":"باسهم الممثل الاحتياطي",
                "evidence":[
                    {"name":"سيناريو مقطع","desc":"ملاحظات مكتوبة بقسوة على دور البطولة."},
                    {"name":"حبل دعامة مسرحية","desc":"حبل مزور تبدل وتحول لأداة خنق حقيقية."},
                    {"name":"أثر صباط خشبي","desc":"وراء الممر المظلم ديال الكواليس."},
                    {"name":"سجل المكالمات","desc":"تهديدات متكررة من الممثل الاحتياطي الصغير."},
                    {"name":"لباس المسرح (كوستيم)","desc":"ملاح في سطل الزبالة."}
                ],
                "suspects":[
                    {"name":"سلاف الممثلة","role":"الممثلة البطلة","alibi":"كانت كتتفرج وتحتفل مع الفانز في الكافتيريا.","qs":[{"q":"علاقتك بيه؟","a":"منافسة فنية بحتة صافي."},{"q":"تصارعتو؟","a":"تنافسنا على بلاصة البطولة."},{"q":"فين كنتي وقت الجريمة؟","a":"مع الفانز في القاعة."}]},
                    {"name":"سامي المخرج","role":"مخرج المسرحية","alibi":"كان كيراقب الإضاءة مع الطاقم.","qs":[{"q":"كيف كان أداء الضحية؟","a":"عظيم ولكن متكبر."},{"q":"شكون دخل للكواليس؟","a":"الممثل الاحتياطي معصب."},{"q":"سمعتي شي غوات؟","a":"الموسيقا غطات الأصوات."}]},
                    {"name":"زياد الكاتب","role":"مؤلف المسرحية","alibi":"كان كيوقع كتب للجمهور برا.","qs":[{"q":"بدل السيناريو؟","a":"كان كيطالب بتغييرات ديما."},{"q":"فين كنتي مور الستار؟","a":"كنوقع الكتب."},{"q":"عجبك تمثيله؟","a":"كان لائق للدور مزيان."}]},
                    {"name":"باسهم الممثل الاحتياطي","role":"ممثل مساعد","alibi":"كان كيبدل حوايجو في غرفة تبديل الملابس.","qs":[{"q":"علاش هددتيه؟","a":"سرق مني دور البطولة بالطمع."},{"q":"قتلتيه؟","a":"كنت معصب ولكن ما قتلتهوش."},{"q":"فين كنت بالضبط؟","a":"في الغرفة بوحدي."}]}
                ],
                "explain":"باسهم الممثل الاحتياطي خنق رأفت بسبب الغضب حيت سرق ليه دور البطولة مستغل حبل الكواليس.",
                "hints":["تلميح 1: فحص سجل المكالمات لي فيه تهديدات متكررة من زميل في العمل.","تلميح 2: تحقق من حبل الدعامة المسرحية لي تحول لأداة خنق حقيقية وراء الستار.","تلميح 3: باسهم الممثل الاحتياطي كان عنده دافع الغضب الشديد بعد ما رأفت خد ليه دور البطولة."]
            },
            {
                "tag":"قضية سرقة",
                "difficulty":"hard",
                "title":"سرقة قطار الذهب",
                "brief":"شحنة سبائك ذهب كتسوى مليون دولار غبرات من قطار سلع سريع في نص الطريق بين المدن بالليل.",
                "victim":"شركة النقل السريع - سبائك ذهب.",
                "culprit":"سامح سائق القطار",
                "evidence":[
                    {"name":"جاك هيدروليكي (مرفاع)","desc":"مخبي حدا السكة الحديدية."},
                    {"name":"جهاز لاسلكي (Walkie-Talkie)","desc":"كيخدم بتردد راديو أمن شركة القطارات."},
                    {"name":"گواني خدمة وسخ","desc":"فيه لوگو شركة الشحن."},
                    {"name":"آثار طوموبيل كبييرة (شاحنة)","desc":"قرب علامة وقوف الطوارئ ديال القطار."},
                    {"name":"سجل الصيانة","desc":"كيبين توقف اضطراري متعمد للقطار لمدة دقيقة."}
                ],
                "suspects":[
                    {"name":"سامح سائق القطار","role":"سائق السلع","alibi":"وقف بسبب مشكل إشارة فجائي.","qs":[{"q":"علاش وقفت هنا؟","a":"إشارة حمراء طارئة من البرج."},{"q":"عارف قيمة السلع؟","a":"هيه، ذهب مؤمن."},{"q":"شكون عنده اللاسلكي؟","a":"طاقم المراقبة."}]},
                    {"name":"ماجد المراقب","role":"مراقب الإشارات","alibi":"كان كيراقب السكك من برج التحكم.","qs":[{"q":"أمرت بوقوف القطار؟","a":"الإشارات كانوا خضرين."},{"q":"شكون لعب في اللوحة؟","a":"شي واحد بالتردد."},{"q":"فين كنت مع 1 ديال الليل؟","a":"في البرج بوحدي."}]},
                    {"name":"دانيال الحارس","role":"مرافق السلع","alibi":"كان حارس باب السلع اللوراني من الداخل.","qs":[{"q":"علاش ما ضربتيش بالسلاح؟","a":"تضربت بالغاز وتدوخت."},{"q":"شكون كان داخل؟","a":"غير أنا والصناديق."},{"q":"وقتاش فقت؟","a":"ساعة مور الوقفة."}]},
                    {"name":"عصام الميكانيكي","role":"عامل صيانة","alibi":"كان كيصلح السكة في المحطة المجاورة.","qs":[{"q":"عندك جاك هيدروليكي؟","a":"هيه، لصيانة السكة."},{"q":"فين كانت أدواتك؟","a":"في شاحنة الخدمة."},{"q":"عاجبك الفلوس بالزربة؟","a":"شكون ما يعجبوهش؟ ولكن أنا أمين."}]}
                ],
                "explain":"سامح سائق القطار تواطأ مع عصام الميكانيكي باش يوقفوا القطار بالتعمد ويهبطوا الذهب.",
                "hints":["تلميح 1: تحقق من الجاك الهيدروليكي واللاسلكي المظبوط على تردد الشركة.","تلميح 2: راجع سجل الصيانة لي كيبين توقف طوارئ متعمد لمدة دقيقة واحدة.","تلميح 3: سامح سائق القطار تواطأ مع الميكانيكي عصام باش يوقفوا القطار ويهبطوا الشحنة."]
            },
            {
                "tag":"قضية قتل",
                "difficulty":"hard",
                "title":"مقتل عالم الآثار",
                "brief":"عالم آثار معروف تلاقى مقتول داخل مقبرة تفتحات جديدة والصندوق الأثري مكسور بالقوة.",
                "victim":"الضحية: الدكتور فاضل (58 عام).",
                "culprit":"ماهر المهرب",
                "evidence":[
                    {"name":"فاس أثري (Pickaxe)","desc":"مغرق بدم الضحية والبصمات."},
                    {"name":"تمثال ذهبي صغيور","desc":"طاح من القاتل فاش كان هارب."},
                    {"name":"مصباح يدوي (Flashlight)","desc":"فيه ماركة ديال حانوت سكاكي محلي."},
                    {"name":"آثار طين في الأرض","desc":"كاتمشي اتجاه مدخل الحفريات الرئيسي."},
                    {"name":"سجل البعثة","desc":"كيوضح نزاع على تقسيم الآثار المكتشفة."}
                ],
                "suspects":[
                    {"name":"الدكتور عادل","role":"قائد البعثة المشارك","alibi":"كان كيوثق النقوش في الغرفة الغربية.","qs":[{"q":"علاش تصارعتو؟","a":"على حقوق البحث العلمي."},{"q":"دخلت لغرفة الكنز؟","a":"في الصباح غير وحدي."},{"q":"فين كنت وقت الجريمة؟","a":"في الغرفة الاخرى."}]},
                    {"name":"سعاد المساعدة","role":"مساعدة التنقيب","alibi":"كانت كترتب الأدوات في المعسكر الخارجي.","qs":[{"q":"شكون زار المقبرة بالليل؟","a":"الدكتور فاضل بوحدو."},{"q":"كاين آثار ناقصة؟","a":"تمثال ذهبي نادر."},{"q":"وقتاش اكتشفتوا الجريمة؟","a":"الصباح ديال غليه."}]},
                    {"name":"ماهر المهرب","role":"شخص مشبوه","alibi":"كان كصيد الحيوانات في أطراف الصحراء.","qs":[{"q":"علاش قريب للمقبرة؟","a":"كنصيد الوحيش (الصيد البري)."},{"q":"علاش المصباح ديالك تلاقى؟","a":"ضيعته شحال هادي."},{"q":"كاتهرب الآثار؟","a":"اتهام باطل وكاذب."}]},
                    {"name":"جهاد الحارس","role":"حارس الموقع","alibi":"كان حارس خيام البعثة برا.","qs":[{"q":"شفت براني كيدخل؟","a":"شفت واحد هز صاك ثقيل."},{"q":"علاش ما حبستوش؟","a":"ظنيت أنه باحث علمي."},{"q":"سمعتي شي عوات؟","a":"الريح كانت مجهدة بزاف."}]}
                ],
                "explain":"ماهر المهرب تسلل للمقبرة باش يسرق التمثال الذهبي وقتل عالم الآثار فاش تشد متلبس.",
                "hints":["تلميح 1: فحص المصباح اليدوي الحامل لعلامة متجر محلي الملقات في مسرح الجريمة.","تلميح 2: تحقق من التمثال الذهبي لي خلاه القاتل وراها وهوا هارب.","تلميح 3: ماهر المهرب تسلل للمقبرة للسرقة وقتل الدكتور فاضل فاش كشفه."]
            },
            {
                "tag":"اختفاء",
                "difficulty":"hard",
                "title":"اختفاء الطائرة الخاصة",
                "brief":"طائرة رجال أعمال خاصة غبرات فوق أجواء جبلية وعرة قريبة من غابة صنوبر كثيفة.",
                "victim":"طائرة خاصة - 4 ركاب.",
                "culprit":"سامر مساعد الطيار",
                "evidence":[
                    {"name":"صندوق الطائرة الأسود مهشم","desc":"كيبين تلاعب متعمد بنظام الطيار الآلي (Autopilot)."},
                    {"name":"وقود ملوث","desc":"مادة كيميائية تزادت سببات في توقف المحركات."},
                    {"name":"رسالة انتحار مزورة","desc":"تلقات في بيسي المساعد."},
                    {"name":"خيوط مظلة هبوط (باراشوت)","desc":"مرونة في فروع شجر الصنوبر العالي."},
                    {"name":"خطة طيران مبدلة","desc":"كتدير مسار الطائرة اتجاه الجبال بالعاني."}
                ],
                "suspects":[
                    {"name":"الكابتن رامي","role":"الطيار الرئيسي","alibi":"كان كيسوق الطائرة حسب التوجيهات الرسمية.","qs":[{"q":"علاش بدلتوا الطريق؟","a":"باش نتفاداو عاصفة خطيرة."},{"q":"مشكل في المحركات؟","a":"المحركات وقفات فجأة."},{"q":"فين بلاصة السقوط؟","a":"وسط الغابة بالظبط."}]},
                    {"name":"سامر مساعد الطيار","role":"المساعد الأول","alibi":"كان كيراقب لوحة القيادة في الكابينة.","qs":[{"q":"شكون بدل الخطة؟","a":"الطيار طلب باش يوفر الوقود."},{"q":"خرجت من الطائرة؟","a":"بقيت داخل الطائرة."},{"q":"شنو قصة الباراشوت؟","a":"أداة في طقم الطوارئ."}]},
                    {"name":"منير المستثمر","role":"صاحب الطائرة","alibi":"كان كيقرا وثائق في كرسي الركاب.","qs":[{"q":"الطائرة مؤمنة؟","a":"مؤمنة بمبلغ كبير."},{"q":"لاحظتي شي توتر؟","a":"الطيارين تناقشو بهدوء."},{"q":"فين صاكك؟","a":"تحرق في الطيحة."}]},
                    {"name":"ليلى مساعدة","role":"مساعدة شخصية","alibi":"كانت جالسة في القسم اللوراني.","qs":[{"q":"سمعتي شي انفجار؟","a":"صوت غريب ومن بعد طيحة سريعة."},{"q":"كاتحمل الطيران؟","a":"ما كنحملش العلو عالي."},{"q":"شكون مستفيد؟","a":"شركات التأمين."}]}
                ],
                "explain":"سامر مساعد الطيار خرب الوقود وبدل الملاحة ونقز بالباراشوت قبل السقوط.",
                "hints":["تلميح 1: تحقق من الصندوق الأسود المهرس والوقود الملوث لي سبب توقف المحركات.","تلميح 2: فحص خيوط الباراشوت المعلقة في أشجار الصنوبر القريبة من مسار السقوط.","تلميح 3: سامر مساعد الطيار خرب الطائرة وبدل المسار ونقز بالباراشوت قبل الاصطدام."]
            },
            {
                "tag":"قضية قتل",
                "difficulty":"extreme",
                "title":"السم الخفي",
                "brief":"ملياردير تم تسميمه داخل مكتبه في عمارة برجية مؤمنة باستعمال مركب بيولوجي نادر ما كيتكشفش بسهولة.",
                "victim":"الضحية: فؤاد المعتصم (60 عام).",
                "culprit":"الدكتور زياد",
                "evidence":[
                    {"name":"قطارة طبية","desc":"فيها قطرات ميكروسكوبية من السم العصبي."},
                    {"name":"كأس ماء","desc":"مخلط بمركب بيولوجي ما عندوش ريحة."},
                    {"name":"گواني طبي (سيرجي)","desc":"ملاح في سطل الزبالة."},
                    {"name":"وصية جديدة محدثة","desc":"كتعاوض توزيع الإرث لمؤسسة خيرية."},
                    {"name":"تسجيل الكاميرات","desc":"كيبين شخص لابس كبوط طبي (طبيب)."}
                ],
                "suspects":[
                    {"name":"الدكتور زياد","role":"الطبيب الشخصي","alibi":"كان كيقيس ضغط دم الضحية في العشية.","qs":[{"q":"دواء يومي؟","a":"فيتامينات القلب وحدها."},{"q":"علاش تلقات القطارة؟","a":"كاتستعمل لقطرة العينين."},{"q":"عارف بالوصية الجديدة؟","a":"لا، ما عندي علم."}]},
                    {"name":"سوسن الزوجة","role":"زوجة الضحية","alibi":"كانت كتوجد اتاي في الكوزينة البرانية.","qs":[{"q":"شكون شرب الماء؟","a":"راجلي بوحدو."},{"q":"نزاع على الوصية؟","a":"محزونة ولكن ما قتلتهوش."},{"q":"شكون زاره اليوم؟","a":"طبيبه الشخصي."}]},
                    {"name":"ماهر الصيدلي","role":"صيدلي العائلة","alibi":"كان كيسير الصيدلية نهار كامل.","qs":[{"q":"عطيتي شي سم؟","a":"أدوية مرخصة وحدها."},{"q":"شكون عندو السم البيولوجي؟","a":"مختبرات عالية المستوى."},{"q":"زرتي القصر؟","a":"هادي شحال من شهر."}]},
                    {"name":"عمر الحارس","role":"حارس القصر","alibi":"كان حارس الباب الرئيسي.","qs":[{"q":"شكون دخل بالبوط الطبي؟","a":"الطبيب زياد كيف ديما."},{"q":"شفتي شي براني؟","a":"حتى شي مخلوق غريب."},{"q":"وقتاش بدات نوبتك؟","a":"الصباح بكري."}]}
                ],
                "explain":"الدكتور زياد الطبيب الشخصي سمم إمدادات الدواء بمركب بيولوجي باش يستحوذ على أموال التركة.",
                "hints":["تلميح 1: فحص القطارة الطبقة لي فيها جزيئات من السم العصبي.","تلميح 2: تحقق من فيديو الكاميرات لي كيبين شخص لابس كبوط طبي كيدخل للمكتب المحصن.","تلميح 3: الدكتور زياد الطبيب الشخصي سمم دواء الضحية باش يضمن أموال الإرث."]
            },
            {
                "tag":"قضية سرقة",
                "difficulty":"extreme",
                "title":"سرقة المتحف المحلي",
                "brief":"تماثيل برونزية قديمة غبرات من فاتريند المتحف المحلي بلا ما يتهرسو القفول.",
                "victim":"المتحف المحلي - 3 تماثيل.",
                "culprit":"رامي المحافظ",
                "evidence":[
                    {"name":"مجموعة مفاتيح عادية","desc":"كتفتح فاتريند الزاج بكل سلاسة."},
                    {"name":"أثر حبر أزرق","desc":"فوق يد صندوق العرض."},
                    {"name":"سجل الدخول","desc":"كيبين بلي المحافظ تسجل دخولو متأخر بالليل."},
                    {"name":"صاك قماش (Canvas)","desc":"مخلوق ومخلف ورا كراسي الجلوس."},
                    {"name":"وصية بيع","desc":"كاتباع قطع شبيهة لتاجر تحف."}
                ],
                "suspects":[
                    {"name":"رامي المحافظ","role":"محافظ المتحف","alibi":"كان كينظم السجلات في مكتبه.","qs":[{"q":"شكون عندو ساري العرض؟","a":"أنا وحدي."},{"q":"علاش دخلتي بالليل؟","a":"كنراجع المخزون."},{"q":"فين هما التماثيل؟","a":"تسرقو، وما عارفش شكون دارها."}]},
                    {"name":"سعاد الحارسة","role":"حارسة المتحف","alibi":"كانت في الباب الرئيسي.","qs":[{"q":"شي حد هز صاكات؟","a":"شفت رامي هاز صاك قماش كبير."},{"q":"الألارم تسكت؟","a":"لا، استعملو الساري الأصلي."},{"q":"وقتاش خرج رامي؟","a":"مور نص الليل."}]},
                    {"name":"زياد الزائر","role":"عاشق التحف","alibi":"كان كيشاهد المعروضات بالنهار.","qs":[{"q":"وقتاش زرت المتحف؟","a":"يومين قبل السرقة."},{"q":"تلاقيت برامي؟","a":"هضرت معاه على التماثيل."},{"q":"كتشري تحف؟","a":"غير بالطرق القانونية."}]},
                    {"name":"فاطمة النظافة","role":"عمال النظافة","alibi":"كانت كتنظف القاعات في الصباح.","qs":[{"q":"لاحظتي نقص أشياء؟","a":"فاتريند خاوية في الصباح."},{"q":"شكون كيدخل بالليل؟","a":"المحافظ رامي بوحدو."},{"q":"كتفتح فاتريند الزاج؟","a":"عمر، نهائياً."}]}
                ],
                "explain":"رامي المحافظ سرق التماثيل البرونزية بسواريه الرئيسية وباعهم لتاجر غير قانوني.",
                "hints":["تلميح 1: فحص سجل الدخول لي كيبين دخول المحافظ بالليل متأخر.","تلميح 2: تحقق من مجموعة المفاتيح العادية المستعملة لفتح الفاتريند بلا كسر.","تلميح 3: رامي المحافظ استعمل سواريه الرسمية باش يسرق التماثيل البرونزية ويبيعها."]
            },
            {
                "tag":"قضية قتل",
                "difficulty":"extreme",
                "title":"جريمة الدار المسكونة",
                "brief":"راجل كبير تلاقى مقتول في دار مهجورة في الغابة والباب الرئيسي مسدود من الداخل.",
                "victim":"الضحية: صالح (75 عام).",
                "culprit":"نبيل ولد الخو",
                "evidence":[
                    {"name":"ساري إضافي","desc":"مخبي تحت زربية الباب."},
                    {"name":"هراوة خشبية","desc":"مغرق بالدم وفيه آثار معركة."},
                    {"name":"صندوق الفلوس","desc":"خاوي ومشتت في البلايص."},
                    {"name":"أثر رجلي مخوخ بالطين","desc":"قرب إطار السرجم اللوراني."},
                    {"name":"ورقة إرث","desc":"من ولد الخو كيطلب فيها الفلوس بقوة."}
                ],
                "suspects":[
                    {"name":"نبيل ولد الخو","role":"قريب الضحية","alibi":"كان كبيع ممتلكات في المدينة.","qs":[{"q":"علاش طلبتي الفلوس؟","a":"عمي وكيعاوني، محتاج مساعدة."},{"q":"عارف مخبأ الساري؟","a":"هيه، مخبأ قديم."},{"q":"فين كنتي وقت الحادثة؟","a":"في سوق المدينة."}]},
                    {"name":"سعيد الجار","role":"جار كبير في السن","alibi":"كان كيصلح سياج المزرعة.","qs":[{"q":"سمعتي عراك؟","a":"غوات خفيف ومن بعد سكات."},{"q":"شكون كيزور الدار؟","a":"ولد خوه نبيل ديما."},{"q":"دخلت للدار شي نهار؟","a":"عمر."}]},
                    {"name":"منى البنت","role":"طالبة","alibi":"كانت كتجمع الأعشاب قرب الغابة.","qs":[{"q":"شفتي شي براني؟","a":"شفت نبيل هاز صندوق معدني."},{"q":"وقتاش شفتيه؟","a":"قبل الغروب بشوية."},{"q":"قلتيها لشي حد؟","a":"كنت مخلوعة."}]},
                    {"name":"خالد الشرطي","role":"بوليس متقاعد","alibi":"كان كيصيد في الواد القريب.","qs":[{"q":"زورتي صالح مؤخراً؟","a":"سيمانة هادي شربنا اتاي."},{"q":"كيفاش كانت حالتو؟","a":"خايف من طمع نبيل."},{"q":"كيعجبك الغابة؟","a":"كنقضي سوايع تما."}]}
                ],
                "explain":"نبيل ولد الخو قتل عمه على صندوق الفلوس مستعمل مخبأ الساري الإضافي لي كان كيعرفه.",
                "hints":["تلميح 1: تحقق من الساري الإضافي المخبي تحت زربية الباب لي كيعرفوه غير العائلة.","تلميح 2: فحص ورقة الإرث المطالبة بالفلوس الملقاة في الدار.","تلميح 3: نبيل ولد الخو استعمل الساري المخبي باش يدخل ويقتل عمه على صندوق الفلوس."]
            },
            {
                "tag":"اختفاء",
                "difficulty":"extreme",
                "title":"الوثيقة الدبلوماسية",
                "brief":"وثيقة دبلوماسية سرية للغاية غبرات من صاك السفير وسط حفل استقبال عامر بالناس.",
                "victim":"السفارة الأجنبية - وثيقة سرية.",
                "culprit":"دانيال الصحفي",
                "evidence":[
                    {"name":"صاك مشابه","desc":"تبدل بمهارة مع الصاك الأصلي."},
                    {"name":"دعوة مزورة","desc":"فيها اسم ضيف وهمي."},
                    {"name":"فيديو كاميرات المراقبة","desc":"شخص لابس بدلة رسمية كحلة."},
                    {"name":"سربيتة (منديل) حرير","desc":"فيه ريحة برفيوم فرنسي."},
                    {"name":"سجل الضيوف","desc":"كيجل دخول صحفي غامض."}
                ],
                "suspects":[
                    {"name":"السفير مراد","role":"كبير الدبلوماسيين","alibi":"كان كيستقبل الضيوف في القاعة الكبيرة.","qs":[{"q":"شكون هاز الصاك؟","a":"المساعد ديالي ديما."},{"q":"وقتاش فقتي للضيعان؟","a":"مور ما مشاو الضيوف."},{"q":"الوثيقة مهمة؟","a":"سرية للغاية."}]},
                    {"name":"سعيد المساعد","role":"مساعد دبلوماسي","alibi":"كان كيقدم المشروبات للضيوف.","qs":[{"q":"فين كان الصاك؟","a":"حدا المكتب الخاص."},{"q":"شكون قرب ليه؟","a":"صحفي أجنبي."},{"q":"خليتيه بوحدو؟","a":"دقايق نمشي نجيب ملفات."}]},
                    {"name":"دانيال الصحفي","role":"صحفي أجنبي","alibi":"كان كيدير استجوابات للدبلوماسيين.","qs":[{"q":"علاش بدلتي الصاك؟","a":"غير بالغلط صدفة."},{"q":"ريحة برفيوم فرنسي؟","a":"هدية من صديق."},{"q":"كتقلب على سكوبات؟","a":"أنا أبحث عن الحقيقة."}]},
                    {"name":"نادية المترجمة","role":"مترجمة رسمية","alibi":"كانت كترجم فوق المنصة.","qs":[{"q":"لاحظتي حركة غريبة؟","a":"دانيال دار قرب الصاك بزاف."},{"q":"شكون عارض؟","a":"دعوات خاصات."},{"q":"الوثائق محمية؟","a":"بروتوكول صارم."}]}
                ],
                "explain":"دانيال الصحفي الجاسوس بدل الصاك المتطابق وقت زحمة الاستقبال باش يسرق الوثيقة.",
                "hints":["تلميح 1: فحص الصاك المتبدل وسجل الضيوف لي كيجل الصحفي الغامض.","تلميح 2: تحقق من المنديل الحرير المعطر بالبرفيوم الفرنسي المخلّف في المسرح.","تلميح 3: دانيال الصحفي استعمل دعوة مزورة وبدل الصكاك وسط زحمة الحفل."]
            },
            {
                "tag":"قضية قتل",
                "difficulty":"extreme",
                "title":"اغتيال في البرج العالي",
                "brief":"ملياردير تلاقى مقتول بسهم مسموم داخل مكتبه في الطابق 50 ديال برج زجاجي.",
                "victim":"الضحية: غسان الملك (65 عام).",
                "culprit":"زياد المنافس",
                "evidence":[
                    {"name":"سهم ميكروسكوبي مسموم","desc":"مطلق من سرجم عمارة مقابلة."},
                    {"name":"قوس احترافي (Crossbow)","desc":"مركب على پيصي (حامل ثلاثي) في عمارة مقابلة."},
                    {"name":"بصمة جزئية","desc":"فوق مقبض القوس في الغرفة المظلمة."},
                    {"name":"عقد مفسوخ","desc":"كيبين خسارة كبرى للمنافس الرئيسي."},
                    {"name":"منظار عالي الجهد (Scope)","desc":"مستعمل للتصويب الدقيق عن بعد."}
                ],
                "suspects":[
                    {"name":"زياد المنافس","role":"ملياردير منافس","alibi":"كان في اجتماعات بنكية نهار كامل.","qs":[{"q":"علاقتك بالضحية؟","a":"منافسة شرسة في السوق."},{"q":"كريتي قناص؟","a":"أنا رجل أعمال قانوني."},{"q":"فين كنت وقت الجريمة؟","a":"في برج المال."}]},
                    {"name":"سحر المساعدة","role":"مساعدة تنفيذية","alibi":"كانت كتوجد القهوة في الصالون.","qs":[{"q":"شكون عنده دخول للمكتب؟","a":"أنا ورئيس الأمن."},{"q":"سمعتي صوت السرجم؟","a":"الزاج عازل للصوت."},{"q":"واش كان خايف؟","a":"توصل بتهديدات بالقتل."}]},
                    {"name":"ماهر رئيس الأمن","role":"رئيس الحراس","alibi":"كان كيراقب كاميرات الطوابق التحتانية.","qs":[{"q":"علاش غفلتو القناص؟","a":"العمارة المقابلة مهجورة."},{"q":"شكون عنده ساري المقابلة؟","a":"مقاول مفلس."},{"q":"الكاميرات كيغطيو المقابل؟","a":"الزاوية بعيدة."}]},
                    {"name":"جهاد القناص","role":"مرتزق غامض","alibi":"كان كيكري غرفة باسم مستعار.","qs":[{"q":"علاش في البرج المقابل؟","a":"هواة التصوير."},{"q":"علاش البصمة فوق القوس؟","a":"نفذت العقد مقابل المال."},{"q":"شكون خلصك؟","a":"المنافس زياد."}]}
                ],
                "explain":"زياد المنافس خلص القناص جهاد باش ينفذ عملية الاغتيال عن بعد من عمارة مقابلة.",
                "hints":["تلميح 1: فحص السهم المسموم والقوس الاحترافي المركب في العمارة المقابلة.","تلميح 2: تحقق من العقد المفسوخ لي كيبين الخسائر المالية الكبرى للمنافس في السوق.","تلميح 3: زياد المنافس استعان بالقناص جهاد في العمارة المهجورة باش ينفذ اغتيال البرج."]
            }
        ]
    },
        fr: {
            appTitle: "Le Dossier Noir | Othmane Ettoumi",
            appSub: "Jeu de Détective Intelligent – 20 Affaires Criminelles",
            profileBtn: "👤 Profil du Détective",
            chatBtn: "💬 Chat des Amis",
            mpBtn: "🌐 Jouer avec des amis",
            statusReady: "Prêt pour le Service",
            archiveTitle: "📁 Archives des Affaires (20 Crimes)",
            archiveDesc: "Choisissez parmi 20 affaires à difficulté progressive pour commencer votre enquête.",
            footerText: "Le Dossier Noir © 2026 - Conçu par : Othmane Ettoumi | 100% Hors Ligne (Internet requis pour le multijoueur)",
            filterAll: "Tous",
            filterEasy: "Facile",
            filterMedium: "Moyen",
            filterHard: "Difficile",
            filterExtreme: "Extrême",
            backArchive: "← Retour aux Archives",
            crimeSceneBanner: "ENQUÊTE DE SCÈNE DE CRIME",
            startInv: "Procéder à la Scène de Crime →",
            backBrief: "← Retour au Résumé de l'Affaire",
            notesBtn: "📝 Notes du Détective",
            hintBtn: "💡 Demander un Indice",
            evidenceHeader: "🔍 Preuves Matérielles",
            suspectsHeader: "👥 Interrogatoire des Suspects",
            accuseBtn: "⚖️ Accuser le Suspect et Résoudre l'Affaire",
            returnMenu: "Retourner aux Archives",
            retryCase: "Ré-enquêter sur l'Affaire",
            close: "Fermer",
            interrogateQ: "Questions d'Interrogatoire :",
            accuseModalTitle: "⚖️ Accusation Finale",
            accuseModalDesc: "Sélectionnez le vrai coupable avec soin. Une mauvaise accusation nuira à votre rang de détective !",
            cancel: "Annuler",
            confirmAccuse: "Confirmer l'Accusation",
            notesTitle: "📝 Notes du Détective",
            notesDesc: "Notez vos observations et théories :",
            notesClose: "Fermer",
            notesSave: "Enregistrer les Notes",
            hintTitle: "💡 Indice du Détective",
            hintClose: "Compris",
            profileTitle: "👤 Profil du Détective",
            proNameLabel: "Nom du Détective :",
            proRankLabel: "Rang :",
            achLabel: "🎖️ Succès",
            onboardTitle: "Bienvenue, Détective",
            onboardBody: "20 affaires criminelles vous attendent. Lisez le résumé de l'affaire, examinez les preuves matérielles et interrogez chaque suspect avec attention — leurs réponses cachent la vérité. N'utilisez les indices qu'en cas de blocage (3 maximum par affaire), puis faites votre accusation finale. Choisissez avec soin : accuser un innocent laisse le vrai coupable s'échapper !",
            onboardBtn: "Commençons l'enquête →",
            proClose: "Annuler",
            proSave: "Enregistrer le Profil",
            mpTitle: "🌐 Salle Jouer avec des amis",
            mpDesc: "Connectez-vous avec des amis détectives via WiFi, *3, ou *6 (Maroc) pour rivaliser dans la résolution d'affaires.",
            mpClose: "Fermer",
            mpJoin: "Rejoindre la Salle",
            mpCreate: "Créer une Salle",
            mpLeave: "Quitter la Salle",
            roomLeft: "Vous avez quitté la salle.",
            roomCreating: "Création de votre salle...",
            roomCreated: "Salle prête ! Partagez ce code avec votre ami : {code}",
            roomWaiting: "En attente qu'un ami rejoigne la salle {code}...",
            roomFriendJoined: "Votre ami a rejoint ! Vous êtes maintenant connectés.",
            roomConnectFailed: "Connexion impossible. Vérifiez que vous et votre ami avez Internet via WiFi, *3, ou *6, puis réessayez.",
            roomDisconnected: "Votre ami s'est déconnecté.",
            chatConnectedDisclaimer: "Connecté en direct avec un ami réel.",
            friendJoinedMsg: "Votre ami a rejoint la salle !",
            chatHeading: "💬 Chat des Amis Détectives",
            chatDisclaimer: "Faux chat de démonstration — non connecté à de vrais joueurs.",
            chatSend: "Envoyer",
            chatWelcomeMsg: "Bienvenue sur le réseau, détectives ! Des nouvelles pistes sur la dernière affaire ?",
            chatInputPlaceholder: "Écrivez un message...",
            notesPlaceholder: "Notez vos indices ici...",
            roomCodePlaceholder: "Entrez le code de la salle (ex. CASE-99)",
            answerLabel: "Réponse :",
            selectSuspectAlert: "Veuillez sélectionner un suspect avant de confirmer l'accusation.",
            resultSolvedTitle: "Affaire résolue avec succès !",
            resultSolvedDesc: "Bravo, détective ! Vous avez correctement identifié le coupable.",
            resultWrongTitle: "Accusation erronée !",
            resultWrongDesc: "Vous avez accusé une personne innocente. Le vrai coupable s'est échappé.",
            caseExplanationLabel: "Explication de l'affaire :",
            micNotSupported: "L'enregistrement vocal n'est pas pris en charge sur cet appareil.",
            micPermissionDenied: "L'accès au microphone a été refusé. Veuillez autoriser le microphone dans les paramètres du navigateur.",
            micTitle: "Message vocal (appuyez pour enregistrer, ré-appuyez pour envoyer)",
            micListening: "Enregistrement… appuyez pour envoyer",
            micNoFriend: "Connectez-vous d'abord avec un ami pour envoyer un message vocal.",
            callBtnTitle: "Appel vocal",
            callActive: "🔊 Appel vocal connecté",
            callConnecting: "📞 Appel de votre ami…",
            callEnded: "Appel terminé.",
            roomEnterCode: "Veuillez entrer un code de salle valide.",
            roomConnecting: "Connexion à la salle {code} via un réseau sécurisé...",
            roomRetrying: "Salle introuvable pour l'instant — nouvelle tentative... ({n} restante(s))",
            roomConnected: "Connecté avec succès à la salle {code} ! Prêt pour le défi.",
            botName: "Inspecteur John",
            botReplies: [
                "Assurez-vous d'inspecter toutes les preuves matérielles avec attention.",
                "Vérifiez les alibis des suspects pour y trouver la moindre contradiction subtile.",
                "Avez-vous examiné les notes personnelles de la victime ?",
                "Continuez de creuser, détective ! La vérité se cache dans les détails."
            ],
            cases: [
                {
                    "tag":"Affaire de Meurtre",
                    "difficulty":"easy",
                    "title":"Silence dans le Manoir",
                    "brief":"Le riche marchand Karim Ouazzani a été retrouvé assassiné dans son bureau privé à l'intérieur de son manoir, tué par un coup de poignard fatal. La porte était fermée de l'intérieur et la fenêtre ouverte.",
                    "victim":"Victime : Karim Ouazzani (54 ans) - Homme d'affaires.",
                    "culprit":"Yahya Alami",
                    "evidence":[
                        {"name":"Dague en Argent","desc":"Soigneusement nettoyée, laissant une empreinte partielle correspondant à son associé Yahya."},
                        {"name":"Lettre Financière Déchirée","desc":"prouve que la victime devait une énorme somme d'argent à son associé Yahya."},
                        {"name":"Empreinte de Pas Boueuse","desc":"Grande empreinte de chaussure près de la fenêtre correspondant à la boue du jardin du manoir."},
                        {"name":"Montre-Bracelet Arrêtée","desc":"Arrêtée à 21h42, l'heure précise du meurtre."},
                        {"name":"Journal de la Caméra de Sécurité","desc":"Montre un mouvement suspect dans le couloir menant au bureau."}
                    ],
                    "suspects":[
                        {"name":"Salma Ouazzani","role":"Épouse","alibi":"Dormait dans sa chambre depuis 21h00.","qs":[{"q":"Avez-vous entendu du bruit ?","a":"Non, c'était complètement silencieux."},{"q":"Où étiez-vous au moment des faits ?","a":"Dans ma chambre, en train de dormir seule."},{"q":"Aviez-vous des différends financiers ?","a":"Je n'avais aucune implication dans son argent."}]},
                        {"name":"Yahya Alami","role":"Associé Commercial","alibi":"En train de fumer une cigarette sur le balcon arrière.","qs":[{"q":"Quel était le litige financier ?","a":"Juste un partenariat commercial ordinaire."},{"q":"Pourquoi votre empreinte était-elle sur la dague ?","a":"J'étais là le matin pour le travail."},{"q":"Où étiez-vous à 21h40 ?","a":"Sur le balcon en train de fumer."}]},
                        {"name":"Fatima","role":"Femme de Ménage","alibi":"A découvert le corps le matin en faisant le ménage.","qs":[{"q":"Quand avez-vous ouvert le bureau ?","a":"À 8h00 du matin."},{"q":"La porte était-elle fermée ?","a":"Oui, fermée de l'intérieur."},{"q":"Avez-vous remarqué quelque chose d'inhabituel ?","a":"La fenêtre était légèrement ouverte."}]},
                        {"name":"Omar","role":"Garde du Corps","alibi":"En patrouille autour des murs d'enceinte.","qs":[{"q":"Un intrus est-il entré ?","a":"Les portes principales étaient verrouillées."},{"q":"Pourquoi n'avez-vous rien entendu ?","a":"Le bureau est insonorisé et le vent soufflait fort."},{"q":"Quelles étaient vos tâches ?","a":"Patrouiller toutes les heures."}]}
                    ],
                    "explain":"Yahya Alami est le coupable : Il a admis avoir été près du balcon. Son empreinte partielle sur la dague et ses empreintes boueuses correspondent au chemin du jardin en raison du grave litige sur la dette.",
                    "hints":["Indice 1 : Inspectez les preuves matérielles laissées sur la dague en argent et le chemin du jardin à l'extérieur de la fenêtre ouverte.","Indice 2 : Examinez qui avait un litige financier majeur et un conflit de dettes avec la victime.","Indice 3 : L'alibi du balcon de Yahya Alami s'effondre lorsqu'on le compare à son empreinte partielle sur l'arme du crime et à ses empreintes de pas boueuses."]
                },
                {
                    "tag":"Affaire de Vol",
                    "difficulty":"easy",
                    "title":"Le Joyau de l'Œil du Nil",
                    "brief":"Le diamant bleu rare \"L'Œil du Nil\" a disparu de sa vitrine d'exposition au Musée National lors de la soirée d'ouverture, sans qu'aucune serrure ne soit forcée.",
                    "victim":"Lieu : Musée National - Joyau évalué à 10 millions de dollars.",
                    "culprit":"Maher le Conservateur",
                    "evidence":[
                        {"name":"Gant en Soie Coupé","desc":"Trouvé juste à côté de la vitrine en verre."},
                        {"name":"Carte d'Accès VIP","desc":"Porte des empreintes digitales cachées appartenant au conservateur."},
                        {"name":"Images de Caméra","desc":"Montrent une silhouette en manteau noir quittant la salle en hâte."},
                        {"name":"Brin de Cheveux","desc":"Trouvé accroché sur le cadre de la vitrine."},
                        {"name":"Trousseau de Passe-Partout","desc":"Jeu de clés maîtresses appartenant à l'agent administratif."}
                    ],
                    "suspects":[
                        {"name":"Raid le Directeur","role":"Directeur du Musée","alibi":"Accueillait les invités VIP dans le hall principal.","qs":[{"q":"Qui détient les clés ?","a":"Seulement moi et la sécurité."},{"q":"Où étiez-vous pendant le vol ?","a":"Avec les invités VIP."},{"q":"Avez-vous remarqué la disparition immédiatement ?","a":"Non, nous l'avons découverte plus tard."}]},
                        {"name":"Sanaa Sécurité","role":"Chef de la Sécurité","alibi":"Surveillait les caméras de surveillance dans la salle de contrôle arrière.","qs":[{"q":"Pourquoi les caméras se sont-elles coupées pendant 1 minute ?","a":"Une microcoupure de courant soudaine."},{"q":"Avez-vous arpenté le hall ?","a":"Seulement pendant la patrouille de routine."},{"q":"Qui est entré après la fermeture ?","a":"Personne."}]},
                        {"name":"Maher le Conservateur","role":"Conservateur & Restaurateur","alibi":"Restaurait des tableaux dans l'aile Est.","qs":[{"q":"Pourquoi votre gant a-t-il été trouvé ?","a":"Je l'ai porté en nettoyant les expositions."},{"q":"Avez-vous accès aux lieux ?","a":"Oui, dans le cadre de mon travail."},{"q":"Où étiez-vous à 22h00 ?","a":"Dans l'atelier, seul."}]},
                        {"name":"Mona Journaliste","role":"Rapporteuse d'Événement","alibi":"Interviewait des invités dans la pièce.","qs":[{"q":"Avez-vous pris le joyau en photo ?","a":"Oui, plus tôt dans la soirée."},{"q":"Quand êtes-vous partie ?","a":"Peu de temps avant l'incident."},{"q":"Avez-vous vu quelqu'un de suspect ?","a":"J'ai vu quelqu'un porter un manteau."}]}
                    ],
                    "explain":"Maher le Conservateur a volé le diamant en utilisant son accès de restauration et a laissé des fibres de gant en soie près de la vitrine d'exposition.",
                    "hints":["Indice 1 : Vérifiez le gant en soie coupé laissé juste à côté de la vitrine d'exposition.","Indice 2 : Concentrez-vous sur la personne qui avait un accès professionnel de restauration pour manipuler les expositions du musée sans forcer les serrures.","Indice 3 : L'excuse de Maher le Conservateur n'explique pas pourquoi ses fibres de gants et ses empreintes d'accès ont été retrouvées sur les lieux."]
                },
                {
                    "tag":"Disparition",
                    "difficulty":"easy",
                    "title":"Où est Yasmine ?",
                    "brief":"Yasmine Alaoui, étudiante universitaire, a disparu il y a 3 jours. Sa voiture a été retrouvée garée près de la forêt sombre avec les clés laissées sur le contact.",
                    "victim":"Personne Disparue : Yasmine Alaoui (22 ans).",
                    "culprit":"Ziad l'Ex",
                    "evidence":[
                        {"name":"Téléphone Brisé","desc":"Trouvé sur le bord de la route ; son dernier appel était destiné à son ex-fiancé."},
                        {"name":"Menace Écrite à la Main","desc":"Une note de menace manuscrite à l'intérieur de son sac à main."},
                        {"name":"Trace de Pneu","desc":"Marques de pneus de sport rares correspondant à la voiture d'un camarade de collège."},
                        {"name":"Tasse de Café","desc":"Encore tiède sur le siège passager de la voiture."},
                        {"name":"Journal Personnel","desc":"Mentionne sa peur constante d'être traquée par quelqu'un."}
                    ],
                    "suspects":[
                        {"name":"Ziad l'Ex","role":"Ex-Fiancé","alibi":"Au travail toute la journée et ne l'a pas vue.","qs":[{"q":"Quand êtes-vous monté dans sa voiture pour la dernière fois ?","a":"Il y a environ une semaine."},{"q":"Pourquoi l'avoir menacée dans la lettre ?","a":"C'était un malentendu passé."},{"q":"Où était votre voiture cette nuit-là ?","a":"Dans le garage de ma maison."}]},
                        {"name":"Sami le Camarade","role":"Camarade d'Université","alibi":"En train d'étudier à la bibliothèque publique.","qs":[{"q":"Quelle était votre relation ?","a":"De simples camarades d'université."},{"q":"Pourquoi les empreintes de pneus correspondent-elles ?","a":"Beaucoup d'étudiants possèdent ce modèle de pneu."},{"q":"Où étiez-vous mardi ?","a":"À la bibliothèque jusqu'à 20h00."}]},
                        {"name":"Nawal la Voisine","role":"Voisine de Dortoir","alibi":"En voyage pour rendre visite à sa famille dans une ville voisine.","qs":[{"q":"Avez-vous entendu une dispute ?","a":"Jamais, son endroit était calme."},{"q":"Quand êtes-vous rentrée ?","a":"Le lendemain matin."},{"q":"Avez-vous vu Ziad près de l'appartement ?","a":"Oui, deux fois la semaine dernière."}]},
                        {"name":"Dr. Tariq","role":"Professeur","alibi":"En train de noter des copies d'examen à l'université.","qs":[{"q":"A-t-elle raté les cours ?","a":"Oui, un jour avant de disparaître."},{"q":"Avait-elle des problèmes ?","a":"Elle semblait anxieuse ces derniers temps."},{"q":"Comment étaient ses performances ?","a":"Studieuse et travailleuse."}]}
                    ],
                    "explain":"Ziad l'Ex est responsable : Des traces de pneus de sport et des déclarations contradictoires concernant des menaces passées le lient directement.",
                    "hints":["Indice 1 : Inspectez les registres du téléphone brisé et la lettre de menace trouvée dans son sac.","Indice 2 : Observez attentivement les empreintes de pneus trouvées près de la forêt sombre où sa voiture a été abandonnée.","Indice 3 : Ziad l'Ex a donné des déclarations contradictoires sur ses allées et venues et sur les menaces passées contre la victime."]
                },
                {
                    "tag":"Empoisonnement",
                    "difficulty":"easy",
                    "title":"Du Poison dans le Verre",
                    "brief":"Le critique littéraire éminent Ramzi Hamid est mort instantanément après avoir siroté du jus lors de sa cérémonie d'hommage à l'intérieur de l'Opéra.",
                    "victim":"Victime : Ramzi Hamid (61 ans).",
                    "culprit":"Samer l'Écrivain Rival",
                    "evidence":[
                        {"name":"Bouteille de Jus Contaminée","desc":"Contient des traces de poison mortel au cyanure."},
                        {"name":"Serviette Pliée","desc":"Présente des résidus de poudre toxique et une empreinte partielle."},
                        {"name":"Programme de l'Événement","desc":"Montre le calendrier exact du service des boissons."},
                        {"name":"Gobelet en Verre","desc":"Empreintes de la victime et substance chimique étrangère sur le bord."},
                        {"name":"Article de Critique Sévère","desc":"Une critique acerbe écrite par la victime attaquant un écrivain amateur."}
                    ],
                    "suspects":[
                        {"name":"Mona l'Hôtesse","role":"Hôtesse de l'Événement","alibi":"A servi des boissons selon les instructions des organisateurs.","qs":[{"q":"Qui a préparé les verres ?","a":"Moi-même et l'assistant du bar."},{"q":"Avez-vous quitté la table ?","a":"Pendant une minute pour aller chercher de la glace."},{"q":"Avez-vous vu quelqu'un s'approcher ?","a":"J'ai vu le jeune écrivain à proximité."}]},
                        {"name":"Samer l'Écrivain Rival","role":"Écrivain Rival","alibi":"En train de parler avec le rédacteur en chef toute la soirée.","qs":[{"q":"Pourquoi le critique vous a-t-il attaqué ?","a":"Il a ruiné mon dernier roman injustement."},{"q":"Avez-vous mis quelque chose dans la boisson ?","a":"Dieu m'en préserve, je suis un professionnel."},{"q":"Où étiez-vous au moment de l'incident ?","a":"Devant la scène de la cérémonie."}]},
                        {"name":"Laila Ramzi","role":"Fille","alibi":"Présentait des prix au nom de son père.","qs":[{"q":"Étiez-vous en bons termes ?","a":"Bien sûr, c'est mon père."},{"q":"Qui hérite de la fortune ?","a":"Moi et une fondation caritative."},{"q":"Soupçonnez-vous quelqu'un ?","a":"L'écrivain Samer l'a menacé."}]},
                        {"name":"Essam le Garde","role":"Agent de Sécurité","alibi":"Gardait l'entrée principale de la salle.","qs":[{"q":"Qui est entré par la porte arrière ?","a":"Le personnel de restauration uniquement."},{"q":"Savez-vous quelque chose sur le cyanure ?","a":"Je ne connais rien aux produits chimiques."},{"q":"Les caméras fonctionnent-elles ?","a":"Oui, elles enregistrent tout."}]}
                    ],
                    "explain":"Samer l'Écrivain Rival s'est vengé de sa réputation ruinée et a empoisonné le verre pendant la brève absence de l'hôtesse.",
                    "hints":["Indice 1 : Vérifiez la bouteille de jus contaminée et les résidus de poudre toxique sur la serviette.","Indice 2 : Examinez l'article de critique sévère rédigé par la victime attaquant un écrivain amateur.","Indice 3 : Samer l'Écrivain Rival avait un puissant mobile de vengeance et l'opportunité lorsque l'hôtesse s'est éloignée."]
                },
                {
                    "tag":"Affaire de Meurtre",
                    "difficulty":"easy",
                    "title":"L'Énigme de la Chambre Close",
                    "brief":"L'homme d'affaires Mamdouh Sabri a été retrouvé poignardé à l'intérieur de sa chambre d'hôtel. Toutes les portes et fenêtres étaient solidement verrouillées de l'intérieur sans aucune issue.",
                    "victim":"Victime : Mamdouh Sabri (48 ans).",
                    "culprit":"Khaled le Maintenancier",
                    "evidence":[
                        {"name":"Climatiseur","desc":"Bloqué avec une cale en métal pour retarder le mécanisme de verrouillage automatique de la porte."},
                        {"name":"Pistolet d'Alarme","desc":"Jeté par la fenêtre du dernier étage."},
                        {"name":"Ligne de Pêche Fine","desc":"Long fil transparent utilisé pour le truc de la chambre close."},
                        {"name":"Registre de l'Hôtel","desc":"Montre que seul le personnel de maintenance a enregistré un accès."},
                        {"name":"Journal Intime de la Victime","desc":"Fait référence à des tentatives de chantage de la part de son associé."}
                    ],
                    "suspects":[
                        {"name":"Bahgat l'Associé","role":"Partenaire Commercial","alibi":"Dînait avec des clients au rez-de-chaussée.","qs":[{"q":"Qu'en est-il du chantage ?","a":"Juste des différends commerciaux normaux."},{"q":"Comment êtes-vous entré dans la pièce ?","a":"Je ne suis jamais entré."},{"q":"Avez-vous un double des clés ?","a":"Seule la direction de l'hôtel."}]},
                        {"name":"Nadine la Secrétaire","role":"Assistante de la Victime","alibi":"Dans la chambre adjacente en train de préparer les dossiers de voyage.","qs":[{"q":"Avez-vous entendu une dispute ?","a":"Un son faible puis le silence."},{"q":"Quand l'avez-vous vu vivant pour la dernière fois ?","a":"Une heure avant l'incident."},{"q":"Qui a rendu visite le soir ?","a":"Le travailleur de la maintenance."}]},
                        {"name":"Khaled le Maintenancier","role":"Technicien d'Hôtel","alibi":"A réparé une ampoule électrique et est parti.","qs":[{"q":"Pourquoi la boîte à outils a-t-elle été laissée là ?","a":"Je l'ai oubliée par erreur sur la table."},{"q":"Avez-vous altéré le climatiseur ?","a":"Jamais, j'ai seulement travaillé sur les lumières."},{"q":"Vous a-t-il demandé quelque chose ?","a":"Il a demandé un silence total."}]},
                        {"name":"Raouf le Frère","role":"Frère de la Victime","alibi":"Dormait dans sa chambre au 3ème étage.","qs":[{"q":"Litige d'héritage ?","a":"Nous avons tout partagé à l'amiable."},{"q":"Comment entrer dans une chambre close ?","a":"Je n'étais pas là."},{"q":"Qu'en est-il du fil ?","a":"Je ne sais rien des tours de passe-passe."}]}
                    ],
                    "explain":"Khaled le technicien de maintenance a utilisé du fil et l'astuce du climatiseur pour simuler une chambre close de l'intérieur après avoir commis le crime.",
                    "hints":["Indice 1 : Examinez l'unité de climatisation et la fine ligne de pêche trouvée dans la pièce.","Indice 2 : Vérifiez les registres d'accès de l'hôtel et les outils du technicien laissés sur place.","Indice 3 : Khaled le technicien de maintenance a utilisé une cale en métal et un tour de fil via l'unité de climatisation pour simuler la chambre close."]
                },
                {
                    "tag":"Affaire de Vol",
                    "difficulty":"medium",
                    "title":"Le Chef-d'Œuvre Volé",
                    "brief":"Un tableau original d'un artiste de renommée mondiale a été volé à la Galerie Internationale, laissant une copie réplique précise accrochée à sa place.",
                    "victim":"Lieu : Galerie d'Art Internationale - Valeur de 5 Millions de Dollars.",
                    "culprit":"Fouad le Peintre",
                    "evidence":[
                        {"name":"Cadre en Bois Vide","desc":"Trouvé caché derrière le stockage d'outils."},
                        {"name":"Pinceau Professionnel","desc":"Porte une formulation de peinture à l'huile fraîche."},
                        {"name":"Empreinte Digitale Claire","desc":"Sur le mur derrière le faux tableau réplique."},
                        {"name":"Billet de Train","desc":"Daté de la nuit du vol à destination de la frontière."},
                        {"name":"Journal de la Caméra de Surveillance","desc":"Désactivé pendant exactement 10 minutes."}
                    ],
                    "suspects":[
                        {"name":"Fouad le Peintre","role":"Artiste & Faussaire","alibi":"Peignait un portrait chez lui toute la nuit.","qs":[{"q":"Pourquoi posséder les mêmes peintures à l'huile ?","a":"Je suis un artiste, je les utilise."},{"q":"Avez-vous visité la galerie ?","a":"Oui, pour voir les expositions."},{"q":"Où étiez-vous à 2h00 du matin ?","a":"Dans mon studio privé."}]},
                        {"name":"Hanan la Critique d'Art","role":"Critique d'Art","alibi":"Rédigeait un article de presse dans la salle de presse.","qs":[{"q":"Avez-vous remarqué la contrefaçon ?","a":"Non, la réplique avait l'air authentique."},{"q":"Qui possède des compétences en copie ?","a":"Fouad, évidemment."},{"q":"Quand êtes-vous partie ?","a":"Vers minuit."}]},
                        {"name":"Jamal le Garde","role":"Garde de la Galerie","alibi":"En ronde de sécurité à l'étage supérieur.","qs":[{"q":"Pourquoi la vidéosurveillance a-t-elle échoué ?","a":"Une panne de courant."},{"q":"Avez-vous vu quelqu'un d'étrange ?","a":"Personne du tout."},{"q":"Quand la patrouille a-t-elle commencé ?","a":"À 23h00."}]},
                        {"name":"Sahar la Collectionneuse","role":"Collectionneuse d'Art","alibi":"À un dîner avec des investisseurs.","qs":[{"q":"Offre d'achat du tableau ?","a":"Le musée a refusé de vendre."},{"q":"Où étiez-vous à l'heure du vol ?","a":"Dans un restaurant chic."},{"q":"Soupçonnez-vous quelqu'un ?","a":"Fouad en était obsédé."}]}
                    ],
                    "explain":"Fouad le Peintre a utilisé ses compétences de faussaire pour échanger le tableau original avec sa réplique, laissant tomber son pinceau personnalisé.",
                    "hints":["Indice 1 : Inspectez le pinceau professionnel laissé sur place portant de la peinture à l'huile fraîche.","Indice 2 : Regardez l'empreinte digitale sur le mur directement derrière le faux tableau réplique.","Indice 3 : Fouad le Peintre est le seul suspect possédant les compétences précises de falsification et la formulation de peinture nécessaires pour l'échange."]
                },
                {
                    "tag":"Affaire de Meurtre",
                    "difficulty":"medium",
                    "title":"Meurtre au Laboratoire de Minuit",
                    "brief":"Le chimiste Dr Murad a été tué dans son laboratoire fermé à clé. Son dernier code d'ordinateur tapé pointe vers son assassin.",
                    "victim":"Victime : Dr Murad (55 ans) - Chimiste.",
                    "culprit":"Hani l'Assistant Principal",
                    "evidence":[
                        {"name":"Bécher Brisé","desc":"Contient des résidus de toxine neurotoxique."},
                        {"name":"Ordinateur Portable","desc":"Dernier chiffre/code tapé correspondant au nom de l'assistant principal."},
                        {"name":"Gant en Caoutchouc","desc":"Gant en caoutchouc déchiré trouvé près de la fenêtre du labo."},
                        {"name":"Rapport Confidentiel","desc":"Révèle le vol de recherches chimiques critiques."},
                        {"name":"Registre de Carte d'Accès","desc":"Entrée unique utilisant un accès par carte valide."}
                    ],
                    "suspects":[
                        {"name":"Dr Samir","role":"Collègue de Recherche","alibi":"Menait des expériences dans un bâtiment voisin.","qs":[{"q":"Nature de la recherche volée ?","a":"Formules médicales avancées."},{"q":"Pourquoi être entré dans son journal ?","a":"Je cherchais un article scientifique."},{"q":"Où étiez-vous à l'heure du crime ?","a":"Dans mon laboratoire privé."}]},
                        {"name":"Nada l'Étudiante","role":"Assistante de Labo","alibi":"Partie tôt pour travailler sur sa thèse.","qs":[{"q":"Quand êtes-vous partie ?","a":"À 19h00."},{"q":"Qui avait la carte d'accès de nuit ?","a":"Dr Murad et Dr Samir."},{"q":"Était-il inquiet ?","a":"Il recevait des appels téléphoniques menaçants."}]},
                        {"name":"Hani l'Assistant Principal","role":"Assistant Senior","alibi":"À la maison avec sa famille.","qs":[{"q":"Pourquoi l'ordinateur a-t-il tapé votre nom ?","a":"Une blague ou une fausse accusation."},{"q":"Accès aux recherches ?","a":"Oui, accès complet."},{"q":"Où étiez-vous toute la nuit ?","a":"À la maison avec ma famille."}]},
                        {"name":"Souad la Chercheuse","role":"Universitaire en Visite","alibi":"À une conférence scientifique hors de la ville.","qs":[{"q":"Quand êtes-vous retournée en ville ?","a":"Le lendemain matin."},{"q":"Aviez-vous des différends avec lui ?","a":"Il a refusé la publication de mon article."},{"q":"Connaissez-vous Hani ?","a":"Oui, un collègue de travail."}]}
                    ],
                    "explain":"Hani l'Assistant Principal a tué le Dr Murad pour voler ses recherches, oubliant que la victime avait tapé son identifiant crypté.",
                    "hints":["Indice 1 : Examinez le bécher brisé avec la toxine nerveuse et l'ordinateur portable.","Indice 2 : Vérifiez qui avait un accès complet aux recherches et l'autorisation d'entrer dans le laboratoire.","Indice 3 : Le dernier code d'ordinateur tapé par la victime pointe explicitement vers Hani l'Assistant Principal."]
                },
                {
                    "tag":"Affaire de Meurtre",
                    "difficulty":"medium",
                    "title":"Assassinat dans l'Express",
                    "brief":"Un ancien agent des services secrets est mort à l'intérieur d'un wagon de train-couchettes suite à un tir de pistolet silencieux dans un tunnel sombre.",
                    "victim":"Victime : Kamal Eddine (62 ans).",
                    "culprit":"Salim le Mystérieux",
                    "evidence":[
                        {"name":"Silencieux en Métal","desc":"Jeté sur les voies lors du passage dans le tunnel."},
                        {"name":"Billet Falsifié","desc":"Billet à fausse identité assis dans la voiture suivante."},
                        {"name":"Dossier Secret Divulgué","desc":"Manquant dans la mallette personnelle de la victime."},
                        {"name":"Traces d'Encre Invisible","desc":"Trouvées sur les doigts du suspect n°2."},
                        {"name":"Journal des Mouvements des Passagers","desc":"Montre un mouvement suspect entre les wagons."}
                    ],
                    "suspects":[
                        {"name":"Maher le Journaliste","role":"Passager du Wagon","alibi":"Écrivait un article sur son ordinateur portable pendant tout le voyage.","qs":[{"q":"Destination ?","a":"La capitale pour un entretien d'embauche."},{"q":"Avez-vous entendu le bruit d'un coup de feu ?","a":"Seulement le frottement des roues du train."},{"q":"Pourquoi êtes-vous nerveux ?","a":"Je n'aime pas les longs trajets en train."}]},
                        {"name":"Salim le Mystérieux","role":"Homme d'Affaires","alibi":"Dormait dans sa cabine privée verrouillée.","qs":[{"q":"Raison du voyage soudain ?","a":"Affaire commerciale urgente."},{"q":"Pourquoi de l'encre sur vos doigts ?","a":"Signature de contrats avec un stylo à encre liquide."},{"q":"Connaissez-vous la victime ?","a":"Je ne l'ai jamais vue de ma vie."}]},
                        {"name":"Rasha l'Hôtesse","role":"Stewardesse de Train","alibi":"Servait des boissons dans le wagon de tête.","qs":[{"q":"Qui s'est déplacé entre les wagons ?","a":"Une personne en manteau noir."},{"q":"Lumières éteintes dans le tunnel ?","a":"Non, obscurité normale du tunnel."},{"q":"Avez-vous remarqué quelque chose d'inhabituel ?","a":"Fible odeur de poudre à canon."}]},
                        {"name":"Jehad le Garde","role":"Escorte Privée","alibi":"Gardait la porte de chargement arrière.","qs":[{"q":"Quelqu'un est-il passé près de vous ?","a":"Personne n'a croisé la porte arrière."},{"q":"Portez-vous une arme à feu ?","a":"Oui, une arme de poing officielle autorisée."},{"q":"Quand le service a-t-il commencé ?","a":"Depuis le départ."}]}
                    ],
                    "explain":"Salim le Mystérieux a exécuté un assassinat silencieux en utilisant un silencieux dans le tunnel sous une fausse identité.",
                    "hints":["Indice 1 : Vérifiez le silencieux en métal jeté sur les voies et les registres de déplacement des passagers.","Indice 2 : Regardez les traces d'encre invisible et le faux billet trouvé dans la voiture voisine.","Indice 3 : Salim le Mystérieux a voyagé sous une fausse identité et a exécuté le tir silencieux dans le tunnel."]
                },
                {
                    "tag":"Affaire de Vol",
                    "difficulty":"medium",
                    "title":"Casse du Coffre-Fort",
                    "brief":"Des millions ont disparu du coffre-fort de la compagnie nationale de câbles sans effraction ; la clé numérique était uniquement entre les mains du Directeur.",
                    "victim":"Compagnie Nationale de Câbles - Perte de 2 Millions de Dollars.",
                    "culprit":"Ziad le Comptable",
                    "evidence":[
                        {"name":"Clip de Caméra Cachée","desc":"Montre une personne composant soigneusement le code PIN."},
                        {"name":"Bout de Papier","desc":"Contient des indices sur l'ancien mot de passe."},
                        {"name":"Empreinte Partielle","desc":"Sur le bouton de validation du clavier du coffre-fort."},
                        {"name":"Carte d'Accès Électronique","desc":"Carte d'accès de secours manquante dans le tiroir."},
                        {"name":"Facture de Dette","desc":"Appartient au comptable de l'entreprise."}
                    ],
                    "suspects":[
                        {"name":"Saleh le Directeur","role":"Directeur de l'Entreprise","alibi":"En réunion du conseil d'administration toute la matinée.","qs":[{"q":"Qui connaît le code PIN ?","a":"Seulement moi et le comptable."},{"q":"Avez-vous perdu la carte de secours ?","a":"Non, toujours dans ma poche."},{"q":"Qui soupçonnez-vous ?","a":"Le comptable a de lourdes dettes."}]},
                        {"name":"Fatima la Secrétaire","role":"Secrétaire Exécutive","alibi":"Planifiait des rendez-vous dans le hall.","qs":[{"q":"Avez-vous accès au coffre-fort ?","a":"Non, jamais."},{"q":"Qui est entré dans le bureau ?","a":"Le comptable et les agents de nettoyage."},{"q":"Avez-vous remarqué quelque chose ?","a":"La porte était légèrement entrebâillée."}]},
                        {"name":"Ziad le Comptable","role":"Comptable Financier","alibi":"Préparait l'audit annuel dans son bureau.","qs":[{"q":"Pourquoi de lourdes dettes ?","a":"Problèmes familiaux maintenant résolus."},{"q":"Comment connaissez-vous le code PIN ?","a":"Fait partie de mes fonctions financières parfois."},{"q":"Où étiez-vous hier midi ?","a":"À l'agence bancaire."}]},
                        {"name":"Adel la Sécurité","role":"Garde de l'Immeuble","alibi":"Gardait l'entrée principale.","qs":[{"q":"Quelqu'un est-il parti avec des sacs ?","a":"Seul le personnel régulier est parti."},{"q":"Vidéosurveillance fonctionnelle ?","a":"Fonctionne parfaitement."},{"q":"Début du service ?","a":"Tôt le matin."}]}
                    ],
                    "explain":"Ziad le Comptable a exploité son motif de dettes et sa connaissance du code PIN pour voler l'argent du coffre-fort en utilisant la carte de secours.",
                    "hints":["Indice 1 : Examinez le clip de la caméra cachée montrant la saisie du code PIN et la carte d'accès de secours manquante.","Indice 2 : Vérifiez la facture de dette financière appartenant au personnel.","Indice 3 : Ziad le Comptable avait à la fois le mobile financier (lourdes dettes) et la connaissance du code PIN pour vider le coffre-fort."]
                },
                {
                    "tag":"Affaire de Meurtre",
                    "difficulty":"medium",
                    "title":"Crime sur la Plage d'Andalousie",
                    "brief":"Un pêcheur retrouvé mort sur le sable à l'aube à côté d'une petite embarcation au moteur tournant.",
                    "victim":"Victime : Ibrahim le Pêcheur (50 ans).",
                    "culprit":"Hamza le Jeune",
                    "evidence":[
                        {"name":"Rame en Bois Brisée","desc":"Tachée de sang avec des marques de lutte."},
                        {"name":"Filet de Pêche Déchiré","desc":"Éparpillé près de la ligne d'eau."},
                        {"name":"Montre-Bracelet Bon Marché","desc":"Appartient à un jeune du village local."},
                        {"name":"Empreintes de Pas sur le Sable","desc":"Mènent vers la route côtière."},
                        {"name":"Boîte à Matériel Ouverte","desc":"Outils tranchants manquants."}
                    ],
                    "suspects":[
                        {"name":"Hamza le Jeune","role":"Jeune Chômeur","alibi":"Dormait chez lui toute la nuit.","qs":[{"q":"Pourquoi la montre a-t-elle été trouvée ?","a":"Je dois l'avoir perdue en nageant."},{"q":"Avez-vous eu des disputes ?","a":"Bagarre au sujet des droits de pêche."},{"q":"Où étiez-vous à 4h00 du matin ?","a":"Dans mon lit."}]},
                        {"name":"Mousa le Pêcheur","role":"Pêcheur Rival","alibi":"Pêche de nuit en mer.","qs":[{"q":"Heure de retour ?","a":"Au lever du soleil."},{"q":"Avez-vous vu Hamza à proximité ?","a":"Je l'ai vu près du bateau."},{"q":"Relation avec la victime ?","a":"Concurrence de travail équitable."}]},
                        {"name":"Salem le Propriétaire du Café","role":"Commerçant","alibi":"Ouvrait le café.","qs":[{"q":"Avez-vous entendu des cris ?","a":"Juste les vagues de l'océan."},{"q":"Qui fréquente la plage la nuit ?","a":"Pêcheurs et jeunes."},{"q":"Avez-vous vu des étrangers ?","a":"Personne."}]},
                        {"name":"Khadija l'Épouse","role":"Femme au Foyer","alibi":"À la maison avec les enfants.","qs":[{"q":"Quand est-il parti ?","a":"À minuit comme d'habitude."},{"q":"A-t-il eu des problèmes ?","a":"Différend financier avec Hamza."},{"q":"A-t-il laissé une note ?","a":"Non."}]}
                    ],
                    "explain":"Hamza le Jeune s'est battu pour des emplacements de pêche et a frappé le pêcheur avec une rame, laissant tomber sa montre.",
                    "hints":["Indice 1 : Inspectez la rame en bois brisée et la montre-bracelet bon marché trouvée dans le sable.","Indice 2 : Vérifiez les empreintes de pas menant de la plage vers la route côtière.","Indice 3 : Hamza le Jeune avait des différends continus sur les droits de pêche et a laissé tomber sa montre personnelle lors de la lutte violente."]
                },
                {
                    "tag":"Disparition",
                    "difficulty":"hard",
                    "title":"Disparition d'un Tableau Ancien",
                    "brief":"Un tableau rare a disparu d'un ancien palais royal sans déclencher le système d'alarme.",
                    "victim":"Palais du Feu Prince - Œuvre d'Art Rare.",
                    "culprit":"Maher le Décorateur",
                    "evidence":[
                        {"name":"Outil de Contournement d'Alarme","desc":"Gadget de contournement de haute technologie."},
                        {"name":"Gant en Tissu","desc":"Porte la vieille poussière du palais."},
                        {"name":"Plan du Palais","desc":"Trouvé sur le téléphone du décorateur."},
                        {"name":"Tissu Déchiré","desc":"Déchiré du rideau de la chambre."},
                        {"name":"Registre des Visiteurs","desc":"Enregistre la visite nocturne de la décoratrice intérieure."}
                    ],
                    "suspects":[
                        {"name":"Prince Khalid","role":"Héritier du Palais","alibi":"Voyage d'affaires à l'étranger.","qs":[{"q":"Qui a accès ?","a":"Moi et l'équipe de maintenance."},{"q":"Le tableau est-il assuré ?","a":"Oui pour des millions."},{"q":"Soupçonnez-vous le personnel ?","a":"Nouveau designer d'intérieur."}]},
                        {"name":"Maher le Décorateur","role":"Expert en Restauration","alibi":"Mesurait les murs pour la rénovation.","qs":[{"q":"Pourquoi posséder les plans ?","a":"Requis pour le travail de conception."},{"q":"Contourner l'alarme ?","a":"J'ai seulement vérifié les fils endommagés."},{"q":"Où est le tableau ?","a":"Je ne sais rien."}]},
                        {"name":"Souad l'Historienne","role":"Archiviste","alibi":"Cataloguait des objets dans les archives.","qs":[{"q":"Dernière visite de la pièce ?","a":"La semaine dernière."},{"q":"Remarqué des changements ?","a":"Tout est en place."},{"q":"Qui aime l'art ?","a":"Le prince lui-même."}]},
                        {"name":"Essam le Chef de la Garde","role":"Garde Principal","alibi":"Supervisait les portes extérieures.","qs":[{"q":"Repéré un intrus ?","a":"La vidéosurveillance n'a montré personne."},{"q":"Alarme déclenchée ?","a":"Coupée pendant des minutes puis a repris."},{"q":"Qui a désarmé le système ?","a":"Un expert."}]}
                    ],
                    "explain":"Maher le Décorateur a utilisé l'accès aux plans et ses compétences techniques pour désarmer l'alarme et voler le tableau.",
                    "hints":["Indice 1 : Vérifiez l'outil de contournement d'alarme et les plans du palais trouvés sur le téléphone du décorateur.","Indice 2 : Examinez le registre des visiteurs montrant l'accès de nuit par le designer d'intérieur.","Indice 3 : Maher le Décorateur a utilisé son accès aux plans et ses gadgets techniques pour désarmer l'alarme et voler le tableau."]
                },
                {
                    "tag":"Affaire de Meurtre",
                    "difficulty":"hard",
                    "title":"Meurtre d'un Acteur Célèbre",
                    "brief":"Un acteur de premier plan a été retrouvé mort dans la loge du théâtre après la dernière représentation sur scène.",
                    "victim":"Victime : Rafat Rami (45 ans).",
                    "culprit":"Bassem la Doublure",
                    "evidence":[
                        {"name":"Scénario Déchiré","desc":"Notes manuscrites sévères sur le rôle principal."},
                        {"name":"Corde d'Accessoire","desc":"Faux accessoire converti en véritable outil de strangulation."},
                        {"name":"Empreinte de Chaussure en Bois","desc":"Derrière le couloir sombre des coulisses."},
                        {"name":"Registres d'Appels","desc":"Menaces répétées d'un acteur secondaire doublure."},
                        {"name":"Costume de Scène","desc":"Jeté dans la poubelle."}
                    ],
                    "suspects":[
                        {"name":"Salaf l'Actrice","role":"Actrice Principale","alibi":"Célébrait avec des fans à la cafétéria.","qs":[{"q":"Relation avec lui ?","a":"Strictement rivalité artistique."},{"q":"Vous êtes-vous disputés ?","a":"En concurrence pour la place vedette."},{"q":"Où à l'heure du meurtre ?","a":"Avec les fans dans la salle."}]},
                        {"name":"Sami le Directeur","role":"Metteur en Scène","alibi":"Vérifiait l'éclairage avec l'équipe.","qs":[{"q":"Comment était la performance de la victime ?","a":"Super mais arrogant."},{"q":"Qui est entré dans la loge ?","a":"Un acteur doublure en colère."},{"q":"Entendu des cris ?","a":"La musique a étouffé les sons."}]},
                        {"name":"Ziad l'Écrivain","role":"Dramaturge","alibi":"Signait des livres pour le public à l'extérieur.","qs":[{"q":"A-t-il altéré le scénario ?","a":"Demandait des changements constamment."},{"q":"Où après le rideau ?","a":"Dédicace de livres."},{"q":"Aimez-vous son jeu ?","a":"Il convenait bien au rôle."}]},
                        {"name":"Bassem la Doublure","role":"Acteur Secondaire","alibi":"Se changeait dans sa loge.","qs":[{"q":"Pourquoi le menacer ?","a":"Il a volé mon rôle principal par cupidité."},{"q":"L'avez-vous tué ?","a":"J'étais en colère mais je n'ai pas tué."},{"q":"Où exactement ?","a":"Dans la pièce seul."}]}
                    ],
                    "explain":"Bassem la Doublure a étranglé Rafat par rage suite au vol de son rôle principal en utilisant un accessoire des coulisses.",
                    "hints":["Indice 1 : Inspectez les registres d'appels montrant des menaces répétées d'un collègue de travail.","Indice 2 : Vérifiez la corde d'accessoire convertie en véritable outil de strangulation dans les coulisses.","Indice 3 : Bassem la Doublure avait un fort mobile de rage après que Rafat lui eut volé son rôle principal."]
                },
                {
                    "tag":"Affaire de Vol",
                    "difficulty":"hard",
                    "title":"Le Braquage du Train d'Or",
                    "brief":"Une cargaison de lingots d'or d'une valeur de 1 million de dollars a disparu d'un train de marchandises rapide en plein milieu du voyage entre des villes la nuit.",
                    "victim":"Express Transit Corp - Lingots d'Or.",
                    "culprit":"Sameh le Conducteur de Train",
                    "evidence":[
                        {"name":"Cric Hydraulique","desc":"Caché à côté des voies ferrées."},
                        {"name":"Talkie-Walkie","desc":"Utilise la fréquence radio de sécurité de la compagnie de train."},
                        {"name":"Gant de Travail Salissant","desc":"Porte le logo de la compagnie d'expédition."},
                        {"name":"Traces de Camion Lourd","desc":"Près du marqueur d'arrêt d'urgence du train."},
                        {"name":"Registre de Maintenance","desc":"Montre un arrêt intentionnel du frein du train d'1 minute."}
                    ],
                    "suspects":[
                        {"name":"Sameh le Conducteur de Train","role":"Conducteur de Marchandises","alibi":"Arrêté en raison d'un problème de signal soudain.","qs":[{"q":"Pourquoi s'arrêter ici ?","a":"Signal rouge d'urgence de la tour."},{"q":"Connaissez-vous la valeur de la cargaison ?","a":"Oui, de l'or sécurisé."},{"q":"Qui a la radio ?","a":"L'équipe de contrôle."}]},
                        {"name":"Majed le Répartiteur","role":"Contrôleur de Signal","alibi":"Surveillait les lignes depuis la tour de contrôle.","qs":[{"q":"Ordre d'arrêter le train ?","a":"Les signaux étaient verts."},{"q":"Qui a altéré le panneau ?","a":"Quelqu'un avec la fréquence."},{"q":"Où à 1h00 du matin ?","a":"Dans la tour seul."}]},
                        {"name":"Daniel le Garde","role":"Escorte de Cargaison","alibi":"Gardait la porte intérieure du wagon arrière.","qs":[{"q":"Pourquoi ne pas faire feu ?","a":"Assommé par du gaz."},{"q":"Qui était à l'intérieur ?","a":"Juste moi et des boîtes."},{"q":"Quand vous êtes-vous réveillé ?","a":"Une heure après l'arrêt."}]},
                        {"name":"Essam le Mécanicien","role":"Travailleur de Maintenance","alibi":"Réparait la voie dans une station voisine.","qs":[{"q":"Possédez-vous un cric hydraulique ?","a":"Oui, pour la maintenance des voies."},{"q":"Où étaient les outils ?","a":"Dans le camion de service."},{"q":"Aimez-vous l'argent facile ?","a":"Qui ne l'aime pas ? Mais je suis honnête."}]}
                    ],
                    "explain":"Sameh le Conducteur de Train s'est colludé avec Essam le Mécanicien pour arrêter intentionnellement le train et décharger l'or.",
                    "hints":["Indice 1 : Vérifiez le cric hydraulique et le talkie-walkie réglé sur la fréquence radio de l'entreprise.","Indice 2 : Examinez le registre de maintenance montrant un arrêt intentionnel du frein d'urgence d'une minute.","Indice 3 : Sameh le Conducteur de Train s'est allié au mécanicien Essam pour stopper le train et décharger la cargaison d'or."]
                },
                {
                    "tag":"Affaire de Meurtre",
                    "difficulty":"hard",
                    "title":"La Mort de l'Archéologue",
                    "brief":"Un archéologue de renom a été retrouvé mort à l'intérieur d'un tombeau récemment ouvert avec un coffre de reliques forcé.",
                    "victim":"Victime : Dr Fadel (58 ans).",
                    "culprit":"Maher le Contrebandier",
                    "evidence":[
                        {"name":"Pioche Archéologique","desc":"Tachée du sang de la victime et d'empreintes."},
                        {"name":"Statuette en Or","desc":"Laissée par le tueur en fuite."},
                        {"name":"Lampe de Poche","desc":"Porte la marque d'un magasin de bricolage local."},
                        {"name":"Empreintes de Pas dans la Poussière","desc":"Mènent vers l'entrée principale des fouilles."},
                        {"name":"Registre de l'Expédition","desc":"Détaille un différend sur le partage des trouvailles."}
                    ],
                    "suspects":[
                        {"name":"Dr Adel","role":"Co-Chef d'Expédition","alibi":"Documentait les inscriptions dans la chambre Ouest.","qs":[{"q":"Pourquoi se disputer ?","a":"Au sujet du crédit de recherche."},{"q":"Entré dans la salle au trésor ?","a":"Le matin seulement."},{"q":"Où à l'heure du crime ?","a":"Dans l'autre chambre."}]},
                        {"name":"Souad l'Assistante","role":"Assistante de Fouille","alibi":"Organisait les outils dans le camp extérieur.","qs":[{"q":"Qui a visité le tombeau la nuit ?","a":"Dr Fadel seul."},{"q":"Reliques manquantes ?","a":"Statuette en or rare."},{"q":"Quand découvert ?","a":"Le lendemain matin."}]},
                        {"name":"Maher le Contrebandier","role":"Individu Suspect","alibi":"Chassait la faune près de la lisière du désert.","qs":[{"q":"Pourquoi près du tombeau ?","a":"Chasse au gibier sauvage."},{"q":"Pourquoi la lampe de poche trouvée ?","a":"Je l'ai perdue plus tôt."},{"q":"Contrebande de reliques ?","a":"Fausse accusation."}]},
                        {"name":"Jehad le Garde","role":"Garde du Site","alibi":"Gardait les tentes de l'expédition à l'extérieur.","qs":[{"q":"Vu un étranger s'approcher ?","a":"J'ai vu une personne porter un lourd sac."},{"q":"Pourquoi ne pas l'arrêter ?","a":"Je pensais que c'était un chercheur."},{"q":"Entendu des cris ?","a":"Le vent soufflait trop fort."}]}
                    ],
                    "explain":"Maher le Contrebandier s'est infiltré dans le tombeau pour voler la statuette en or et a assassiné l'archéologue lorsqu'il a été surpris.",
                    "hints":["Indice 1 : Inspectez la lampe de poche portant la marque du magasin de bricolage local laissée sur les lieux.","Indice 2 : Vérifiez la statuette en or laissée par le coupable en fuite.","Indice 3 : Maher le Contrebandier s'est infiltré dans le tombeau pour un trafic illégal et a assassiné le Dr Fadel lorsqu'il a été pris."]
                },
                {
                    "tag":"Disparition",
                    "difficulty":"hard",
                    "title":"Disparition d'un Jet Privé",
                    "brief":"Un jet d'affaires privé a disparu au-dessus de l'espace aérien montagneux accidenté près d'une dense forêt de pins.",
                    "victim":"Avion Privé - 4 Passagers.",
                    "culprit":"Samer le Copilote",
                    "evidence":[
                        {"name":"Boîte Noire Écrasée","desc":"Montre une altération délibérée du système de pilotage automatique."},
                        {"name":"Carburant Contaminé","desc":"Agent chimique ajouté provoquant l'arrêt du moteur."},
                        {"name":"Fausse Lettre de Suicide","desc":"Trouvée sur l'ordinateur portable de l'assistant."},
                        {"name":"Lignes de Parachute","desc":"Emmêlées dans les hautes branches des pins."},
                        {"name":"Plan de Vol Modifié","desc":"Détourne intentionnellement le chemin vers les montagnes."}
                    ],
                    "suspects":[
                        {"name":"Capitaine Rami","role":"Pilote Principal","alibi":"Pilotait l'avion selon les instructions officielles.","qs":[{"q":"Pourquoi le changement de route ?","a":"Pour éviter une tempête sévère."},{"q":"Panne de moteur ?","a":"Les moteurs se sont arrêtés de manière inattendue."},{"q":"Lieu de l'accident ?","a":"Au milieu de la forêt."}]},
                        {"name":"Samer le Copilote","role":"Premier Officier","alibi":"Surveillait le tableau de bord de la cabine.","qs":[{"q":"Qui a changé le plan ?","a":"Le capitaine a demandé pour économiser du carburant."},{"q":"Quitter l'avion ?","a":"Je suis resté à bord."},{"q":"Qu'en est-il du parachute ?","a":"Article de kit d'urgence."}]},
                        {"name":"Monir l'Investisseur","role":"Propriétaire de l'Avion","alibi":"Examinait des documents sur le siège passager.","qs":[{"q":"Le jet est-il assuré ?","a":"Assuré lourdement."},{"q":"Remarqué des tensions ?","a":"Les pilotes se sont disputés discrètement."},{"q":"Où sont les bagages ?","a":"Brûlés dans l'accident."}]},
                        {"name":"Laila l'Officière","role":"Aide Personnelle","alibi":"Assise dans la section arrière.","qs":[{"q":"Entendu une explosion ?","a":"Son étrange puis chute rapide."},{"q":"Aimez-vous voler ?","a":"Je n'aime pas la haute altitude."},{"q":"Qui en profite ?","a":"Les polices d'assurance."}]}
                    ],
                    "explain":"Samer le Copilote a saboté le carburant, modifié la navigation et s'est éjecté en parachute avant le crash.",
                    "hints":["Indice 1 : Vérifiez la boîte noire écrasée et le carburant contaminé menant à la panne du moteur.","Indice 2 : Inspectez les lignes de parachute emmêlées dans les hautes branches des pins près du chemin du crash.","Indice 3 : Samer le Copilote a saboté le vol, modifié la navigation et s'est éjecté en parachute avant l'impact."]
                },
                {
                    "tag":"Affaire de Meurtre",
                    "difficulty":"extreme",
                    "title":"Poison Invisible",
                    "brief":"Un magnat empoisonné à l'intérieur d'un bureau-coffre fort fortifié en utilisant un composé bio rare et indétectable.",
                    "victim":"Victime : Fouad Al-Moatasem (60 ans).",
                    "culprit":"Dr Ziad",
                    "evidence":[
                        {"name":"Compte-Gouttes Médical","desc":"Contient des micro-gouttes de neurotoxine."},
                        {"name":"Gobelet d'Eau","desc":"Mélangé avec un composé bio inodore."},
                        {"name":"Gant Chirurgical","desc":"Jeté dans la poubelle."},
                        {"name":"Testament Mis à Jour","desc":"Réassigne l'héritage à une fondation caritative."},
                        {"name":"Images de Vidéosurveillance","desc":"Montrent une personne portant un manteau de médecin."}
                    ],
                    "suspects":[
                        {"name":"Dr Ziad","role":"Médecin Personnel","alibi":"Vérifiait la tension artérielle de la victime dans l'après-midi.","qs":[{"q":"Médicaments quotidiens ?","a":"Vitamines cardiaques uniquement."},{"q":"Pourquoi le compte-gouttes trouvé ?","a":"Utilisé pour des gouttes pour les yeux."},{"q":"Connaissez-vous le nouveau testament ?","a":"Non, ignorant."}]},
                        {"name":"Sawsan l'Épouse","role":"Épouse de la Victime","alibi":"Préparait du thé dans la cuisine extérieure.","qs":[{"q":"Qui a bu l'eau ?","a":"Mon mari seul."},{"q":"Différend sur le testament ?","a":"Attristée mais je n'ai pas tué."},{"q":"Qui a visité aujourd'hui ?","a":"Son médecin personnel."}]},
                        {"name":"Maher le Pharmacien","role":"Pharmacien de la Famille","alibi":"Gérait la pharmacie toute la journée.","qs":[{"q":"Avez-vous délivré la toxine ?","a":"Médicament autorisé seulement."},{"q":"Qui détient le composé bio ?","a":"Laboratoires de haut niveau."},{"q":"Visité le manoir ?","a":"Il y a un mois."}]},
                        {"name":"Omar le Garde","role":"Garde du Manoir","alibi":"Gardait la porte principale.","qs":[{"q":"Qui est entré en manteau de médecin ?","a":"Le Dr Ziad comme d'habitude."},{"q":"Vu un étranger ?","a":"Personne d'étrange."},{"q":"Début du service ?","a":"Tôt le matin."}]}
                    ],
                    "explain":"Dr Ziad le Médecin Personnel a empoisonné l'approvisionnement en médicaments en utilisant un composé bio pour réclamer les fonds de la succession.",
                    "hints":["Indice 1 : Examinez le compte-gouttes médical contenant des micro-doses de neurotoxine.","Indice 2 : Vérifiez les images de vidéosurveillance montrant quelqu'un en manteau de médecin entrant dans le bureau-coffre fort fortifié.","Indice 3 : Dr Ziad le Médecin Personnel a empoisonné l'approvisionnement en médicaments de la victime pour s'assurer les fonds de l'héritage."]
                },
                {
                    "tag":"Affaire de Vol",
                    "difficulty":"extreme",
                    "title":"Casse du Musée Local",
                    "brief":"Des statues de bronze anciennes ont disparu de la vitrine d'exposition du musée local sans forcer les serrures.",
                    "victim":"Musée Local - 3 Statues.",
                    "culprit":"Rami le Conservateur",
                    "evidence":[
                        {"name":"Jeu de Clés Standard","desc":"Déverrouille la vitrine en verre en douceur."},
                        {"name":"Marque d'Encre Bleue","desc":"Sur la poignée de l'armoire d'exposition."},
                        {"name":"Registre des Entrées","desc":"Montre que le conservateur s'est connecté tard dans la nuit."},
                        {"name":"Sac en Toile","desc":"Laissé derrière les bancs de sièges."},
                        {"name":"Reçu de Vente","desc":"Montre la vente d'articles similaires à un revendeur."}
                    ],
                    "suspects":[
                        {"name":"Rami le Conservateur","role":"Conservateur du Musée","alibi":"Mettait à jour les dossiers dans son bureau.","qs":[{"q":"Qui a la clé de la vitrine ?","a":"Seulement moi."},{"q":"Pourquoi vous êtes-vous connecté tard la nuit ?","a":"Examen de l'inventaire."},{"q":"Où sont les statues ?","a":"Volées, je ne sais pas par qui."}]},
                        {"name":"Souad le Garde","role":"Garde du Musée","alibi":"Stationné à la porte d'entrée.","qs":[{"q":"Quelqu'un a-t-il transporté des sacs ?","a":"J'ai vu Rami porter un sac en toile."},{"q":"Alarme déclenchée ?","a":"Non, clé d'origine utilisée."},{"q":"Quand Rami est-il parti ?","a":"Après minuit."}]},
                        {"name":"Ziad le Visiteur","role":"Passionné d'Antiquités","alibi":"Visitait les expositions pendant la journée.","qs":[{"q":"Quand avez-vous visité ?","a":"Deux jours avant le braquage."},{"q":"Rencontré Rami ?","a":"J'ai discuté des statues avec lui."},{"q":"Acheter des antiquités ?","a":"Par des moyens légaux seulement."}]},
                        {"name":"Fatima la Femme de Ménage","role":"Personnel de Nettoyage","alibi":"Nettoyait les halls le matin.","qs":[{"q":"Remarqué des objets manquants ?","a":"Vitrine vide le matin."},{"q":"Qui entre la nuit ?","a":"Le conservateur Rami."},{"q":"Ouvrir les vitrines ?","a":"Jamais."}]}
                    ],
                    "explain":"Rami le Conservateur a volé les statues de bronze en utilisant sa clé passe-partout officielle et les a vendues à un revendeur illégal.",
                    "hints":["Indice 1 : Vérifiez le registre des entrées montrant que le conservateur s'est connecté tard dans la nuit.","Indice 2 : Examinez le jeu de clés standard utilisé pour ouvrir les vitrines sans effraction.","Indice 3 : Rami le Conservateur a utilisé ses clés maîtresses officielles pour voler les statues en bronze et les vendre."]
                },
                {
                    "tag":"Affaire de Meurtre",
                    "difficulty":"extreme",
                    "title":"Crime dans la Maison Hantée",
                    "brief":"Un homme âgé a été retrouvé assassiné dans une maison forestière abandonnée avec la porte d'entrée verrouillée de l'intérieur.",
                    "victim":"Victime : Saleh (75 ans).",
                    "culprit":"Nabil le Neveu",
                    "evidence":[
                        {"name":"Clé de Secours","desc":"Cachée sous le paillasson."},
                        {"name":"Gourdin en Bois","desc":"Taché de sang avec des marques de lutte."},
                        {"name":"Boîte à Argent","desc":"Vidé et éparpillée."},
                        {"name":"Empreinte de Pas Boueuse","desc":"Près du cadre de la fenêtre arrière."},
                        {"name":"Note d'Héritage","desc":"Du neveu exigeant de l'argent."}
                    ],
                    "suspects":[
                        {"name":"Nabil le Neveu","role":"Parent de la Victime","alibi":"Vendait des biens en ville.","qs":[{"q":"Pourquoi exiger de l'argent ?","a":"C'était mon oncle, il avait besoin d'aide."},{"q":"Connaissez-vous la cachette de la clé ?","a":"Oui, vieille cachette."},{"q":"Où à l'heure de l'incident ?","a":"Au marché de la ville."}]},
                        {"name":"Saeed le Voisin","role":"Voisin Âgé","alibi":"Réparait la clôture de la ferme.","qs":[{"q":"Entendu une dispute ?","a":"Cri faible puis silence."},{"q":"Qui visite la maison ?","a":"Son neveu Nabil."},{"q":"Entré dans la maison ?","a":"Jamais."}]},
                        {"name":"Mona la Fille","role":"Étudiante","alibi":"Ramassait des herbes près de la forêt.","qs":[{"q":"Vu un étranger ?","a":"J'ai vu Nabil porter une boîte en métal."},{"q":"Quand vu ?","a":"Juste avant le coucher du soleil."},{"q":"Le dire à quelqu'un ?","a":"J'avais peur."}]},
                        {"name":"Khaled l'Officier","role":"Flic à la Retraite","alibi":"Pêchait dans une rivière voisine.","qs":[{"q":"Visité Saleh récemment ?","a":"Il y a une semaine pour le thé."},{"q":"Son humeur ?","a":"Craintif de la cupidité de Nabil."},{"q":"Aimez-vous la forêt ?","a":"J'y passe des heures."}]}
                    ],
                    "explain":"Nabil le Neveu a tué son oncle pour la boîte à argent en utilisant la cachette de la clé de secours qu'il connaissait.",
                    "hints":["Indice 1 : Inspectez la clé de secours cachée sous le paillasson que seule la famille connaissait.","Indice 2 : Vérifiez la note d'héritage exigeant de l'argent trouvée dans la maison.","Indice 3 : Nabil le Neveu a utilisé la clé de secours cachée pour entrer et assassiner son oncle pour la boîte à argent."]
                },
                {
                    "tag":"Disparition",
                    "difficulty":"extreme",
                    "title":"Document Diplomatique",
                    "brief":"Un document diplomatique top-secret a disparu de la mallette de l'ambassadeur lors d'une réception bondée.",
                    "victim":"Ambassade Étrangère - Document Secret.",
                    "culprit":"Daniel le Reporter",
                    "evidence":[
                        {"name":"Mallette Correspondante","desc":"Échangée habilement avec l'originale."},
                        {"name":"Fausse Invitation","desc":"Porte un faux nom d'invité."},
                        {"name":"Clip de Vidéosurveillance","desc":"Personne portant un costume formel sombre."},
                        {"name":"Mouchoir en Soie","desc":"Parfumé au parfum français."},
                        {"name":"Registre des Invités","desc":"Enregistre l'entrée d'un reporter mystérieux."}
                    ],
                    "suspects":[
                        {"name":"Ambassadeur Murad","role":"Diplomate Principal","alibi":"Accueillait les invités dans le hall principal.","qs":[{"q":"Qui détient la mallette ?","a":"Mon aide toujours."},{"q":"Quand avez-vous remarqué la perte ?","a":"Juste après le départ des invités."},{"q":"Le document est-il critique ?","a":"Top secret."}]},
                        {"name":"Saeed l'Aide","role":"Aide Diplomatique","alibi":"Servait des rafraîchissements aux invités.","qs":[{"q":"Où était la mallette ?","a":"À côté du bureau privé."},{"q":"Qui s'est approché ?","a":"Un journaliste étranger."},{"q":"L'avez-vous laissée seule ?","a":"Pendant des minutes pour aller chercher des dossiers."}]},
                        {"name":"Daniel le Reporter","role":"Journaliste Étranger","alibi":"Interviewait des diplomates.","qs":[{"q":"Pourquoi échanger la mallette ?","a":"Mélange accidentel."},{"q":"Parfum français ?","a":"Cadeau d'un ami."},{"q":"À la recherche de scoops ?","a":"Je cherche la vérité."}]},
                        {"name":"Nadine la Traductrice","role":"Traductrice Officielle","alibi":"Traduisait sur scène.","qs":[{"q":"Remarqué une activité étrange ?","a":"Daniel a rôdé près de la mallette."},{"q":"Qui l'a invité ?","a":"Invitations privées."},{"q":"Documents sécurisés ?","a":"Protocole strict."}]}
                    ],
                    "explain":"Daniel le Reporter espion a échangé une mallette identique pendant l'agitation de la réception pour voler le document.",
                    "hints":["Indice 1 : Vérifiez la mallette échangée et le registre des invités consignant un reporter mystérieux.","Indice 2 : Remarquez le mouchoir en soie parfumé au parfum français laissé sur les lieux.","Indice 3 : Daniel le Reporter a utilisé une fausse invitation et a échangé les mallettes pendant l'agitation de la réception."]
                },
                {
                    "tag":"Affaire de Meurtre",
                    "difficulty":"extreme",
                    "title":"Assassinat en Hauteur",
                    "brief":"Un magnat retrouvé mort d'une fléchette empoisonnée à l'intérieur d'un bureau-tour en verre au 50ème étage.",
                    "victim":"Victime : Ghassan Al-Malik (65 ans).",
                    "culprit":"Ziad le Rival",
                    "evidence":[
                        {"name":"Micro-Fléchette Empoisonnée","desc":"Tirée depuis la fenêtre d'un bâtiment opposé."},
                        {"name":"Arbalète Professionnelle","desc":"Montée sur un trépied dans le bâtiment opposé."},
                        {"name":"Empreinte Partielle","desc":"Sur la poignée de l'arbalète dans une pièce sombre."},
                        {"name":"Contrat Dissout","desc":"Montre une perte majeure pour le principal concurrent."},
                        {"name":"Lunette de Visée Haute Puissance","desc":"Utilisée pour le ciblage de précision à longue portée."}
                    ],
                    "suspects":[
                        {"name":"Ziad le Rival","role":"Magnat Rival","alibi":"En réunions bancaires toute la journée.","qs":[{"q":"Relation avec la victime ?","a":"Féroce concurrence sur le marché."},{"q":"Embauché un sniper ?","a":"Je suis un homme d'affaires légal."},{"q":"Où à l'heure du crime ?","a":"Dans la tour de la finance."}]},
                        {"name":"Sahar la Secrétaire","role":"Assistante Exécutive","alibi":"Préparait du café dans le salon.","qs":[{"q":"Qui a accès au bureau ?","a":"Moi et le chef de la sécurité."},{"q":"Entendu le bruit de la fenêtre ?","a":"Le verre est insonorisé."},{"q":"Était-il effrayé ?","a":"A reçu des menaces de mort."}]},
                        {"name":"Maher le Chef de la Sécurité","role":"Chef des Gardes","alibi":"Surveillait les caméras de l'étage inférieur.","qs":[{"q":"Pourquoi rater le sniper ?","a":"Bâtiment opposé abandonné."},{"q":"Qui détient la clé de l'opposé ?","a":"Entrepreneur en faillite."},{"q":"Les caméras couvrent-elles l'opposé ?","a":"L'angle le manque."}]},
                        {"name":"Jehad le Sniper","role":"Mercenaire Mystérieux","alibi":"Louait une chambre sous un pseudonyme.","qs":[{"q":"Pourquoi dans la tour opposée ?","a":"Passionné de photographie."},{"q":"Pourquoi l'empreinte sur l'arbalète ?","a":"Contrat exécuté pour de l'argent."},{"q":"Qui vous a payé ?","a":"Le rival Ziad."}]}
                    ],
                    "explain":"Ziad le Rival a embauché le mercenaire Jehad pour exécuter l'assassinat à longue portée inter-bâtiments.",
                    "hints":["Indice 1 : Examinez la micro-fléchette empoisonnée et l'arbalète professionnelle montée dans le bâtiment opposé.","Indice 2 : Vérifiez le contrat dissout montrant des pertes financières majeures pour le principal rival du marché.","Indice 3 : Ziad le Rival a embauché le sniper Jehad dans le bâtiment opposé abandonné pour exécuter l'assassinat dans la tour."]
                }
            ]
        },
        es: {
            appTitle: "El Archivo Negro | Othmane Ettoumi",
            appSub: "Juego de Detective Inteligente – 20 Casos Criminales",
            profileBtn: "👤 Perfil de Detective",
            chatBtn: "💬 Chat de Amigos",
            mpBtn: "🌐 Jugar con Amigos",
            statusReady: "Listo para el Servicio",
            archiveTitle: "📁 Archivos de Casos (20 Crímenes)",
            archiveDesc: "Elige entre 20 casos de dificultad progresiva para comenzar tu investigación.",
            footerText: "El Archivo Negro © 2026 - Diseñado por: Othmane Ettoumi | 100% Sin Conexión (el multijugador necesita internet)",
            filterAll: "Todos",
            filterEasy: "Fácil",
            filterMedium: "Medio",
            filterHard: "Difícil",
            filterExtreme: "Extremo",
            backArchive: "← Volver a Archivos",
            crimeSceneBanner: "INVESTIGACIÓN DE LA ESCENA DEL CRIMEN",
            startInv: "Proceder a la Escena del Crimen →",
            backBrief: "← Volver al Resumen del Caso",
            notesBtn: "📝 Notas de Detective",
            hintBtn: "💡 Solicitar Pista",
            evidenceHeader: "🔍 Evidencia Física",
            suspectsHeader: "👥 Interrogatorio de Sospechosos",
            accuseBtn: "⚖️ Acusar a Sospechoso y Resolver Caso",
            returnMenu: "Volver a Archivos",
            retryCase: "Reinvestigar Caso",
            close: "Cerrar",
            interrogateQ: "Preguntas de Interrogatorio:",
            accuseModalTitle: "⚖️ Acusación Final",
            accuseModalDesc: "Selecciona al verdadero culpable con cuidado. ¡Una acusación errónea dañará tu rango de detective!",
            cancel: "Cancelar",
            confirmAccuse: "Confirmar Acusación",
            notesTitle: "📝 Notas de Detective",
            notesDesc: "Escribe tus observaciones y teorías:",
            notesClose: "Cerrar",
            notesSave: "Guardar Notas",
            hintTitle: "💡 Pista de Detective",
            hintClose: "Entendido",
            profileTitle: "👤 Perfil de Detective",
            proNameLabel: "Nombre de Detective:",
            proRankLabel: "Rango:",
            achLabel: "🎖️ Logros",
            onboardTitle: "Bienvenido, Detective",
            onboardBody: "Tienes 20 casos criminales por resolver. Lee el resumen del caso, examina cuidadosamente las pruebas físicas e interroga a cada sospechoso — sus respuestas esconden la verdad. Usa las pistas solo si te atascas (máximo 3 por caso) y luego haz tu acusación final. Elige con sabiduría: ¡acusar a un inocente deja escapar al verdadero culpable!",
            onboardBtn: "Comencemos la investigación →",
            proClose: "Cancelar",
            proSave: "Guardar Perfil",
            mpTitle: "🌐 Sala Jugar con Amigos",
            mpDesc: "Conéctate con amigos detectives a través de WiFi, *3, o *6 (Marruecos) para competir resolviendo casos.",
            mpClose: "Cerrar",
            mpJoin: "Conectar Sala",
            mpCreate: "Crear Sala",
            mpLeave: "Salir de la Sala",
            roomLeft: "Has salido de la sala.",
            roomCreating: "Creando tu sala...",
            roomCreated: "¡Sala lista! Comparte este código con tu amigo: {code}",
            roomWaiting: "Esperando a que un amigo se una a la sala {code}...",
            roomFriendJoined: "¡Tu amigo se unió! Ahora están conectados.",
            roomConnectFailed: "No se pudo conectar. Verifica que tú y tu amigo tengan internet vía WiFi, *3, o *6, e inténtalo de nuevo.",
            roomDisconnected: "Tu amigo se desconectó.",
            chatConnectedDisclaimer: "Conectado en vivo con un amigo real.",
            friendJoinedMsg: "¡Tu amigo se unió a la sala!",
            chatHeading: "💬 Chat de Amigos Detectives",
            chatDisclaimer: "Chat de demostración simulado — no conectado a jugadores reales.",
            chatSend: "Enviar",
            chatWelcomeMsg: "¡Bienvenidos a la red, detectives! ¿Alguna pista nueva sobre el último caso?",
            chatInputPlaceholder: "Escribe un mensaje...",
            notesPlaceholder: "Escribe tus pistas aquí...",
            roomCodePlaceholder: "Ingresa el código de sala (ej. CASE-99)",
            answerLabel: "Respuesta:",
            selectSuspectAlert: "Selecciona un sospechoso antes de confirmar la acusación.",
            resultSolvedTitle: "¡Caso resuelto con éxito!",
            resultSolvedDesc: "¡Buen trabajo, detective! Identificaste correctamente al culpable.",
            resultWrongTitle: "¡Acusación equivocada!",
            resultWrongDesc: "Acusaste a una persona inocente. El verdadero culpable escapó.",
            caseExplanationLabel: "Explicación del caso:",
            micNotSupported: "La grabación de voz no es compatible con este dispositivo.",
            micPermissionDenied: "Se denegó el acceso al micrófono. Permite el uso del micrófono en la configuración del navegador.",
            micTitle: "Nota de voz (toca para grabar, toca de nuevo para enviar)",
            micListening: "Grabando… toca para enviar",
            micNoFriend: "Conéctate primero con un amigo para enviar una nota de voz.",
            callBtnTitle: "Llamada de voz",
            callActive: "🔊 Llamada de voz conectada",
            callConnecting: "📞 Llamando a tu amigo…",
            callEnded: "Llamada finalizada.",
            roomEnterCode: "Por favor, introduce un código de sala válido.",
            roomConnecting: "Conectando a la sala {code} mediante red segura...",
            roomRetrying: "Sala no encontrada todavía — reintentando... ({n} intento(s) restante(s))",
            roomConnected: "¡Conectado con éxito a la sala {code}! Listo para el reto.",
            botName: "Inspector John",
            botReplies: [
                "Asegúrate de inspeccionar toda la evidencia física con cuidado.",
                "Revisa las coartadas de los sospechosos en busca de contradicciones sutiles.",
                "¿Has revisado las notas personales de la víctima?",
                "¡Sigue investigando, detective! La verdad está en los detalles."
            ],
            cases: [
                {
                    "tag": "Caso de Asesinato",
                    "difficulty": "easy",
                    "title": "Silencio en la Mansión",
                    "brief": "El acaudalado comerciante Karim Ouazzani fue encontrado asesinado en su estudio privado dentro de su mansión a causa de una puñalada mortal. La puerta estaba cerrada por dentro y la ventana abierta.",
                    "victim": "Víctima: Karim Ouazzani (54) - Empresario.",
                    "culprit": "Yahya Alami",
                    "evidence": [
                        {"name": "Daga de Plata", "desc": "Limpiada cuidadosamente, dejando una huella digital parcial que coincide con su socio Yahya."},
                        {"name": "Carta Financiera Rota", "desc": "Prueba que la víctima debía una gran suma de dinero a su socio comercial Yahya."},
                        {"name": "Huella Embarrada", "desc": "Impresión de zapato grande cerca de la ventana que coincide con el barro del jardín de la mansión."},
                        {"name": "Reloj de Pulsera Detenido", "desc": "Detenido a las 9:42 PM, la hora exacta del asesinato."},
                        {"name": "Registro de Cámaras de Seguridad", "desc": "Muestra movimiento sospechoso en el pasillo que conduce al estudio."}
                    ],
                    "suspects": [
                        {"name": "Salma Ouazzani", "role": "Esposa", "alibi": "Durmiendo en su habitación desde las 9:00 PM.", "qs": [{"q": "¿Escuchaste algún ruido?", "a": "No, estaba completamente silencioso."}, {"q": "¿Dónde estabas a esa hora?", "a": "En mi habitación durmiendo sola."}, {"q": "¿Tuvieron disputas financieras?", "a": "No tuve participación en su dinero."}]},
                        {"name": "Yahya Alami", "role": "Socio Comercial", "alibi": "Fumando un cigarrillo en el balcón trasero.", "qs": [{"q": "¿Cuál era la disputa financiera?", "a": "Solo una asociación comercial normal."}, {"q": "¿Por qué tu huella estaba en la daga?", "a": "Estuve allí por la mañana por trabajo."}, {"q": "¿Dónde estabas a las 9:40 PM?", "a": "En el balcón fumando."}]},
                        {"name": "Fatima", "role": "Empleada Doméstica", "alibi": "Descubrió el cuerpo por la mañana mientras limpiaba.", "qs": [{"q": "¿Cuándo abriste el estudio?", "a": "A las 8:00 AM."}, {"q": "¿Estaba la puerta cerrada?", "a": "Sí, cerrada por dentro."}, {"q": "¿Notaste algo inusual?", "a": "La ventana estaba ligeramente abierta."}]},
                        {"name": "Omar", "role": "Guardaespaldas", "alibi": "De patrulla alrededor de los muros perimetrales.", "qs": [{"q": "¿Entró algún intruso?", "a": "Las puertas principales estaban cerradas."}, {"q": "¿Por qué no escuchaste nada?", "a": "El estudio está insonorizado y el viento era fuerte."}, {"q": "¿Cuáles eran tus deberes?", "a": "Patrullar cada hora."}]}
                    ],
                    "explain": "Yahya Alami es el culpable: Admitió estar cerca del balcón. Su huella digital parcial en la daga y las huellas embarradas coinciden con el sendero del jardín debido a la gran disputa de deudas.",
                    "hints": ["Pista 1: Inspecciona la evidencia física dejada en la daga de plata y el sendero del jardín fuera de la ventana abierta.", "Pista 2: Revisa quién tenía una disputa financiera importante y un conflicto de deudas con la víctima.", "Pista 3: La coartada del balcón de Yahya Alami se desmorona al coincidir con su huella digital parcial en el arma homicida y las huellas embarradas."]
                },
                {
                    "tag": "Caso de Robo",
                    "difficulty": "easy",
                    "title": "Gema Ojo del Nilo",
                    "brief": "El raro diamante azul \"Ojo del Nilo\" desapareció de su vitrina de exposición en el Museo Nacional la noche de la inauguración sin romper ninguna cerradura.",
                    "victim": "Ubicación: Museo Nacional - Gema valorada en 10 Millones de dólares.",
                    "culprit": "Maher el Curador",
                    "evidence": [
                        {"name": "Guante de Seda Cortado", "desc": "Encontrado al lado de la vitrina de exposición."},
                        {"name": "Tarjeta de Acceso VIP", "desc": "Lleva huellas dactilares ocultas pertenecientes al curador."},
                        {"name": "Metraje de Cámara", "desc": "Muestra a una figura con abrigo negro saliendo del salón apresuradamente."},
                        {"name": "Hebra de Cabello", "desc": "Encontrada enganchada en el marco de la vitrina."},
                        {"name": "Llaves Maestras Coincidentes", "desc": "Juego de llaves maestras perteneciente al oficial administrativo."}
                    ],
                    "suspects": [
                        {"name": "Raid el Director", "role": "Director del Museo", "alibi": "Dando la bienvenida a invitados VIP en el salón principal.", "qs": [{"q": "¿Quién tiene las llaves?", "a": "Solo yo y seguridad."}, {"q": "¿Dónde estabas durante el robo?", "a": "Con los invitados VIP."}, {"q": "¿Notaste la pérdida inmediatamente?", "a": "No, la descubrimos más tarde."}]},
                        {"name": "Sanaa Seguridad", "role": "Jefa de Seguridad", "alibi": "Monitoreando las cámaras de seguridad en la sala de control trasera.", "qs": [{"q": "¿Por qué se cortaron las cámaras durante 1 min?", "a": "Un fallo repentino de energía."}, {"q": "¿Caminaste por el salón?", "a": "Solo durante la patrulla de rutina."}, {"q": "¿Quién entró después del cierre?", "a": "Nadie."}]},
                        {"name": "Maher el Curador", "role": "Curador y Restaurador", "alibi": "Restaurando pinturas en el ala este.", "qs": [{"q": "¿Por qué se encontró tu guante?", "a": "Lo usé mientras limpiaba las exhibiciones."}, {"q": "¿Tienes acceso?", "a": "Sí, como parte de mi trabajo."}, {"q": "¿Dónde estabas a las 10 PM?", "a": "En el taller solo."}]},
                        {"name": "Mona Periodista", "role": "Reportera de Eventos", "alibi": "Entrevistando a los invitados por la habitación.", "qs": [{"q": "¿Fotografiaste la gema?", "a": "Sí, al principio de la noche."}, {"q": "¿Cuándo te fuiste?", "a": "Poco antes del incidente."}, {"q": "¿Viste a alguien sospechoso?", "a": "Vi a alguien usando un abrigo."}]}
                    ],
                    "explain": "Maher el Curador robó el diamante usando el acceso de restauración y dejó fibras de guantes de seda cerca de la vitrina de cristal.",
                    "hints": ["Pista 1: Revisa el guante de seda cortado dejado justo al lado de la vitrina de exposición.", "Pista 2: Concéntrate en quién tenía acceso de restauración profesional para manipular las exhibiciones del museo sin forzar cerraduras.", "Pista 3: La excusa de Maher el Curador no explica por qué se encontraron las fibras de sus guantes y sus huellas de acceso en la escena."]
                },
                {
                    "tag": "Desaparición",
                    "difficulty": "easy",
                    "title": "¿Dónde está Yasmine?",
                    "brief": "La estudiante universitaria Yasmine Alaoui desapareció hace 3 días. Su coche fue encontrado estacionado cerca del bosque oscuro con las llaves puestas en el encendido.",
                    "victim": "Persona Desaparecida: Yasmine Alaoui (22).",
                    "culprit": "Ziad el Ex",
                    "evidence": [
                        {"name": "Teléfono Destruido", "desc": "Encontrado en la carretera; la última llamada fue a su ex prometido."},
                        {"name": "Amenaza Escrita a Mano", "desc": "Nota amenazante escrita a mano dentro de su bolso."},
                        {"name": "Impresión de Huella de Neumático", "desc": "Marcas de neumáticos deportivos raros que coinciden con el coche de su compañero de universidad."},
                        {"name": "Taza de Café", "desc": "Aún tibia en el asiento del pasajero del coche."},
                        {"name": "Diario Personal", "desc": "Menciona su miedo constante de que alguien la esté acosando."}
                    ],
                    "suspects": [
                        {"name": "Ziad el Ex", "role": "Ex Prometido", "alibi": "En el trabajo todo el día y no la vio.", "qs": [{"q": "¿Cuándo estuviste por última vez en su coche?", "a": "Hace aproximadamente una semana."}, {"q": "¿Por qué amenazarla en la carta?", "a": "Fue un malentendido del pasado."}, {"q": "¿Dónde estaba tu coche esa noche?", "a": "En el garaje de mi casa."}]},
                        {"name": "Sami Compañero", "role": "Compañero Universitario", "alibi": "Estudiando en la biblioteca pública.", "qs": [{"q": "¿Cuál era su relación?", "a": "Solo compañeros de universidad."}, {"q": "¿Por qué coinciden las huellas de los neumáticos?", "a": "Muchos estudiantes poseen ese modelo de neumático."}, {"q": "¿Dónde estabas el martes?", "a": "En la biblioteca hasta las 8 PM."}]},
                        {"name": "Nawal Vecina", "role": "Vecina de Residencia", "alibi": "Viajando para visitar a su familia en el pueblo vecino.", "qs": [{"q": "¿Escuchaste una discusión?", "a": "Nunca, su lugar era tranquilo."}, {"q": "¿Cuándo regresaste?", "a": "A la mañana siguiente."}, {"q": "¿Viste a Ziad cerca del apartamento?", "a": "Sí, dos veces la semana pasada."}]},
                        {"name": "Dr. Tariq", "role": "Profesor", "alibi": "Calificando exámenes en la universidad.", "qs": [{"q": "¿Faltó a clase?", "a": "Sí, un día antes de desaparecer."}, {"q": "¿Tuvo problemas?", "a": "Parecía ansiosa últimamente."}, {"q": "¿Cómo fue su desempeño?", "a": "Diligente y trabajadora."}]}
                    ],
                    "explain": "Ziad el Ex es el responsable: Las pistas de neumáticos deportivos y las declaraciones contradictorias sobre amenazas pasadas lo vinculan directamente.",
                    "hints": ["Pista 1: Inspecciona los registros del teléfono destruido y la carta amenazante encontrada en su bolso.", "Pista 2: Observa de cerca las impresiones de huellas de neumáticos encontradas cerca del bosque oscuro donde se abandonó su coche.", "Pista 3: Ziad el Ex dio declaraciones contradictorias sobre su paradero y las amenazas pasadas contra la víctima."]
                },
                {
                    "tag": "Envenenamiento",
                    "difficulty": "easy",
                    "title": "Veneno en el Vaso",
                    "brief": "El destacado crítico literario Ramzi Hamid murió inmediatamente después de sorber jugo en su ceremonia de homenaje dentro de la Ópera.",
                    "victim": "Víctima: Ramzi Hamid (61).",
                    "culprit": "Samer el Escritor Rival",
                    "evidence": [
                        {"name": "Botella de Jugo Contaminada", "desc": "Contiene rastros de cianuro letal."},
                        {"name": "Servilleta Doblez", "desc": "Tiene residuo de polvo tóxico y una huella digital parcial."},
                        {"name": "Programa del Evento", "desc": "Muestra el horario exacto de servicio de bebidas."},
                        {"name": "Vaso de Vidrio", "desc": "Huellas de la víctima y sustancia química extraña en el borde."},
                        {"name": "Artículo de Crítica Dura", "desc": "Una aguda reseña escrita por la víctima atacando a un escritor amateur."}
                    ],
                    "suspects": [
                        {"name": "Mona Anfitriona", "role": "Anfitriona del Evento", "alibi": "Sirvió bebidas según las instrucciones de los organizadores.", "qs": [{"q": "¿Quién preparó los vasos?", "a": "Yo misma y el asistente de barra."}, {"q": "¿Dejaste la mesa?", "a": "Por un minuto para buscar hielo."}, {"q": "¿Viste a alguien acercarse?", "a": "Vi al joven escritor cerca."}]},
                        {"name": "Samer el Escritor Rival", "role": "Escritor Rival", "alibi": "Hablando con el jefe de la editorial toda la noche.", "qs": [{"q": "¿Por qué el crítico te atacó?", "a": "Arruinó mi última novela injustamente."}, {"q": "¿ Pusiste algo en la bebida?", "a": "Dios libre, soy un profesional."}, {"q": "¿Dónde estabas en el incidente?", "a": "Frente al escenario de la ceremonia."}]},
                        {"name": "Laila Ramzi", "role": "Hija", "alibi": "Presentando premios en nombre de su padre.", "qs": [{"q": "¿Estaban en buenos términos?", "a": "Por supuesto, él es mi padre."}, {"q": "¿Quién hereda la riqueza?", "a": "Yo y una fundación benéfica."}, {"q": "¿Sospechas de alguien?", "a": "El escritor Samer lo amenazó."}]},
                        {"name": "Essam Guardia", "role": "Guardia de Seguridad", "alibi": "Protegiendo la entrada principal de la sala.", "qs": [{"q": "¿Quién entró por la puerta trasera?", "a": "Solo el personal de catering."}, {"q": "¿Sabes algo sobre el cianuro?", "a": "No sé nada sobre químicos."}, {"q": "¿Las cámaras están funcionando?", "a": "Sí, grabando todo."}]}
                    ],
                    "explain": "Samer el Escritor Rival se vengó por su reputación arruinada y envenenó el vaso durante la breve ausencia de la anfitriona.",
                    "hints": ["Pista 1: Revisa la botella de jugo contaminada y el residuo de polvo tóxico en la servilleta.", "Pista 2: Revisa el artículo de crítica dura escrito por la víctima atacando a un escritor amateur.", "Pista 3: Samer el Escritor Rival tenía un poderoso motivo de venganza y la oportunidad cuando la anfitriona se alejó."]
                },
                {
                    "tag": "Caso de Asesinato",
                    "difficulty": "easy",
                    "title": "El Enigma de la Habitación Cerrada",
                    "brief": "El empresario Mamdouh Sabri fue encontrado apuñalado dentro de su habitación de hotel. Todas las puertas y ventanas estaban bien cerradas desde el interior sin salida.",
                    "victim": "Víctima: Mamdouh Sabri (48).",
                    "culprit": "Khaled Mantenimiento",
                    "evidence": [
                        {"name": "Aire Acondicionado", "desc": "Atascado con una cuña de metal para retrasar el mecanismo de bloqueo automático de la puerta."},
                        {"name": "Pistola de Salva", "desc": "Arrojada desde la ventana del piso superior."},
                        {"name": "Hilo de Pescar Delgado", "desc": "Hilo transparente largo utilizado para el truco de la habitación cerrada."},
                        {"name": "Registro del Hotel", "desc": "Muestra que solo el personal de mantenimiento registró acceso."},
                        {"name": "Diario de la Víctima", "desc": "Se refiere a intentos de chantaje de su socio comercial."}
                    ],
                    "suspects": [
                        {"name": "Bahgat Socio", "role": "Socio Comercial", "alibi": "Cenando con clientes en la planta baja.", "qs": [{"q": "¿Qué hay del chantaje?", "a": "Solo disputas comerciales normales."}, {"q": "¿Cómo entraste a la habitación?", "a": "Nunca entré."}, {"q": "¿Tienes llave de repuesto?", "a": "Solo la administración del hotel."}]},
                        {"name": "Nadine Secretaria", "role": "Asistente de la Víctima", "alibi": "En la habitación contigua preparando archivos de viaje.", "qs": [{"q": "¿Escuchaste una discusión?", "a": "Sonido tenue y luego silencio."}, {"q": "¿Cuándo lo viste con vida por última vez?", "a": "Una hora antes del incidente."}, {"q": "¿Quién lo visitó por la noche?", "a": "Trabajador de mantenimiento."}]},
                        {"name": "Khaled Mantenimiento", "role": "Técnico de Hotel", "alibi": "Reparó la bombilla eléctrica y se fue.", "qs": [{"q": "¿Por qué el juego de herramientas quedó allí?", "a": "Lo dejé por error en la mesa."}, {"q": "¿Manipulaste el aire acondicionado?", "a": "Nunca, solo trabajé en las luces."}, {"q": "¿Te pidió algo?", "a": "Pidió total silencio."}]},
                        {"name": "Raouf Hermano", "role": "Hermano de la Víctima", "alibi": "Durmiendo en su habitación del 3er piso.", "qs": [{"q": "¿Disputa de herencia?", "a": "Repartimos todo amigablemente."}, {"q": "¿Cómo entrar a la habitación cerrada?", "a": "Yo no estaba allí."}, {"q": "¿Qué pasa con el hilo?", "a": "No sé nada de trucos."}]}
                    ],
                    "explain": "Khaled el técnico de Mantenimiento usó hilo y el truco del aire acondicionado para simular una habitación cerrada desde adentro después de cometer el crimen.",
                    "hints": ["Pista 1: Examina la unidad de aire acondicionado y el hilo de pescar delgado encontrado en la habitación.", "Pista 2: Revisa los registros de acceso del hotel y las herramientas del técnico dejadas atrás.", "Pista 3: Khaled el trabajador de Mantenimiento usó una cuña de metal y un truco de hilo a través de la unidad de aire acondicionado para simular la habitación cerrada."]
                },
                {
                    "tag": "Caso de Robo",
                    "difficulty": "medium",
                    "title": "Obra Maestra Robada",
                    "brief": "Una pintura original de un artista de renombre mundial fue robada de la Galería Internacional, dejando una réplica exacta colgando en su lugar.",
                    "victim": "Ubicación: Galería de Arte Internacional - Valor de 5 Millones de dólares.",
                    "culprit": "Fouad el Pintor",
                    "evidence": [
                        {"name": "Marco de Madera Vacío", "desc": "Encontrado escondido detrás del almacenamiento de herramientas."},
                        {"name": "Pincel Profesional", "desc": "Lleva formulación de pintura al óleo fresca."},
                        {"name": "Huella Digital Clara", "desc": "En la pared detrás de la pintura réplica falsa."},
                        {"name": "Boleto de Tren", "desc": "Fechado la noche del robo con dirección a la frontera."},
                        {"name": "Registro de Cámara de Seguridad", "desc": "Desactivado exactamente durante 10 minutos."}
                    ],
                    "suspects": [
                        {"name": "Fouad el Pintor", "role": "Artista y Falsificador", "alibi": "Pintando un retrato en casa toda la noche.", "qs": [{"q": "¿Por qué tienes las mismas pinturas al óleo?", "a": "Soy artista, las uso."}, {"q": "¿Visitaste la galería?", "a": "Sí, para ver las exhibiciones."}, {"q": "¿Dónde estabas a las 2 AM?", "a": "En mi estudio privado."}]},
                        {"name": "Hanan Crítica de Arte", "role": "Crítica de Arte", "alibi": "Escribiendo un artículo de prensa en la sala de prensa.", "qs": [{"q": "¿Notaste la falsificación?", "a": "No, la réplica parecía auténtica."}, {"q": "¿Quién tiene habilidades para copiar?", "a": "Fouad obviamente."}, {"q": "¿Cuándo te fuiste?", "a": "Alrededor de la medianoche."}]},
                        {"name": "Jamal Guardia", "role": "Guardia de la Galería", "alibi": "En caminata de seguridad en el piso superior.", "qs": [{"q": "¿Por qué falló la cámara?", "a": "Falla de corte de energía."}, {"q": "¿Viste a alguien extraño?", "a": "Nadie en absoluto."}, {"q": "¿Cuándo comenzó la patrulla?", "a": "A las 11 PM."}]},
                        {"name": "Sahar Coleccionista", "role": "Coleccionista de Arte", "alibi": "En fiesta de cena con inversores.", "qs": [{"q": "¿Oferta para comprar la pintura?", "a": "El museo se negó a vender."}, {"q": "¿Dónde a la hora del robo?", "a": "En restaurante elegante."}, {"q": "¿Sospechas de alguien?", "a": "Fouad estaba obsesionado con ella."}]}
                    ],
                    "explain": "Fouad el Pintor usó su habilidad de falsificación para cambiar la pintura original por su réplica, dejando caer su pincel personalizado.",
                    "hints": ["Pista 1: Inspecciona el pincel profesional dejado atrás que lleva pintura al óleo fresca.", "Pista 2: Observa la huella digital en la pared directamente detrás de la pintura réplica falsa.", "Pista 3: Fouad el Pintor es el único sospechoso que posee las habilidades precisas de falsificación y formulación de pintura necesarias para el intercambio."]
                },
                {
                    "tag": "Caso de Asesinato",
                    "difficulty": "medium",
                    "title": "Asesinato en Laboratorio a Medianoche",
                    "brief": "El químico Dr. Murad fue asesinado en su laboratorio cerrado con llave. Su código final de PC escrito apunta hacia su asesino.",
                    "victim": "Víctima: Dr. Murad (55) - Químico.",
                    "culprit": "Hani Asistente Principal",
                    "evidence": [
                        {"name": "Vaso de Precipitado Destruido", "desc": "Contiene residuos de toxinas de agentes nerviosos."},
                        {"name": "Computadora Portátil", "desc": "Cifrado escrito final que coincide con el nombre del asistente principal."},
                        {"name": "Guante de Goma", "desc": "Guante de goma roto encontrado cerca de la ventana del laboratorio."},
                        {"name": "Informe Confidencial", "desc": "Revela el robo de investigación química crítica."},
                        {"name": "Registro de Tarjeta de Acceso a Puerta", "desc": "Entrada única utilizando acceso de tarjeta de acceso válida."}
                    ],
                    "suspects": [
                        {"name": "Dr. Samir", "role": "Colega de Investigación", "alibi": "Realizando experimentos en el edificio cercano.", "qs": [{"q": "Naturaleza de la investigación robada?", "a": "Fórmulas medicinales avanzadas."}, {"q": "¿Por qué entraste en su registro?", "a": "Buscando artículo científico."}, {"q": "¿Dónde en el momento del crimen?", "a": "En mi laboratorio privado."}]},
                        {"name": "Nada Estudiante", "role": "Asistente de Laboratorio", "alibi": "Salió temprano para trabajar en la tesis.", "qs": [{"q": "¿Cuándo te fuiste?", "a": "A las 7 PM."}, {"q": "¿Quién tenía la tarjeta de acceso nocturna?", "a": "Dr. Murad y Dr. Samir."}, {"q": "¿Estaba preocupado?", "a": "Recibiendo llamadas telefónicas amenazantes."}]},
                        {"name": "Hani Asistente Principal", "role": "Asistente Senior", "alibi": "En casa con la familia.", "qs": [{"q": "¿Por qué la PC escribió tu nombre?", "a": "Una broma o acusación falsa."}, {"q": "¿Acceso a la investigación?", "a": "Sí, acceso completo."}, {"q": "¿Dónde toda la noche?", "a": "En casa con mi familia."}]},
                        {"name": "Souad Investigadora", "role": "Académica Visitante", "alibi": "En conferencia científica fuera de la ciudad.", "qs": [{"q": "¿Cuándo regresaste a la ciudad?", "a": "A la mañana siguiente."}, {"q": "¿Tuviste disputas con él?", "a": "Rechazó la publicación de mi artículo."}, {"q": "¿Conoces a Hani?", "a": "Sí, colega de trabajo."}]}
                    ],
                    "explain": "Hani Asistente Principal mató al Dr. Murad para robar la investigación, sin darse cuenta de que la víctima escribió su identificación de cifrado.",
                    "hints": ["Pista 1: Examina el vaso de precipitados roto con toxina nerviosa y la computadora portátil.", "Pista 2: Revisa quién tenía acceso completo a la investigación y autorización para entrar al laboratorio.", "Pista 3: El código de PC escrito final de la víctima apunta explícitamente a Hani el Asistente Principal."]
                },
                {
                    "tag": "Caso de Asesinato",
                    "difficulty": "medium",
                    "title": "Asesinato en Expreso",
                    "brief": "Un agente de inteligencia retirado murió dentro del vagón de un tren cama a causa de un disparo con silenciador en un túnel oscuro.",
                    "victim": "Víctima: Kamal Eddine (62).",
                    "culprit": "Salim Misterioso",
                    "evidence": [
                        {"name": "Supresor de Metal", "desc": "Arrojado a las vías durante el cruce del túnel."},
                        {"name": "Boleto Falsificado", "desc": "Boleto de identidad falsa sentado en el siguiente coche."},
                        {"name": "Archivo Secreto Filtrado", "desc": "Desaparecido del maletín personal de la víctima."},
                        {"name": "Rastros de Tinta Invisible", "desc": "Encontrados en los dedos del sospechoso #2."},
                        {"name": "Registro de Movimiento de Pasajeros", "desc": "Muestra movimiento sospechoso entre los vagones."}
                    ],
                    "suspects": [
                        {"name": "Maher Periodista", "role": "Pasajero del Vagón", "alibi": "Escribiendo artículo en computadora portátil todo el viaje.", "qs": [{"q": "¿Destino?", "a": "Ciudad capital para entrevista de trabajo."}, {"q": "¿Escuchaste sonido de disparo?", "a": "Solo fricción de rueda de tren."}, {"q": "¿Por qué estás nervioso?", "a": "No me gustan los viajes largos en tren."}]},
                        {"name": "Salim Misterioso", "role": "Empresario", "alibi": "Durmiendo en camarote privado cerrado con llave.", "qs": [{"q": "¿Razón del viaje repentino?", "a": "Negocio urgente."}, {"q": "¿Por qué tinta en los dedos?", "a": "Firmando contratos con bolígrafo líquido."}, {"q": "¿Conoces a la víctima?", "a": "Nunca lo vi en mi vida."}]},
                        {"name": "Rasha Asistente", "role": "Asistidora de Tren", "alibi": "Sirviendo bebidas en el vagón delantero.", "qs": [{"q": "¿Quién se movió entre coches?", "a": "Una persona con abrigo negro."}, {"q": "¿Luces apagadas en el túnel?", "a": "No, oscuridad normal del túnel."}, {"q": "¿Notaste algo inusual?", "a": "Olor tenue a pólvora."}]},
                        {"name": "Jehad Guardia", "role": "Escolta Privada", "alibi": "Protegiendo la puerta de carga trasera.", "qs": [{"q": "¿Alguien pasó junto a ti?", "a": "Nadie cruzó la puerta trasera."}, {"q": "¿Llevas arma de fuego?", "a": "Sí, arma lateral oficial con licencia."}, {"q": "¿Cuándo empezó el turno?", "a": "Desde la salida."}]}
                    ],
                    "explain": "Salim Misterioso llevó a cabo el asesinato silencioso utilizando un supresor en el túnel bajo una identidad falsa.",
                    "hints": ["Pista 1: Revisa el supresor de metal arrojado a las vías y los registros de movimiento de pasajeros.", "Pista 2: Observa los rastros de tinta invisible y el boleto falsificado encontrado en el siguiente coche.", "Pista 3: Salim Misterioso viajó bajo una identidad falsa y ejecutó el disparo silencioso en el túnel."]
                },
                {
                    "tag": "Caso de Robo",
                    "difficulty": "medium",
                    "title": "Robo a la Bóveda",
                    "brief": "Millones desaparecieron de la caja fuerte de la compañía nacional de cables sin entrada forzada; la llave digital estaba solo con el Director.",
                    "victim": "Compañía Nacional de Cables - Pérdida de 2 Millones de dólares.",
                    "culprit": "Ziad Contador",
                    "evidence": [
                        {"name": "Clip de Cámara Oculta", "desc": "Muestra a una persona ingresando el código PIN cuidadosamente."},
                        {"name": "Nota de Papel", "desc": "Contiene pistas para la contraseña anterior."},
                        {"name": "Huella Parcial", "desc": "En el botón de envío del teclado de la bóveda."},
                        {"name": "Tarjeta de Acceso Electrónica", "desc": "Tarjeta de acceso de respaldo faltante del cajón."},
                        {"name": "Factura de Deuda", "desc": "Pertenece al contador de la empresa."}
                    ],
                    "suspects": [
                        {"name": "Saleh Director", "role": "Director de la Compañía", "alibi": "En reunión de junta directiva toda la mañana.", "qs": [{"q": "¿Quién conoce el PIN?", "a": "Solo yo y el contador."}, {"q": "¿Perdiste la tarjeta de respaldo?", "a": "No, en mi bolsillo siempre."}, {"q": "¿De quién sospechas?", "a": "El contador tiene deudas pesadas."}]},
                        {"name": "Fatima Secretaria", "role": "Secretaria Ejecutiva", "alibi": "Programando citas en el vestíbulo.", "qs": [{"q": "¿Tienes acceso a la bóveda?", "a": "No, nunca."}, {"q": "¿Quién entró a la oficina?", "a": "Contador y personal de limpieza."}, {"q": "¿Notaste algo?", "a": "La puerta estaba ligeramente abierta."}]},
                        {"name": "Ziad Contador", "role": "Contador Financiero", "alibi": "Preparando la auditoría anual en la oficina.", "qs": [{"q": "¿Por qué deudas pesadas?", "a": "Problemas familiares ahora resueltos."}, {"q": "¿Cómo sabes el código PIN?", "a": "Parte del deber financiero a veces."}, {"q": "¿Dónde ayer al mediodía?", "a": "En la sucursal bancaria."}]},
                        {"name": "Adel Seguridad", "role": "Guardia del Edificio", "alibi": "Protegiendo la entrada principal.", "qs": [{"q": "¿Alguien se fue con bolsas?", "a": "Solo personal regular saliendo."}, {"q": "¿CCTV funcional?", "a": "Trabajando perfectamente."}, {"q": "¿Inicio de turno?", "a": "Temprano en la mañana."}]}
                    ],
                    "explain": "Ziad Contador aprovechó el motivo de deuda y el conocimiento del PIN para robar el dinero de la bóveda usando la tarjeta de respaldo.",
                    "hints": ["Pista 1: Examina el clip de la cámara oculta que muestra la entrada del PIN y la tarjeta de acceso de respaldo faltante.", "Pista 2: Revisa la factura de deuda financiera perteneciente al personal.", "Pista 3: Ziad el Contador tenía tanto el motivo financiero (deudas pesadas) como el conocimiento del PIN para vaciar la bóveda."]
                },
                {
                    "tag": "Caso de Asesinato",
                    "difficulty": "medium",
                    "title": "Crimen en la Playa de Andalucía",
                    "brief": "Pescador encontrado muerto en la arena al amanecer al lado de un pequeño bote con el motor en marcha.",
                    "victim": "Víctima: Ibrahim Pescador (50).",
                    "culprit": "Hamza Joven",
                    "evidence": [
                        {"name": "Remo de Madera Roto", "desc": "Ensangrentado con marcas de pelea."},
                        {"name": "Red de Pesca Rota", "desc": "Dispersa cerca de la línea del agua."},
                        {"name": "Reloj de Pulsera Barato", "desc": "Pertenece a un joven de la aldea local."},
                        {"name": "Huellas en la Arena", "desc": "Conduciendo hacia la carretera costera."},
                        {"name": "Caja de Aparejos Abierta", "desc": "Herramientas afiladas faltantes."}
                    ],
                    "suspects": [
                        {"name": "Hamza Joven", "role": "Joven Desempleado", "alibi": "Durmiendo en casa toda la noche.", "qs": [{"q": "¿Por qué se encontró el reloj?", "a": "Debo haberlo perdido nadando."}, {"q": "¿Tuviste discusiones?", "a": "Peleamos por los derechos de pesca."}, {"q": "¿Dónde a las 4 AM?", "a": "En mi cama."}]},
                        {"name": "Mousa Pescador", "role": "Pescador Rival", "alibi": "Pesca nocturna en el mar.", "qs": [{"q": "¿Hora de regreso?", "a": "Al amanecer."}, {"q": "¿Viste a Hamza cerca?", "a": "Lo vi cerca del bote."}, {"q": "¿Relación con la víctima?", "a": "Competencia de trabajo justa."}]},
                        {"name": "Salem Dueño de Café", "role": "Comerciante", "alibi": "Abriendo cafetería.", "qs": [{"q": "¿Escuchaste gritos?", "a": "Solo olas del océano."}, {"q": "¿Quién visita la playa de noche?", "a": "Pescadores y jóvenes."}, {"q": "¿Viste a extraños?", "a": "Nadie."}]},
                        {"name": "Khadija Esposa", "role": "Ama de Casa", "alibi": "En casa con los niños.", "qs": [{"q": "¿Cuándo se fue?", "a": "Medianoche como de costumbre."}, {"q": "¿Tuvo problemas?", "a": "Disputa financiera con Hamza."}, {"q": "¿Dejó nota?", "a": "No."}]}
                    ],
                    "explain": "Hamza Joven peleó por los lugares de pesca y golpeó al pescador con un remo, dejando caer su reloj.",
                    "hints": ["Pista 1: Inspecciona el remo de madera roto y el reloj de pulsera barato encontrado en la arena.", "Pista 2: Revisa las huellas que se alejan de la playa hacia la carretera costera.", "Pista 3: Hamza Joven tuvo disputas continuas sobre los derechos de pesca y dejó caer su reloj personal durante la lucha violenta."]
                },
                {
                    "tag": "Desaparición",
                    "difficulty": "hard",
                    "title": "Pintura Antigua Desaparecida",
                    "brief": "Pintura rara desapareció del antiguo palacio real sin activar el sistema de alarma.",
                    "victim": "Palacio del Príncipe Difunto - Obra de arte rara.",
                    "culprit": "Maher Decorador",
                    "evidence": [
                        {"name": "Herramienta de Derivación de Alarma", "desc": "Dispositivo de derivación de alta tecnología."},
                        {"name": "Guante de Tela", "desc": "Lleva polvo viejo del palacio."},
                        {"name": "Plano del Palacio", "desc": "Encontrado en el teléfono del decorador."},
                        {"name": "Tela Rota", "desc": "Rasgada de la cortina de la habitación."},
                        {"name": "Registro de Visitantes", "desc": "Registra la visita nocturna del diseñador de interiores."}
                    ],
                    "suspects": [
                        {"name": "Príncipe Khalid", "role": "Heredero del Palacio", "alibi": "Viaje de negocios al extranjero.", "qs": [{"q": "¿Quién tiene acceso?", "a": "Yo y el equipo de mantenimiento."}, {"q": "¿La pintura está asegurada?", "a": "Sí por millones."}, {"q": "¿Sospechas del personal?", "a": "Nuevo diseñador de interiores."}]},
                        {"name": "Maher Decorador", "role": "Experto en Restauración", "alibi": "Midiendo paredes para renovación.", "qs": [{"q": "¿Por qué poseer planos?", "a": "Requerido para el trabajo de diseño."}, {"q": "¿Derivar alarma?", "a": "Solo revisé cables dañados."}, {"q": "¿Dónde está la pintura?", "a": "No sé nada."}]},
                        {"name": "Souad Historiadora", "role": "Archivista", "alibi": "Catalogando elementos en el archivo.", "qs": [{"q": "¿Última visita a la habitación?", "a": "La semana pasada."}, {"q": "¿Notaste cambios?", "a": "Todo en su lugar."}, {"q": "¿A quién le gusta el arte?", "a": "El príncipe mismo."}]},
                        {"name": "Essam Guardia Principal", "role": "Jefe de Guardia", "alibi": "Supervisando las puertas exteriores.", "qs": [{"q": "¿Detectaste intruso?", "a": "CCTV no mostró a nadie."}, {"q": "¿Alarma activada?", "a": "Cortada por minutos y luego reanudada."}, {"q": "¿Quién desarmó el sistema?", "a": "Un experto."}]}
                    ],
                    "explain": "Maher Decorador utilizó el acceso a los planos y habilidades tecnológicas para desarmar la alarma y robar la pintura.",
                    "hints": ["Pista 1: Revisa la herramienta de derivación de alarma y los planos del palacio encontrados en el teléfono del decorador.", "Pista 2: Revisa el registro de visitantes que muestra el acceso nocturno del diseñador de interiores.", "Pista 3: Maher Decorador usó su acceso a los planos y artefactos técnicos para desarmar la alarma y robar la pintura."]
                },
                {
                    "tag": "Caso de Asesinato",
                    "difficulty": "hard",
                    "title": "Asesinato de Famoso Actor",
                    "brief": "Un actor prominente fue encontrado muerto en el camerino del teatro tras la actuación final en el escenario.",
                    "victim": "Víctima: Rafat Rami (45).",
                    "culprit": "Bassem Suplente",
                    "evidence": [
                        {"name": "Guión Roto", "desc": "Notas escritas duras sobre el papel principal."},
                        {"name": "Cuerda de Atrezzo", "desc": "Atrezzo falso convertido en verdadera herramienta de estrangulamiento."},
                        {"name": "Huella de Zapato de Madera", "desc": "Detrás del pasillo oscuro del backstage."},
                        {"name": "Registros de Llamadas", "desc": "Amenazas repetidas de un actor suplente menor."},
                        {"name": "Disfraz de Escena", "desc": "Desechado en el cubo de basura."}
                    ],
                    "suspects": [
                        {"name": "Salaf Actriz", "role": "Actriz Principal", "alibi": "Celebrando con fans en la cafetería.", "qs": [{"q": "¿Relación con él?", "a": "Rivalidad estrictamente artística."}, {"q": "¿Discutieron?", "a": "Competimos por el puesto protagónico."}, {"q": "¿Dónde a la hora del asesinato?", "a": "Con fans en la sala."}]},
                        {"name": "Sami Director", "role": "Director de Escena", "alibi": "Comprobando la iluminación con el equipo.", "qs": [{"q": "¿Cómo fue la actuación de la víctima?", "a": "Genial pero arrogante."}, {"q": "¿Quién entró al camerino?", "a": "Actor suplente enojado."}, {"q": "¿Escuchaste gritos?", "a": "La música ahogó los sonidos."}]},
                        {"name": "Ziad Escritor", "role": "Dramaturgo", "alibi": "Firmando libros para el público afuera.", "qs": [{"q": "¿Alteró el guión?", "a": "Exigió cambios constantemente."}, {"q": "¿Dónde después del telón?", "a": "Autografiando libros."}, {"q": "¿Te gusta su actuación?", "a": "Encajaba bien en el papel."}]},
                        {"name": "Bassem Suplente", "role": "Actor Secundario", "alibi": "Cambiándose de ropa en el camerino.", "qs": [{"q": "¿Por qué amenazarlo?", "a": "Robó mi papel protagónico codiciosamente."}, {"q": "¿Lo mataste?", "a": "Estaba enojado pero no maté."}, {"q": "¿Dónde exactamente?", "a": "En la habitación solo."}]}
                    ],
                    "explain": "Bassem Suplente estranguló a Rafat por rabia sobre el rol principal robado utilizando un atrezzo del backstage.",
                    "hints": ["Pista 1: Inspecciona los registros de llamadas que muestran amenazas repetidas de un compañero de trabajo.", "Pista 2: Revisa la cuerda de atrezzo convertida en una verdadera herramienta de estrangulamiento en el backstage.", "Pista 3: Bassem el Suplente tenía un fuerte motivo de ira después de que Rafat le robara su papel protagónico."]
                },
                {
                    "tag": "Caso de Robo",
                    "difficulty": "hard",
                    "title": "Robo del Tren Dorado",
                    "brief": "Cargamento de lingotes de oro por valor de 1M de dólares desapareció de un tren de carga rápido a mitad de viaje entre ciudades por la noche.",
                    "victim": "Express Transit Corp - Lingotes de Oro.",
                    "culprit": "Sameh Conductor de Tren",
                    "evidence": [
                        {"name": "Gato Hidráulico", "desc": "Escondido al lado de las vías del tren."},
                        {"name": "Walkie-Talkie", "desc": "Usa la frecuencia de radio de seguridad de la compañía de trenes."},
                        {"name": "Guante de Trabajo Sucio", "desc": "Lleva el logotipo de la compañía naviera."},
                        {"name": "Huellas de Camión Pesado", "desc": "Cerca del marcador de parada de emergencia del tren."},
                        {"name": "Registro de Mantenimiento", "desc": "Muestra una parada intencional de freno de tren de 1 minuto."}
                    ],
                    "suspects": [
                        {"name": "Sameh Conductor de Tren", "role": "Conductor de Carga", "alibi": "Detenido debido a un repentino fallo de señal.", "qs": [{"q": "¿Por qué parar aquí?", "a": "Señal roja de emergencia desde la torre."}, {"q": "¿Conoces el valor de la carga?", "a": "Sí, oro asegurado."}, {"q": "¿Quién tiene radio?", "a": "Tripulación de control."}]},
                        {"name": "Majed Despachador", "role": "Controlador de Señales", "alibi": "Monitoreando líneas desde la torre de control.", "qs": [{"q": "¿Ordenaste detener el tren?", "a": "Las señales estaban en verde."}, {"q": "¿Quién manipuló el panel?", "a": "Alguien con frecuencia."}, {"q": "¿Dónde a la 1 AM?", "a": "En la torre solo."}]},
                        {"name": "Daniel Guardia", "role": "Escolta de Carga", "alibi": "Protegiendo la puerta del vagón trasero interior.", "qs": [{"q": "¿Por qué no disparar el arma?", "a": "Noqueado por gas."}, {"q": "¿Quién estaba dentro?", "a": "Solo yo y las cajas."}, {"q": "¿Cuándo despertó?", "a": "Hora después de la parada."}]},
                        {"name": "Essam Mecánico", "role": "Trabajador de Mantenimiento", "alibi": "Reparando vía en la estación cercana.", "qs": [{"q": "¿Tienes gato hidráulico?", "a": "Sí, para mantenimiento de vías."}, {"q": "¿Dónde estaban las herramientas?", "a": "En el camión de servicio."}, {"q": "¿Te gusta el dinero rápido?", "a": "¿A quién no? Pero soy honesto."}]}
                    ],
                    "explain": "Sameh el Conductor del Tren se conchabó con Essam el Mecánico para detener el tren intencionalmente y descargar el oro.",
                    "hints": ["Pista 1: Revisa el gato hidráulico y el walkie-talkie sintonizado a la frecuencia de radio de la empresa.", "Pista 2: Revisa el registro de mantenimiento que muestra una parada de freno de emergencia intencional de 1 minuto.", "Pista 3: Sameh el Conductor del Tren se confabuló con el mecánico Essam para detener el tren y descargar el envío de oro."]
                },
                {
                    "tag": "Caso de Asesinato",
                    "difficulty": "hard",
                    "title": "Muerte de Arqueólogo",
                    "brief": "Arqueólogo renombrado encontrado muerto dentro de una tumba recién abierta con un cofre de reliquias forzado a abrirse.",
                    "victim": "Víctima: Dr. Fadel (58).",
                    "culprit": "Maher Contrabandista",
                    "evidence": [
                        {"name": "Pico Arqueológico", "desc": "Manchado de sangre con sangre de la víctima y huellas."},
                        {"name": "Figurilla de Oro", "desc": "Dejada caer por el asesino que huía."},
                        {"name": "Linterna", "desc": "Lleva la marca de la ferretería local."},
                        {"name": "Huellas de Suciedad", "desc": "Conduciendo hacia la entrada principal de la excavación."},
                        {"name": "Registro de Expedición", "desc": "Detalla la disputa sobre la división de hallazgos."}
                    ],
                    "suspects": [
                        {"name": "Dr. Adel", "role": "Co-Líder de Expedición", "alibi": "Documentando inscripciones en la cámara oeste.", "qs": [{"q": "¿Por qué discutir?", "a": "Sobre crédito de investigación."}, {"q": "¿Entrar a la sala del tesoro?", "a": "Por la mañana solamente."}, {"q": "¿Dónde en el momento del crimen?", "a": "En otra cámara."}]},
                        {"name": "Souad Asistente", "role": "Asistente de Excavación", "alibi": "Organizando herramientas en el campamento exterior.", "qs": [{"q": "¿Quién visitó la tumba de noche?", "a": "Dr. Fadel solo."}, {"q": "¿Reliquias faltantes?", "a": "Rara figurilla de oro."}, {"q": "¿Cuándo se descubrió?", "a": "A la mañana siguiente."}]},
                        {"name": "Maher Contrabandista", "role": "Individuo Sospechoso", "alibi": "Cazando fauna cerca del borde del desierto.", "qs": [{"q": "¿Por qué cerca de la tumba?", "a": "Caza de caza silvestre."}, {"q": "¿Por qué se encontró la linterna?", "a": "La perdí antes."}, {"q": "¿Contrabandear reliquias?", "a": "Falsa acusación."}]},
                        {"name": "Jehad Guardia", "role": "Guardia del Sitio", "alibi": "Protegiendo las tiendas de expedición afuera.", "qs": [{"q": "¿Viste acercarse a un extraño?", "a": "Vi a una persona cargando una bolsa pesada."}, {"q": "¿Por qué no detenerlos?", "a": "Pensé que era investigador."}, {"q": "¿Escuchaste gritos?", "a": "El viento era demasiado fuerte."}]}
                    ],
                    "explain": "Maher el Contrabandista se infiltró en la tumba para robar la figurilla de oro y asesinó al arqueólogo cuando fue atrapado.",
                    "hints": ["Pista 1: Inspecciona la linterna marcada con las marcas de la ferretería local dejada en la escena.", "Pista 2: Revisa la figurilla de oro dejada por el culpable que huía.", "Pista 3: Maher el Contrabandista se infiltró en la tumba para el comercio ilegal y asesinó al Dr. Fadel cuando fue atrapado."]
                },
                {
                    "tag": "Desaparición",
                    "difficulty": "hard",
                    "title": "Jet Privado Desaparecido",
                    "brief": "Un jet de negocios privado desapareció sobre el espacio aéreo montañoso escarpado cerca de un denso bosque de pinos.",
                    "victim": "Avión Privado - 4 Pasajeros.",
                    "culprit": "Samer Copiloto",
                    "evidence": [
                        {"name": "Caja de Vuelo Aplastada", "desc": "Muestra manipulación deliberada del sistema de piloto automático."},
                        {"name": "Combustible Contaminado", "desc": "Agente químico agregado que causa el cierre del motor."},
                        {"name": "Nota de Suicidio Falsificada", "desc": "Encontrada en la computadora portátil del asistente."},
                        {"name": "Líneas de Paracaídas", "desc": "Enredadas en altas ramas de árboles de pino."},
                        {"name": "Plan de Vuelo Alterado", "desc": "Desvía la trayectoria hacia las montañas intencionalmente."}
                    ],
                    "suspects": [
                        {"name": "Capitán Rami", "role": "Piloto Jefe", "alibi": "Pilotando aeronave según direcciones oficiales.", "qs": [{"q": "¿Por qué cambio de ruta?", "a": "Para evitar tormenta severa."}, {"q": "¿Falla del motor?", "a": "Los motores se detuvieron inesperadamente."}, {"q": "¿Lugar del accidente?", "a": "Medio del bosque."}]},
                        {"name": "Samer Copiloto", "role": "Primer Oficial", "alibi": "Monitoreando el panel de instrumentos de la cabina.", "qs": [{"q": "¿Quién cambió el plan?", "a": "El capitán solicitó ahorrar combustible."}, {"q": "¿Dejar la aeronave?", "a": "Permanecí a bordo."}, {"q": "¿Qué pasa con el paracaídas?", "a": "Artículo del kit de emergencia."}]},
                        {"name": "Monir Inversor", "role": "Propietario de la Aeronave", "alibi": "Revisando documentos en el asiento del pasajero.", "qs": [{"q": "¿El jet está asegurado?", "a": "Asegurado fuertemente."}, {"q": "¿Notaste tensión?", "a": "Los pilotos discutieron en voz baja."}, {"q": "¿Dónde está el equipaje?", "a": "Quemado en el accidente."}]},
                        {"name": "Laila Oficial", "role": "Ayudante Personal", "alibi": "Sentada en la sección trasera.", "qs": [{"q": "¿Escuchaste explosión?", "a": "Sonido extraño y luego caída rápida."}, {"q": "¿Te gusta volar?", "a": "No me gusta la altitud alta."}, {"q": "¿Quién se beneficia?", "a": "Pólizas de seguro."}]}
                    ],
                    "explain": "Samer el Copiloto sabotearon el combustible, alteraron la navegación y saltaron en paracaídas antes del accidente.",
                    "hints": ["Pista 1: Revisa la caja de vuelo aplastada y el combustible contaminado que conduce a la falla del motor.", "Pista 2: Inspecciona las líneas de paracaídas enredadas en altas ramas de pinos cerca de la trayectoria del accidente.", "Pista 3: Samer el Copiloto sabotearon el vuelo, alteraron la navegación y saltaron en paracaídas antes del impacto."]
                },
                {
                    "tag": "Caso de Asesinato",
                    "difficulty": "extreme",
                    "title": "Veneno Invisible",
                    "brief": "Magnate envenenado dentro de una oficina de bóveda fortificada utilizando un compuesto biológico raro indetectable.",
                    "victim": "Víctima: Fouad Al-Moatasem (60).",
                    "culprit": "Dr. Ziad",
                    "evidence": [
                        {"name": "Gotero Médico", "desc": "Contiene microgotas de neurotoxina."},
                        {"name": "Vaso de Agua", "desc": "Mezclado con compuesto biológico inodoro."},
                        {"name": "Guante Quirúrgico", "desc": "Desechado en el cubo de basura."},
                        {"name": "Testamento Actualizado", "desc": "Reasigna la herencia a una fundación benéfica."},
                        {"name": "Metraje de CCTV", "desc": "Muestra a una persona usando una bata de médico."}
                    ],
                    "suspects": [
                        {"name": "Dr. Ziad", "role": "Médico Personal", "alibi": "Comprobando la presión arterial de la víctima por la tarde.", "qs": [{"q": "¿Medicina diaria?", "a": "Vitaminas para el corazón solamente."}, {"q": "¿Por qué se encontró el gotero?", "a": "Usado para gotas para los ojos."}, {"q": "¿Sabes sobre el nuevo testamento?", "a": "No, desconocido."}]},
                        {"name": "Sawsan Esposa", "role": "Esposa de la Víctima", "alibi": "Preparando té en la cocina exterior.", "qs": [{"q": "¿Quién bebió agua?", "a": "Mi esposo solo."}, {"q": "¿Disputa por el testamento?", "a": "Entristecida pero no maté."}, {"q": "¿Quién visitó hoy?", "a": "Su médico personal."}]},
                        {"name": "Maher Farmacéutico", "role": "Farmacéutico de la Familia", "alibi": "Dirigiendo la farmacia todo el día.", "qs": [{"q": "¿Dispensar toxina?", "a": "Solo medicamentos autorizados."}, {"q": "¿Quién posee el compuesto biológico?", "a": "Laboratorios de alto nivel."}, {"q": "¿Visitar mansión?", "a": "Hace un mes."}]},
                        {"name": "Omar Guardia", "role": "Guardia de la Mansión", "alibi": "Protegiendo la puerta principal.", "qs": [{"q": "¿Quién entró con bata de médico?", "a": "El doctor Ziad como de costumbre."}, {"q": "¿Viste a un extraño?", "a": "Nadie extraño."}, {"q": "¿Inicio de turno?", "a": "Temprano en la mañana."}]}
                    ],
                    "explain": "Dr. Ziad el Médico Personal envenenó el suministro de medicamentos utilizando un compuesto biológico para reclamar los fondos de la herencia.",
                    "hints": ["Pista 1: Examina el gotero médico que contiene microdosis de neurotoxina.", "Pista 2: Revisa el metraje de CCTV que muestra a alguien con una bata de médico entrando a la oficina de la bóveda fortificada.", "Pista 3: Dr. Ziad el Médico Personal envenenó el suministro de medicamentos de la víctima para asegurar los fondos de la herencia."]
                },
                {
                    "tag": "Caso de Robo",
                    "difficulty": "extreme",
                    "title": "Robo al Museo Local",
                    "brief": "Estatuas de bronce antiguas desaparecieron de la vitrina del museo local sin romper cerraduras.",
                    "victim": "Museo Local - 3 Estatuas.",
                    "culprit": "Rami Curador",
                    "evidence": [
                        {"name": "Juego de Llaves Estándar", "desc": "Desbloquea la vitrina de cristal sin problemas."},
                        {"name": "Marca de Tinta Azul", "desc": "En el tirador del gabinete de exhibición."},
                        {"name": "Libro de Registro de Entradas", "desc": "Muestra que el curador inició sesión tarde en la noche."},
                        {"name": "Bolsa de Lona", "desc": "Dejada atrás en los bancos de asientos."},
                        {"name": "Recibo de Venta", "desc": "Muestra la venta de artículos similares al distribuidor."}
                    ],
                    "suspects": [
                        {"name": "Rami Curador", "role": "Curador del Museo", "alibi": "Actualizando registros en la oficina.", "qs": [{"q": "¿Quién tiene la llave de la exhibición?", "a": "Solo yo."}, {"q": "¿Por qué registraste tarde en la noche?", "a": "Revisando el inventario."}, {"q": "¿Dónde están las estatuas?", "a": "Robadas, no sé por quién."}]},
                        {"name": "Souad Guardia", "role": "Guardia del Museo", "alibi": "Estacionado en la puerta principal.", "qs": [{"q": "¿Alguien cargó bolsas?", "a": "Vi a Rami cargando una bolsa de lona."}, {"q": "¿Alarma activada?", "a": "No, se usó la llave original."}, {"q": "¿Cuándo se fue Rami?", "a": "Después de la medianoche."}]},
                        {"name": "Ziad Visitante", "role": "Entusiasta de Antigüedades", "alibi": "Viendo exhibiciones durante el día.", "qs": [{"q": "¿Cuándo visitaste?", "a": "Dos días antes del robo."}, {"q": "¿Conocer a Rami?", "a": "Discutí las estatuas con él."}, {"q": "¿Comprar antigüedades?", "a": "Solo por medios legales."}]},
                        {"name": "Fatima Limpiadora", "role": "Personal de Limpieza", "alibi": "Limpiando salones por la mañana.", "qs": [{"q": "¿Notaste artículos faltantes?", "a": "Vitrina vacía por la mañana."}, {"q": "¿Quién entra de noche?", "a": "Curador Rami."}, {"q": "¿Abrir vitrinas?", "a": "Nunca."}]}
                    ],
                    "explain": "Rami el Curador robó las estatuas de bronce usando una llave maestra oficial y las vendió a un traficante ilegal.",
                    "hints": ["Pista 1: Revisa el libro de registro de entradas que muestra que el curador inició sesión tarde en la noche.", "Pista 2: Revisa el juego de llaves estándar utilizado para abrir las vitrinas sin cerraduras forzadas.", "Pista 3: Rami el Curador usó sus llaves maestras oficiales para robar las estatuas de bronce y venderlas."]
                },
                {
                    "tag": "Caso de Asesinato",
                    "difficulty": "extreme",
                    "title": "Crimen en la Casa Embrujada",
                    "brief": "Un anciano fue encontrado asesinado en una casa abandonada en el bosque con la puerta principal cerrada por dentro.",
                    "victim": "Víctima: Saleh (75).",
                    "culprit": "Nabil Sobrino",
                    "evidence": [
                        {"name": "Llave de Repuesto", "desc": "Escondida debajo del felpudo de la puerta."},
                        {"name": "Club de Madera", "desc": "Ensangrentado con marcas de lucha."},
                        {"name": "Caja de Dinero", "desc": "Vaciada y dispersa."},
                        {"name": "Huella Embarrada", "desc": "Cerca del marco de la ventana trasera."},
                        {"name": "Nota de Herencia", "desc": "Del sobrino exigiendo dinero."}
                    ],
                    "suspects": [
                        {"name": "Nabil Sobrino", "role": "Pariente de la Víctima", "alibi": "Vendiendo propiedad en la ciudad.", "qs": [{"q": "¿Por qué exigir dinero?", "a": "Era mi tío, necesitaba ayuda."}, {"q": "¿Conocer el escondite de la llave?", "a": "Sí, viejo lugar de escondite."}, {"q": "¿Dónde a la hora del incidente?", "a": "En el mercado de la ciudad."}]},
                        {"name": "Saeed Vecino", "role": "Vecino Anciano", "alibi": "Arreglando la cerca de la granja.", "qs": [{"q": "¿Escuchaste discusión?", "a": "Grito tenue y luego silencio."}, {"q": "¿Quién visita la casa?", "a": "Su sobrino Nabil."}, {"q": "¿Entrar a la casa?", "a": "Nunca."}]},
                        {"name": "Mona Hija", "role": "Estudiante", "alibi": "Recolectando hierbas cerca del bosque.", "qs": [{"q": "¿Viste a un extraño?", "a": "Vi a Nabil cargando una caja de metal."}, {"q": "¿Cuándo se vio?", "a": "Justo antes del atardecer."}, {"q": "¿Le dijiste a alguien?", "a": "Tenía miedo."}]},
                        {"name": "Khaled Oficial", "role": "Policía Retirado", "alibi": "Pescando en el río cercano.", "qs": [{"q": "¿Visitar a Saleh recientemente?", "a": "Hace una semana para té."}, {"q": "¿Su estado de ánimo?", "a": "Temeroso de la codicia de Nabil."}, {"q": "¿Te gusta el bosque?", "a": "Paso horas allí."}]}
                    ],
                    "explain": "Nabil el Sobrino mató a su tío por la caja de dinero usando el escondite de la llave de repuesto que conocía.",
                    "hints": ["Pista 1: Inspecciona la llave de repuesto escondida debajo del felpudo que solo la familia conocía.", "Pista 2: Revisa la nota de herencia exigiendo dinero encontrada en la casa.", "Pista 3: Nabil el Sobrino usó la llave de repuesto oculta para entrar y asesinar a su tío por la caja de efectivo."]
                },
                {
                    "tag": "Desaparición",
                    "difficulty": "extreme",
                    "title": "Documento Diplomático",
                    "brief": "Documento diplomático ultrasecreto desapareció del maletín del embajador durante una recepción concurrida.",
                    "victim": "Embajada Extranjera - Documento Secreto.",
                    "culprit": "Daniel Reportero",
                    "evidence": [
                        {"name": "Maletín Coincidente", "desc": "Cambiado hábilmente con el original."},
                        {"name": "Invitación Falsificada", "desc": "Tiene nombre de invitado falso."},
                        {"name": "Clip de CCTV", "desc": "Persona que usa un traje formal oscuro."},
                        {"name": "Pañuelo de Seda", "desc": "Perfumado con perfume francés."},
                        {"name": "Registro de Invitados", "desc": "Registra la entrada de un reportero misterioso."}
                    ],
                    "suspects": [
                        {"name": "Embajador Murad", "role": "Diplomático Jefe", "alibi": "¿Saludando a los invitados en el salón principal.", "qs": [{"q": "¿Quién sostiene el maletín?", "a": "Mi asistente siempre."}, {"q": "¿Cuándo se notó la pérdida?", "a": "Justo después de que los invitados se fueron."}, {"q": "¿El documento es crítico?", "a": "Ultrasecreto."}]},
                        {"name": "Saeed Asistente", "role": "Asistente Diplomático", "alibi": "Sirviendo refrescos a los invitados.", "qs": [{"q": "¿Dónde estaba el maletín?", "a": "Al lado del escritorio privado."}, {"q": "¿Quién se acercó?", "a": "Periodista extranjero."}, {"q": "¿Dejarlo solo?", "a": "Por minutos para buscar archivos."}]},
                        {"name": "Daniel Reportero", "role": "Periodista Extranjero", "alibi": "Entrevistando a diplomáticos.", "qs": [{"q": "¿Por qué cambiar el maletín?", "a": "Mezcla accidental."}, {"q": "¿Perfume francés?", "a": "Regalo de un amigo."}, {"q": "¿Buscando exclusivas?", "a": "Busco la verdad."}]},
                        {"name": "Nadine Traductora", "role": "Traductora Oficial", "alibi": "Traduciendo en el escenario.", "qs": [{"q": "¿Notaste actividad extraña?", "a": "Daniel merodeaba cerca del maletín."}, {"q": "¿Quién lo invitó?", "a": "Invitaciones privadas."}, {"q": "¿Documentos seguros?", "a": "Protocolo estricto."}]}
                    ],
                    "explain": "Daniel el Reportero espía cambió un maletín idéntico durante la conmoción de la recepción para robar el documento.",
                    "hints": ["Pista 1: Revisa el maletín cambiado y el registro de invitados que registra a un reportero misterioso.", "Pista 2: Observa el pañuelo de seda perfumado con perfume francés dejado en la escena.", "Pista 3: Daniel el Reportero usó una invitación falsa e intercambió maletines durante la conmoción de la recepción."]
                },
                {
                    "tag": "Caso de Asesinato",
                    "difficulty": "extreme",
                    "title": "Asesinato en las Alturas",
                    "brief": "Magnate encontrado muerto por dardo envenenado dentro de una oficina de torre de cristal en el piso 50.",
                    "victim": "Víctima: Ghassan Al-Malik (65).",
                    "culprit": "Ziad Rival",
                    "evidence": [
                        {"name": "Micro Dardo Envenenado", "desc": "Disparado desde la ventana del edificio de enfrente."},
                        {"name": "Ballesta Profesional", "desc": "Montada en un trípode en el edificio de enfrente."},
                        {"name": "Huella Parcial", "desc": "En la empuñadura de la ballesta en una habitación oscura."},
                        {"name": "Contrato Disuelto", "desc": "Muestra una gran pérdida para el competidor principal."},
                        {"name": "Alcance de Alta Potencia", "desc": "Utilizado para la orientación de precisión de largo alcance."}
                    ],
                    "suspects": [
                        {"name": "Ziad Rival", "role": "Magnate Rival", "alibi": "En reuniones bancarias todo el día.", "qs": [{"q": "¿Relación con la víctima?", "a": "Feroz competencia de mercado."}, {"q": "¿Contratar francotirador?", "a": "Soy un empresario legal."}, {"q": "¿Dónde a la hora del crimen?", "a": "En la torre financiera."}]},
                        {"name": "Sahar Secretaria", "role": "Asistente Ejecutiva", "alibi": "Preparando café en el salón.", "qs": [{"q": "¿Quién tiene acceso a la oficina?", "a": "Yo y el jefe de seguridad."}, {"q": "¿Escuchaste sonido de ventana?", "a": "El vidrio es a sonido de prueba."}, {"q": "¿Estaba asustado?", "a": "Recibió amenazas de muerte."}]},
                        {"name": "Maher Jefe de Seguridad", "role": "Jefe de Guardia", "alibi": "Monitoreando cámaras del piso inferior.", "qs": [{"q": "¿Por qué perder al francotirador?", "a": "Edificio opuesto abandonado."}, {"q": "¿Quién tiene la llave opuesta?", "a": "Contratista en bancarrota."}, {"q": "¿Las cámaras cubren lo opuesto?", "a": "El ángulo se lo pierde."}]},
                        {"name": "Jehad Francotirador", "role": "Mercenario Misterioso", "alibi": "Alquilando habitación bajo alias.", "qs": [{"q": "¿Por qué en la torre opuesta?", "a": "Fotografía entusiasta."}, {"q": "¿Por qué huella en la ballesta?", "a": "Contrato ejecutado por dinero."}, {"q": "¿Quién te pagó?", "a": "Rival Ziad."}]}
                    ],
                    "explain": "Ziad el Rival contrató al mercenario Jehad para ejecutar el asesinato de largo alcance entre edificios.",
                    "hints": ["Pista 1: Examina el microdardo envenenado y la ballesta profesional montada en el edificio opuesto.", "Pista 2: Revisa el contrato disuelto que muestra grandes pérdidas financieras para el principal rival del mercado.", "Pista 3: Ziad el Rival contrató al francotirador Jehad en el edificio opuesto abandonado para ejecutar el asesinato de la torre."]
                }
            ]
        },
        it: {
            appTitle: "Il File Nero | Othmane Ettoumi",
            appSub: "Gioco Investigativo Intelligente – 20 Casi Criminali",
            profileBtn: "👤 Profilo Investigatore",
            chatBtn: "💬 Chat Amici",
            mpBtn: "🌐 Gioca con Amici",
            statusReady: "Pronto per il Servizio",
            archiveTitle: "📁 Archivi dei Casi (20 Crimini)",
            archiveDesc: "Scegli tra 20 casi a difficoltà progressiva per iniziare la tua indagine.",
            footerText: "Il File Nero © 2026 - Progettato da: Othmane Ettoumi | 100% Offline (il multiplayer richiede internet)",
            filterAll: "Tutti",
            filterEasy: "Facile",
            filterMedium: "Medio",
            filterHard: "Difficile",
            filterExtreme: "Estremo",
            backArchive: "← Torna agli Archivi",
            crimeSceneBanner: "INVESTIGAZIONE SULLA SCENA DEL CRIMINE",
            startInv: "Procedi alla Scena del Crimine →",
            backBrief: "← Torna al Briefing del Caso",
            notesBtn: "📝 Note Investigativo",
            hintBtn: "💡 Richiedi Indizio",
            evidenceHeader: "🔍 Prove Fisiche",
            suspectsHeader: "👥 Interrogatorio Sospettati",
            accuseBtn: "⚖️ Accusa Sospettato e Risolvi il Caso",
            returnMenu: "Torna agli Archivi",
            retryCase: "Riesamina il Caso",
            close: "Chiudi",
            interrogateQ: "Domande di Interrogatorio:",
            accuseModalTitle: "⚖️ Accusa Finale",
            accuseModalDesc: "Seleziona il vero colpevole con attenzione. Un'accusa errata danneggerà il tuo grado da investigatore!",
            cancel: "Annulla",
            confirmAccuse: "Conferma Accusa",
            notesTitle: "📝 Note Investigative",
            notesDesc: "Scrivi le tue osservazioni e teorie:",
            notesClose: "Chiudi",
            notesSave: "Salva Note",
            hintTitle: "💡 Indizio Investigativo",
            hintClose: "Capito",
            profileTitle: "👤 Profilo Investigatore",
            proNameLabel: "Nome Investigatore:",
            proRankLabel: "Grado:",
            achLabel: "🎖️ Obiettivi",
            onboardTitle: "Benvenuto, Detective",
            onboardBody: "Ti aspettano 20 casi criminali da risolvere. Leggi il riepilogo del caso, esamina attentamente le prove fisiche e interroga ogni sospettato — le loro risposte nascondono la verità. Usa gli indizi solo se sei bloccato (massimo 3 per caso), poi fai la tua accusa finale. Scegli con saggezza: accusare un innocente lascia scappare il vero colpevole!",
            onboardBtn: "Iniziamo l'indagine →",
            proClose: "Annulla",
            proSave: "Salva Profilo",
            mpTitle: "🌐 Stanza Gioca con Amici",
            mpDesc: "Connettiti con amici detective tramite WiFi, *3, o *6 (Marocco) per competere nella risoluzione dei casi.",
            mpClose: "Chiudi",
            mpJoin: "Connetti Stanza",
            mpCreate: "Crea Stanza",
            mpLeave: "Esci dalla Stanza",
            roomLeft: "Hai lasciato la stanza.",
            roomCreating: "Creazione della tua stanza...",
            roomCreated: "Stanza pronta! Condividi questo codice con il tuo amico: {code}",
            roomWaiting: "In attesa che un amico si unisca alla stanza {code}...",
            roomFriendJoined: "Il tuo amico si è unito! Ora siete connessi.",
            roomConnectFailed: "Connessione non riuscita. Verifica che tu e il tuo amico abbiate internet via WiFi, *3, o *6, poi riprova.",
            roomDisconnected: "Il tuo amico si è disconnesso.",
            chatConnectedDisclaimer: "Connesso in diretta con un amico reale.",
            friendJoinedMsg: "Il tuo amico si è unito alla stanza!",
            chatHeading: "💬 Chat Amici Detective",
            chatDisclaimer: "Chat demo simulata — non connessa a giocatori reali.",
            chatSend: "Invia",
            chatWelcomeMsg: "Benvenuti nella rete, investigatori! Novità sull'ultimo caso?",
            chatInputPlaceholder: "Scrivi un messaggio...",
            notesPlaceholder: "Scrivi qui i tuoi indizi...",
            roomCodePlaceholder: "Inserisci il codice stanza (es. CASE-99)",
            answerLabel: "Risposta:",
            selectSuspectAlert: "Seleziona un sospettato prima di confermare l'accusa.",
            resultSolvedTitle: "Caso risolto con successo!",
            resultSolvedDesc: "Ottimo lavoro, investigatore! Hai identificato correttamente il colpevole.",
            resultWrongTitle: "Accusa sbagliata!",
            resultWrongDesc: "Hai accusato una persona innocente. Il vero colpevole è scappato.",
            caseExplanationLabel: "Spiegazione del caso:",
            micNotSupported: "La registrazione vocale non è supportata su questo dispositivo.",
            micPermissionDenied: "L'accesso al microfono è stato negato. Consenti il microfono nelle impostazioni del browser.",
            micTitle: "Messaggio vocale (tocca per registrare, tocca di nuovo per inviare)",
            micListening: "Registrazione… tocca per inviare",
            micNoFriend: "Connettiti prima con un amico per inviare un messaggio vocale.",
            callBtnTitle: "Chiamata vocale",
            callActive: "🔊 Chiamata vocale connessa",
            callConnecting: "📞 Chiamata al tuo amico…",
            callEnded: "Chiamata terminata.",
            roomEnterCode: "Inserisci un codice stanza valido.",
            roomConnecting: "Connessione alla stanza {code} tramite rete sicura...",
            roomRetrying: "Stanza non ancora trovata — nuovo tentativo... ({n} rimasti)",
            roomConnected: "Connesso con successo alla stanza {code}! Pronto per la sfida.",
            botName: "Ispettore John",
            botReplies: [
                "Assicurati di ispezionare attentamente tutte le prove fisiche.",
                "Controlla gli alibi dei sospettati per individuare sottili contraddizioni.",
                "Hai esaminato le note personali della vittima?",
                "Continua a scavare, detective! La verità sta nei dettagli."
            ],
            cases: [
                {
                    "tag":"Caso di Omicidio",
                    "difficulty":"easy",
                    "title":"Silenzio nel Maniero",
                    "brief":"Il ricco mercante Karim Ouazzani è stato trovato assassinato nel suo studio privato all'interno del maniero a causa di una ferita da pugnale fatale. La porta era chiusa dall'interno e la finestra aperta.",
                    "victim":"Vittima: Karim Ouazzani (54) - Uomo d'affari.",
                    "culprit":"Yahya Alami",
                    "evidence":[
                        {"name":"Pugnale d'Argento","desc":"Pulito con cura, lasciamo un'impronta parziale corrispondente al socio Yahya."},
                        {"name":"Lettera Finanziaria Strappata","desc":"Dimostra che la vittima doveva un'enorme somma al suo socio in affari Yahya."},
                        {"name":"Impronta Fangosa","desc":"Grande impronta di scarpa vicino alla finestra che corrisponde al fango del giardino del maniero."},
                        {"name":"Orologio da Polso Fermo","desc":"Fermato alle 21:42, l'ora esatta dell'omicidio."},
                        {"name":"Registro Telecamere di Sicurezza","desc":"Mostra movimenti sospetti nel corridoio che porta allo studio."}
                    ],
                    "suspects":[
                        {"name":"Salma Ouazzani","role":"Moglie","alibi":"Dormiva nella sua stanza dalle 21:00.","qs":[{"q":"Hai sentito rumori?","a":"No, era completamente silenzioso."},{"q":"Dove eri a quell'ora?","a":"Nella mia stanza a dormire da sola."},{"q":"Avete avuto dispute finanziarie?","a":"Non ho avuto alcun coinvolgimento con i suoi soldi."}]},
                        {"name":"Yahya Alami","role":"Socio in Affari","alibi":"Fumava una sigaretta sul balcone posteriore.","qs":[{"q":"Qual era la disputa finanziaria?","a":"Solo una normale partnership commerciale."},{"q":"Perché c'era la tua impronta sul pugnale?","a":"Ero lì la mattina per lavoro."},{"q":"Dove eri alle 21:40?","a":"Sul balcone a fumare."}]},
                        {"name":"Fatima","role":"Domestica","alibi":"Ha scoperto il corpo la mattina mentre puliva.","qs":[{"q":"Quando hai aperto lo studio?","a":"Alle 08:00."},{"q":"La porta era chiusa?","a":"Sì, chiusa dall'interno."},{"q":"Hai notato qualcosa di insolito?","a":"La finestra era leggermente aperta."}]},
                        {"name":"Omar","role":"Guardia del Corpo","alibi":"In pattuglia attorno ai muri perimetrali.","qs":[{"q":"È entrato qualche intruso?","a":"I cancelli principali erano chiusi."},{"q":"Perché non hai sentito nulla?","a":"Lo studio è insonorizzato e il vento era forte."},{"q":"Quali erano i tuoi doveri?","a":"Pattugliare ogni ora."}]}
                    ],
                    "explain":"Yahya Alami è il colpevole: ha ammesso di essere vicino al balcone. La sua impronta parziale sul pugnale e le impronte fangose corrispondono al sentiero del giardino a causa della grande disputa sui debiti.",
                    "hints":["Indizio 1: Ispeziona le prove fisiche lasciate sul pugnale d'argento e sul sentiero del giardino fuori dalla finestra aperta.","Indizio 2: Esamina chi aveva una grande disputa finanziaria e un conflitto debitorio con la vittima.","Indizio 3: L'alibi del balcone di Yahya Alami crolla se abbinato alla sua impronta parziale sull'arma del delitto e alle impronte fangose."]
                },
                {
                    "tag":"Caso di Furto",
                    "difficulty":"easy",
                    "title":"Il Diamante Occhio del Nilo",
                    "brief":"Il raro diamante blu \"Occhio del Nilo\" è svanito dalla sua teca di vetro al Museo Nazionale nella notte di apertura senza rompere alcuna serratura.",
                    "victim":"Luogo: Museo Nazionale - Gemma valutata 10 Milioni di Dollari.",
                    "culprit":"Maher il Curatore",
                    "evidence":[
                        {"name":"Guanto di Seta Tagliato","desc":"Trovato accanto alla teca di vetro."},
                        {"name":"Carta d'Accesso VIP","desc":"Porta impronte digitali nascoste appartenenti al curatore."},
                        {"name":"Filmato della Telecamera","desc":"Mostra una figura con cappotto nero che lascia in fretta la sala."},
                        {"name":"Ciocca di Capelli","desc":"Trovata impigliata sulla cornice della teca."},
                        {"name":"Chiavi Maestre Corrispondenti","desc":"Set di chiavi maestre appartenente all'ufficiale amministrativo."}
                    ],
                    "suspects":[
                        {"name":"Raid il Direttore","role":"Direttore del Museo","alibi":"Accoglieva ospiti VIP nella sala principale.","qs":[{"q":"Chi ha le chiavi?","a":"Solo io e la sicurezza."},{"q":"Dove eri durante il furto?","a":"Con gli ospiti VIP."},{"q":"Hai notato subito la perdita?","a":"No, l'abbiamo scoperto dopo."}]},
                        {"name":"Sanaa Sicurezza","role":"Capo della Sicurezza","alibi":"Monitorava le telecamere di sorveglianza nella sala di controllo posteriore.","qs":[{"q":"Perché le telecamere si sono spente per 1 minuto?","a":"Un'improvvisa interruzione di corrente."},{"q":"Hai camminato nella sala?","a":"Solo durante la normale ronda."},{"q":"Chi è entrato dopo la chiusura?","a":"Nessuno."}]},
                        {"name":"Maher il Curatore","role":"Curatore e Restoratore","alibi":"Restaurava dipinti nell'ala est.","qs":[{"q":"Perché è stato trovato il tuo guanto?","a":"Lo indossavo mentre pulivo le mostre."},{"q":"Hai accesso?","a":"Sì, come parte del mio lavoro."},{"q":"Dove eri alle 22:00?","a":"Nel laboratorio da solo."}]},
                        {"name":"Mona Giornalista","role":"Giornalista di Eventi","alibi":"Intervistava gli ospiti in giro per la stanza.","qs":[{"q":"Hai fotografato la gemma?","a":"Sì, prima nella serata."},{"q":"Quando te ne sei andata?","a":"Poco prima dell'incidente."},{"q":"Hai visto qualcuno di sospetto?","a":"Ho visto qualcuno con un cappotto."}]}
                    ],
                    "explain":"Maher il Curatore ha rubato il diamante usando l'accesso di restauro e ha lasciato fibre di guanto di seta vicino alla teca di vetro.",
                    "hints":["Indizio 1: Controlla il guanto di seta tagliato lasciato proprio accanto alla teca di vetro.","Indizio 2: Concentrati su chi aveva l'accesso professionale al restauro per gestire le mostre del museo senza forzare le serrature.","Indizio 3: La scusa di Maher il Curatore non spiega perché le fibre del suo guanto e le impronte d'accesso siano state trovate sulla scena."]
                },
                {
                    "tag":"Scomparsa",
                    "difficulty":"easy",
                    "title":"Dov'è Yasmine?",
                    "brief":"La studentessa universitaria Yasmine Alaoui è svanita 3 giorni fa. La sua auto è stata trovata parcheggiata vicino alla foresta oscura con le chiavi lasciate nel quadro.",
                    "victim":"Persona Scomparsa: Yasmine Alaoui (22).",
                    "culprit":"Ziad l'Ex",
                    "evidence":[
                        {"name":"Telefono Frantumato","desc":"Trovato sul ciglio della strada; l'ultima chiamata è stata fatta al suo ex fidanzato."},
                        {"name":"Minaccia Scritta a Mano","desc":"Nota minacciosa scritta a mano all'interno della sua borsetta."},
                        {"name":"Impronta di Battistrada","desc":"Rari segni di pneumatici sportivi corrispondenti all'auto di un suo compagno di college."},
                        {"name":"Tazza di Caffè","desc":"Ancora calda sul sedile del passeggero dell'auto."},
                        {"name":"Diario Personale","desc":"Menziona la sua costante paura di essere perseguitata da qualcuno."}
                    ],
                    "suspects":[
                        {"name":"Ziad l'Ex","role":"Ex Fidanzato","alibi":"A lavoro tutto il giorno e non l'ha vista.","qs":[{"q":"Quando sei stato l'ultima volta nella sua auto?","a":"Circa una settimana fa."},{"q":"Perché minacciarla nella lettera?","a":"Era un malinteso passato."},{"q":"Dov'era la tua auto quella notte?","a":"Nel garage di casa mia."}]},
                        {"name":"Sami Compagno","role":"Compagno di Università","alibi":"Studiava nella biblioteca pubblica.","qs":[{"q":"Qual era il vostro rapporto?","a":"Solo compagni di università."},{"q":"Perché i segni dei pneumatici corrispondono?","a":"Molti studenti possiedono quel modello di pneumatico."},{"q":"Dove eri martedì?","a":"In biblioteca fino alle 20:00."}]},
                        {"name":"Nawal Vicina","role":"Vicina di Dormitorio","alibi":"In viaggio per visitare la famiglia in una città vicina.","qs":[{"q":"Hai sentito una discussione?","a":"Mai, il suo posto era tranquillo."},{"q":"Quando sei tornata?","a":"La mattina dopo."},{"q":"Hai visto Ziad vicino all'appartamento?","a":"Sì, due volte la scorsa settimana."}]},
                        {"name":"Dr. Tariq","role":"Professore","alibi":"Correva i fogli d'esame all'università.","qs":[{"q":"Ha saltato la lezione?","a":"Sì, il giorno prima di svanire."},{"q":"Aveva problemi?","a":"Sembrava ansiosa ultimamente."},{"q":"Com'era il suo rendimento?","a":"Diligente e laboriosa."}]}
                    ],
                    "explain":"Ziad l'ex è responsabile: i segni dei pneumatici sportivi e le dichiarazioni contraddittorie riguardo alle minacce passate lo collegano direttamente.",
                    "hints":["Indizio 1: Ispeziona i registri del telefono frantumato e la lettera minacciosa trovata nella sua borsa.","Indizio 2: Osserva attentamente le impronte dei pneumatici trovate vicino alla foresta oscura dove è stata abbandonata la sua auto.","Indizio 3: Ziad l'Ex ha fornito dichiarazioni contraddittorie sui suoi spostamenti e sulle minacce passate contro la vittima."]
                },
                {
                    "tag":"Avvelenamento",
                    "difficulty":"easy",
                    "title":"Veleno nel Bicchiere",
                    "brief":"L'illustre critico letterario Ramzi Hamid è morto immediatamente dopo aver sorseggiato del succo alla sua cerimonia di premiazione all'interno del Teatro dell'Opera.",
                    "victim":"Vittima: Ramzi Hamid (61).",
                    "culprit":"Samer lo Scrittore Rivale",
                    "evidence":[
                        {"name":"Bottiglia di Succo Contaminata","desc":"Contiene tracce di cianuro letale."},
                        {"name":"Tovagliolo Piegato","desc":"Ha residui di polvere tossica e un'impronta parziale."},
                        {"name":"Programma dell'Evento","desc":"Mostra il programma esatto del servizio bevande."},
                        {"name":"Bicchiere Tumbler","desc":"Impronte della vittima e sostanza chimica estranea sul bordo."},
                        {"name":"Articolo di Recensione Dura","desc":"Una recensione tagliente scritta dalla vittima che attacca uno scrittore dilettante."}
                    ],
                    "suspects":[
                        {"name":"Mona Hostess","role":"Hostess dell'Evento","alibi":"Ha servito bevande secondo le istruzioni degli organizzatori.","qs":[{"q":"Chi ha preparato i bicchieri?","a":"Io e l'assistente del bar."},{"q":"Hai lasciato il tavolo?","a":"Per un minuto per prendere del ghiaccio."},{"q":"Hai visto qualcuno avvicinarsi?","a":"Ho visto il giovane scrittore nelle vicinanze."}]},
                        {"name":"Samer lo Scrittore Rivale","role":"Scrittore Rivale","alibi":"Parlava con il capo editore per tutta la sera.","qs":[{"q":"Perché il critico ti ha attaccato?","a":"Ha rovinato ingiustamente il mio ultimo romanzo."},{"q":"Hai messo qualcosa da bere?","a":"Dio non voglia, sono un professionista."},{"q":"Dove eri durante l'incidente?","a":"Davanti al palco della cerimonia."}]},
                        {"name":"Laila Ramzi","role":"Figlia","alibi":"Presentava premi per conto di suo padre.","qs":[{"q":"Eravate in buoni rapporti?","a":"Certo, è mio padre."},{"q":"Chi eredita la ricchezza?","a":"Io e una fondazione di beneficenza."},{"q":"Sospetti di qualcuno?","a":"Lo scrittore Samer lo ha minacciato."}]},
                        {"name":"Essam Guardia","role":"Guardia di Sicurezza","alibi":"Sorvegliava l'ingresso principale della sala.","qs":[{"q":"Chi è entrato dalla porta sul retro?","a":"Solo il personale di catering."},{"q":"Sai qualcosa sul cianuro?","a":"Non so nulla di sostanze chimiche."},{"q":"Le telecamere funzionano?","a":"Sì, registrano tutto."}]}
                    ],
                    "explain":"Samer lo Scrittore Rivale si è vendicato per la sua reputazione rovinata e ha avvelenato il bicchiere durante la breve assenza dell'hostess.",
                    "hints":["Indizio 1: Controlla la bottiglia di succo contaminata e i residui di polvere tossica sul tovagliolo.","Indizio 2: Esamina la dura recensione scritta dalla vittima contro uno scrittore dilettante.","Indizio 3: Samer lo Scrittore Rivale aveva un potente movente di vendetta e l'opportunità quando l'hostess si è allontanata."]
                },
                {
                    "tag":"Caso di Omicidio",
                    "difficulty":"easy",
                    "title":"Il Mistero della Stanza Chiusa",
                    "brief":"L'uomo d'affari Mamdouh Sabri è stato trovato accoltellato all'interno della sua camera d'albergo. Tutte le porte e le finestre erano saldamente chiuse dall'interno senza alcuna via d'uscita.",
                    "victim":"Vittima: Mamdouh Sabri (48).",
                    "culprit":"Khaled Manutenzione",
                    "evidence":[
                        {"name":"Condizionatore d'Aria","desc":"Bloccato con uno spessore di metallo per ritardare il meccanismo di chiusura automatica della porta."},
                        {"name":"Pistola Starter","desc":"Getta dalla finestra dell'ultimo piano."},
                        {"name":"Sottile Filo da Pesca","desc":"Lungo filo trasparente usato per il trucco della stanza chiusa."},
                        {"name":"Registro dell'Albergo","desc":"Mostra che solo il personale di manutenzione ha registrato accessi."},
                        {"name":"Diario della Vittima","desc":"Fa riferimento a tentativi di estorsione da parte del suo socio in affari."}
                    ],
                    "suspects":[
                        {"name":"Bahgat Partner","role":"Socio in Affari","alibi":"A cena con i clienti al piano terra.","qs":[{"q":"E il ricatto?","a":"Solo normali controversie commerciali."},{"q":"Come sei entrato nella stanza?","a":"Non sono mai entrato."},{"q":"Hai una copia delle chiavi?","a":"Solo la direzione dell'hotel."}]},
                        {"name":"Nadine Segretaria","role":"Assistente della Vittima","alibi":"Nella stanza adiacente che preparava i file di viaggio.","qs":[{"q":"Hai sentito una discussione?","a":"Un suono debole poi silenzio."},{"q":"Quando lo hai visto vivo l'ultima volta?","a":"Un'ora prima dell'incidente."},{"q":"Chi ha visitato la sera?","a":"L'addetto alla manutenzione."}]},
                        {"name":"Khaled Manutenzione","role":"Tecnico dell'Albergo","alibi":"Ha riparato una lampadina elettrica ed è uscito.","qs":[{"q":"Perché il set di attrezzi è stato lasciato lì?","a":"L'ho lasciato per errore sul tavolo."},{"q":"Hai manomesso il condizionatore?","a":"Mai, ho lavorato solo sulle luci."},{"q":"Ti ha chiesto qualcosa?","a":"Ha chiesto totale silenzio."}]},
                        {"name":"Raouf Fratello","role":"Fratello della Vittima","alibi":"Dormiva nella sua camera al 3° piano.","qs":[{"q":"Disputa sull'eredità?","a":"Abbiamo diviso tutto amichevolmente."},{"q":"Come entrare nella stanza chiusa?","a":"Non ero lì."},{"q":"E il filo?","a":"Non so nulla di trucchi."}]}
                    ],
                    "explain":"Khaled il tecnico della manutenzione ha usato il filo e il trucco del condizionatore per fingere una stanza chiusa dall'interno dopo aver commesso il crimine.",
                    "hints":["Indizio 1: Esamina l'unità del condizionatore d'aria e il sottile filo da pesca trovato nella stanza.","Indizio 2: Controlla i registri di accesso dell'hotel e gli attrezzi del tecnico lasciati indietro.","Indizio 3: Khaled il tecnico della manutenzione ha usato uno spessore di metallo e un trucco con il filo tramite l'unità AC per fingere la stanza chiusa."]
                },
                {
                    "tag":"Caso di Furto",
                    "difficulty":"medium",
                    "title":"Capolavoro Rubato",
                    "brief":"Un dipinto originale di un artista di fama mondiale è stato rubato dalla Galleria Internazionale, lasciando una replica esatta appesa al suo posto.",
                    "victim":"Luogo: Galleria d'Arte Internazionale - Valore di 5M$.",
                    "culprit":"Fouad il Pittore",
                    "evidence":[
                        {"name":"Cornice di Legno Vuota","desc":"Trovata nascosta dietro il deposito degli attrezzi."},
                        {"name":"Pennello Professionale","desc":"Porta una formulazione di pittura a olio fresca."},
                        {"name":"Impronta Chiara","desc":"Sul muro dietro il falso dipinto replica."},
                        {"name":"Biglietto del Treno","desc":"Datato la notte del furto diretto al confine."},
                        {"name":"Registro della Telecamera di Sicurezza","desc":"Disabilitato esattamente per 10 minuti."}
                    ],
                    "suspects":[
                        {"name":"Fouad il Pittore","role":"Artista e Falsario","alibi":"Dipingeva un ritratto a casa tutta la notte.","qs":[{"q":"Perché possiedi gli stessi colori ad olio?","a":"Sono un artista, li uso."},{"q":"Hai visitato la galleria?","a":"Sì, per vedere le mostre."},{"q":"Dov'eri alle 02:00?","a":"Nel mio studio privato."}]},
                        {"name":"Hanan Critica d'Arte","role":"Critica d'Arte","alibi":"Scriveva un articolo di stampa nella sala stampa.","qs":[{"q":"Hai notato il falso?","a":"No, la replica sembrava autentica."},{"q":"Chi ha abilità di copia?","a":"Ovviamente Fouad."},{"q":"Quando te ne sei andata?","a":"Intorno mezzanotte."}]},
                        {"name":"Jamal Guardia","role":"Guardia della Galleria","alibi":"In giro di sicurezza al piano superiore.","qs":[{"q":"Perché la telecamera ha fallito?","a":"Un guasto di interruzione di corrente."},{"q":"Hai visto qualcuno di strano?","a":"Nessuno in assoluto."},{"q":"Quando è iniziata la ronda?","a":"Alle 23:00."}]},
                        {"name":"Sahar Collezionista","role":"Collezionista d'Arte","alibi":"A una cena con investitori.","qs":[{"q":"Hai offerto di comprare il quadro?","a":"Il museo ha rifiutato di vendere."},{"q":"Dov'eri al momento del furto?","a":"In un ristorante di lusso."},{"q":"Sospetti di qualcuno?","a":"Fouad ne era ossessionato."}]}
                    ],
                    "explain":"Fouad il Pittore ha usato le sue abilità di falsario per scambiare il dipinto originale con la sua replica, lasciando cadere il suo pennello personalizzato.",
                    "hints":["Indizio 1: Ispeziona il pennello professionale lasciato indietro con vernice a olio fresca.","Indizio 2: Guarda l'impronta sul muro direttamente dietro il dipinto replica falso.","Indizio 3: Fouad il Pittore è l'unico sospettato che possiede le precise capacità di falsificazione e la formulazione di vernice necessarie per lo scambio."]
                },
                {
                    "tag":"Caso di Omicidio",
                    "difficulty":"medium",
                    "title":"Omicidio nel Laboratorio di Mezzanotte",
                    "brief":"Il chimico Dr. Murad è stato ucciso nel suo laboratorio chiuso a chiave. Il suo ultimo codice digitato al PC indica il suo assassino.",
                    "victim":"Vittima: Dr. Murad (55) - Chimico.",
                    "culprit":"Hani Assistente Capo",
                    "evidence":[
                        {"name":"Becher Frantumato","desc":"Contiene residui di tossina di agente nervoso."},
                        {"name":"Computer Portatile","desc":"Ultimo cifrario digitato corrispondente al nome dell'assistente capo."},
                        {"name":"Guanto di Gomma","desc":"Guanto di gomma strappato trovato vicino alla finestra del laboratorio."},
                        {"name":"Rapporto Confidenziale","desc":"Rivela il furto di una ricerca chimica critica."},
                        {"name":"Registro delle tessere di accesso","desc":"Singolo ingresso tramite accesso valido con tessera magnetica."}
                    ],
                    "suspects":[
                        {"name":"Dr. Samir","role":"Collega di Ricerca","alibi":"Conduceva esperimenti nell'edificio vicino.","qs":[{"q":"Natura della ricerca rubata?","a":"Formule medicinali avanzate."},{"q":"Perché sei entrato nel suo registro?","a":"Cercavo un articolo scientifico."},{"q":"Dov'eri al momento del crimine?","a":"Nel mio laboratorio privato."}]},
                        {"name":"Nada Studentessa","role":"Assistente di Laboratorio","alibi":"Uscita presto per lavorare alla tesi.","qs":[{"q":"Quando te ne sei andata?","a":"Alle 19:00."},{"q":"Chi aveva la tessera notturna?","a":"Il Dr. Murad e il Dr. Samir."},{"q":"Era preoccupato?","a":"Riceveva telefonate minacciose."}]},
                        {"name":"Hani Assistente Capo","role":"Assistente Senior","alibi":"A casa con la famiglia.","qs":[{"q":"Perché il PC ha digitato il tuo nome?","a":"Uno scherzo o una falsa accusa."},{"q":"Accesso alla ricerca?","a":"Sì, pieno accesso."},{"q":"Dove sei stato tutta la notte?","a":"A casa con la mia famiglia."}]},
                        {"name":"Souad Ricercatrice","role":"Studiosa in Visita","alibi":"A una conferenza scientifica fuori città.","qs":[{"q":"Quando sei tornata in città?","a":"La mattina dopo."},{"q":"Hai avuto dispute con lui?","a":"Ha rifiutato la pubblicazione del mio articolo."},{"q":"Conosci Hani?","a":"Sì, collega di lavoro."}]}
                    ],
                    "explain":"Hani Assistente Capo ha ucciso il Dr. Murad per rubare la ricerca, non accorgendosi che la vittima aveva digitato la sua identificazione in codice.",
                    "hints":["Indizio 1: Esamina il becher frantumato con la tossina nervosa e il computer portatile.","Indizio 2: Rivedi chi aveva pieno accesso alla ricerca e autorizzazione ad entrare nel laboratorio.","Indizio 3: L'ultimo codice PC digitato dalla vittima punta esplicitamente a Hani Assistente Capo."]
                },
                {
                    "tag":"Caso di Omicidio",
                    "difficulty":"medium",
                    "title":"Assassinio sull'Espresso",
                    "brief":"Un ex agente dell'intelligence è morto all'interno di una carrozza letto del treno a causa di un colpo d'arma da fuoco con silenziatore in un tunnel buio.",
                    "victim":"Vittima: Kamal Eddine (62).",
                    "culprit":"Salim Misterioso",
                    "evidence":[
                        {"name":"Silenziatore in Metallo","desc":"Gettato sui binari durante l'attraversamento del tunnel."},
                        {"name":"Biglietto Falsificato","desc":"Biglietto con identità falsa seduto nella vettura successiva."},
                        {"name":"File Segreto trafugato","desc":"Mancante dalla valigetta personale della vittima."},
                        {"name":"Tracce di Inchiostro Invisibile","desc":"Trovate sulle dita del sospettato n. 2."},
                        {"name":"Registro dei Movimenti dei Passeggeri","desc":"Mostra movimenti sospetti tra le carrozze."}
                    ],
                    "suspects":[
                        {"name":"Maher Giornalista","role":"Passeggero della Carrozza","alibi":"Scriveva un articolo sul laptop per tutto il viaggio.","qs":[{"q":"Destinazione?","a":"Capitale per un colloquio di lavoro."},{"q":"Hai sentito il suono dello sparo?","a":"Solo l'attrito delle ruote del treno."},{"q":"Perché sei nervoso?","a":"Non mi piacciono i lunghi viaggi in treno."}]},
                        {"name":"Salim Misterioso","role":"Uomo d'Affari","alibi":"Dormiva nella sua cabina privata chiusa a chiave.","qs":[{"q":"Motivo del viaggio improvviso?","a":"Affare urgente."},{"q":"Perché l'inchiostro sulle dita?","a":"Firma di contratti con penna liquida."},{"q":"Conosci la vittima?","a":"Mai vista in vita mia."}]},
                        {"name":"Rasha Assistente","role":"Hostess del Treno","alibi":"Serviva bevande nella carrozza anteriore.","qs":[{"q":"Chi si è spostato tra le carrozze?","a":"Una persona con un cappotto nero."},{"q":"Luci spente nel tunnel?","a":"No, normale buio del tunnel."},{"q":"Hai notato qualcosa di insolito?","a":"Debole odore di polvere da sparo."}]},
                        {"name":"Jehad Guardia","role":"Scorta Privata","alibi":"Sorvegliava la porta del carico posteriore.","qs":[{"q":"Qualcuno ti è passato accanto?","a":"Nessuno ha attraversato la porta posteriore."},{"q":"Porti un'arma da fuoco?","a":"Sì, pistola d'ordinanza ufficiale."},{"q":"Il turno quando è iniziato?","a":"Dalla partenza."}]}
                    ],
                    "explain":"Salim Misterioso ha eseguito un assassinio silenzioso usando un silenziatore nel tunnel sotto falsa identità.",
                    "hints":["Indizio 1: Controlla il silenziatore in metallo gettato sui binari e i registri dei movimenti dei passeggeri.","Indizio 2: Guarda le tracce di inchiostro invisibile e il biglietto falsificato trovato nella carrozza successiva.","Indizio 3: Salim Misterioso ha viaggiato sotto falsa identità e ha eseguito la sparatoria silenziosa nel tunnel."]
                },
                {
                    "tag":"Caso di Furto",
                    "difficulty":"medium",
                    "title":"Rapina in Cassaforte",
                    "brief":"Milioni sono svaniti dalla cassaforte della compagnia nazionale dei cavi senza scasso; la chiave digitale era solo del Direttore.",
                    "victim":"Compagnia Nazionale Cavi - Perdita di 2 Milioni di $.",
                    "culprit":"Ziad Contabile",
                    "evidence":[
                        {"name":"Clip di Telecamera Nascosta","desc":"Mostra un individuo che inserisce con attenzione il codice PIN."},
                        {"name":"Foglio di Appunti","desc":"Contiene indizi sul vecchio codice di accesso."},
                        {"name":"Impronta Parziale","desc":"Sul pulsante di invio della tastiera della cassaforte."},
                        {"name":"Tessera Elettronica","desc":"Tessera magnetica di backup mancante dal cassetto."},
                        {"name":"Fattura di Debito","desc":"Appartiene al contabile dell'azienda."}
                    ],
                    "suspects":[
                        {"name":"Saleh Direttore","role":"Direttore dell'Azienda","alibi":"In riunione del consiglio per tutta la mattina.","qs":[{"q":"Chi conosce il PIN?","a":"Solo io e il contabile."},{"q":"Hai perso la chiave di backup?","a":"No, sempre in tasca."},{"q":"Chi sospetti?","a":"Il contabile ha pesanti debiti."}]},
                        {"name":"Fatima Segretaria","role":"Segretaria Esecutiva","alibi":"Pianificava appuntamenti nella hall.","qs":[{"q":"Hai accesso alla cassaforte?","a":"No, mai."},{"q":"Chi è entrato in ufficio?","a":"Il contabile e le addette alle pulizie."},{"q":"Hai notato qualcosa?","a":"La porta era leggermente socchiusa."}]},
                        {"name":"Ziad Contabile","role":"Contabile Finanziario","alibi":"Preparava l'audit annuale in ufficio.","qs":[{"q":"Perché pesanti debiti?","a":"Problemi familiari ora risolti."},{"q":"Come conosci il codice PIN?","a":"Parte del dovere finanziario a volte."},{"q":"Dov'eri ieri a mezzogiorno?","a":"Alla filiale della banca."}]},
                        {"name":"Adel Sicurezza","role":"Guardia dell'Edificio","alibi":"Sorvegliava l'ingresso principale.","qs":[{"q":"Qualcuno è uscito con borse?","a":"Solo il personale regolare che se ne va."},{"q":"CCTV funzionante?","a":"Funziona perfettamente."},{"q":"Inizio turno?","a":"La mattina presto."}]}
                    ],
                    "explain":"Ziad Contabile ha sfruttato il movente del debito e la conoscenza del PIN per rubare i soldi della cassaforte usando la scheda di backup.",
                    "hints":["Indizio 1: Esamina la clip della telecamera nascosta che mostra l'inserimento del PIN e la tessera di backup mancante.","Indizio 2: Controlla la fattura del debito finanziario appartenente al personale.","Indizio 3: Ziad Contabile aveva sia il movente finanziario (pesanti debiti) che la conoscenza del PIN per svuotare la cassaforte."]
                },
                {
                    "tag":"Caso di Omicidio",
                    "difficulty":"medium",
                    "title":"Crimine sulla Spiaggia dell'Andalusia",
                    "brief":"Un pescatore è stato trovato morto sulla sabbia all'alba accanto a una piccola barca con il motore acceso.",
                    "victim":"Vittima: Ibrahim Pescatore (50).",
                    "culprit":"Hamza Giovane",
                    "evidence":[
                        {"name":"Remo di Legno Rotto","desc":"Macchiato di sangue con segni di lotta."},
                        {"name":"Rete da Pesca Strappata","desc":"Sparsa vicino alla linea dell'acqua."},
                        {"name":"Orologio da Polso Economico","desc":"Appartiene a un giovane del villaggio locale."},
                        {"name":"Impronte sulla Sabbia","desc":"Che portano verso la strada costiera."},
                        {"name":"Cassetta degli Attrezzi Aperta","desc":"Strumenti affilati mancanti."}
                    ],
                    "suspects":[
                        {"name":"Hamza Giovane","role":"Giovane Disoccupato","alibi":"Dormiva a casa tutta la notte.","qs":[{"q":"Perché è stato trovato l'orologio?","a":"Devo averlo perso nuotando."},{"q":"Hai avuto discussioni?","a":"Abbiamo litigato per i diritti di pesca."},{"q":"Dov'eri alle 04:00?","a":"Nel mio letto."}]},
                        {"name":"Mousa Pescatore","role":"Pescatore Rivale","alibi":"A pesca di notte in alto mare.","qs":[{"q":"Orario di ritorno?","a":"All'alba."},{"q":"Hai visto Hamza nelle vicinanze?","a":"L'ho visto vicino alla barca."},{"q":"Rapporto con la vittima?","a":"Equa concorrenza sul lavoro."}]},
                        {"name":"Salem Proprietario del Caffè","role":"Commerciante","alibi":"Apriva il caffè.","qs":[{"q":"Hai sentito urla?","a":"Solo le onde dell'oceano."},{"q":"Chi visita la spiaggia di notte?","a":"Pescatori e giovani."},{"q":"Hai visto estranei?","a":"Nessuno."}]},
                        {"name":"Khadija Moglie","role":"Casalinga","alibi":"A casa con i bambini.","qs":[{"q":"Quando è uscito?","a":"A mezzanotte come al solito."},{"q":"Ha avuto problemi?","a":"Disputa finanziaria con Hamza."},{"q":"Ha lasciato un biglietto?","a":"No."}]}
                    ],
                    "explain":"Hamza Giovane ha litigato per i posti di pesca e ha colpito il pescatore con un remo, facendo cadere il suo orologio.",
                    "hints":["Indizio 1: Ispeziona il remo di legno rotto e l'orologio da polso economico trovato nella sabbia.","Indizio 2: Controlla le impronte che si allontanano dalla spiaggia verso la strada costiera.","Indizio 3: Hamza Giovane aveva continue dispute sui diritti di pesca e ha fatto cadere il suo orologio personale durante la violenta colluttazione."]
                },
                {
                    "tag":"Scomparsa",
                    "difficulty":"hard",
                    "title":"Dipinto Antico Scomparso",
                    "brief":"Un dipinto raro è svanito dall'antico palazzo reale senza attivare il sistema di allarme.",
                    "victim":"Palazzo del Tardo Principe - Opera d'Arte Rara.",
                    "culprit":"Maher Decoratore",
                    "evidence":[
                        {"name":"Strumento di Bypass dell'Allarme","desc":"Gadget hi-tech per il bypass."},
                        {"name":"Guanto di Stoffa","desc":"Porta la vecchia polvere del palazzo."},
                        {"name":"Piantina del Palazzo","desc":"Trovata sul telefono del decoratore."},
                        {"name":"Tessuto Strappato","desc":"Strappato dalla tenda della stanza."},
                        {"name":"Registro dei Visitatori","desc":"Registra la visita notturna dell'interior designer."}
                    ],
                    "suspects":[
                        {"name":"Principe Khalid","role":"Erede del Palazzo","alibi":"Viaggio d'affari all'estero.","qs":[{"q":"Chi ha accesso?","a":"Io e il team di manutenzione."},{"q":"Il dipinto è assicurato?","a":"Sì per milioni."},{"q":"Sospetti dello staff?","a":"Nuovo interior designer."}]},
                        {"name":"Maher Decoratore","role":"Esperto di Restauro","alibi":"Misurava i muri per la ristrutturazione.","qs":[{"q":"Perché possiedi le piantine?","a":"Richiesto per il lavoro di design."},{"q":"Bypassato l'allarme?","a":"Ho solo controllato i cavi danneggiati."},{"q":"Dov'è il dipinto?","a":"Non so nulla."}]},
                        {"name":"Souad Storica","role":"Archivista","alibi":"Catalogava oggetti nell'archivio.","qs":[{"q":"Ultima visita alla stanza?","a":"La settimana scorsa."},{"q":"Hai notato cambiamenti?","a":"Tutto al suo posto."},{"q":"A chi piace l'arte?","a":"Il principe stesso."}]},
                        {"name":"Essam Capo Guardia","role":"Capo della Guardia","alibi":"Sorvegliava i cancelli esterni.","qs":[{"q":"Hai notato intrusi?","a":"La telecamera non mostrava nessuno."},{"q":"Allarme attivato?","a":"Disattivato per minuti poi ripreso."},{"q":"Chi ha disarmato il sistema?","a":"Un esperto."}]}
                    ],
                    "explain":"Maher Decoratore ha usato l'accesso alle piantine e le competenze tecniche per disarmare l'allarme e rubare il dipinto.",
                    "hints":["Indizio 1: Controlla lo strumento di bypass dell'allarme e le piantine del palazzo trovate sul telefono del decoratore.","Indizio 2: Rivedi il registro dei visitatori che mostra l'accesso notturno dell'interior designer.","Indizio 3: Maher Decoratore ha utilizzato il suo accesso alle piantine e i suoi gadget tecnici per disarmare l'allarme e rubare il dipinto."]
                },
                {
                    "tag":"Caso di Omicidio",
                    "difficulty":"hard",
                    "title":"Omicidio di un Attore Famoso",
                    "brief":"Un attore di primo piano è stato trovato morto nella stanza verde del teatro in seguito all'ultima rappresentazione sul palco.",
                    "victim":"Vittima: Rafat Rami (45).",
                    "culprit":"Bassem Sostituto",
                    "evidence":[
                        {"name":"Copione Strappato","desc":"Dure note scritte sul ruolo principale."},
                        {"name":"Corda di Scena","desc":"Finto attrezzo di scena convertito in un vero strumento di strangolamento."},
                        {"name":"Impronta di Scarpa in Legno","desc":"Dietro il corridoio buio dietro le quinte."},
                        {"name":"Tabulati Telefonici","desc":"Minacce ripetute da un attore sostituto minore."},
                        {"name":"Costume di Scena","desc":"Getta nel cestino dei rifiuti."}
                    ],
                    "suspects":[
                        {"name":"Salaf Attrice","role":"Attrice Protagonista","alibi":"Festeggiava con i fan in caffetteria.","qs":[{"q":"Rapporto con lui?","a":"Rigorosamente rivalità artistica."},{"q":"Avete litigato?","a":"In competizione per il ruolo da protagonista."},{"q":"Dov'eri al momento dell'omicidio?","a":"Con i fan nella hall."}]},
                        {"name":"Sami Direttore","role":"Regista Teatrale","alibi":"Controllava l'illuminazione con la troupe.","qs":[{"q":"Com'è stata la performance della vittima?","a":"Ottima ma arrogante."},{"q":"Chi è entrato nella stanza verde?","a":"Un attore sostituto arrabbiato."},{"q":"Hai sentito urla?","a":"La musica ha coperto i suoni."}]},
                        {"name":"Ziad Scrittore","role":"Drammaturgo","alibi":"Firmava libri per il pubblico fuori.","qs":[{"q":"Ha cambiato il copione?","a":"Chiedeva modifiche costantemente."},{"q":"Dove dopo il sipario?","a":"Firmavo autografi di libri."},{"q":"Ti piace la sua recitazione?","a":"Si adattava bene al ruolo."}]},
                        {"name":"Bassem Sostituto","role":"Attore Secondario","alibi":"Si cambiava d'abito nel camerino.","qs":[{"q":"Perché minacciarlo?","a":"Mi ha rubato avidamente il ruolo da protagonista."},{"q":"Lo hai ucciso tu?","a":"Ero arrabbiato ma non ho ucciso."},{"q":"Dove esattamente?","a":"Nella stanza da solo."}]}
                    ],
                    "explain":"Bassem Sostituto ha strangolato Rafat per rabbia a causa del ruolo principale rubato usando un attrezzo dietro le quinte.",
                    "hints":["Indizio 1: Ispeziona i tabulati telefonici che mostrano ripetute minacce da parte di un collega.","Indizio 2: Controlla la corda di scena convertita in un vero strumento di strangolamento dietro le quinte.","Indizio 3: Bassem Sostituto aveva un forte movente di rabbia dopo che Rafat gli ha rubato il ruolo da protagonista."]
                },
                {
                    "tag":"Caso di Furto",
                    "difficulty":"hard",
                    "title":"Rapina al Treno d'Oro",
                    "brief":"Una spedizione di lingotti d'oro del valore di 1 milione di dollari è svanita da un treno merci veloce a metà viaggio tra le città di notte.",
                    "victim":"Express Transit Corp - Lingotti d'Oro.",
                    "culprit":"Sameh Macchinista",
                    "evidence":[
                        {"name":"Martinetto Idraulico","desc":"Nascosto accanto ai binari ferroviari."},
                        {"name":"Walkie-Talkie","desc":"Utilizza la frequenza radio di sicurezza della compagnia ferroviaria."},
                        {"name":"Guanto da Lavoro Sporco","desc":"Porta il logo della compagnia di spedizioni."},
                        {"name":"Pesanti Tracce di Autocarro","desc":"Vicino al marcatore di arresto di emergenza del treno."},
                        {"name":"Registro di Manutenzione","desc":"Mostra un'interruzione intenzionale di 1 minuto del freno del treno."}
                    ],
                    "suspects":[
                        {"name":"Sameh Macchinista","role":"Autista Merci","alibi":"Fermato a causa di un improvviso guasto al segnale.","qs":[{"q":"Perché fermarsi qui?","a":"Segnale rosso di emergenza dalla torre."},{"q":"Conosci il valore del carico?","a":"Sì, oro protetto."},{"q":"Chi ha la radio?","a":"Il team di controllo."}]},
                        {"name":"Majed Dispatcher","role":"Controllore di Segnale","alibi":"Monitorava le linee dalla torre di controllo.","qs":[{"q":"Hai ordinato l'arresto del treno?","a":"I segnali erano verdi."},{"q":"Chi ha manomesso il pannello?","a":"Qualcuno con la frequenza."},{"q":"Dov'eri all'01:00?","a":"Nella torre da solo."}]},
                        {"name":"Daniel Guardia","role":"Scorta di Carico","alibi":"Sorvegliava la porta del vagone posteriore interno.","qs":[{"q":"Perché non hai sparato?","a":"Stordito dal gas."},{"q":"Chi c'era dentro?","a":"Solo io e le scatole."},{"q":"Quando ti sei svegliato?","a":"Un'ora dopo la sosta."}]},
                        {"name":"Essam Meccanico","role":"Lavoratore di Manutenzione","alibi":"Riparava i binari alla stazione vicina.","qs":[{"q":"Possiedi un martinetto idraulico?","a":"Sì, per la manutenzione dei binari."},{"q":"Dove erano gli attrezzi?","a":"Nel camion di servizio."},{"q":"Ti piacciono i soldi facili?","a":"A chi non piacciono? Ma sono onesto."}]}
                    ],
                    "explain":"Sameh Macchinista ha colluso con Essam Meccanico per fermare intenzionalmente il treno e scaricare l'oro.",
                    "hints":["Indizio 1: Controlla il martinetto idraulico e il walkie-talkie sintonizzato sulla frequenza radio della compagnia.","Indizio 2: Rivedi il registro di manutenzione che mostra un'interruzione intenzionale di 1 minuto del freno d'emergenza.","Indizio 3: Sameh il Macchinista ha colluso con il meccanico Essam per fermare il treno e scaricare la spedizione d'oro."]
                },
                {
                    "tag":"Caso di Omicidio",
                    "difficulty":"hard",
                    "title":"Morte dell'Archeologo",
                    "brief":"Un rinomato archeologo è stato trovato morto all'interno di una tomba appena aperta con una cassa di reliquie forzata.",
                    "victim":"Vittima: Dr. Fadel (58).",
                    "culprit":"Maher Contrabbandiere",
                    "evidence":[
                        {"name":"Piccone Archeologico","desc":"Macchiato di sangue della vittima e impronte."},
                        {"name":"Statuetta d'Oro","desc":"Fatta cadere dal killer in fuga."},
                        {"name":"Torcia Elettrica","desc":"Porta il marchio di un negozio di ferramenta locale."},
                        {"name":"Impronte di Sporcizia","desc":"Che portano verso l'ingresso principale degli scavi."},
                        {"name":"Registro della Spedizione","desc":"Dettagli della disputa sulla divisione dei ritrovamenti."}
                    ],
                    "suspects":[
                        {"name":"Dr. Adel","role":"Co-Leader della Spedizione","alibi":"Documentava iscrizioni nella camera Ovest.","qs":[{"q":"Perché litigare?","a":"Sul credito della ricerca."},{"q":"Entrato nella stanza del tesoro?","a":"Solo la mattina."},{"q":"Dov'eri al momento del crimine?","a":"Nell'altra camera."}]},
                        {"name":"Souad Assistente","role":"Assistente di Scavo","alibi":"Organizzava gli attrezzi nel campo esterno.","qs":[{"q":"Chi ha visitato la tomba di notte?","a":"Il Dr. Murad da solo."},{"q":"Reliquie mancanti?","a":"Rara statuetta d'oro."},{"q":"Quando è stato scoperto?","a":"La mattina dopo."}]},
                        {"name":"Maher Contrabbandiere","role":"Individuo Sospetto","alibi":"Cacciava fauna selvatica vicino al margine del deserto.","qs":[{"q":"Perché vicino alla tomba?","a":"Cacciavo selvaggina."},{"q":"Perché è stata trovata la torcia?","a":"L'ho persa prima."},{"q":"Contrabbando di reliquie?","a":"Falsa accusa."}]},
                        {"name":"Jehad Guardia","role":"Guardia del Sito","alibi":"Sorvegliava le tende della spedizione fuori.","qs":[{"q":"Hai visto estranei avvicinarsi?","a":"Ho visto una persona con una borsa pesante."},{"q":"Perché non fermarli?","a":"Pensavo fosse un ricercatore."},{"q":"Hai sentito urla?","a":"Il vento era troppo forte."}]}
                    ],
                    "explain":"Maher Contrabbandiere si è infiltrato nella tomba per rubare la statuetta d'oro e ha assassinato l'archeologo quando è stato scoperto.",
                    "hints":["Indizio 1: Ispeziona la torcia elettrica marchiata con i contrassegni del negozio di ferramenta locale lasciata sulla scena.","Indizio 2: Controlla la statuetta d'oro lasciata dal colpevole in fuga.","Indizio 3: Maher Contrabbandiere si è infiltrato nella tomba per il commercio illegale e ha assassinato il Dr. Fadel quando è stato scoperto."]
                },
                {
                    "tag":"Scomparsa",
                    "difficulty":"hard",
                    "title":"Jet Privato Svanito",
                    "brief":"Un business jet privato è svanito nello spazio aereo montuoso accidentato vicino a una fitta pineta.",
                    "victim":"Aeromobile Privato - 4 Passeggeri.",
                    "culprit":"Samer Co-Pilota",
                    "evidence":[
                        {"name":"Scatola di Volo Schiacciata","desc":"Mostra manomissione deliberata del sistema di autopilota."},
                        {"name":"Carburante Contaminato","desc":"Agente chimico aggiunto che ha causato lo spegnimento del motore."},
                        {"name":"Falsa Lettera d'Addio","desc":"Trovata sul laptop dell'assistente."},
                        {"name":"Linee di Paracadute","desc":"Imigliate nei rami alti dei pini."},
                        {"name":"Piano di Volo Alterato","desc":"Devia intenzionalmente il percorso verso le montagne."}
                    ],
                    "suspects":[
                        {"name":"Capitano Rami","role":"Pilota Capo","alibi":"Guidava l'aereo secondo le direzioni ufficiali.","qs":[{"q":"Perché il cambio di rotta?","a":"Per evitare una tempesta grave."},{"q":"Guasto al motore?","a":"I motori si sono fermati inaspettatamente."},{"q":"Luogo dello schianto?","a":"In mezzo alla foresta."}]},
                        {"name":"Samer Co-Pilota","role":"Primo Ufficiale","alibi":"Monitorava il pannello degli strumenti della cabina di pilotaggio.","qs":[{"q":"Chi ha cambiato il piano?","a":"Il capitano ha chiesto di risparmiare carburante."},{"q":"Hai lasciato l'aereo?","a":"Sono rimasto a bordo."},{"q":"E il paracadute?","a":"Articolo del kit di emergenza."}]},
                        {"name":"Monir Investitore","role":"Proprietario dell'Aeromobile","alibi":"Esaminava documenti sul sedile del passeggero.","qs":[{"q":"Il jet è assicurato?","a":"Assicurato pesantemente."},{"q":"Hai notato tensione?","a":"I piloti hanno discusso a bassa voce."},{"q":"Dov'è il bagaglio?","a":"Bruciato nello schianto."}]},
                        {"name":"Laila Ufficiale","role":"Aiutante Personale","alibi":"Seduta nella sezione posteriore.","qs":[{"q":"Hai sentito un'esplosione?","a":"Strano suono poi rapida discesa."},{"q":"Ti piace volare?","a":"Non mi piace l'alta quota."},{"q":"Chi ci guadagna?","a":"Le polizze assicurative."}]}
                    ],
                    "explain":"Samer Co-Pilota ha sabotato il carburante, alterato la navigazione e si è lanciato con il paracadute prima dello schianto.",
                    "hints":["Indizio 1: Controlla la scatola di volo schiacciata e il carburante contaminato che ha portato al guasto del motore.","Indizio 2: Ispeziona le linee del paracadute impigliate nei rami alti dei pini vicino al percorso dello schianto.","Indizio 3: Samer Co-Pilota ha sabotato il volo, alterato la navigazione e si è lanciato con il paracadute prima dell'impatto."]
                },
                {
                    "tag":"Caso di Omicidio",
                    "difficulty":"extreme",
                    "title":"Veleno Invisibile",
                    "brief":"Un magnate avvelenato all'interno di un ufficio con cassaforte fortificata utilizzando un raro composto biologico non rilevabile.",
                    "victim":"Vittima: Fouad Al-Moatasem (60).",
                    "culprit":"Dr. Ziad",
                    "evidence":[
                        {"name":"Contagocce Medico","desc":"Contiene micro gocce di neurotossina."},
                        {"name":"Bicchiere d'Acqua","desc":"Mescolato con composto biologico inodore."},
                        {"name":"Guanto Chirurgico","desc":"Getta nel cestino dei rifiuti."},
                        {"name":"Testamento Aggiornato","desc":"Riassegna l'eredità a una fondazione di beneficenza."},
                        {"name":"Filmato della Telecamera di Sicurezza","desc":"Mostra un individuo che indossa un camice da medico."}
                    ],
                    "suspects":[
                        {"name":"Dr. Ziad","role":"Medico Personale","alibi":"Controllava la pressione sanguigna della vittima nel pomeriggio.","qs":[{"q":"Medicina giornaliera?","a":"Solo vitamine per il cuore."},{"q":"Perché è stato trovato il contagocce?","a":"Usato per gocce oculari."},{"q":"Sai del nuovo testamento?","a":"No, non lo sapevo."}]},
                        {"name":"Sawsan Moglie","role":"Moglie della Vittima","alibi":"Preparava il tè nella cucina esterna.","qs":[{"q":"Chi ha bevuto l'acqua?","a":"Mio marito da solo."},{"q":"Disputa sul testamento?","a":"Addolorata ma non ho ucciso."},{"q":"Chi ha fatto visita oggi?","a":"Il suo medico personale."}]},
                        {"name":"Maher Farmacista","role":"Farmacista di Famiglia","alibi":"Gestiva la farmacia tutto il giorno.","qs":[{"q":"Dispensato la tossina?","a":"Solo farmaci autorizzati."},{"q":"Chi detiene il composto biologico?","a":"Laboratori di alto livello."},{"q":"Visitato la villa?","a":"Un mese fa."}]},
                        {"name":"Omar Guardia","role":"Guardia della Villa","alibi":"Sorvegliava il cancello principale.","qs":[{"q":"Chi è entrato con il camice da medico?","a":"Il dottor Ziad come al solito."},{"q":"Hai visto estranei?","a":"Nessun estraneo."},{"q":"Inizio turno?","a":"La mattina presto."}]}
                    ],
                    "explain":"Dr. Ziad Medico Personale ha avvelenato la fornitura di medicinali usando un composto biologico per rivendicare i fondi della tenuta.",
                    "hints":["Indizio 1: Esamina il contagocce medico contenente micro-dosi di neurotossina.","Indizio 2: Controlla il filmato della telecamera di sicurezza che mostra qualcuno con il camice da medico che entra nell'ufficio della cassaforte fortificata.","Indizio 3: Dr. Ziad Medico Personale ha avvelenato la fornitura di medicinali della vittima per assicurarsi i fondi dell'eredità."]
                },
                {
                    "tag":"Caso di Furto",
                    "difficulty":"extreme",
                    "title":"Rapina al Museo Locale",
                    "brief":"Antiche statue di bronzo sono svanite dalla teca espositiva del museo locale senza rompere le serrature.",
                    "victim":"Museo Locale - 3 Statue.",
                    "culprit":"Rami Curatore",
                    "evidence":[
                        {"name":"Set di Chiavi Standard","desc":"Sblocca la teca di vetro senza intoppi."},
                        {"name":"Segno d'Inchiostro Blu","desc":"Sulla maniglia del mobile espositivo."},
                        {"name":"Registro d'Ingresso","desc":"Mostra che il curatore si è registrato a tardissima notte."},
                        {"name":"Borsa di Tela","desc":"Lasciata dietro le panche dei posti a sedere."},
                        {"name":"Ricevuta di Vendita","desc":"Mostra la vendita di oggetti simili a un commerciante."}
                    ],
                    "suspects":[
                        {"name":"Rami Curatore","role":"Curatore del Museo","alibi":"Aggiornava i registri in ufficio.","qs":[{"q":"Chi ha la chiave del display?","a":"Solo io."},{"q":"Perché ti sei registrato a tarda notte?","a":"Riesaminavo l'inventario."},{"q":"Dove sono le statue?","a":"Rubate, non so da chi."}]},
                        {"name":"Souad Guardia","role":"Guardia del Museo","alibi":"Di stanza al cancello principale.","qs":[{"q":"Qualcuno ha portato borse?","a":"Ho visto Rami portare una borsa di tela."},{"q":"Allarme attivato?","a":"No, è stata usata la chiave originale."},{"q":"Quando se n'è andato Rami?","a":"Dopo mezzanotte."}]},
                        {"name":"Ziad Visitatore","role":"Appassionato di Antiquariato","alibi":"Visitava le mostre durante il giorno.","qs":[{"q":"Quando hai visitato?","a":"Due giorni prima della rapina."},{"q":"Incontrato Rami?","a":"Ho parlato delle statue con lui."},{"q":"Compri oggetti d'antiquariato?","a":"Solo tramite mezzi legali."}]},
                        {"name":"Fatima Addetta alle Pulizie","role":"Personale di Pulizia","alibi":"Puliva le sale la mattina.","qs":[{"q":"Hai notato oggetti mancanti?","a":"Teca espositiva vuota la mattina."},{"q":"Chi entra di notte?","a":"Il curatore Rami."},{"q":"Aperte le teche espositive?","a":"Mai."}]}
                    ],
                    "explain":"Rami Curatore ha rubato le statue di bronzo usando la chiave maestra ufficiale e le ha vendute a un rivenditore illegale.",
                    "hints":["Indizio 1: Controlla il registro d'ingresso che mostra il curatore registratosi a tarda notte.","Indizio 2: Rivedi il set di chiavi standard utilizzato per aprire le teche espositive senza forzare le serrature.","Indizio 3: Rami Curatore ha usato le sue chiavi maestre ufficiali per rubare le statue di bronzo e venderle."]
                },
                {
                    "tag":"Caso di Omicidio",
                    "difficulty":"extreme",
                    "title":"Crimine nella Casa Infestata",
                    "brief":"Un anziano è stato trovato assassinato in una casa abbandonata nella foresta con la porta d'ingresso chiusa dall'interno.",
                    "victim":"Vittima: Saleh (75).",
                    "culprit":"Nabil Nipote",
                    "evidence":[
                        {"name":"Chiave di Riserva","desc":"Nascosta sotto lo zerbino della porta."},
                        {"name":"Clava di Legno","desc":"Macchiata di sangue con segni di lotta."},
                        {"name":"Cassetta dei Soldi","desc":"Svuotata e sparsa."},
                        {"name":"Impronta Fangosa","desc":"Vicino alla cornice della finestra posteriore."},
                        {"name":"Nota di Eredità","desc":"Dal nipote che chiede soldi."}
                    ],
                    "suspects":[
                        {"name":"Nabil Nipote","role":"Parente della Vittima","alibi":"Vendeva proprietà in città.","qs":[{"q":"Perché chiedere soldi?","a":"Era mio zio, aveva bisogno di aiuto."},{"q":"Conosci il nascondiglio delle chiavi?","a":"Sì, vecchio punto di nascondiglio."},{"q":"Dov'eri al momento dell'incidente?","a":"Al mercato in città."}]},
                        {"name":"Saeed Vicino","role":"Vicino Anziano","alibi":"Riparava la recinzione della fattoria.","qs":[{"q":"Hai sentito una discussione?","a":"Un debole urlo poi silenzio."},{"q":"Chi visita la casa?","a":"Suo nipote Nabil."},{"q":"Sei entrato in casa?","a":"Mai."}]},
                        {"name":"Mona Figlia","role":"Studentessa","alibi":"Raccoglieva erbe vicino alla foresta.","qs":[{"q":"Hai visto estranei?","a":"Ho visto Nabil portare una scatola di metallo."},{"q":"Quando è stato visto?","a":"Poco prima del tramonto."},{"q":"Lo hai detto a qualcuno?","a":"Ero spaventata."}]},
                        {"name":"Khaled Ufficiale","role":"Poliziotto in Pensione","alibi":"A pesca nel fiume vicino.","qs":[{"q":"Visitato Saleh di recente?","a":"Una settimana fa per il tè."},{"q":"Il suo umore?","a":"Timoroso dell'avidità di Nabil."},{"q":"Ti piace la foresta?","a":"Ci passo ore."}]}
                    ],
                    "explain":"Nabil Nipote ha ucciso suo zio per la cassetta dei soldi usando il nascondiglio della chiave di riserva che conosceva.",
                    "hints":["Indizio 1: Ispeziona la chiave di riserva nascosta sotto lo zerbino che solo la famiglia conosceva.","Indizio 2: Controlla la nota di eredità che chiede denaro trovata in casa.","Indizio 3: Nabil Nipote ha usato la chiave di riserva nascosta per entrare e assassinare suo zio per la cassetta dei soldi."]
                },
                {
                    "tag":"Scomparsa",
                    "difficulty":"extreme",
                    "title":"Documento Diplomatico",
                    "brief":"Un documento diplomatico top secret è svanito dalla valigetta dell'ambasciatore durante un ricevimento affollato.",
                    "victim":"Ambasciata Straniera - Documento Segreto.",
                    "culprit":"Daniel Giornalista",
                    "evidence":[
                        {"name":"Valigetta Corrispondente","desc":"Scambiata abilmente con l'originale."},
                        {"name":"Invito Falsificato","desc":"Ha un nome di ospite falso."},
                        {"name":"Clip di Telecamera di Sicurezza","desc":"Persona che indossa un abito formale scuro."},
                        {"name":"Fazzoletto di Seta","desc":"Profumato di profumo francese."},
                        {"name":"Registro degli Ospiti","desc":"Registra l'ingresso di un giornalista misterioso."}
                    ],
                    "suspects":[
                        {"name":"Ambasciatore Murad","role":"Capo Diplomatico","alibi":"Accoglieva gli ospiti nella sala principale.","qs":[{"q":"Chi tiene la valigetta?","a":"Sempre il mio assistente."},{"q":"Quando hai notato la perdita?","a":"Subito dopo che gli ospiti se ne sono andati."},{"q":"Il documento è critico?","a":"Top secret."}]},
                        {"name":"Saeed Assistente","role":"Assistente Diplomatico","alibi":"Serviva rinfreschi agli ospiti.","qs":[{"q":"Dov'era la valigetta?","a":"Accanto alla scrivania privata."},{"q":"Chi si è avvicinato?","a":"Giornalista straniero."},{"q":"L'hai lasciata sola?","a":"Per minuti per prendere file."}]},
                        {"name":"Daniel Giornalista","role":"Giornalista Straniero","alibi":"Intervistava i diplomatici.","qs":[{"q":"Perché scambiare la valigetta?","a":"Accidentale scambio di persona."},{"q":"Profumo francese?","a":"Regalo di un amico."},{"q":"Cerchi scoop?","a":"Cerco la verità."}]},
                        {"name":"Nadine Traduttrice","role":"Traduttrice Ufficiale","alibi":"Traduceva sul palco.","qs":[{"q":"Hai notato attività strane?","a":"Daniel si librava vicino alla valigetta."},{"q":"Chi lo ha invitato?","a":"Inviti privati."},{"q":"Documenti protetti?","a":"Protocollo rigoroso."}]}
                    ],
                    "explain":"Daniel Giornalista spia ha scambiato una valigetta identica durante la confusione del ricevimento per rubare il documento.",
                    "hints":["Indizio 1: Controlla la valigetta scambiata e il registro degli ospiti che registra un giornalista misterioso.","Indizio 2: Nota il fazzoletto di seta profumato di profumo francese lasciato sulla scena.","Indizio 3: Daniel Giornalista ha usato un falso invito e ha scambiato le valigette durante la confusione del ricevimento."]
                },
                {
                    "tag":"Caso di Omicidio",
                    "difficulty":"extreme",
                    "title":"Assassinio nel Grattacielo",
                    "brief":"Un magnate trovato morto per dardo avvelenato all'interno di un ufficio in una torre di vetro al 50° piano.",
                    "victim":"Vittima: Ghassan Al-Malik (65).",
                    "culprit":"Ziad Rivale",
                    "evidence":[
                        {"name":"Micro Dardo Avvelenato","desc":"Sparato dalla finestra di un edificio di fronte."},
                        {"name":"Balestra Professionale","desc":"Montata su un treppiede nell'edificio di fronte."},
                        {"name":"Impronta Parziale","desc":"Sull'impugnatura della balestra in una stanza buia."},
                        {"name":"Contratto Sciolto","desc":"Mostra una perdita importante per il principale concorrente."},
                        {"name":"Ottica ad Alta Potenza","desc":"Utilizzata per il targeting di precisione a lungo raggio."}
                    ],
                    "suspects":[
                        {"name":"Ziad Rivale","role":"Magnate Rivale","alibi":"In riunioni in banca tutto il giorno.","qs":[{"q":"Rapporto con la vittima?","a":"Feroce concorrenza di mercato."},{"q":"Assunto un cecchino?","a":"Sono un uomo d'affari legale."},{"q":"Dov'eri al momento del crimine?","a":"Nella torre finanziaria."}]},
                        {"name":"Sahar Segretaria","role":"Assistente Esecutiva","alibi":"Preparava il caffè nella lounge.","qs":[{"q":"Chi ha accesso all'ufficio?","a":"Io e il capo della sicurezza."},{"q":"Hai sentito il suono della finestra?","a":"Il vetro è insonorizzato."},{"q":"Era spaventato?","a":"Ha ricevuto minacce di morte."}]},
                        {"name":"Maher Capo della Sicurezza","role":"Capo delle Guardie","alibi":"Monitorava le telecamere del piano inferiore.","qs":[{"q":"Perché hai perso il cecchino?","a":"L'edificio di fronte è abbandonato."},{"q":"Chi possiede la chiave di fronte?","a":"Appaltatore fallito."},{"q":"Le telecamere coprono la parte opposta?","a":"L'angolazione la manca."}]},
                        {"name":"Jehad Cecchino","role":"Mercenario Misterioso","alibi":"Affittava una stanza sotto falso nome.","qs":[{"q":"Perché nella torre di fronte?","a":"Fotografia amatoriale."},{"q":"Perché l'impronta sulla balestra?","a":"Ho eseguito il contratto per soldi."},{"q":"Chi ti ha pagato?","a":"Il rivale Ziad."}]}
                    ],
                    "explain":"Ziad Rivale ha assunto il mercenario Jehad per eseguire un assassinio a lungo raggio tra edifici.",
                    "hints":["Indizio 1: Esamina il micro dardo avvelenato e la balestra professionale montata nell'edificio di fronte.","Indizio 2: Controlla il contratto disciolto che mostra ingenti perdite finanziarie per il principale rivale di mercato.","Indizio 3: Ziad Rivale ha assunto il cecchino Jehad nell'edificio di fronte abbandonato per eseguire l'assassinio nella torre."]
                }
            ]
        },
        pt: {
            appTitle: "O Arquivo Negro | Othmane Ettoumi",
            appSub: "Jogo de Detetive Inteligente – 20 Casos Criminais",
            profileBtn: "👤 Perfil do Detetive",
            chatBtn: "💬 Chat de Amigos",
            mpBtn: "🌐 Jogar com Amigos",
            statusReady: "Pronto para o Serviço",
            archiveTitle: "📁 Arquivos de Casos (20 Crimes)",
            archiveDesc: "Escolha entre 20 casos de dificuldade progressiva para iniciar sua investigação.",
            footerText: "O Arquivo Negro © 2026 - Desenhado por: Othmane Ettoumi | 100% Offline (multijogador precisa de internet)",
            filterAll: "Todos",
            filterEasy: "Fácil",
            filterMedium: "Médio",
            filterHard: "Difícil",
            filterExtreme: "Extremo",
            backArchive: "← Voltar aos Arquivos",
            crimeSceneBanner: "INVESTIGAÇÃO DA CENA DO CRIME",
            startInv: "Ir para a Cena do Crime →",
            backBrief: "← Voltar ao Resumo do Caso",
            notesBtn: "📝 Notas do Detetive",
            hintBtn: "💡 Pedir Dica",
            evidenceHeader: "🔍 Evidência Física",
            suspectsHeader: "👥 Interrogatório de Suspeitos",
            accuseBtn: "⚖️ Acusar Suspeito e Resolver Caso",
            returnMenu: "Retornar aos Arquivos",
            retryCase: "Reinvestigar Caso",
            close: "Fechar",
            interrogateQ: "Perguntas de Interrogatório:",
            accuseModalTitle: "⚖️ Acusação Final",
            accuseModalDesc: "Selecione o verdadeiro culpado com cuidado. Uma acusação errada prejudicará sua patente de detetive!",
            cancel: "Cancelar",
            confirmAccuse: "Confirmar Acusação",
            notesTitle: "📝 Notas do Detetive",
            notesDesc: "Anote suas observações e teorias:",
            notesClose: "Fechar",
            notesSave: "Salvar Notas",
            hintTitle: "💡 Dica do Detetive",
            hintClose: "Entendi",
            profileTitle: "👤 Perfil do Detetive",
            proNameLabel: "Nome do Detetive:",
            proRankLabel: "Patente:",
            achLabel: "🎖️ Conquistas",
            onboardTitle: "Bem-vindo, Detetive",
            onboardBody: "Tem 20 casos criminais para resolver. Leia o resumo do caso, examine cuidadosamente as provas físicas e interrogue cada suspeito — as respostas deles escondem a verdade. Use as dicas apenas se ficar preso (máximo 3 por caso) e depois faça a sua acusação final. Escolha com sabedoria: acusar um inocente deixa o verdadeiro culpado escapar!",
            onboardBtn: "Vamos investigar →",
            proClose: "Cancelar",
            proSave: "Salvar Perfil",
            mpTitle: "🌐 Sala Jogar com Amigos",
            mpDesc: "Conecte-se com amigos detetives via WiFi, *3, ou *6 (Marrocos) para competir na resolução de casos.",
            mpClose: "Fechar",
            mpJoin: "Conectar à Sala",
            mpCreate: "Criar Sala",
            mpLeave: "Sair da Sala",
            roomLeft: "Você saiu da sala.",
            roomCreating: "Criando sua sala...",
            roomCreated: "Sala pronta! Compartilhe este código com seu amigo: {code}",
            roomWaiting: "Aguardando um amigo entrar na sala {code}...",
            roomFriendJoined: "Seu amigo entrou! Vocês estão conectados agora.",
            roomConnectFailed: "Não foi possível conectar. Verifique se você e seu amigo têm internet via WiFi, *3, ou *6, e tente novamente.",
            roomDisconnected: "Seu amigo se desconectou.",
            chatConnectedDisclaimer: "Conectado ao vivo com um amigo real.",
            friendJoinedMsg: "Seu amigo entrou na sala!",
            chatHeading: "💬 Chat de Amigos Detetives",
            chatDisclaimer: "Chat de demonstração simulado — não conectado a jogadores reais.",
            chatSend: "Enviar",
            chatWelcomeMsg: "Bem-vindos à rede, detetives! Alguma pista nova sobre o último caso?",
            chatInputPlaceholder: "Digite uma mensagem...",
            notesPlaceholder: "Escreva suas pistas aqui...",
            roomCodePlaceholder: "Digite o código da sala (ex. CASE-99)",
            answerLabel: "Resposta:",
            selectSuspectAlert: "Selecione um suspeito antes de confirmar a acusação.",
            resultSolvedTitle: "Caso resolvido com sucesso!",
            resultSolvedDesc: "Bom trabalho, detetive! Você identificou corretamente o culpado.",
            resultWrongTitle: "Acusação errada!",
            resultWrongDesc: "Você acusou uma pessoa inocente. O verdadeiro culpado escapou.",
            caseExplanationLabel: "Explicação do caso:",
            micNotSupported: "A gravação de voz não é suportada neste dispositivo.",
            micPermissionDenied: "O acesso ao microfone foi negado. Permita o microfone nas configurações do navegador.",
            micTitle: "Nota de voz (toque para gravar, toque novamente para enviar)",
            micListening: "A gravar… toque para enviar",
            micNoFriend: "Conecte-se primeiro com um amigo para enviar uma nota de voz.",
            callBtnTitle: "Chamada de voz",
            callActive: "🔊 Chamada de voz conectada",
            callConnecting: "📞 Chamando seu amigo…",
            callEnded: "Chamada encerrada.",
            roomEnterCode: "Por favor, insira um código de sala válido.",
            roomConnecting: "Conectando à sala {code} via rede segura...",
            roomRetrying: "Sala ainda não encontrada — a tentar novamente... ({n} restante(s))",
            roomConnected: "Conectado com sucesso à sala {code}! Pronto para o desafio.",
            botName: "Inspetor João",
            botReplies: [
                "Certifique-se de inspecionar todas as evidências físicas com cuidado.",
                "Verifique os álibis dos suspeitos em busca de sutis contradições.",
                "Você revisou as anotações pessoais da vítima?",
                "Continue investigando, detetive! A verdade está nos detalhes."
            ],
            cases: [
                {
                    "tag":"Caso de Homicídio",
                    "difficulty":"easy",
                    "title":"Silêncio na Mansão",
                    "brief":"O rico comerciante Karim Ouazzani foi encontrado assassinado em seu escritório privado dentro de sua mansão devido a um ferimento fatal de faca. A porta estava trancada por dentro e a janela aberta.",
                    "victim":"Vítima: Karim Ouazzani (54) - Homem de negócios.",
                    "culprit":"Yahya Alami",
                    "evidence":[
                        {"name":"Adaga de Prata","desc":"Limpa cuidadosamente, deixando uma impressão digital parcial correspondente ao sócio Yahya."},
                        {"name":"Carta Financeira Rasgada","desc":"Prova que a vítima devia uma enorme quantia ao seu parceiro de negócios Yahya."},
                        {"name":"Pegada de Lama","desc":"Grande pegada de sapato perto da janela correspondente à lama do jardim da mansão."},
                        {"name":"Relógio de Pulso Parado","desc":"Parado às 21:42, o horário exato do assassinato."},
                        {"name":"Registro de Câmera de Segurança","desc":"Mostra movimento suspeito no corredor que leva ao escritório."}
                    ],
                    "suspects":[
                        {"name":"Salma Ouazzani","role":"Esposa","alibi":"Dormindo em seu quarto desde as 21:00.","qs":[{"q":"Ouviu algum barulho?","a":"Não, estava completamente silencioso."},{"q":"Onde você estava no momento?","a":"No meu quarto dormindo sozinha."},{"q":"Teve disputas financeiras?","a":"Não tive envolvimento com o dinheiro dele."}]},
                        {"name":"Yahya Alami","role":"Sócio Comercial","alibi":"Fumando um cigarro na varanda dos fundos.","qs":[{"q":"Qual era a disputa financeira?","a":"Apenas uma parceria comercial normal."},{"q":"Por que sua impressão digital estava na adaga?","a":"Eu estava lá de manhã a trabalho."},{"q":"Onde você estava às 21:40?","a":"Na varanda fumando."}]},
                        {"name":"Fatima","role":"Empregada Doméstica","alibi":"Descobriu o corpo de manhã enquanto limpava.","qs":[{"q":"Quando você abriu o escritório?","a":"Às 08:00."},{"q":"A porta estava trancada?","a":"Sim, trancada por dentro."},{"q":"Notou algo incomum?","a":"A janela estava ligeiramente aberta."}]},
                        {"name":"Omar","role":"Segurança","alibi":"Em patrulha ao redor dos muros perimetrais.","qs":[{"q":"Algum intruso entrou?","a":"Os portões principais estavam trancados."},{"q":"Por que você não ouviu nada?","a":"O escritório é à prova de som e o vento estava forte."},{"q":"Quais eram seus deveres?","a":"Patrulhar a cada hora."}]}
                    ],
                    "explain":"Yahya Alami é o culpado: Ele admitiu estar perto da varanda. Sua impressão digital parcial na adaga e as pegadas de lama coincidem com o caminho do jardim devido à grande disputa de dívida.",
                    "hints":["Dica 1: Inspecione a evidência física deixada na adaga de prata e no caminho do jardim fora da janela aberta.","Dica 2: Revise quem tinha uma grande disputa financeira e conflito de dívida com a vítima.","Dica 3: O álibi da varanda de Yahya Alami desmorona quando combinado com sua impressão digital parcial na arma do crime e as pegadas de lama."]
                },
                {
                    "tag":"Caso de Furto",
                    "difficulty":"easy",
                    "title":"Joia Olho do Nilo",
                    "brief":"O raro diamante azul \"Olho do Nilo\" desapareceu de sua vitrine de vidro no Museu Nacional na noite de inauguração sem que nenhuma fechadura fosse quebrada.",
                    "victim":"Local: Museu Nacional - Joia avaliada em $10 Milhões.",
                    "culprit":"Maher o Curador",
                    "evidence":[
                        {"name":"Luva de Seda Cortada","desc":"Encontrada ao lado da caixa expositora de vidro."},
                        {"name":"Cartão de Acesso VIP","desc":"Contém impressões digitais ocultas pertencentes ao curador."},
                        {"name":"Filmagem de Câmera","desc":"Mostra uma figura de casaco preto deixando o salão apressadamente."},
                        {"name":"Fio de Cabelo","desc":"Encontrado preso na moldura da caixa."},
                        {"name":"Chaves Mestras Correspondentes","desc":"Conjunto de chaves mestras pertencente ao oficial administrativo."}
                    ],
                    "suspects":[
                        {"name":"Raid o Diretor","role":"Diretor do Museu","alibi":"Recepcionando convidados VIP no salão principal.","qs":[{"q":"Quem tem as chaves?","a":"Apenas eu e a segurança."},{"q":"Onde você estava durante o furto?","a":"Com os convidados VIP."},{"q":"Notou a perda imediatamente?","a":"Não, descobrimos mais tarde."}]},
                        {"name":"Sanaa Segurança","role":"Chefe de Segurança","alibi":"Monitorando o circuito interno na sala de controle dos fundos.","qs":[{"q":"Por que as câmeras desligaram por 1 min?","a":"Uma falha repentina de energia."},{"q":"Você andou pelo salão?","a":"Apenas durante a patrulha de rotina."},{"q":"Quem entrou após o fechamento?","a":"Ninguém."}]},
                        {"name":"Maher o Curador","role":"Curador e Restorador","alibi":"Restaurando pinturas na ala leste.","qs":[{"q":"Por que sua luva foi encontrada?","a":"Eu a usei enquanto limpava as exposições."},{"q":"Você tem acesso?","a":"Sim, como parte do meu trabalho."},{"q":"Onde você estava às 22:00?","a":"Na oficina sozinho."}]},
                        {"name":"Mona Jornalista","role":"Repórter de Eventos","alibi":"Entrevistando convidados pela sala.","qs":[{"q":"Você fotografou a joia?","a":"Sim, no início da noite."},{"q":"Quando você foi embora?","a":"Pouco antes do incidente."},{"q":"Viu alguém suspeito?","a":"Vi alguém usando um casaco."}]}
                    ],
                    "explain":"Maher o Curador roubou o diamante usando acesso de restauração e deixou fibras de luva de seda perto do visor de vidro.",
                    "hints":["Dica 1: Verifique a luva de seda cortada deixada bem ao lado da vitrine expositora de vidro.","Dica 2: Concentre-se em quem tinha acesso profissional de restauração para manusear as exposições do museu sem forçar fechaduras.","Dica 3: A desculpa de Maher o Curador não explica por que suas fibras de luva e impressões digitais de acesso foram encontradas na cena."]
                },
                {
                    "tag":"Desaparecimento",
                    "difficulty":"easy",
                    "title":"Onde está Yasmine?",
                    "brief":"A estudante universitária Yasmine Alaoui desapareceu há 3 dias. Seu carro foi encontrado estacionado perto da floresta escura com as chaves na ignição.",
                    "victim":"Pessoa Desaparecida: Yasmine Alaoui (22).",
                    "culprit":"Ziad o Ex",
                    "evidence":[
                        {"name":"Telefone Despedaçado","desc":"Encontrado na beira da estrada; a última ligação foi para seu ex-noivo."},
                        {"name":"Ameaça Escrita à Mão","desc":"Bilhete de ameaça manuscrito dentro de sua bolsa."},
                        {"name":"Impressão de Marca de Pneu","desc":"Marcas de pneus esportivos raros correspondentes ao carro de seu colega de faculdade."},
                        {"name":"Xícara de Café","desc":"Ainda morna no banco do passageiro do carro."},
                        {"name":"Diário Pessoal","desc":"Menciona seu medo constante de alguém a perseguindo."}
                    ],
                    "suspects":[
                        {"name":"Ziad o Ex","role":"Ex-Noivo","alibi":"No trabalho o dia todo e não a viu.","qs":[{"q":"Quando foi a última vez no carro dela?","a":"Cerca de uma semana atrás."},{"q":"Por que ameaçá-la na carta?","a":"Foi um mal-entendidos do passado."},{"q":"Onde estava seu carro naquela noite?","a":"Na garagem de casa."}]},
                        {"name":"Sami Colega de Classe","role":"Colega Universitário","alibi":"Estudando na biblioteca pública.","qs":[{"q":"Qual era a sua relação?","a":"Apenas colegas de universidade."},{"q":"Por que as marcas de pneus coincidem?","a":"Muitos estudantes possuem esse modelo de pneu."},{"q":"Onde você estava na terça-feira?","a":"Na biblioteca até as 20:00."}]},
                        {"name":"Nawal Vizinha","role":"Vizinha do Dormitório","alibi":"Viajando para visitar a família na cidade vizinha.","qs":[{"q":"Ouviu alguma discussão?","a":"Nunca, o lugar dela era tranquilo."},{"q":"Quando você retornou?","a":"Na manhã seguinte."},{"q":"Viu Ziad perto do apartamento?","a":"Sim, duas vezes na semana passada."}]},
                        {"name":"Dr. Tariq","role":"Professor","alibi":"Corrigindo provas de exames na universidade.","qs":[{"q":"Ela faltou à aula?","a":"Sim, um dia antes de desaparecer."},{"q":"Ela teve problemas?","a":"Ela parecia ansiosa ultimamente."},{"q":"Como foi o desempenho dela?","a":"Diligente e trabalhadora."}]}
                    ],
                    "explain":"Ziad o Ex é o responsável: Marcas de pneus esportivos e declarações contraditórias sobre ameaças passadas ligam-no diretamente.",
                    "hints":["Dica 1: Inspecione os registros do telefone despedaçado e a carta de ameaça encontrada em sua bolsa.","Dica 2: Olhe de perto para as impressões de marcas de pneus encontradas perto da floresta escura onde seu carro foi abandonado.","Dica 3: Ziad o Ex deu declarações contraditórias sobre seu paradeiro e ameaças passadas contra a vítima."]
                },
                {
                    "tag":"Envenenamento",
                    "difficulty":"easy",
                    "title":"Veneno no Copo",
                    "brief":"O proeminente crítico literário Ramzi Hamid morreu imediatamente após tomar um gole de suco em sua cerimônia de homenagem dentro da Casa de Ópera.",
                    "victim":"Vítima: Ramzi Hamid (61).",
                    "culprit":"Samer o Escritor Rival",
                    "evidence":[
                        {"name":"Garrafa de Suco Contaminada","desc":"Contém vestígios de veneno letal de cianureto."},
                        {"name":"Guardanapo Dobrado","desc":"Tem resíduo de pó tóxico e uma impressão digital parcial."},
                        {"name":"Programa do Evento","desc":"Mostra a programação exata do serviço de bebidas."},
                        {"name":"Copo de Vidro","desc":"Impressões da vítima e substância química estrangeira na borda."},
                        {"name":"Artigo de Crítica Áspera","desc":"Uma crítica severa escrita pela vítima atacando um escritor amador."}
                    ],
                    "suspects":[
                        {"name":"Mona Anfitriã","role":"Anfitriã do Evento","alibi":"Sirviu bebidas conforme instruções dos organizadores.","qs":[{"q":"Quem preparou os copos?","a":"Eu mesma e o assistente de bar."},{"q":"Você deixou a mesa?","a":"Por um minuto para pegar gelo."},{"q":"Viu alguém se aproximar?","a":"Vi o jovem escritor por perto."}]},
                        {"name":"Samer o Escritor Rival","role":"Escritor Rival","alibi":"Conversando com o chefe da editora a noite toda.","qs":[{"q":"Por que o crítico te atacou?","a":"Ele arruinou meu último romance injustamente."},{"q":"Você colocou algo na bebida?","a":"Deus livre, sou profissional."},{"q":"Onde você estava no incidente?","a":"Em frente ao palco da cerimônia."}]},
                        {"name":"Laila Ramzi","role":"Filha","alibi":"Apresentando prêmios em nome de seu pai.","qs":[{"q":"Vocês estavam em bons termos?","a":"Claro, ele é meu pai."},{"q":"Quem herda a riqueza?","a":"Eu e uma fundação de caridade."},{"q":"Suspeita de alguém?","a":"O escritor Samer o ameaçou."}]},
                        {"name":"Essam Segurança","role":"Guarda de Segurança","alibi":"Guardando a entrada principal do salão.","qs":[{"q":"Quem entrou pela porta dos fundos?","a":"Apenas a equipe de buffet."},{"q":"Sabe algo sobre cianureto?","a":"Não sei nada sobre produtos químicos."},{"q":"As câmeras estão funcionando?","a":"Sim, gravando tudo."}]}
                    ],
                    "explain":"Samer o Escritor Rival vingou-se por sua reputação arruinada e envenenou o copo durante a breve ausência da anfitriã.",
                    "hints":["Dica 1: Verifique a garrafa de suco contaminada e o resíduo de pó tóxico no guardanapo.","Dica 2: Revise o artigo de crítica severa escrito pela vítima atacando um escritor amador.","Dica 3: Samer o Escritor Rival tinha um poderoso motivo de vingança e a oportunidade quando a anfitriã se afastou."]
                },
                {
                    "tag":"Caso de Homicídio",
                    "difficulty":"easy",
                    "title":"O Enigma do Quarto Trancado",
                    "brief":"O empresário Mamdouh Sabri foi encontrado esfaqueado dentro de seu quarto de hotel. Todas as portas e janelas estavam firmemente trancadas por dentro sem saída.",
                    "victim":"Vítima: Mamdouh Sabri (48).",
                    "culprit":"Khaled Manutenção",
                    "evidence":[
                        {"name":"Ar Condicionado","desc":"Bloqueado com calço de metal para atrasar o mecanismo de travamento automático da porta."},
                        {"name":"Pistola de Partida","desc":"Jogada pela janela do último andar."},
                        {"name":"Linha de Pesca Fina","desc":"Fio transparente longo usado para o truque do quarto trancado."},
                        {"name":"Registro do Hotel","desc":"Mostra apenas a equipe de manutenção registrando acesso."},
                        {"name":"Diário da Vítima","desc":"Refere-se a tentativas de chantagem de seu parceiro de negócios."}
                    ],
                    "suspects":[
                        {"name":"Bahgat Sócio","role":"Parceiro de Negócios","alibi":"Jantando com clientes no andar térreo.","qs":[{"q":"E sobre a chantagem?","a":"Apenas disputas normais de negócios."},{"q":"Como entrou no quarto?","a":"Eu nunca entrei."},{"q":"Tem chave reserva?","a":"Apenas a gerência do hotel."}]},
                        {"name":"Nadine Secretária","role":"Assistente da Vítima","alibi":"No quarto adjacente preparando arquivos de viagem.","qs":[{"q":"Ouviu uma discussão?","a":"Som fraco e depois silêncio."},{"q":"Quando o viu vivo pela última vez?","a":"Uma hora antes do incidente."},{"q":"Quem visitou à noite?","a":"Trabalhador de manutenção."}]},
                        {"name":"Khaled Manutenção","role":"Técnico de Hotel","alibi":"Reparou a lâmpada elétrica e foi embora.","qs":[{"q":"Por que o kit de ferramentas ficou lá?","a":"Deixei por engano na mesa."},{"q":"Mexeu no ar condicionado?","a":"Nunca, só trabalhei nas luzes."},{"q":"Ele pediu alguma coisa?","a":"Pediu silêncio total."}]},
                        {"name":"Raouf Irmão","role":"Irmão da Vítima","alibi":"Dormindo em seu quarto no 3º andar.","qs":[{"q":"Disputa de herança?","a":"Dividimos tudo amigavelmente."},{"q":"Como entrou no quarto trancado?","a":"Eu não estava lá."},{"q":"E sobre a linha?","a":"Não sei nada sobre truques."}]}
                    ],
                    "explain":"Khaled o técnico de Manutenção usou linha e o truque do ar condicionado para fingir um quarto trancado por dentro após cometer o crime.",
                    "hints":["Dica 1: Examine a unidade de ar condicionado e a linha de pesca fina encontrada no quarto.","Dica 2: Verifique os registros de acesso do hotel e as ferramentas do técnico deixadas para trás.","Dica 3: Khaled o trabalhador de Manutenção usou um calço de metal e um truque de linha através da unidade de AC para fingir o quarto trancado."]
                },
                {
                    "tag":"Caso de Furto",
                    "difficulty":"medium",
                    "title":"Obra-Prima Roubada",
                    "brief":"Uma pintura original de um artista mundialmente famoso foi roubada da Galeria Internacional, deixando uma réplica idêntica pendurada em seu lugar.",
                    "victim":"Local: Galeria Internacional de Arte - Valor de $5M.",
                    "culprit":"Fouad o Pintor",
                    "evidence":[
                        {"name":"Moldura de Madeira Vazia","desc":"Encontrada escondida atrás do armazenamento de ferramentas."},
                        {"name":"Pincel Profissional","desc":"Contém formulação de tinta a óleo fresca."},
                        {"name":"Impressão Digital Clara","desc":"Na parede atrás da pintura réplica falsa."},
                        {"name":"Bilhete de Trem","desc":"Datado da noite do roubo com destino à fronteira."},
                        {"name":"Registro da Câmera CCTV","desc":"Desativado exatamente por 10 minutos."}
                    ],
                    "suspects":[
                        {"name":"Fouad o Pintor","role":"Artista e Falsificador","alibi":"Pintando um retrato em casa a noite toda.","qs":[{"q":"Por que possui as mesmas tintas a óleo?","a":"Sou artista, eu as uso."},{"q":"Você visitou a galeria?","a":"Sim, para ver as exposições."},{"q":"Onde às 02:00?","a":"No meu estúdio privado."}]},
                        {"name":"Hanan Crítica de Arte","role":"Crítica de Arte","alibi":"Escrevendo um artigo de imprensa na sala de imprensa.","qs":[{"q":"Notou a falsificação?","a":"Não, a réplica parecia autêntica."},{"q":"Quem tem habilidades de cópia?","a":"Fouad, obviamente."},{"q":"Quando você foi embora?","a":"Por volta da meia-noite."}]},
                        {"name":"Jamal Guarda","role":"Guarda da Galeria","alibi":"Em caminhada de segurança no andar superior.","qs":[{"q":"Por que a CCTV falhou?","a":"Pane de queda de energia."},{"q":"Viu alguém estranho?","a":"Ninguém mesmo."},{"q":"Quando a patrulha começou?","a":"Às 23:00."}]},
                        {"name":"Sahar Colecionadora","role":"Colecionadora de Arte","alibi":"Em festa de jantar com investidores.","qs":[{"q":"Ofereceu para comprar a pintura?","a":"O museu recusou vender."},{"q":"Onde na hora do roubo?","a":"Em restaurante chique."},{"q":"Suspeita de alguém?","a":"Fouad era obcecado por ela."}]}
                    ],
                    "explain":"Fouad o Pintor usou habilidade de falsificação para trocar a pintura original por sua réplica, deixando cair seu pincel personalizado.",
                    "hints":["Dica 1: Inspecione o pincel profissional deixado para trás contendo tinta a óleo fresca.","Dica 2: Olhe para a impressão digital na parede diretamente atrás da pintura réplica falsa.","Dica 3: Fouad o Pintor é o único suspeito que possui as precisas habilidades de falsificação e formulação de tinta necessárias para a troca."]
                },
                {
                    "tag":"Caso de Homicídio",
                    "difficulty":"medium",
                    "title":"Assassinato no Laboratório à Meia-Noite",
                    "brief":"O químico Dr. Murad foi morto em seu laboratório trancado. Seu último código digitado no PC aponta para seu assassino.",
                    "victim":"Vítima: Dr. Murad (55) - Químico.",
                    "culprit":"Hani Assistente Principal",
                    "evidence":[
                        {"name":"Béquer Despedaçado","desc":"Contém resíduos de toxina de agente nervoso."},
                        {"name":"Computador Portátil","desc":"Cifra final digitada correspondente ao nome do assistente principal."},
                        {"name":"Luva de Borracha","desc":"Luva de borracha rasgada encontrada perto da janela do laboratório."},
                        {"name":"Relatório Confidencial","desc":"Revela o roubo de pesquisas químicas críticas."},
                        {"name":"Registro de Cartão de Acesso à Porta","desc":"Entrada única usando acesso de cartão válido."}
                    ],
                    "suspects":[
                        {"name":"Dr. Samir","role":"Colega de Pesquisa","alibi":"Conduzindo experimentos no prédio vizinho.","qs":[{"q":"Natureza da pesquisa roubada?","a":"Fórmulas medicinais avançadas."},{"q":"Por que entrou no registro dele?","a":"Procurando por artigo científico."},{"q":"Onde na hora do crime?","a":"No meu laboratório particular."}]},
                        {"name":"Nada Estudante","role":"Assistente de Laboratório","alibi":"Saiu cedo para trabalhar na tese.","qs":[{"q":"Quando você foi embora?","a":"Às 19:00."},{"q":"Quem tinha o cartão de acesso noturno?","a":"Dr. Murad e Dr. Samir."},{"q":"Ele estava preocupado?","a":"Recebendo ligações ameaçadoras."}]},
                        {"name":"Hani Assistente Principal","role":"Assistente Sênior","alibi":"Em casa com a família.","qs":[{"q":"Por que o PC digitou seu nome?","a":"Uma piada ou falsa acusação."},{"q":"Acesso à pesquisa?","a":"Sim, acesso total."},{"q":"Onde a noite toda?","a":"Em casa com minha família."}]},
                        {"name":"Souad Pesquisadora","role":"Acadêmica Visitante","alibi":"Em conferência científica fora da cidade.","qs":[{"q":"Quando retornou à cidade?","a":"Na manhã seguinte."},{"q":"Teve disputas com ele?","a":"Ele recusou a publicação do meu artigo."},{"q":"Conhece o Hani?","a":"Sim, colega de trabalho."}]}
                    ],
                    "explain":"Hani Assistente Principal matou o Dr. Murad para roubar pesquisas, falhando em notar que a vítima digitou sua identificação de cifra.",
                    "hints":["Dica 1: Examine o béquer despedaçado com toxina nervosa e o computador portátil.","Dica 2: Revise quem tinha acesso total à pesquisa e autorização para entrar no laboratório.","Dica 3: O último código de PC digitado pela vítima aponta explicitamente para Hani Assistente Principal."]
                },
                {
                    "tag":"Caso de Homicídio",
                    "difficulty":"medium",
                    "title":"Assassinato no Expresso",
                    "brief":"Ex-agente de inteligência morreu dentro de um vagão de trem-leito por tiro de silenciador em túnel escuro.",
                    "victim":"Vítima: Kamal Eddine (62).",
                    "culprit":"Salim Misterioso",
                    "evidence":[
                        {"name":"Supressor de Metal","desc":"Jogado nos trilhos durante travessia de túnel."},
                        {"name":"Bilhete Falsificado","desc":"Bilhete de identidade falsa sentado no próximo carro."},
                        {"name":"Arquivo Secreto Vazado","desc":"Desaparecido da pasta pessoal da vítima."},
                        {"name":"Vestígios de Tinta Invisível","desc":"Encontrados nos dedos do suspeito #2."},
                        {"name":"Registro de Movimento de Passageiros","desc":"Mostra movimento suspeito entre os carros."}
                    ],
                    "suspects":[
                        {"name":"Maher Jornalista","role":"Passageiro do Vagão","alibi":"Escrevendo artigo no laptop durante toda a viagem.","qs":[{"q":"Destino?","a":"Capital para entrevista de emprego."},{"q":"Ouviu som de tiro?","a":"Apenas o atrito da roda do trem."},{"q":"Por que está nervoso?","a":"Não gosto de longas viagens de trem."}]},
                        {"name":"Salim Misterioso","role":"Empresário","alibi":"Dormindo em cabine particular trancada.","qs":[{"q":"Motivo da viagem repentina?","a":"Negócio urgente."},{"q":"Por que tinta nos dedos?","a":"Assinando contratos com caneta líquida."},{"q":"Conhece a vítima?","a":"Nunca o vi na minha vida."}]},
                        {"name":"Rasha Atendente","role":"Comissária de Trem","alibi":"Servindo bebidas no vagão da frente.","qs":[{"q":"Quem se moveu entre os carros?","a":"Uma pessoa de casaco preto."},{"q":"Luzes apagadas no túnel?","a":"Não, escuridão normal de túnel."},{"q":"Notou algo incomum?","a":"Cheiro fraco de pólvora."}]},
                        {"name":"Jehad Guarda","role":"Escolta Particular","alibi":"Guardando a porta de carga traseira.","qs":[{"q":"Alguém passou por você?","a":"Ninguém cruzou a porta traseira."},{"q":"Portando arma de fogo?","a":"Sim, arma lateral oficial licenciada."},{"q":"Turno começou quando?","a":"Desde a partida."}]}
                    ],
                    "explain":"Salim Misterioso realizou assassinato silencioso usando supressor no túnel sob identidade falsa.",
                    "hints":["Dica 1: Verifique o supressor de metal jogado nos trilhos e os registros de movimento de passageiros.","Dica 2: Olhe para os vestígios de tinta invisível e o bilhete falsificado encontrado no próximo carro.","Dica 3: Salim Misterioso viajou sob falsa identidade e executou o tiro silencioso no túnel."]
                },
                {
                    "tag":"Caso de Furto",
                    "difficulty":"medium",
                    "title":"Roubo ao Cofre",
                    "brief":"Milhões desapareceram do cofre da companhia nacional de cabos sem arrombamento; a chave digital estava apenas com o Diretor.",
                    "victim":"Companhia Nacional de Cabos - Perda de $2M.",
                    "culprit":"Ziad Contador",
                    "evidence":[
                        {"name":"Clipe de Câmera Oculta","desc":"Mostra indivíduo inserindo código PIN com cuidado."},
                        {"name":"Tira de Notas","desc":"Contém dicas para a senha antiga."},
                        {"name":"Impressão Parcial","desc":"No botão de envio do teclado do cofre."},
                        {"name":"Cartão de Acesso Eletrônico","desc":"Cartão de acesso de backup faltando na gaveta."},
                        {"name":"Fatura de Dívida","desc":"Pertence ao contador da empresa."}
                    ],
                    "suspects":[
                        {"name":"Saleh Diretor","role":"Diretor da Empresa","alibi":"Em reunião de diretoria a manhã toda.","qs":[{"q":"Quem sabe o PIN?","a":"Apenas eu e o contador."},{"q":"Perdeu o cartão de backup?","a":"Não, no meu bolso sempre."},{"q":"De quem você suspeita?","a":"O contador tem dívidas pesadas."}]},
                        {"name":"Fatima Secretária","role":"Secretária Executiva","alibi":"Agendando compromissos no saguão.","qs":[{"q":"Tem acesso ao cofre?","a":"Não, nunca."},{"q":"Quem entrou no escritório?","a":"O contador e os faxineiros."},{"q":"Notou alguma coisa?","a":"A porta estava ligeiramente aberta."}]},
                        {"name":"Ziad Contador","role":"Contador Financeiro","alibi":"Preparando auditoria anual no escritório.","qs":[{"q":"Por que dívidas pesadas?","a":"Problemas familiares agora resolvidos."},{"q":"Como sabe o código PIN?","a":"Parte do dever financeiro às vezes."},{"q":"Onde ontem ao meio-dia?","a":"Na agência bancária."}]},
                        {"name":"Adel Segurança","role":"Guarda do Prédio","alibi":"Guardando a entrada principal.","qs":[{"q":"Alguém saiu com sacolas?","a":"Apenas funcionários regulares saindo."},{"q":"CCTV funcional?","a":"Funcionando perfeitamente."},{"q":"Início do turno?","a":"Manhã cedo."}]}
                    ],
                    "explain":"Ziad Contador aproveitou o motivo da dívida e o conhecimento do PIN para roubar o dinheiro do cofre usando o cartão de backup.",
                    "hints":["Dica 1: Examine o clipe da câmera oculta mostrando a entrada do PIN e o cartão de acesso de backup faltando.","Dica 2: Verifique a fatura de dívida financeira pertencente à equipe.","Dica 3: Ziad Contador tinha tanto o motivo financeiro (dívidas pesadas) quanto o conhecimento do PIN para esvaziar o cofre."]
                },
                {
                    "tag":"Caso de Homicídio",
                    "difficulty":"medium",
                    "title":"Crime na Praia da Andaluzia",
                    "brief":"Pescador encontrado morto na areia ao amanhecer ao lado de um pequeno barco com motor ligado.",
                    "victim":"Vítima: Ibrahim Pescador (50).",
                    "culprit":"Hamza Jovem",
                    "evidence":[
                        {"name":"Remo de Madeira Quebrado","desc":"Ensujado de sangue com marcas de luta."},
                        {"name":"Rede de Pesca Rasgada","desc":"Espalhada perto da linha d'água."},
                        {"name":"Relógio de Pulso Barato","desc":"Pertence a um jovem da vila local."},
                        {"name":"Pegadas na Areia","desc":"Levando em direção à estrada costeira."},
                        {"name":"Caixa de Pesca Aberta","desc":"Ferramentas afiadas faltando."}
                    ],
                    "suspects":[
                        {"name":"Hamza Jovem","role":"Jovem Desempregado","alibi":"Dormindo em casa a noite toda.","qs":[{"q":"Por que o relógio foi encontrado?","a":"Devo tê-lo perdido nadando."},{"q":"Teve discussões?","a":"Brigamos por direitos de pesca."},{"q":"Onde às 04:00?","a":"Na minha cama."}]},
                        {"name":"Mousa Pescador","role":"Pescador Rival","alibi":"Pesca noturna no mar.","qs":[{"q":"Hora do retorno?","a":"Ao nascer do sol."},{"q":"Viu o Hamza por perto?","a":"O vi perto do barco."},{"q":"Relação com a vítima?","a":"Concorrência de trabalho justa."}]},
                        {"name":"Salem Dono de Café","role":"Lojista","alibi":"Abrindo cafeteria.","qs":[{"q":"Ouviu gritos?","a":"Apenas ondas do oceano."},{"q":"Quem visita a praia à noite?","a":"Pescadores e jovens."},{"q":"Viu estranhos?","a":"Ninguém."}]},
                        {"name":"Khadija Esposa","role":"Dona de Casa","alibi":"Em casa com crianças.","qs":[{"q":"Quando ele saiu?","a":"Meia-noite como de costume."},{"q":"Teve problemas?","a":"Disputa financeira com Hamza."},{"q":"Deixou recado?","a":"Não."}]}
                    ],
                    "explain":"Hamza Jovem brigou por pontos de pesca e atingiu o pescador com um remo, deixando cair seu relógio.",
                    "hints":["Dica 1: Inspecione o remo de madeira quebrado e o relógio de pulso barato encontrado na areia.","Dica 2: Verifique as pegadas que levam para longe da praia em direção à estrada costeira.","Dica 3: Hamza Jovem teve disputas contínuas sobre direitos de pesca e deixou cair seu relógio pessoal durante a luta violenta."]
                },
                {
                    "tag":"Desaparecimento",
                    "difficulty":"hard",
                    "title":"Pintura Antiga Desaparecida",
                    "brief":"Pintura rara desapareceu do antigo palácio real sem acionar o sistema de alarme.",
                    "victim":"Palácio do Príncipe Falecido - Obra de Arte Rara.",
                    "culprit":"Maher Decorador",
                    "evidence":[
                        {"name":"Ferramenta de Desvio de Alarme","desc":"Gadget de alta tecnologia."},
                        {"name":"Luva de Pano","desc":"Contém poeira antiga do palácio."},
                        {"name":"Planta Baixa do Palácio","desc":"Encontrada no telefone do decorador."},
                        {"name":"Tecido Rasgado","desc":"Rasgado da cortina do quarto."},
                        {"name":"Registro de Visitantes","desc":"Registra a visita noturna do designer de interiores."}
                    ],
                    "suspects":[
                        {"name":"Príncipe Khalid","role":"Herdeiro do Palácio","alibi":"Viagem de negócios ao exterior.","qs":[{"q":"Quem tem acesso?","a":"Eu e a equipe de manutenção."},{"q":"A pintura está assegurada?","a":"Sim, por milhões."},{"q":"Suspeita da equipe?","a":"Novo designer de interiores."}]},
                        {"name":"Maher Decorador","role":"Especialista em Restauração","alibi":"Medindo paredes para reforma.","qs":[{"q":"Por que possui plantas baixas?","a":"Necessário para o trabalho de design."},{"q":"Desviou o alarme?","a":"Apenas verifiquei fios danificados."},{"q":"Onde está a pintura?","a":"Eu não sei de nada."}]},
                        {"name":"Souad Historiadora","role":"Arquivista","alibi":"Catalogando itens no arquivo.","qs":[{"q":"Última visita ao quarto?","a":"Semana passada."},{"q":"Notou mudanças?","a":"Tudo no lugar."},{"q":"Quem gosta de arte?","a":"O próprio príncipe."}]},
                        {"name":"Essam Guarda-Chefe","role":"Chefe da Guarda","alibi":"Supervisionando portões externos.","qs":[{"q":"Viu intruso?","a":"A CCTV não mostrou ninguém."},{"q":"Alarme acionado?","a":"Desligado por minutos e depois retomado."},{"q":"Quem desarmou o sistema?","a":"Um especialista."}]}
                    ],
                    "explain":"Maher Decorador usou acesso à planta baixa e habilidades tecnológicas para desarmar o alarme e roubar a pintura.",
                    "hints":["Dica 1: Verifique a ferramenta de desvio de alarme e as plantas baixas do palácio encontradas no telefone do decorador.","Dica 2: Revise o registro de visitantes mostrando acesso noturno pelo designer de interiores.","Dica 3: Maher Decorator usou seu acesso à planta baixa e dispositivos técnicos para desarmar o alarme e roubar a pintura."]
                },
                {
                    "tag":"Caso de Homicídio",
                    "difficulty":"hard",
                    "title":"Assassinato de Famoso Ator",
                    "brief":"Um ator proeminente foi encontrado morto no camarim do teatro após a apresentação final no palco.",
                    "victim":"Vítima: Rafat Rami (45).",
                    "culprit":"Bassem Substituto",
                    "evidence":[
                        {"name":"Roteiro Rasgado","desc":"Notas escritas severas sobre o papel principal."},
                        {"name":"Corda de Cenografia","desc":"Adereço falso convertido em real ferramenta de estrangulamento."},
                        {"name":"Pegada de Sapato de Madeira","desc":"Atrás do corredor escuro dos bastidores."},
                        {"name":"Registros de Chamadas","desc":"Ameaças repetidas de um ator substituto menor."},
                        {"name":"Figurino de Palco","desc":"Descartado na lixeira."}
                    ],
                    "suspects":[
                        {"name":"Salaf Atriz","role":"Atriz Principal","alibi":"Celebrando com fãs na cafeteria.","qs":[{"q":"Relação com ele?","a":"Estritamente rivalidade artística."},{"q":"Vocês discutiram?","a":"Concorremos pelo papel principal."},{"q":"Onde na hora do assassinato?","a":"Com fãs no salão."}]},
                        {"name":"Sami Diretor","role":"Diretor de Palco","alibi":"Verificando a iluminação com a equipe.","qs":[{"q":"Como foi o desempenho da vítima?","a":"Ótimo, mas arrogante."},{"q":"Quem entrou no camarim?","a":"Ator substituto com raiva."},{"q":"Ouviu gritos?","a":"A música abafou os sons."}]},
                        {"name":"Ziad Escritor","role":"Dramaturgo","alibi":"Assinando livros para o público lá fora.","qs":[{"q":"Ele alterou o roteiro?","a":"Exigiu mudanças constantemente."},{"q":"Onde após a cortina?","a":"Autografando livros."},{"q":"Gostava da atuação dele?","a":"Ele se encaixava bem no papel."}]},
                        {"name":"Bassem Substituto","role":"Ator Secundário","alibi":"Trocando de roupa no camarim.","qs":[{"q":"Por que ameaçá-lo?","a":"Ele roubou meu papel principal por ganância."},{"q":"Você o matou?","a":"Eu estava com raiva, mas não matei."},{"q":"Onde exatamente?","a":"No quarto sozinho."}]}
                    ],
                    "explain":"Bassem Substituto estrangulou Rafat por raiva sobre o papel principal roubado usando adereço de bastidores.",
                    "hints":["Dica 1: Inspecione os registros de chamadas mostrando ameaças repetidas de um colega de trabalho.","Dica 2: Verifique a corda de adereço convertida em uma ferramenta real de estrangulamento nos bastidores.","Dica 3: Bassem Substituto tinha um forte motivo de raiva depois que Rafat roubou seu papel principal."]
                },
                {
                    "tag":"Caso de Furto",
                    "difficulty":"hard",
                    "title":"Roubo do Trem de Ouro",
                    "brief":"Remessa de barras de ouro no valor de $1M desapareceu de trem de carga rápido no meio da viagem entre cidades à noite.",
                    "victim":"Transito Expresso Corp - Barras de Ouro.",
                    "culprit":"Sameh Maquinista",
                    "evidence":[
                        {"name":"Macaco Hidráulico","desc":"Escondido ao lado dos trilhos da ferrovia."},
                        {"name":"Walkie-Talkie","desc":"Usa frequência de rádio de segurança da empresa de trens."},
                        {"name":"Luva de Trabalho Suja","desc":"Contém o logotipo da empresa de transporte."},
                        {"name":"Rastro de Caminhão Pesado","desc":"Perto do marcador de parada de emergência do trem."},
                        {"name":"Registro de Manutenção","desc":"Mostra parada intencional de freio de trem de 1 minuto."}
                    ],
                    "suspects":[
                        {"name":"Sameh Maquinista","role":"Motorista de Carga","alibi":"Parado devido a falha repentina de sinal.","qs":[{"q":"Por que parar aqui?","a":"Sinal vermelho de emergência da torre."},{"q":"Sabe o valor da carga?","a":"Sim, ouro seguro."},{"q":"Quem tem rádio?","a":"Equipe de controle."}]},
                        {"name":"Majed Despachante","role":"Controlador de Sinal","alibi":"Monitorando linhas da torre de controle.","qs":[{"q":"Ordenou a parada do trem?","a":"Os sinais estavam verdes."},{"q":"Quem adulterou o painel?","a":"Alguém com frequência."},{"q":"Onde à 01:00?","a":"Na torre sozinho."}]},
                        {"name":"Daniel Guarda","role":"Escolta de Carga","alibi":"Guardando a porta traseira interna do vagão.","qs":[{"q":"Por que não atirou?","a":"Inconsciente por gás."},{"q":"Quem estava lá dentro?","a":"Apenas eu e as caixas."},{"q":"Quando acordou?","a":"Hora após a parada."}]},
                        {"name":"Essam Mecânico","role":"Trabalhador de Manutenção","alibi":"Reparando trilho na estação próxima.","qs":[{"q":"Possui macaco hidráulico?","a":"Sim, para manutenção de trilhos."},{"q":"Onde estavam as ferramentas?","a":"No caminhão de serviço."},{"q":"Gosta de dinheiro rápido?","a":"Quem não gosta? Mas sou honesto."}]}
                    ],
                    "explain":"Sameh Maquinista do Trem conspirou com o mecânico Essam para parar o trem intencionalmente e descarregar o ouro.",
                    "hints":["Dica 1: Verifique o macaco hidráulico e o walkie-talkie sintonizado na frequência de rádio da empresa.","Dica 2: Revise o registro de manutenção mostrando uma parada de freio de emergência intencional de 1 minuto.","Dica 3: Sameh o Maquinista do Trem conspirou com o mecânico Essam para parar o trem e descarregar a remessa de ouro."]
                },
                {
                    "tag":"Caso de Homicídio",
                    "difficulty":"hard",
                    "title":"Morte de Arqueólogo",
                    "brief":"Arqueólogo renomado encontrado morto dentro de tumba recém-aberta com o baú de relíquias forçado a abrir.",
                    "victim":"Vítima: Dr. Fadel (58).",
                    "culprit":"Maher Contrabandista",
                    "evidence":[
                        {"name":"Picareta Arqueológica","desc":"Manchada de sangue com sangue da vítima e impressões."},
                        {"name":"Estatueta de Ouro","desc":"Deixada cair pelo assassino em fuga."},
                        {"name":"Lanterna","desc":"Contém marca de loja de ferragens local."},
                        {"name":"Pegadas de Terra","desc":"Levando em direção à entrada principal da escavação."},
                        {"name":"Registro de Expedição","desc":"Detalha disputa sobre a divisão de achados."}
                    ],
                    "suspects":[
                        {"name":"Dr. Adel","role":"Co-Líder da Expedição","alibi":"Documentando inscrições na câmara oeste.","qs":[{"q":"Por que discutir?","a":"Sobre crédito de pesquisa."},{"q":"Entrou na sala do tesouro?","a":"Apenas de manhã."},{"q":"Onde na hora do crime?","a":"Na outra câmara."}]},
                        {"name":"Souad Assistente","role":"Assistente de Escavação","alibi":"Organizando ferramentas no acampamento externo.","qs":[{"q":"Quem visitou a tumba à noite?","a":"Dr. Fadel sozinho."},{"q":"Relíquias faltando?","a":"Estatueta de ouro rara."},{"q":"Quando descoberto?","a":"Na manhã seguinte."}]},
                        {"name":"Maher Contrabandista","role":"Indivíduo Suspeito","alibi":"Caçando animais selvagens perto da borda do deserto.","qs":[{"q":"Por que perto da tumba?","a":"Caçando animais selvagens."},{"q":"Por que a lanterna foi encontrada?","a":"A perdi antes."},{"q":"Contrabandeia relíquias?","a":"Falsa acusação."}]},
                        {"name":"Jehad Guarda","role":"Guarda do Local","alibi":"Guardando tendas de expedição do lado de fora.","qs":[{"q":"Viu estranho se aproximar?","a":"Vi pessoa carregando bolsa pesada."},{"q":"Por que não os parou?","a":"Pensei que fosse pesquisador."},{"q":"Ouviu gritos?","a":"O vento estava muito forte."}]}
                    ],
                    "explain":"Maher Contrabandista infiltrou-se na tumba para roubar estatueta de ouro e assassinou o arqueólogo quando pego.",
                    "hints":["Dica 1: Inspecione a lanterna com marcações de loja de ferragens local deixada na cena.","Dica 2: Verifique a estatueta de ouro deixada para trás pelo culpado em fuga.","Dica 3: Maher Contrabandista infiltrou-se na tumba para comércio ilegal e assassinou o Dr. Fadel quando pego."]
                },
                {
                    "tag":"Desaparecimento",
                    "difficulty":"hard",
                    "title":"Jato Particular Desaparecido",
                    "brief":"Um jato executivo particular desapareceu sobre o espaço aéreo montanhoso acidentado perto de densa floresta de pinheiros.",
                    "victim":"Aeronave Particular - 4 Passageiros.",
                    "culprit":"Samer Copiloto",
                    "evidence":[
                        {"name":"Caixa de Voo Esmagada","desc":"Mostra adulteração deliberada com o sistema de piloto automático."},
                        {"name":"Combustível Contaminado","desc":"Agente químico adicionado causando pane no motor."},
                        {"name":"Nota de Suicídio Falsificada","desc":"Encontrada no laptop do assistente."},
                        {"name":"Linhas de Paraquedas","desc":"Emaranhadas em galhos altos de pinheiros."},
                        {"name":"Plano de Voo Alterado","desc":"Desvia o caminho em direção às montanhas intencionalmente."}
                    ],
                    "suspects":[
                        {"name":"Capitão Rami","role":"Piloto Chefe","alibi":"Pilotando aeronave conforme direções oficiais.","qs":[{"q":"Por que mudança de rota?","a":"Para evitar tempestade severa."},{"q":"Falha no motor?","a":"Os motores pararam inesperadamente."},{"q":"Local da queda?","a":"Meio da floresta."}]},
                        {"name":"Samer Copiloto","role":"Primeiro Oficial","alibi":"Monitorando painel de instrumentos da cabine.","qs":[{"q":"Quem mudou o plano?","a":"Capitão pediu para economizar combustível."},{"q":"Deixou a aeronave?","a":"Permanecei a bordo."},{"q":"E sobre o paraquedas?","a":"Item de kit de emergência."}]},
                        {"name":"Monir Investidor","role":"Proprietário da Aeronave","alibi":"Revisando documentos no assento do passageiro.","qs":[{"q":"O jato está assegurado?","a":"Segurado pesadamente."},{"q":"Notou tensão?","a":"Os pilotos discutiram baixinho."},{"q":"Onde está a bagagem?","a":"Queimada na queda."}]},
                        {"name":"Laila Oficial","role":"Ajudante Pessoal","alibi":"Sentada na seção traseira.","qs":[{"q":"Ouviu explosão?","a":"Som estranho e depois queda rápida."},{"q":"Gosta de voar?","a":"Não gosto de altitude elevada."},{"q":"Quem se beneficia?","a":"Apólices de seguro."}]}
                    ],
                    "explain":"Samer Copiloto sabotou o combustível, alterou a navegação e saltou de paraquedas antes da queda.",
                    "hints":["Dica 1: Verifique a caixa de voo esmagada e o combustível contaminado que levou à pane do motor.","Dica 2: Inspecione as linhas de paraquedas emaranhadas em galhos altos de pinheiros perto do caminho da queda.","Dica 3: Samer Copiloto sabotou o voo, alterou a navegação e saltou de paraquedas antes do impacto."]
                },
                {
                    "tag":"Caso de Homicídio",
                    "difficulty":"extreme",
                    "title":"Veneno Invisível",
                    "brief":"Magnata envenenado dentro de escritório de cofre fortificado usando composto biológico raro indetectável.",
                    "victim":"Vítima: Fouad Al-Moatasem (60).",
                    "culprit":"Dr. Ziad",
                    "evidence":[
                        {"name":"Conta-gotas Médico","desc":"Contém microgotas de neurotoxina."},
                        {"name":"Copo de Água","desc":"Misturado com composto biológico inodoro."},
                        {"name":"Luva Cirúrgica","desc":"Descartada na lixeira."},
                        {"name":"Testamento Atualizado","desc":"Reatribui herança a fundação de caridade."},
                        {"name":"Filmagem de CCTV","desc":"Mostra indivíduo usando jaleco de médico."}
                    ],
                    "suspects":[
                        {"name":"Dr. Ziad","role":"Médico Particular","alibi":"Verificando a pressão arterial da vítima à tarde.","qs":[{"q":"Remédio diário?","a":"Apenas vitaminas para o coração."},{"q":"Por que o conta-gotas foi encontrado?","a":"Usado para colírio."},{"q":"Sabe sobre o novo testamento?","a":"Não, desconheço."}]},
                        {"name":"Sawsan Esposa","role":"Esposa da Vítima","alibi":"Preparando chá na cozinha externa.","qs":[{"q":"Quem bebeu água?","a":"Meu marido sozinho."},{"q":"Disputa sobre o testamento?","a":"Entristecida, mas não matei."},{"q":"Quem visitou hoje?","a":"Seu médico particular."}]},
                        {"name":"Maher Farmacêutico","role":"Farmacêutico da Família","alibi":"Administrando a farmácia o dia todo.","qs":[{"q":"Dispensou toxina?","a":"Apenas medicação autorizada."},{"q":"Quem possui o composto biológico?","a":"Laboratórios de alto nível."},{"q":"Visitou a mansão?","a":"Um mês atrás."}]},
                        {"name":"Omar Guarda","role":"Guarda da Mansão","alibi":"Guardando o portão principal.","qs":[{"q":"Quem entrou de jaleco?","a":"Dr. Ziad como de costume."},{"q":"Viu estranho?","a":"Ninguém estranho."},{"q":"Início do turno?","a":"Manhã cedo."}]}
                    ],
                    "explain":"Dr. Ziad Médico Particular envenenou o suprimento de remédios usando composto biológico para reivindicar fundos da propriedade.",
                    "hints":["Dica 1: Examine o conta-gotas médico contendo microdoses de neurotoxina.","Dica 2: Verifique a filmagem de CCTV mostrando alguém com jaleco de médico entrando no escritório de cofre fortificado.","Dica 3: Dr. Ziad Médico Particular envenenou o suprimento de remédios da vítima para garantir fundos de herança."]
                },
                {
                    "tag":"Caso de Furto",
                    "difficulty":"extreme",
                    "title":"Roubo ao Museu Local",
                    "brief":"Estátuas de bronze antigas desapareceram da vitrine do museu local sem quebrar fechaduras.",
                    "victim":"Museu Local - 3 Estátuas.",
                    "culprit":"Rami Curador",
                    "evidence":[
                        {"name":"Conjunto de Chaves Padrão","desc":"Destrava a vitrine de vidro suavemente."},
                        {"name":"Marca de Tinta Azul","desc":"Na maçaneta do gabinete de exibição."},
                        {"name":"Livro de Registro de Entrada","desc":"Mostra que o curador fez login tarde da noite."},
                        {"name":"Saco de Lona","desc":"Deixado para trás em bancos de assento."},
                        {"name":"Recibo de Venda","desc":"Mostra venda de itens semelhantes a negociante."}
                    ],
                    "suspects":[
                        {"name":"Rami Curador","role":"Curador do Museu","alibi":"Atualizando registros no escritório.","qs":[{"q":"Quem tem a chave do visor?","a":"Apenas eu."},{"q":"Por que fez login tarde da noite?","a":"Revisando o inventário."},{"q":"Onde estão as estátuas?","a":"Roubadas, não sei por quem."}]},
                        {"name":"Souad Guarda","role":"Guarda do Museu","alibi":"Postado no portão da frente.","qs":[{"q":"Alguém carregou sacolas?","a":"Vi Rami carregando saco de lona."},{"q":"Alarme acionado?","a":"Não, chave original usada."},{"q":"Quando Rami foi embora?","a":"Depois da meia-noite."}]},
                        {"name":"Ziad Visitante","role":"Entusiasta de Antiguidades","alibi":"Vendo exposições durante o dia.","qs":[{"q":"Quando visitou?","a":"Dois dias antes do roubo."},{"q":"Encontrou Rami?","a":"Discuti estátuas com ele."},{"q":"Compra antiguidades?","a":"Apenas por meios legais."}]},
                        {"name":"Fatima Faxineira","role":"Equipe de Limpeza","alibi":"Limpando corredores de manhã.","qs":[{"q":"Notou itens faltando?","a":"Vitrine vazia de manhã."},{"q":"Quem entra à noite?","a":"O curador Rami."},{"q":"Abre as vitrines?","a":"Nunca."}]}
                    ],
                    "explain":"Rami Curador roubou estátuas de bronze usando chave mestre oficial e vendeu para negociante ilegal.",
                    "hints":["Dica 1: Verifique o livro de registro de entrada mostrando que o curador fez login tarde da noite.","Dica 2: Revise o conjunto de chaves padrão usado para abrir as vitrines sem forçar fechaduras.","Dica 3: Rami Curador usou suas chaves mestras oficiais para roubar as estátuas de bronze e vendê-las."]
                },
                {
                    "tag":"Caso de Homicídio",
                    "difficulty":"extreme",
                    "title":"Crime na Casa Assombrada",
                    "brief":"Um homem idoso foi encontrado assassinado em casa abandonada na floresta com a porta da frente trancada por dentro.",
                    "victim":"Vítima: Saleh (75).",
                    "culprit":"Nabil Sobrinho",
                    "evidence":[
                        {"name":"Chave Reserva","desc":"Escondida sob o tapete da porta."},
                        {"name":"Taco de Madeira","desc":"Ensujado de sangue com marcas de luta."},
                        {"name":"Caixa de Dinheiro","desc":"Esvaziada e espalhada."},
                        {"name":"Pegada de Lama","desc":"Perto da moldura da janela dos fundos."},
                        {"name":"Nota de Herança","desc":"Do sobrinho exigindo dinheiro."}
                    ],
                    "suspects":[
                        {"name":"Nabil Sobrinho","role":"Parentes da Vítima","alibi":"Vendendo propriedade na cidade.","qs":[{"q":"Por que exigir dinheiro?","a":"Ele era meu tio, precisava de ajuda."},{"q":"Conhece o esconderijo da chave?","a":"Sim, antigo esconderijo."},{"q":"Onde na hora do incidente?","a":"No mercado da cidade."}]},
                        {"name":"Saeed Vizinho","role":"Vizinho Idoso","alibi":"Consertando a cerca da fazenda.","qs":[{"q":"Ouviu discussão?","a":"Grito fraco e depois silêncio."},{"q":"Quem visita a casa?","a":"Seu sobrinho Nabil."},{"q":"Entrou na casa?","a":"Nunca."}]},
                        {"name":"Mona Filha","role":"Estudante","alibi":"Colhendo ervas perto da floresta.","qs":[{"q":"Viu estranho?","a":"Vi Nabil carregando caixa de metal."},{"q":"Quando visto?","a":"Pouco antes do pôr do sol."},{"q":"Disse a alguém?","a":"Eu estava com medo."}]},
                        {"name":"Khaled Oficial","role":"Policial Aposentado","alibi":"Pescando no rio próximo.","qs":[{"q":"Visitou Saleh recentemente?","a":"Semana passada para chá."},{"q":"O humor dele?","a":"Com medo da ganância de Nabil."},{"q":"Gosta da floresta?","a":"Passo horas lá."}]}
                    ],
                    "explain":"Nabil Sobrinho matou seu tio pela caixa de dinheiro usando o esconderijo de chave reserva que ele conhecia.",
                    "hints":["Dica 1: Inspecione a chave reserva escondida sob o tapete da porta que apenas a família conhecia.","Dica 2: Verifique a nota de herança exigindo dinheiro encontrada na casa.","Dica 3: Nabil Sobrinho usou a chave reserva escondida para entrar e assassinar seu tio pela caixa de dinheiro."]
                },
                {
                    "tag":"Desaparecimento",
                    "difficulty":"extreme",
                    "title":"Documento Diplomático",
                    "brief":"Documento diplomático ultrassecreto desapareceu da pasta do embaixador durante recepção lotada.",
                    "victim":"Embaixada Estrangeira - Documento Secreto.",
                    "culprit":"Daniel Repórter",
                    "evidence":[
                        {"name":"Pasta Correspondente","desc":"Trocada habilmente com a original."},
                        {"name":"Convite Falsificado","desc":"Tem nome de convidado falso."},
                        {"name":"Clipe de CCTV","desc":"Pessoa vestindo terno formal escuro."},
                        {"name":"Lenço de Seda","desc":"Perfuzido com perfume francês."},
                        {"name":"Registro de Convidados","desc":"Registra a entrada de repórter misterioso."}
                    ],
                    "suspects":[
                        {"name":"Embaixador Murad","role":"Diplomata Chefe","alibi":"Cumprimentando convidados no salão principal.","qs":[{"q":"Quem segura a pasta?","a":"Meu ajudante sempre."},{"q":"Quando notou a perda?","a":"Logo após os convidados saírem."},{"q":"O documento é crítico?","a":"Ultrassecreto."}]},
                        {"name":"Saeed Ajudante","role":"Ajudante Diplomático","alibi":"Servindo refrescos aos convidados.","qs":[{"q":"Onde estava a pasta?","a":"Ao lado da mesa particular."},{"q":"Quem se aproximou?","a":"Jornalista estrangeiro."},{"q":"A deixou sozinha?","a":"Por minutos para buscar arquivos."}]},
                        {"name":"Daniel Repórter","role":"Jornalista Estrangeiro","alibi":"Entrevistando diplomatas.","qs":[{"q":"Por que trocar a pasta?","a":"Troca acidental."},{"q":"Perfume francês?","a":"Presente de um amigo."},{"q":"Buscando furos?","a":"Busco a verdade."}]},
                        {"name":"Nadine Tradutora","role":"Tradutora Oficial","alibi":"Traduzindo no palco.","qs":[{"q":"Notou atividade estranha?","a":"Daniel rondou perto da pasta."},{"q":"Quem o convidou?","a":"Convites particulares."},{"q":"Documentos seguros?","a":"Protocolo estrito."}]}
                    ],
                    "explain":"Daniel Repórter espião trocou pasta idêntica durante a confusão da recepção para roubar o documento.",
                    "hints":["Dica 1: Verifique a pasta trocada e o registro de convidados registrando um repórter misterioso.","Dica 2: Note o lenço de seda perfumado com perfume francês deixado na cena.","Dica 3: Daniel Repórter usou um convite falso e trocou pastas durante a comoção da recepção."]
                },
                {
                    "tag":"Caso de Homicídio",
                    "difficulty":"extreme",
                    "title":"Assassinato em Arranha-Céu",
                    "brief":"Magnata encontrado morto por dardo envenenado dentro de escritório de torre de vidro no 50º andar.",
                    "victim":"Vítima: Ghassan Al-Malik (65).",
                    "culprit":"Ziad Rival",
                    "evidence":[
                        {"name":"Microdardo Envenenado","desc":"Disparado da janela de prédio oposto."},
                        {"name":"Bestas Profissionais","desc":"Montadas em tripé em prédio oposto."},
                        {"name":"Impressão Parcial","desc":"Na empunhadura da besta em sala escura."},
                        {"name":"Contrato Dissolvido","desc":"Mostra grande perda para principal concorrente."},
                        {"name":"Escopo de Alta Potência","desc":"Usado para mira de precisão de longo alcance."}
                    ],
                    "suspects":[
                        {"name":"Ziad Rival","role":"Magnata Rival","alibi":"Em reuniões bancárias o dia todo.","qs":[{"q":"Relação com a vítima?","a":"Fierce market competition."},{"q":"Contratou atirador?","a":"Sou empresário legal."},{"q":"Onde na hora do crime?","a":"Na torre financeira."}]},
                        {"name":"Sahar Secretária","role":"Assistente Executiva","alibi":"Preparando café no lounge.","qs":[{"q":"Quem tem acesso ao escritório?","a":"Eu e o chefe de segurança."},{"q":"Ouviu som de janela?","a":"O vidro é à prova de som."},{"q":"Ele estava com medo?","a":"Recebeu ameaças de morte."}]},
                        {"name":"Maher Chefe de Segurança","role":"Chefe de Guarda","alibi":"Monitorando câmeras do andar inferior.","qs":[{"q":"Por que perdeu o atirador?","a":"Prédio oposto abandonado."},{"q":"Quem possui a chave oposta?","a":"Empreiteiro falido."},{"q":"As câmeras cobrem o oposto?","a":"O ângulo perde isso."}]},
                        {"name":"Jehad Atirador","role":"Mercenário Misterioso","alibi":"Alugando quarto sob pseudônimo.","qs":[{"q":"Por que na torre oposta?","a":"Fotografia entusiasta."},{"q":"Por que impressão na besta?","a":"Executei contrato por dinheiro."},{"q":"Quem te pagou?","a":"Rival Ziad."}]}
                    ],
                    "explain":"Ziad Rival contratou o mercenário Jehad para executar assassinato de longo alcance entre prédios.",
                    "hints":["Dica 1: Examine o microdardo envenenado e a besta profissional montada no prédio oposto.","Dica 2: Verifique o contrato dissolvido mostrando grandes perdas financeiras para o principal rival de mercado.","Dica 3: Ziad Rival contratou o atirador Jehad no prédio oposto abandonado para executar o assassinato na torre."]
                }
            ]
        },
        de: {
            appTitle: "Die Schwarze Akte | Othmane Ettoumi",
            appSub: "Intelligentes Detektivspiel – 20 Kriminalfälle",
            profileBtn: "👤 Detektivprofil",
            chatBtn: "💬 Freunde-Chat",
            mpBtn: "🌐 Mit Freunden spielen",
            statusReady: "Bereit für den Einsatz",
            archiveTitle: "📁 Fallarchive (20 Verbrechen)",
            archiveDesc: "Wählen Sie aus 20 Fällen mit steigendem Schwierigkeitsgrad, um Ihre Ermittlungen zu beginnen.",
            footerText: "Die Schwarze Akte © 2026 - Entworfen von: Othmane Ettoumi | 100% Offline (Mehrspieler benötigt Internet)",
            filterAll: "Alle",
            filterEasy: "Leicht",
            filterMedium: "Mittel",
            filterHard: "Schwer",
            filterExtreme: "Extrem",
            backArchive: "← Zurück zu den Archiven",
            crimeSceneBanner: "TATORTUNTERSUCHUNG",
            startInv: "Weiter zum Tatort →",
            backBrief: "← Zurück zur Fallakte",
            notesBtn: "📝 Detektivnotizen",
            hintBtn: "💡 Hinweis anfordern",
            evidenceHeader: "🔍 Physische Beweise",
            suspectsHeader: "👥 Verdächtigenvernehmung",
            accuseBtn: "⚖️ Verdächtigen anklagen & Fall lösen",
            returnMenu: "Zum Archiv zurückkehren",
            retryCase: "Fall erneut untersuchen",
            close: "Schließen",
            interrogateQ: "Vernehmungsfragen:",
            accuseModalTitle: "⚖️ Letzte Anklage",
            accuseModalDesc: "Wählen Sie den wahren Täter sorgfältig aus. Eine falsche Anklage schadet Ihrem Detektivrang!",
            cancel: "Abbrechen",
            confirmAccuse: "Anklage bestätigen",
            notesTitle: "📝 Detektivnotizen",
            notesDesc: "Schreiben Sie Ihre Beobachtungen und Theorien auf:",
            notesClose: "Schließen",
            notesSave: "Notizen speichern",
            hintTitle: "💡 Detektiv-Hinweis",
            hintClose: "Verstanden",
            profileTitle: "👤 Detektivprofil",
            proNameLabel: "Detektivname:",
            proRankLabel: "Rang:",
            achLabel: "🎖️ Erfolge",
            onboardTitle: "Willkommen, Detektiv",
            onboardBody: "20 Kriminalfälle warten darauf, gelöst zu werden. Lies die Fallzusammenfassung, untersuche die physischen Beweise sorgfältig und verhöre jeden Verdächtigen — ihre Antworten verbergen die Wahrheit. Nutze Hinweise nur, wenn du nicht weiterkommst (maximal 3 pro Fall), und stelle dann deine endgültige Anklage. Wähle weise: Eine falsche Anklage lässt den wahren Täter entkommen!",
            onboardBtn: "Auf zur Ermittlung →",
            proClose: "Abbrechen",
            proSave: "Profil speichern",
            mpTitle: "🌐 Raum Mit Freunden spielen",
            mpDesc: "Verbinden Sie sich über WiFi, *3 oder *6 (Marokko) mit befreundeten Detektiven, um im Lösen von Fällen zu konkurrieren.",
            mpClose: "Schließen",
            mpJoin: "Raum verbinden",
            mpCreate: "Raum erstellen",
            mpLeave: "Raum verlassen",
            roomLeft: "Du hast den Raum verlassen.",
            roomCreating: "Dein Raum wird erstellt...",
            roomCreated: "Raum bereit! Teile diesen Code mit deinem Freund: {code}",
            roomWaiting: "Warte, bis ein Freund dem Raum {code} beitritt...",
            roomFriendJoined: "Dein Freund ist beigetreten! Ihr seid jetzt verbunden.",
            roomConnectFailed: "Verbindung fehlgeschlagen. Stelle sicher, dass du und dein Freund Internet über WiFi, *3 oder *6 habt, und versuche es erneut.",
            roomDisconnected: "Dein Freund hat die Verbindung getrennt.",
            chatConnectedDisclaimer: "Live mit einem echten Freund verbunden.",
            friendJoinedMsg: "Dein Freund ist dem Raum beigetreten!",
            chatHeading: "💬 Detektiv-Freunde-Chat",
            chatDisclaimer: "Simulierter Demo-Chat — nicht mit echten Spielern verbunden.",
            chatSend: "Senden",
            chatWelcomeMsg: "Willkommen im Netzwerk, Detektive! Gibt es neue Hinweise zum letzten Fall?",
            chatInputPlaceholder: "Nachricht eingeben...",
            notesPlaceholder: "Notieren Sie hier Ihre Hinweise...",
            roomCodePlaceholder: "Raumcode eingeben (z. B. CASE-99)",
            answerLabel: "Antwort:",
            selectSuspectAlert: "Bitte wählen Sie einen Verdächtigen aus, bevor Sie die Anklage bestätigen.",
            resultSolvedTitle: "Fall erfolgreich gelöst!",
            resultSolvedDesc: "Gut gemacht, Detektiv! Sie haben den Täter richtig identifiziert.",
            resultWrongTitle: "Falsche Anklage!",
            resultWrongDesc: "Sie haben eine unschuldige Person beschuldigt. Der wahre Täter ist entkommen.",
            caseExplanationLabel: "Fallerklärung:",
            micNotSupported: "Sprachaufnahme wird auf diesem Gerät nicht unterstützt.",
            micPermissionDenied: "Der Mikrofonzugriff wurde verweigert. Bitte erlauben Sie das Mikrofon in den Browsereinstellungen.",
            micTitle: "Sprachnachricht (tippen zum Aufnehmen, erneut tippen zum Senden)",
            micListening: "Aufnahme läuft… zum Senden tippen",
            micNoFriend: "Verbinde dich zuerst mit einem Freund, um eine Sprachnachricht zu senden.",
            callBtnTitle: "Sprachanruf",
            callActive: "🔊 Sprachanruf verbunden",
            callConnecting: "📞 Rufe deinen Freund an…",
            callEnded: "Anruf beendet.",
            roomEnterCode: "Bitte geben Sie einen gültigen Raumcode ein.",
            roomConnecting: "Verbindung zum Raum {code} über sicheres Netzwerk wird hergestellt...",
            roomRetrying: "Raum noch nicht gefunden — erneuter Versuch... ({n} verbleibend)",
            roomConnected: "Erfolgreich mit Raum {code} verbunden! Bereit für die Herausforderung.",
            botName: "Inspektor John",
            botReplies: [
                "Achten Sie darauf, alle physischen Beweise sorgfältig zu untersuchen.",
                "Überprüfen Sie die Alibis der Verdächtigen auf subtile Widersprüche.",
                "Haben Sie die persönlichen Notizen des Opfers überprüft?",
                "Graben Sie weiter, Detektiv! Die Wahrheit liegt im Detail."
            ],
            cases: [
                {
                    "tag":"Mordfall",
                    "difficulty":"easy",
                    "title":"Stille im Herrenhaus",
                    "brief":"Der wohlhabende Kaufmann Karim Ouazzani wurde tot in seinem privaten Arbeitszimmer im Herrenhaus durch eine tödliche Stichwunde aufgefunden. Die Tür war von innen verschlossen und das Fenster offen.",
                    "victim":"Opfer: Karim Ouazzani (54) - Geschäftsmann.",
                    "culprit":"Yahya Alami",
                    "evidence":[
                        {"name":"Silberner Dolch","desc":"Sorgfältig abgewischt, hinterließ einen Teilfingerabdruck, der zum Partner Yahya passt."},
                        {"name":"Zerrissener Finanzbrief","desc":"Beweist, dass das Opfer seinem Geschäftspartner Yahya eine riesige Summe schuldete."},
                        {"name":"Schlammiger Fußabdruck","desc":"Großer Schuhabdruck in der Nähe des Fensters, der zum Schlamm im Garten des Herrenhauses passt."},
                        {"name":"Angehaltene Armbanduhr","desc":"Stehengeblieben um 21:42 Uhr, der genaue Zeitpunkt des Mordes."},
                        {"name":"Sicherheitskamera-Protokoll","desc":"Zeigt verdächtige Bewegungen im Flur zum Arbeitszimmer."}
                    ],
                    "suspects":[
                        {"name":"Salma Ouazzani","role":"Ehefrau","alibi":"Schlief seit 21:00 Uhr in ihrem Zimmer.","qs":[{"q":"Haben Sie Lärm gehört?","a":"Nein, es war völlig ruhig."},{"q":"Wo waren Sie zu dieser Zeit?","a":"In meinem Zimmer und habe allein geschlafen."},{"q":"Hatten Sie finanzielle Streitigkeiten?","a":"Ich hatte nichts mit seinem Geld zu tun."}]},
                        {"name":"Yahya Alami","role":"Geschäftspartner","alibi":"Rauchte eine Zigarette auf dem hinteren Balkon.","qs":[{"q":"Worum ging es bei dem finanziellen Streit?","a":"Nur um eine ganz normale Geschäftspartnerschaft."},{"q":"Warum war Ihr Fingerabdruck auf dem Dolch?","a":"Ich war morgens wegen der Arbeit dort."},{"q":"Wo waren Sie um 21:40 Uhr?","a":"Auf dem Balkon und habe geraucht."}]},
                        {"name":"Fatima","role":"Hausmädchen","alibi":"Entdeckte die Leiche morgens beim Putzen.","qs":[{"q":"Wann haben Sie das Arbeitszimmer geöffnet?","a":"Um 8:00 Uhr."},{"q":"War die Tür verschlossen?","a":"Ja, von innen verschlossen."},{"q":"Ist Ihnen etwas Ungewöhnliches aufgefallen?","a":"Das Fenster stand leicht offen."}]},
                        {"name":"Omar","role":"Leibwächter","alibi":"Auf Patrouille um die Begrenzungsmauern.","qs":[{"q":"Ist ein Eindringling eingedrungen?","a":"Die Haupttore waren verschlossen."},{"q":"Warum haben Sie nichts gehört?","a":"Das Arbeitszimmer ist schallisoliert und der Wind war laut."},{"q":"Was waren Ihre Pflichten?","a":"Stündliche Patrouille."}]}
                    ],
                    "explain":"Yahya Alami ist der Täter: Er gab zu, in der Nähe des Balkons gewesen zu sein. Sein Teilfingerabdruck auf dem Dolch und schlammige Fußabdrücke stimmen aufgrund des großen Schuldenstreits mit dem Gartenweg überein.",
                    "hints":["Hinweis 1: Untersuchen Sie die physischen Beweise am silbernen Dolch und den Gartenweg außerhalb des offenen Fensters.","Hinweis 2: Überprüfen Sie, wer einen großen finanziellen Streit und Schuldenkonflikt mit dem Opfer hatte.","Hinweis 3: Yahya Alamis Balkon-Alibi bricht zusammen, wenn man es mit seinem Teilfingerabdruck auf der Tatwaffe und den schlammigen Fußabdrücken abgleicht."]
                },
                {
                    "tag":"Diebstahl",
                    "difficulty":"easy",
                    "title":"Auge des Nils Juwel",
                    "brief":"Der seltene blaue Diamant „Auge des Nils“ verschwand in der Eröffnungsnacht spurlos aus seiner Vitrine im Nationalmuseum, ohne dass ein Schloss aufgebrochen wurde.",
                    "victim":"Ort: Nationalmuseum - Juwel im Wert von 10 Millionen Dollar.",
                    "culprit":"Maher der Kurator",
                    "evidence":[
                        {"name":"Geschnittener Seidenhandschuh","desc":"Wurde neben der Vitrine gefunden."},
                        {"name":"VIP-Zutrittskarte","desc":"Trägt versteckte Fingerabdrücke des Kurators."},
                        {"name":"Kameramaterial","desc":"Zeigt eine Gestalt im schwarzen Mantel, die die Halle hastig verlässt."},
                        {"name":"Haarsträhne","desc":"Fing sich am Rahmen der Vitrine ein."},
                        {"name":"Passende Meisterschlüssel","desc":"Meisterschlüsselsatz, der dem Verwaltungsbeamten gehört."}
                    ],
                    "suspects":[
                        {"name":"Raid der Direktor","role":"Museumsdirektor","alibi":"Begrüßte VIP-Gäste in der Haupthalle.","qs":[{"q":"Wer hat die Schlüssel?","a":"Nur ich selbst und das Sicherheitspersonal."},{"q":"Wo waren Sie während des Diebstahls?","a":"Bei den VIP-Gästen."},{"q":"Haben Sie den Verlust sofort bemerkt?","a":"Nein, wir haben ihn erst später entdeckt."}]},
                        {"name":"Sanaa Sicherheit","role":"Sicherheitschefin","alibi":"Überwachte die Überwachungskameras im hinteren Kontrollraum.","qs":[{"q":"Warum sind die Kameras für 1 Minute ausgefallen?","a":"Ein plötzlicher Stromausfall."},{"q":"Sind Sie durch die Halle gegangen?","a":"Nur während der routinemäßigen Patrouille."},{"q":"Wer hat das Gebäude nach der Schließung betreten?","a":"Niemand."}]},
                        {"name":"Maher der Kurator","role":"Kurator & Restaurator","alibi":"Restaurierte Gemälde im Ostflügel.","qs":[{"q":"Warum wurde Ihr Handschuh gefunden?","a":"Ich trug ihn beim Reinigen von Exponaten."},{"q":"Haben Sie Zugang?","a":"Ja, als Teil meiner Arbeit."},{"q":"Wo waren Sie um 22:00 Uhr?","a":"Allein in der Werkstatt."}]},
                        {"name":"Mona Journalistin","role":"Event-Reporterin","alibi":"Interviewte Gäste im ganzen Raum.","qs":[{"q":"Haben Sie das Juwel fotografiert?","a":"Ja, früher am Abend."},{"q":"Wann sind Sie gegangen?","a":"Kurz vor dem Vorfall."},{"q":"Haben Sie jemanden Verdächtigen gesehen?","a":"Ich sah jemanden in einem Mantel."}]}
                    ],
                    "explain":"Maher der Kurator stahl den Diamanten unter Ausnutzung seines Restaurierungszugangs und hinterließ Seidenhandschuhfasern in der Nähe der Vitrine.",
                    "hints":["Hinweis 1: Überprüfen Sie den zerschnittenen Seidenhandschuh direkt neben der Vitrine.","Hinweis 2: Konzentrieren Sie sich darauf, wer professionellen Restaurierungszugang hatte, um Museumsexponate ohne gewaltsames Aufbrechen von Schlössern zu handhaben.","Hinweis 3: Maher der Kurators Ausrede erklärt nicht, warum seine Handschuhfasern und Zugangs-Fingerabdrücke am Tatort gefunden wurden."]
                },
                {
                    "tag":"Verschwinden",
                    "difficulty":"easy",
                    "title":"Wo ist Yasmine?",
                    "brief":"Die Universitätsstudentin Yasmine Alaoui ist seit 3 Tagen verschwunden. Ihr Auto wurde geparkt in der Nähe des dunklen Waldes gefunden, wobei der Schlüssel im Zündschloss steckte.",
                    "victim":"Vermisste Person: Yasmine Alaoui (22).",
                    "culprit":"Ziad der Ex",
                    "evidence":[
                        {"name":"Zerstörtes Telefon","desc":"Am Straßenrand gefunden; der letzte Anruf ging an ihren Ex-Verlobten."},
                        {"name":"Handgeschriebene Drohung","desc":"Ein handgeschriebener Drohbrief in ihrer Handtasche."},
                        {"name":"Reifenspurabdruck","desc":"Seltene Sportreifenabdrücke, die zum Auto ihres Kommilitonen passen."},
                        {"name":"Kaffeetasse","desc":"Auf dem Beifahrersitz noch warm."},
                        {"name":"Persönliches Tagebuch","desc":"Erwähnt ihre ständige Angst, dass jemand sie stalkt."}
                    ],
                    "suspects":[
                        {"name":"Ziad der Ex","role":"Ex-Verlobter","alibi":"Den ganzen Tag bei der Arbeit und hat sie nicht gesehen.","qs":[{"q":"Wann waren Sie das letzte Mal in ihrem Auto?","a":"Vor etwa einer Woche."},{"q":"Warum haben Sie ihr in dem Brief gedroht?","a":"Das war ein Missverständnis aus der Vergangenheit."},{"q":"Wo war Ihr Auto in dieser Nacht?","a":"In meiner Garage zu Hause."}]},
                        {"name":"Sami Kommilitone","role":"Universitätskommilitone","alibi":"Lernte in der öffentlichen Bibliothek.","qs":[{"q":"Was war Ihre Beziehung?","a":"Nur Universitätskommilitonen."},{"q":"Warum stimmen die Reifenspuren überein?","a":"Viele Studenten besitzen dieses Reifenmodell."},{"q":"Wo waren Sie am Dienstag?","a":"Bis 20:00 Uhr in der Bibliothek."}]},
                        {"name":"Nawal Nachbarin","role":"Wohnheim-Nachbarin","alibi":"Besuchte Familie in einer Nachbarstadt.","qs":[{"q":"Haben Sie einen Streit gehört?","a":"Niemals, ihre Wohnung war ruhig."},{"q":"Wann sind Sie zurückgekehrt?","a":"Am nächsten Morgen."},{"q":"Haben Sie Ziad in der Nähe der Wohnung gesehen?","a":"Ja, letzte Woche zweimal."}]},
                        {"name":"Dr. Tariq","role":"Professor","alibi":"Korrektur von Prüfungsarbeiten an der Universität.","qs":[{"q":"Hat sie den Unterricht verpasst?","a":"Ja, einen Tag vor ihrem Verschwinden."},{"q":"Hatte sie Probleme?","a":"Sie wirkte in letzter Zeit ängstlich."},{"q":"Wie war ihre Leistung?","a":"Fleißig und arbeitsam."}]}
                    ],
                    "explain":"Ziad der Ex ist verantwortlich: Sportreifenabdrücke und widersprüchliche Aussagen zu vergangenen Drohungen bringen ihn direkt in Verbindung.",
                    "hints":["Hinweis 1: Untersuchen Sie die Protokolle des zerstörten Telefons und den Drohbrief in ihrer Tasche.","Hinweis 2: Betrachten Sie genau die Reifenspurabdrücke in der Nähe des dunklen Waldes, wo ihr Auto verlassen wurde.","Hinweis 3: Ziad der Ex machte widersprüchliche Aussagen über seinen Aufenthaltsort und frühere Drohungen gegen das Opfer."]
                },
                {
                    "tag":"Vergiftung",
                    "difficulty":"easy",
                    "title":"Gift im Glas",
                    "brief":"Der prominente Literaturkritiker Ramzi Hamid starb unmittelbar nach dem Schlucken von Saft bei seiner Ehrungszeremonie im Opernhaus.",
                    "victim":"Opfer: Ramzi Hamid (61).",
                    "culprit":"Samer der rivalisierende Autor",
                    "evidence":[
                        {"name":"Kontaminierte Saftflasche","desc":"Enthält Spuren von tödlichem Zyanidgift."},
                        {"name":"Gefaltete Serviette","desc":"Hat giftige Pulverrückstände und einen Teilfingerabdruck."},
                        {"name":"Veranstaltungsprogramm","desc":"Zeigt den genauen Getränke-Serviceplan."},
                        {"name":"Trinkglas","desc":"Fingerabdrücke des Opfers und fremde chemische Substanzen am Rand."},
                        {"name":"Harter Rezensionsartikel","desc":"Eine scharfe Kritik des Opfers, die einen Amateurautor angreift."}
                    ],
                    "suspects":[
                        {"name":"Mona Gastgeberin","role":"Veranstaltungs-Hostess","alibi":"Servierte Getränke nach Anweisungen der Organisatoren.","qs":[{"q":"Wer hat die Gläser vorbereitet?","a":"Ich selbst und der Bar-Assistent."},{"q":"Haben Sie den Tisch verlassen?","a":"Für eine Minute, um Eis zu holen."},{"q":"Haben Sie jemanden näherkommen sehen?","a":"Ich sah den jungen Autor in der Nähe."}]},
                        {"name":"Samer der rivalisierende Autor","role":"Rivalisierender Autor","alibi":"Unterhielt sich den ganzen Abend mit dem Verlagsleiter.","qs":[{"q":"Warum hat der Kritiker Sie angegriffen?","a":"Er hat meinen neuesten Roman unfair ruiniert."},{"q":"Haben Sie etwas in das Getränk getan?","a":"Gott bewahre, ich bin Profi."},{"q":"Wo waren Sie während des Vorfalls?","a":"Vor der Bühne der Zeremonie."}]},
                        {"name":"Laila Ramzi","role":"Tochter","alibi":"Übergab Auszeichnungen im Namen ihres Vaters.","qs":[{"q":"Waren Sie auf gutem Fuß?","a":"Natürlich, er ist mein Vater."},{"q":"Wer erbt das Vermögen?","a":"Ich und eine Stiftung."},{"q":"Verdächtigen Sie jemanden?","a":"Der Autor Samer hat ihm gedroht."}]},
                        {"name":"Essam Wächter","role":"Sicherheitswache","alibi":"Bewachte den Haupteingang der Halle.","qs":[{"q":"Wer hat die Hintertür betreten?","a":"Nur das Catering-Personal."},{"q":"Wissen Sie etwas über Zyanid?","a":"Ich weiß nichts über Chemikalien."},{"q":"Arbeiten die Kameras?","a":"Ja, sie zeichnen alles auf."}]}
                    ],
                    "explain":"Samer der rivalisierende Autor rächte sich für seinen ruinierten Ruf und vergiftete das Glas während der kurzen Abwesenheit der Hostess.",
                    "hints":["Hinweis 1: Überprüfen Sie die kontaminierte Saftflasche und die giftigen Pulverrückstände auf der Serviette.","Hinweis 2: Überprüfen Sie den harten Rezensionsartikel, den das Opfer geschrieben hat, um einen Amateurautor anzugreifen.","Hinweis 3: Samer der rivalisierende Autor hatte ein starkes Rachemotive und die Gelegenheit, als sich die Hostess entfernte."]
                },
                {
                    "tag":"Mordfall",
                    "difficulty":"easy",
                    "title":"Das Rätsel des geschlossenen Raumes",
                    "brief":"Der Geschäftsmann Mamdouh Sabri wurde tot in seinem Hotelzimmer aufgefunden, erstochen. Alle Türen und Fenster waren von innen sicher verschlossen und boten keinen Ausgang.",
                    "victim":"Opfer: Mamdouh Sabri (48).",
                    "culprit":"Khaled der Wartungstechniker",
                    "evidence":[
                        {"name":"Klimaanlage","desc":"Mit einem Metallkeil blockiert, um den automatischen Türverriegelungsmechanismus zu verzögern."},
                        {"name":"Startpistole","desc":"Aus dem Fenster im obersten Stockwerk geworfen."},
                        {"name":"Dünner Angelschnur","desc":"Langer transparenter Faden, der für den Trick mit dem geschlossenen Raum verwendet wurde."},
                        {"name":"Hotelregister","desc":"Zeigt an, dass nur das Wartungspersonal Zugriff hatte."},
                        {"name":"Tagebuch des Opfers","desc":"Bezieht sich auf Erpressungsversuche seines Geschäftspartners."}
                    ],
                    "suspects":[
                        {"name":"Bahgat Partner","role":"Geschäftsmartner","alibi":"Aß mit Kunden im Erdgeschoss zu Abend.","qs":[{"q":"Was ist mit der Erpressung?","a":"Nur normale geschäftliche Streitigkeiten."},{"q":"Wie sind Sie in den Raum gekommen?","a":"Ich habe ihn nie betreten."},{"q":"Haben Sie einen Ersatzschlüssel?","a":"Nur das Hotelmanagement."}]},
                        {"name":"Nadine Sekretärin","role":"Assistentin des Opfers","alibi":"Im Nebenzimmer und bereitete Reisedateien vor.","qs":[{"q":"Haben Sie einen Streit gehört?","a":"Ein schwaches Geräusch, dann Stille."},{"q":"Wann haben Sie ihn das letzte Mal lebend gesehen?","a":"Eine Stunde vor dem Vorfall."},{"q":"Wer war am Abend zu Besuch?","a":"Ein Wartungsarbeiter."}]},
                        {"name":"Khaled der Wartungstechniker","role":"Hoteltechniker","alibi":"Reparierte eine Glühbirne und ging.","qs":[{"q":"Warum wurde das Werkzeug dort gelassen?","a":"Ich habe es versehentlich auf dem Tisch liegen lassen."},{"q":"Haben Sie an der Klimaanlage manipuliert?","a":"Niemals, ich habe nur an den Lichtern gearbeitet."},{"q":"Hat er nach etwas gefragt?","a":"Er bat um absolute Ruhe."}]},
                        {"name":"Raouf Bruder","role":"Bruder des Opfers","alibi":"Schlief in seinem Zimmer im 3. Stock.","qs":[{"q":"Erbschaftsstreit?","a":"Wir haben alles friedlich aufgeteilt."},{"q":"Wie kommt man in einen geschlossenen Raum?","a":"Ich war nicht dort."},{"q":"Was ist mit dem Faden?","a":"Ich weiß nichts über Tricks."}]}
                    ],
                    "explain":"Khaled der Wartungstechniker benutzte einen Faden und den Klimaanlagentrick, um nach der Tat von innen einen geschlossenen Raum vorzutäuschen.",
                    "hints":["Hinweis 1: Untersuchen Sie die Klimaanlage und die dünne Angelschnur im Raum.","Hinweis 2: Überprüfen Sie die Hotel-Zugangsprotokolle und die zurückgelassenen Werkzeuge des Technikers.","Hinweis 3: Khaled der Wartungstechniker nutzte einen Metallkeil und einen Schnurtrick über die Klimaanlage, um den geschlossenen Raum vorzutäuschen."]
                },
                {
                    "tag":"Diebstahl",
                    "difficulty":"medium",
                    "title":"Das gestohlene Meisterwerk",
                    "brief":"Ein Originalgemälde eines weltberühmten Künstlers wurde aus der Internationalen Galerie gestohlen, wobei an seiner Stelle eine präzise Duplikatkopie aufgehängt wurde.",
                    "victim":"Ort: Internationale Kunstgalerie - Wert 5 Mio. $.",
                    "culprit":"Fouad der Maler",
                    "evidence":[
                        {"name":"Leerer Holzrahmen","desc":"Wurde versteckt hinter der Werkzeugaufbewahrung gefunden."},
                        {"name":"Professioneller Pinsel","desc":"Trägt frische Ölfarbenformulierung."},
                        {"name":"Klarer Fingerabdruck","desc":"An der Wand direkt hinter dem gefälschten Replikatgemälde."},
                        {"name":"Zugticket","desc":"Datiert auf die Nacht des Diebstahls, Richtung Grenze."},
                        {"name":"CCTV-Kameraprotokoll","desc":"Genau 10 Minuten lang deaktiviert."}
                    ],
                    "suspects":[
                        {"name":"Fouad der Maler","role":"Künstler & Fälscher","alibi":"Malte die ganze Nacht ein Porträt zu Hause.","qs":[{"q":"Warum besitzen Sie dieselben Ölfarben?","a":"Ich bin Künstler, ich verwende sie."},{"q":"Haben Sie die Galerie besucht?","a":"Ja, um Ausstellungen anzusehen."},{"q":"Wo waren Sie um 2:00 Uhr nachts?","a":"In meinem privaten Studio."}]},
                        {"name":"Hanan Kunstkritikerin","role":"Kunstkritikerin","alibi":"Schrieb einen Presseartikel im Presseraum.","qs":[{"q":"Ist Ihnen die Fälschung aufgefallen?","a":"Nein, das Replikat sah authentisch aus."},{"q":"Wer hat Kopierfähigkeiten?","a":"Offensichtlich Fouad."},{"q":"Wann sind Sie gegangen?","a":"Gegen Mitternacht."}]},
                        {"name":"Jamal Wächter","role":"Galeriewächter","alibi":"Auf Sicherheitsrundgang im Obergeschoss.","qs":[{"q":"Warum fielen die Kameras aus?","a":"Stromausfall-Fehler."},{"q":"Haben Sie jemanden Seltsamen gesehen?","a":"Niemanden."},{"q":"Wann begann der Rundgang?","a":"Um 23:00 Uhr."}]},
                        {"name":"Sahar Sammlerin","role":"Kunstsammlerin","alibi":"Bei einem Abendessen mit Investoren.","qs":[{"q":"Haben Sie angeboten, das Gemälde zu kaufen?","a":"Das Museum weigerte sich zu verkaufen."},{"q":"Wo waren Sie zum Zeitpunkt des Diebstahls?","a":"In einem schicken Restaurant."},{"q":"Verdächtigen Sie jemanden?","a":"Fouad war besessen davon."}]}
                    ],
                    "explain":"Fouad der Maler nutzte seine Fälscherfähigkeiten, um das Originalgemälde gegen sein Replikat auszutauschen, und verlor dabei seinen eigenen Pinsel.",
                    "hints":["Hinweis 1: Untersuchen Sie den zurückgelassenen professionellen Pinsel mit frischer Ölfarbe.","Hinweis 2: Betrachten Sie den Fingerabdruck an der Wand direkt hinter dem gefälschten Replikat.","Hinweis 3: Fouad der Maler ist der einzige Verdächtige, der über die genauen Fälschungsfähigkeiten und die für den Tausch erforderliche Farbzusammensetzung verfügt."]
                },
                {
                    "tag":"Mordfall",
                    "difficulty":"medium",
                    "title":"Mitternächtlicher Labor-Mord",
                    "brief":"Der Chemiker Dr. Murad wurde in seinem verschlossenen Labor getötet. Sein letzter getippter PC-Code weist auf seinen Mörder hin.",
                    "victim":"Opfer: Dr. Murad (55) - Chemiker.",
                    "culprit":"Hani der leitende Assistent",
                    "evidence":[
                        {"name":"Zerstörtes Becherglas","desc":"Enthält Rückstände eines Nervengift-Toxins."},
                        {"name":"Laptop-Computer","desc":"Letzte getippte Chiffre stimmt mit dem Namen des leitenden Assistenten überein."},
                        {"name":"Gummihandschuh","desc":"Zerrissener Gummihandschuh in der Nähe des Labordesfensters gefunden."},
                        {"name":"Vertikaler Bericht","desc":"Offenbart den Diebstahl kritischer chemischer Forschung."},
                        {"name":"Schlüsselkarten-Protokoll","desc":"Einziger Zutritt mit gültiger Schlüsselkarte."}
                    ],
                    "suspects":[
                        {"name":"Dr. Samir","role":"Forschungskollege","alibi":"Führte Experimente im Nachbargebäude durch.","qs":[{"q":"Art der gestohlenen Forschung?","a":"Fortschrittliche medizinische Formeln."},{"q":"Warum haben Sie sein Protokoll betreten?","a":"Auf der Suche nach wissenschaftlichem Papier."},{"q":"Wo waren Sie zur Tatzeit?","a":"In meinem privaten Labor."}]},
                        {"name":"Nada Studentin","role":"Laborassistentin","alibi":"Ging früher, um an ihrer Abschlussarbeit zu arbeiten.","qs":[{"q":"Wann sind Sie gegangen?","a":"Um 19:00 Uhr."},{"q":"Wer hatte die Nachttürkarte?","a":"Dr. Murad und Dr. Samir."},{"q":"War er besorgt?","a":"Er erhielt drohende Anrufe."}]},
                        {"name":"Hani der leitende Assistent","role":"Leitender Assistent","alibi":"Zu Hause bei seiner Familie.","qs":[{"q":"Warum hat der PC Ihren Namen getippt?","a":"Ein Witz oder eine falsche Beschuldigung."},{"q":"Zugang zur Forschung?","a":"Ja, voller Zugriff."},{"q":"Wo die ganze Nacht?","a":"Zu Hause bei meiner Familie."}]},
                        {"name":"Souad Gastwissenschaftlerin","role":"Gaststipendiatin","alibi":"Auf einer wissenschaftlichen Konferenz außerhalb der Stadt.","qs":[{"q":"Wann in die Stadt zurückgekehrt?","a":"Am nächsten Morgen."},{"q":"Hatten Sie Streitigkeiten mit ihm?","a":"Er lehnte die Veröffentlichung meines Papiers ab."},{"q":"Kennen Sie Hani?","a":"Ja, Arbeitskollege."}]}
                    ],
                    "explain":"Hani der leitende Assistent tötete Dr. Murad, um die Forschung zu stehlen, und bemerkte nicht, dass das Opfer seine Chiffrenidentifikation eingetippt hatte.",
                    "hints":["Hinweis 1: Untersuchen Sie das zerstörte Becherglas mit Nervengift und den Laptop-Computer.","Hinweis 2: Überprüfen Sie, wer vollen Forschungszugang und die Berechtigung hatte, das Labor zu betreten.","Hinweis 3: Der letzte getippte PC-Code des Opfers weist explizit auf Hani den leitenden Assistenten hin."]
                },
                {
                    "tag":"Mordfall",
                    "difficulty":"medium",
                    "title":"Attentat im Expresszug",
                    "brief":"Ein pensionierter Geheimdienstagent starb im Schlafwagenabteil durch einen Schalldämpfer-Schuss in einem dunklen Tunnel.",
                    "victim":"Opfer: Kamal Eddine (62).",
                    "culprit":"Salim der Geheime",
                    "evidence":[
                        {"name":"Schalldämpfer aus Metall","desc":"Wurde bei einer Tunneldurchquerung auf die Gleise geworfen."},
                        {"name":"Gefälschtes Ticket","desc":"Ticket mit falscher Identität, Sitzplatz im nächsten Wagen."},
                        {"name":"Durchsickernde Geheimakte","desc":"Fehlt aus der Aktenmappe des Opfers."},
                        {"name":"Spuren von unsichtbarer Tinte","desc":"An den Fingern von Verdächtigtem Nr. 2 gefunden."},
                        {"name":"Fahrgast-Bewegungsprotokoll","desc":"Zeigt verdächtige Bewegungen zwischen den Wagen."}
                    ],
                    "suspects":[
                        {"name":"Maher Journalist","role":"Wagenpassagier","alibi":"Schrieb die ganze Fahrt über einen Artikel am Laptop.","qs":[{"q":"Reiseziel?","a":"Hauptstadt für ein Vorstellungsgespräch."},{"q":"Haben Sie das Schussgeräusch gehört?","a":"Nur die Reibung der Zugräder."},{"q":"Warum so nervös?","a":"Ich mag keine langen Zugfahrten."}]},
                        {"name":"Salim der Geheime","role":"Geschäftsmann","alibi":"Schlief in einer privaten, verschlossenen Kabine.","qs":[{"q":"Grund für die plötzliche Reise?","a":"Dringendes Geschäft."},{"q":"Warum Tinte an den Fingern?","a":"Verträge mit Flüssigstift unterschrieben."},{"q":"Kennen Sie das Opfer?","a":"Habe ihn noch nie in meinem Leben gesehen."}]},
                        {"name":"Rasha Zugbegleiterin","role":"Zugstewardess","alibi":"Servierte Getränke im vorderen Wagen.","qs":[{"q":"Wer hat sich zwischen den Wagen bewegt?","a":"Eine Person im schwarzen Mantel."},{"q":"Licht aus im Tunnel?","a":"Nein, normale Tunnelfinsternis."},{"q":"Ist Ihnen etwas Ungewöhnliches aufgefallen?","a":"Schwacher Schießpulvergeruch."}]},
                        {"name":"Jehad Wächter","role":"Private Eskorte","alibi":"Bewachte die hintere Frachttür.","qs":[{"q":"Ist jemand an Ihnen vorbeigegangen?","a":"Niemand hat die hintere Tür überquert."},{"q":"Tragen Sie eine Schusswaffe?","a":"Ja, lizenzierte offizielle Seitenwaffe."},{"q":"Wann hat die Schicht begonnen?","a":"Seit der Abfahrt."}]}
                    ],
                    "explain":"Salim der Geheime führte ein stilles Attentat mit einem Schalldämpfer im Tunnel unter falscher Identität aus.",
                    "hints":["Hinweis 1: Überprüfen Sie den auf die Gleise geworfenen Schalldämpfer und die Fahrgastbewegungsprotokolle.","Hinweis 2: Betrachten Sie die unsichtbaren Tintenflecken und das gefälschte Ticket im nächsten Wagen.","Hinweis 3: Salim der Geheime reiste unter falscher Identität und führte den stillen Schuss im Tunnel aus."]
                },
                {
                    "tag":"Diebstahl",
                    "difficulty":"medium",
                    "title":"Tresorraub",
                    "brief":"Millionen verschwanden aus dem Tresor der nationalen Kabelgesellschaft ohne gewaltsames Eindringen; der digitale Schlüssel war nur beim Direktor.",
                    "victim":"Nationale Kabelgesellschaft - Verlust von 2 Mio. $.",
                    "culprit":"Ziad der Buchhalter",
                    "evidence":[
                        {"name":"Versteckter Kamera-Clip","desc":"Zeigt eine Person, die den PIN-Code sorgfältig eingibt."},
                        {"name":"Notizzettel","desc":"Enthält Hinweise auf das alte Passwort."},
                        {"name":"Teilfingerabdruck","desc":"Auf der Bestätigungstaste des Tresor-Ziffernblocks."},
                        {"name":"Elektronische Schlüsselkarte","desc":"Ersatzschlüsselkarte fehlt aus der Schublade."},
                        {"name":"Schuldenrechnung","desc":"Gehört dem Firmenbuchhalter."}
                    ],
                    "suspects":[
                        {"name":"Saleh Direktor","role":"Firmendirektor","alibi":"Den ganzen Morgen in einer Vorstandssitzung.","qs":[{"q":"Wer kennt die PIN?","a":"Nur ich selbst und der Buchhalter."},{"q":"Haben Sie die Ersatzschlüsselkarte verloren?","a":"Nein, immer in meiner Tasche."},{"q":"Wen verdächtigen Sie?","a":"Der Buchhalter hat hohe Schulden."}]},
                        {"name":"Fatima Sekretärin","role":"Chefsekretärin","alibi":"Termine im Foyer planen.","qs":[{"q":"Haben Sie Tresorzugang?","a":"Nein, niemals."},{"q":"Wer hat das Büro betreten?","a":"Der Buchhalter und Putzkräfte."},{"q":"Ist Ihnen etwas aufgefallen?","a":"Die Tür stand leicht einen Spalt offen."}]},
                        {"name":"Ziad der Buchhalter","role":"Finanzbuchhalter","alibi":"Bereitete die jährliche Prüfung im Büro vor.","qs":[{"q":"Warum hohe Schulden?","a":"Familienprobleme jetzt gelöst."},{"q":"Wie kennen Sie den PIN-Code?","a":"Manchmal Teil der finanziellen Pflicht."},{"q":"Wo waren Sie gestern Mittag?","a":"In einer Bankfiliale."}]},
                        {"name":"Adel Wächter","role":"Gebäudewächter","alibi":"Bewachte den Haupteingang.","qs":[{"q":"Ist jemand mit Taschen gegangen?","a":"Nur reguläres Personal geht."},{"q":"CCTV funktional?","a":"Funktioniert perfekt."},{"q":"Schichtbeginn?","a":"Frühmorgens."}]}
                    ],
                    "explain":"Ziad der Buchhalter nutzte ein Schuldenmotiv und seine PIN-Kenntnisse aus, um das Tresorgeld mit der Ersatzkarte zu stehlen.",
                    "hints":["Hinweis 1: Untersuchen Sie den versteckten Kameraclip, der die PIN-Eingabe zeigt, und die fehlende Ersatzschlüsselkarte.","Hinweis 2: Überprüfen Sie die Schuldenrechnung des Personals.","Hinweis 3: Ziad der Buchhalter hatte sowohl das finanzielle Motiv (hohe Schulden) als auch die PIN-Kenntnisse, um den Tresor zu leeren."]
                },
                {
                    "tag":"Mordfall",
                    "difficulty":"medium",
                    "title":"Verbrechen am Strand von Andalusien",
                    "brief":"Ein Fischer wurde im Morgengrauen tot am Sand neben einem kleinen Boot mit laufendem Motor aufgefunden.",
                    "victim":"Opfer: Ibrahim Fischer (50).",
                    "culprit":"Hamza der Jugendliche",
                    "evidence":[
                        {"name":"Zerbrochener Ruder aus Holz","desc":"Blutverschmiert mit Kampfspuren."},
                        {"name":"Zerrissenes Fischernetz","desc":"Verstreut in der Nähe der Wasserlinie."},
                        {"name":"Günstige Armbanduhr","desc":"Gehört einem Jugendlichen aus dem lokalen Dorf."},
                        {"name":"Fußabdrücke im Sand","desc":"Führen zur Küstenstraße."},
                        {"name":"Offene Angelkiste","desc":"Scharfe Werkzeuge fehlen."}
                    ],
                    "suspects":[
                        {"name":"Hamza der Jugendliche","role":"Arbeitsloser Jugendlicher","alibi":"Schlief die ganze Nacht zu Hause.","qs":[{"q":"Warum wurde die Uhr gefunden?","a":"Muss sie beim Schwimmen verloren haben."},{"q":"Hatten Sie Streitigkeiten?","a":"Haben um Fischereirechte gekämpft."},{"q":"Wo waren Sie um 4:00 Uhr morgens?","a":"In meinem Bett."}]},
                        {"name":"Mousa Fischer","role":"Rivalisierender Fischer","alibi":"Nachtfischen draußen auf dem Meer.","qs":[{"q":"Rückkehrzeit?","a":"Bei Sonnenaufgang."},{"q":"Haben Sie Hamza in der Nähe gesehen?","a":"Ich sah ihn in der Nähe des Bootes."},{"q":"Beziehung zum Opfer?","a":"Faire Arbeitskonkurrenz."}]},
                        {"name":"Salem Café-Besitzer","role":"Ladenbesitzer","alibi":"Eröffnete das Kaffeehaus.","qs":[{"q":"Haben Sie Schreie gehört?","a":"Nur Meereswellen."},{"q":"Wer besucht den Strand nachts?","a":"Fischer und Jugendliche."},{"q":"Haben Sie Fremde gesehen?","a":"Niemanden."}]},
                        {"name":"Khadija Ehefrau","role":"Hausfrau","alibi":"Zu Hause mit Kindern.","qs":[{"q":"Wann ist er gegangen?","a":"Um Mitternacht wie gewohnt."},{"q":"Hatten Sie Ärger?","a":"Finanzieller Streit mit Hamza."},{"q":"Haben Sie eine Notiz hinterlassen?","a":"Nein."}]}
                    ],
                    "explain":"Hamza der Jugendliche stritt über Angelplätze und schlug den Fischer mit einem Ruder, wobei er seine Uhr verlor.",
                    "hints":["Hinweis 1: Untersuchen Sie das zerbrochene Holzruder und die günstige Armbanduhr im Sand.","Hinweis 2: Überprüfen Sie die Fußabdrücke, die vom Strand zur Küstenstraße führen.","Hinweis 3: Hamza der Jugendliche hatte laufende Streitigkeiten über Fischereirechte und verlor seine persönliche Uhr während des gewaltsamen Kampfes."]
                },
                {
                    "tag":"Verschwinden",
                    "difficulty":"hard",
                    "title":"Verschwundenes antikes Gemälde",
                    "brief":"Ein seltenes Gemälde verschwand aus dem alten Königspalast, ohne das Alarmsystem auszulösen.",
                    "victim":"Palast des verstorbenen Prinzen - Seltenes Kunstwerk.",
                    "culprit":"Maher der Dekorateur",
                    "evidence":[
                        {"name":"Alarm-Umgehungswerkzeug","desc":"High-Tech-Bypass-Gerät."},
                        {"name":"Stoffhandschuh","desc":"Trägt alten Palaststaub."},
                        {"name":"Palast-Bauplan","desc":"Auf dem Telefon des Dekorateurs gefunden."},
                        {"name":"Zerrissener Stoff","desc":"Aus dem Zimmer-Vorhang gerissen."},
                        {"name":"Besucherprotokoll","desc":"Protokolliert den nächtlichen Besuch des Innenarchitekten."}
                    ],
                    "suspects":[
                        {"name":"Prinz Khalid","role":"Palasterbe","alibi":"Geschäftsreise im Ausland.","qs":[{"q":"Wer hat Zugang?","a":"Ich und das Wartungsteam."},{"q":"Ist das Gemälde versichert?","a":"Ja, für Millionen."},{"q":"Verdächtigen Sie das Personal?","a":"Neuer Innenarchitekt."}]},
                        {"name":"Maher der Dekorateur","role":"Restaurierungsexperte","alibi":"Wände für Renovierung ausmessen.","qs":[{"q":"Warum Baupläne besitzen?","a":"Erforderlich für Designarbeit."},{"q":"Alarm umgehen?","a":"Nur beschädigte Drähte überprüft."},{"q":"Wo ist das Gemälde?","a":"Ich weiß nichts."}]},
                        {"name":"Souad Historikerin","role":"Archivarin","alibi":"Katalogisierte Gegenstände im Archiv.","qs":[{"q":"Letzter Zimmerbesuch?","a":"Letzte Woche."},{"q":"Änderungen bemerkt?","a":"Alles an seinem Platz."},{"q":"Wer mag Kunst?","a":"Der Prinz selbst."}]},
                        {"name":"Essam Chef-Wächter","role":"Chef-Wächter","alibi":"Überwachte die äußeren Tore.","qs":[{"q":"Eindringling entdeckt?","a":"CCTV zeigte niemanden."},{"q":"Alarm ausgelöst?","a":"Einige Minuten unterbrochen, dann fortgesetzt."},{"q":"Wer hat das System entschärft?","a":"Ein Experte."}]}
                    ],
                    "explain":"Maher der Dekorateur nutzte den Zugang zu den Bauplänen und technische Fähigkeiten, um den Alarm zu deaktivieren und das Gemälde zu stehlen.",
                    "hints":["Hinweis 1: Überprüfen Sie das Alarm-Umgehungswerkzeug und die auf dem Telefon des Dekorateurs gefundenen Palast-Baupläne.","Hinweis 2: Überprüfen Sie das Besucherprotokoll, das den nächtlichen Zugriff des Innenarchitekten zeigt.","Hinweis 3: Maher der Dekorateur nutzte seinen Bauplankenzugang und technische Gadgets, um den Alarm zu deaktivieren und das Gemälde zu stehlen."]
                },
                {
                    "tag":"Mordfall",
                    "difficulty":"hard",
                    "title":"Mord am berühmten Schauspieler",
                    "brief":"Ein prominenter Schauspieler wurde nach der letzten Bühnenaufführung tot in seiner Garderobe im Theater aufgefunden.",
                    "victim":"Opfer: Rafat Rami (45).",
                    "culprit":"Bassem der Zweitbesetzungsschauspieler",
                    "evidence":[
                        {"name":"Zerrissenes Skript","desc":"Harte schriftliche Notizen über die Hauptrolle."},
                        {"name":"Requisiten-Seil","desc":"Eine gefälschte Requisite, die in ein echtes Tötungswerkzeug verwandelt wurde."},
                        {"name":"Holzschuhabdruck","desc":"Hinter dem dunklen Korridor hinter der Bühne."},
                        {"name":"Verbindungsprotokolle","desc":"Wiederholte Drohungen von einem minderberechtigten Zweitbesetzungsschauspieler."},
                        {"name":"Bühnenkostüm","desc":"In einem Mülleimer entsorgt."}
                    ],
                    "suspects":[
                        {"name":"Salaf Schauspielerin","role":"Hauptdarstellerin","alibi":"Feierte mit Fans in der Cafeteria.","qs":[{"q":"Beziehung zu ihm?","a":"Streng künstlerische Rivalität."},{"q":"Haben Sie gestritten?","a":"Konkurrierten um die Hauptrolle."},{"q":"Wo zur Tatzeit?","a":"Mit Fans in der Halle."}]},
                        {"name":"Sami Regisseur","role":"Bühnenregisseur","alibi":"Überprüfte die Beleuchtung mit der Crew.","qs":[{"q":"Wie war die Leistung des Opfers?","a":"Großartig, aber arrogant."},{"q":"Wer hat die Garderobe betreten?","a":"Ein Zweitbesetzungsschauspieler wütend."},{"q":"Haben Sie Schreie gehört?","a":"Musik übertönte die Geräusche."}]},
                        {"name":"Ziad Autor","role":"Dramatiker","alibi":"Signierte Bücher für das Publikum draußen.","qs":[{"q":"Hat er das Skript geändert?","a":"Forderte ständig Änderungen."},{"q":"Wo nach dem Vorhang?","a":"Bücher signieren."},{"q":"Mochten Sie seine Schauspielerei?","a":"Er passte gut zur Rolle."}]},
                        {"name":"Bassem der Zweitbesetzungsschauspieler","role":"Nebendarsteller","alibi":"Zog sich in der Umkleidekabine um.","qs":[{"q":"Warum ihm drohen?","a":"Er hat mir gierig die Hauptrolle gestohlen."},{"q":"Haben Sie ihn getötet?","a":"Ich war wütend, aber habe nicht getötet."},{"q":"Wo genau?","a":"Alleine im Zimmer."}]}
                    ],
                    "explain":"Bassem der Zweitbesetzungsschauspieler erdrosselte Rafat aus Wut über die gestohlene Hauptrolle mit einer Bühnenrequisite.",
                    "hints":["Hinweis 1: Untersuchen Sie die Verbindungsprotokolle mit wiederholten Drohungen eines Mitarbeiters.","Hinweis 2: Überprüfen Sie das Requisiten-Seil, das in ein echtes Strangulationswerkzeug hinter der Bühne umgewandelt wurde.","Hinweis 3: Bassem der Zweitbesetzungsschauspieler hatte ein starkes Wutmotiv, nachdem Rafat seine Hauptrolle gestohlen hatte."]
                },
                {
                    "tag":"Diebstahl",
                    "difficulty":"hard",
                    "title":"Goldener Zugraub",
                    "brief":"Eine Goldbarren-Sendung im Wert von 1 Mio. $ verschwand nachts mitten auf der Fahrt zwischen Städten aus einem schnellen Frachtzug.",
                    "victim":"Express Transit Corp - Goldbarren.",
                    "culprit":"Sameh der Zugführer",
                    "evidence":[
                        {"name":"Hydraulischer Wagenheber","desc":"Neben den Bahngleisen versteckt."},
                        {"name":"Walkie-Talkie","desc":"Verwendet die Sicherheitsfrequenz des Zugunternehmens."},
                        {"name":"Verschmutzter Arbeitshandschuh","desc":"Trägt das Logo des Versandunternehmens."},
                        {"name":"Schwere LKW-Spuren","desc":"In der Nähe der Notstopp-Markierung des Zuges."},
                        {"name":"Wartungsprotokoll","desc":"Zeigt einen absichtlichen 1-minütigen Zugbremsenhalt."}
                    ],
                    "suspects":[
                        {"name":"Sameh der Zugführer","role":"Frachtführer","alibi":"Gestoppt wegen plötzlichem Signalfehler.","qs":[{"q":"Warum hier stoppen?","a":"Not-Rotsignal vom Turm."},{"q":"Kennen Sie den Frachtwert?","a":"Ja, gesichertes Gold."},{"q":"Wer hat das Funkgerät?","a":"Die Leitungs-Crew."}]},
                        {"name":"Majed Dispatcher","role":"Signalkontrolleur","alibi":"Überwachte die Leitungen vom Kontrollturm aus.","qs":[{"q":"Befehl zum Zugstopp?","a":"Die Signale waren grün."},{"q":"Wer hat das Panel manipuliert?","a":"Jemand mit Frequenz."},{"q":"Wo um 1:00 Uhr nachts?","a":"Allein im Turm."}]},
                        {"name":"Daniel Wächter","role":"Fracht-Eskorte","alibi":"Bewachte die Innentür des hinteren Wagens.","qs":[{"q":"Warum Waffe nicht abfeuern?","a":"Durch Gas bewusstlos geschlagen."},{"q":"Wer war drinnen?","a":"Nur ich und Kisten."},{"q":"Wann aufgewacht?","a":"Eine Stunde nach dem Stopp."}]},
                        {"name":"Essam Mechaniker","role":"Wartungsarbeiter","alibi":"Reparierte Gleise an einer nahegelegenen Station.","qs":[{"q":"Besitzen Sie einen hydraulischen Wagenheber?","a":"Ja, für die Gleiswartung."},{"q":"Wo waren die Werkzeuge?","a":"Im Service-Lkw."},{"q":"Mögen Sie schnelles Geld?","a":"Wer tut das nicht? Aber ich bin ehrlich."}]}
                    ],
                    "explain":"Sameh der Zugführer kollaborierte mit dem Mechaniker Essam, um den Zug absichtlich zu stoppen und Gold abzuladen.",
                    "hints":["Hinweis 1: Überprüfen Sie den hydraulischen Wagenheber und das auf die Firmenfunkfrequenz eingestellte Walkie-Talkie.","Hinweis 2: Überprüfen Sie das Wartungsprotokoll, das einen absichtlichen 1-minütigen Notbremsstopp zeigt.","Hinweis 3: Sameh der Zugführer kollaborierte mit dem Mechaniker Essam, um den Zug anzuhalten und die Goldlieferung abzuladen."]
                },
                {
                    "tag":"Mordfall",
                    "difficulty":"hard",
                    "title":"Tod des Archäologen",
                    "brief":"Ein renommierter Archäologe wurde tot in einem frisch geöffneten Grab aufgefunden, wobei eine Reliquientruhe gewaltsam aufgebrochen worden war.",
                    "victim":"Opfer: Dr. Fadel (58).",
                    "culprit":"Maher der Schmuggler",
                    "evidence":[
                        {"name":"Archäologische Hacke","desc":"Blutverschmiert mit dem Blut des Opfers und Fingerabdrücken."},
                        {"name":"Goldene Figur","desc":"Von einem flüchtenden Mörder fallen gelassen."},
                        {"name":"Taschenlampe","desc":"Trägt die Marke eines lokalen Baumarktes."},
                        {"name":"Schmutz-Fußabdrücke","desc":"Führen zum Haupteingang der Grabung."},
                        {"name":"Expeditionsprotokoll","desc":"Beschreibt den Streit über die Aufteilung der Funde."}
                    ],
                    "suspects":[
                        {"name":"Dr. Adel","role":"Ko-Expeditionsleiter","alibi":"Dokumentierte Inschriften in der Westkammer.","qs":[{"q":"Warum streiten?","a":"Über Forschungskredit."},{"q":"Grabkammer betreten?","a":"Nur morgens."},{"q":"Wo zur Tatzeit?","a":"In einer anderen Kammer."}]},
                        {"name":"Souad Assistentin","role":"Grabungsassistentin","alibi":"Organisierte Werkzeuge im äußeren Lager.","qs":[{"q":"Wer hat das Grab nachts besucht?","a":"Dr. Fadel allein."},{"q":"Fehlende Reliquien?","a":"Seltene goldene Figur."},{"q":"Wann entdeckt?","a":"Am nächsten Morgen."}]},
                        {"name":"Maher der Schmuggler","role":"Verdächtige Person","alibi":"Jagte Wildtiere in der Nähe des Wüstenrandes.","qs":[{"q":"Warum in der Nähe des Grabes?","a":"Jagd auf Wild."},{"q":"Warum Taschenlampe gefunden?","a":"Vorher verloren."},{"q":"Reliquien schmuggeln?","a":"Falsche Beschuldigung."}]},
                        {"name":"Jehad Wächter","role":"Wüstengelände-Wächter","alibi":"Bewachte Expeditionszelte draußen.","qs":[{"q":"Fremden näherkommen sehen?","a":"Sah eine Person mit schwerer Tasche."},{"q":"Warum nicht stoppen?","a":"Dachte, es sei ein Forscher."},{"q":"Schreie gehört?","a":"Der Wind war zu laut."}]}
                    ],
                    "explain":"Maher der Schmuggler drang in das Grab ein, um eine goldene Figur zu stehlen, und ermordete den Archäologen, als er erwischt wurde.",
                    "hints":["Hinweis 1: Untersuchen Sie die am Tatort zurückgelassene Taschenlampe mit den Markierungen des örtlichen Baumarktes.","Hinweis 2: Überprüfen Sie die vom flüchtenden Täter zurückgelassene goldene Figur.","Hinweis 3: Maher der Schmuggler drang für illegalen Handel in das Grab ein und ermordete Dr. Fadel, als er erwischt wurde."]
                },
                {
                    "tag":"Verschwinden",
                    "difficulty":"hard",
                    "title":"Verschwundenes Privatjet",
                    "brief":"Ein privates Geschäftsflugzeug verschwand über unwegsamem Berg-Luftraum in der Nähe eines dichten Kiefernwaldes.",
                    "victim":"Privatflugzeug - 4 Passagiere.",
                    "culprit":"Samer der Co-Pilot",
                    "evidence":[
                        {"name":"Zerstörte Flugbox","desc":"Zeigt bewusste Manipulation des Autopilotsystems."},
                        {"name":"Kontaminierter Treibstoff","desc":"Chemikalie hinzugefügt, die Motorenausfall verursacht."},
                        {"name":"Gefälschter Abschiedsbrief","desc":"Auf dem Laptop des Assistenten gefunden."},
                        {"name":"Fallschirmleinen","desc":"In hohen Kiefernzweigspitzen verheddert."},
                        {"name":"Geänderter Flugplan","desc":"Lenkt den Pfad absichtlich in Richtung der Berge."}
                    ],
                    "suspects":[
                        {"name":"Kapitän Rami","role":"Chefpilot","alibi":"Flog das Flugzeug gemäß offiziellen Anweisungen.","qs":[{"q":"Warum Routenänderung?","a":"Um schwerem Sturm auszuweichen."},{"q":"Motorausfall?","a":"Motoren unerwartet gestoppt."},{"q":"Absturzstelle?","a":"Mitten im Wald."}]},
                        {"name":"Samer der Co-Pilot","role":"Erster Offizier","alibi":"Überwachte das Instrumentenbrett im Cockpit.","qs":[{"q":"Wer hat den Plan geändert?","a":"Kapitän bat darum, Treibstoff zu sparen."},{"q":"Flugzeug verlassen?","a":"Ich blieb an Bord."},{"q":"Was ist mit dem Fallschirm?","a":"Gegenstand der Notfallausrüstung."}]},
                        {"name":"Monir Investor","role":"Flugzeugbesitzer","alibi":"Überprüfte Dokumente auf dem Beifahrersitz.","qs":[{"q":"Ist der Jet versichert?","a":"Stark versichert."},{"q":"Spannung bemerkt?","a":"Piloten stritten leise."},{"q":"Wo ist das Gepäck?","a":"Beim Absturz verbrannt."}]},
                        {"name":"Laila Offizier","role":"Persönliche Assistentin","alibi":"Im hinteren Bereich platziert.","qs":[{"q":"Explosion gehört?","a":"Seltsames Geräusch, dann schneller Abfall."},{"q":"Fliegen gemocht?","a":"Ich mag keine großen Höhen."},{"q":"Wer profitiert?","a":"Versicherungspolicen."}]}
                    ],
                    "explain":"Samer der Co-Pilot sabotierte den Treibstoff, änderte die Navigation und sprang vor dem Absturz mit dem Fallschirm ab.",
                    "hints":["Hinweis 1: Überprüfen Sie die zerstörte Flugbox und den kontaminierten Treibstoff, der zum Motorausfall führte.","Hinweis 2: Untersuchen Sie die im oberen Kiefernwald verhedderten Fallschirmleinen in der Nähe des Absturzpfades.","Hinweis 3: Samer der Co-Pilot sabotierte den Flug, änderte die Navigation und sprang vor dem Aufprall mit dem Fallschirm ab."]
                },
                {
                    "tag":"Mordfall",
                    "difficulty":"extreme",
                    "title":"Unsichtbares Gift",
                    "brief":"Ein Tycoon wurde in einem befestigten Tresorraum-Büro mit einer seltenen, unauffindbaren Bio-Verbindung vergiftet.",
                    "victim":"Opfer: Fouad Al-Moatasem (60).",
                    "culprit":"Dr. Ziad",
                    "evidence":[
                        {"name":"Medizinische Pipette","desc":"Enthält Mikro-Tropfen Neurotoxin."},
                        {"name":"Trinkglas","desc":"Mit geruchloser Bio-Verbindung vermischt."},
                        {"name":"Chirurgischer Handschuh","desc":"In einem Mülleimer entsorgt."},
                        {"name":"Aktualisiertes Testament","desc":"Überträgt die Erbschaft an eine Wohltätigkeitsstiftung."},
                        {"name":"CCTV-Aufnahme","desc":"Zeigt eine Person in einem Arztkittel."}
                    ],
                    "suspects":[
                        {"name":"Dr. Ziad","role":"Persönlicher Arzt","alibi":"Überprüfte den Blutdruck des Opfers am Nachmittag.","qs":[{"q":"Tägliche Medizin?","a":"Nur Herzvitamine."},{"q":"Warum Pipette gefunden?","a":"Für Augentropfen verwendet."},{"q":"Wissen über neues Testament?","a":"Nein, nicht bewusst."}]},
                        {"name":"Sawsan Ehefrau","role":"Ehefrau des Opfers","alibi":"Bereitete Tee in der äußeren Küche zu.","qs":[{"q":"Wer hat Wasser getrunken?","a":"Nur mein Mann allein."},{"q":"Streit um Testament?","a":"Traurig, aber nicht getötet."},{"q":"Wer war heute zu Besuch?","a":"Sein persönlicher Arzt."}]},
                        {"name":"Maher der Apotheker","role":"Familienapotheker","alibi":"Betrieb die Apotheke den ganzen Tag.","qs":[{"q":"Toxin abgegeben?","a":"Nur autorisierte Medikamente."},{"q":"Wer hält die Bio-Verbindung?","a":"Laboratorien mit hohem Niveau."},{"q":"Herrenhaus besucht?","a":"Vor einem Monat."}]},
                        {"name":"Omar Wächter","role":"Herrenhaus-Wächter","alibi":"Bewachte das Haupttor.","qs":[{"q":"Wer kam im Arztkittel?","a":"Doktor Ziad wie gewohnt."},{"q":"Einen Fremden gesehen?","a":"Niemanden Fremden."},{"q":"Schichtbeginn?","a":"Frühmorgens."}]}
                    ],
                    "explain":"Dr. Ziad der persönliche Arzt vergiftete den Medizinvorrat mit einer Bio-Verbindung, um die Nachlassgelder zu beanspruchen.",
                    "hints":["Hinweis 1: Untersuchen Sie die medizinische Pipette mit Mikrodosen von Neurotoxin.","Hinweis 2: Überprüfen Sie das CCTV-Material, das jemanden im Arztkittel zeigt, der das befestigte Tresorraum-Büro betritt.","Hinweis 3: Dr. Ziad der persönliche Arzt vergiftete den Medizinvorrat des Opfers, um Erbschaftsgelder zu sichern."]
                },
                {
                    "tag":"Diebstahl",
                    "difficulty":"extreme",
                    "title":"Raub im lokalen Museum",
                    "brief":"Antike Bronzestatuen verschwanden aus einer Vitrine des lokalen Museums, ohne dass Schlösser aufgebrochen wurden.",
                    "victim":"Lokales Museum - 3 Statuen.",
                    "culprit":"Rami der Kurator",
                    "evidence":[
                        {"name":"Standard-Schlüsselsatz","desc":"Öffnet die Glasvitrine reibungslos."},
                        {"name":"Blauer Tintenfleck","desc":"Auf dem Griff des Vitrinenschranks."},
                        {"name":"Eintragungsprotokoll","desc":"Zeigt, dass sich der Kurator spätabends eingeloggt hat."},
                        {"name":"Leinwandtasche","desc":"Hinter den Sitzbänken zurückgelassen."},
                        {"name":"Verkaufsbeleg","desc":"Zeigt den Verkauf ähnlicher Artikel an einen Händler."}
                    ],
                    "suspects":[
                        {"name":"Rami der Kurator","role":"Museumskurator","alibi":"Aktualisierte Aufzeichnungen im Büro.","qs":[{"q":"Wer hat den Ausstellungsschlüssel?","a":"Nur ich selbst."},{"q":"Warum spätabends eingeloggt?","a":"Inventar überprüft."},{"q":"Wo sind die Statuen?","a":"Gestohlen, ich weiß nicht von wem."}]},
                        {"name":"Souad Wächter","role":"Museumswächter","alibi":"Am Haupttor stationiert.","qs":[{"q":"Trat jemand Taschen?","a":"Sah Rami eine Leinwandtasche tragen."},{"q":"Alarm ausgelöst?","a":"Nein, Originalschlüssel verwendet."},{"q":"Wann ist Rami gegangen?","a":"Nach Mitternacht."}]},
                        {"name":"Ziad Besucher","role":"Antiquitätenliebhaber","alibi":"Besichtigte Exponate tagsüber.","qs":[{"q":"Wann besucht?","a":"Zwei Tage vor dem Raub."},{"q":"Rami getroffen?","a":"Habe Statuen mit ihm besprochen."},{"q":"Antiquitäten kaufen?","a":"Nur auf legalem Wege."}]},
                        {"name":"Fatima Putzfrau","role":"Reinigungspersonal","alibi":"Putze die Hallen am Morgen.","qs":[{"q":"Fehlende Gegenstände bemerkt?","a":"Leere Vitrine am Morgen."},{"q":"Wer betritt nachts?","a":"Kurator Rami."},{"q":"Vitrinen öffnen?","a":"Niemals."}]}
                    ],
                    "explain":"Rami der Kurator stahl die Bronzestatuen mit dem offiziellen Meisterschlüssel und verkaufte sie an einen illegalen Händler.",
                    "hints":["Hinweis 1: Überprüfen Sie das Zugangsprotokoll, das zeigt, dass sich der Kurator spätabends eingeloggt hat.","Hinweis 2: Überprüfen Sie den Standardschlüsselsatz, der verwendet wurde, um Vitrinen ohne gewaltsame Schlösser zu öffnen.","Hinweis 3: Rami der Kurator nutzte seine offiziellen Meisterschlüssel, um die Bronzestatuen zu stehlen und zu verkaufen."]
                },
                {
                    "tag":"Mordfall",
                    "difficulty":"extreme",
                    "title":"Verbrechen im Spukhaus",
                    "brief":"Ein älterer Mann wurde tot in einem verlassenen Waldhaus aufgefunden, wobei die Haustür von innen verschlossen war.",
                    "victim":"Opfer: Saleh (75).",
                    "culprit":"Nabil der Neffe",
                    "evidence":[
                        {"name":"Ersatzschlüssel","desc":"Unter der Fußmatte versteckt."},
                        {"name":"Holzknüppel","desc":"Blutverschmiert mit Kampfspuren."},
                        {"name":"Geldkassette","desc":"Geleert und verstreut."},
                        {"name":"Schlammiger Fußabdruck","desc":"In der Nähe des hinteren Fensterrahmens."},
                        {"name":"Erbschaftsnotiz","desc":"Vom Neffen, der Geld fordert."}
                    ],
                    "suspects":[
                        {"name":"Nabil der Neffe","role":"Verwandter des Opfers","alibi":"Verkaufte Immobilien in der Stadt.","qs":[{"q":"Warum Geld fordern?","a":"Er war mein Onkel, brauchte Hilfe."},{"q":"Schlüsselversteck kennen?","a":"Ja, altes Versteck."},{"q":"Wo zur Tatzeit?","a":"Auf dem Stadtmarkt."}]},
                        {"name":"Saeed Nachbar","role":"Älterer Nachbar","alibi":"Reparierte den Farmzaun.","qs":[{"q":"Streit gehört?","a":"Schwacher Schrei, dann Stille."},{"q":"Wer besucht das Haus?","a":"Sein Neffe Nabil."},{"q":"Haus betreten?","a":"Niemals."}]},
                        {"name":"Mona Tochter","role":"Studentin","alibi":"Sammelte Kräuter in der Nähe des Waldes.","qs":[{"q":"Einen Fremden gesehen?","a":"Sah Nabil eine Metallkassette tragen."},{"q":"Wann gesehen?","a":"Kurz vor Sonnenuntergang."},{"q":"Jemandem erzählt?","a":"Ich hatte Angst."}]},
                        {"name":"Khaled Polizist","role":"Pensionierter Polizist","alibi":"Fischte in einem nahegelegenen Fluss.","qs":[{"q":"Saleh kürzlich besucht?","a":"Vor einer Woche zum Tee."},{"q":"Seine Stimmung?","a":"Angst vor Nabils Gier."},{"q":"Wald mögen?","a":"Verbringe dort Stunden."}]}
                    ],
                    "explain":"Nabil der Neffe tötete seinen Onkel wegen der Geldkassette und nutzte dabei ein Versteck für den Ersatzschlüssel, das er kannte.",
                    "hints":["Hinweis 1: Untersuchen Sie den unter der Fußmatte versteckten Ersatzschlüssel, den nur die Familie kannte.","Hinweis 2: Überprüfen Sie den im Haus gefundenen Erbschaftszettel, der Geld fordert.","Hinweis 3: Nabil der Neffe nutzte den versteckten Ersatzschlüssel, um einzudringen und seinen Onkel für die Geldkassette zu ermorden."]
                },
                {
                    "tag":"Verschwinden",
                    "difficulty":"extreme",
                    "title":"Diplomatisches Dokument",
                    "brief":"Ein streng geheimes diplomatisches Dokument verschwand während eines überfüllten Empfangs aus der Aktentasche des Botschafters.",
                    "victim":"Ausländische Botschaft - Geheimes Dokument.",
                    "culprit":"Daniel der Reporter",
                    "evidence":[
                        {"name":"Passende Aktentasche","desc":"Gekonnt mit dem Original vertauscht."},
                        {"name":"Gefälschte Einladung","desc":"Hat einen gefälschten Gastnamen."},
                        {"name":"CCTV-Clip","desc":"Person in dunklem formellen Anzug."},
                        {"name":"Seiden-Taschentuch","desc":"Nach französischem Parfüm duftend."},
                        {"name":"Gästeregister","desc":"Protokolliert den Eintritt eines mysteriösen Reporters."}
                    ],
                    "suspects":[
                        {"name":"Botschafter Murad","role":"Chefdiplomat","alibi":"Begrüßte Gäste in der Haupthalle.","qs":[{"q":"Wer hält die Aktentasche?","a":"Mein Assistent immer."},{"q":"Wann den Verlust bemerkt?","a":"Direkt nachdem die Gäste gingen."},{"q":"Ist das Dokument kritisch?","a":"Streng geheim."}]},
                        {"name":"Saeed Assistent","role":"Diplomatischer Assistent","alibi":"Servierte Erfrischungen für Gäste.","qs":[{"q":"Wo war die Aktentasche?","a":"Neben dem privaten Schreibtisch."},{"q":"Wer kam näher?","a":"Ausländischer Journalist."},{"q":"Allein gelassen?","a":"Für Minuten, um Dateien zu holen."}]},
                        {"name":"Daniel der Reporter","role":"Ausländischer Journalist","alibi":"Interviewte Diplomaten.","qs":[{"q":"Warum Aktentasche tauschen?","a":"Unfallbedingte Verwechslung."},{"q":"Französisches Parfüm?","a":"Geschenk von einem Freund."},{"q":"Auf der Suche nach Scoops?","a":"Ich suche die Wahrheit."}]},
                        {"name":"Nadine Übersetzerin","role":"Offizielle Übersetzerin","alibi":"Übersetzte auf der Bühne.","qs":[{"q":"Seltsame Aktivität bemerkt?","a":"Daniel schwebte um die Aktentasche."},{"q":"Wer hat ihn eingeladen?","a":"Private Einladungen."},{"q":"Dokumente sicher?","a":"Strenges Protokoll."}]}
                    ],
                    "explain":"Daniel der Reporter (Spion) vertauschte während des Empfangsgetümmels eine identische Aktentasche, um das Dokument zu stehlen.",
                    "hints":["Hinweis 1: Überprüfen Sie die vertauschte Aktentasche und das Gästeregister, das einen mysteriösen Reporter protokolliert.","Hinweis 2: Beachten Sie das am Tatort zurückgelassene Seidentaschentuch mit französischem Parfümduft.","Hinweis 3: Daniel der Reporter nutzte eine gefälschte Einladung und vertauschte Aktentaschen während des Empfangsgetümmels."]
                },
                {
                    "tag":"Mordfall",
                    "difficulty":"extreme",
                    "title":"Hochhaus-Attentat",
                    "brief":"Ein Tycoon wurde durch einen Vergiftungspfeil tot in seinem Glasurm-Büro im 50. Stock aufgefunden.",
                    "victim":"Opfer: Ghassan Al-Malik (65).",
                    "culprit":"Ziad der Rivalisierende",
                    "evidence":[
                        {"name":"Vergifteter Mikropfeil","desc":"Aus dem Fenster eines gegenüberliegenden Gebäudes abgefeuert."},
                        {"name":"Professionelle Armbrust","desc":"Auf einem Stativ im gegenüberliegenden Gebäude montiert."},
                        {"name":"Teilfingerabdruck","desc":"Auf dem Armbrustgriff in einem dunklen Raum."},
                        {"name":"Aufgelöster Vertrag","desc":"Zeigt einen großen Verlust für den Hauptkonkurrenten."},
                        {"name":"Hochleistungs-Zielfernrohr","desc":"Wurde für Präzisionszielerfassung auf große Distanz verwendet."}
                    ],
                    "suspects":[
                        {"name":"Ziad der Rivalisierende","role":"Rivalisierender Tycoon","alibi":"Den ganzen Tag in Bankgesprächen.","qs":[{"q":"Beziehung zum Opfer?","a":"Heftige Marktkonkurrenz."},{"q":"Scharfschützen angeheuert?","a":"Ich bin legaler Geschäftsmann."},{"q":"Wo zur Tatzeit?","a":"Im Finanzturm."}]},
                        {"name":"Sahar Sekretärin","role":"Chef-Assistentin","alibi":"Bereitete Kaffee in der Lounge zu.","qs":[{"q":"Wer hat Bürozugang?","a":"Ich und der Sicherheitschef."},{"q":"Fenstergeräusch gehört?","a":"Glas ist schallisoliert."},{"q":"War er verängstigt?","a":"Er erhielt Todesdrohungen."}]},
                        {"name":"Maher Sicherheitschef","role":"Sicherheitschef","alibi":"Überwachte Kameras im Untergeschoss.","qs":[{"q":"Warum Scharfschützen verpasst?","a":"Gegenüberliegendes Gebäude verlassen."},{"q":"Wer hält den Schlüssel gegenüber?","a":"Bankrotter Auftragnehmer."},{"q":"Decken Kameras gegenüber ab?","a":"Winkel verpasst es."}]},
                        {"name":"Jehad der Scharfschütze","role":"Mysteriöser Söldner","alibi":"Mietete ein Zimmer unter einem Pseudonym.","qs":[{"q":"Warum im gegnerischen Turm?","a":"Enthusiast-Fotografie."},{"q":"Warum Abdruck auf der Armbrust?","a":"Auftrag für Geld ausgeführt."},{"q":"Wer hat Sie bezahlt?","a":"Rivalisierender Ziad."}]}
                    ],
                    "explain":"Ziad der Rivalisierende heuerte den Söldner Jehad an, um das Attentat aus der Ferne über Gebäude hinweg auszuführen.",
                    "hints":["Hinweis 1: Untersuchen Sie den vergifteten Mikropfeil und die professionelle Armbrust im gegenüberliegenden Gebäude.","Hinweis 2: Überprüfen Sie den aufgelösten Vertrag, der große finanzielle Verluste für den Hauptmarktrivalen zeigt.","Hinweis 3: Ziad der Rivalisierende heuerte den Scharfschützen Jehad im verlassenen gegenüberliegenden Gebäude an, um das Turmattentat auszuführen."]
                }
            ]
        },
        ar: {
            appTitle: "الملف الأسود | عثمان التومي",
            appSub: "لعبة التحقيق الذكية – 20 جريمة جنائية",
            profileBtn: "👤 ملف المحقق",
            chatBtn: "💬 دردشة الزملاء",
            mpBtn: "🌐 اللعب مع الأصدقاء",
            statusReady: "جاهز للخدمة",
            archiveTitle: "📁 أرشيف القضايا (20 جريمة)",
            archiveDesc: "اختر من بين 20 قضية ذات صعوبة تصاعدية لبدء تحقيقك.",
            footerText: "الملف الأسود © 2026 - تصميم: عثمان التومي | بدون إنترنت 100% (اللعب مع الأصدقاء يحتاج إنترنت)",
            filterAll: "الكل",
            filterEasy: "سهل",
            filterMedium: "متوسط",
            filterHard: "صعب",
            filterExtreme: "خبير",
            backArchive: "← العودة للأرشيف",
            crimeSceneBanner: "تحقيق في مسرح الجريمة",
            startInv: "التقدم إلى مسرح الجريمة ←",
            backBrief: "← العودة لملخص القضية",
            notesBtn: "📝 ملاحظات المحقق",
            hintBtn: "💡 طلب تلميح",
            evidenceHeader: "🔍 الأدلة المادية",
            suspectsHeader: "👥 استجواب المشتبه بهم",
            accuseBtn: "⚖️ توجيه الاتهام وحل القضية",
            returnMenu: "العودة للأرشيف",
            retryCase: "إعادة التحقيق في القضية",
            close: "إغلاق",
            interrogateQ: "أسئلة الاستجواب:",
            accuseModalTitle: "⚖️ الاتهام النهائي",
            accuseModalDesc: "اختر الجاني الحقيقي بعناية. الاتهام الخاطئ سيضر برتبتك!",
            cancel: "إلغاء",
            confirmAccuse: "تأكيد الاتهام",
            notesTitle: "📝 ملاحظات المحقق",
            notesDesc: "اكتب ملاحظاتك ونظرياتك هنا:",
            notesClose: "إغلاق",
            notesSave: "حفظ الملاحظات",
            hintTitle: "💡 تلميح المحقق",
            hintClose: "فهمت",
            profileTitle: "👤 ملف المحقق",
            proNameLabel: "اسم المحقق:",
            proRankLabel: "الرتبة:",
            achLabel: "🎖️ الإنجازات",
            onboardTitle: "مرحبا بيك أيها المحقق",
            onboardBody: "عندك 20 قضية جنائية باش تحلها. قرا ملخص القضية، شوف الأدلة المادية مزيان، واستنطق كلشي مشتبه فيه — الجوابات ديالهم فيهم الحقيقة. استعمل التلميحات غير إلا احتجتي (3 كحد أقصى فكل قضية)، ومن بعد دير الاتهام النهائي ديالك. اختار بالعقل: اتهام واحد بريء يخلي الجاني الحقيقي يهرب!",
            onboardBtn: "يالله نحققو ←",
            proClose: "إلغاء",
            proSave: "حفظ الملف",
            mpTitle: "🌐 غرفة اللعب مع الأصدقاء",
            mpDesc: "تواصل مع أصدقائك المحققين عبر الواي فاي، أو *3، أو *6 للتنافس في حل القضايا.",
            mpClose: "إغلاق",
            mpJoin: "اتصال بالغرفة",
            mpCreate: "إنشاء غرفة",
            mpLeave: "خروج من الغرفة",
            roomLeft: "لقد غادرت الغرفة.",
            roomCreating: "جاري إنشاء غرفتك...",
            roomCreated: "الغرفة جاهزة! شارك هذا الكود مع صديقك: {code}",
            roomWaiting: "في انتظار انضمام صديقك للغرفة {code}...",
            roomFriendJoined: "انضم صديقك! أنتما متصلان الآن.",
            roomConnectFailed: "تعذر الاتصال. تأكد من أنك وصديقك متصلان بالإنترنت (واي فاي، *3، أو *6) ثم أعد المحاولة.",
            roomDisconnected: "انقطع اتصال صديقك.",
            chatConnectedDisclaimer: "متصل الآن مباشرة مع صديق حقيقي.",
            friendJoinedMsg: "انضم صديقك إلى الغرفة!",
            chatHeading: "💬 دردشة الزملاء المحققين",
            chatDisclaimer: "دردشة تجريبية محاكاة — غير متصلة بلاعبين حقيقيين.",
            chatSend: "إرسال",
            chatWelcomeMsg: "مرحبًا بكم في الشبكة أيها المحققون! هل من أدلة جديدة حول آخر قضية؟",
            chatInputPlaceholder: "اكتب رسالة...",
            notesPlaceholder: "اكتب أدلتك هنا...",
            roomCodePlaceholder: "أدخل رمز الغرفة (مثلاً CASE-99)",
            answerLabel: "الجواب:",
            selectSuspectAlert: "يرجى اختيار مشتبه به قبل تأكيد الاتهام.",
            resultSolvedTitle: "تم حل القضية بنجاح!",
            resultSolvedDesc: "أحسنت أيها المحقق! لقد حددت الجاني الحقيقي بنجاح.",
            resultWrongTitle: "اتهام خاطئ!",
            resultWrongDesc: "لقد اتهمت شخصًا بريئًا. الجاني الحقيقي هرب.",
            caseExplanationLabel: "تفسير القضية:",
            micNotSupported: "تسجيل الصوت غير مدعوم فهاد الجهاز.",
            micPermissionDenied: "تم رفض الوصول إلى الميكروفون. يرجى السماح بإذن الميكروفون في إعدادات المتصفح.",
            micTitle: "رسالة صوتية (اضغط للتسجيل، اضغط مجددًا للإرسال)",
            micListening: "كيسجل... اضغط للإرسال",
            micNoFriend: "قوّد الاتصال بصاحبك أولا باش تصيفط رسالة صوتية.",
            callBtnTitle: "مكالمة صوتية",
            callActive: "🔊 تم الاتصال بالمكالمة الصوتية",
            callConnecting: "📞 جارٍ الاتصال بصديقك...",
            callEnded: "انتهت المكالمة.",
            roomEnterCode: "الرجاء إدخال رمز غرفة صالح.",
            roomConnecting: "جاري الاتصال بالغرفة {code} عبر الشبكة الآمنة...",
            roomRetrying: "الغرفة غير موجودة بعد — إعادة المحاولة... (تبقّى {n})",
            roomConnected: "تم الاتصال بنجاح بالغرفة {code}! جاهز للتحدي.",
            botName: "المفتش جون",
            botReplies: [
                "تأكد من فحص جميع الأدلة المادية بعناية.",
                "تحقق من أقوال المشتبه بهم بحثاً عن تناقضات.",
                "هل راجعت ملاحظات الضحية الشخصية؟",
                "واصل البحث يا محقق! الحقيقة تكمن في التفاصيل."
            ],
            cases: [
                {
                    "tag":"قضية قتل",
                    "difficulty":"easy",
                    "title":"صمت في القصر",
                    "brief":"عُثر على التاجر الثري كريم وزاني مقتولاً في مكتبه الخاص داخل قصره متأثراً بطعنة قاتلة. كان الباب مقفلاً من الداخل والنافذة مفتوحة.",
                    "victim":"الضحية: كريم وزاني (54 سنة) - رجل أعمال.",
                    "culprit":"يحيى العلمي",
                    "evidence":[
                        {"name":"خنجر فضي","desc":"مُسح بعناية، لكنه ترك بصمة جزئية تطابق بصمة الشريك يحيى."},
                        {"name":"رسالة مالية ممزقة","desc":"تثبت أن الضحية كان مديناً بمبلغ ضخم لشريكه يحيى."},
                        {"name":"أثر قدم موحل","desc":"أثر حذاء كبير قرب النافذة يطابق طين حديقة القصر."},
                        {"name":"ساعة يد متوقفة","desc":"توقفت عند الساعة 9:42 مساءً، وهو التوقيت الدقيق للجريمة."},
                        {"name":"سجل كاميرات المراقبة","desc":"يُظهر تحركاً مريباً في الممر المؤدي إلى المكتب."}
                    ],
                    "suspects":[
                        {"name":"سلمى وزاني","role":"الزوجة","alibi":"كانت نائمة في غرفتها منذ الساعة 9:00 مساءً.","qs":[{"q":"هل سمعتِ أي ضجيج؟","a":"لا، كان كل شيء هادئاً تماماً."},{"q":"أين كنتِ وقت الجريمة؟","a":"في غرفتي نائمة وحدي."},{"q":"هل كانت بينكما خلافات مالية؟","a":"لم يكن لي أي علاقة بأمواله."}]},
                        {"name":"يحيى العلمي","role":"الشريك التجاري","alibi":"كان يدخن سيجارة في الشرفة الخلفية.","qs":[{"q":"ما طبيعة الخلاف المالي؟","a":"مجرد شراكة تجارية عادية."},{"q":"لماذا كانت بصمتك على الخنجر؟","a":"كنت هناك صباحاً من أجل العمل."},{"q":"أين كنت الساعة 9:40 مساءً؟","a":"في الشرفة أدخن."}]},
                        {"name":"فاطمة","role":"خادمة المنزل","alibi":"اكتشفت الجثة صباحاً أثناء التنظيف.","qs":[{"q":"متى فتحتِ باب المكتب؟","a":"الساعة 8:00 صباحاً."},{"q":"هل كان الباب مقفلاً؟","a":"نعم، مقفل من الداخل."},{"q":"هل لاحظتِ شيئاً غريباً؟","a":"كانت النافذة مفتوحة قليلاً."}]},
                        {"name":"عمر","role":"حارس شخصي","alibi":"كان في جولة حراسة حول أسوار القصر.","qs":[{"q":"هل دخل أي متسلل؟","a":"كانت البوابات الرئيسية مقفلة."},{"q":"لماذا لم تسمع شيئاً؟","a":"المكتب معزول صوتياً وكانت الرياح قوية."},{"q":"ما هي مهامك؟","a":"القيام بجولة حراسة كل ساعة."}]}
                    ],
                    "explain":"يحيى العلمي هو الجاني: اعترف بوجوده قرب الشرفة، وبصمته الجزئية على الخنجر وأثر القدم الموحل يطابقان ممر الحديقة، بدافع الخلاف حول الدين الكبير.",
                    "hints":["تلميح 1: افحص الأدلة المادية الموجودة على الخنجر الفضي وممر الحديقة خارج النافذة المفتوحة.","تلميح 2: راجع من كان بينه وبين الضحية خلاف مالي كبير بسبب الديون.","تلميح 3: حجة غياب يحيى العلمي في الشرفة تنهار عند مطابقتها ببصمته الجزئية على سلاح الجريمة وأثر القدم الموحل."]
                },
                {
                    "tag":"قضية سرقة",
                    "difficulty":"easy",
                    "title":"عين النيل الزرقاء",
                    "brief":"اختفى الماس الأزرق النادر \"عين النيل\" من صندوقه الزجاجي في المتحف الوطني ليلة الافتتاح دون كسر أي قفل.",
                    "victim":"المكان: المتحف الوطني - جوهرة تقدر قيمتها بـ 10 ملايين دولار.",
                    "culprit":"ماهر أمين المتحف",
                    "evidence":[
                        {"name":"قفاز حريري مقطوع","desc":"وُجد بجانب صندوق العرض الزجاجي."},
                        {"name":"بطاقة دخول كبار الزوار","desc":"تحمل بصمات خفية تعود لأمين المتحف."},
                        {"name":"تسجيل كاميرا","desc":"يُظهر شخصاً يرتدي معطفاً أسود يغادر القاعة بسرعة."},
                        {"name":"خصلة شعر","desc":"وُجدت عالقة بإطار صندوق العرض."},
                        {"name":"مفاتيح رئيسية مطابقة","desc":"مجموعة مفاتيح رئيسية تعود للموظف الإداري."}
                    ],
                    "suspects":[
                        {"name":"رائد المدير","role":"مدير المتحف","alibi":"كان يستقبل ضيوف كبار الشخصيات في القاعة الرئيسية.","qs":[{"q":"من يملك المفاتيح؟","a":"أنا وقسم الأمن فقط."},{"q":"أين كنت وقت السرقة؟","a":"مع ضيوف كبار الشخصيات."},{"q":"هل لاحظت الفقدان فوراً؟","a":"لا، اكتشفناه لاحقاً."}]},
                        {"name":"سناء الأمن","role":"رئيسة الأمن","alibi":"كانت تراقب كاميرات المراقبة في غرفة التحكم الخلفية.","qs":[{"q":"لماذا انقطعت الكاميرات لمدة دقيقة؟","a":"عطل مفاجئ في الكهرباء."},{"q":"هل مررتِ بالقاعة؟","a":"فقط أثناء الجولة الروتينية."},{"q":"من دخل بعد الإغلاق؟","a":"لا أحد."}]},
                        {"name":"ماهر أمين المتحف","role":"أمين المتحف والمرمم","alibi":"كان يرمم لوحات في الجناح الشرقي.","qs":[{"q":"لماذا وُجد قفازك؟","a":"كنت أرتديه أثناء تنظيف المعروضات."},{"q":"هل لديك صلاحية الدخول؟","a":"نعم، ضمن عملي."},{"q":"أين كنت الساعة 10 مساءً؟","a":"في الورشة وحدي."}]},
                        {"name":"منى الصحفية","role":"مراسلة الحدث","alibi":"كانت تجري مقابلات مع الضيوف في القاعة.","qs":[{"q":"هل صورتِ الجوهرة؟","a":"نعم، في وقت سابق من المساء."},{"q":"متى غادرتِ؟","a":"قبل الحادثة بقليل."},{"q":"هل رأيتِ شخصاً مريباً؟","a":"رأيت شخصاً يرتدي معطفاً."}]}
                    ],
                    "explain":"ماهر أمين المتحف سرق الماس مستغلاً صلاحية الترميم، وترك خيوط قفازه الحريري قرب صندوق العرض.",
                    "hints":["تلميح 1: تفقد القفاز الحريري المقطوع الموجود بجانب صندوق العرض الزجاجي مباشرة.","تلميح 2: ركز على من يملك صلاحية الترميم المهنية للتعامل مع المعروضات دون كسر الأقفال.","تلميح 3: عذر ماهر أمين المتحف لا يفسر وجود خيوط قفازه وبصمات دخوله في مسرح الجريمة."]
                },
                {
                    "tag":"قضية اختفاء",
                    "difficulty":"easy",
                    "title":"أين ياسمين؟",
                    "brief":"اختفت الطالبة الجامعية ياسمين العلوي منذ 3 أيام. عُثر على سيارتها متوقفة قرب الغابة المظلمة والمفتاح لا يزال في المحرك.",
                    "victim":"مفقودة: ياسمين العلوي (22 سنة).",
                    "culprit":"زياد الخطيب السابق",
                    "evidence":[
                        {"name":"هاتف محطم","desc":"وُجد على جانب الطريق؛ آخر مكالمة كانت لخطيبها السابق."},
                        {"name":"رسالة تهديد مكتوبة بخط اليد","desc":"وُجدت داخل حقيبتها."},
                        {"name":"أثر إطارات","desc":"إطارات رياضية نادرة تطابق سيارة زميلها في الجامعة."},
                        {"name":"كوب قهوة","desc":"ما زال دافئاً في مقعد السيارة الأمامي."},
                        {"name":"مذكرات شخصية","desc":"تذكر خوفها الدائم من شخص يتعقبها."}
                    ],
                    "suspects":[
                        {"name":"زياد الخطيب السابق","role":"خطيب سابق","alibi":"كان في العمل طوال اليوم ولم يرها.","qs":[{"q":"متى كنت آخر مرة في سيارتها؟","a":"قبل أسبوع تقريباً."},{"q":"لماذا هددتها في الرسالة؟","a":"كان سوء تفاهم قديم."},{"q":"أين كانت سيارتك تلك الليلة؟","a":"في مرآب منزلي."}]},
                        {"name":"سامي الزميل","role":"زميل الدراسة","alibi":"كان يذاكر في المكتبة العامة.","qs":[{"q":"ما طبيعة علاقتكما؟","a":"مجرد زملاء دراسة."},{"q":"لماذا تطابق آثار الإطارات؟","a":"كثير من الطلاب يملكون هذا النوع."},{"q":"أين كنت يوم الثلاثاء؟","a":"في المكتبة حتى الساعة 8 مساءً."}]},
                        {"name":"نوال الجارة","role":"جارة السكن الجامعي","alibi":"كانت مسافرة لزيارة عائلتها في مدينة مجاورة.","qs":[{"q":"هل سمعتِ شجاراً؟","a":"أبداً، كان مكانها هادئاً."},{"q":"متى عدتِ؟","a":"في الصباح التالي."},{"q":"هل رأيتِ زياد قرب الشقة؟","a":"نعم، مرتين الأسبوع الماضي."}]},
                        {"name":"الدكتور طارق","role":"أستاذ جامعي","alibi":"كان يصحح أوراق الامتحانات في الجامعة.","qs":[{"q":"هل تغيبت عن الدرس؟","a":"نعم، يوماً قبل اختفائها."},{"q":"هل كانت لديها مشاكل؟","a":"بدت قلقة مؤخراً."},{"q":"كيف كان أداؤها؟","a":"مجتهدة وجادة."}]}
                    ],
                    "explain":"زياد الخطيب السابق هو المسؤول: آثار الإطارات الرياضية وتصريحاته المتناقضة حول التهديدات السابقة تدينه مباشرة.",
                    "hints":["تلميح 1: افحص سجلات الهاتف المحطم ورسالة التهديد الموجودة في حقيبتها.","تلميح 2: تفحص جيداً آثار الإطارات الموجودة قرب الغابة المظلمة حيث تُركت سيارتها.","تلميح 3: زياد الخطيب السابق قدّم تصريحات متناقضة حول تحركاته وتهديداته السابقة للضحية."]
                },
                {
                    "tag":"تسميم",
                    "difficulty":"easy",
                    "title":"سُم في الكأس",
                    "brief":"توفي الناقد الأدبي البارز رمزي حميد فور احتسائه العصير في حفل تكريمه داخل دار الأوبرا.",
                    "victim":"الضحية: رمزي حميد (61 سنة).",
                    "culprit":"سامر الكاتب المنافس",
                    "evidence":[
                        {"name":"زجاجة عصير ملوثة","desc":"تحتوي آثار سم السيانيد القاتل."},
                        {"name":"منديل مطوي","desc":"يحمل بقايا مسحوق سام وبصمة جزئية."},
                        {"name":"برنامج الحفل","desc":"يُظهر الجدول الدقيق لتقديم المشروبات."},
                        {"name":"كأس زجاجي","desc":"بصمات الضحية ومادة كيميائية غريبة على حافته."},
                        {"name":"مقال نقدي قاسٍ","desc":"مقال لاذع كتبه الضحية يهاجم كاتباً مبتدئاً."}
                    ],
                    "suspects":[
                        {"name":"منى المضيفة","role":"مضيفة الحفل","alibi":"قدّمت المشروبات حسب تعليمات المنظمين.","qs":[{"q":"من جهّز الكؤوس؟","a":"أنا ومساعد البار."},{"q":"هل غادرتِ الطاولة؟","a":"لدقيقة لإحضار الثلج."},{"q":"هل رأيتِ أحداً يقترب؟","a":"رأيت الكاتب الشاب قريباً."}]},
                        {"name":"سامر الكاتب المنافس","role":"كاتب منافس","alibi":"كان يتحدث مع رئيس دار النشر طوال المساء.","qs":[{"q":"لماذا هاجمك الناقد؟","a":"دمّر روايتي الأخيرة ظلماً."},{"q":"هل وضعت شيئاً في الكأس؟","a":"حاشا لله، أنا محترف."},{"q":"أين كنت وقت الحادثة؟","a":"أمام مسرح الحفل."}]},
                        {"name":"ليلى رمزي","role":"الابنة","alibi":"كانت تقدم الجوائز نيابة عن والدها.","qs":[{"q":"هل كانت علاقتكما جيدة؟","a":"بالطبع، هو والدي."},{"q":"من يرث الثروة؟","a":"أنا ومؤسسة خيرية."},{"q":"هل تشكين بأحد؟","a":"الكاتب سامر هدده."}]},
                        {"name":"عصام الحارس","role":"حارس أمن","alibi":"كان يحرس المدخل الرئيسي للقاعة.","qs":[{"q":"من دخل من الباب الخلفي؟","a":"طاقم التموين فقط."},{"q":"هل تعرف عن السيانيد؟","a":"لا أعرف شيئاً عن المواد الكيميائية."},{"q":"هل الكاميرات تعمل؟","a":"نعم، تسجل كل شيء."}]}
                    ],
                    "explain":"سامر الكاتب المنافس أخذ بثأره من الناقد الذي دمّر سمعته، ودسّ السم في الكأس أثناء غياب المضيفة القصير.",
                    "hints":["تلميح 1: تفقد زجاجة العصير الملوثة وبقايا المسحوق السام على المنديل.","تلميح 2: راجع المقال النقدي القاسي الذي كتبه الضحية مهاجماً كاتباً مبتدئاً.","تلميح 3: كان لسامر الكاتب المنافس دافع انتقام قوي والفرصة عندما ابتعدت المضيفة."]
                },
                {
                    "tag":"قضية قتل",
                    "difficulty":"easy",
                    "title":"لغز الغرفة المغلقة",
                    "brief":"عُثر على رجل الأعمال ممدوح صبري مطعوناً داخل غرفته بالفندق. كانت جميع الأبواب والنوافذ مقفلة بإحكام من الداخل بلا أي مخرج.",
                    "victim":"الضحية: ممدوح صبري (48 سنة).",
                    "culprit":"خالد الصيانة",
                    "evidence":[
                        {"name":"مكيف الهواء","desc":"عُطّل بقطعة معدنية لتأخير آلية إغلاق الباب التلقائي."},
                        {"name":"مسدس إشارة","desc":"أُلقي من نافذة الطابق العلوي."},
                        {"name":"خيط صيد رفيع","desc":"خيط شفاف طويل استُخدم في خدعة الغرفة المغلقة."},
                        {"name":"سجل الفندق","desc":"يُظهر دخول عامل الصيانة فقط."},
                        {"name":"مذكرات الضحية","desc":"تشير إلى محاولات ابتزاز من شريكه التجاري."}
                    ],
                    "suspects":[
                        {"name":"بهجت الشريك","role":"شريك تجاري","alibi":"كان يتناول العشاء مع عملاء في الطابق الأرضي.","qs":[{"q":"ماذا عن الابتزاز؟","a":"مجرد خلافات عمل عادية."},{"q":"كيف دخلت الغرفة؟","a":"لم أدخل أبداً."},{"q":"هل لديك مفتاح احتياطي؟","a":"فقط إدارة الفندق."}]},
                        {"name":"نادين السكرتيرة","role":"مساعدة الضحية","alibi":"كانت في الغرفة المجاورة تجهّز ملفات السفر.","qs":[{"q":"هل سمعتِ شجاراً؟","a":"صوت خافت ثم صمت."},{"q":"متى رأيته آخر مرة حياً؟","a":"قبل الحادثة بساعة."},{"q":"من زاره مساءً؟","a":"عامل الصيانة."}]},
                        {"name":"خالد الصيانة","role":"فني الفندق","alibi":"أصلح مصباحاً كهربائياً ثم غادر.","qs":[{"q":"لماذا تُركت عدة الأدوات هناك؟","a":"نسيتها على الطاولة."},{"q":"هل عبثت بالمكيف؟","a":"أبداً، عملت فقط على الإضاءة."},{"q":"هل طلب منك شيئاً؟","a":"طلب هدوءاً تاماً."}]},
                        {"name":"رؤوف الأخ","role":"شقيق الضحية","alibi":"كان نائماً في غرفته بالطابق الثالث.","qs":[{"q":"هل يوجد خلاف على الميراث؟","a":"تقاسمنا كل شيء بوئام."},{"q":"كيف تدخل الغرفة المغلقة؟","a":"لم أكن هناك."},{"q":"ماذا عن الخيط؟","a":"لا أعرف شيئاً عن الحيل."}]}
                    ],
                    "explain":"استخدم خالد فني الصيانة خدعة الخيط والمكيف لتزييف إغلاق الغرفة من الداخل بعد ارتكاب الجريمة.",
                    "hints":["تلميح 1: افحص وحدة المكيف وخيط الصيد الرفيع الموجود في الغرفة.","تلميح 2: تفقد سجلات دخول الفندق وأدوات الفني المتروكة.","تلميح 3: استخدم خالد فني الصيانة قطعة معدنية وخيطاً عبر وحدة المكيف لتزييف الغرفة المغلقة."]
                },
                {
                    "tag":"قضية سرقة",
                    "difficulty":"medium",
                    "title":"التحفة المسروقة",
                    "brief":"سُرقت لوحة أصلية لفنان عالمي الشهرة من المعرض الدولي، تاركة نسخة طبق الأصل معلقة مكانها.",
                    "victim":"المكان: المعرض الفني الدولي - قيمة 5 ملايين دولار.",
                    "culprit":"فؤاد الرسام",
                    "evidence":[
                        {"name":"إطار خشبي فارغ","desc":"وُجد مخبأً خلف مخزن الأدوات."},
                        {"name":"فرشاة رسم احترافية","desc":"تحمل تركيبة طلاء زيتي طازجة."},
                        {"name":"بصمة واضحة","desc":"على الحائط خلف اللوحة المزيفة."},
                        {"name":"تذكرة قطار","desc":"مؤرخة ليلة السرقة متجهة نحو الحدود."},
                        {"name":"سجل كاميرات المراقبة","desc":"عُطّل لمدة 10 دقائق بالضبط."}
                    ],
                    "suspects":[
                        {"name":"فؤاد الرسام","role":"فنان ومزوّر","alibi":"كان يرسم بورتريه في منزله طوال الليل.","qs":[{"q":"لماذا تملك نفس الألوان الزيتية؟","a":"أنا فنان وأستخدمها."},{"q":"هل زرت المعرض؟","a":"نعم، لمشاهدة المعروضات."},{"q":"أين كنت الساعة 2 فجراً؟","a":"في استوديوي الخاص."}]},
                        {"name":"حنان الناقدة الفنية","role":"ناقدة فنية","alibi":"كانت تكتب مقالاً صحفياً في غرفة الصحافة.","qs":[{"q":"هل لاحظتِ التزوير؟","a":"لا، بدت النسخة أصلية."},{"q":"من يملك مهارة النسخ؟","a":"فؤاد بالطبع."},{"q":"متى غادرتِ؟","a":"حوالي منتصف الليل."}]},
                        {"name":"جمال الحارس","role":"حارس المعرض","alibi":"كان في جولة أمنية بالطابق العلوي.","qs":[{"q":"لماذا تعطلت الكاميرات؟","a":"عطل في الكهرباء."},{"q":"هل رأيت شيئاً غريباً؟","a":"لا أحد إطلاقاً."},{"q":"متى بدأت الجولة؟","a":"الساعة 11 مساءً."}]},
                        {"name":"سحر الجامعة","role":"جامعة تحف فنية","alibi":"كانت في حفل عشاء مع مستثمرين.","qs":[{"q":"هل عرضتِ شراء اللوحة؟","a":"رفض المتحف البيع."},{"q":"أين كنتِ وقت السرقة؟","a":"في مطعم فاخر."},{"q":"هل تشكين بأحد؟","a":"فؤاد كان مهووساً بها."}]}
                    ],
                    "explain":"استخدم فؤاد الرسام مهارته في التزوير لاستبدال اللوحة الأصلية بنسخته، تاركاً فرشاته الخاصة خلفه.",
                    "hints":["تلميح 1: افحص الفرشاة الاحترافية المتروكة والتي تحمل طلاءً زيتياً طازجاً.","تلميح 2: انظر إلى البصمة الموجودة على الحائط خلف اللوحة المزيفة مباشرة.","تلميح 3: فؤاد الرسام هو المشتبه الوحيد الذي يملك مهارات التزوير الدقيقة وتركيبة الألوان اللازمة للاستبدال."]
                },
                {
                    "tag":"قضية قتل",
                    "difficulty":"medium",
                    "title":"جريمة المختبر عند منتصف الليل",
                    "brief":"قُتل الكيميائي الدكتور مراد داخل مختبره المغلق. آخر شيفرة كتبها على حاسوبه تشير إلى قاتله.",
                    "victim":"الضحية: الدكتور مراد (55 سنة) - كيميائي.",
                    "culprit":"هاني المساعد الأول",
                    "evidence":[
                        {"name":"كأس زجاجي محطم","desc":"يحتوي بقايا سم عصبي."},
                        {"name":"حاسوب محمول","desc":"آخر شيفرة مكتوبة تطابق اسم المساعد الأول."},
                        {"name":"قفاز مطاطي","desc":"قفاز ممزق وُجد قرب نافذة المختبر."},
                        {"name":"تقرير سري","desc":"يكشف سرقة بحث كيميائي بالغ الأهمية."},
                        {"name":"سجل بطاقة الباب","desc":"دخول واحد باستخدام بطاقة صالحة."}
                    ],
                    "suspects":[
                        {"name":"الدكتور سمير","role":"زميل باحث","alibi":"كان يجري تجارب في المبنى المجاور.","qs":[{"q":"ما طبيعة البحث المسروق؟","a":"صيغ طبية متقدمة."},{"q":"لماذا دخلت سجلاته؟","a":"كنت أبحث عن ورقة علمية."},{"q":"أين كنت وقت الجريمة؟","a":"في مختبري الخاص."}]},
                        {"name":"ندى الطالبة","role":"مساعدة مختبر","alibi":"غادرت مبكراً للعمل على أطروحتها.","qs":[{"q":"متى غادرتِ؟","a":"الساعة 7 مساءً."},{"q":"من يملك بطاقة الدخول الليلية؟","a":"الدكتور مراد والدكتور سمير."},{"q":"هل كان قلقاً؟","a":"كان يتلقى مكالمات تهديد."}]},
                        {"name":"هاني المساعد الأول","role":"مساعد أول","alibi":"كان في منزله مع عائلته.","qs":[{"q":"لماذا كتب الحاسوب اسمك؟","a":"مزحة أو اتهام باطل."},{"q":"هل لديك صلاحية الوصول للبحث؟","a":"نعم، صلاحية كاملة."},{"q":"أين كنت طوال الليل؟","a":"بالمنزل مع عائلتي."}]},
                        {"name":"سعاد الباحثة","role":"باحثة زائرة","alibi":"كانت في مؤتمر علمي خارج المدينة.","qs":[{"q":"متى عدتِ للمدينة؟","a":"الصباح التالي."},{"q":"هل كانت بينكما خلافات؟","a":"رفض نشر بحثي."},{"q":"هل تعرفين هاني؟","a":"نعم، زميل عمل."}]}
                    ],
                    "explain":"هاني المساعد الأول قتل الدكتور مراد لسرقة البحث، لكنه لم ينتبه أن الضحية كتب شيفرة تدينه قبل موته.",
                    "hints":["تلميح 1: افحص الكأس المحطم وبقايا السم العصبي والحاسوب المحمول.","تلميح 2: راجع من كان يملك صلاحية كاملة للوصول إلى البحث ودخول المختبر.","تلميح 3: الشيفرة الأخيرة التي كتبها الضحية تشير صراحة إلى هاني المساعد الأول."]
                },
                {
                    "tag":"قضية قتل",
                    "difficulty":"medium",
                    "title":"اغتيال على متن القطار السريع",
                    "brief":"توفي عميل استخبارات متقاعد داخل عربة النوم من طلقة مكتومة الصوت في نفق مظلم.",
                    "victim":"الضحية: كمال الدين (62 سنة).",
                    "culprit":"سليم الغامض",
                    "evidence":[
                        {"name":"كاتم صوت معدني","desc":"أُلقي على السكة أثناء عبور النفق."},
                        {"name":"تذكرة مزوّرة","desc":"بهوية مزيفة في العربة التالية."},
                        {"name":"ملف سري مسرّب","desc":"مفقود من حقيبة الضحية الشخصية."},
                        {"name":"آثار حبر غير مرئي","desc":"وُجدت على أصابع المشتبه به الثاني."},
                        {"name":"سجل تحركات الركاب","desc":"يُظهر تحركاً مريباً بين العربات."}
                    ],
                    "suspects":[
                        {"name":"ماهر الصحفي","role":"راكب العربة","alibi":"كان يكتب مقالاً على حاسوبه طوال الرحلة.","qs":[{"q":"ما وجهتك؟","a":"العاصمة لمقابلة عمل."},{"q":"هل سمعت صوت إطلاق نار؟","a":"فقط احتكاك عجلات القطار."},{"q":"لماذا تبدو متوتراً؟","a":"لا أحب رحلات القطار الطويلة."}]},
                        {"name":"سليم الغامض","role":"رجل أعمال","alibi":"كان نائماً في مقصورة خاصة مقفلة.","qs":[{"q":"سبب سفرك المفاجئ؟","a":"صفقة عمل عاجلة."},{"q":"لماذا الحبر على أصابعك؟","a":"توقيع عقود بقلم سائل."},{"q":"هل تعرف الضحية؟","a":"لم أره في حياتي."}]},
                        {"name":"رشا المضيفة","role":"مضيفة القطار","alibi":"كانت تقدم المشروبات في العربة الأمامية.","qs":[{"q":"من تحرك بين العربات؟","a":"شخص بمعطف أسود."},{"q":"هل انطفأت الأضواء بالنفق؟","a":"لا، فقط ظلام النفق المعتاد."},{"q":"هل لاحظتِ شيئاً غريباً؟","a":"رائحة بارود خفيفة."}]},
                        {"name":"جهاد الحارس","role":"حارس خاص","alibi":"كان يحرس باب الشحن الخلفي.","qs":[{"q":"هل مرّ أحد بجانبك؟","a":"لم يعبر أحد الباب الخلفي."},{"q":"هل تحمل سلاحاً؟","a":"نعم، سلاح رسمي مرخّص."},{"q":"متى بدأت مناوبتك؟","a":"منذ الانطلاق."}]}
                    ],
                    "explain":"سليم الغامض نفّذ الاغتيال الصامت باستخدام كاتم الصوت في النفق تحت هوية مزوّرة.",
                    "hints":["تلميح 1: تفقد كاتم الصوت المعدني الملقى على السكة وسجل تحركات الركاب.","تلميح 2: انظر إلى آثار الحبر غير المرئي والتذكرة المزوّرة في العربة التالية.","تلميح 3: سافر سليم الغامض بهوية مزيفة ونفّذ إطلاق النار الصامت داخل النفق."]
                },
                {
                    "tag":"قضية سرقة",
                    "difficulty":"medium",
                    "title":"سطو الخزنة",
                    "brief":"اختفت ملايين من خزنة شركة الكابلات الوطنية دون اقتحام؛ المفتاح الرقمي كان بحوزة المدير فقط.",
                    "victim":"شركة الكابلات الوطنية - خسارة مليوني دولار.",
                    "culprit":"زياد المحاسب",
                    "evidence":[
                        {"name":"مقطع كاميرا خفية","desc":"يُظهر شخصاً يُدخل الرمز السري بعناية."},
                        {"name":"ورقة ملاحظات","desc":"تحتوي تلميحات للرمز القديم."},
                        {"name":"بصمة جزئية","desc":"على زر الإرسال بلوحة مفاتيح الخزنة."},
                        {"name":"بطاقة إلكترونية","desc":"البطاقة الاحتياطية مفقودة من الدرج."},
                        {"name":"فاتورة دين","desc":"تعود لمحاسب الشركة."}
                    ],
                    "suspects":[
                        {"name":"صالح المدير","role":"مدير الشركة","alibi":"كان في اجتماع مجلس الإدارة طوال الصباح.","qs":[{"q":"من يعرف الرمز السري؟","a":"أنا والمحاسب فقط."},{"q":"هل فقدت البطاقة الاحتياطية؟","a":"لا، دائماً في جيبي."},{"q":"من تشك فيه؟","a":"المحاسب لديه ديون ثقيلة."}]},
                        {"name":"فاطمة السكرتيرة","role":"سكرتيرة تنفيذية","alibi":"كانت تنظم المواعيد في الاستقبال.","qs":[{"q":"هل لديكِ صلاحية دخول الخزنة؟","a":"لا، أبداً."},{"q":"من دخل المكتب؟","a":"المحاسب وعمال النظافة."},{"q":"هل لاحظتِ شيئاً؟","a":"كان الباب موارباً قليلاً."}]},
                        {"name":"زياد المحاسب","role":"محاسب مالي","alibi":"كان يعد التدقيق السنوي في مكتبه.","qs":[{"q":"لماذا لديك ديون ثقيلة؟","a":"مشاكل عائلية حُلّت الآن."},{"q":"كيف تعرف الرمز السري؟","a":"جزء من مهامي المالية أحياناً."},{"q":"أين كنت ظهر أمس؟","a":"في فرع البنك."}]},
                        {"name":"عادل الأمن","role":"حارس المبنى","alibi":"كان يحرس المدخل الرئيسي.","qs":[{"q":"هل غادر أحد بحقائب؟","a":"فقط الموظفون المعتادون."},{"q":"هل تعمل الكاميرات؟","a":"تعمل بشكل ممتاز."},{"q":"متى بدأت مناوبتك؟","a":"الصباح الباكر."}]}
                    ],
                    "explain":"استغل زياد المحاسب دافع الديون ومعرفته بالرمز السري لسرقة أموال الخزنة باستخدام البطاقة الاحتياطية.",
                    "hints":["تلميح 1: افحص مقطع الكاميرا الخفية الذي يُظهر إدخال الرمز والبطاقة الاحتياطية المفقودة.","تلميح 2: تفقد فاتورة الدين المالية العائدة لأحد الموظفين.","تلميح 3: كان لزياد المحاسب الدافع المالي (ديون ثقيلة) ومعرفة الرمز السري لإفراغ الخزنة."]
                },
                {
                    "tag":"قضية قتل",
                    "difficulty":"medium",
                    "title":"جريمة شاطئ الأندلس",
                    "brief":"عُثر على صياد ميتاً على الرمال عند الفجر بجانب قارب صغير محركه لا يزال يعمل.",
                    "victim":"الضحية: إبراهيم الصياد (50 سنة).",
                    "culprit":"حمزة الشاب",
                    "evidence":[
                        {"name":"مجداف خشبي مكسور","desc":"ملطخ بالدماء وآثار عراك."},
                        {"name":"شبكة صيد ممزقة","desc":"متناثرة قرب خط الماء."},
                        {"name":"ساعة يد رخيصة","desc":"تعود لشاب من القرية المحلية."},
                        {"name":"آثار أقدام على الرمال","desc":"تتجه نحو الطريق الساحلي."},
                        {"name":"صندوق عدة مفتوح","desc":"أدوات حادة مفقودة منه."}
                    ],
                    "suspects":[
                        {"name":"حمزة الشاب","role":"شاب عاطل عن العمل","alibi":"كان نائماً في منزله طوال الليل.","qs":[{"q":"لماذا وُجدت الساعة؟","a":"لا بد أني أضعتها أثناء السباحة."},{"q":"هل كانت بينكما مشاجرات؟","a":"تشاجرنا حول حقوق الصيد."},{"q":"أين كنت الساعة 4 فجراً؟","a":"في فراشي."}]},
                        {"name":"موسى الصياد","role":"صياد منافس","alibi":"كان يصطاد ليلاً في البحر.","qs":[{"q":"متى عدت؟","a":"عند شروق الشمس."},{"q":"هل رأيت حمزة قريباً؟","a":"رأيته قرب القارب."},{"q":"ما علاقتك بالضحية؟","a":"منافسة عمل عادلة."}]},
                        {"name":"سالم صاحب المقهى","role":"صاحب متجر","alibi":"كان يفتح المقهى.","qs":[{"q":"هل سمعت صراخاً؟","a":"فقط أمواج البحر."},{"q":"من يزور الشاطئ ليلاً؟","a":"الصيادون والشباب."},{"q":"هل رأيت غرباء؟","a":"لا أحد."}]},
                        {"name":"خديجة الزوجة","role":"ربة منزل","alibi":"كانت بالمنزل مع الأطفال.","qs":[{"q":"متى غادر؟","a":"منتصف الليل كالعادة."},{"q":"هل كانت هناك مشاكل؟","a":"خلاف مالي مع حمزة."},{"q":"هل ترك رسالة؟","a":"لا."}]}
                    ],
                    "explain":"تشاجر حمزة الشاب حول أماكن الصيد وضرب الصياد بالمجداف، وأسقط ساعته أثناء الصراع.",
                    "hints":["تلميح 1: افحص المجداف الخشبي المكسور والساعة الرخيصة الموجودة في الرمال.","تلميح 2: تفقد آثار الأقدام المبتعدة عن الشاطئ نحو الطريق الساحلي.","تلميح 3: كانت لحمزة الشاب خلافات مستمرة حول حقوق الصيد، وأسقط ساعته الشخصية أثناء الصراع العنيف."]
                },
                {
                    "tag":"قضية اختفاء",
                    "difficulty":"hard",
                    "title":"اللوحة الأثرية المفقودة",
                    "brief":"اختفت لوحة نادرة من القصر الملكي القديم دون تفعيل نظام الإنذار.",
                    "victim":"قصر الأمير الراحل - تحفة فنية نادرة.",
                    "culprit":"ماهر المصمم",
                    "evidence":[
                        {"name":"أداة تعطيل الإنذار","desc":"جهاز تعطيل عالي التقنية."},
                        {"name":"قفاز قماشي","desc":"يحمل غبار القصر القديم."},
                        {"name":"مخطط القصر","desc":"وُجد على هاتف المصمم."},
                        {"name":"قماش ممزق","desc":"ممزق من ستارة الغرفة."},
                        {"name":"سجل الزوار","desc":"يسجل زيارة ليلية لمصمم الديكور."}
                    ],
                    "suspects":[
                        {"name":"الأمير خالد","role":"وريث القصر","alibi":"كان في رحلة عمل بالخارج.","qs":[{"q":"من يملك صلاحية الدخول؟","a":"أنا وفريق الصيانة."},{"q":"هل اللوحة مؤمّنة؟","a":"نعم، بملايين."},{"q":"هل تشك بأحد الطاقم؟","a":"مصمم الديكور الجديد."}]},
                        {"name":"ماهر المصمم","role":"خبير ترميم","alibi":"كان يقيس الجدران لأعمال الترميم.","qs":[{"q":"لماذا تملك المخططات؟","a":"مطلوبة لعمل التصميم."},{"q":"هل عطّلت الإنذار؟","a":"فقط فحصت الأسلاك التالفة."},{"q":"أين اللوحة؟","a":"لا أعرف شيئاً."}]},
                        {"name":"سعاد المؤرخة","role":"أمينة الأرشيف","alibi":"كانت تُصنّف القطع في الأرشيف.","qs":[{"q":"آخر زيارة للغرفة؟","a":"الأسبوع الماضي."},{"q":"هل لاحظتِ تغييراً؟","a":"كل شيء في مكانه."},{"q":"من يحب الفن؟","a":"الأمير نفسه."}]},
                        {"name":"عصام رئيس الحراسة","role":"رئيس الحرس","alibi":"كان يشرف على البوابات الخارجية.","qs":[{"q":"هل رصدت متسللاً؟","a":"الكاميرات لم تظهر أحداً."},{"q":"هل تفعّل الإنذار؟","a":"انقطع لدقائق ثم عاد."},{"q":"من عطّل النظام؟","a":"شخص خبير."}]}
                    ],
                    "explain":"استخدم ماهر المصمم وصوله للمخططات ومهاراته التقنية لتعطيل الإنذار وسرقة اللوحة.",
                    "hints":["تلميح 1: تفقد أداة تعطيل الإنذار ومخططات القصر الموجودة على هاتف المصمم.","تلميح 2: راجع سجل الزوار الذي يُظهر دخولاً ليلياً لمصمم الديكور.","تلميح 3: استخدم ماهر المصمم وصوله للمخططات وأدواته التقنية لتعطيل الإنذار وسرقة اللوحة."]
                },
                {
                    "tag":"قضية قتل",
                    "difficulty":"hard",
                    "title":"مقتل الممثل الشهير",
                    "brief":"عُثر على ممثل بارز ميتاً في غرفة الاستراحة بالمسرح بعد عرضه الأخير.",
                    "victim":"الضحية: رأفت رامي (45 سنة).",
                    "culprit":"باسم الممثل البديل",
                    "evidence":[
                        {"name":"نص مسرحي ممزق","desc":"ملاحظات قاسية حول الدور الرئيسي."},
                        {"name":"حبل إكسسوار","desc":"إكسسوار مزيف تحوّل إلى أداة خنق حقيقية."},
                        {"name":"أثر حذاء خشبي","desc":"خلف ممر الكواليس المظلم."},
                        {"name":"سجلات مكالمات","desc":"تهديدات متكررة من ممثل بديل صغير."},
                        {"name":"زي المسرح","desc":"مُلقى في سلة المهملات."}
                    ],
                    "suspects":[
                        {"name":"سلاف الممثلة","role":"الممثلة الرئيسية","alibi":"كانت تحتفل مع المعجبين في الكافتيريا.","qs":[{"q":"ما علاقتك به؟","a":"منافسة فنية بحتة."},{"q":"هل تشاجرتما؟","a":"تنافسنا على الدور البطولي."},{"q":"أين كنتِ وقت الجريمة؟","a":"مع المعجبين في القاعة."}]},
                        {"name":"سامي المخرج","role":"مخرج المسرحية","alibi":"كان يفحص الإضاءة مع الطاقم.","qs":[{"q":"كيف كان أداء الضحية؟","a":"رائع لكنه متعجرف."},{"q":"من دخل غرفة الاستراحة؟","a":"الممثل البديل غاضباً."},{"q":"هل سمعت صراخاً؟","a":"غطت الموسيقى الأصوات."}]},
                        {"name":"زياد الكاتب","role":"كاتب مسرحي","alibi":"كان يوقّع كتباً للجمهور بالخارج.","qs":[{"q":"هل عدّل النص؟","a":"طلب تغييرات باستمرار."},{"q":"أين كنت بعد إسدال الستار؟","a":"أوقّع الكتب."},{"q":"هل أعجبك تمثيله؟","a":"أدى الدور بامتياز."}]},
                        {"name":"باسم الممثل البديل","role":"ممثل ثانوي","alibi":"كان يغيّر ملابسه في غرفة التبديل.","qs":[{"q":"لماذا هددته؟","a":"سرق دوري البطولي بجشع."},{"q":"هل قتلته؟","a":"كنت غاضباً لكن لم أقتله."},{"q":"أين بالضبط؟","a":"في الغرفة وحدي."}]}
                    ],
                    "explain":"خنق باسم الممثل البديل رأفت غضباً بسبب سرقة دوره البطولي مستخدماً إكسسوار الكواليس.",
                    "hints":["تلميح 1: افحص سجلات المكالمات التي تُظهر تهديدات متكررة من زميل عمل.","تلميح 2: تفقد حبل الإكسسوار الذي تحوّل إلى أداة خنق حقيقية خلف الكواليس.","تلميح 3: كان لباسم الممثل البديل دافع غضب قوي بعد أن سرق رأفت دوره البطولي."]
                },
                {
                    "tag":"قضية سرقة",
                    "difficulty":"hard",
                    "title":"سطو قطار الذهب",
                    "brief":"اختفت شحنة سبائك ذهب بقيمة مليون دولار من قطار شحن سريع في منتصف رحلته الليلية بين المدن.",
                    "victim":"شركة النقل السريع - سبائك ذهب.",
                    "culprit":"سامح سائق القطار",
                    "evidence":[
                        {"name":"رافعة هيدروليكية","desc":"مخبأة بجانب سكة الحديد."},
                        {"name":"جهاز لاسلكي","desc":"يستخدم تردد أمن شركة القطارات."},
                        {"name":"قفاز عمل متسخ","desc":"يحمل شعار شركة الشحن."},
                        {"name":"آثار شاحنة ثقيلة","desc":"قرب علامة توقف الطوارئ للقطار."},
                        {"name":"سجل الصيانة","desc":"يُظهر توقف مكابح متعمد لمدة دقيقة."}
                    ],
                    "suspects":[
                        {"name":"سامح سائق القطار","role":"سائق شحن","alibi":"توقف بسبب عطل مفاجئ في الإشارة.","qs":[{"q":"لماذا توقفت هنا؟","a":"إشارة حمراء طارئة من البرج."},{"q":"هل تعرف قيمة الشحنة؟","a":"نعم، ذهب مؤمّن."},{"q":"من يملك الجهاز اللاسلكي؟","a":"طاقم التحكم."}]},
                        {"name":"ماجد المراقب","role":"مراقب الإشارات","alibi":"كان يراقب الخطوط من برج التحكم.","qs":[{"q":"هل أمرت بتوقف القطار؟","a":"كانت الإشارات خضراء."},{"q":"من عبث باللوحة؟","a":"شخص يملك التردد."},{"q":"أين كنت الساعة 1 فجراً؟","a":"في البرج وحدي."}]},
                        {"name":"دانيال الحارس","role":"حارس الشحنة","alibi":"كان يحرس باب العربة الخلفية الداخلي.","qs":[{"q":"لماذا لم تطلق سلاحك؟","a":"فقدت وعيي بغاز مخدّر."},{"q":"من كان بالداخل؟","a":"أنا فقط والصناديق."},{"q":"متى استيقظت؟","a":"بعد التوقف بساعة."}]},
                        {"name":"عصام الميكانيكي","role":"عامل صيانة","alibi":"كان يصلح السكة قرب محطة قريبة.","qs":[{"q":"هل تملك رافعة هيدروليكية؟","a":"نعم، لصيانة السكك."},{"q":"أين كانت أدواتك؟","a":"في شاحنة الخدمة."},{"q":"تحب المال السريع؟","a":"من لا يحبه؟ لكني نزيه."}]}
                    ],
                    "explain":"تواطأ سامح سائق القطار مع الميكانيكي عصام لإيقاف القطار عمداً وتفريغ الذهب.",
                    "hints":["تلميح 1: تفقد الرافعة الهيدروليكية والجهاز اللاسلكي المضبوط على تردد الشركة.","تلميح 2: راجع سجل الصيانة الذي يُظهر توقف مكابح طارئ متعمد لمدة دقيقة.","تلميح 3: تواطأ سامح سائق القطار مع الميكانيكي عصام لإيقاف القطار وتفريغ شحنة الذهب."]
                },
                {
                    "tag":"قضية قتل",
                    "difficulty":"hard",
                    "title":"موت عالم الآثار",
                    "brief":"عُثر على عالم آثار شهير ميتاً داخل مقبرة حديثة الفتح مع صندوق تحف مكسور.",
                    "victim":"الضحية: الدكتور فاضل (58 سنة).",
                    "culprit":"ماهر المهرّب",
                    "evidence":[
                        {"name":"فأس حفريات","desc":"ملطخ بدماء الضحية وبصماته."},
                        {"name":"تمثال ذهبي صغير","desc":"سقط من القاتل أثناء هروبه."},
                        {"name":"مصباح يدوي","desc":"يحمل علامة متجر أدوات محلي."},
                        {"name":"آثار أقدام ترابية","desc":"تتجه نحو مدخل الحفريات الرئيسي."},
                        {"name":"سجل البعثة","desc":"يفصّل خلافاً حول تقاسم الاكتشافات."}
                    ],
                    "suspects":[
                        {"name":"الدكتور عادل","role":"قائد بعثة مشارك","alibi":"كان يوثّق النقوش في الحجرة الغربية.","qs":[{"q":"لماذا تشاجرتما؟","a":"حول فضل البحث."},{"q":"هل دخلت غرفة الكنز؟","a":"صباحاً فقط."},{"q":"أين كنت وقت الجريمة؟","a":"في الحجرة الأخرى."}]},
                        {"name":"سعاد المساعدة","role":"مساعدة الحفريات","alibi":"كانت تنظم الأدوات في المخيم الخارجي.","qs":[{"q":"من زار المقبرة ليلاً؟","a":"الدكتور فاضل وحده."},{"q":"ما التحف المفقودة؟","a":"تمثال ذهبي نادر."},{"q":"متى اكتُشف؟","a":"الصباح التالي."}]},
                        {"name":"ماهر المهرّب","role":"شخص مشبوه","alibi":"كان يصطاد وحوشاً قرب حافة الصحراء.","qs":[{"q":"لماذا قرب المقبرة؟","a":"أصطاد الحيوانات البرية."},{"q":"لماذا وُجد مصباحك؟","a":"فقدته سابقاً."},{"q":"هل تهرّب التحف؟","a":"اتهام باطل."}]},
                        {"name":"جهاد الحارس","role":"حارس الموقع","alibi":"كان يحرس خيام البعثة بالخارج.","qs":[{"q":"هل رأيت غريباً يقترب؟","a":"رأيت شخصاً يحمل حقيبة ثقيلة."},{"q":"لماذا لم توقفه؟","a":"ظننته باحثاً."},{"q":"هل سمعت صراخاً؟","a":"كانت الرياح قوية جداً."}]}
                    ],
                    "explain":"تسلل ماهر المهرّب إلى المقبرة لسرقة التمثال الذهبي وقتل عالم الآثار عندما ضُبط.",
                    "hints":["تلميح 1: افحص المصباح اليدوي الذي يحمل علامة متجر أدوات محلي والمُلقى في مسرح الجريمة.","تلميح 2: تفقد التمثال الذهبي الذي تركه الجاني الهارب.","تلميح 3: تسلل ماهر المهرّب إلى المقبرة لأجل التجارة غير المشروعة وقتل الدكتور فاضل عندما ضُبط."]
                },
                {
                    "tag":"قضية اختفاء",
                    "difficulty":"hard",
                    "title":"الطائرة الخاصة المفقودة",
                    "brief":"اختفت طائرة أعمال خاصة فوق مجال جوي جبلي وعر قرب غابة صنوبر كثيفة.",
                    "victim":"طائرة خاصة - 4 ركاب.",
                    "culprit":"سامر مساعد الطيار",
                    "evidence":[
                        {"name":"صندوق رحلة محطم","desc":"يُظهر عبثاً متعمداً بنظام الطيار الآلي."},
                        {"name":"وقود ملوث","desc":"أُضيفت مادة كيميائية تسببت في توقف المحرك."},
                        {"name":"رسالة انتحار مزوّرة","desc":"وُجدت على حاسوب المساعد."},
                        {"name":"خيوط مظلة","desc":"متشابكة بأغصان أشجار صنوبر عالية."},
                        {"name":"خطة طيران معدّلة","desc":"تحوّل المسار عمداً نحو الجبال."}
                    ],
                    "suspects":[
                        {"name":"الكابتن رامي","role":"الطيار الرئيسي","alibi":"كان يقود الطائرة حسب التعليمات الرسمية.","qs":[{"q":"لماذا تغيّر المسار؟","a":"لتجنب عاصفة شديدة."},{"q":"عطل المحرك؟","a":"توقف المحركان فجأة."},{"q":"موقع التحطم؟","a":"وسط الغابة."}]},
                        {"name":"سامر مساعد الطيار","role":"الضابط الأول","alibi":"كان يراقب لوحة أجهزة القمرة.","qs":[{"q":"من غيّر الخطة؟","a":"طلب القبطان توفير الوقود."},{"q":"هل غادرت الطائرة؟","a":"بقيت على متنها."},{"q":"ماذا عن المظلة؟","a":"عنصر من عدة الطوارئ."}]},
                        {"name":"منير المستثمر","role":"مالك الطائرة","alibi":"كان يراجع مستندات في مقعد الركاب.","qs":[{"q":"هل الطائرة مؤمّنة؟","a":"مؤمّنة بمبلغ كبير."},{"q":"هل لاحظت توتراً؟","a":"تجادل الطياران بهدوء."},{"q":"أين الأمتعة؟","a":"احترقت في التحطم."}]},
                        {"name":"ليلى الموظفة","role":"مساعدة شخصية","alibi":"كانت جالسة في المقصورة الخلفية.","qs":[{"q":"هل سمعتِ انفجاراً؟","a":"صوت غريب ثم هبوط سريع."},{"q":"هل تحبين الطيران؟","a":"لا أحب المرتفعات."},{"q":"من يستفيد؟","a":"وثائق التأمين."}]}
                    ],
                    "explain":"خرّب سامر مساعد الطيار الوقود وغيّر مسار الملاحة وقفز بالمظلة قبل التحطم.",
                    "hints":["تلميح 1: تفقد صندوق الرحلة المحطم والوقود الملوث الذي أدى لتوقف المحرك.","تلميح 2: افحص خيوط المظلة المتشابكة بأغصان الصنوبر العالية قرب مسار التحطم.","تلميح 3: خرّب سامر مساعد الطيار الرحلة وغيّر الملاحة وقفز بالمظلة قبل الارتطام."]
                },
                {
                    "tag":"قضية قتل",
                    "difficulty":"extreme",
                    "title":"السمّ الخفي",
                    "brief":"سُمّم رجل أعمال ثري داخل مكتبه المحصّن باستخدام مركب بيولوجي نادر لا يمكن كشفه.",
                    "victim":"الضحية: فؤاد المعتصم (60 سنة).",
                    "culprit":"الدكتور زياد",
                    "evidence":[
                        {"name":"قطارة طبية","desc":"تحتوي قطرات دقيقة من سم عصبي."},
                        {"name":"كأس ماء","desc":"مخلوط بمركب بيولوجي عديم الرائحة."},
                        {"name":"قفاز جراحي","desc":"مُلقى في سلة المهملات."},
                        {"name":"وصية محدّثة","desc":"تعيد توزيع الميراث لمؤسسة خيرية."},
                        {"name":"تسجيل كاميرات المراقبة","desc":"يُظهر شخصاً يرتدي معطف طبيب."}
                    ],
                    "suspects":[
                        {"name":"الدكتور زياد","role":"الطبيب الشخصي","alibi":"كان يفحص ضغط دم الضحية بعد الظهر.","qs":[{"q":"دواء يومي؟","a":"فيتامينات القلب فقط."},{"q":"لماذا وُجدت القطارة؟","a":"استخدمتها لقطرات العين."},{"q":"هل تعرف بالوصية الجديدة؟","a":"لا، لست على علم."}]},
                        {"name":"سوسن الزوجة","role":"زوجة الضحية","alibi":"كانت تحضّر الشاي في المطبخ الخارجي.","qs":[{"q":"من شرب الماء؟","a":"زوجي وحده."},{"q":"خلاف حول الوصية؟","a":"حزينة لكني لم أقتله."},{"q":"من زار اليوم؟","a":"طبيبه الشخصي."}]},
                        {"name":"ماهر الصيدلي","role":"صيدلي العائلة","alibi":"كان يدير الصيدلية طوال اليوم.","qs":[{"q":"هل صرفت سماً؟","a":"فقط أدوية مصرّحة."},{"q":"من يملك المركب البيولوجي؟","a":"مختبرات عالية المستوى."},{"q":"هل زرت القصر؟","a":"قبل شهر."}]},
                        {"name":"عمر الحارس","role":"حارس القصر","alibi":"كان يحرس البوابة الرئيسية.","qs":[{"q":"من دخل بمعطف طبيب؟","a":"الدكتور زياد كالمعتاد."},{"q":"هل رأيت غريباً؟","a":"لا أحد غريب."},{"q":"متى بدأت مناوبتك؟","a":"الصباح الباكر."}]}
                    ],
                    "explain":"سمّم الدكتور زياد الطبيب الشخصي إمدادات الدواء بمركب بيولوجي للحصول على أموال الميراث.",
                    "hints":["تلميح 1: افحص القطارة الطبية التي تحتوي جرعات دقيقة من السم العصبي.","تلميح 2: تفقد تسجيل الكاميرات الذي يُظهر شخصاً بمعطف طبيب يدخل المكتب المحصّن.","تلميح 3: سمّم الدكتور زياد الطبيب الشخصي إمدادات دواء الضحية لضمان أموال الميراث."]
                },
                {
                    "tag":"قضية سرقة",
                    "difficulty":"extreme",
                    "title":"سطو المتحف المحلي",
                    "brief":"اختفت تماثيل برونزية أثرية من صندوق عرض المتحف المحلي دون كسر الأقفال.",
                    "victim":"المتحف المحلي - 3 تماثيل.",
                    "culprit":"رامي أمين المتحف",
                    "evidence":[
                        {"name":"مجموعة مفاتيح عادية","desc":"تفتح صندوق العرض الزجاجي بسهولة."},
                        {"name":"علامة حبر أزرق","desc":"على مقبض خزانة العرض."},
                        {"name":"سجل الدخول","desc":"يُظهر تسجيل دخول أمين المتحف في وقت متأخر ليلاً."},
                        {"name":"حقيبة قماشية","desc":"مُتروكة خلف مقاعد الجلوس."},
                        {"name":"إيصال بيع","desc":"يُظهر بيع قطع مماثلة لتاجر."}
                    ],
                    "suspects":[
                        {"name":"رامي أمين المتحف","role":"أمين المتحف","alibi":"كان يحدّث السجلات في المكتب.","qs":[{"q":"من يملك مفتاح العرض؟","a":"أنا فقط."},{"q":"لماذا سجّلت دخولاً متأخراً؟","a":"كنت أراجع الجرد."},{"q":"أين التماثيل؟","a":"سُرقت، لا أعرف من فعلها."}]},
                        {"name":"سعاد الحارسة","role":"حارسة المتحف","alibi":"كانت في مركزها عند البوابة الأمامية.","qs":[{"q":"هل حمل أحد حقيبة؟","a":"رأيت رامي يحمل حقيبة قماشية."},{"q":"هل تفعّل الإنذار؟","a":"لا، استُخدم المفتاح الأصلي."},{"q":"متى غادر رامي؟","a":"بعد منتصف الليل."}]},
                        {"name":"زياد الزائر","role":"هاوي تحف قديمة","alibi":"كان يشاهد المعروضات نهاراً.","qs":[{"q":"متى زرت؟","a":"قبل السطو بيومين."},{"q":"هل قابلت رامي؟","a":"ناقشت معه التماثيل."},{"q":"هل تشتري تحفاً؟","a":"فقط بطرق قانونية."}]},
                        {"name":"فاطمة عاملة النظافة","role":"طاقم النظافة","alibi":"كانت تنظف القاعات صباحاً.","qs":[{"q":"هل لاحظتِ نقصاً؟","a":"صندوق عرض فارغ صباحاً."},{"q":"من يدخل ليلاً؟","a":"أمين المتحف رامي."},{"q":"هل تفتحين صناديق العرض؟","a":"أبداً."}]}
                    ],
                    "explain":"سرق رامي أمين المتحف التماثيل البرونزية باستخدام مفتاحه الرسمي وباعها لتاجر غير شرعي.",
                    "hints":["تلميح 1: تفقد سجل الدخول الذي يُظهر تسجيل أمين المتحف دخولاً متأخراً ليلاً.","تلميح 2: راجع مجموعة المفاتيح العادية المستخدمة لفتح صناديق العرض دون كسر الأقفال.","تلميح 3: استخدم رامي أمين المتحف مفاتيحه الرسمية لسرقة التماثيل البرونزية وبيعها."]
                },
                {
                    "tag":"قضية قتل",
                    "difficulty":"extreme",
                    "title":"جريمة المنزل المسكون",
                    "brief":"عُثر على رجل مسنّ مقتولاً في منزل مهجور بالغابة مع إغلاق الباب الأمامي من الداخل.",
                    "victim":"الضحية: صالح (75 سنة).",
                    "culprit":"نبيل ابن الأخ",
                    "evidence":[
                        {"name":"مفتاح احتياطي","desc":"مخبأ تحت دواسة الباب."},
                        {"name":"هراوة خشبية","desc":"ملطخة بالدماء وآثار عراك."},
                        {"name":"صندوق نقود","desc":"مُفرّغ ومتناثر."},
                        {"name":"أثر قدم موحل","desc":"قرب إطار النافذة الخلفية."},
                        {"name":"رسالة ميراث","desc":"من ابن الأخ يطالب بالمال."}
                    ],
                    "suspects":[
                        {"name":"نبيل ابن الأخ","role":"قريب الضحية","alibi":"كان يبيع عقاراً بالبلدة.","qs":[{"q":"لماذا طلبت المال؟","a":"كان عمي، احتجت مساعدته."},{"q":"هل تعرف مخبأ المفتاح؟","a":"نعم، مكان قديم معروف."},{"q":"أين كنت وقت الحادثة؟","a":"في سوق البلدة."}]},
                        {"name":"سعيد الجار","role":"جار مسنّ","alibi":"كان يصلح سياج المزرعة.","qs":[{"q":"هل سمعت شجاراً؟","a":"صرخة خافتة ثم صمت."},{"q":"من يزور المنزل؟","a":"ابن أخيه نبيل."},{"q":"هل دخلت المنزل؟","a":"أبداً."}]},
                        {"name":"منى الابنة","role":"طالبة","alibi":"كانت تجمع الأعشاب قرب الغابة.","qs":[{"q":"هل رأيتِ غريباً؟","a":"رأيت نبيل يحمل صندوقاً معدنياً."},{"q":"متى رأيته؟","a":"قبيل الغروب."},{"q":"هل أخبرتِ أحداً؟","a":"كنت خائفة."}]},
                        {"name":"خالد الضابط","role":"شرطي متقاعد","alibi":"كان يصطاد السمك في النهر القريب.","qs":[{"q":"هل زرت صالح مؤخراً؟","a":"قبل أسبوع لشرب الشاي."},{"q":"كيف كان مزاجه؟","a":"خائفاً من جشع نبيل."},{"q":"تحب الغابة؟","a":"أقضي ساعات هناك."}]}
                    ],
                    "explain":"قتل نبيل ابن الأخ عمّه من أجل صندوق النقود مستخدماً مخبأ المفتاح الاحتياطي الذي كان يعرفه.",
                    "hints":["تلميح 1: افحص المفتاح الاحتياطي المخبأ تحت دواسة الباب والذي لا يعرفه سوى أفراد العائلة.","تلميح 2: تفقد رسالة الميراث المطالبة بالمال الموجودة في المنزل.","تلميح 3: استخدم نبيل ابن الأخ المفتاح الاحتياطي المخفي للدخول وقتل عمّه من أجل صندوق النقود."]
                },
                {
                    "tag":"قضية اختفاء",
                    "difficulty":"extreme",
                    "title":"الوثيقة الدبلوماسية",
                    "brief":"اختفت وثيقة دبلوماسية سرية للغاية من حقيبة السفير أثناء حفل استقبال مزدحم.",
                    "victim":"السفارة الأجنبية - وثيقة سرية.",
                    "culprit":"دانيال المراسل",
                    "evidence":[
                        {"name":"حقيبة مطابقة","desc":"استُبدلت بمهارة بالحقيبة الأصلية."},
                        {"name":"دعوة مزوّرة","desc":"تحمل اسم ضيف مزيف."},
                        {"name":"مقطع كاميرا مراقبة","desc":"شخص يرتدي بدلة رسمية داكنة."},
                        {"name":"منديل حريري","desc":"معطّر بعطر فرنسي."},
                        {"name":"سجل الضيوف","desc":"يسجّل دخول مراسل غامض."}
                    ],
                    "suspects":[
                        {"name":"السفير مراد","role":"كبير الدبلوماسيين","alibi":"كان يستقبل الضيوف في القاعة الرئيسية.","qs":[{"q":"من يحمل الحقيبة؟","a":"مساعدي دائماً."},{"q":"متى لاحظت الفقدان؟","a":"فور مغادرة الضيوف."},{"q":"هل الوثيقة بالغة الأهمية؟","a":"سرية للغاية."}]},
                        {"name":"سعيد المساعد","role":"مساعد دبلوماسي","alibi":"كان يقدّم المرطبات للضيوف.","qs":[{"q":"أين كانت الحقيبة؟","a":"بجانب المكتب الخاص."},{"q":"من اقترب منها؟","a":"صحفي أجنبي."},{"q":"هل تركتها وحدها؟","a":"لدقائق لجلب ملفات."}]},
                        {"name":"دانيال المراسل","role":"صحفي أجنبي","alibi":"كان يجري مقابلات مع الدبلوماسيين.","qs":[{"q":"لماذا استبدلت الحقيبة؟","a":"خلط عرضي."},{"q":"عطر فرنسي؟","a":"هدية من صديق."},{"q":"تبحث عن سبق صحفي؟","a":"أبحث عن الحقيقة."}]},
                        {"name":"نادين المترجمة","role":"مترجمة رسمية","alibi":"كانت تترجم على المنصة.","qs":[{"q":"هل لاحظتِ نشاطاً غريباً؟","a":"كان دانيال يحوم قرب الحقيبة."},{"q":"من دعاه؟","a":"دعوات خاصة."},{"q":"الوثائق آمنة؟","a":"بروتوكول صارم."}]}
                    ],
                    "explain":"استبدل دانيال المراسل الجاسوس الحقيبة المطابقة أثناء ازدحام الحفل لسرقة الوثيقة.",
                    "hints":["تلميح 1: تفقد الحقيبة المستبدلة وسجل الضيوف الذي يسجّل دخول مراسل غامض.","تلميح 2: ملاحظة المنديل الحريري المعطر بالعطر الفرنسي المترك في مسرح الجريمة.","تلميح 3: استخدم دانيال المراسل دعوة مزيفة واستبدل الحقائب أثناء ازدحام حفل الاستقبال."]
                },
                {
                    "tag":"قضية قتل",
                    "difficulty":"extreme",
                    "title":"اغتيال ناطحة السحاب",
                    "brief":"عُثر على رجل أعمال ميتاً بسهم مسموم داخل مكتبه الزجاجي في الطابق الخمسين.",
                    "victim":"الضحية: غسان الملك (65 سنة).",
                    "culprit":"زياد المنافس",
                    "evidence":[
                        {"name":"سهم مسموم دقيق","desc":"أُطلق من نافذة مبنى مقابل."},
                        {"name":"قوس احترافي","desc":"مثبت على حامل ثلاثي في المبنى المقابل."},
                        {"name":"بصمة جزئية","desc":"على مقبض القوس في الغرفة المظلمة."},
                        {"name":"عقد ملغى","desc":"يُظهر خسائر فادحة للمنافس الرئيسي."},
                        {"name":"منظار عالي القوة","desc":"استُخدم لتحديد الهدف بدقة بعيدة المدى."}
                    ],
                    "suspects":[
                        {"name":"زياد المنافس","role":"رجل أعمال منافس","alibi":"كان في اجتماعات بالبنك طوال اليوم.","qs":[{"q":"ما علاقتك بالضحية؟","a":"منافسة شرسة في السوق."},{"q":"هل استأجرت قناصاً؟","a":"أنا رجل أعمال قانوني."},{"q":"أين كنت وقت الجريمة؟","a":"في برج المال والأعمال."}]},
                        {"name":"سحر السكرتيرة","role":"مساعدة تنفيذية","alibi":"كانت تحضر القهوة في الاستراحة.","qs":[{"q":"من يملك صلاحية المكتب؟","a":"أنا ورئيس الحراس."},{"q":"هل سمعت صوت نافذة؟","a":"الزجاج عازل للصوت."},{"q":"هل كان خائفاً؟","a":"تلقى تهديدات بالقتل."}]},
                        {"name":"ماهر رئيس الحراس","role":"رئيس الحراس","alibi":"كان يراقب كاميرات الطوابق السفلية.","qs":[{"q":"لماذا فاتكم القناص؟","a":"المبنى المقابل مهجور."},{"q":"من يملك مفتاح المبنى المقابل؟","a":"مقاول مفلس."},{"q":"هل تغطي الكاميرات المقابل؟","a":"الزاوية لا تلتقطه."}]},
                        {"name":"جهاد القناص","role":"مرتزق غامض","alibi":"كان يستأجر غرفة تحت اسم مستعار.","qs":[{"q":"لماذا في البرج المقابل؟","a":"هاوي تصوير فوتوغرافي."},{"q":"لماذا بصمتك على القوس؟","a":"نفّذت عقداً مقابل المال."},{"q":"من دفع لك؟","a":"المنافس زياد."}]}
                    ],    
                    "explain":"استأجر زياد المنافس القناص جهاد لتنفيذ عملية الاغتيال طويلة المدى من المبنى المقابل.",
                    "hints":["تلميح 1: افحص السهم المسموم الدقيق والقوس الاحترافي المثبت في المبنى المقابل.","تلميح 2: تفقد العقد الملغى الذي يوضح الخسائر المالية الضخمة للمنافس الرئيسي بالسوق.","تلميح 3: استأجر زياد المنافس القناص جهاد في المبنى المقابل المهجور لتنفيذ اغتيال الناطحة."]
                }
            ]
        }
    };