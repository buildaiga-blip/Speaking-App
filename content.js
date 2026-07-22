// content.js - Full 20-Scenario Database for FluentSpoken App (with Corrected Role Reversal Logic)
const appData = {
    students: {
        title: "Student Mode 🎓",
        scenarios: [
            {
                level: "Basic",
                title: "Introducing yourself in class",
                hindi: "कक्षा में अपना परिचय देना",
                roles: {
                    role1: {
                        name: "New Student (You) & Teacher (AI)",
                        turns: [
                            { aiPrompt: "Hello everyone! Good morning. Please tell us your name and what you love studying.", aiPromptHindi: "नमस्ते साथियों! सुप्रभात। कृपया अपना नाम बताएं और आपको क्या पढ़ना पसंद है।", aiExpectedHint: "Say your name and favorite subject." },
                            { aiPrompt: "That's wonderful! Tell me, how long have you been studying at this school?", aiPromptHindi: "यह शानदार है! मुझे बताएं, आप इस स्कूल में कब से पढ़ रहे हैं?", aiExpectedHint: "Mention how many years or months." },
                            { aiPrompt: "Great. Who is your favorite teacher here so far?", aiPromptHindi: "बहुत बढ़िया। अब तक यहाँ आपके पसंदीदा शिक्षक कौन हैं?", aiExpectedHint: "Name a teacher or subject." },
                            { aiPrompt: "Ah, they are a great teacher! What do you like most about their class?", aiPromptHindi: "आह, वे एक महान शिक्षक हैं! आपको उनकी कक्षा के बारे में सबसे ज्यादा क्या पसंद है?", aiExpectedHint: "Describe their teaching style." },
                            { aiPrompt: "Do you prefer studying alone or in a group with your classmates?", aiPromptHindi: "क्या आप अकेले पढ़ना पसंद करते हैं या सहपाठियों के साथ समूह में?", aiExpectedHint: "State your study preference." },
                            { aiPrompt: "What hobbies or sports do you enjoy outside of school hours?", aiPromptHindi: "स्कूल के घंटों के बाहर आपको कौन से शौक या खेल पसंद हैं?", aiExpectedHint: "Mention drawing, cricket, or reading." },
                            { aiPrompt: "That sounds exciting! Do you participate in annual school sports events?", aiPromptHindi: "यह रोमांचक लगता है! क्या आप वार्षिक स्कूल खेल आयोजनों में भाग लेते हैं?", aiExpectedHint: "Say yes or no with a brief reason." },
                            { aiPrompt: "If you could change one school rule, what would it be and why?", aiPromptHindi: "यदि आप स्कूल का एक नियम बदल सकते, तो वह क्या होता और क्यों?", aiExpectedHint: "Propose a fun or practical change." },
                            { aiPrompt: "What are your future career dreams or goals after finishing school?", aiPromptHindi: "स्कूल की पढ़ाई पूरी करने के बाद आपके भविष्य के करियर के सपने या लक्ष्य क्या हैं?", aiExpectedHint: "Mention your target career." },
                            { aiPrompt: "Thank you for sharing! You did a fantastic job introducing yourself today.", aiPromptHindi: "साझा करने के लिए धन्यवाद! आज आपने बहुत अच्छा काम किया।", aiExpectedHint: "Say thank you and wrap up." }
                        ]
                    },
                    role2: {
                        name: "Teacher (You) & New Student (AI)",
                        turns: [
                            { aiPrompt: "Good morning, Teacher! My name is Alex, and I really love studying mathematics.", aiPromptHindi: "सुप्रभात, टीचर! मेरा नाम एलेक्स है, और मुझे गणित पढ़ना बहुत पसंद है।" , aiExpectedHint: "Welcome Alex and ask about their previous school." },
                            { aiPrompt: "I studied at St. Mary's Public School for three years before moving here.", aiPromptHindi: "यहाँ आने से पहले मैंने तीन साल तक सेंट मैरी पब्लिक स्कूल में पढ़ाई की थी।" , aiExpectedHint: "Ask what their favorite part of math is." },
                            { aiPrompt: "I really enjoy solving algebra equations and puzzles.", aiPromptHindi: "मुझे बीजगणित के समीकरण और पहेलियाँ हल करना वास्तव में पसंद है।" , aiExpectedHint: "Praise their interest and ask if they need help settling in." },
                            { aiPrompt: "Thank you, Teacher. Everyone has been very kind, and I am finding my way around nicely.", aiPromptHindi: "धन्यवाद, टीचर। हर कोई बहुत दयालु रहा है, और मैं आसानी से रास्ते ढूंढ रहा हूँ।" , aiExpectedHint: "Tell them to let you know if they have any questions." }
                        ]
                    }
                },
                grammarTip: "Grammar Tip: Use simple present tense for routine habits."
            },
            {
                level: "Basic",
                title: "Borrowing a book from the library",
                hindi: "पुस्तकालय से एक किताब उधार लेना",
                roles: {
                    role1: {
                        name: "Student (You) & Librarian (AI)",
                        turns: [
                            { aiPrompt: "Good morning! Can I see your library card, please?", aiPromptHindi: "सुप्रभात! क्या मैं आपका पुस्तकालय कार्ड देख सकता हूँ?", aiExpectedHint: "Greet and hand over the card." },
                            { aiPrompt: "Thank you. What kind of book are you looking for today?", aiPromptHindi: "धन्यवाद। आज आप किस प्रकार की किताब खोज रहे हैं?", aiExpectedHint: "Mention a genre like science fiction or history." },
                            { aiPrompt: "We have a great new collection in that section. Do you have a specific author in mind?", aiPromptHindi: "हमारे पास उस खंड में एक शानदार नया संग्रह है। क्या आपके मन में कोई विशिष्ट लेखक है?", aiExpectedHint: "Name an author or say no." },
                            { aiPrompt: "Alright. The books you want are on aisle four. Did you find anything else?", aiPromptHindi: "ठीक है। आपकी मनपसंद किताबें चौथी पंक्ति में हैं। क्या आपको कुछ और मिला?", aiExpectedHint: "Say you found one more book." },
                            { aiPrompt: "Let me scan these for you. You are borrowing two books today.", aiPromptHindi: "मुझे आपके लिए इन्हें स्कैन करने दें। आज आप दो किताबें उधार ले रहे हैं।", aiExpectedHint: "Acknowledge this." },
                            { aiPrompt: "Just a reminder, these are due back in two weeks. Will that be enough time?", aiPromptHindi: "बस एक याद दिला दूँ, इन्हें दो सप्ताह में वापस करना है। क्या इतना समय पर्याप्त होगा?", aiExpectedHint: "Say yes." },
                            { aiPrompt: "If you need more time, you can renew them online. Have you used our online portal?", aiPromptHindi: "यदि आपको अधिक समय चाहिए, तो आप उन्हें ऑनलाइन नवीनीकृत कर सकते हैं। क्या आपने हमारे ऑनलाइन पोर्टल का उपयोग किया है?", aiExpectedHint: "Say no and ask how." },
                            { aiPrompt: "You just log in with your student ID on the school website.", aiPromptHindi: "आप बस स्कूल की वेबसाइट पर अपने छात्र आईडी के साथ लॉग इन करें।", aiExpectedHint: "Say okay, understood." },
                            { aiPrompt: "Perfect. Here are your books and your receipt.", aiPromptHindi: "उत्तम। यहाँ आपकी किताबें और आपकी रसीद है।", aiExpectedHint: "Take them and say thank you." },
                            { aiPrompt: "Enjoy your reading! Have a great day.", aiPromptHindi: "पढ़ने का आनंद लें! आपका दिन शुभ हो।", aiExpectedHint: "Say goodbye." }
                        ]
                    },
                    role2: {
                        name: "Librarian (You) & Student (AI)",
                        turns: [
                            { aiPrompt: "Good morning, sir. I would like to borrow a science textbook today.", aiPromptHindi: "सुप्रभात, सर। मैं आज विज्ञान की पाठ्यपुस्तक उधार लेना चाहता हूँ।" , aiExpectedHint: "Ask for their library card." },
                            { aiPrompt: "Here is my library card, right here.", aiPromptHindi: "यह रहा मेरा पुस्तकालय कार्ड, यहीं है।" , aiExpectedHint: "Scan the card and ask which grade textbook they need." },
                            { aiPrompt: "I need the 10th-grade Physics textbook, please.", aiPromptHindi: "मुझे 10वीं कक्षा की भौतिकी की पाठ्यपुस्तक चाहिए, कृपया।" , aiExpectedHint: "Check the shelf and hand it over, reminding them of the due date." }
                        ]
                    }
                },
                grammarTip: "Grammar Tip: Use 'I am looking for...' to state what you want."
            },
            {
                level: "Basic",
                title: "Buying food at the school canteen",
                hindi: "स्कूल की कैंटीन में खाना खरीदना",
                roles: {
                    role1: {
                        name: "Student (You) & Canteen Staff (AI)",
                        turns: [
                            { aiPrompt: "Hi there! What can I get for you today?", aiPromptHindi: "नमस्ते! आज मैं आपके लिए क्या ला सकता हूँ?", aiExpectedHint: "Order a snack or lunch item." },
                            { aiPrompt: "One sandwich. Would you like cheese or chicken in that?", aiPromptHindi: "एक सैंडविच। क्या आप उसमें पनीर या चिकन चाहेंगे?", aiExpectedHint: "State your choice." },
                            { aiPrompt: "Do you want it toasted or plain?", aiPromptHindi: "क्या आप इसे टोस्टेड चाहते हैं या सादा?", aiExpectedHint: "Say toasted, please." },
                            { aiPrompt: "Sure thing. Anything to drink with that?", aiPromptHindi: "ज़रूर। उसके साथ पीने के लिए कुछ?", aiExpectedHint: "Order juice or water." },
                            { aiPrompt: "We only have orange juice or apple juice today. Which one?", aiPromptHindi: "आज हमारे पास केवल संतरे का रस या सेब का रस है। कौन सा?", aiExpectedHint: "Choose a juice." },
                            { aiPrompt: "Great. Do you want any side snacks, like chips or a cookie?", aiPromptHindi: "बढ़िया। क्या आपको कोई साइड स्नैक चाहिए, जैसे चिप्स या कुकी?", aiExpectedHint: "Say no, just the meal." },
                            { aiPrompt: "Okay, your total comes to fifty rupees. Cash or card?", aiPromptHindi: "ठीक है, आपका कुल पचास रुपये हुआ। नकद या कार्ड?", aiExpectedHint: "Say cash and offer the money." },
                            { aiPrompt: "Here is your change. Your food will be ready in two minutes.", aiPromptHindi: "यह रहा आपका छु्ट्टा। आपका खाना दो मिनट में तैयार हो जाएगा।", aiExpectedHint: "Say okay and wait." },
                            { aiPrompt: "Here is your toasted sandwich and juice. Be careful, it's hot!", aiPromptHindi: "यह रहा आपका टोस्टेड सैंडविच और जूस। सावधान रहें, यह गर्म है!", aiExpectedHint: "Thank the staff." },
                            { aiPrompt: "Enjoy your meal! Next in line, please.", aiPromptHindi: "अपने भोजन का आनंद लें! अगला व्यक्ति, कृपया।", aiExpectedHint: "Say bye and walk away." }
                        ]
                    },
                    role2: {
                        name: "Canteen Staff (You) & Student (AI)",
                        turns: [
                            { aiPrompt: "Hello! Can I please get a vegetable burger and a cold drink?", aiPromptHindi: "नमस्ते! क्या मुझे कृपया एक वेजिटेबल बर्गर और एक कोल्ड ड्रिंक मिल सकता है?" , aiExpectedHint: "Confirm the order and state the price." },
                            { aiPrompt: "That sounds great. How much should I pay you?", aiPromptHindi: "यह बहुत अच्छा लगता है। मुझे आपको कितना भुगतान करना चाहिए?" , aiExpectedHint: "Tell them the total is eighty rupees." }
                        ]
                    }
                },
                grammarTip: "Grammar Tip: Use 'I would like...' for polite ordering."
            },
            {
                level: "Basic",
                title: "Asking for directions on a new campus",
                hindi: "नए परिसर में रास्ता पूछना",
                roles: {
                    role1: {
                        name: "New Student (You) & Senior Student (AI)",
                        turns: [
                            { aiPrompt: "Hey! You look a bit lost. Are you new here?", aiPromptHindi: "अरे! तुम थोड़े खोए हुए लग रहे हो। क्या तुम यहाँ नए हो?", aiExpectedHint: "Say yes and ask for help." },
                            { aiPrompt: "Welcome to the college! Which building are you trying to find?", aiPromptHindi: "कॉलेज में आपका स्वागत है! आप किस इमारत को खोजने की कोशिश कर रहे हैं?", aiExpectedHint: "Ask for the Science Block." },
                            { aiPrompt: "The Science Block? It's on the other side of the campus. What subject is your class?", aiPromptHindi: "विज्ञान ब्लॉक? यह परिसर के दूसरी ओर है। आपकी कक्षा किस विषय की है?", aiExpectedHint: "Say Chemistry." },
                            { aiPrompt: "Ah, Chemistry labs are on the ground floor. Have you crossed the library yet?", aiPromptHindi: "आह, रसायन विज्ञान प्रयोगशालाएँ भूतल पर हैं। क्या आपने अभी तक पुस्तकालय पार किया है?", aiExpectedHint: "Say no." },
                            { aiPrompt: "Okay, go straight down this path until you see a large fountain.", aiPromptHindi: "ठीक है, इस रास्ते पर सीधे तब तक जाएँ जब तक आपको एक बड़ा फव्वारा न दिखाई दे।", aiExpectedHint: "Confirm the fountain." },
                            { aiPrompt: "Yes, take a left from the fountain. You will see a red brick building.", aiPromptHindi: "हाँ, फव्वारे से बाएँ मुड़ें। आपको एक लाल ईंटों वाली इमारत दिखाई देगी।", aiExpectedHint: "Ask if that is the Science Block." },
                            { aiPrompt: "Exactly! That's the one. Who is your professor?", aiPromptHindi: "बिल्कुल! वही है। आपके प्रोफेसर कौन हैं?", aiExpectedHint: "Name a professor." },
                            { aiPrompt: "Dr. Sharma is great! You better hurry, he is very strict about timing.", aiPromptHindi: "डॉ. शर्मा महान हैं! आपको जल्दी करनी चाहिए, वे समय को लेकर बहुत सख्त हैं।", aiExpectedHint: "Ask how long it takes to walk there." },
                            { aiPrompt: "It should take about five minutes if you walk fast.", aiPromptHindi: "यदि आप तेज चलते हैं तो इसमें लगभग पांच मिनट लगने चाहिए।", aiExpectedHint: "Thank them for the help." },
                            { aiPrompt: "No problem. Good luck on your first day!", aiPromptHindi: "कोई बात नहीं। आपके पहले दिन के लिए शुभकामनाएँ!", aiExpectedHint: "Say goodbye." }
                        ]
                    },
                    role2: {
                        name: "Senior Student (You) & New Student (AI)",
                        turns: [
                            { aiPrompt: "Excuse me, can you please tell me where the computer laboratory is?", aiPromptHindi: "क्षमा करें, क्या आप कृपया बता सकते हैं कि कंप्यूटर प्रयोगशाला कहाँ है?" , aiExpectedHint: "Explain the route to the computer lab." },
                            { aiPrompt: "Thank you so much! Is it on the second floor?", aiPromptHindi: "बहुत-बहुत धन्यवाद! क्या यह दूसरी मंजिल पर है?" , aiExpectedHint: "Confirm it's on the second floor, next to the auditorium." }
                        ]
                    }
                },
                grammarTip: "Grammar Tip: Use 'Excuse me, could you tell me where...' to ask for directions."
            },
            {
                level: "Medium",
                title: "Asking a teacher for extra help after class",
                hindi: "कक्षा के बाद शिक्षक से अतिरिक्त सहायता मांगना",
                roles: {
                    role1: {
                        name: "Student (You) & Teacher (AI)",
                        turns: [
                            { aiPrompt: "Hello! How can I help you with today's science lesson?", aiPromptHindi: "नमस्ते! आज के विज्ञान पाठ में मैं आपकी क्या मदद कर सकता हूँ?", aiExpectedHint: "State you need help with a topic." },
                            { aiPrompt: "Certainly. Which specific part of the physics experiment did you find confusing?", aiPromptHindi: "निश्चित रूप से। भौतिकी प्रयोग का कौन सा विशिष्ट हिस्सा आपको भ्रमित करने वाला लगा?", aiExpectedHint: "Specify the circuit part." },
                            { aiPrompt: "Ah, the electrical circuits. Let me draw it for you on the board.", aiPromptHindi: "आह, बिजली के सर्किट। मुझे आपके लिए इसे बोर्ड पर बनाने दें।", aiExpectedHint: "Thank the teacher and watch." },
                            { aiPrompt: "Do you understand why the positive terminal must connect first?", aiPromptHindi: "क्या आप समझते हैं कि सकारात्मक टर्मिनल को पहले क्यों जोड़ना चाहिए?", aiExpectedHint: "Explain your understanding briefly." },
                            { aiPrompt: "Spot on! Would you like to try building the circuit again right now?", aiPromptHindi: "बिल्कुल सही! क्या आप अभी दोबारा सर्किट बनाने की कोशिश करना चाहेंगे?", aiExpectedHint: "Say yes eagerly." },
                            { aiPrompt: "Take your time. Let me know when the light bulb turns on.", aiPromptHindi: "अपना समय लें। जब लाइट बल्ब जल जाए तो मुझे बताएं।", aiExpectedHint: "Say you will test it now." },
                            { aiPrompt: "It's glowing! See, you managed to solve it.", aiPromptHindi: "यह चमक रहा है! देखो, तुमने इसे हल कर लिया।", aiExpectedHint: "Express happiness and relief." },
                            { aiPrompt: "Practice this once more at home to build confidence.", aiPromptHindi: "आत्मविश्वास बढ़ाने के लिए घर पर इसे एक बार फिर अभ्यास करें।", aiExpectedHint: "Promise to practice at home." },
                            { aiPrompt: "Do you have any other questions regarding the upcoming exam syllabus?", aiPromptHindi: "क्या आपके पास आगामी परीक्षा पाठ्यक्रम के संबंध में कोई अन्य प्रश्न हैं?", aiExpectedHint: "Say no, everything is clear." },
                            { aiPrompt: "Great! Good luck with your revision.", aiPromptHindi: "बढ़िया! आपके रिवीजन के लिए शुभकामनाएँ।", aiExpectedHint: "Thank the teacher and leave." }
                        ]
                    },
                    role2: {
                        name: "Teacher (You) & Student (AI)",
                        turns: [
                            { aiPrompt: "Excuse me, Teacher, do you have a few minutes to explain calculus to me?", aiPromptHindi: "क्षमा करें टीचर, क्या आपके पास मुझे कैलकुलस समझाने के लिए कुछ मिनट हैं?" , aiExpectedHint: "Welcome them and ask which specific formula is unclear." },
                            { aiPrompt: "I am having trouble understanding the chain rule in derivatives.", aiPromptHindi: "मुझे डेरिवेटिव में चेन रूल समझने में परेशानी हो रही है।" , aiExpectedHint: "Explain the chain rule step-by-step or offer to write an example on the board." }
                        ]
                    }
                },
                grammarTip: "Grammar Tip: Use polite modal verbs like 'Could you please explain...'."
            },
            {
                level: "Medium",
                title: "Discussing a group project with a classmate",
                hindi: "सहपाठी के साथ समूह परियोजना पर चर्चा करना",
                roles: {
                    role1: {
                        name: "Student (You) & Classmate (AI)",
                        turns: [
                            { aiPrompt: "Hey! We need to start our history group project soon. Have you looked at the topics?", aiPromptHindi: "अरे! हमें जल्द ही अपना इतिहास समूह प्रोजेक्ट शुरू करना होगा। क्या आपने विषयों को देखा है?", aiExpectedHint: "Say yes and suggest a topic." },
                            { aiPrompt: "The Industrial Revolution sounds good. How should we divide the work?", aiPromptHindi: "औद्योगिक क्रांति अच्छी लगती है। हमें काम को कैसे बांटना चाहिए?", aiExpectedHint: "Offer to do the research." },
                            { aiPrompt: "Okay, you handle the research, and I will create the presentation slides. Deal?", aiPromptHindi: "ठीक है, तुम शोध संभालो, और मैं प्रेजेंटेशन स्लाइड बनाऊँगा। मंज़ूर?", aiExpectedHint: "Agree to the plan." },
                            { aiPrompt: "When do you think you can finish finding the key dates and events?", aiPromptHindi: "आपको क्या लगता है कि आप प्रमुख तिथियों और घटनाओं को खोजना कब तक पूरा कर लेंगे?", aiExpectedHint: "Give a deadline, like this Friday." },
                            { aiPrompt: "Friday works perfectly. We also need three images. Can you find those too?", aiPromptHindi: "शुक्रवार बिल्कुल सही रहेगा। हमें तीन छवियों की भी आवश्यकता है। क्या आप उन्हें भी खोज सकते हैं?", aiExpectedHint: "Say yes, no problem." },
                            { aiPrompt: "Should we meet in the library on Saturday to put it all together?", aiPromptHindi: "क्या हम सब कुछ एक साथ रखने के लिए शनिवार को पुस्तकालय में मिलें?", aiExpectedHint: "Agree to the Saturday meeting." },
                            { aiPrompt: "What time on Saturday is best for you?", aiPromptHindi: "शनिवार को आपके लिए कौन सा समय सबसे अच्छा है?", aiExpectedHint: "Suggest morning, around 10 AM." },
                            { aiPrompt: "10 AM is great. Do we need to print anything for the teacher?", aiPromptHindi: "सुबह 10 बजे बढ़िया है। क्या हमें शिक्षक के लिए कुछ प्रिंट करने की आवश्यकता है?", aiExpectedHint: "Say yes, a summary report." },
                            { aiPrompt: "Got it. I will bring some snacks for us while we work.", aiPromptHindi: "समझ गया। काम करते समय मैं हमारे लिए कुछ स्नैक्स लाऊँगा।", aiExpectedHint: "Appreciate the gesture." },
                            { aiPrompt: "Awesome! See you on Saturday with the research data.", aiPromptHindi: "बहुत बढ़िया! शनिवार को शोध डेटा के साथ मिलते हैं।", aiExpectedHint: "Say see you then." }
                        ]
                    },
                    role2: {
                        name: "Classmate (You) & Student (AI)",
                        turns: [
                            { aiPrompt: "Hi! Have you thought about what topic we should choose for our science project?", aiPromptHindi: "नमस्ते! क्या आपने सोचा है कि हमें अपने विज्ञान प्रोजेक्ट के लिए कौन सा विषय चुनना चाहिए?" , aiExpectedHint: "Suggest a topic related to renewable energy." },
                            { aiPrompt: "Renewable energy sounds fantastic! We can build a model of a solar panel.", aiPromptHindi: "नवीकरणीय ऊर्जा शानदार लगती है! हम सोलर पैनल का मॉडल बना सकते हैं।" , aiExpectedHint: "Agree and ask how to divide the work." }
                        ]
                    }
                },
                grammarTip: "Grammar Tip: Use 'I will...' for volunteering to do tasks in a group."
            },
            {
                level: "Medium",
                title: "Preparing for a sports tournament",
                hindi: "खेल टूर्नामेंट की तैयारी",
                roles: {
                    role1: {
                        name: "Captain (You) & Coach (AI)",
                        turns: [
                            { aiPrompt: "Good evening, Captain! Are the team members ready for the finals this weekend?", aiPromptHindi: "शुभ संध्या, कप्तान! क्या टीम के सदस्य इस सप्ताहांत फाइनल के लिए तैयार हैं?", aiExpectedHint: "Greet the coach and say yes." },
                            { aiPrompt: "How is Rahul's ankle? He was injured in the semi-finals.", aiPromptHindi: "राहुल के टखने का क्या हाल है? वह सेमीफाइनल में घायल हो गया था।", aiExpectedHint: "Give an update on his recovery." },
                            { aiPrompt: "Glad to hear he is better. Have you decided on the starting lineup?", aiPromptHindi: "यह सुनकर खुशी हुई कि वह बेहतर है। क्या आपने शुरुआती लाइनअप तय कर लिया है?", aiExpectedHint: "Say you have a draft ready." },
                            { aiPrompt: "Let's stick to an aggressive strategy in the first half. What do you think?", aiPromptHindi: "पहले भाग में हम आक्रामक रणनीति अपनाते हैं। आपको क्या लगता है?", aiExpectedHint: "Agree and add a suggestion." },
                            { aiPrompt: "Good idea. Make sure our defenders don't push too far forward.", aiPromptHindi: "अच्छा विचार है। सुनिश्चित करें कि हमारे रक्षक बहुत आगे न बढ़ें।", aiExpectedHint: "Acknowledge the instruction." },
                            { aiPrompt: "We have an extra practice session tomorrow morning at 6 AM. Tell everyone.", aiPromptHindi: "कल सुबह 6 बजे हमारा एक अतिरिक्त अभ्यास सत्र है। सभी को बता देना।", aiExpectedHint: "Confirm you will inform the team." },
                            { aiPrompt: "Ensure they bring plenty of hydration. It's going to be hot.", aiPromptHindi: "सुनिश्चित करें कि वे खूब सारा पानी लाएँ। बहुत गर्मी होने वाली है।", aiExpectedHint: "Say you will ensure that." },
                            { aiPrompt: "Are the team jerseys washed and ready?", aiPromptHindi: "क्या टीम की जर्सी धुल कर तैयार है?", aiExpectedHint: "Say yes, they are collected." },
                            { aiPrompt: "Excellent. As the captain, I want you to keep their morale high.", aiPromptHindi: "बहुत बढ़िया। कप्तान के रूप में, मैं चाहता हूँ कि आप उनका मनोबल ऊंचा रखें।", aiExpectedHint: "Promise to motivate them." },
                            { aiPrompt: "I trust you to lead us to victory. Rest well tonight.", aiPromptHindi: "मुझे आप पर भरोसा है कि आप हमें जीत की ओर ले जाएंगे। आज रात अच्छी तरह आराम करें।", aiExpectedHint: "Say thank you and goodnight." }
                        ]
                    },
                    role2: {
                        name: "Coach (You) & Captain (AI)",
                        turns: [
                            { aiPrompt: "Good evening, Coach! All the players have arrived for the practice session.", aiPromptHindi: "शुभ संध्या, कोच! अभ्यास सत्र के लिए सभी खिलाड़ी आ चुके हैं।" , aiExpectedHint: "Tell the captain to start with warm-up exercises." },
                            { aiPrompt: "Understood, Coach. I'll make sure everyone runs two laps around the field first.", aiPromptHindi: "समझ गया, कोच। मैं सुनिश्चित करूंगा कि सभी पहले मैदान के दो चक्कर लगाएं।" , aiExpectedHint: "Praise the initiative and ask about the match strategy." }
                        ]
                    }
                },
                grammarTip: "Grammar Tip: Use 'We should...' to suggest team strategies."
            },
            {
                level: "Expert",
                title: "Explaining a delayed assignment to a professor",
                hindi: "प्रोफेसर को विलंबित असाइनमेंट के बारे में समझाना",
                roles: {
                    role1: {
                        name: "Student (You) & Professor (AI)",
                        turns: [
                            { aiPrompt: "Please come in. You wanted to speak to me about the essay deadline?", aiPromptHindi: "कृपया अंदर आएं। आप निबंध की समय सीमा के बारे में मुझसे बात करना चाहते थे?", aiExpectedHint: "Apologize and explain the delay." },
                            { aiPrompt: "I see. A medical emergency in the family is completely understandable.", aiPromptHindi: "मैं समझता हूँ। परिवार में मेडिकल इमरजेंसी पूरी तरह से समझ में आने वाली बात है।", aiExpectedHint: "Thank them for understanding." },
                            { aiPrompt: "However, the syllabus clearly states a penalty for late submissions. Are you aware?", aiPromptHindi: "हालाँकि, पाठ्यक्रम में देर से जमा करने पर दंड का स्पष्ट उल्लेख है। क्या आप अवगत हैं?", aiExpectedHint: "Acknowledge the rule." },
                            { aiPrompt: "When exactly do you think you can submit the final draft to me?", aiPromptHindi: "आपको क्या लगता है कि आप मुझे अंतिम ड्राफ्ट ठीक कब तक जमा कर सकते हैं?", aiExpectedHint: "Propose a strict deadline (e.g., tomorrow morning)." },
                            { aiPrompt: "Tomorrow morning is acceptable. What specific topic were you researching?", aiPromptHindi: "कल सुबह स्वीकार्य है। आप किस विशिष्ट विषय पर शोध कर रहे थे?", aiExpectedHint: "Mention a complex academic topic." },
                            { aiPrompt: "That is quite a challenging topic. Have you gathered all your sources?", aiPromptHindi: "यह काफी चुनौतीपूर्ण विषय है। क्या आपने अपने सभी स्रोत एकत्र कर लिए हैं?", aiExpectedHint: "Confirm you have all citations ready." },
                            { aiPrompt: "Ensure your bibliography follows the APA format strictly.", aiPromptHindi: "सुनिश्चित करें कि आपकी ग्रंथ सूची एपीए प्रारूप का सख्ती से पालन करती है।", aiExpectedHint: "Assure them you will check the formatting." },
                            { aiPrompt: "I will deduct 10% from the grade due to the delay. Is that fair?", aiPromptHindi: "देरी के कारण मैं ग्रेड से 10% काट लूंगा। क्या यह उचित है?", aiExpectedHint: "Accept the penalty gracefully." },
                            { aiPrompt: "Please email it to my university address directly by 9 AM.", aiPromptHindi: "कृपया इसे सुबह 9 बजे तक सीधे मेरे विश्वविद्यालय के पते पर ईमेल करें।", aiExpectedHint: "Confirm the instructions." },
                            { aiPrompt: "I appreciate you informing me personally. Take care of your family.", aiPromptHindi: "मुझे व्यक्तिगत रूप से सूचित करने के लिए मैं आपकी सराहना करता हूँ। अपने परिवार का ख्याल रखें।", aiExpectedHint: "Thank the professor and leave." }
                        ]
                    },
                    role2: {
                        name: "Professor (You) & Student (AI)",
                        turns: [
                            { aiPrompt: "Good morning, Professor. I am very sorry, but I won't be able to submit my report today.", aiPromptHindi: "सुप्रभात, प्रोफेसर। मुझे बहुत खेद है, लेकिन मैं आज अपनी रिपोर्ट जमा नहीं कर पाऊंगा।" , aiExpectedHint: "Ask the student why there is a delay." },
                            { aiPrompt: "I fell severely ill with a high fever over the weekend and couldn't complete the conclusion.", aiPromptHindi: "सप्ताहांत में मुझे तेज बुखार आ गया और मैं निष्कर्ष पूरा नहीं कर सका।" , aiExpectedHint: "Express concern, ask for a doctor's note, and set a new deadline." }
                        ]
                    }
                },
                grammarTip: "Grammar Tip: Use formal language ('I apologize', 'I appreciate') in academic settings."
            },
            {
                level: "Expert",
                title: "Debating a topic in a debate club",
                hindi: "वाद-विवाद क्लब में किसी विषय पर बहस करना",
                roles: {
                    role1: {
                        name: "Debater (You) & Opponent (AI)",
                        turns: [
                            { aiPrompt: "I believe that artificial intelligence will eventually replace human teachers. What is your stance?", aiPromptHindi: "मेरा मानना है कि कृत्रिम बुद्धिमत्ता अंततः मानव शिक्षकों की जगह ले लेगी। आपका क्या रुख है?", aiExpectedHint: "Disagree and state your thesis." },
                            { aiPrompt: "But AI can provide 24/7 personalized learning to students globally. Humans cannot do that.", aiPromptHindi: "लेकिन एआई वैश्विक स्तर पर छात्रों को 24/7 व्यक्तिगत शिक्षा प्रदान कर सकता है। इंसान ऐसा नहीं कर सकते।", aiExpectedHint: "Counter with the need for empathy." },
                            { aiPrompt: "Empathy is useful, but factual accuracy and speed of learning are more critical for success.", aiPromptHindi: "सहानुभूति उपयोगी है, लेकिन सफलता के लिए तथ्यात्मक सटीकता और सीखने की गति अधिक महत्वपूर्ण है।", aiExpectedHint: "Argue that education is about moral growth, not just facts." },
                            { aiPrompt: "Do you have any evidence that human teachers improve moral growth better than AI?", aiPromptHindi: "क्या आपके पास कोई सबूत है कि मानव शिक्षक एआई से बेहतर नैतिक विकास करते हैं?", aiExpectedHint: "Give an example of human mentorship." },
                            { aiPrompt: "What about the cost? AI software is much cheaper than hiring thousands of professors.", aiPromptHindi: "लागत के बारे में क्या? एआई सॉफ्टवेयर हजारों प्रोफेसरों को काम पर रखने की तुलना में बहुत सस्ता है।", aiExpectedHint: "Address the economic argument." },
                            { aiPrompt: "You say teachers inspire, but hasn't technology inspired millions of innovators?", aiPromptHindi: "आप कहते हैं कि शिक्षक प्रेरित करते हैं, लेकिन क्या तकनीक ने लाखों नवप्रवर्तकों को प्रेरित नहीं किया है?", aiExpectedHint: "Differentiate between a tool and a guide." },
                            { aiPrompt: "So, you view AI strictly as an assisting tool, not an independent educator?", aiPromptHindi: "तो, आप एआई को सख्ती से एक सहायक उपकरण के रूप में देखते हैं, न कि एक स्वतंत्र शिक्षक के रूप में?", aiExpectedHint: "Confirm and expand briefly." },
                            { aiPrompt: "If AI can handle grading and lectures, what exactly will the human teacher do?", aiPromptHindi: "यदि एआई ग्रेडिंग और व्याख्यान को संभाल सकता है, तो मानव शिक्षक वास्तव में क्या करेगा?", aiExpectedHint: "Explain the facilitation role." },
                            { aiPrompt: "I suppose a hybrid model where both work together is the most realistic outcome.", aiPromptHindi: "मुझे लगता है कि एक हाइब्रिड मॉडल जहां दोनों एक साथ काम करते हैं, सबसे यथार्थवादी परिणाम है।", aiExpectedHint: "Agree and conclude your argument." },
                            { aiPrompt: "It was a stimulating debate. Thank you for presenting your points so clearly.", aiPromptHindi: "यह एक उत्तेजक बहस थी। अपनी बातों को इतने स्पष्ट रूप से प्रस्तुत करने के लिए धन्यवाद।", aiExpectedHint: "Thank the opponent politely." }
                        ]
                    },
                    role2: {
                        name: "Opponent (You) & Debater (AI)",
                        turns: [
                            { aiPrompt: "I strongly argue that online learning is far more effective than traditional classroom education.", aiPromptHindi: "मैं कड़ाई से तर्क देता हूँ कि पारंपरिक कक्षा शिक्षा की तुलना में ऑनलाइन सीखना कहीं अधिक प्रभावी है।" , aiExpectedHint: "Counter argue that traditional classes build social and communication skills." },
                            { aiPrompt: "While social skills matter, online education saves travel time and offers flexible pacing.", aiPromptHindi: "जबकि सामाजिक कौशल मायने रखते हैं, ऑनलाइन शिक्षा यात्रा के समय को बचाती है और लचीली गति प्रदान करती है।" , aiExpectedHint: "Emphasize that lack of peer interaction can lead to isolation." }
                        ]
                    }
                },
                grammarTip: "Grammar Tip: Use phrases like 'On the contrary' or 'I firmly believe' for debates."
            },
            {
                level: "Medium",
                title: "Complaining about a noisy dorm mate",
                hindi: "हॉस्टल के शोरगुल वाले रूममेट के बारे में शिकायत करना",
                roles: {
                    role1: {
                        name: "Student (You) & Hostel Warden (AI)",
                        turns: [
                            { aiPrompt: "Good evening. You look stressed. Is everything alright in your dormitory?", aiPromptHindi: "शुभ संध्या। आप तनावग्रस्त लग रहे हैं। क्या आपके छात्रावास में सब ठीक है?", aiExpectedHint: "Say no and mention the noise." },
                            { aiPrompt: "I'm sorry to hear that. Who exactly is making the noise?", aiPromptHindi: "यह सुनकर मुझे खेद है। वास्तव में शोर कौन कर रहा है?", aiExpectedHint: "Name your roommate." },
                            { aiPrompt: "What kind of noise is it? Music, talking on the phone, or something else?", aiPromptHindi: "यह किस प्रकार का शोर है? संगीत, फोन पर बात करना, या कुछ और?", aiExpectedHint: "Explain they play loud music late at night." },
                            { aiPrompt: "Have you tried speaking to them directly about lowering the volume?", aiPromptHindi: "क्या आपने आवाज़ कम करने के बारे में उनसे सीधे बात करने की कोशिश की है?", aiExpectedHint: "Say yes, but they ignored you." },
                            { aiPrompt: "That is a violation of our hostel rules. Quiet hours start at 10 PM.", aiPromptHindi: "यह हमारे छात्रावास के नियमों का उल्लंघन है। शांत घंटे रात 10 बजे शुरू होते हैं।", aiExpectedHint: "Agree and say it's affecting your sleep." },
                            { aiPrompt: "I will speak to them tomorrow morning. Do you want me to issue a formal warning?", aiPromptHindi: "मैं कल सुबह उनसे बात करूंगा। क्या आप चाहते हैं कि मैं एक औपचारिक चेतावनी जारी करूँ?", aiExpectedHint: "Request a verbal warning first." },
                            { aiPrompt: "Okay, I will handle it diplomatically. How are your studies going otherwise?", aiPromptHindi: "ठीक है, मैं इसे कूटनीतिक तरीके से संभाल लूंगा। वैसे आपकी पढ़ाई कैसी चल रही है?", aiExpectedHint: "Say they are going well." },
                            { aiPrompt: "If the noise continues tonight, please call my mobile number immediately.", aiPromptHindi: "यदि आज रात भी शोर जारी रहता है, तो कृपया मेरे मोबाइल नंबर पर तुरंत कॉल करें।", aiExpectedHint: "Note the instruction and say okay." },
                            { aiPrompt: "Don't let this stress you out. We will get it sorted.", aiPromptHindi: "इससे खुद को तनाव में न डालें। हम इसे सुलझा लेंगे।", aiExpectedHint: "Thank the warden." },
                            { aiPrompt: "Have a peaceful night. You may go back to your room now.", aiPromptHindi: "आपकी रात शांतिपूर्ण हो। अब आप अपने कमरे में वापस जा सकते हैं।", aiExpectedHint: "Say goodnight and leave." }
                        ]
                    },
                    role2: {
                        name: "Hostel Warden (You) & Student (AI)",
                        turns: [
                            { aiPrompt: "Good evening, Warden. I need to report a problem with my roommate's late-night noise.", aiPromptHindi: "शुभ संध्या, वार्डन। मुझे अपने रूममेट के देर रात के शोर के बारे में शिकायत करनी है।" , aiExpectedHint: "Ask the student for their roommate's name and details of the noise." },
                            { aiPrompt: "His name is Rohan, and he plays video games with high speakers past midnight.", aiPromptHindi: "उस का नाम रोहन है, और वह आधी रात के बाद ऊंचे स्पीकर पर वीडियो गेम खेलता है।" , aiExpectedHint: "Promise to talk to Rohan regarding the hostel quiet hours." }
                        ]
                    }
                },
                grammarTip: "Grammar Tip: Use present continuous to describe ongoing annoyances (e.g., 'He is always playing music')."
            }
        ]
    },
    homemakers: {
        title: "Homemaker Mode 🏡",
        scenarios: [
            {
                level: "Basic",
                title: "Parent-Teacher Meeting at school",
                hindi: "स्कूल में टीचर से मिलना",
                roles: {
                    role1: {
                        name: "Parent (You) & Teacher (AI)",
                        turns: [
                            { aiPrompt: "Hello teacher, how is my child performing in class this term?", aiPromptHindi: "नमस्ते टीचर, इस टर्म में मेरा बच्चा कक्षा में कैसा प्रदर्शन कर रहा है?", aiExpectedHint: "Ask about academic progress." },
                            { aiPrompt: "Hello! Your child is doing quite well in math, but needs a bit more focus on reading.", aiPromptHindi: "नमस्ते! आपका बच्चा गणित में काफी अच्छा कर रहा है, लेकिन उसे पढ़ने पर थोड़ा और ध्यान देने की जरूरत है।", aiExpectedHint: "Acknowledge the feedback." },
                            { aiPrompt: "We are organizing an extra reading club. Would you like to enroll him?", aiPromptHindi: "हम एक अतिरिक्त रीडिंग क्लब आयोजित कर रहे हैं। क्या आप उसका नामांकन कराना चाहेंगे?", aiExpectedHint: "Ask about timings." },
                            { aiPrompt: "It runs from 3 PM to 4 PM every Tuesday and Thursday.", aiPromptHindi: "यह हर मंगलवार और गुरुवार को दोपहर 3 बजे से शाम 4 बजे तक चलता है।", aiExpectedHint: "Agree on the schedule." },
                            { aiPrompt: "Are there any specific topics at home where he struggles with homework?", aiPromptHindi: "क्या घर पर कोई ऐसे खास विषय हैं जहाँ उसे होमवर्क में परेशानी होती है?", aiExpectedHint: "Mention spelling or grammar." },
                            { aiPrompt: "I will share a few extra storybooks to help improve his vocabulary.", aiPromptHindi: "मैं उसकी शब्दावली को सुधारने में मदद करने के लिए कुछ अतिरिक्त कहानी की किताबें साझा करूंगी।", aiExpectedHint: "Express gratitude." },
                            { aiPrompt: "You are most welcome. Consistent practice at home makes a huge difference.", aiPromptHindi: "आपका स्वागत है। घर पर निरंतर अभ्यास से बहुत फर्क पड़ता है।", aiExpectedHint: "Agree to practice daily." },
                            { aiPrompt: "Shall we schedule our next review meeting for next month?", aiPromptHindi: "क्या हम अपनी अगली समीक्षा बैठक अगले महीने के लिए तय करें?", aiExpectedHint: "Confirm next month." },
                            { aiPrompt: "Thank you for taking the time to visit today. Have a wonderful afternoon!", aiPromptHindi: "आज आने के लिए समय निकालने के लिए धन्यवाद। आपकी दोपहर शुभ हो!", aiExpectedHint: "Say thank you and goodbye." },
                            { aiPrompt: "Goodbye! Take care.", aiPromptHindi: "अलविदा! अपना ख्याल रखें।", aiExpectedHint: "Say goodbye back." }
                        ]
                    },
                    role2: {
                        name: "Teacher (You) & Parent (AI)",
                        turns: [
                            { aiPrompt: "Hello! Thank you for coming to the parent-teacher meeting today.", aiPromptHindi: "नमस्ते! आज माता-पिता-शिक्षक बैठक में आने के लिए धन्यवाद।" , aiExpectedHint: "Greet the teacher and ask how your child is doing." },
                            { aiPrompt: "Your daughter is very polite, but she needs to speak up more during class discussions.", aiPromptHindi: "आपकी बेटी बहुत विनम्र है, लेकिन उसे कक्षा की चर्चाओं में अधिक खुलकर बोलने की जरूरत है।" , aiExpectedHint: "Acknowledge and say you will encourage her at home." }
                        ]
                    }
                },
                grammarTip: "Grammar Tip: Use 'How is he doing in...' to ask about performance."
            },
            {
                level: "Basic",
                title: "Negotiating prices at the vegetable market",
                hindi: "सब्जी मंडी में कीमतों पर मोलभाव करना",
                roles: {
                    role1: {
                        name: "Customer (You) & Vendor (AI)",
                        turns: [
                            { aiPrompt: "Fresh vegetables! Come look! What do you need today, madam?", aiPromptHindi: "ताज़ी सब्जियां! आओ देखो! मैडम, आज आपको क्या चाहिए?", aiExpectedHint: "Ask for potatoes and onions." },
                            { aiPrompt: "The potatoes are fifty rupees a kilo, and onions are sixty rupees a kilo.", aiPromptHindi: "आलू पचास रुपये किलो है, और प्याज साठ रुपये किलो।", aiExpectedHint: "Say that's too expensive." },
                            { aiPrompt: "Prices have gone up everywhere! How much do you want to pay?", aiPromptHindi: "हर जगह कीमतें बढ़ गई हैं! आप कितना भुगतान करना चाहते हैं?", aiExpectedHint: "Offer forty rupees for potatoes." },
                            { aiPrompt: "Forty is very low. I will give it to you for forty-five. How many kilos?", aiPromptHindi: "चालीस बहुत कम है। मैं आपको पैंतालीस में दे दूंगा। कितने किलो?", aiExpectedHint: "Ask for two kilos of potatoes." },
                            { aiPrompt: "Okay, two kilos of potatoes. And how about the onions?", aiPromptHindi: "ठीक है, दो किलो आलू। और प्याज के बारे में क्या?", aiExpectedHint: "Offer fifty rupees for onions." },
                            { aiPrompt: "Madam, I won't make any profit! Okay, fifty-five for the onions.", aiPromptHindi: "मैडम, मुझे कोई मुनाफा नहीं होगा! ठीक है, प्याज के लिए पचपन।", aiExpectedHint: "Agree to the price." },
                            { aiPrompt: "Great. Do you need any fresh coriander or green chilies?", aiPromptHindi: "बढ़िया। क्या आपको ताजा धनिया या हरी मिर्च चाहिए?", aiExpectedHint: "Ask for some free chilies." },
                            { aiPrompt: "Haha, you drive a hard bargain! I will put a few chilies for free.", aiPromptHindi: "हाहा, आप बहुत मोलभाव करती हैं! मैं कुछ मिर्च मुफ्त में डाल दूंगा।", aiExpectedHint: "Thank the vendor." },
                            { aiPrompt: "Your total is one hundred and forty-five rupees, please.", aiPromptHindi: "आपका कुल एक सौ पैंतालीस रुपये है, कृपया।", aiExpectedHint: "Hand over the money." },
                            { aiPrompt: "Here is your change and your bags. Come again soon!", aiPromptHindi: "यह रहा आपका छु्ट्टा और आपके बैग। जल्दी ही फिर आएं!", aiExpectedHint: "Say goodbye." }
                        ]
                    },
                    role2: {
                        name: "Vendor (You) & Customer (AI)",
                        turns: [
                            { aiPrompt: "Hello, bhaiya! Do you have fresh tomatoes and carrots today? How much for a kilo?", aiPromptHindi: "नमस्ते, भैया! क्या आज आपके पास ताजे टमाटर और गाजर हैं? एक किलो का क्या भाव है?" , aiExpectedHint: "State the price of tomatoes and carrots." },
                            { aiPrompt: "Tomatoes are forty rupees a kilo. They are freshly picked from the farm. Can you give them for thirty-five?", aiPromptHindi: "टमाटर चालीस रुपये किलो हैं। इन्हें खेत से ताजा तोड़ा गया है। क्या आप इन्हें पैंतीस में दे सकते हैं?" , aiExpectedHint: "Respond to the bargain, offering forty or thirty-eight rupees." }
                        ]
                    }
                },
                grammarTip: "Grammar Tip: Use 'Can you give it for...' to negotiate prices."
            },
            {
                level: "Medium",
                title: "Calling a plumber for a leaking pipe",
                hindi: "पाइप लीक होने पर प्लंबर को बुलाना",
                roles: {
                    role1: {
                        name: "Homeowner (You) & Plumber (AI)",
                        turns: [
                            { aiPrompt: "Hello, Sharma Plumbing Services. How can I help you?", aiPromptHindi: "नमस्ते, शर्मा प्लंबिंग सर्विसेज। मैं आपकी कैसे मदद कर सकता हूँ?", aiExpectedHint: "Explain the leak in the kitchen." },
                            { aiPrompt: "A leak in the kitchen sink? Is the water flooding the floor right now?", aiPromptHindi: "रसोई के सिंक में रिसाव? क्या अभी फर्श पर पानी भर रहा है?", aiExpectedHint: "Say yes, it's a big leak." },
                            { aiPrompt: "Please turn off the main water valve immediately. Do you know where it is?", aiPromptHindi: "कृपया तुरंत मुख्य पानी का वाल्व बंद कर दें। क्या आप जानते हैं कि यह कहाँ है?", aiExpectedHint: "Say you have turned it off." },
                            { aiPrompt: "Good. I can send someone over in about an hour. Will you be home?", aiPromptHindi: "अच्छा। मैं लगभग एक घंटे में किसी को भेज सकता हूँ। क्या आप घर पर होंगे?", aiExpectedHint: "Confirm you are at home." },
                            { aiPrompt: "Please send me your full address on WhatsApp.", aiPromptHindi: "कृपया मुझे व्हाट्सएप पर अपना पूरा पता भेजें।", aiExpectedHint: "Agree to text the address." },
                            { aiPrompt: "Just to give an estimate, checking the pipe will cost two hundred rupees as a visiting charge.", aiPromptHindi: "सिर्फ एक अनुमान देने के लिए, पाइप की जांच करने में विज़िटिंग चार्ज के रूप में दो सौ रुपये लगेंगे।", aiExpectedHint: "Agree to the visiting charge." },
                            { aiPrompt: "Any spare parts needed will be extra. Do you need me to bring any specific pipes?", aiPromptHindi: "आवश्यक कोई भी स्पेयर पार्ट्स अतिरिक्त होंगे। क्या आपको मुझे कोई विशिष्ट पाइप लाने की आवश्यकता है?", aiExpectedHint: "Say bring standard PVC pipes." },
                            { aiPrompt: "Got it. My mechanic Raju is leaving the workshop now.", aiPromptHindi: "समझ गया। मेरा मैकेनिक राजू अब वर्कशॉप से निकल रहा है।", aiExpectedHint: "Ask for his phone number." },
                            { aiPrompt: "His number is 98765-43210. He will call you when he reaches your building.", aiPromptHindi: "उनका नंबर 98765-43210 है। जब वह आपकी बिल्डिंग में पहुंचेंगे तो आपको फोन करेंगे।", aiExpectedHint: "Note the number and thank them." },
                            { aiPrompt: "You're welcome. Don't worry, we will get it fixed today.", aiPromptHindi: "आपका स्वागत है। चिंता न करें, हम इसे आज ही ठीक कर देंगे।", aiExpectedHint: "Hang up politely." }
                        ]
                    },
                    role2: {
                        name: "Plumber (You) & Homeowner (AI)",
                        turns: [
                            { aiPrompt: "Hello, is this the plumbing service? My bathroom tap is leaking heavily.", aiPromptHindi: "नमस्ते, क्या यह प्लंबिंग सेवा है? मेरे बाथरूम का नल बहुत लीक हो रहा है।" , aiExpectedHint: "Acknowledge the issue and ask for their address." },
                            { aiPrompt: "I live at Flat 402, Green Valley Apartments. Can you come today?", aiPromptHindi: "मैं फ्लैट 402, ग्रीन वैली अपार्टमेंट्स में रहती हूँ। क्या आप आज आ सकते हैं?" , aiExpectedHint: "Confirm arrival time within two hours." }
                        ]
                    }
                },
                grammarTip: "Grammar Tip: Use 'The [item] is leaking/broken' to describe household issues."
            },
            {
                level: "Basic",
                title: "Booking a doctor's appointment",
                hindi: "डॉक्टर की अपॉइंटमेंट बुक करना",
                roles: {
                    role1: {
                        name: "Patient (You) & Receptionist (AI)",
                        turns: [
                            { aiPrompt: "Good morning, City Clinic. How may I assist you today?", aiPromptHindi: "सुप्रभात, सिटी क्लिनिक। आज मैं आपकी कैसे सहायता कर सकती हूँ?", aiExpectedHint: "Request an appointment with the doctor." },
                            { aiPrompt: "Have you visited Dr. Kapoor before, or is this your first time?", aiPromptHindi: "क्या आप पहले डॉ. कपूर के पास गए हैं, या यह आपकी पहली बार है?", aiExpectedHint: "State it's your first time." },
                            { aiPrompt: "Alright. Could you please tell me your full name and age?", aiPromptHindi: "ठीक है। क्या आप कृपया मुझे अपना पूरा नाम और उम्र बता सकते हैं?", aiExpectedHint: "Provide your name and age." },
                            { aiPrompt: "Thank you. And what symptoms are you experiencing?", aiPromptHindi: "धन्यवाद। और आप किन लक्षणों का अनुभव कर रहे हैं?", aiExpectedHint: "Mention a fever and cough." },
                            { aiPrompt: "Dr. Kapoor has availability this evening at 6 PM or tomorrow at 10 AM. Which suits you?", aiPromptHindi: "डॉ. कपूर आज शाम 6 बजे या कल सुबह 10 बजे उपलब्ध हैं। आपको कौन सा समय अनुकूल है?", aiExpectedHint: "Choose the evening slot." },
                            { aiPrompt: "6 PM is booked for you. Please arrive 10 minutes early to fill out a registration form.", aiPromptHindi: "शाम 6 बजे आपके लिए बुक किया गया है। पंजीकरण फॉर्म भरने के लिए कृपया 10 मिनट पहले आएं।", aiExpectedHint: "Say okay, I will." },
                            { aiPrompt: "The consultation fee is five hundred rupees. You can pay at the desk.", aiPromptHindi: "परामर्श शुल्क पांच सौ रुपये है। आप डेस्क पर भुगतान कर सकते हैं।", aiExpectedHint: "Acknowledge the fee." },
                            { aiPrompt: "Do you have any prior medical records we should know about?", aiPromptHindi: "क्या आपके पास कोई पूर्व चिकित्सा रिकॉर्ड है जिसके बारे में हमें पता होना चाहिए?", aiExpectedHint: "Say no." },
                            { aiPrompt: "Okay, everything is set. You will receive an SMS confirmation shortly.", aiPromptHindi: "ठीक है, सब कुछ तय हो गया है। आपको शीघ्र ही एक एसएमएस पुष्टिकरण प्राप्त होगा।", aiExpectedHint: "Thank the receptionist." },
                            { aiPrompt: "Wishing you a speedy recovery. See you this evening.", aiPromptHindi: "आपके शीघ्र स्वस्थ होने की कामना करती हूँ। आज शाम मिलते हैं।", aiExpectedHint: "Say goodbye." }
                        ]
                    },
                    role2: {
                        name: "Receptionist (You) & Patient (AI)",
                        turns: [
                            { aiPrompt: "Hello, I would like to book an appointment with Dr. Mehta for tomorrow.", aiPromptHindi: "नमस्ते, मैं कल के लिए डॉ. मेहता के साथ एक अपॉइंटमेंट बुक करना चाहती हूँ।" , aiExpectedHint: "Ask for their preferred time slot." },
                            { aiPrompt: "Morning is better, around 11 AM if possible.", aiPromptHindi: "सुबह का समय बेहतर है, यदि संभव हो तो सुबह 11 बजे।" , aiExpectedHint: "Confirm the slot and ask for their name and phone number." }
                        ]
                    }
                },
                grammarTip: "Grammar Tip: Use 'I would like to book an appointment with...'."
            },
            {
                level: "Medium",
                title: "Discussing a holiday plan with family",
                hindi: "परिवार के साथ छुट्टियों की योजना पर चर्चा करना",
                roles: {
                    role1: {
                        name: "You & Spouse (AI)",
                        turns: [
                            { aiPrompt: "The kids have their summer vacation next month. Should we plan a trip?", aiPromptHindi: "अगले महीने बच्चों की गर्मी की छुट्टियां हैं। क्या हमें यात्रा की योजना बनानी चाहिए?", aiExpectedHint: "Say yes, it's a great idea." },
                            { aiPrompt: "Where do you think we should go? To the mountains or the beach?", aiPromptHindi: "आपको क्या लगता है हमें कहाँ जाना चाहिए? पहाड़ों पर या समुद्र तट पर?", aiExpectedHint: "Suggest going to the mountains." },
                            { aiPrompt: "The mountains sound relaxing! Manali or Shimla, what do you prefer?", aiPromptHindi: "पहाड़ सुकून देने वाले लगते हैं! मनाली या शिमला, आपको क्या पसंद है?", aiExpectedHint: "Choose Manali for better weather." },
                            { aiPrompt: "Manali is quite far. Are we going by train, flight, or driving?", aiPromptHindi: "मनाली काफी दूर है। क्या हम ट्रेन, फ्लाइट से जा रहे हैं या ड्राइव कर रहे हैं?", aiExpectedHint: "Suggest taking a flight." },
                            { aiPrompt: "Flights will save time, but they might be expensive. Have you checked the budget?", aiPromptHindi: "फ्लाइट से समय बचेगा, लेकिन वे महंगी हो सकती हैं। क्या आपने बजट की जांच की है?", aiExpectedHint: "Say you will check flight prices today." },
                            { aiPrompt: "Okay, please check. How many days should we stay there?", aiPromptHindi: "ठीक है, कृपया जांचें। हमें वहां कितने दिन रुकना चाहिए?", aiExpectedHint: "Suggest a five-day trip." },
                            { aiPrompt: "Five days is perfect. We need to book a family-friendly hotel too.", aiPromptHindi: "पांच दिन बिल्कुल सही है। हमें एक परिवार के अनुकूल होटल भी बुक करना होगा।", aiExpectedHint: "Say you will find a hotel with a pool." },
                            { aiPrompt: "The kids will love a swimming pool! Should we ask your parents to join us?", aiPromptHindi: "बच्चों को स्विमिंग पूल बहुत पसंद आएगा! क्या हमें आपके माता-पिता को हमारे साथ जुड़ने के लिए कहना चाहिए?", aiExpectedHint: "Agree, it will be fun." },
                            { aiPrompt: "I will call them tonight to ask. This is going to be a wonderful trip.", aiPromptHindi: "पूछने के लिए मैं उन्हें आज रात फोन करूंगा। यह एक शानदार यात्रा होने वाली है।", aiExpectedHint: "Express excitement." },
                            { aiPrompt: "Let's sit down with the laptop after dinner to finalize the bookings.", aiPromptHindi: "बुकिंग को अंतिम रूप देने के लिए रात के खाने के बाद लैपटॉप लेकर बैठते हैं।", aiExpectedHint: "Agree to the plan." }
                        ]
                    },
                    role2: {
                        name: "Spouse (You) & You (AI)",
                        turns: [
                            { aiPrompt: "Honey, should we plan a weekend getaway to Goa next month?", aiPromptHindi: "डियर, क्या हमें अगले महीने गोवा के लिए सप्ताहांत की यात्रा की योजना बनानी चाहिए?" , aiExpectedHint: "Respond and suggest checking hotel options first." },
                            { aiPrompt: "I will check online hotel bookings right now. Do you want a resort near the beach?", aiPromptHindi: "मैं अभी ऑनलाइन होटल बुकिंग चेक करती हूँ। क्या आप समुद्र तट के पास कोई रिजॉर्ट चाहते हैं?" , aiExpectedHint: "Say yes, a beach resort would be wonderful." }
                        ]
                    }
                },
                grammarTip: "Grammar Tip: Use 'Should we...' to make suggestions collaboratively."
            },
            {
                level: "Expert",
                title: "Complaining to customer service about an appliance",
                hindi: "उपकरण के बारे में ग्राहक सेवा से शिकायत करना",
                roles: {
                    role1: {
                        name: "Customer (You) & Support Agent (AI)",
                        turns: [
                            { aiPrompt: "Thank you for calling Elite Electronics. My name is Rohan. How can I help?", aiPromptHindi: "एलीट इलेक्ट्रॉनिक्स को कॉल करने के लिए धन्यवाद। मेरा नाम रोहन है। मैं कैसे मदद कर सकता हूँ?", aiExpectedHint: "Complain about a newly bought washing machine." },
                            { aiPrompt: "I apologize for the inconvenience. What seems to be the exact issue with the machine?", aiPromptHindi: "असुविधा के लिए मैं क्षमा चाहता हूँ। मशीन में वास्तव में क्या समस्या आ रही है?", aiExpectedHint: "Say it makes a loud noise and stops." },
                            { aiPrompt: "That definitely shouldn't happen. Can you provide the model number and date of purchase?", aiPromptHindi: "ऐसा निश्चित रूप से नहीं होना चाहिए। क्या आप मॉडल नंबर और खरीद की तारीख प्रदान कर सकते हैं?", aiExpectedHint: "Provide dummy details." },
                            { aiPrompt: "Thank you. Since it's under warranty, I can send a technician. Are you available tomorrow?", aiPromptHindi: "धन्यवाद। चूंकि यह वारंटी के अधीन है, मैं एक तकनीशियन भेज सकता हूँ। क्या आप कल उपलब्ध हैं?", aiExpectedHint: "Say tomorrow morning is fine." },
                            { aiPrompt: "I have booked a slot between 10 AM and 12 PM. Will that work?", aiPromptHindi: "मैंने सुबह 10 बजे से दोपहर 12 बजे के बीच एक स्लॉट बुक किया है। क्या वह ठीक रहेगा?", aiExpectedHint: "Confirm the time." },
                            { aiPrompt: "If the technician cannot repair it on-site, we might need to replace the unit.", aiPromptHindi: "यदि तकनीशियन इसे साइट पर ठीक नहीं कर सकता है, तो हमें यूनिट को बदलना पड़ सकता है।", aiExpectedHint: "Ask how long replacement takes." },
                            { aiPrompt: "Replacements usually take 3 to 5 business days to be delivered.", aiPromptHindi: "प्रतिस्थापन को वितरित होने में आमतौर पर 3 से 5 व्यावसायिक दिन लगते हैं।", aiExpectedHint: "Express dissatisfaction with the delay." },
                            { aiPrompt: "I completely understand your frustration. I will mark this ticket as high priority.", aiPromptHindi: "मैं आपकी निराशा को पूरी तरह से समझता हूँ। मैं इस टिकट को उच्च प्राथमिकता के रूप में चिह्नित करूंगा।", aiExpectedHint: "Thank them for helping." },
                            { aiPrompt: "Your complaint reference number is 77894. Please keep it handy.", aiPromptHindi: "आपकी शिकायत संदर्भ संख्या 77894 है। कृपया इसे संभाल कर रखें।", aiExpectedHint: "Note the number." },
                            { aiPrompt: "Is there anything else I can assist you with today?", aiPromptHindi: "क्या आज मैं आपकी किसी और चीज़ में सहायता कर सकता हूँ?", aiExpectedHint: "Say no and end the call." }
                        ]
                    },
                    role2: {
                        name: "Support Agent (You) & Customer (AI)",
                        turns: [
                            { aiPrompt: "Thank you for calling Home Appliances Support. My name is Priya. How may I assist you?", aiPromptHindi: "होम अप्लायंसेज सपोर्ट पर कॉल करने के लिए धन्यवाद। मेरा नाम प्रिया है। मैं आपकी कैसे सहायता कर सकती हूँ?" , aiExpectedHint: "Complain that your microwave oven is not heating." },
                            { aiPrompt: "I am sorry to hear that. Could you please share your appliance model number?", aiPromptHindi: "यह सुनकर मुझे खेद है। क्या आप कृपया अपने उपकरण का मॉडल नंबर साझा कर सकती हैं?" , aiExpectedHint: "Provide the model number and ask for a service engineer visit." }
                        ]
                    }
                },
                grammarTip: "Grammar Tip: Use formal phrasing like 'I am calling to register a complaint regarding...'."
            },
            {
                level: "Medium",
                title: "Instructing a domestic helper about daily chores",
                hindi: "घरेलू सहायिका को रोज़मर्रा के कामों के बारे में निर्देश देना",
                roles: {
                    role1: {
                        name: "Employer (You) & Helper (AI)",
                        turns: [
                            { aiPrompt: "Good morning, Didi. I have arrived. What should I start with today?", aiPromptHindi: "सुप्रभात, दीदी। मैं आ गई हूँ। आज मुझे किससे शुरुआत करनी चाहिए?", aiExpectedHint: "Ask them to sweep the floor first." },
                            { aiPrompt: "Okay, I will sweep the floors. Do you want me to mop the balcony too?", aiPromptHindi: "ठीक है, मैं फर्श पर झाड़ू लगाऊंगी। क्या आप चाहते हैं कि मैं बालकनी में भी पोछा लगाऊँ?", aiExpectedHint: "Say yes, it is very dusty." },
                            { aiPrompt: "I noticed we are running out of floor cleaner. Should I use the dish soap?", aiPromptHindi: "मैंने देखा कि हमारा फ्लोर क्लीनर खत्म हो रहा है। क्या मैं डिश सोप का इस्तेमाल करूँ?", aiExpectedHint: "Say no, just use water today." },
                            { aiPrompt: "Understood. What about the clothes? Should I put them in the washing machine?", aiPromptHindi: "समझ गई। कपड़ों का क्या? क्या मुझे उन्हें वाशिंग मशीन में डालना चाहिए?", aiExpectedHint: "Tell them to wash whites separately." },
                            { aiPrompt: "Yes, I will separate the whites. Should I hang them on the terrace to dry?", aiPromptHindi: "हाँ, मैं सफेद कपड़ों को अलग कर दूंगी। क्या मैं उन्हें सूखने के लिए छत पर टांग दूँ?", aiExpectedHint: "Say yes, the sun is out." },
                            { aiPrompt: "I will do that. For lunch, what vegetables should I chop?", aiPromptHindi: "मैं वह कर दूंगी। दोपहर के भोजन के लिए, मुझे कौन सी सब्जियां काटनी चाहिए?", aiExpectedHint: "Ask them to chop tomatoes and onions." },
                            { aiPrompt: "Should I cut them finely for a gravy or large for a salad?", aiPromptHindi: "क्या मुझे उन्हें ग्रेवी के लिए बारीक काटना चाहिए या सलाद के लिए बड़ा?", aiExpectedHint: "Say finely for gravy." },
                            { aiPrompt: "Okay, I will prep the vegetables. I also cleaned the kitchen slab.", aiPromptHindi: "ठीक है, मैं सब्जियां तैयार कर दूंगी। मैंने रसोई की स्लैब भी साफ कर दी है।", aiExpectedHint: "Acknowledge and thank them." },
                            { aiPrompt: "Do you need me to stay late today? I have to pick up my child.", aiPromptHindi: "क्या आपको आज मुझे देर तक रोकने की आवश्यकता है? मुझे अपने बच्चे को लेने जाना है।", aiExpectedHint: "Say no, you can leave on time." },
                            { aiPrompt: "Thank you, Didi. Let me start the sweeping now.", aiPromptHindi: "धन्यवाद, दीदी। मुझे अब झाड़ू लगाना शुरू करने दें।", aiExpectedHint: "Say okay and let them work." }
                        ]
                    },
                    role2: {
                        name: "Helper (You) & Employer (AI)",
                        turns: [
                            { aiPrompt: "Good morning! Please clean the living room windows and dust the furniture first today.", aiPromptHindi: "सुप्रभात! कृपया आज पहले लिविंग रूम की खिड़कियों को साफ करें और फर्नीचर पर धूल हटाएं।" , aiExpectedHint: "Acknowledge the instruction and ask if the clothes need washing." },
                            { aiPrompt: "Yes, wash the dark clothes in the machine after you finish the dusting.", aiPromptHindi: "हाँ, धूल झाड़ने का काम पूरा करने के बाद मशीन में गहरे रंग के कपड़े धो लें।" , aiExpectedHint: "Confirm and say you will start right away." }
                        ]
                    }
                },
                grammarTip: "Grammar Tip: Use polite imperatives like 'Please make sure to...'."
            },
            {
                level: "Expert",
                title: "Opening a new savings account at the bank",
                hindi: "बैंक में नया बचत खाता खोलना",
                roles: {
                    role1: {
                        name: "Customer (You) & Bank Teller (AI)",
                        turns: [
                            { aiPrompt: "Welcome to State Bank. How can I help you today, Ma'am?", aiPromptHindi: "स्टेट बैंक में आपका स्वागत है। आज मैं आपकी क्या मदद कर सकता हूँ, मैडम?", aiExpectedHint: "Say you want to open a savings account." },
                            { aiPrompt: "Sure. Do you have your Aadhaar card, PAN card, and two passport-size photos with you?", aiPromptHindi: "ज़रूर। क्या आपके पास अपना आधार कार्ड, पैन कार्ड और दो पासपोर्ट आकार के फोटो हैं?", aiExpectedHint: "Say yes and hand them over." },
                            { aiPrompt: "Thank you. Let me give you the account opening form. Would you like a single or joint account?", aiPromptHindi: "धन्यवाद। मैं आपको खाता खोलने का फॉर्म देता हूँ। क्या आप एकल या संयुक्त खाता चाहेंगे?", aiExpectedHint: "Say single account." },
                            { aiPrompt: "For a single account, you need to nominate a beneficiary. Who will be your nominee?", aiPromptHindi: "एकल खाते के लिए, आपको एक लाभार्थी को नामित करना होगा। आपका नामांकित व्यक्ति कौन होगा?", aiExpectedHint: "Nominate your spouse or child." },
                            { aiPrompt: "Please fill in their details in Section B. Do you want a debit card and cheque book?", aiPromptHindi: "कृपया अनुभाग बी में उनका विवरण भरें। क्या आप डेबिट कार्ड और चेक बुक चाहते हैं?", aiExpectedHint: "Request both." },
                            { aiPrompt: "The debit card has an annual maintenance fee of two hundred rupees. Is that okay?", aiPromptHindi: "डेबिट कार्ड का वार्षिक रखरखाव शुल्क दो सौ रुपये है। क्या वह ठीक है?", aiExpectedHint: "Agree to the fee." },
                            { aiPrompt: "Please sign in these three boxes. You need to make an initial deposit of minimum one thousand rupees.", aiPromptHindi: "कृपया इन तीन बॉक्स में हस्ताक्षर करें। आपको न्यूनतम एक हजार रुपये की प्रारंभिक जमा राशि जमा करनी होगी।", aiExpectedHint: "Hand over the cash." },
                            { aiPrompt: "Thank you. Your account will be activated in 24 hours. Your passbook is printing.", aiPromptHindi: "धन्यवाद। आपका खाता 24 घंटे में सक्रिय हो जाएगा। आपकी पासबुक प्रिंट हो रही है।", aiExpectedHint: "Ask about internet banking." },
                            { aiPrompt: "Yes, you can register for internet banking online using your debit card details tomorrow.", aiPromptHindi: "हां, आप कल अपने डेबिट कार्ड विवरण का उपयोग करके ऑनलाइन इंटरनेट बैंकिंग के लिए पंजीकरण कर सकते हैं।", aiExpectedHint: "Thank the teller." },
                            { aiPrompt: "Here is your passbook and receipt. Have a great day ahead!", aiPromptHindi: "यहाँ आपकी पासबुक और रसीद है। आपका दिन शुभ हो!", aiExpectedHint: "Say goodbye." }
                        ]
                    },
                    role2: {
                        name: "Bank Teller (You) & Customer (AI)",
                        turns: [
                            { aiPrompt: "Hello, I want to open a new savings account with this bank.", aiPromptHindi: "नमस्ते, मैं इस बैंक में एक नया बचत खाता खोलना चाहती हूँ।" , aiExpectedHint: "Welcome them and ask for identification documents like Aadhaar and PAN." },
                            { aiPrompt: "Here are my Aadhaar card and PAN card photocopies.", aiPromptHindi: "यह मेरे आधार कार्ड और पैन कार्ड की फोटोकॉपी हैं।" , aiExpectedHint: "Thank them, hand over the application form, and ask for a passport photo." }
                        ]
                    }
                },
                grammarTip: "Grammar Tip: Learn banking vocabulary like 'nominee', 'deposit', and 'joint account'."
            },
            {
                level: "Medium",
                title: "Chatting with a neighbor about security",
                hindi: "पड़ोसी के साथ सुरक्षा के बारे में बातचीत करना",
                roles: {
                    role1: {
                        name: "Resident (You) & Neighbor (AI)",
                        turns: [
                            { aiPrompt: "Hi there! I didn't see you at the society meeting yesterday. Everything okay?", aiPromptHindi: "नमस्ते! मैंने कल आपको सोसाइटी की बैठक में नहीं देखा। सब ठीक है?", aiExpectedHint: "Say you were busy." },
                            { aiPrompt: "We discussed hiring a new night guard for our building. Did you hear about the recent thefts?", aiPromptHindi: "हमने अपने भवन के लिए एक नया रात का गार्ड रखने पर चर्चा की। क्या आपने हाल की चोरियों के बारे में सुना?", aiExpectedHint: "Express shock and ask where." },
                            { aiPrompt: "Yes, in the next lane! Someone stole two bicycles and a car battery.", aiPromptHindi: "हाँ, अगली गली में! किसी ने दो साइकिलें और एक कार की बैटरी चुरा ली।", aiExpectedHint: "Agree that security is important." },
                            { aiPrompt: "The committee is proposing we install CCTV cameras on every floor. What do you think?", aiPromptHindi: "समिति का प्रस्ताव है कि हम हर मंजिल पर सीसीटीवी कैमरे लगाएं। आपको क्या लगता है?", aiExpectedHint: "Support the idea." },
                            { aiPrompt: "It will cost each flat around two thousand rupees as a one-time contribution.", aiPromptHindi: "एकमुश्त योगदान के रूप में प्रत्येक फ्लैट की लागत लगभग दो हजार रुपये होगी।", aiExpectedHint: "Say the amount is reasonable." },
                            { aiPrompt: "I think so too. We also need to restrict delivery boys from coming up to the floors.", aiPromptHindi: "मुझे भी ऐसा लगता है। हमें डिलीवरी बॉयज को भी मंजिलों तक आने से रोकने की जरूरत है।", aiExpectedHint: "Suggest they leave parcels at the gate." },
                            { aiPrompt: "Exactly! Leave parcels at the security desk. Should we tell the secretary today?", aiPromptHindi: "बिल्कुल! पार्सल सिक्योरिटी डेस्क पर छोड़ दें। क्या हमें आज सेक्रेटरी को बताना चाहिए?", aiExpectedHint: "Agree to tell the secretary." },
                            { aiPrompt: "I'll message him on the WhatsApp group. Can you back me up?", aiPromptHindi: "मैं उसे व्हाट्सएप ग्रुप पर मैसेज करूंगा। क्या आप मेरा समर्थन कर सकते हैं?", aiExpectedHint: "Say you will reply to the message." },
                            { aiPrompt: "Great! Let's make our building safer for the kids. Anyway, how is your family?", aiPromptHindi: "बढ़िया! आइए अपने भवन को बच्चों के लिए अधिक सुरक्षित बनाएं। वैसे, आपका परिवार कैसा है?", aiExpectedHint: "Say everyone is good." },
                            { aiPrompt: "Glad to hear. I'll see you around! Take care.", aiPromptHindi: "सुनकर खुशी हुई। फिर मिलेंगे! अपना ख्याल रखना।", aiExpectedHint: "Say bye." }
                        ]
                    },
                    role2: {
                        name: "Neighbor (You) & Resident (AI)",
                        turns: [
                            { aiPrompt: "Hello! Did you hear about the new security rules proposed for our apartment complex?", aiPromptHindi: "नमस्ते! क्या आपने हमारे अपार्टमेंट कॉम्प्लेक्स के लिए प्रस्तावित नए सुरक्षा नियमों के बारे में सुना?" , aiExpectedHint: "Ask what kind of rules are being proposed." },
                            { aiPrompt: "They want to install biometric entry gates and restrict unknown visitors after 8 PM.", aiPromptHindi: "वे बायोमेट्रिक एंट्री गेट लगाना चाहते हैं और रात 8 बजे के बाद अज्ञात आगंतुकों को प्रतिबंधित करना चाहते हैं।" , aiExpectedHint: "Agree that it is a very good step for safety." }
                        ]
                    }
                },
                grammarTip: "Grammar Tip: Use phrases like 'I completely agree' or 'That sounds reasonable'."
            },
            {
                level: "Basic",
                title: "Planning a dinner party menu with a friend",
                hindi: "एक दोस्त के साथ डिनर पार्टी मेनू की योजना बनाना",
                roles: {
                    role1: {
                        name: "Host (You) & Friend (AI)",
                        turns: [
                            { aiPrompt: "I am so excited for the dinner party this Saturday! Have you decided the menu yet?", aiPromptHindi: "मैं इस शनिवार डिनर पार्टी के लिए बहुत उत्साहित हूँ! क्या आपने अभी तक मेनू तय किया है?", aiExpectedHint: "Say no, I need your help." },
                            { aiPrompt: "Of course! Let's start with starters. Should we do paneer tikka or spring rolls?", aiPromptHindi: "बिल्कुल! चलिए स्टार्टर्स से शुरू करते हैं। क्या हम पनीर टिक्का बनाएं या स्प्रिंग रोल?", aiExpectedHint: "Choose paneer tikka." },
                            { aiPrompt: "Yum. For the main course, I think a rich Dal Makhani would be perfect.", aiPromptHindi: "स्वादिष्ट। मुख्य पाठ्यक्रम के लिए, मुझे लगता है कि एक समृद्ध दाल मखनी एकदम सही होगी।", aiExpectedHint: "Agree and suggest a vegetable dish." },
                            { aiPrompt: "Mixed vegetable curry sounds great. Should we serve naan or just rice?", aiPromptHindi: "मिश्रित सब्जी करी बहुत अच्छी लगती है। क्या हम नान परोसें या सिर्फ चावल?", aiExpectedHint: "Suggest both." },
                            { aiPrompt: "Okay, both it is. Do we have any guests who can't eat spicy food?", aiPromptHindi: "ठीक है, दोनों रहेंगे। क्या हमारे पास कोई ऐसे मेहमान हैं जो तीखा खाना नहीं खा सकते?", aiExpectedHint: "Mention one person." },
                            { aiPrompt: "I'll remember to keep the chili low in the curry. What about dessert?", aiPromptHindi: "मैं करी में मिर्च कम रखना याद रखूंगी। मिठाई के बारे में क्या?", aiExpectedHint: "Suggest Gulab Jamun." },
                            { aiPrompt: "Gulab Jamun with some vanilla ice cream! Everyone will love that.", aiPromptHindi: "कुछ वेनिला आइसक्रीम के साथ गुलाब जामुन! यह सभी को पसंद आएगा।", aiExpectedHint: "Agree happily." },
                            { aiPrompt: "Should I come over early on Saturday to help you chop the vegetables?", aiPromptHindi: "क्या मैं शनिवार को सब्जियां काटने में आपकी मदद करने के लिए जल्दी आ जाऊँ?", aiExpectedHint: "Accept the help graciously." },
                            { aiPrompt: "Great, I'll be there by 4 PM. We can cook and chat together.", aiPromptHindi: "बढ़िया, मैं शाम 4 बजे तक वहाँ पहुँच जाऊँगी। हम एक साथ खाना बना सकते हैं और गपशप कर सकते हैं।", aiExpectedHint: "Express excitement." },
                            { aiPrompt: "It's going to be a fun night. See you on Saturday!", aiPromptHindi: "यह एक मजेदार रात होने वाली है। शनिवार को मिलते हैं!", aiExpectedHint: "Say goodbye." }
                        ]
                    },
                    role2: {
                        name: "Friend (You) & Host (AI)",
                        turns: [
                            { aiPrompt: "Hey! I am helping you plan the weekend birthday party menu. What are you thinking?", aiPromptHindi: "अरे! मैं सप्ताहांत की जन्मदिन पार्टी के मेनू की योजना बनाने में आपकी मदद कर रहा हूँ। आप क्या सोच रहे हैं?" , aiExpectedHint: "Suggest starting with snacks like samosas and sandwiches." },
                            { aiPrompt: "Samosas and sandwiches are great finger foods! What about the main dishes?", aiPromptHindi: "समोज़ा और सैंडविच बढ़िया फिंगर फूड हैं! मुख्य व्यंजनों के बारे में क्या?" , aiExpectedHint: "Suggest biryani and raita for the main course." }
                        ]
                    }
                },
                grammarTip: "Grammar Tip: Use 'How about we make...' to suggest food items."
            }
        ]
    }
};