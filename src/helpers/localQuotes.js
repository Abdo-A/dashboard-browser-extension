const localQuotes = [
  "You're an awesome friend",
  "You're a gift to those around you",
  "You're a smart cookie",
  'You are awesome!',
  'You have impeccable manners',
  'I like your style',
  'You have the best laugh',
  'I appreciate you',
  'You are the most perfect you there is',
  'You are enough',
  "You're strong",
  'Your perspective is refreshing',
  "I'm grateful to know you",
  'You light up the room',
  'You deserve a hug right now',
  'You should be proud of yourself',
  "You're more helpful than you realize",
  'You have a great sense of humor',
  "You've got an awesome sense of humor!",
  'You are really courageous',
  'Your kindness is a balm to all who encounter it',
  "You're all that and a super-size bag of chips",
  "On a scale from 1 to 10, you're an 11",
  'You are strong',
  "You're even more beautiful on the inside than you are on the outside",
  'You have the courage of your convictions',
  "I'm inspired by you",
  "You're like a ray of sunshine on a really dreary day",
  'You are making a difference',
  'You bring out the best in other people',
  'Your ability to recall random factoids at just the right time is impressive',
  "You're a great listener",
  'How is it that you always look great, even in sweatpants?',
  'Everything would be better if more people were like you!',
  'I bet you sweat glitter',
  'You were cool way before hipsters were cool',
  'That color is perfect on you',
  'Hanging out with you is always a blast',
  'You always know -- and say -- exactly what I need to hear when I need to hear it',
  "You may dance like no one's watching, but everyone's watching because you're an amazing dancer!",
  'Being around you makes everything better!',
  'When you say, "I meant to do that," I totally believe you',
  "When you're not afraid to be yourself is when you're most incredible",
  "Colors seem brighter when you're around",
  "You're more fun than a ball pit filled with candy. (And seriously, what could be more fun than that?)",
  "That thing you don't like about yourself is what makes you so interesting",
  "You're wonderful",
  'You have cute elbows. For reals! ',
  'Jokes are funnier when you tell them',
  "You're better than a triple-scoop ice cream cone. With sprinkles",
  "When I'm down you always say something encouraging to help me feel better",
  'You are really kind to people around you',
  "You're one of a kind!",
  "If you were a box of crayons, you'd be the giant name-brand one with the built-in sharpener",
  'You should be thanked more often. So thank you!!',
  "Our community is better because you're in it",
  "Someone is getting through something hard right now because you've got their back. ",
  'You have the best ideas',
  'You always find something special in the most ordinary things',
  'Everyone gets knocked down sometimes, but you always get back up and keep going',
  "You're a candle in the darkness",
  "You're a great example to others",
  'Being around you is like being on a happy little vacation',
  'You always know just what to say',
  "You're always learning new things and trying to better yourself, which is awesome",
  'If someone based an Internet meme on you, it would have impeccable grammar',
  'You could survive a Zombie apocalypse',
  "You're more fun than bubble wrap",
  'When you make a mistake, you try to fix it',
  'Who raised you? They deserve a medal for a job well done',
  "You're great at figuring stuff out",
  'Your voice is magnificent',
  'The people you love are lucky to have you in their lives',
  "You're like a breath of fresh air",
  'You make my insides jump around in the best way',
  "You're so thoughtful",
  'Your creative potential seems limitless',
  'Your name suits you to a T',
  'When you say you will do something, I trust you',
  'Somehow you make time stop and fly at the same time',
  'When you make up your mind about something, nothing stands in your way',
  'You seem to really know who you are',
  'Any team would be lucky to have you on it',
  'In high school I bet you were voted "most likely to keep being awesome."',
  'I bet you do the crossword puzzle in ink',
  'Babies and small animals probably love you',
  "If you were a scented candle they'd call it Perfectly Imperfect (and it would smell like summer)",
  "There's ordinary, and then there's you",
  "You're someone's reason to smile",
  "You're even better than a unicorn, because you're real",
  'How do you keep being so funny and making everyone laugh?',
  'You have a good head on your shoulders',
  'Has anyone ever told you that you have great posture?',
  'The way you treasure your loved ones is incredible',
  "You're really something special",
  'Thank you for being you',
  'You look great!',
  'You look awesome!',
  'You look vibrant and healthy!',
  'It looks nice on you!',
  'You look so young',
  'Your skin is glowing',
  'Your hair is so shiny',
  'You’ve worked so hard, you must be very proud of yourself!',
  'You have a great way of explaining it',
  'You demonstrate it so well',
  'It is easy to follow your instructions',
  'You are a great listener',
  'You have such a contagious laugh.',
  'You have such a happy smile',
  'You are such an inspiration',
  'You’re so talented',
  'You’re such a model for behavior',
  'You’re a great dancer',
  'Your choice of Facebook profile picture is wonderful',
  'You self-control is admirable',
  'Good morning gorgeous!',
  'You are a fountain of knowledge',
  'How do you get your hair to look like that?',
  'You make it so easy to listen to you',
  'You are a great storyteller',
  'You have such valuable experience',
  'You had such interesting life',
  'You have been in so many places around the world. It is fascinating!',
  'You are so smart!',
  'You’re so approachable',
  'You are cool!',
  'You are so positive',
  'There is such a great feeling around you',
  'It’s perfect!',
  'You are so supportive, thanks!',
  'You have such an interesting name',
  'It’s fun to be around you.',
  'You have a warm voice',
  'What a great success!',
  'I’m so proud of you',
  'You’re so trustworthy',
  'You are a great leader!',
  'I have lots to learn from you!',
  'You can do that. You are good with things like that',
  'It is fun to hang around with you',
  'You are so photogenic',
  'You look better than your photo',
  'You are so flexible. It makes it easy to work with you',
  'Wow, it required lots of courage to do that. You are so brave!',
  'You are bubbly and happy! It is inspiring! It is contagious! It is awesome!',
  'You are so graceful',
  'You are very ethical and trustworthy',
  'People will follow you in this quest',
  'You are very honest',
  'You are very perceptive',
  'Your methods really work',
  'You are punctual, it makes it pleasure to work with you',
  'Your work has a superior quality',
  'You are sharp!',
  'You are a great problem solver',
  'You are very responsible',
  'Your resilience is remarkable',
  'You are wise',
  'You are very keen. It is a great quality!',
  'Your imagination is inspiring',
  'Your input is valuable',
  'You’re a great team player',
  'You are very clever',
  'Your idea is very clever',
  'You are strong!',
  'You are so funny',
  'You are out of this world',
  'You make a great difference',
  'Your optimism is wonderful',
  'You sound very confident about it. Go for it!',
  'You are so sweet',
  'You are ageless',
  'You are such fun',
  'You are very resourceful. It is a great quality',
  'It is so romantic',
  'You are very committed',
  'You are peaceful. It feels great to be around you',
  'You are usually right. Trust yourself!',
  'You have a free spirit',
  'You are a genius',
  'You make the world a better place just by being in it',
  'It is great to have you around',
  'You outdone yourself everyday',
  'Keep up the good work',
  'You are very special!',
  'You have it in you!',
  'You’re a good sport!',
  'You’re a great reader, books and minds',
  'You have a great collection of books',
  'You are the best!',
  'You are super!',
  'You’ve made a great progress!',
  'You rock!',
  'You are very patient',
  'You are an angel',
  'You are a life savior!',
  'Your smile lights up the room',
  'Your positive energy is palpable',
  'You inspire me',
  'You bring out the best in me',
  'You have a great sense of style',
  'You have beautiful hair',
  'You are always honest and real and I appreciate your authenticity',
  'You bring out the best in people',
  'You are a great leader',
  'I love how good you are with children',
  'Thank you for your service',
  'You are always so clean',
  'You speak so eloquently',
  'You are so goal driven',
  'Thank you for being there for me in my rough times',
  'I want to grow up to be just like you',
  'You are a great coach',
  'You are a great listener',
  'You are so motivating',
  'Thank you for being yourself around me',
  'You have the greatest laugh',
  'You are going to be great',
  'That color of clothing looks amazing on you',
  'You are so good at time management',
  'You are so kind',
  'You are always so helpful',
  'You have the whitest teeth. Or the best smile of all time!',
  'You always make my day when we hang out',
  'I love the things you don’t like about yourself',
  'You are so captivating',
  'I always tell people how amazing you are',
  'Spending time with you is my best use of time',
  'I love you just the way you are',
  'I believe in you',
  'You are so creative',
  'I think about you a lot',
  'You are so attractive',
  'I think your ethnicity is so cool and unique',
  'You are so powerful',
  'I appreciate how well you keep eye contact with people when they talk',
  'You are so artistic',
  'You have such a great vocabulary',
  'You persevere through anything and you inspire me because of it',
  'I appreciate your taste in music',
  'You have the most interesting perspectives',
  'Thank you for all the value you have brought me',
  'You have such a good work ethic. You are such a hard worker',
  'I love how much you believe in the causes you support',
  'You are so stable',
  'You are the most kind person I have ever met',
  'You have the prettiest eyes',
  'I see greatness in you',
  'You are always so committed to whatever you do',
  'You never give up',
  'You are the perfect example of the best human',
  'You are so popular!',
  'Everyone loves you!',
  'You always keep your word',
  'I want to be more like you',
  'Your a warrior!',
  'Your a champion',
  'I pray for you',
  'I see you doing great things with your life',
  'You could become president if you wanted to!',
  'You have kindness in your eyes',
  'You are the most unique person I know and have ever met',
  'You are always so optimistic at work',
  'Never stop being you',
  'I can be open and honest with you about anything',
  'There should be a big statue in the city because of how awesome you are',
  'Spending time with you is the best use of time',
  'You always give the best advice',
  'You are so incredibly selfless',
  'Mother Theresa has nothing on you!',
  'You are the definition of unconditional love',
  'I am so proud of all you accomplished',
  'You have beautiful skin!',
  'You are one in a million!',
  'I am honored to know you',
  'You are a friend but are more like family!',
  'I think about you a lot!',
  'Thank you for existing',
  'I appreciate the way you challenge me',
  'Your energy is infectious',
  'You’re my constant reminder that people can be good',
  'The world would be so boring without you',
  'Are you for real?',
  'You make the little things feel big',
  'Loving you feels like the most natural thing',
  'You impress me every single day',
  'Your capacity for kindness is boundless',
  'There’s no one like you',
  'You’re not as dumb as you let people think you are',
  'You’re beautiful',
  'Your soul is gorgeous',
  'You’re more of a superhero than any Marvel character out there',
  'Mating with you would be a smart evolutionary play',
  'Some people are radiators—they make you feel warm when you’re around them',
  'I’ve never met anyone as caring as you',
  'You have such a good heart',
  'You are truly unforgettable',
  'Wow. You',
  'You make monogamy seem easy',
  'Please never stop being you',
  'You are beautiful inside and out',
  'Your touch is so healing',
  'Your very presence is reassuring',
  'You are a life elixir',
  'Things shift when you enter the room',
  'You are light',
  'You have such a generous spirt',
  'How did you learn to be so good?',
  'Your heart must be ten times the average size',
  'It’s as if you never learned to be bitter',
  'I want to grow into a person like you',
  'I want to grow up to be just like you',
  'I’ve never met a person quite like you',
  'Your parents must be so proud',
  'There should be a monument of you',
  'You are just beyond',
  'I can’t quite fathom a world with you',
  'You are awesomeness personified',
  'There’s nothing I’d rather do than spend time with you',
  'The very thought of you makes me feel warm and fuzzy',
  'Is there a day you haven’t made better?',
  'You’re the only person I want to come back to when it feels like the rest of the world has become too much',
  'You’ve shown me how to be kinder person',
  'The way you live your life challenges me and has helped me grow',
  'You’re really good at all the things you do. And even the things you think you don’t do so well, I like how you do it anyway, without caring what anyone thinks',
  'If you died or something happened to you, I would delete your browser history for you',
  "Even if you were cloned, you'd still be one of a kind. And the better looking one",
  "It's not easy to be me. Which is why I need you",
  'I would love to spend every minute of every day with you, but some days I actually have to get stuff done',
  'Your smile is proof that the best things in life are free',
  "You're smarter than Google and Mary Poppins combined",
  "You're not someone I pretend to not see in public",
  "I don't have a favourite colour, It's pretty much whatever you are wearing",
  'You are like a corner piece of a puzzle. Without you, the world is completely lost',
  'You inspire friends, strangers, and stalkers. You are the inspiration to many',
  "I don't know if sarcasm is a skill, but you've certainly mastered it",
  'If you knew how much I think about you, I would be very embarrassed',
  'You look so good, I would certainly steal your photos, make a fake account and impress people online',
  "You're just as pretty as all the layers you hide behind",
  'Your face makes other people ugly',
  "I can't take my eyes off of you. Unless you notice me, then I'll quickly look away and act like it never happened",
  'Are you a beaver, because damn',
  "You're like the one sock that dissapears. I don't know what I did to lose you but I want you back",
  'If it was legal to marry food, I would still choose you over pizza',
  'You might be the primary reason for global warming',
  'I bet you make babies smile',
  'If there is one thing I like about you, its that I like more than one thing about you',
  'You have that kind of body that when others see it they realise they need to workout more',
  'You are more unique and wonderful than the smell of a new book',
  'The person who raised you deserves a medal for a job well done',
  'Did you have plastic surgery to become that attractive?',
  "I'm not drunk, just intoxicated by you",
  "You're the nothing when people ask me whats on my mind",
  'You are awkward, in a cute way. Like an elevator ride, but with puppies',
  "It's too bad you don't see what I see, if you did you'd smile and keep looking",
  "You know what's awesome? Chocolate cake, oh and your face",
  "Every day without you is like a day without my phone, I just don't know what to do with myself",
  "I'm really good at people-watching. I'm so glad I can share that hobby on you",
  'You make everything better. If people were more like you the world would be perfect',
  "You're not lazy, just that the people around you are way too active",
  'Actions speak louder than words, and yours tell an incredible story',
  'Any team would be lucky to have you on it',
  "As cheesy as this is, I'm telling the truth: on a scale from 1 to 10, you're an 11",
  'Being around you always makes the day better',
  "Every day, you are making a difference, even if you don't realize you are doing it",
  'Everything seems brighter when you are near',
  'For how hard you have worked in your life, you deserve an award',
  'Hanging out with you is the best and a blessing',
  'Has anyone ever told you that you have great posture?',
  'How is it that you always look great, even in sweatpants and a sweater? You slay any look you have',
  "If someone based a movie off of you, it would win an Oscar because you're that incredible",
  'If there was a superlative about you, it would be "most likely to keep being awesome."',
  'If you record an album, your voice will be heard all around the world',
  "If you were a scented candle they'd call it 'Perfectly Imperfect' (and it would smell like summer)",
  "No one is quite like you. You're one of a kind",
  'Nothing stands in your way because you are a determined person',
  'Now thinking about it, you would win an Oscar because your acting is off the charts and you would dominate on the screen',
  'Our lives would be incomplete without you in it',
  "Our world is better because you're in it",
  'Pentatonix would gladly take you into their group',
  'Remember: you are worth it',
  "Short, sweet, and to the point: You're wonderful",
  'The people you love are lucky to have you in their lives, like me',
  "There's ordinary, and then there's you",
  'To quote Liza Koshy, "You are beautiful just the way you is. Even if you are grammatically incorrect."',
  "We all get knocked down, but you say 'no' and get back up and keep going",
  'When you see a mistake, you fix it, even if you have nothing to do with it',
  'Whenever anyone is around you, your presence makes everything better!',
  "Whenever you say 'hello,' you make somebody's day",
  "Whenever you tell stories, I am captivated because you are interesting to listen to and you're great to have a conversation with",
  'Whenever your hair blows in the wind, you look like you are ready to burst out into song',
  'You always have the best ideas',
  'You always know exactly what I need to hear when I need to hear it. Thank you',
  'You always know just what to say',
  "You always listen to others. You're a good listener",
  "You always look great. Even if you're in a t-shirt and shorts or in Badin's uniform. You kill it every day",
  'You always tell the truth',
  'You are a breath of fresh air',
  'You are a fierce, brave warrior. You will fight and protect your friends until the very end',
  'You are a gift to those around you',
  'You are a great role model to others',
  'You are a light to all. You brighten up the room with your presence',
  "You are a lovely human being to have in everyone's life",
  'You are a reason to smile and be happy',
  'You are a star because you shine even in the darkest times',
  'You are a true, born leader',
  'You are a trustworthy friend',
  'You are an inspiration',
  'You are appreciated and I appreciate you',
  'You are beautiful on the outside and the inside',
  "You are enough. Just in case you didn't hear me, you are enough. :)",
  "You are perfect just the way you are. Don't forget that",
  'You are so funny and make everyone laugh!',
  'You are so polite. Like in any situation, you are so nice and polite',
  'You are so strong. Even through the roughest times, you are strong and refuse to fall',
  'You are so thoughtful about yourself and others',
  'You are the brightest treasure because people like you are hard to find',
  'You are truly special',
  'You are you and you should be proud of yourself',
  'You bring out the best in everyone that you meet',
  'You can take on any challenge and own it. You never give up',
  "You could survive a Zombie apocalypse because you're such a badass",
  "You figure things out because you're quick on your toes",
  'You have a calming aura about you, which makes everything around us slow down so that we can be relaxed',
  'You have a purpose in this world. You may not see it yet, but you have a purpose',
  'You help people whenever they need it',
  'You know who you are, which I am proud of you for',
  'You make everyone happy, wherever you go',
  'You make time stop and fly at the same time',
  "You may not realize it but someone is getting through a hard time right now because you've got their back",
  'You should be thanked more often...thank you!!',
  'You were always cool, even as a kid',
  'You work things out in a group and you make sure everyone works together and gets it done',
  'You would be a stunning model',
  'You would the rule the world if you could. I would vote for you to',
  "You're a candle in the darkness",
  "You're always learning new things and you apply it to your life which is pretty cool when you think about it",
  "You're gorgeous, even if you don't think you are. You are so gorgeous",
  "You're more fun than a ball pit filled with candy. (And seriously, what could be more fun than that?)",
  "You're not afraid to be yourself",
  'Your dance moves = amazing and lit AF',
  "Your eyes take my breath away. I'm serious, though. They're so captivating",
  'Your flame of courage is so bright that it will never go out',
  "Your jokes are so funny. Keep it up because they make people's day",
  'Your kindness is intoxicating',
  'Your laugh is contagious. Your laugh makes me want to laugh, because it makes me feel good',
  'Your sense of humor is so great. Your jokes make people laugh until they cry and their chest hurts',
  'Your singing pipes are phenomenal. Keep singing on!',
  'Your smile makes my day brighter. Whenever you smile, I want to smile',
  'Your style. Omg. You look like you could run the world'
];

export default localQuotes;
