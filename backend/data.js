// const data = {
//     schools: [
//         {
//             name: 'Cornell University',
//             image: '/images/backgrounds/cornell.jpeg',
//             city: 'Ithaca',
//             state: 'NY',
//             numClubs: '2',
//         },
//         {
//             name: 'New York University',
//             image: '/images/backgrounds/nyu.jpg',
//             city: 'New York',
//             state: 'NY',
//             numClubs: '1',
//         },
//         {
//             name: 'Stony Brook University',
//             image: '/images/backgrounds/stonybrook.jpg',
//             city: 'Stony Brook',
//             state: 'NY',
//             numClubs: '0',
//         },
//     ],
//     clubs: [
//         {
//             name: 'Cornell Computer Reuse Association',
//             schoolId: '60e50d23224c9d0d440bcec0',
//             numReviews: '3',
//             totalRating: '13',
//             totalTimeCommitment: '6',
//             totalRecommend: '2',
//             numInterviews: '2',
//             totalDifficulty: '2',
//             valid: true,
//         },
//         {
//             name: 'Zambia Community Education Initiative',
//             schoolId: '60e50d23224c9d0d440bcec0',
//             numReviews: '1',
//             totalRating: '3',
//             totalTimeCommitment: '4',
//             totalRecommend: '0',
//             numInterviews: '0',
//             totalDifficulty: '0',
//             valid: true,
//         },
//         {
//             name: 'Stern Investment Club',
//             schoolId: '60e50d23224c9d0d440bcec1',
//             numReviews: '1',
//             totalRating: '5',
//             totalTimeCommitment: '3',
//             totalRecommend: '1',
//             numInterviews: '1',
//             totalDifficulty: '4',
//             valid: true,
//         },
//     ],
//     reviews: [
//         {
//             clubId: '60e50d3c3f20df5884dc3f82',
//             rating: '4',
//             timeCommitment: '1',
//             recommend: 'true',
//             class: 'Freshman',
//             major: 'Computer Science',
//             position: 'Member',
//             comment: 'Loved this club. Not too much time commitment and was very chill environment',
//         },
//         {
//             clubId: '60e50d3c3f20df5884dc3f82',
//             rating: '5',
//             timeCommitment: '3',
//             recommend: 'false',
//             class: 'Sophomore',
//             major: 'Electrical Engineering',
//             position: 'Officer',
//             comment: 'My favorite club. Upperclassmen are so nice and not too much work needed.',
//         },
//         {
//             clubId: '60e50d3c3f20df5884dc3f82',
//             rating: '4',
//             timeCommitment: '2',
//             recommend: 'true',
//             class: 'Senior',
//             major: 'Biology',
//             position: 'Officer',
//             comment: 'I give my thanks to this club that I have been in 4 years. Though, not the cleanest room space, sorry.',
//         },
//         {
//             clubId: '60e50d3c3f20df5884dc3f83',
//             rating: '3',
//             timeCommitment: '4',
//             recommend: 'false',
//             class: 'Junior',
//             major: 'Chemistry',
//             position: 'Officer',
//             comment: 'Pretty good club. Would be nicer if we had more funding but no complaints about the actual club.',
//         },
//         {
//             clubId: '60e50d3c3f20df5884dc3f84',
//             rating: '5',
//             timeCommitment: '3',
//             recommend: 'true',
//             class: 'Freshman',
//             major: 'Finance',
//             position: 'Member',
//             comment: 'Goated club and made great connections',
//         },
//     ],
//     interviews: [
//         {
//             clubId: '60e50d3c3f20df5884dc3f82',
//             difficulty: '1',
//             major: 'Computer Science',
//             roleApplied: 'Member',
//             comment: 'No application process. Walked in and felt very welcomed.',
//         },
//         {
//             clubId: '60e50d3c3f20df5884dc3f82',
//             difficulty: '1',
//             major: 'Electrical Engineering',
//             roleApplied: 'Officer',
//             comment: 'No interview needed. Just joined their ClubFest meeting.',
//         },
//         {
//             clubId: '60e50d3c3f20df5884dc3f84',
//             difficulty: '4',
//             major: 'Finance',
//             roleApplied: 'Officer',
//             comment: 'Very hard interview process. Multiple rounds and many of my friends got rejected.',
//         },
//     ],
// };
const clubList = ['Cornell 3 Day Startup', 'Cornell Accounting Association', 'Cornell Actuarial Society', 'Air and Sea Hospitality', 'Cornell Alpha Fund', 'American Academy of Environmental Engineers', 'American Indian Science and Engineering Society', 'Cornell University American Institute of Aeronautics and Astronautics', 'American Institute of Chemical Engineers', 'American Mock World Health Organization', 'American Society of Civil Engineers', 'American Society of Mechanical Engineers', 'Cornell Anjali', 'Cornell Anthropology Exchange ', 'Ascend', 'Association of Computer Science Undergraduates (ACSU)', 'Cornell Association of Medicine and Philanthropy', 'AIESEC Cornell', 'BigRed//Hacks', 'Birding Club at Cornell', 'Black Ivy Pre-Law Society', 'Cornell Business Analytics', 'Club Managers Association of America', 'Cornell Club of Taiwan', 'Cornell Consulting Club', 'Cornell Consulting Group', 'Creative Computing Club', 'Cornell University', 'CS for Social Good', 'Cornell Dairy Science Club', 'Debate in Science and Health', 'The Dilmun Hill Barn Project', 'Dilmun Hill Student Organic Farm', 'Dys ID', 'Cornell Economics Society', 'eMed: Society of Engineers in Medicine', 'Engineering Career Fair Team', 'Engineers for a Sustainable World', 'The Epicurean Society', 'Cornell Fashion Collective', 'Cornell Fashion Industry Network', 'Female Leadership in Hospitality at Cornell University', 'Cornell Finance Club', 'Financial Risk Management Club of Cornell', 'Cornell Food Science Club', 'Forte', 'Cornell Global Economics and Finance Society', 'Cornell Hacking Club', 'Cornell Hedge Fund', 'History of Art Majors Society', 'Ho Nun De Kah', 'Cornell Hospitality Consulting', 'Hospitality Financial & Technology Professionals', 'Hospitality Sales and Marketing Association International', 'Hospitality Students International', 'Hotel Administration Society of Security Analysts', 'Hotel Ezra Cornell', 'Cornell University Forensics Society', 'Cornell Hotel Society ', 'Cornell Impact Investing', 'Information Science Student Association (ISSA)', 'Institute of Electrical and Electronics Engineers', 'Cornell International Affairs Society', 'Cornell International Business Association', 'Cornell Investment Banking Club', 'Life Changing Labs (LCL)', 'Cornell Marketing Organization', 'Cornell Materials Society', 'Medium Design Collective', 'Minority ILR Student Organization', 'Mortar Board Der Hexenkreis Senior Honor Society', 'Mutual Investment Club of Cornell', 'Cornell National Society of Black Engineers', 'National Society of Minorities in Hospitality', 'National Organization of Minority Architects (NOMA)', 'Nightlife Hospitality Club', 'Open Source Cornell', 'PATCH - Pre-professional Association Towards Careers in Health', 'Cornell University Pre-Dental Society', 'Pre-Med Minorities Mentorship Program', 'Quill & Dagger', 'Cornell Real Estate Club', 'Scientista Foundation Chapter at Cornell University', 'Smart Woman Securities', 'Social Business Consulting', 'Social Enterprise Group', 'Society for Advancement of Chicanos/Hispanics and Native Americans in Science at Cornell ', 'Society of Asian Scientists and Engineers', 'Society of Hispanic Professional Engineers', 'Society for Human Resource Management, Cornell', 'Society for Women in Business', 'Society of Women Engineers', 'Society for Women in Politics', 'Society of Physics Students', 'Cornell Software Engineering and Startup Engineering (SENSE)', 'Cornell University Spa Association', 'Spark Product and Industrial Design', 'Sparkstone Analytics', 'Cornell Surgical Society', 'Cornell Sustainability Consultants', 'Cornell Sustainable Business Alliance', 'Sustainable Enterprise Association', 'TAMID Group', 'Theme Park Engineering Group', 'Underrepresented Minorities in Computing', 'Cornell Venture Capital Club', 'Vizer Strategy Consulting', 'Web Development, Cornell', 'Weill-Ithaca Network', 'Women in Computing at Cornell (WICC)', 'Women in Healthcare Leadership', 'Women’s Finance Organization', 'Ye Hosts Honorary Society', 'Zymology Club', 'Alternative Breaks', 'Alternative Recycling Cornell', 'Alzheimer’s Help and Awareness Club', 'Art Beyond Cornell', 'Asha Cornell', 'Best Buddies Cornell', 'Big Red Bikes', 'Bigs at Cornell', 'Cornell Bridges to Community', 'Camp Kesem of Cornell University', 'Cornell Circle K', 'Cornell Computer Reuse Association', 'Cornell Consult Your Community', 'Cross Cultural Adoptee Mentorship Program', 'Cupcakes for a Cure', 'Cornell University Deaf Awareness Project', 'Empathy Assistance and Referral Service (EARS)', 'Encourage Young Engineers and Scientists', 'Cornell Elderly Partnership', 'Cornell FeelGood', 'Cornell Food Recovery Network', 'Gift of Life Cornell University', 'Global Medical Brigades', 'GOPiNK at Cornell', 'Greeks Go Green', 'Guiding Eyes at Cornell', 'Habitat for Humanity Cornell Chapter', 'Hotelies Serving Society', 'Into the Streets', 'Just for Kidz: Cornell', 'Kidney Disease Screening and Awareness', 'The Cornell Lending Library', 'Let’s Grow with 4-H Urban Outreach at West Hill', 'Make-A-Wish at Cornell University', 'The Maternal and Child Health Project', 'Mayor Potencial at Cornell', 'MEDLIFE', 'Merlin’s Kids', 'Operation D.E.E.P. (Developing Elementary Educational Possibilities)', 'Pediatric Cancer Awareness Club', 'Project Generations', 'Project Hope at Cornell', 'Project LETS at Cornell University', 'REACH - Raising Education Attainment Challenge', 'Red Alert', 'Cornell Reflect', 'Refresh Bolivia', 'Rotaract', 'Science Engineering and Educational Development', 'Students Against the Sexual Solicitation of Youth', 'Cornell Students for Hunger Relief', 'Students Onto Scholars', 'Volunteers Around the World Dental Outreach', 'Welcomes Refugees, Cornell', 'Youth Outreach Undergraduates Reshaping Success', 'Zambia Community Education Initiative', 'ACE: The Ace/Asexual Support Group at Cornell', 'Arab Student Association', 'Armenian Student Organization', 'Cornell Asian Pacific Islander Student Union (CAPSU)', 'Bengali Students Association', 'Cornell Bhangra', 'Cornell Caribbean Student’s Association', 'Chabad at Cornell ', 'Chinese Students Association', 'Committee on US-Latin American Relations', 'Ethiopian-Eritrean Student Association', 'Cornell Filipino Association', 'Haitian Students Association', 'Haven: The LGBTQ Student Union', 'Hindu Student Council', 'Hong Kong Student Association', 'Israeli Student Association', 'Japan US Association', 'Cornell Italiano Club', 'Korean American Students Association (KASA)', 'Korean Student Association', 'La Asociacion Latina', 'Cornell Mainland China Students Association', 'MiXed at Cornell', 'Native American Students at Cornell', 'Pakistani Students Association', 'Pons Babela Cross-Cultural Exchange Forum', 'Cornell PorColombia', "Quisqueya: Dominican Students' Association", 'Sangre Taina: The Puerto Rican Students’ Association', 'Singapore Students Association', 'Society for India', 'Society of Polish Students', "Sri Lankan Students' Association", 'Cornell Students for Myanmar', 'Vietnamese Association, Cornell', 'Wanwake Wa Wari Cooperative', 'Less Than Three A Capella', 'Absolute A Capella', 'Absolute Zero', 'African Dance Repertoire', 'After Eight', 'After Six Ensemble', 'Anabel Taylor Chapel Choir', 'Anything Goes', 'The Assorted Aces', 'Baraka Kwa Wimbo Gospel Ensemble', 'BASE Productions', 'Big Red Dance Squad', 'Big Red Marching Band', 'Big Red Pep Band', 'BreakFree Hip Hop', 'CallbaXX', 'The Chai Notes', 'Cornell Chamber Philharmonic', 'Cornell Chinese Drama Society', 'The Chordials', 'Cornell University Chorus', 'The Class Notes', 'Cog Dog Theatre Troupe', 'Cornell Contra Dance Club', 'Contrapunkt: Undergraduate Composer’s Collective', 'CU Cyphers', 'E.Motion', 'Cornell Eastern Music Ensemble', 'Flexible Theatre Company', 'Cornell University Glee Club', 'Cornell HanChum Korean Traditional Dance Club', 'Cornell University Hangovers', 'Hearsay A Cappella', 'Humor Us! Sketch Comedy', 'Impact Dance Troupe', 'Cornell University Indoor Drumline', 'Jazz Voices', 'The Key Elements', 'Cornell University Klezmer Ensemble', 'Last Call Singing Group', 'Cornell Lion Dance', 'LOKO', 'Measureless Acapella', 'Melodramatics Theatre Company, Inc', 'Midnight Comedy Troupe', 'Nothing But Treble', 'On Tap Dance Troupe', 'Cornell Opera Society', 'Pandora Dance Troupe', 'Pants But Not Quite', 'Phenomenon Step Club', 'Cornell Piano Society', 'Cornell Raas Club', 'Rise Dance Group', 'Risley Theatre', 'Sabor Latino Dance Ensemble', 'SALSA PALANTE', 'Shadows Dance Troupe', 'Cornell Shakespeare Troupe', 'Cornell Shimtah', 'Cornell Sitara', 'The Skits', 'Cornell Storytelling Club', 'Whistling Shrimp Improv Comedy Troupe', 'Wind Ensembles', 'Wushu Club, Cornell', 'Alpha Epsilon Delta', 'Alpha Eta Rho-Chi Upsilon', 'Alpha Kappa Psi', 'Alpha Omega Epsilon Professional Engineering Sorority', 'Alpha Phi Omega - Gamma Chapter', 'Alpha Chi Sigma', 'Beta Alpha Psi', 'Delta Kappa Alpha', 'Delta Sigma Pi', 'Kappa Alpha Pi Pre-Law Fraternity', 'Phi Alpha Delta Pre-Law Fraternity', 'Phi Beta Lambda - Future Business Leaders of America', 'Phi Chi Theta', 'Phi Delta Epsilon International Medical Fraternity', 'Phi Gamma Nu', 'Phi Sigma Pi National Honors Fraternity- Beta Nu Chapter', 'Pi Lambda Sigma', 'Pi Sigma Alpha, Political Science Honor Society', 'Pi Sigma Epsilon', 'Psi Chi the International Honors Society in Psychology', 'Cornell AppDev', 'AguaClara', 'Big Red Bridges', 'Cornell ACM Programming', 'Cornell Baja SAE', 'Cornell ChemE Car', 'Cornell Concrete Canoe', 'Cornell Cup Robotics', 'Cornell Data Science', 'Cornell Design and Tech Initiative (DTI)', 'Cornell Engineering World Health', 'Cornell iGem', 'Cornell Hyperloop', 'Cornell Mars Rover', 'Cornell Micro-g', 'Cornell Racing', 'Cornell Rocketry Team', 'Cornell Seismic Design ', 'Cornell University Autonomous Underwater Vehicle (CUAUV)', 'Cornell University DEBUT', 'Cornell University Unmanned Air Systems (CU AIR)', 'CU Autonomous Bicycle', 'CU Sail', 'CU Solar Boat', 'Cornell Design Build Fly (DBF)', 'Engineers for a Sustainable World: Biofuels', 'Engineers Without Borders', 'Resistance Racing', 'Steel Bridge', 'Cornell University Sustainable Design (CUSD)', 'Business Asia Journal', 'Cornell Business Review', 'Cantilever Journal of Architecture', 'Cornell Claritas', 'Creme de Cornell', 'CU Nooz', 'Cornell Current', 'Guac Magazine', 'IMARA Magazine', 'Cornell International Affairs Review', 'Kitsch Magazine', 'Logos, The Undergraduate Philosophy Journal & Club', 'The Cornell Lunatic', 'Marginalia: the Cornell Undergraduate Poetry Review', 'The Public Journal', 'Rainy Day', 'The Research Paper', 'The Cornell Review', 'Science Fiction & Fantasy Writers’ Alliance', 'Slope Media Group', 'Cornell Aikido Club', 'Cornell Archery Club', 'Arnold Air Society', 'Cornell Alpine Skiing', 'Cornell Badminton', 'Bailemos Latin Dance Club', 'Ballroom Dance Club', 'Cornell Barbell Club', 'Cornell Bowling Club', 'Boxing Club at Cornell University', 'Cornell Brazilian Jiu Jitsu Club ', 'Buds Ultimate', 'Capoeiria Angola Quintal', 'Cornell Cycling Club', 'Cornell Dancer’s Alliance', 'Cornell DanceSport', 'Dressage Club at Cornell', 'Fencing Club', 'Cornell Field Hockey Club', 'Cornell Figure Skating Club', 'Cornell Fishing Club', 'Fit University Cornell', 'Cornell Fitness Club', 'Cornell Gymnastics Club', 'Cornell Karate Club', 'Cornell University Kendo Club', 'Lady Bears Volleyball at Cornell', 'Cornell Men’s Club Ice Hockey', 'Cornell Men’s Club Volleyball', 'Cornell Men’s Club Water Polo', 'Cornell Mundial F.C.', 'Nordic Ski Racing at Cornell', 'Cornell Quidditch', 'Red Key Athlete Honor Society', 'Cornell Roller Hockey Club', 'Cornell Rugby', 'Cornell Running Club', 'Cornell Sailing Club', 'Cornell Ski and Snowboard Club', 'Sport Taekwondo at Cornell', 'Squash Club at Cornell', 'Cornell Club Swimming', 'Cornell Swing Dance Club', 'Viticulture and Enology Club, Cornell University', 'West Coast Swing Dance Network', 'Western Equestrian Club', 'Women’s Alpine Ski Racing', 'Women’s Club Basketball', 'Women’s Club Lacrosse', 'Women’s Club Soccer', 'Women’s Club Softball', 'Women’s Club Volleyball', 'Women’s Club Water Polo', 'Women’s Ice Hockey Club', "Women's Martial Arts and Fitness", 'Women’s Rugby, Cornell', 'Women’s Sevens Rugby Club, Cornell', 'Women’s Swim Club', "Women's Ultimate Frisbee, Cornell Thorny Roses", 'Women’s Ultimate Frisbee, Cornell Wildroses', 'African Development Association', 'The Alexander Hamilton Society at Cornell', 'Cornell Amateur Radio Club', 'Amnesty International at Cornell University', 'Artistic Beads Club', 'Asian Pacific Americans for Action', 'Association for International Human Rights', 'Cornell Astronomical Society', 'Cornell Audio Engineering Society', 'Big Red Ambassadors', 'Big Red Bears', 'Black Students United', 'The Black Women’s Support Network', 'Cornell University Block and Bridle Club', 'Body Positive Cornell ', 'Cornell Bread Club', 'Building Ourselves Through Sisterhood and Service', 'Cornellians for Israel', 'Cornell University Chess Club', 'Climate Justice Cornell', 'Coalition of Pan-African Scholars', 'Cornell College Republicans', 'Computer Animation Club', 'Consent Ed', 'Cornell Dance Dance Revolution Club', 'The Cornell University Democrats', 'Cornell University Dietetics Association', 'Duel Links at Cornell', 'Cornell University Emergency Medical Services', 'Cornell Environmental Collaborative', 'Esports at Cornell', 'Cornell European Business Society ', 'Flow Club', 'Friends of Gorge', 'Games Club at Cornell', 'Guild of Visual Arts', 'Cornell Hammock Enthusiasts’ Club', 'Cornell Health International', 'Her Campus at Cornell', 'Hip-Hop Heads', 'Hortus Forum ', 'ILR Women’s Caucus', 'International Students Union', 'Cornell Japanese Animation Society', 'The Johnson Museum Club', 'Language Expansion Program', 'Les Femmes de Substance', 'Libertarians at Cornell', 'Mapping Society at Cornell', 'Media Guild, Inc', 'The Millennial Voices Project', 'Cornell Minds Matter', 'Mock Trial Association', 'Movement Exchange at Cornell', 'Cornell Nature Society', 'NatureRx', 'Naval ROTC', 'NCPA Paintball Club', 'NEO@CU - (Northeast Ohio at Cornell University)', 'Peace Action Cornell', 'Period @ Cornell', 'Phoenix Society', 'Cornell Photo Society', 'Planned Parenthood Generation Action', 'The Pokemon League', 'Cornell Political Union', 'Prison Reform and Education Project (PREP)', 'Project Greenhouse', 'Cornell Quiz Bowl Club', 'Quodlibet', 'Cornell Raptor Program', 'Rewriting the Code at Cornell', 'Cornell Roosevelt Institute', 'Scabbard & Blade Society', 'Scheinman Conflict Resolution Club at Cornell', 'Scholars Working Ambitiously to Graduate', 'Science Olympiad at Cornell', 'Snodgrass and Wigglesworth, Cornell Undergraduate Entomology Club', 'Society for Natural Resources Conservation', 'Society for the Promotion of Indian Classical Music And Culture Amongst Youth', 'Student Educators: Art & the Museum', 'Cornell Students for Animal Rights', 'Students Off Booze Enjoying Recovery', 'Von Cramm Cooperative Hall', 'Wait Avenue Cooperative', 'Wait Terrace Cooperative', 'Watermargin Cooperative', 'Wildlife Society, Cornell University Student Chapter', 'Women of Color Coalition', 'Women’s Planning Forum', 'Women in Public Policy', "Women's Resource Center, Cornell", 'Young Democratic Socialists', 'Cornell University Class Council', 'A Capella Advisory Council (ACAC)', 'Club Sports Council', 'Community Partnership Funding Board', 'Cornell Concert Commission (CCC)', 'Cornell University Program Board (CPUB)', 'CUTonight Commission', 'Dyson Undergraduate Council', 'Fanclub Collective', 'Fantastic Fungi Fanatics', 'Farmers’ Market at Cornell', 'Interfraternity Council', 'Ivy Council', 'Jewish Greek Council (JGC)', 'Men of Color Council', 'Multicultural Concert Funding and Advisory Board', 'Multicultural Greek Letter Council', 'National Residence Hall Honorary', 'Orientation Steering Committee', 'Peer Review Board', 'Residential Student Congress', 'Risley Arts Subcommittee', 'Slope Day Programming Board', 'South Asian Council', 'Student Athlete Advisory Committee', 'Willard Straight Hall Student Union Board of Directors (SUB)', 'Diversity on the Street (DOTS)', 'Cornell Undergraduate Asia Business Society (CUABS)', 'Theta Tau'];

const clubs = [];

clubList.forEach(club => {
    clubs.push({
        name: club,
        schoolId: '60e50d23224c9d0d440bcec0',
        numReviews: '0',
        totalRating: '0',
        totalTimeCommitment: '0',
        totalRecommend: '0',
        numInterviews: '0',
        totalDifficulty: '0',
        valid: true,
    })
})
const data = {
    schools: [
        {
            name: 'Cornell University',
            image: '/images/backgrounds/cornell.jpeg',
            city: 'Ithaca',
            state: 'NY',
            numClubs: '2',
        },
    ],
    clubs: clubs
};
export default data;