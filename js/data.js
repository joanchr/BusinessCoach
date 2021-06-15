var categoryNames = ["Fashion", "Technology", "Food Industry"];
var data = [
    [
        {image:"assets/coaches/0/0.jpg",name:"Amancio Ortega", email:"Amancio.Ortega@zara.com", phone:"08-123-456-7890", rating:4.0, experience:"4 years in business", description:"Amancio Ortega Gaona (Spanish pronunciation: [aˈmanθjo oɾˈteɣa ɣaˈona]; born 28 March 1936) is a Spanish billionaire businessman. He is the founder and former chairman of Inditex fashion group, best known for its chain of Zara clothing and accessories shops. As of April 2021, Ortega had a net worth of $71 billion, making him the second-wealthiest person in Europe after Bernard Arnault, and the thirteen-wealthiest in the world. For a brief period of time in 2015, he was the richest man in the world, surpassing Bill Gates when his net worth peaked to $80 billion as Zara's parent company, Inditex's, stock peaked. ", companies:"Inditex (CEO)", links:"https://www.linkedin.com/in/amancio-ortega-3550121b3/"},
        {image:"assets/coaches/0/1.jpg",name:"Delphine Arnault", email:"Delphine_Arnault@LVMH.com", phone:"08-123-456-1230", rating:5.0, experience:"4 years in fashion", description:"Delphine Arnault (born 4 April 1975) is a French businesswoman, director and executive vice president of Louis Vuitton (LVMH Group). Since 2003, she has been a member of the management board of the group LVMH, the first woman and youngest person to occupy that post.", companies:"LVMH Group (Vice President)", links:"https://www.linkedin.com/in/delphine-arnault-b83a243a/"},
        {image:"assets/coaches/0/2.jpg",name:"Karl-Johan Persson", email:"Karl@hm.com", phone:"08-123-456-7390", rating:4.8, experience:"13 years in fashion", description:"Karl-Johan Erling Göran Persson (born 25 March 1975) is a Swedish billionaire businessman and former president and CEO of the fashion company Hennes & Mauritz (H&M), founded by his grandfather Erling Persson. As of May 2019, according to Forbes, he has a net worth of US$1.6 billion. ", companies:"Hennes & Mauritz (H&M) (CEO)", links:"https://www.linkedin.com/company/h&m/"},
        {image:"assets/coaches/0/3.jpg",name:"Chip Wilson", email:"Chip.Wilson@lululemon.com", phone:"08-456-456-7890", rating:4.9, experience:"20 years in fashion", description:"Dennis J. Chip Wilson (born 1955) is a Canadian billionaire, businessman and philanthropist, who has founded several retail apparel companies, most notably yoga-inspired athletic apparel company Lululemon Athletica Inc (TSX: LLL, NASDAQ: LULU). Wilson is widely considered to be the creator of the athleisure trend. In 2016, he organized his personal and business interests into the holding company Hold It All Inc.", companies:"Lululemon Athletica (Founder)", links:"https://chipwilson.com/"},
        {image:"assets/coaches/0/4.jpg",name:"Tamara Mellon", email:"Tamara.Mellon@gmail.com", phone:"08-123-123-7890", rating:4.9, experience:"5 years in fashion", description:"Tamara Mellon, OBE is best known as the Founder of Jimmy Choo. She was its Chief Creative Officer from its inception in 1996 through to its acquisition by new owners in late 2011. Jimmy Choo remains a British company and Tamara built it into one of the world's most prominent and innovative luxury brands. She was responsible for the company's creative vision and was the central figure in the business' development and strategic direction. Tamara oversaw the growth of Jimmy Choo from a single London boutique to an internationally respected brand, with over 100 stores globally, from San Francisco to Shanghai. ", companies:"Jimmy Choo (Founder)", links:"https://www.linkedin.com/in/tamaramellon/"},
        {image:"assets/coaches/0/5.jpg",name:"Christina Ong", email:"Christina_Ong@gmail.com", phone:"08-123-456-7890", rating:3.0, experience:"4 years in fashion", description:"Christina Ong (née Fu, born October 1947), also known as the Queen of Bond Street, is a Singaporean businesswoman. A major player of a few companies, including Club 21 and COMO Hotels and Resorts, the Ong family, comprising Ong and her husband Ong Beng Seng, is valued at $1.8 billion as of July 2014, according to Forbes. She is said to be one of the wealthiest women in the world.", companies:"Club 21, COMO Hotels and Resorts", links:"https://en.wikipedia.org/wiki/Christina_Ong"},
        {image:"assets/coaches/0/6.jpg",name:"Sukhinder Singh", email:"Sukhinder@gmail.com", phone:"08-222-456-7890", rating:4.4, experience:"3 years in fashion", description:"Sukhinder Singh Cassidy is Founder & Chairman of JOYUS, a video shopping platform startup. Previously, Sukhinder was a top Google executive. JOYUS brings the opinions of shoppers and industry experts to life, creating an online fashion resource that is also a social platform.", companies:"Joyus (Founder & Chairman)", links:"https://www.linkedin.com/in/sukhinders/"},
        {image:"assets/coaches/0/7.jpg",name:"Olga Vidisheva", email:"olga.vidisheva@gmail.com", phone:"08-111-456-7890", rating:2.0, experience:"2 years in fashion", description:"A graduate of Harvard Business school, Olga was a model ands financial analyst at Goldman Sachs before she decided to capitalise on her love of fashion and telecommunications by founding Shoptiques. By working with hundreds of international boutiques, this rapidly growing online destination provides fashionistas with access to fashion forward designs.", companies:"Shoptiques (founder)", links:"https://www.linkedin.com/in/olga-vidisheva-992846110/"},
        {image:"assets/coaches/0/8.jpg",name:"Hilary Peterson", email:"Hilary.Peterson@gmail.com", phone:"08-999-456-7890", rating:4.5, experience:"3 years in fashion", description:"Hilary Peterson is the VP of Business Development for Lyst, a fast-growing fashion tech company which seeks to personalise and customise online shopping. By working with retailers, international brands and bloggers, Lyst aggregates its audience’s favourite designers and items in one platform.", companies:"Lyst (Vice President)", links:"https://www.linkedin.com/in/hilarypeterson/"},
    ],
    [
        {image:"assets/coaches/1/0.jpg", name:"Luis von Ahn", email:"Luis_von_Ahn@gmail.com", phone:"08-123-444-7890", rating:5.0, experience:"6 years in technology", description:"Luis von Ahn (Spanish: [ˈlwis fon ˈan]; born 19 August 1978) is a Guatemalan entrepreneur and a Consulting Professor in the Computer Science Department at Carnegie Mellon University in Pittsburgh, Pennsylvania. He is known as one of the pioneers of crowdsourcing. He is the founder of the company reCAPTCHA, which was sold to Google in 2009, and the co-founder and CEO of Duolingo, the world's most popular language-learning platform.", companies:"Duolingo (Co-Founder and CEO)", links:"https://www.linkedin.com/in/luis-von-ahn-4567065/"},
        {image:"assets/coaches/1/1.jpg", name:"Dmitri Alperovitch", email:"Dmitri.Alperovitch@crowdstrike.com", phone:"08-123-456-7890", rating:5.0, experience:"12 years in technology", description:"Dmitri Alperovitch (Russian: Дмитрий Михайлович Альперович; born 1980) is a Russian-born American computer security industry executive. He is co-founder and former chief technology officer of CrowdStrike. In August 2011, as vice president of threat research at McAfee, he published Operation Shady RAT, a report on suspected Chinese intrusions into at least 72 organizations, including defense contractors, businesses worldwide, the United Nations and the International Olympic Committee. Alperovitch is a naturalized American citizen born in Russia who came to the United States in 1994 with his family.", companies:"CrowdStrike (Co-founder and former CTO)", links:"https://www.linkedin.com/in/dmitrialperovitch/"},
        {image:"assets/coaches/1/2.jpg", name:"Peter Arvai", email:"Peter.Arvai@prezi.com", phone:"08-123-456-7890", rating:4.3, experience:"4 years in technology", description:"Peter Arvai (born October 26, 1979) is a Hungarian/Swedish businessman. He is the co-founder and former CEO of Prezi, a cloud-based presentation software company. As an entrepreneur, he founded omvard.se in Sweden, and co-founded Prezi in 2009 along with designer Adam Somlai-Fischer and computer scientist and university professor Peter Halacsy. As of 2020, Prezi has more than 100 million users worldwide.", companies:"Prezi (Co-Founder)", links:"https://www.linkedin.com/in/peterarvai/"},
        {image:"assets/coaches/1/3.jpg", name:"Jeff Atwood", email:"Jeff.Atwood@gmail.com", phone:"08-123-456-7110", rating:3.5, experience:"6 years in technology", description:"Jeff Atwood (1970) is an American software developer, author, blogger, and entrepreneur. He writes the computer programming blog Coding Horror. He co-founded the computer programming question-and-answer website Stack Overflow and co-founded Stack Exchange, which extends Stack Overflow's question-and-answer model to subjects other than programming. ", companies:"Stack Overflow (Co-Founder), Stack Exchange (Co-Founder)", links:"https://www.linkedin.com/company/stack-overflow/"},
        {image:"assets/coaches/1/4.jpg", name:"Scott Belsky", email:"Scott.Belsky@gmail.com", phone:"08-123-321-7890", rating:4.4, experience:"4 years in technology", description:"Scott Belsky (born April 18, 1980) is an American entrepreneur, author and early-stage investor best known for co-creating the online portfolio platform, Behance, Inc. In 2010, Belsky was included in Fast Company's 100 Most Creative People in Business list. ", companies:"Behance (Co-Founder)", links:"https://www.linkedin.com/in/scottbelsky/"},
        {image:"assets/coaches/1/5.jpg", name:"Tikhon Bernstam", email:"Tikhon.Bernstam@gmail.com", phone:"08-456-456-7890", rating:3.0, experience:"3 years in technology", description:"CEO and Founder of Parse (YC S'11 - parse.com - acquired by FB for 85M in 2013). Co-founder of Scribd (YC S'06). Full-time Tech Angel Investor. Part-time Vagabond. Ned Stark.", companies:"Parse (Founder), Scribd (Co-Founder)", links:"https://www.linkedin.com/in/tikhonbernstam/"},
    ],
    [
        {image:"assets/coaches/2/0.jpg", name:"Jordan Karcher", email:"Jordan.Karcher@gmail.com", phone:"08-123-334-7890", rating:4.5, experience:"4 years in food industry", description:"Jordan Karcher is the 32-year-old founder and CEO of Grounds & Hounds Coffee, a company that believes great coffee can fuel an even greater purpose. Through the sale of their organic and fair-trade specialty coffees, they support dog rescue initiatives and organizations, dedicating 20% of all profits to making their “second-chance for pups” mission a reality.", companies:"Grounds & Hounds Coffee (CEO)", links:"https://www.linkedin.com/in/jordankarcher/"},
        {image:"assets/coaches/2/1.jpg", name:"Leah Goldglantz", email:"Leah.Goldglantz@gmail.com", phone:"08-221-456-7890", rating:4.7, experience:"3 years in food industry", description:"Leah Goldglantz is the 32-year-old founder of Leah’s Plate, a health and wellness blog. Her goal is to inspire people to live a healthier lifestyle by educating them on which products are truly healthy, as well as providing recipes made using clean ingredients. Since we’re all short on time, Leah’s Plate recipes require minimal healthy ingredients and are quick and easy to make. Goldglantz offers baby and toddler recipes since she has two little ones at home, and also sometimes recommends non-toxic health, beauty, and home products.", companies:"Leah’s Plate (Founder)", links:"https://www.linkedin.com/in/leah-goldglantz-35540514/"},
        {image:"assets/coaches/2/2.jpg", name:"Daniel Zakowski", email:"Daniel.Zakowski@gmail.com", phone:"08-777-456-7890", rating:2.7, experience:"5 years in food industry", description:"While food allergies are a significant and growing problem, research indicates that up to  80% of them can be prevented through the early and frequent introduction of allergenic foods to infants. That means that just by following the new American Association of Pediatrics guidelines for early allergen introduction, we can help prevent approximately 200,000 infants every year from developing life-threatening food allergies. ", companies:"", links:"https://www.linkedin.com/in/danielzakowski/"},
        {image:"assets/coaches/2/3.jpg", name:"John Doe4", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5.0, experience:"4 years in food industry", description:"", companies:"", links:""},
        {image:"assets/coaches/2/4.jpg", name:"John Doe5", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5.0, experience:"4 years in food industry", description:"", companies:"", links:""},
        {image:"assets/coaches/2/5.jpg", name:"John Doe6", email:"john.doe@gmail.com", phone:"08-123-456-7890", rating:5.0, experience:"4 years in food industry", description:"", companies:"", links:""}
    ],
];