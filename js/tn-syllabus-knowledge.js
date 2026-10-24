/**
 * GramLearn AI - Tamil Nadu State Board (Samacheer Kalvi) Knowledge Engine
 * Comprehensive offline curriculum database for Standards 6th to 12th.
 * Covers: Science (Physics, Chemistry, Biology), Mathematics, English, Social Science, and Tamil.
 * Guaranteed 100% offline with zero external dependencies.
 */

(function (window) {
  'use strict';

  // Comprehensive Tamil Nadu Syllabus Database for 6th - 12th Standard
  const TNSyllabusData = {
    // =========================================================================
    // 6TH STANDARD (MIDDLE SCHOOL)
    // =========================================================================
    '6th': {
      'Science': [
        {
          id: 'tn6-sci-u1',
          unit: 'Term 1 - Unit 1',
          title: 'Measurements & SI Units',
          tamilTitle: 'அளவீடுகள் மற்றும் பன்னாட்டு அலகுமுறை (SI)',
          keywords: ['measurement', 'si unit', 'length', 'mass', 'time', 'volume', 'அளவீடு', 'அலகு', 'மீட்டர்'],
          summaryEn: 'Measurement is the determination of the size, quantity, or degree of something using standard units. The International System of Units (SI) ensures universal consistency: Length is measured in metres (m), Mass in kilograms (kg), Time in seconds (s), and Temperature in Kelvin (K).',
          summaryTa: 'அளவீடு என்பது தெரிந்த ஒரு நிலையான அளவைக் கொண்டு தெரியாத அளவை ஒப்பிடுவது ஆகும். உலகம் முழுவதும் ஒரே மாதிரியான அளவீட்டு முறைக்காக பன்னாட்டு அலகுமுறை (SI Units) பயன்படுகிறது: நீளத்தின் அலகு மீட்டர் (m), நிறையின் அலகு கிலோகிராம் (kg), காலத்தின் அலகு வினாடி (s).',
          formulas: '• Volume = Length × Breadth × Height (m³)\n• 1 km = 1,000 m | 1 m = 100 cm | 1 kg = 1,000 g',
          analogy: 'Imagine buying cloth for a shirt: If every shopkeeper used their own arm-length (cubit) to measure, shirt sizes would differ everywhere! That is why standard metres and SI units exist.',
          keyPoints: [
            'SI unit of length: Metre (m), Mass: Kilogram (kg), Time: Second (s).',
            'Beam balance compares unknown mass with standard reference masses.',
            'Parallax error must be avoided by looking vertically above the measurement mark.'
          ],
          examTips: 'Always remember to write SI units in answers (e.g., 5 m, not just 5).'
        },
        {
          id: 'tn6-sci-u2',
          unit: 'Term 1 - Unit 2',
          title: 'Force and Motion',
          tamilTitle: 'விசையும் இயக்கமும்',
          keywords: ['force', 'motion', 'push', 'pull', 'speed', 'velocity', 'விசை', 'இயக்கம்', 'வேகம்'],
          summaryEn: 'Forces are pushes or pulls upon an object resulting from interaction. Forces can change the speed, direction, or shape of an object. Motion can be linear, circular, oscillatory, or periodic. Speed is the distance travelled per unit time.',
          summaryTa: 'ஒரு பொருளை தள்ளுவது அல்லது இழுப்பது விசை எனப்படும். விசை ஒரு பொருளின் இயக்கம், வேகம், திசை அல்லது வடிவத்தை மாற்றும். வேகம் என்பது ஓரலகு காலத்தில் கடந்த தொலைவு ஆகும்.',
          formulas: '• Speed = Distance ÷ Time (s = d / t)\n• SI Unit of Speed: Metre per second (m/s)',
          analogy: 'Kicking a football: The push you apply is the force, and the ball travelling toward the goal post is linear and curvilinear motion.',
          keyPoints: [
            'Contact forces: Muscular force, friction. Non-contact forces: Gravitational, magnetic, electrostatic forces.',
            'Periodic motion: Motion repeated in equal intervals of time (e.g., pendulum, heartbeat).'
          ],
          examTips: 'Know the formula: Speed = Distance / Time. If a bus travels 100 km in 2 hours, Speed = 100/2 = 50 km/h.'
        },
        {
          id: 'tn6-sci-u3',
          unit: 'Term 1 - Unit 4',
          title: 'The Living World of Plants',
          tamilTitle: 'தாவர உலகம் & உறுப்புகள்',
          keywords: ['plants', 'root', 'stem', 'leaf', 'photosynthesis', 'tap root', 'fibrous root', 'தாவரம்', 'வேர்', 'இலை'],
          summaryEn: 'Plants are autotrophic living organisms with two main organ systems: Root system (underground - tap root or fibrous root) and Shoot system (stem, leaves, flowers, fruits). Leaves contain chlorophyll pigments that manufacture food through photosynthesis.',
          summaryTa: 'தாவரங்கள் வேர்த்தொகுப்பு (ஆணிவேர் அல்லது சல்லிவேர்) மற்றும் தண்டுத்தொகுப்பு (தண்டு, இலைகள், மலர்கள், கனிகள்) என இரு முக்கிய பகுதிகளைக் கொண்டுள்ளன. இலைகளில் உள்ள பச்சையம் சூரிய ஒளியைப் பயன்படுத்தி உணவு தயாரிக்கிறது.',
          formulas: 'Root System: Tap Root (Dicot e.g., Mango, Bean) vs Fibrous Root (Monocot e.g., Grass, Paddy)',
          analogy: 'Roots act like underground anchors and straw-pipes, while green leaves act as solar kitchens for the plant.',
          keyPoints: [
            'Stomata: Tiny pores on leaf surface for transpiration and gas exchange.',
            'Victoria amazonica: Giant water lily leaf that can support weight up to 45 kg.'
          ],
          examTips: 'Difference between tap root (central thick root) and fibrous root (cluster of thin roots).'
        },
        {
          id: 'tn6-sci-u4',
          unit: 'Term 1 - Unit 5',
          title: 'Living World of Animals & Adaptations',
          tamilTitle: 'விலங்கு உலகம் மற்றும் தகவமைப்புகள்',
          keywords: ['animals', 'unicellular', 'multicellular', 'amoeba', 'adaptation', 'விலங்கு', 'அமீபா', 'தகவமைப்பு'],
          summaryEn: 'Animals exhibit diverse adaptations to survive in their habitats. Unicellular organisms like Amoeba perform all bodily functions in a single cell using pseudopodia. Multicellular animals have specialized organs. Fishes have gills and fins; birds have hollow bones for flight; camels have padded feet and fat-storing humps.',
          summaryTa: 'விலங்குகள் வாழும் சூழலுக்கு ஏற்ப தகவமைப்புகளைப் பெற்றுள்ளன. அமீபா ஒரு செல் உயிரி (போலிகால்கள் மூலம் நகரும்). மீன்களுக்கு செவுள்கள் மற்றும் துடுப்புகள்; பறவைகளுக்கு எடை குறைந்த காற்றெலும்புகள்; ஒட்டகங்களுக்கு மணலில் நடக்க தட்டையான பாதங்கள் உள்ளன.',
          formulas: '• Unicellular: Amoeba, Paramecium, Euglena\n• Multicellular: Fish, Frog, Birds, Humans',
          analogy: 'A submarine has a streamlined body and fins to cut through water, modeled directly after the body shape of a fish!',
          keyPoints: [
            'Amoeba moves using false feet called Pseudopodia.',
            'Birds have pneumatic (hollow, air-filled) bones to minimize body weight during flight.'
          ],
          examTips: 'List 2 adaptations of birds that assist in flight (streamlined body, hollow bones).'
        },
        {
          id: 'tn6-sci-u5',
          unit: 'Term 1 - Unit 6',
          title: 'Health and Hygiene: Nutrients & Vitamins',
          tamilTitle: 'உடல் நலமும் சுகாதாரமும்: ஊட்டச்சத்துக்கள் & வைட்டமின்கள்',
          keywords: ['nutrients', 'vitamins', 'carbohydrates', 'proteins', 'deficiency', 'scurvy', 'rickets', 'வைட்டமின்', 'ஊட்டச்சத்து'],
          summaryEn: 'Nutrients are chemical components in food required for growth, energy, and body repair. Six major classes: Carbohydrates, Fats, Proteins (body builders), Vitamins, Minerals, and Water. Deficiency of nutrients causes specific diseases.',
          summaryTa: 'நாம் உண்ணும் உணவில் கார்போஹைட்ரேட், புரதம், கொழுப்பு, வைட்டமின்கள், தாது உப்புகள் மற்றும் நீர் போன்ற 6 முக்கிய ஊட்டச்சத்துக்கள் உள்ளன. இவற்றின் குறைபாட்டால் குறைபாட்டு நோய்கள் ஏற்படுகின்றன.',
          formulas: '• Vitamin A -> Night Blindness (மாலைக்கண்)\n• Vitamin B -> Beriberi\n• Vitamin C -> Scurvy (ஈறுகளில் ரத்தம்)\n• Vitamin D -> Rickets (எலும்பு பலவீனம்)\n• Protein -> Kwashiorkor, Marasmus',
          analogy: 'Food is fuel for your body vehicle: Carbs are the petrol, proteins build the engine, and vitamins prevent rust and breakdowns.',
          keyPoints: [
            'Carbohydrates give instant energy (rice, potato). Proteins build muscle (pulses, eggs).',
            'Sunlight helps our skin synthesize Vitamin D naturally.'
          ],
          examTips: 'Match the vitamin with its deficiency disease in exam multiple-choice questions.'
        },
        {
          id: 'tn6-sci-u6',
          unit: 'Term 2 - Unit 1',
          title: 'Matter Around Us: Solids, Liquids & Gases',
          tamilTitle: 'நம்மைச் சுற்றியுள்ள பருப்பொருட்கள்: திட, திரவ, வாயு நிலைகள்',
          keywords: ['matter', 'solid', 'liquid', 'gas', 'diffusion', 'பருப்பொருள்', 'திடப்பொருள்', 'திரவம்', 'வாயு'],
          summaryEn: 'Matter is anything that has mass and occupies space. It exists in three primary states: Solid (fixed shape and volume, tightly packed particles), Liquid (fixed volume, takes shape of container), and Gas (neither fixed shape nor volume, particles move freely). Diffusion is the spreading of particles from high to low concentration.',
          summaryTa: 'நிறை உள்ள மற்றும் இடத்தை அடைத்துக் கொள்ளும் பொருள் பருப்பொருள் எனப்படும். இது திட (நிலையான வடிவம்), திரவ (பாயும் தன்மை, பாத்திரத்தின் வடிவம்), வாயு (சுதந்திரமாக நகரும் மூலக்கூறுகள்) ஆகிய மூன்று நிலைகளில் உள்ளது. விரவுதல் (Diffusion) என்பது மூலக்கூறுகள் பரவும் நிகழ்வு ஆகும்.',
          formulas: 'Density Order: Solids > Liquids > Gases | Intermolecular Space: Gases > Liquids > Solids',
          analogy: 'Imagine a classroom: Solids are students sitting quietly in fixed desks; liquids are students walking in hallways; gases are students running freely in the school playground!',
          keyPoints: [
            'Solids have definite shape and volume; highly incompressible.',
            'Incense stick smoke spreading across a room is a classic demonstration of diffusion in gases.'
          ],
          examTips: 'Tabulate the differences between solids, liquids, and gases based on shape, volume, and compressibility.'
        },
        {
          id: 'tn6-sci-u7',
          unit: 'Term 2 - Unit 2',
          title: 'Electricity & Simple Circuits',
          tamilTitle: 'மின்னியல் & எளிய மின்சுற்றுகள்',
          keywords: ['electricity', 'circuit', 'switch', 'battery', 'cell', 'conductor', 'insulator', 'மின்சாரம்', 'மின்சுற்று', 'மின்கடத்தி'],
          summaryEn: 'Electric current is the flow of electric charges through a closed circuit. A simple circuit consists of a source of electric power (cell/battery), conducting connecting wires, a load (bulb), and a switch (key). Conductors allow electricity to pass (copper, iron), while insulators resist electricity (plastic, rubber, wood).',
          summaryTa: 'மூடிய சுற்றில் பாயும் மின்னூட்டங்களின் ஓட்டமே மின்சாரம் ஆகும். எளிய மின்சுற்று என்பது மின்கலம் (Cell), இணைப்பு கம்பி, மின்விளக்கு (Bulb) மற்றும் சாவி (Switch) ஆகியவற்றைக் கொண்டது. மின்சாரத்தைக் கடத்தும் பொருட்கள் மின்கடத்திகள் (தாமிரம், இரும்பு); கடத்தாதவை மின்காப்பிகள் (ரப்பர், பிளாஸ்டிக்).',
          formulas: 'Closed Circuit = Switch ON (Current flows, bulb glows)\nOpen Circuit = Switch OFF (Circuit broken, bulb off)',
          analogy: 'A water pipeline with a tap: The water tank is the battery, the pipe is the wire, the tap is the switch, and the water wheel spinning is the glowing bulb!',
          keyPoints: [
            'Electric cell converts chemical energy into electrical energy.',
            'Electric shock prevention: Electricians always wear rubber gloves and footwear because rubber is an insulator.'
          ],
          examTips: 'Draw the circuit symbols for electric cell, battery, bulb, and open/closed switch.'
        },
        {
          id: 'tn6-sci-u8',
          unit: 'Term 2 - Unit 5',
          title: 'The Cell: The Basic Unit of Life',
          tamilTitle: 'செல்: உயிரினங்களின் அடிப்படை அலகு',
          keywords: ['cell', 'prokaryote', 'eukaryote', 'nucleus', 'cell wall', 'mitochondria', 'செல்', 'உட்கரு'],
          summaryEn: 'The cell is the basic structural and functional unit of all known living organisms, first discovered by Robert Hooke in 1665. Cells are broadly classified into Prokaryotic cells (lack true membrane-bound nucleus, e.g., bacteria) and Eukaryotic cells (have well-defined membrane-bound nucleus, e.g., plant and animal cells).',
          summaryTa: 'உயிரினங்களின் அடிப்படை அமைப்பு மற்றும் செயல் அலகு செல் ஆகும். 1665-ல் ராபர்ட் ஹூக் என்பவரால் முதன்முதலில் கண்டறியப்பட்டது. உட்கரு சவ்வு இல்லாதவை புரோகேரியோட்டிக் செல்கள் (பாக்டீரியா); தெளிவான உட்கரு சவ்வு கொண்டவை யூகேரியோட்டிக் செல்கள் (தாவர & விலங்கு செல்கள்).',
          formulas: '• Robert Hooke (1665) coined the term "Cell" from cork slices.\n• Powerhouse of Cell = Mitochondria | Kitchen of Cell = Chloroplast',
          analogy: 'A cell is like a brick in a building: Millions of bricks join to build a large house, just as billions of cells assemble to build a living human or plant!',
          keyPoints: [
            'Prokaryote: Primitive nucleus without nuclear membrane (e.g., Cyanobacteria).',
            'Plant cells have rigid outer cell wall of cellulose; animal cells have only plasma membrane.'
          ],
          examTips: 'Name two differences between Prokaryotic and Eukaryotic cells.'
        }
      ],
      'Mathematics': [
        {
          id: 'tn6-math-u1',
          unit: 'Term 1 - Unit 1',
          title: 'Numbers & BODMAS Rule',
          tamilTitle: 'எண்கள் & BODMAS விதிமுறை',
          keywords: ['bodmas', 'numbers', 'order of operations', 'bracket', 'எண்கள்', 'போட்மாஸ்'],
          summaryEn: 'The BODMAS rule defines the exact order to perform mathematical operations: Brackets (B) -> Orders/Powers (O) -> Division (D) -> Multiplication (M) -> Addition (A) -> Subtraction (S).',
          summaryTa: 'கணிதக் கணக்குகளை வரிசையாக தீர்க்கும் விதிமுறை BODMAS: அடைப்புக்குறி (Brackets) -> அடுக்குகள் -> வகுத்தல் (Division) -> பெருக்கல் (Multiplication) -> கூட்டல் (Addition) -> கழித்தல் (Subtraction).',
          formulas: 'BODMAS Order: ( ) -> ÷ -> × -> + -> -\nExample: 20 + 10 ÷ 2 = 20 + 5 = 25 (NOT 30÷2=15!)',
          analogy: 'BODMAS is like traffic signals at a road junction: Division and Multiplication get green light before Addition and Subtraction!',
          keyPoints: [
            'Always solve innermost brackets first.',
            'Division and multiplication have equal priority, evaluated left to right.'
          ],
          examTips: 'Never add before dividing in expressions like 6 + 12 ÷ 3. Divide first: 12÷3=4, then 6+4=10.'
        },
        {
          id: 'tn6-math-u2',
          unit: 'Term 1 - Unit 2',
          title: 'Introduction to Algebra & Variables',
          tamilTitle: 'இயற்கணித அறிமுகம் & மாறிகள்',
          keywords: ['algebra', 'variables', 'constants', 'expressions', 'மாறி', 'இயற்கணிதம்'],
          summaryEn: 'Algebra uses letters (such as x, y, a, b) called variables to represent unknown numbers whose values can change. Constants have fixed numerical values. An algebraic expression combines variables and constants using mathematical operations (+, -, ×, ÷).',
          summaryTa: 'தெரியாத மதிப்புகளைக் குறிக்க எழுத்துக்களைப் (x, y, z) பயன்படுத்துவது இயற்கணிதம் எனப்படும். மாறும் மதிப்பு கொண்டவை மாறிகள் (Variables); மாறாத நிலையான எண்கள் மாறிலிகள் (Constants).',
          formulas: '• If cost of 1 pen is ₹x, cost of 5 pens = 5x\n• Perimeter of square of side s = 4s',
          analogy: 'A mystery gift box: You do not know how many chocolates are inside the box, so you call it "x". If your friend gives you 3 more chocolates, you now have "x + 3" chocolates!',
          keyPoints: [
            'Variables take different values (e.g., in x + 2 = 5, x = 3).',
            'In 4x + 7, 4 is coefficient, x is variable, and 7 is constant.'
          ],
          examTips: 'Convert word phrases into algebraic expressions (e.g., "5 added to y" is y + 5).'
        },
        {
          id: 'tn6-math-u3',
          unit: 'Term 1 - Unit 3',
          title: 'Ratio and Proportion',
          tamilTitle: 'விகிதம் மற்றும் விகித சமம்',
          keywords: ['ratio', 'proportion', 'unitary method', 'விகிதம்', 'விகித சமம்'],
          summaryEn: 'A ratio is a comparison of two quantities of the same kind by division (a:b). A proportion states that two ratios are equal (a:b :: c:d), meaning Product of Extremes equals Product of Means (ad = bc).',
          summaryTa: 'இரண்டு ஒரே அலகுள்ள அளவுகளை ஒப்பிடுவது விகிதம் (a:b) எனப்படும். இரு விகிதங்கள் சமமாக இருப்பது விகிதசமம் (a:b = c:d) எனப்படும். இதில் கோடி உறுப்புகளின் பெருக்கற்பலன் = நடு உறுப்புகளின் பெருக்கற்பலன் (ad = bc).',
          formulas: '• Ratio: a : b = a / b\n• Proportion: a : b :: c : d => a × d = b × c',
          analogy: 'Making hot tea: 1 cup of milk to 2 spoons of sugar (1:2). If making 4 cups of milk, you need 8 spoons of sugar to keep the same sweet taste!',
          keyPoints: [
            'Ratios have no units (e.g. 5 kg : 10 kg = 1 : 2).',
            'Quantities must be in the same units before finding ratio (convert metres to cm first).'
          ],
          examTips: 'Product of Extremes = Product of Means is the most tested 2-mark formula.'
        },
        {
          id: 'tn6-math-u4',
          unit: 'Term 2 - Unit 1',
          title: 'Prime Numbers, LCM and HCF',
          tamilTitle: 'பகா எண்கள், மீசிம (LCM) & மீபெவ (HCF)',
          keywords: ['prime numbers', 'lcm', 'hcf', 'gcd', 'factors', 'multiples', 'பகா எண்', 'மீசிம', 'மீபெவ'],
          summaryEn: 'A Prime number has exactly two factors: 1 and itself (2, 3, 5, 7, 11...). 2 is the only even prime number. Highest Common Factor (HCF) is the largest factor common to given numbers. Lowest Common Multiple (LCM) is the smallest positive number that is a multiple of two or more numbers.',
          summaryTa: '1 மற்றும் அதே எண்ணால் மட்டுமே வகுபடும் எண் பகா எண் (Prime Number) எனப்படும். 2 மட்டுமே ஒரே இரட்டைப் பகா எண் ஆகும். மீபெவ (HCF) என்பது எண்களின் மிகப்பெரிய பொது வகுத்தி; மீசிம (LCM) என்பது எண்களின் மிகச்சிறிய பொது மடங்கு ஆகும்.',
          formulas: '• Product of two numbers = HCF × LCM\n• Formula: a × b = HCF(a, b) × LCM(a, b)',
          analogy: 'Two traffic lights blinking every 6 seconds and 8 seconds: They blink together at the LCM of 6 and 8, which is at the 24th second!',
          keyPoints: [
            '1 is neither prime nor composite.',
            'Co-prime numbers have an HCF of 1.'
          ],
          examTips: 'Remember: Product of two numbers = HCF × LCM. Very common 2-mark question.'
        },
        {
          id: 'tn6-math-u5',
          unit: 'Term 2 - Unit 2',
          title: 'Integers and The Number Line',
          tamilTitle: 'முழுக்கள் மற்றும் எண் கோடு',
          keywords: ['integers', 'negative numbers', 'number line', 'positive', 'முழுக்கள்', 'எண் கோடு'],
          summaryEn: 'Integers (Z) consist of positive whole numbers, zero, and negative whole numbers (..., -3, -2, -1, 0, 1, 2, 3, ...). On a horizontal number line, numbers to the right of zero are positive and increase in value, while numbers to the left are negative and decrease in value.',
          summaryTa: 'முழுக்கள் என்பது நேர் எண்கள் (+1, +2...), பூஜ்ஜியம் (0) மற்றும் எதிர் எண்களைக் (-1, -2...) கொண்ட தொகுப்பு ஆகும். எண் கோட்டில் வலதுபுறம் செல்லச் செல்ல மதிப்பு கூடும்; இடதுபுறம் செல்லச் செல்ல மதிப்பு குறையும் (-5 என்பது -2-ஐ விடச் சிறியது!).',
          formulas: '• a + (-b) = a - b\n• Absolute Value: |-7| = 7 and |7| = 7\n• -5 < -2 < 0 < 3',
          analogy: 'A building lift/elevator: Ground floor is 0. Moving up to floors 1, 2, 3 is positive; moving down into underground parking levels -1, -2 is negative integers!',
          keyPoints: [
            'Zero is greater than every negative integer and smaller than every positive integer.',
            'Every integer has an additive inverse: Inverse of +6 is -6.'
          ],
          examTips: 'Be careful when comparing negative integers: -10 is LESS than -2.'
        },
        {
          id: 'tn6-math-u6',
          unit: 'Term 2 - Unit 3',
          title: 'Perimeter and Area: Rectangle and Square',
          tamilTitle: 'சுற்றளவு மற்றும் பரப்பளவு: செவ்வகம் & சதுரம்',
          keywords: ['perimeter', 'area', 'rectangle', 'square', 'சுற்றளவு', 'பரப்பளவு', 'செவ்வகம்', 'சதுரம்'],
          summaryEn: 'Perimeter is the total boundary distance around a 2D closed shape. Area is the measure of surface region enclosed inside the boundary. For a Rectangle with length (l) and breadth (b): Perimeter = 2(l + b), Area = l × b. For a Square of side (s): Perimeter = 4s, Area = s².',
          summaryTa: 'சுற்றளவு என்பது ஒரு மூடிய வடிவத்தின் மொத்த எல்லையின் நீளம் ஆகும். பரப்பளவு என்பது அவ்வடிவம் அடைத்துக்கொள்ளும் இடத்தின் பரப்பளவு ஆகும். செவ்வகம்: சுற்றளவு = 2(l + b), பரப்பளவு = l × b. சதுரம்: சுற்றளவு = 4s, பரப்பளவு = s².',
          formulas: '• Rectangle: P = 2(l + b) | Area A = l × b\n• Square: P = 4s | Area A = s × s = s²\n• Right Triangle: Area A = ½ × base × height',
          analogy: 'Fencing a garden boundary with wire requires the Perimeter; laying grass carpet across the entire garden floor requires the Area!',
          keyPoints: [
            'Perimeter unit is linear (m or cm); Area unit is squared (m² or cm²).',
            '1 square metre = 10,000 square centimetres.'
          ],
          examTips: 'Always remember to write units in square format (e.g. cm²) for area answers.'
        }
      ],
      'Social Science': [
        {
          id: 'tn6-soc-u1',
          unit: 'Term 1 - History Unit 3',
          title: 'Indus Valley Civilization',
          tamilTitle: 'சிந்து சமவெளி நாகரிகம் (ஹரப்பா & மொகஞ்சதாரோ)',
          keywords: ['indus valley', 'harappa', 'mohenjo daro', 'great bath', 'granary', 'சிந்து சமவெளி', 'ஹரப்பா'],
          summaryEn: 'The Indus Valley Civilization (3300–1900 BCE) was a Bronze Age urban civilization located along the Indus basin. Famous for advanced town planning, straight grid-pattern roads, underground covered drainage systems, the Great Bath at Mohenjo-Daro, and massive granaries at Harappa.',
          summaryTa: 'சிந்து சமவெளி நாகரிகம் ஒரு வெண்கலக் கால நகர நாகரிகம் ஆகும் (கி.மு 3300–1900). ஹரப்பா (முதலில் கண்டறியப்பட்ட நகரம்) மற்றும் மொகஞ்சதாரோ (பெரிய குளம் - Great Bath) ஆகியவை இதன் முக்கிய நகரங்கள். நேர்த்தியான செவ்வக சாலைகள் மற்றும் மூடப்பட்ட கழிவுநீர் வடிகால் அமைப்பிற்கு இது உலகப்புகழ் பெற்றது.',
          formulas: '• First site excavated: Harappa (1921)\n• Great Bath: Mohenjo-Daro (waterproof bitumen lining)\n• Dockyard: Lothal (Gujarat)',
          analogy: 'Harappan cities were planned like modern Singapore: Straight grid roads meeting at 90 degrees with dedicated underground drainage pipes under every street!',
          keyPoints: [
            'Harappans did not know the use of iron and horses.',
            'Lothal in Gujarat had a tidal dockyard for maritime trade with Mesopotamia.'
          ],
          examTips: 'Highlight 3 features of Harappan town planning (grid streets, baked bricks, covered drainage).'
        },
        {
          id: 'tn6-soc-u2',
          unit: 'Term 3 - History Unit 1',
          title: 'Ancient Tamilagam: The Sangam Age',
          tamilTitle: 'பண்டைய தமிழகம்: சங்க காலம் (சேர, சோழ, பாண்டியர்)',
          keywords: ['sangam age', 'chola', 'chera', 'pandya', 'karikala', 'madurai', 'சங்க காலம்', 'சேர சோழ பாண்டியர்'],
          summaryEn: 'The Sangam Age (3rd century BCE to 3rd century CE) is the golden classical era of Tamil literature and culture. Ruled by the Three Crowned Monarchs (Moovendhar): Cheras (Vanji, Bow and Arrow), Cholas (Uraiyur/Poompuhar, Tiger, King Karikalan who built Kallanai dam), and Pandyas (Madurai, Fish emblem, Sangam patron).',
          summaryTa: 'சங்க காலம் என்பது பண்டைய தமிழகத்தின் செவ்வியல் பொற்காலம் ஆகும். மூவேந்தர்கள் ஆண்டனர்: சேரர்கள் (வில்-அம்பு சின்னம், தலைநகர் வஞ்சி), சோழர்கள் (புலி சின்னம், தலைநகர் உறையூர், கல்லணையைக் கட்டிய கரிகாலன்), பாண்டியர்கள் (மீன் சின்னம், தலைநகர் மதுரை, தமிழ்ச் சங்கம் அமைத்து தமிழை வளர்த்தவர்கள்).',
          formulas: '• Chera: Bow & Arrow | Capital: Vanji\n• Chola: Tiger | Capital: Uraiyur / Puhar | Kallanai built by Karikalan\n• Pandya: Two Fishes | Capital: Madurai (Tamil Sangam)',
          analogy: 'Kallanai dam built across the Kaveri river by Chola king Karikalan in the 2nd century CE is the world’s oldest functioning water diversion dam still in daily agricultural use today!',
          keyPoints: [
            'Tamil Sangams were literary academies patronized by Pandyan kings in Madurai.',
            'Kallanai dam is built of unhewn stone across the Kaveri river.'
          ],
          examTips: 'Name the Moovendhar, their capitals, and their royal flags/emblems.'
        },
        {
          id: 'tn6-soc-u3',
          unit: 'Term 1 - Geography Unit 1',
          title: 'The Universe and Solar System',
          tamilTitle: 'பேரண்டம் மற்றும் சூரிய குடும்பம்',
          keywords: ['universe', 'solar system', 'planets', 'galaxy', 'milky way', 'earth', 'சூரிய குடும்பம்', 'கோள்கள்'],
          summaryEn: 'The Universe formed around 15 billion years ago after the Big Bang. It contains billions of galaxies, including our Milky Way. The Solar System consists of the Sun (99.8% of mass) and 8 planets: Inner rocky planets (Mercury, Venus, Earth, Mars) and Outer gas giants (Jupiter, Saturn, Uranus, Neptune). Earth is the 3rd planet, known as the Blue Planet.',
          summaryTa: 'சுமார் 1500 கோடி ஆண்டுகளுக்கு முன் பெருவெடிப்பின் (Big Bang) மூலம் பேரண்டம் உருவானது. பால்வீதி விண்மீன் திரளில் உள்ள சூரிய குடும்பத்தில் 8 கோள்கள் உள்ளன: புதன், வெள்ளி, பூமி (நீலக்கோள் - உயிரினங்கள் வாழும் ஒரே கோள்), செவ்வாய், வியாழன், சனி, யுரேனஸ், நெப்டியூன்.',
          formulas: '• Distance from Earth to Sun: ~150 million km (1 AU)\n• Earth Rotation = 24 hours (causes Day/Night) | Revolution = 365¼ days (causes Seasons)',
          analogy: 'If the Sun were the size of a standard basketball, Earth would be a tiny grain of mustard seed placed 26 metres away!',
          keyPoints: [
            'Venus is the hottest planet due to dense CO2 atmosphere, rotates clockwise.',
            'Jupiter is the largest planet in our solar system.'
          ],
          examTips: 'Order of 8 planets from Sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.'
        }
      ]
    },

    // =========================================================================
    // 7TH STANDARD
    // =========================================================================
    '7th': {
      'Science': [
        {
          id: 'tn7-sci-u1',
          unit: 'Term 1 - Unit 1',
          title: 'Measurement & Density',
          tamilTitle: 'அளவீட்டியல் & அடர்த்தி',
          keywords: ['density', 'mass', 'volume', 'அடர்த்தி', 'அளவீடு'],
          summaryEn: 'Density is the mass per unit volume of a substance (d = M/V). Substances with higher density sink in water, while substances with lower density float. The density of pure water is 1000 kg/m³ (or 1 g/cm³).',
          summaryTa: 'ஒரு பொருளின் அடர்த்தி என்பது அதன் ஓரலகு பருமனில் உள்ள நிறை ஆகும் (அடர்த்தி = நிறை / பருமன்). நீரை விட அதிக அடர்த்தி கொண்ட பொருட்கள் மூழ்கும்; குறைந்த அடர்த்தி கொண்டவை மிதக்கும்.',
          formulas: '• Density = Mass ÷ Volume (d = M / V)\n• SI Unit: kg/m³ | CGS Unit: g/cm³',
          analogy: 'An iron nail and a piece of wood of the same size: The iron nail is packed with much more matter, so it is denser and sinks, while wood floats.',
          keyPoints: [
            'Astronomical Unit (AU): Average distance from Earth to Sun = 1.496 × 10¹¹ m.',
            'Light Year: Distance light travels in vacuum in 1 year = 9.46 × 10¹⁵ m.'
          ],
          examTips: 'Memorize the formula d = M / V and unit kg/m³.'
        },
        {
          id: 'tn7-sci-u2',
          unit: 'Term 1 - Unit 2',
          title: 'Force and Motion: Velocity & Acceleration',
          tamilTitle: 'விசையும் இயக்கமும்: திசைவேகம் மற்றும் முடுக்கம்',
          keywords: ['velocity', 'acceleration', 'displacement', 'distance', 'திசைவேகம்', 'முடுக்கம்', 'இடப்பெயர்ச்சி'],
          summaryEn: 'Distance is the actual length of path traversed; Displacement is the shortest straight-line distance between initial and final points. Velocity is the rate of change of displacement (v = s/t). Acceleration is the rate of change of velocity (a = [v - u]/t).',
          summaryTa: 'தொலைவு என்பது கடந்த பாதையின் மொத்த நீளம்; இடப்பெயர்ச்சி என்பது தொடக்க மற்றும் இறுதி நிலைகளுக்கு இடைப்பட்ட மிகக் குறைந்த நேர்க்கோட்டு தொலைவு. திசைவேகம் என்பது இடப்பெயர்ச்சி மாறும் வீதம்; முடுக்கம் என்பது திசைவேக மாறுபாட்டு வீதம் ஆகும்.',
          formulas: '• Velocity v = Displacement / Time (m/s)\n• Acceleration a = (v - u) / t (m/s²)\n• Negative acceleration is called Retardation or Deceleration.',
          analogy: 'Running a 400m circular athletic track and returning to the exact starting line: Distance travelled = 400 metres, but your net Displacement = 0 metres!',
          keyPoints: [
            'Distance is a scalar quantity (magnitude only); Displacement is a vector (magnitude and direction).',
            'SI unit of acceleration is m/s².'
          ],
          examTips: 'Differentiate between distance and displacement with examples.'
        },
        {
          id: 'tn7-sci-u3',
          unit: 'Term 1 - Unit 3',
          title: 'Matter Around Us: Elements & Compounds',
          tamilTitle: 'நம்மைச் சுற்றியுள்ள பருப்பொருட்கள்: தனிமங்கள் & சேர்மங்கள்',
          keywords: ['elements', 'compounds', 'molecules', 'symbols', 'தனிமம்', 'சேர்மம்', 'மூலக்கூறு'],
          summaryEn: 'An Element is a pure substance consisting of only one type of atom (e.g., Gold Au, Oxygen O). A Compound consists of two or more elements chemically combined in a fixed proportion by mass (e.g., Water H2O is 2:1 ratio of H to O). J.J. Berzelius proposed the modern system of using letter symbols for chemical elements.',
          summaryTa: 'ஒரே வகையான அணுக்களால் ஆன தூய பொருள் தனிமம் (தங்கம், இரும்பு) எனப்படும். இரண்டு அல்லது அதற்கு மேற்பட்ட தனிமங்கள் குறிப்பிட்ட நிறை விகிதத்தில் வேதியியல் ரீதியாக இணைந்து உருவாவது சேர்மம் (தண்ணீர் H₂O, சோடியம் குளோரைடு NaCl) ஆகும்.',
          formulas: '• Water = H2O (Hydrogen + Oxygen in 2:1 ratio)\n• Common Salt = NaCl (Sodium + Chlorine)\n• Carbon Dioxide = CO2',
          analogy: 'Elements are like individual English alphabet letters (A, B, C...); compounds are like meaningful words (C-A-T) formed by joining letters in a strict recipe!',
          keyPoints: [
            'Chemical symbols: First letter capital (C for Carbon, O for Oxygen); two-letter symbols (Ca for Calcium, Fe for Iron from Latin Ferrum).',
            'Compounds have completely different properties from their constituent elements.'
          ],
          examTips: 'Name two elements derived from Latin names (Fe for Ferrum/Iron, Cu for Cuprum/Copper).'
        },
        {
          id: 'tn7-sci-u4',
          unit: 'Term 2 - Unit 1',
          title: 'Heat and Temperature',
          tamilTitle: 'வெப்பம் மற்றும் வெப்பநிலை',
          keywords: ['heat', 'temperature', 'celsius', 'fahrenheit', 'kelvin', 'conduction', 'வெப்பம்'],
          summaryEn: 'Heat is a form of thermal energy that flows from a body at higher temperature to lower temperature. Temperature is the degree of hotness or coldness. Heat transfers via Conduction (solids), Convection (liquids/gases), and Radiation (vacuum).',
          summaryTa: 'வெப்பம் என்பது அதிக வெப்பநிலையில் உள்ள பொருளிலிருந்து குறைந்த வெப்பநிலைக்குப் பாயும் ஆற்றல். வெப்பநிலையின் SI அலகு கெல்வின் (K). வெப்பம் கடத்துதல், வெப்பச்சலனம், வெப்பக்கதிர்வீச்சு ஆகிய வழிகளில் பரவுகிறது.',
          formulas: '• C/100 = (F - 32)/180\n• K = C + 273.15\n• Normal human body temp = 37 °C (98.6 °F)',
          analogy: 'Hot tea in a cup: The spoon gets hot by conduction, boiling water circulates by convection, and feeling warmth across the table is radiation.',
          keyPoints: [
            'Clinical thermometer range: 35 °C to 42 °C (or 94 °F to 108 °F).',
            'Mercury expands uniformly and does not stick to glass walls.'
          ],
          examTips: 'Formula C/100 = (F-32)/180 is very frequently asked for unit conversions.'
        },
        {
          id: 'tn7-sci-u5',
          unit: 'Term 2 - Unit 2',
          title: 'Electricity: Electric Current & Components',
          tamilTitle: 'மின்னியல்: மின்னோட்டம் மற்றும் மின்சுற்று பாகங்கள்',
          keywords: ['electric current', 'ammeter', 'circuit', 'fuse', 'மின்னோட்டம்', 'ஆம்பியர்', 'மின் உருகி'],
          summaryEn: 'Electric current (I) is the flow of electric charges per unit time: I = Q / t. The SI unit of current is the Ampere (A), measured using an instrument called an Ammeter connected in series. Heating effect of current is used in electric heaters and safety electric fuses.',
          summaryTa: 'ஓரலகு காலத்தில் பாயும் மின்னூட்டங்களின் அளவே மின்னோட்டம் (I = Q / t) எனப்படும். இதன் SI அலகு ஆம்பியர் (A). மின்னோட்டத்தை அளக்க அம்மீட்டர் பயன்படுகிறது. மின்சாரத்தின் வெப்ப விளைவு மின் உருகி (Fuse) மற்றும் இஸ்திரி பெட்டியில் பயன்படுகிறது.',
          formulas: '• Current: I = Q / t (Ampere A = Coulomb / Second)\n• Electrical Safety: Fuse wire melts and breaks circuit when excess current flows.',
          analogy: 'Water flowing through a canal: The speed of water flow is Current (Amperes), and an automated safety floodgate that drops during heavy floods is the safety Fuse wire!',
          keyPoints: [
            'Ammeter must always be connected in series in an electric circuit.',
            'Fuse wire is made of lead and tin alloy with low melting point.'
          ],
          examTips: 'State the SI unit of electric current and name the device used to measure it.'
        },
        {
          id: 'tn7-sci-u6',
          unit: 'Term 3 - Unit 1',
          title: 'Light: Reflection & Spherical Mirrors',
          tamilTitle: 'ஒளியியல்: எதிரொலிப்பு மற்றும் கோள ஆடிகள்',
          keywords: ['light', 'reflection', 'plane mirror', 'concave mirror', 'convex mirror', 'ஒளி', 'எதிரொலிப்பு', 'ஆடி'],
          summaryEn: 'Light travels in straight lines (rectilinear propagation). When light hits a polished surface, it bounces back (reflection). Laws of reflection: 1) Angle of incidence equals angle of reflection (i = r), 2) Incident ray, reflected ray, and normal all lie in same plane. Concave mirrors form magnified real/virtual images (used by dentists and headlamps); Convex mirrors always form diminished virtual images with wide field of view (used as vehicle rear-view mirrors).',
          summaryTa: 'ஒளி நேர்க்கோட்டில் செல்கிறது. படுகோணமும் எதிரொலிப்புக் கோணமும் சமம் (i = r). குழி ஆடி (Concave mirror) உருப்பெருக்கப்பட்ட பிம்பத்தை உருவாக்குவதால் பல் மருத்துவர்கள் மற்றும் வாகன முகப்பு விளக்குகளில் பயன்படுகிறது; குவி ஆடி (Convex mirror) நேரான சிறிய பிம்பத்தை பரந்த பார்வைப் புலத்துடன் தருவதால் வாகனப் பின்நோக்கு ஆடியாகப் பயன்படுகிறது.',
          formulas: '• Law of Reflection: Angle i = Angle r\n• Concave Mirror: Converging | Convex Mirror: Diverging (wide view)',
          analogy: 'A shiny stainless steel spoon: The inner curved scoop acts as a concave mirror (inverts your face), while the outer curved back acts as a convex mirror (shows a small, upright face with a wide room view)!',
          keyPoints: [
            'Convex mirror is chosen for rear-view mirrors because it always gives an upright image and covers a wide traffic field.',
            'Plane mirror image is laterally inverted (left appears as right).'
          ],
          examTips: 'Why are convex mirrors used as rear-view mirrors in automobiles? (Guaranteed 2-mark question).'
        }
      ],
      'Mathematics': [
        {
          id: 'tn7-math-u1',
          unit: 'Term 1 - Unit 1',
          title: 'Number System & Integer Rules',
          tamilTitle: 'எண்ணியல் & முழுக்கள் கூட்டல்/பெருக்கல் விதிகள்',
          keywords: ['integers', 'negative numbers', 'multiplication rule', 'முழுக்கள்'],
          summaryEn: 'Integers consist of whole numbers and negative numbers (..., -2, -1, 0, 1, 2, ...). Sign rules: (+) × (+) = (+), (-) × (-) = (+), (+) × (-) = (-), (-) × (+) = (-).',
          summaryTa: 'முழுக்கள் என்பது நேர் எண்கள், பூஜ்ஜியம் மற்றும் எதிர் எண்களைக் கொண்டது. பெருக்கல் விதி: ஒரே குறிகள் பெருக்குமானால் (+) விடை; வெவ்வேறான குறிகள் பெருக்குமானால் (-) விடை வரும்.',
          formulas: '• (-) × (-) = (+)\n• (-) × (+) = (-)\n• Division of like signs is positive, unlike signs is negative.',
          analogy: 'Lending and borrowing money: If you borrow ₹100 twice, your balance is (-100) × 2 = -₹200.',
          keyPoints: [
            'Zero is neither positive nor negative.',
            'Additive inverse of a is -a (sum is 0).'
          ],
          examTips: 'Watch out for double negatives: -(-5) becomes +5.'
        },
        {
          id: 'tn7-math-u2',
          unit: 'Term 1 - Unit 2',
          title: 'Measurements: Area of Parallelogram & Rhombus',
          tamilTitle: 'அளவியல்: இணைகரம், சாய் சதுரம் & சரிவகம் பரப்பளவு',
          keywords: ['parallelogram', 'rhombus', 'trapezium', 'area', 'இணைகரம்', 'சாய் சதுரம்', 'சரிவகம்'],
          summaryEn: 'Area of a Parallelogram = base × height (b × h). Area of a Rhombus with diagonals d1 and d2 = ½ × d1 × d2. Area of a Trapezium with parallel sides a and b and perpendicular height h = ½ × h × (a + b).',
          summaryTa: 'இணைகரத்தின் பரப்பளவு = அடிப்பக்கம் × உயரம் (b × h). சாய் சதுரத்தின் பரப்பளவு = ½ × d₁ × d₂ (மூலைவிட்டங்கள் d₁, d₂). சரிவகத்தின் பரப்பளவு = ½ × h × (a + b) (இணை பக்கங்கள் a, b; உயரம் h).',
          formulas: '• Parallelogram Area = b × h\n• Rhombus Area = ½ × d1 × d2\n• Trapezium Area = ½ × h × (a + b)',
          analogy: 'Cutting a parallelogram diagonally and shifting the triangle to the other side transforms it into a standard rectangle of area base × height!',
          keyPoints: [
            'Diagonals of a rhombus bisect each other at right angles (90°).',
            'Height of trapezium is the perpendicular distance between its parallel sides.'
          ],
          examTips: 'Memorize the formula for area of Trapezium: ½ × h × (a + b).'
        },
        {
          id: 'tn7-math-u3',
          unit: 'Term 1 - Unit 3',
          title: 'Algebra: Expressions & Like Terms',
          tamilTitle: 'இயற்கணிதம்: இயற்கணிதக் கோவைகள் & ஒத்த உறுப்புகள்',
          keywords: ['algebra', 'like terms', 'unlike terms', 'coefficients', 'degree', 'இயற்கணிதம்', 'ஒத்த உறுப்புகள்'],
          summaryEn: 'Algebraic terms with the exact same variables and identical powers are called Like Terms (e.g., 5x and -2x). Only like terms can be added or subtracted together (5x + 3x = 8x). Unlike terms (e.g., 5x and 3y) cannot be combined into a single term.',
          summaryTa: 'ஒரே மாறிகளையும் ஒரே அடுக்குகளையும் கொண்ட உறுப்புகள் ஒத்த உறுப்புகள் (Like terms) எனப்படும் (எ.கா: 7xy, -3xy). ஒத்த உறுப்புகளை மட்டுமே கூட்டவோ கழிக்கவோ முடியும். வெவ்வேறான மாறிகள் கொண்ட மாறுபட்ட உறுப்புகளை கூட்ட முடியாது (5x + 3y அப்படியே இருக்கும்).',
          formulas: '• Addition: 4x² + 7x² = 11x²\n• Subtraction: (9a + 4b) - (3a - 2b) = 6a + 6b\n• Degree of expression: Highest power of variable',
          analogy: 'Think of fruits: 4 apples + 3 apples = 7 apples (like terms can be added). But 4 apples + 3 mangoes cannot be combined into 7 applemangoes!',
          keyPoints: [
            'Change signs of every term in the subtrahend during algebraic subtraction.',
            'The numerical coefficient of -x is -1.'
          ],
          examTips: 'Collect like terms together before performing addition or subtraction.'
        },
        {
          id: 'tn7-math-u4',
          unit: 'Term 1 - Unit 4',
          title: 'Direct and Inverse Proportion',
          tamilTitle: 'நேர் மற்றும் எதிர் விகிதம்',
          keywords: ['direct proportion', 'inverse proportion', 'unitary method', 'நேர் விகிதம்', 'எதிர் விகிதம்'],
          summaryEn: 'Two quantities x and y are in Direct Proportion if an increase in x causes a proportional increase in y (x/y = k, constant). They are in Inverse Proportion if an increase in x causes a proportional decrease in y (x × y = k, constant).',
          summaryTa: 'ஒரு அளவு அதிகரிக்கும் போது மற்றொன்றும் அதே விகிதத்தில் அதிகரித்தால் அது நேர் விகிதம் (x / y = k மாறிலி). ஒரு அளவு அதிகரிக்கும் போது மற்றொன்று குறைந்தால் அது எதிர் விகிதம் (x × y = k மாறிலி) எனப்படும்.',
          formulas: '• Direct Proportion: x1 / y1 = x2 / y2\n• Inverse Proportion: x1 × y1 = x2 × y2',
          analogy: 'Buying petrol: More litres means higher total cost (Direct). Driving speed and travel time: Faster speed means fewer hours to reach destination (Inverse)!',
          keyPoints: [
            'Number of workers and time taken to complete a job is always in Inverse Proportion.',
            'Cost of items and number of items is in Direct Proportion.'
          ],
          examTips: 'Identify whether the situation is direct (x/y constant) or inverse (xy constant) before writing the cross-multiplication equation.'
        },
        {
          id: 'tn7-math-u5',
          unit: 'Term 2 - Unit 2',
          title: 'Percentage and Simple Interest',
          tamilTitle: 'சதவீதம் மற்றும் தனிவட்டி (Simple Interest)',
          keywords: ['percentage', 'simple interest', 'pnr', 'interest', 'தனிவட்டி', 'சதவீதம்'],
          summaryEn: 'Percentage means parts per hundred (%). Simple Interest (I) is calculated using Principal (P), Number of years (N), and Rate of interest (R): I = (P × N × R) / 100. Total Amount (A) = P + I.',
          summaryTa: 'தனிவட்டி என்பது வாங்கிய அசல் தொகைக்கு (P) குறிப்பிட்ட காலம் (N) மற்றும் வட்டி விகிதத்தில் (R) கணக்கிடப்படும் தொகையாகும்: I = (P × N × R) / 100. மொத்தத் தொகை = அசல் + வட்டி (A = P + I).',
          formulas: '• Simple Interest: I = (P × N × R) / 100\n• Amount: A = P + I\n• Principal: P = (100 × I) / (N × R)',
          analogy: 'If you deposit ₹1,000 at 5% interest in a bank for 2 years: Interest = (1000 × 2 × 5) / 100 = ₹100. Total balance = ₹1,100.',
          keyPoints: [
            'Time (N) must always be in years (convert months by dividing by 12).',
            'Rate (R) is expressed in % per annum.'
          ],
          examTips: 'Remember the formula I = PNR/100 and write the final Total Amount A = P + I.'
        }
      ],
      'Social Science': [
        {
          id: 'tn7-soc-u1',
          unit: 'Term 1 - History Unit 2',
          title: 'The Later Cholas and Pandyas',
          tamilTitle: 'பிற்காலச் சோழர்களும் பாண்டியர்களும் (தஞ்சை பெரிய கோவில்)',
          keywords: ['later cholas', 'rajaraja chola', 'rajendra chola', 'brihadisvara', 'thanjavur', 'சோழர்கள்', 'ராஜராஜ சோழன்'],
          summaryEn: 'Rajaraja Chola I (985–1014 CE) revived the Chola Empire and constructed the grand Brihadisvara Temple (Big Temple) in Thanjavur in 1010 CE. His son Rajendra Chola I expanded the naval empire to the Ganges (Gangaikonda Cholapuram) and Southeast Asia (Sri Vijaya). Chola administration was renowned for self-governing village assemblies (Kudavolai system).',
          summaryTa: 'முதலாம் ராஜராஜ சோழன் 1010-ல் உலகப் புகழ்பெற்ற தஞ்சை பெரிய கோவிலைக் (பிரகதீஸ்வரர் கோவில்) கட்டினார். அவரது மகன் முதலாம் ராஜேந்திர சோழன் கங்கை வரை படையெடுத்து கங்கைகொண்ட சோழபுரத்தை உருவாக்கினார் மற்றும் கடற்படை மூலம் தென்கிழக்கு ஆசியாவை வென்றார். சோழர்களின் கிராம தன்னாட்சி முறை (குடவோலை முறை) வரலாற்றுச் சிறப்புமிக்கது.',
          formulas: '• Thanjavur Big Temple built: 1010 CE by Rajaraja I (Vimana height: 216 feet)\n• Local governance: Kudavolai system recorded in Uttaramerur Inscriptions',
          analogy: 'The Kudavolai system in ancient Tamil villages was the world’s earliest ballot paper voting system: Villagers wrote candidate names on palm leaves and a young child picked the winning leaf from an earthen pot!',
          keyPoints: [
            'Uttaramerur inscriptions in Kanchipuram detail the village administrative qualifications and electoral rules.',
            'Brihadisvara temple’s 80-tonne granite monolithic cupola was raised to the top via an inclined ramp.'
          ],
          examTips: 'Write a short note on the Kudavolai system and the architectural grandeur of Thanjavur Big Temple.'
        },
        {
          id: 'tn7-soc-u2',
          unit: 'Term 1 - Geography Unit 1',
          title: 'Interior of the Earth',
          tamilTitle: 'பூமியின் உட்பகுதி (புவி மேலோடு, கவசம், கருவம்)',
          keywords: ['crust', 'mantle', 'core', 'sial', 'sima', 'nife', 'பூமியின் உட்பகுதி', 'மேலோடு', 'கருவம்'],
          summaryEn: 'The Earth consists of three concentric layers: 1) Crust: Uppermost thin rocky layer, divided into continental crust (SIAL - Silica and Alumina) and oceanic crust (SIMA - Silica and Magnesium). 2) Mantle: Middle thick molten layer (84% of volume). 3) Core: Innermost hot metallic core (NIFE - Nickel and Iron / Ferrous), responsible for Earth’s magnetic field.',
          summaryTa: 'பூமி மூன்று அடுக்குகளைக் கொண்டது: 1) புவி மேலோடு (Crust): மேல் அடுக்கு - கண்ட மேலோடு (சியால் SIAL: சிலிக்கா + அலுமினியம்), கடல் மேலோடு (சிமா SIMA: சிலிக்கா + மெக்னீசியம்). 2) கவசம் (Mantle): நடு அடுக்கு (84% பருமன்). 3) புவி கருவம் (Core - NIFE): உட்பகுதி - நிக்கல் மற்றும் இரும்பு (Ferrum) நிறைந்தது.',
          formulas: '• Crust: SIAL (Silica + Alumina) & SIMA (Silica + Magnesia)\n• Core: NIFE (Nickel + Ferrous / Iron) with temperatures up to 5,000 °C',
          analogy: 'The Earth is structured exactly like a hard-boiled egg: The thin brittle outer shell is the Crust, the thick white albumen is the Mantle, and the central dense yolk is the Core!',
          keyPoints: [
            'Outer core is liquid molten metal; inner core is solid due to crushing gravitational pressure.',
            'Earthquakes and volcanic eruptions originate in the movement of lithospheric tectonic plates.'
          ],
          examTips: 'Explain SIAL, SIMA, and NIFE layers with a neat cross-sectional diagram of the Earth.'
        }
      ]
    },

    // =========================================================================
    // 8TH STANDARD
    // =========================================================================
    '8th': {
      'Science': [
        {
          id: 'tn8-sci-u1',
          unit: 'Unit 1 & 2',
          title: 'Measurement & Pascal’s Law',
          tamilTitle: 'அளவீட்டியல் & பாஸ்கல் விதி (Pascal’s Law)',
          keywords: ['pascal law', 'pressure', 'screw gauge', 'vernier', 'பாஸ்கல் விதி', 'அழுத்தம்'],
          summaryEn: 'Pascal’s Law states that the external pressure applied to any point of an enclosed fluid is transmitted equally and undiminished throughout the liquid in all directions. It forms the basis of hydraulic brakes, hydraulic lifts, and heavy vehicle jacks.',
          summaryTa: 'பாஸ்கல் விதி: மூடிய ஒரு திரவத்தின் மீது செலுத்தப்படும் அழுத்தமானது, அத்திரவத்தின் அனைத்து திசைகளிலும் சமமாக கடத்தப்படும். இது ஹைட்ராலிக் பிரேக் மற்றும் ஹைட்ராலிக் லிப்ட் போன்றவற்றில் பயன்படுகிறது.',
          formulas: '• Pressure = Force / Area (P = F / A)\n• SI Unit of Pressure: Pascal (Pa) or N/m²',
          analogy: 'Toothpaste tube: When you squeeze anywhere at the bottom, the paste squirts out evenly from the nozzle.',
          keyPoints: [
            'Hydraulic lift: A small force on a small piston produces a huge lifting force on a large piston.',
            'Vernier caliper measures dimensions up to 0.1 mm; Screw gauge measures up to 0.01 mm.'
          ],
          examTips: 'Define Pascal’s Law and name two applications (hydraulic brakes, hydraulic jack).'
        },
        {
          id: 'tn8-sci-u2',
          unit: 'Unit 3',
          title: 'Light: Laws of Reflection & Spherical Aberration',
          tamilTitle: 'ஒளியியல்: எதிரொலிப்பு விதிகள் & ஒழுங்கான/ஒழுங்கற்ற எதிரொலிப்பு',
          keywords: ['laws of reflection', 'periscope', 'kaleidoscope', 'refraction', 'ஒளி எதிரொலிப்பு', 'பெரிஸ்கோப்'],
          summaryEn: 'Light reflection obeys two fundamental laws: 1) Angle of incidence equals angle of reflection (i = r), 2) Incident ray, normal, and reflected ray all lie in the same plane. Multiple reflections in parallel or inclined mirrors form the operating principle of Kaleidoscopes (symmetrical patterns) and Periscopes (submarine viewing over obstacles).',
          summaryTa: 'ஒளி எதிரொலிப்பு விதிகள்: 1) படுகோணமும் எதிரொலிப்புக் கோணமும் சமம் (i = r). 2) படுகதிர், எதிரொலிப்புக் கதிர் மற்றும் படுபுள்ளியில் வரையப்படும் செங்குத்துக் கோடு ஆகியவை ஒரே தளத்தில் அமையும். பெரிஸ்கோப் மற்றும் கலைடாஸ்கோப் பன்முக எதிரொலிப்பு தத்துவத்தில் இயங்குகின்றன.',
          formulas: '• Number of images formed by two mirrors at angle θ: n = (360° / θ) - 1\n• If θ = 90°, n = (360/90) - 1 = 3 images',
          analogy: 'A periscope in a submarine allows sailors under the sea surface to look at ships above water using two 45-degree angled mirrors that bounce light down a tube!',
          keyPoints: [
            'Regular reflection occurs from smooth polished surfaces (clear image).',
            'Diffuse / irregular reflection occurs from rough surfaces (scatters light without sharp image).'
          ],
          examTips: 'Calculate the number of images formed when two mirrors are kept at 60°: n = (360/60) - 1 = 5 images.'
        },
        {
          id: 'tn8-sci-u3',
          unit: 'Unit 5',
          title: 'Sound: Frequency, Amplitude & Audible Range',
          tamilTitle: 'ஒலியியல்: அதிர்வெண், வீச்சு & கேட்கும் வரம்பு',
          keywords: ['sound', 'frequency', 'hertz', 'amplitude', 'infrasonic', 'ultrasonic', 'அதிர்வெண்', 'மீயொலி', 'ஹெர்ட்ஸ்'],
          summaryEn: 'Sound is produced by vibrating bodies and propagates as mechanical longitudinal waves requiring a material medium. Amplitude determines Loudness; Frequency determines Pitch/Shrillness (measured in Hertz Hz). Human audible frequency range is 20 Hz to 20,000 Hz (20 kHz). Infrasonic sounds are < 20 Hz (whales, elephants); Ultrasonic sounds are > 20,000 Hz (bats, SONAR, medical scans).',
          summaryTa: 'ஒலி அதிர்வுகளால் உருவாகிறது. வீச்சு (Amplitude) ஒலியின் உரத்த தன்மையையும், அதிர்வெண் (Frequency) ஒலியின் சுருதியையும் (Pitch) தீர்மானிக்கிறது. மனிதனால் கேட்கக்கூடிய ஒலியின் அதிர்வெண் வரம்பு 20 Hz முதல் 20,000 Hz வரை ஆகும். 20 Hz-க்கு குறைவானவை குற்றொலி; 20,000 Hz-க்கு அதிகமானவை மீயொலி (Ultrasonic) எனப்படும்.',
          formulas: '• Frequency f = 1 / Time Period T (Hertz Hz)\n• Human Hearing: 20 Hz to 20,000 Hz\n• Speed of Sound in Air ≈ 343 m/s',
          analogy: 'A lion’s roar has high amplitude (very loud) but low frequency (low pitch). A mosquito buzzing has low amplitude (faint) but high frequency (high shrill pitch)!',
          keyPoints: [
            'Sound cannot travel through vacuum because it requires molecular collisions.',
            'Bats emit ultrasonic sound waves to detect insect prey via echolocation.'
          ],
          examTips: 'State the human audible range of sound (20 Hz to 20,000 Hz) and define Ultrasonic sound.'
        },
        {
          id: 'tn8-sci-u4',
          unit: 'Unit 6',
          title: 'Microorganisms (Bacteria, Viruses, Fungi)',
          tamilTitle: 'நுண்ணுயிரிகள் (பாக்டீரியா, வைரஸ், பூஞ்சை)',
          keywords: ['microorganisms', 'bacteria', 'virus', 'fungi', 'vaccine', 'நுண்ணுயிரி', 'வைரஸ்'],
          summaryEn: 'Microorganisms are microscopic living forms: Bacteria (prokaryotic cells, rod/spherical), Viruses (non-cellular, active only inside host), Fungi (yeast, moulds), and Protozoa. Useful microbes help in curd preparation (Lactobacillus), antibiotics (Penicillium), and nitrogen fixation (Rhizobium).',
          summaryTa: 'நுண்ணுயிரிகள் பாக்டீரியா, வைரஸ், பூஞ்சை, பாசி, புரோட்டோசோவா என வகைப்படுத்தப்படுகின்றன. லாக்டோபேசில்லஸ் பாலைத் தயிராக்குகிறது; பென்சிலின் என்ற முதல் நுண்ணுயிர் எதிர்ப்பொருள் அலெக்சாண்டர் பிளெமிங்கால் கண்டுபிடிக்கப்பட்டது.',
          formulas: 'Sir Alexander Fleming discovered Penicillin in 1928 from Penicillium notatum fungus.',
          analogy: 'Yeast is like a microscopic bakery worker: When added to dosa batter or bread dough, it releases CO2 gas that makes it soft and spongy.',
          keyPoints: [
            'Viruses have only genetic material (DNA or RNA) wrapped in a protein coat.',
            'Edward Jenner developed the world’s first smallpox vaccine.'
          ],
          examTips: 'Name one useful bacterium (Lactobacillus) and one harmful virus (Influenza).'
        },
        {
          id: 'tn8-sci-u5',
          unit: 'Unit 9',
          title: 'Matter: Metals, Non-Metals & Metalloids',
          tamilTitle: 'பருப்பொருள்: உலோகங்கள், அலோகங்கள் மற்றும் உலோகப்போலிகள்',
          keywords: ['metals', 'non-metals', 'malleability', 'ductility', 'sonorous', 'உலோகங்கள்', 'அலோகங்கள்'],
          summaryEn: 'Metals are shiny (lustrous), hard, malleable (can be hammered into thin sheets), ductile (drawn into wires), sonorous (ring when struck), and good conductors of heat and electricity (e.g., Copper, Iron, Gold). Mercury is the only liquid metal at room temperature. Non-metals are dull, brittle, and poor conductors (except graphite). Metalloids have mixed properties (Silicon, Germanium).',
          summaryTa: 'உலோகங்கள் பளபளப்பானவை, கம்பியாக நீளும் (Ductility), தகடாக அடிபடும் (Malleability) மற்றும் மின்சாரத்தை கடத்தும் தன்மை கொண்டவை (தாமிரம், தங்கம்). பாதரசம் மட்டுமே அறை வெப்பநிலையில் திரவமாக உள்ள உலோகம். அலோகங்கள் மின்கடத்தாப் பொருட்கள் (கிராபைட் தவிர). சிலிக்கான், ஜெர்மானியம் ஆகியவை உலோகப்போலிகள் ஆகும்.',
          formulas: '• Malleability: Gold & Silver can be hammered into foils thinner than paper.\n• Liquid Metal = Mercury (Hg) | Liquid Non-Metal = Bromine (Br)',
          analogy: 'School bells and temple bells are made of bronze or brass metal because metals are sonorous—they ring with a long, musical reverberating chime when struck!',
          keyPoints: [
            'Copper and Aluminum are used for household electrical wiring due to high electrical conductivity.',
            'Tungsten has the highest melting point and is used in incandescent light bulb filaments.'
          ],
          examTips: 'List 4 physical properties of metals (lustre, malleability, ductility, electrical conductivity).'
        }
      ],
      'Mathematics': [
        {
          id: 'tn8-math-u1',
          unit: 'Unit 1',
          title: 'Rational Numbers & Properties',
          tamilTitle: 'விகிதமுறு எண்கள் & பண்புகள் (அடைவு, பரிமாற்று, சேர்ப்பு)',
          keywords: ['rational numbers', 'closure property', 'commutative', 'associative', 'distributive', 'விகிதமுறு எண்'],
          summaryEn: 'A Rational number is any number that can be expressed in the form p/q where p and q are integers and q ≠ 0. Core properties: Closure, Commutative (a + b = b + a), Associative [a + (b + c) = (a + b) + c], and Distributive property of multiplication over addition: a × (b + c) = (a × b) + (a × c).',
          summaryTa: 'விகிதமுறு எண்கள் என்பது p / q (q ≠ 0) வடிவில் எழுதக்கூடிய எண்கள் ஆகும். முக்கிய பண்புகள்: பரிமாற்றுப் பண்பு (a + b = b + a), சேர்ப்புப் பண்பு [a + (b + c) = (a + b) + c] மற்றும் பங்கீட்டுப் பண்பு: a × (b + c) = (a × b) + (a × c).',
          formulas: '• Additive Identity = 0 (a + 0 = a)\n• Multiplicative Identity = 1 (a × 1 = a)\n• Multiplicative Inverse (reciprocal) of a/b is b/a',
          analogy: 'Sharing 3 pizzas equally among 4 friends gives each person 3/4 of a pizza—a rational number!',
          keyPoints: [
            'Division by zero is undefined.',
            'Every integer is a rational number (can be written with denominator 1, e.g. 5 = 5/1).'
          ],
          examTips: 'Verify the distributive property a × (b + c) = (a × b) + (a × c) for given rational numbers.'
        },
        {
          id: 'tn8-math-u2',
          unit: 'Unit 2',
          title: 'Measurements: Circle & Circular Sector',
          tamilTitle: 'அளவியல்: வட்டம் & வட்டக்கோணப்பகுதி பரப்பளவு',
          keywords: ['circle', 'sector', 'arc length', 'circumference', 'area', 'வட்டம்', 'வட்டக்கோணப்பகுதி'],
          summaryEn: 'For a Circle of radius r: Circumference C = 2πr, Area A = πr². A Circular Sector is a portion of a circle enclosed by two radii and an arc with central angle θ. Arc length l = (θ / 360°) × 2πr. Area of sector A = (θ / 360°) × πr² = (l × r) / 2.',
          summaryTa: 'ஆரம் r கொண்ட வட்டத்தின் சுற்றளவு = 2πr, பரப்பளவு = πr². மையக்கோணம் θ கொண்ட வட்டக்கோணப்பகுதியின் வில்லின் நீளம் l = (θ / 360°) × 2πr. வட்டக்கோணப்பகுதியின் பரப்பளவு A = (θ / 360°) × πr² = (l × r) / 2.',
          formulas: '• Circle: C = 2πr | Area A = πr²\n• Sector Arc Length: l = (θ / 360°) × 2πr\n• Sector Area: A = (θ / 360°) × πr² = (l · r) / 2\n• Sector Perimeter: P = l + 2r',
          analogy: 'Cutting a slice out of a round pizza: The single slice is a circular sector, the crust edge is the arc length (l), and the two cut straight edges are the radii (r)!',
          keyPoints: [
            'Value of π is approximately 22/7 or 3.14.',
            'Perimeter of sector includes the two radii: P = l + 2r.'
          ],
          examTips: 'Calculate the area of a sector when arc length l and radius r are given: use Area = (l × r) / 2.'
        },
        {
          id: 'tn8-math-u3',
          unit: 'Unit 3',
          title: 'Algebraic Identities & Factorisation',
          tamilTitle: 'இயற்கணித முற்றொருமைகள் & காரணிப்படுத்துதல்',
          keywords: ['algebraic identities', 'factorisation', 'a+b whole square', 'இயற்கணிதம்'],
          summaryEn: 'Algebraic identities are true for all variable values: (a + b)² = a² + 2ab + b², (a - b)² = a² - 2ab + b², and a² - b² = (a + b)(a - b). Factorisation breaks down polynomial expressions into products of simpler factors.',
          summaryTa: 'இயற்கணித முக்கிய முற்றொருமைகள்:\n1. (a + b)² = a² + 2ab + b²\n2. (a - b)² = a² - 2ab + b²\n3. a² - b² = (a + b)(a - b)\n4. (x + a)(x + b) = x² + (a + b)x + ab',
          formulas: '• (a + b)² = a² + 2ab + b²\n• (a - b)² = a² - 2ab + b²\n• a² - b² = (a + b)(a - b)\n• (a + b)³ = a³ + 3a²b + 3ab² + b³',
          analogy: 'Expanding a square room: A room of size (10 + 2) meters has area (10+2)² = 100 + 40 + 4 = 144 m².',
          keyPoints: [
            'Difference of two squares formula a² - b² = (a + b)(a - b) is heavily tested.',
            'Factorisation is the reverse process of multiplication.'
          ],
          examTips: 'Common mistake: (a+b)² is NOT a² + b²; always include the middle term 2ab!'
        }
      ],
      'Social Science': [
        {
          id: 'tn8-soc-u1',
          unit: 'History Unit 1 & 2',
          title: 'Advent of the Europeans & From Trade to Territory',
          tamilTitle: 'ஐரோப்பியர்களின் வருகை & வர்த்தகத்திலிருந்து பேரரசு வரை',
          keywords: ['europeans', 'vasco da gama', 'battle of plassey', 'buxar', 'east india company', 'பிளாசி போர்'],
          summaryEn: 'Vasco da Gama reached Calicut, India in 1498, opening the sea route from Europe. Portuguese were followed by Dutch, British, and French trading companies. The British East India Company secured political dominance through two decisive battles: Battle of Plassey (1757, Robert Clive defeated Siraj-ud-Daulah) and Battle of Buxar (1764), establishing colonial rule.',
          summaryTa: '1498-ல் வாஸ்கோடகாமா கோழிக்கோட்டிற்கு கடல்வழியைக் கண்டுபிடித்தார். தொடர்ந்து போர்த்துகீசியர், டச்சுக்காரர்கள், ஆங்கிலேயர்கள் மற்றும் பிரெஞ்சுக்காரர்கள் வந்தனர். பிரிட்டிஷ் கிழக்கிந்திய கம்பெனி 1757 பிளாசி போர் (ராபர்ட் கிளைவ் வெற்றி) மற்றும் 1764 பக்சார் போர் மூலம் இந்தியாவில் அரசியல் ஆதிக்கத்தை நிலைநாட்டியது.',
          formulas: '• Sea route discovered: 1498 (Vasco da Gama)\n• Battle of Plassey: 1757 (Robert Clive defeated Siraj-ud-Daulah)\n• Battle of Buxar: 1764 (Confirmed British territorial supremacy)',
          analogy: 'The British came to India as humble grocery merchants trading in black pepper and cotton cloth, but exploited internal rivalries among Indian kings to take over the entire castle!',
          keyPoints: [
            'Doctrine of Lapse was introduced by Lord Dalhousie to annex childless kingdoms (e.g., Jhansi).',
            'Subsidiary Alliance system was introduced by Lord Wellesley.'
          ],
          examTips: 'Explain the causes and historical significance of the Battle of Plassey (1757).'
        },
        {
          id: 'tn8-soc-u2',
          unit: 'Civics Unit 1',
          title: 'How the State Government Works',
          tamilTitle: 'மாநில அரசு எவ்வாறு செயல்படுகிறது (ஆளுநர், முதலமைச்சர், சட்டப்பேரவை)',
          keywords: ['state government', 'governor', 'chief minister', 'mla', 'legislative assembly', 'மாநில அரசு', 'சட்டமன்றம்'],
          summaryEn: 'The state executive consists of the Governor (constitutional head appointed by the President of India) and the Chief Minister with Council of Ministers (real executive elected by people). The Legislative Assembly (Vidhan Sabha) makes state laws. Members of the Legislative Assembly (MLAs) are elected directly by citizens for 5-year terms.',
          summaryTa: 'மாநில அரசின் தலைவர் ஆளுநர் (Governor - குடியரசுத் தலைவரால் நியமிக்கப்படுபவர்). உண்மையான நிர்வாகத் தலைவர் முதலமைச்சர் (Chief Minister - மக்களால் தேர்ந்தெடுக்கப்பட்டவர்). சட்டங்களை இயற்றும் அமைப்பு சட்டப்பேரவை ஆகும். எம்.எல்.ஏ (MLA) மக்கள் மூலம் 5 ஆண்டுகளுக்கு ஒருமுறை தேர்ந்தெடுக்கப்படுகிறார்.',
          formulas: '• Governor eligibility: Minimum 35 years old\n• MLA eligibility: Minimum 25 years old\n• Tenure: 5 years',
          analogy: 'A cricket team: The Governor is the Team President (formal authority), while the Chief Minister is the active Captain leading the match on the ground!',
          keyPoints: [
            'Tamil Nadu Legislative Assembly has 234 elected members and headquarters at Fort St. George, Chennai.',
            'A bill passed by the state assembly becomes law only after the Governor signs it.'
          ],
          examTips: 'Differentiate between the powers of the Governor and the Chief Minister of a state.'
        }
      ]
    },

    // =========================================================================
    // 9TH STANDARD
    // =========================================================================
    '9th': {
      'Science': [
        {
          id: 'tn9-sci-u1',
          unit: 'Unit 2 & 7',
          title: 'Motion & Equations of Motion',
          tamilTitle: 'இயக்கம் & இயக்கச் சமன்பாடுகள்',
          keywords: ['equations of motion', 'acceleration', 'velocity', 'displacement', 'இயக்கச் சமன்பாடுகள்'],
          summaryEn: 'Motion is described through displacement, velocity, and acceleration. When acceleration is constant, the three fundamental kinematic equations of motion connect initial velocity (u), final velocity (v), acceleration (a), time (t), and displacement (s).',
          summaryTa: 'சீரான முடுக்கம் கொண்ட ஒரு பொருளின் இயக்கத்தை விவரிக்கும் 3 சமன்பாடுகள்:\n1. v = u + at\n2. s = ut + ½ at²\n3. v² = u² + 2as\nஇங்கு u = ஆரம்ப வேகம், v = இறுதி வேகம், a = முடுக்கம், t = காலம், s = இடப்பெயர்ச்சி.',
          formulas: '1. v = u + at\n2. s = ut + ½ at²\n3. v² = u² + 2as\nAcceleration a = (v - u) / t',
          analogy: 'A motorcycle starting from red light: If starting from rest (u=0) and accelerating at 2 m/s² for 5 seconds, final speed v = 0 + (2)(5) = 10 m/s.',
          keyPoints: [
            'If an object starts from rest, initial velocity u = 0.',
            'If an object comes to a stop (brakes applied), final velocity v = 0.'
          ],
          examTips: 'Derivation of the 3 equations of motion is a guaranteed 5-mark question in Class 9 exams.'
        },
        {
          id: 'tn9-sci-u2',
          unit: 'Unit 3',
          title: 'Fluids, Buoyant Force & Archimedes’ Principle',
          tamilTitle: 'பாய்மங்கள் & ஆர்க்கிமிடிஸ் தத்துவம் (Archimedes Principle)',
          keywords: ['archimedes', 'buoyancy', 'buoyant force', 'fluids', 'pressure', 'hydrometer', 'ஆர்க்கிமிடிஸ்', 'மிதத்தல்'],
          summaryEn: 'Pressure in fluids acts in all directions. Archimedes’ Principle states: When a body is partially or fully immersed in a fluid, it experiences an upward buoyant force equal to the weight of fluid displaced by it. Law of Flotation: A floating body displaces fluid whose weight equals its own weight.',
          summaryTa: 'ஆர்க்கிமிடிஸ் தத்துவம்: ஒரு பொருள் பாய்மத்தில் (திரவத்தில்) மூழ்கும்போது, அது இடப்பெயர்ச்சி செய்த திரவத்தின் எடைக்குச் சமமான ஒரு மேல்நோக்கு உந்துவிசையை (Buoyant Force) உணர்கிறது. மிதத்தல் விதி: மிதக்கும் பொருளின் எடை அது வெளியேற்றிய திரவத்தின் எடைக்குச் சமம்.',
          formulas: '• Pressure P = Force / Area = ρ · g · h (Pascal Pa)\n• Buoyant Force FB = Weight of displaced liquid = V · ρ_fluid · g\n• Relative Density = Density of substance / Density of water (at 4°C)',
          analogy: 'Pushing a hollow plastic ball into a bucket of water: You feel strong resistance pushing your hand upward—that push is the buoyant force!',
          keyPoints: [
            'Hydrometer works on Archimedes’ principle to measure specific gravity of liquids.',
            'Lactometer tests the purity of milk using buoyancy.'
          ],
          examTips: 'State Archimedes’ Principle and explain its two applications (submarine and hydrometer).'
        },
        {
          id: 'tn9-sci-u3',
          unit: 'Unit 10 & 11',
          title: 'Atomic Structure & Periodic Table Basics',
          tamilTitle: 'அணு அமைப்பு & ஆவர்த்தன அட்டவணை அடிப்படைகள்',
          keywords: ['atomic structure', 'electrons', 'protons', 'neutrons', 'isotopes', 'அணு அமைப்பு'],
          summaryEn: 'Atoms consist of three subatomic particles: Protons (+ charge, nucleus), Neutrons (neutral, nucleus), and Electrons (- charge, orbiting in shells). Atomic Number (Z) is the number of protons; Mass Number (A) is the sum of protons and neutrons.',
          summaryTa: 'அணு புரோட்டான் (நேர் மின்சுமை), நியூட்ரான் (மின்சுமையற்றது), எலக்ட்ரான் (எதிர் மின்சுமை) ஆகியவற்றைக் கொண்டது. அணு எண் (Z) = புரோட்டான்களின் எண்ணிக்கை; நிறை எண் (A) = புரோட்டான் + நியூட்ரான் எண்ணிக்கை.',
          formulas: '• Mass Number A = Protons (Z) + Neutrons (n)\n• Number of Neutrons n = A - Z\n• Max electrons in nth shell = 2n² (K=2, L=8, M=18, N=32)',
          analogy: 'An atom is like our solar system: The nucleus is the heavy Sun in the centre, and electrons are planets orbiting in fixed energy shells.',
          keyPoints: [
            'Isotopes: Same atomic number (Z), different mass number (A) e.g., ¹H, ²H, ³H.',
            'Valence electrons determine the chemical reactivity of an element.'
          ],
          examTips: 'Practice drawing Bohr-Rutherford atomic structures (e.g., Sodium Z=11, 2,8,1).'
        },
        {
          id: 'tn9-sci-u4',
          unit: 'Unit 13',
          title: 'Chemical Bonding: Ionic & Covalent Bonds',
          tamilTitle: 'வேதிப்பிணைப்பு: அயனி மற்றும் சகப்பிணைப்பு',
          keywords: ['chemical bonding', 'ionic bond', 'covalent bond', 'octet rule', 'electrovalent', 'வேதிப்பிணைப்பு', 'அயனிப் பிணைப்பு'],
          summaryEn: 'Atoms bond to achieve stable noble gas octet electronic configurations (8 electrons in valence shell). Ionic (Electrovalent) bond forms by complete transfer of electrons from a metal to a non-metal, creating oppositely charged ions held by electrostatic attraction (e.g., NaCl). Covalent bond forms by mutual sharing of electron pairs between non-metals (e.g., H2O, CH4).',
          summaryTa: 'அணுக்கள் மந்த வாயுக்களின் நிலையான எண்ம அமைப்பை (8 எலக்ட்ரான்கள்) அடைய வேதிப்பிணைப்பில் ஈடுபடுகின்றன. எலக்ட்ரான்களை பரிமாற்றம் செய்து உருவாவது அயனிப் பிணைப்பு (NaCl); எலக்ட்ரான்களை சமமாகப் பகிர்ந்து உருவாவது சகப்பிணைப்பு (H₂O, CH₄) எனப்படும்.',
          formulas: '• Octet Rule: 8 electrons in outermost shell = chemical stability\n• Ionic Bond: Metal (loses e⁻) + Non-metal (gains e⁻) e.g., Na⁺ + Cl⁻ -> NaCl\n• Covalent Bond: Sharing electron pairs (e.g., H:H -> H₂)',
          analogy: 'Ionic bonding is like giving a gift: One friend completely gives a toy to another. Covalent bonding is like two friends sharing and playing with the same bicycle together!',
          keyPoints: [
            'Ionic compounds have high melting points and conduct electricity in molten or aqueous state.',
            'Covalent compounds have lower melting points and do not conduct electricity.'
          ],
          examTips: 'Tabulate the differences between Ionic compounds and Covalent compounds (4 key points).'
        },
        {
          id: 'tn9-sci-u5',
          unit: 'Unit 14',
          title: 'Acids, Bases, Salts and The pH Scale',
          tamilTitle: 'அமிலங்கள், காரங்கள், உப்புகள் & pH அளவுகோல்',
          keywords: ['acids', 'bases', 'salts', 'ph scale', 'neutralization', 'litmus', 'அமிலம்', 'காரம்', 'உப்பு'],
          summaryEn: 'Acids release H+ ions in aqueous solutions (sour taste, turn blue litmus red, pH < 7). Bases release OH- ions (bitter, soapy to touch, turn red litmus blue, pH > 7). Neutralization is the reaction between an acid and a base producing salt and water (Acid + Base -> Salt + Water). The pH scale runs from 0 to 14 (pH 7 is neutral water).',
          summaryTa: 'அமிலங்கள் நீரில் H⁺ அயனிகளைத் தருகின்றன (புளிப்புச் சுவை, நீல லிட்மஸை சிவப்பாக்கும், pH < 7). காரங்கள் நீரில் OH⁻ அயனிகளைத் தருகின்றன (கசப்புச் சுவை, சிவப்பு லிட்மஸை நீலமாக்கும், pH > 7). நடுநிலையாக்கல் வினை: அமிலம் + காரம் -> உப்பு + நீர். pH 7 என்பது நடுநிலை ஆகும்.',
          formulas: '• Acid + Base -> Salt + Water (HCl + NaOH -> NaCl + H2O)\n• pH < 7 (Acidic) | pH = 7 (Neutral) | pH > 7 (Basic/Alkaline)\n• Human Blood pH ≈ 7.35 to 7.45',
          analogy: 'Lemon juice (citric acid) tastes sour and has pH 2; washing soap (base) feels slippery and has pH 10; pure rain water sits right in the middle at pH 7!',
          keyPoints: [
            'Antacids (Milk of Magnesia) are mild bases used to neutralize excess hydrochloric acid in the human stomach.',
            'Tooth decay begins when mouth pH falls below 5.5 due to bacterial acid production.'
          ],
          examTips: 'What is a Neutralization reaction? Give one balanced chemical equation.'
        }
      ],
      'Mathematics': [
        {
          id: 'tn9-math-u1',
          unit: 'Unit 1',
          title: 'Set Language & De Morgan’s Laws',
          tamilTitle: 'கணமொழி & டி மார்கன் விதிகள்',
          keywords: ['set language', 'de morgan', 'venn diagram', 'union', 'intersection', 'கணமொழி'],
          summaryEn: 'A set is a well-defined collection of distinct objects. Operations: Union (A ∪ B), Intersection (A ∩ B), and Complement (A\'). De Morgan’s Laws describe set complementation: (A ∪ B)\' = A\' ∩ B\' and (A ∩ B)\' = A\' ∪ B\'.',
          summaryTa: 'கண செயல்பாடுகளில் டி மார்கன் விதிகள் மிகவும் முக்கியமானவை:\n1. (A ∪ B)\' = A\' ∩ B\'\n2. (A ∩ B)\' = A\' ∪ B\'\n3. A \\ (B ∪ C) = (A \\ B) ∩ (A \\ C)',
          formulas: '• (A ∪ B)\' = A\' ∩ B\'\n• (A ∩ B)\' = A\' ∪ B\'\n• n(A ∪ B) = n(A) + n(B) - n(A ∩ B)',
          analogy: 'Imagine students who play cricket (Set A) and football (Set B). De Morgan’s law shows that students who do NOT play either game equals those not in cricket AND not in football.',
          keyPoints: [
            'Empty set ∅ has 0 elements; Power set P(A) of set with n elements has 2ⁿ subsets.',
            'Venn diagrams provide visual proof for De Morgan’s laws.'
          ],
          examTips: 'Verification of De Morgan’s laws using Venn diagrams is a standard 5-mark question.'
        },
        {
          id: 'tn9-math-u2',
          unit: 'Unit 2',
          title: 'Real Numbers, Surds & Scientific Notation',
          tamilTitle: 'மெய் எண்கள், முறுடுகள் & அறிவியல் குறியீடு',
          keywords: ['real numbers', 'surds', 'irrational', 'rationalisation', 'மெய் எண்கள்', 'முறுடுகள்'],
          summaryEn: 'Real Numbers include both Rational numbers (terminating/repeating decimals) and Irrational numbers (non-terminating, non-repeating decimals such as √2, π). A Surd is an irrational root of a rational number (ⁿ√a). Rationalising the denominator removes surds from fractions using conjugate factors.',
          summaryTa: 'மெய் எண்கள் என்பது விகிதமுறு மற்றும் விகிதமுறா எண்களை உள்ளடக்கியது (எ.கா: √2, √3, π). ஒரு விகிதமுறு எண்ணின் விகிதமுறா மூலமே முறுடு (Surd) எனப்படும். பகுதியில் உள்ள முறுடை நீக்குவது பகுதி விகிதமுறுதாக்கல் (Rationalisation) ஆகும்.',
          formulas: '• Conjugate of (a + √b) is (a - √b)\n• (a + √b)(a - √b) = a² - b\n• Laws of Surds: √a × √b = √(ab) and √a / √b = √(a/b)',
          analogy: 'If you try to write √2 as a decimal (1.41421356...), the numbers go on forever without ever repeating in a pattern—it is an endless irrational journey!',
          keyPoints: [
            'The sum, difference, or product of a rational and an irrational number is always irrational.',
            'π is irrational, while 22/7 is a rational approximation.'
          ],
          examTips: 'Rationalise the denominator of expressions like 1 / (3 + √2).'
        },
        {
          id: 'tn9-math-u3',
          unit: 'Unit 5',
          title: 'Coordinate Geometry & Distance Formula',
          tamilTitle: 'ஆயத்தொலை வடிவியல் & இரு புள்ளிகளுக்கு இடைப்பட்ட தொலைவு',
          keywords: ['coordinate geometry', 'distance formula', 'midpoint', 'ஆயத்தொலை வடிவியல்'],
          summaryEn: 'Coordinate geometry connects algebra and geometry using Cartesian (x, y) coordinates. The distance (d) between two points (x1, y1) and (x2, y2) is given by d = √[(x2 - x1)² + (y2 - y1)²]. Midpoint M = ((x1 + x2)/2, (y1 + y2)/2).',
          summaryTa: 'இரு புள்ளிகள் (x1, y1) மற்றும் (x2, y2) ஆகியவற்றுக்கு இடையேயான தொலைவு சூத்திரம்:\nd = √[(x2 - x1)² + (y2 - y1)²]. நடுப்புள்ளி சூத்திரம்: M = ((x1 + x2)/2, (y1 + y2)/2).',
          formulas: '• Distance d = √[(x2 - x1)² + (y2 - y1)²]\n• Midpoint M = ((x1 + x2)/2, (y1 + y2)/2)\n• Centroid of triangle G = ((x1+x2+x3)/3, (y1+y2+y3)/3)',
          analogy: 'GPS navigation on Google Maps uses (latitude, longitude) coordinates and the distance formula to compute the exact straight-line distance between your home and school.',
          keyPoints: [
            'Distance is always a non-negative scalar quantity.',
            'Centroid divides each median in the ratio 2 : 1.'
          ],
          examTips: 'Substitute values carefully into d = √[(x2 - x1)² + (y2 - y1)²] and simplify squares before adding.'
        },
        {
          id: 'tn9-math-u4',
          unit: 'Unit 6',
          title: 'Trigonometric Ratios (sin, cos, tan)',
          tamilTitle: 'முக்கோணவியல் விகிதங்கள் (sin, cos, tan)',
          keywords: ['trigonometry', 'sine', 'cosine', 'tangent', 'soh cah toa', 'முக்கோணவியல்'],
          summaryEn: 'Trigonometry studies relationships between sides and angles of right-angled triangles. For an acute angle θ: sin θ = Opposite / Hypotenuse, cos θ = Adjacent / Hypotenuse, and tan θ = Opposite / Adjacent. Reciprocals: cosec θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ.',
          summaryTa: 'செங்கோண முக்கோணத்தில் முக்கோணவியல் விகிதங்கள்:\n• sin θ = எதிர்ப்பக்கம் / கர்ணம்\n• cos θ = அடுத்துள்ளபக்கம் / கர்ணம்\n• tan θ = எதிர்ப்பக்கம் / அடுத்துள்ளபக்கம் = sin θ / cos θ\nதலைகீழிகள்: cosec θ, sec θ, cot θ.',
          formulas: '• sin θ = Opp / Hyp | cos θ = Adj / Hyp | tan θ = Opp / Adj\n• tan θ = sin θ / cos θ\n• Values: sin 30° = 1/2, sin 45° = 1/√2, sin 60° = √3/2, sin 90° = 1',
          analogy: 'To measure the height of a tall palm tree without climbing it, stand 10m away, measure the angle θ to the top, and compute Height = 10 × tan θ!',
          keyPoints: [
            'Hypotenuse is always the longest side, opposite to the 90° right angle.',
            'Values of sin θ and cos θ never exceed 1.'
          ],
          examTips: 'Memorize the standard angle table for 0°, 30°, 45°, 60°, and 90°.'
        },
        {
          id: 'tn9-math-u5',
          unit: 'Unit 9',
          title: 'Probability: Empirical Probability',
          tamilTitle: 'நிகழ்தகவு: சோதனையின் அடிப்படையிலான நிகழ்தகவு',
          keywords: ['probability', 'sample space', 'events', 'dice', 'coin', 'நிகழ்தகவு', 'கூறுவெளி'],
          summaryEn: 'Probability is the mathematical measurement of uncertainty of an event happening. Empirical / Experimental Probability P(E) = Number of trials in which event occurred / Total number of trials. Sample space S is the set of all possible outcomes. For any event E, 0 ≤ P(E) ≤ 1.',
          summaryTa: 'ஒரு குறிப்பிட்ட நிகழ்ச்சி நடைபெறுவதற்கான சாத்தியக்கூற்றை அளவிடுவது நிகழ்தகவு எனப்படும். P(E) = n(E) / n(S) (நிகழ்ச்சிக்கு சாதகமான வாய்ப்புகள் / மொத்த வாய்ப்புகள்). எந்த ஒரு நிகழ்ச்சியின் நிகழ்தகவும் 0 முதல் 1 வரை மட்டுமே இருக்கும் (0 ≤ P(E) ≤ 1).',
          formulas: '• Formula: P(E) = n(E) / n(S)\n• P(Sure Event) = 1 | P(Impossible Event) = 0\n• P(E) + P(Not E) = 1 => P(E\') = 1 - P(E)',
          analogy: 'Tossing a fair coin: There are 2 possible outcomes {Head, Tail}. The probability of getting a Head is P(H) = 1/2 = 0.5 (50% chance)!',
          keyPoints: [
            'Probability cannot be negative and cannot be greater than 1.',
            'Rolling a fair die: Sample space S = {1, 2, 3, 4, 5, 6}, total n(S) = 6.'
          ],
          examTips: 'Always state the total sample space n(S) first before calculating P(E) = n(E)/n(S).'
        }
      ],
      'Social Science': [
        {
          id: 'tn9-soc-u1',
          unit: 'History Unit 2',
          title: 'Ancient World Civilizations',
          tamilTitle: 'பண்டைய உலக நாகரிகங்கள் (எகிப்து, மெசபடோமியா, சிந்து, சீனா)',
          keywords: ['ancient civilizations', 'mesopotamia', 'egypt', 'pharaoh', 'cuneiform', 'ஹமுராபி', 'நாகரிகங்கள்'],
          summaryEn: 'Ancient river valley civilizations developed along fertile rivers: 1) Mesopotamian Civilization (Tigris and Euphrates, Cuneiform script, Hammurabi’s Code of Laws: "An eye for an eye"). 2) Egyptian Civilization (Nile river, Pharaohs, Pyramids, Hieroglyphic script, Mummification). 3) Indus Civilization (Indus river). 4) Chinese Civilization (Yellow river / Hwang Ho, Great Wall of China).',
          summaryTa: 'பண்டைய நாகரிகங்கள் வளமான நதிக்கரைகளில் தோன்றின: 1) மெசபடோமியா (யூப்ரடீஸ், டைக்ரிஸ் நதிகள், கியூனிபார்ம் எழுத்து முறை, ஹமுராபி சட்டத் தொகுப்பு - "கண்ணுக்குக் கண்"). 2) எகிப்து (நைல் நதியின் கொடை, பிரமிடுகள், மம்மிகள், ஹைரோகிளிபிக்ஸ்). 3) சிந்து சமவெளி நாகரிகம். 4) சீன நாகரிகம் (மஞ்சள் நதி, சீனப் பெருஞ்சுவர்).',
          formulas: '• Hammurabi’s Code: World’s first written legal code (Babylonia)\n• Nile: Father of African rivers; Egypt is the "Gift of the Nile"\n• Cuneiform: Wedge-shaped writing script of Mesopotamia',
          analogy: 'Rivers were the lifeblood of human civilizations: Just as people settle near modern water reservoirs, ancient people built empires along fertile rivers that provided freshwater and rich silt crops!',
          keyPoints: [
            'The Great Pyramid of Giza was built as a tomb for Pharaoh Khufu (Cheops).',
            'Ziggurats were massive stepped pyramid temples in Mesopotamia.'
          ],
          examTips: 'Explain the main features of Hammurabi’s legal code and why Egypt is called the "Gift of the Nile".'
        },
        {
          id: 'tn9-soc-u2',
          unit: 'Civics Unit 1',
          title: 'Forms of Government and Democracy',
          tamilTitle: 'அரசாங்க அமைப்புகள் மற்றும் மக்களாட்சி',
          keywords: ['democracy', 'monarchy', 'autocracy', 'abraham lincoln', 'republic', 'மக்களாட்சி', 'அரசாங்கம்'],
          summaryEn: 'Major forms of government include Monarchy (rule by king/queen), Autocracy (absolute power held by one dictator), Oligarchy (rule by a small elite), and Democracy (government of the people, by the people, for the people - Abraham Lincoln). Democracy can be Direct (citizens vote directly on laws, e.g., Switzerland) or Indirect/Representative (citizens elect representatives, e.g., India, USA).',
          summaryTa: 'அரசாங்க அமைப்புகள்: முடியாட்சி (அரசர் ஆட்சி), சர்வாதிகாரம் (ஒற்றை மனிதர் ஆட்சி), மக்களாட்சி (மக்களால் மக்களுக்காக நடத்தப்படும் மக்களாட்சி - ஆபிரகாம் லிங்கன்). மக்களாட்சி இரு வகைப்படும்: நேரடி மக்களாட்சி (சுவிட்சர்லாந்து) மற்றும் மறைமுக/பிரதிநிதித்துவ மக்களாட்சி (இந்தியா, அமெரிக்கா).',
          formulas: '• Abraham Lincoln’s definition: "Government of the people, by the people, for the people"\n• Direct Democracy: Switzerland | Indirect Parliamentary Democracy: India',
          analogy: 'In a joint family, if the grandfather alone decides everything without asking, that is Autocracy. If all family members vote and elect a leader to make decisions, that is Democracy!',
          keyPoints: [
            'India is the largest representative democracy in the world with Universal Adult Suffrage (voting rights at age 18).',
            'The word Democracy originates from Greek "Demos" (people) and "Kratos" (power/rule).'
          ],
          examTips: 'Differentiate between Direct Democracy and Indirect Democracy with country examples.'
        }
      ]
    },

    // =========================================================================
    // 10TH STANDARD (SSLC BOARD EXAM - HIGH PRIORITY)
    // =========================================================================
    '10th': {
      'Science': [
        {
          id: 'tn10-sci-u1',
          unit: 'Unit 1',
          title: "Newton's Laws of Motion & Momentum",
          tamilTitle: 'நியூட்டனின் இயக்க விதிகள் & உந்த அழிவின்மை விதி',
          keywords: ['newton', 'laws of motion', 'inertia', 'momentum', 'f=ma', 'நியூட்டன்', 'இயக்க விதிகள்', 'உந்தம்'],
          summaryEn: "Newton's First Law defines inertia (tendency to resist changes in state of motion). Second Law states that force is the rate of change of momentum (F = m × a). Third Law states that every action has an equal and opposite reaction. Law of Conservation of Linear Momentum states that total momentum remains constant in the absence of external force.",
          summaryTa: 'நியூட்டனின் முதல் விதி நிலைமம் பற்றியது. இரண்டாம் விதி: விசை = நிறை × முடுக்கம் (F = m × a). மூன்றாம் விதி: ஒவ்வொரு வினைக்கும் அதற்கு இணையான எதிர்வினை உண்டு. நேர்க்கோட்டு உந்த அழிவின்மை விதி: புறவிசை செயல்படாதவரை மொத்த உந்தம் மாறாது.',
          formulas: '• Force: F = m × a (SI Unit: Newton N = kg·m/s²)\n• Momentum: p = m × v\n• Impulse: J = F × t = Δp\n• Conservation: m1u1 + m2u2 = m1v1 + m2v2',
          analogy: 'Rocket launching: The hot exhaust gases push downward with tremendous force (action), propelling the rocket upward into space (reaction).',
          keyPoints: [
            '1 Newton is the force that produces an acceleration of 1 m/s² in a mass of 1 kg.',
            'Cricket fielder draws his hands backward to increase time (t), reducing impact force (F).'
          ],
          examTips: 'State Newton’s 2nd law and derive F = ma. Guaranteed 4 or 7-mark board exam question.'
        },
        {
          id: 'tn10-sci-u2',
          unit: 'Unit 2',
          title: 'Optics: Lenses, Snell’s Law & Eye Defects',
          tamilTitle: 'ஒளியியல்: லென்சுகள், ஸ்நெல் விதி & கண் குறைபாடுகள்',
          keywords: ['optics', 'snell law', 'lens formula', 'myopia', 'hypermetropia', 'ஒளியியல்', 'லென்ஸ்'],
          summaryEn: "Optics deals with light reflection and refraction. Snell's Law states sin i / sin r = n2 / n1. Lens formula: 1/f = 1/v - 1/u. Common vision defects: Myopia (short-sightedness, corrected with concave lens) and Hypermetropia (long-sightedness, corrected with convex lens).",
          summaryTa: 'ஒளிவிலகல் விதி (ஸ்நெல் விதி): sin i / sin r = n₂ / n₁. லென்ஸ் சமன்பாடு: 1/f = 1/v - 1/u. கிட்டப்பார்வை (Myopia) குறைபாட்டை சரிசெய்ய குழி லென்சும், தூரப்பார்வை (Hypermetropia) குறைபாட்டை சரிசெய்ய குவி லென்சும் பயன்படுகின்றன.',
          formulas: '• Snell’s Law: sin i / sin r = μ₂ / μ₁\n• Lens Formula: 1/f = 1/v - 1/u\n• Magnification: m = v / u = h₂ / h₁\n• Power of Lens: P = 1 / f (in metres), Unit: Dioptre (D)',
          analogy: 'Spectacles act like fine-tuning glass lenses that bend incoming light rays so they focus cleanly right on the retina screen at the back of your eye.',
          keyPoints: [
            'Convex lens: Converging lens, can form both real and virtual images.',
            'Concave lens: Diverging lens, always forms a virtual, erect, and diminished image.'
          ],
          examTips: 'Tabulate differences between Myopia (corrected by concave lens) and Hypermetropia (corrected by convex lens).'
        },
        {
          id: 'tn10-sci-u3',
          unit: 'Unit 3',
          title: 'Thermal Physics & Ideal Gas Equation',
          tamilTitle: 'வெப்ப இயற்பியல் & நல்லியல்பு வாயுச் சமன்பாடு (PV = nRT)',
          keywords: ['thermal physics', 'boyle law', 'charles law', 'avogadro', 'ideal gas', 'வெப்ப இயற்பியல்', 'பாயில் விதி'],
          summaryEn: 'Thermal energy transfers from hot to cold bodies until thermal equilibrium is reached. Gas Laws: 1) Boyle’s Law: At constant temperature, P ∝ 1/V (PV = constant). 2) Charles’ Law: At constant pressure, V ∝ T (V/T = constant). 3) Avogadro’s Law: Equal volumes of all gases contain equal numbers of molecules (V ∝ n). Combining these yields the Ideal Gas Equation: PV = nRT.',
          summaryTa: 'வாயு விதிகள்: பாயில் விதி (மாறா வெப்பநிலையில் PV = மாறிலி); சார்லஸ் விதி (மாறா அழுத்தத்தில் V / T = மாறிலி); அவகாட்ரோ விதி (V ∝ n). இவற்றை இணைத்து உருவாக்கப்படும் நல்லியல்பு வாயுச் சமன்பாடு: PV = nRT (R = 8.31 J/mol·K).',
          formulas: '• Ideal Gas Equation: P · V = n · R · T\n• Boyle’s Law: P1 V1 = P2 V2 (constant T)\n• Charles’ Law: V1 / T1 = V2 / T2 (constant P)\n• Universal Gas Constant R = 8.31 J mol⁻¹ K⁻¹',
          analogy: 'Pumping air into a bicycle tyre: Compressing air volume (reducing V) increases internal air pressure (increasing P), perfectly matching Boyle’s Law!',
          keyPoints: [
            'Real gases approach ideal gas behavior only at high temperatures and low pressures.',
            'Avogadro number = 6.023 × 10²³ particles per mole.'
          ],
          examTips: 'Derive the Ideal Gas Equation PV = nRT from Boyle’s, Charles’, and Avogadro’s laws (5-mark question).'
        },
        {
          id: 'tn10-sci-u4',
          unit: 'Unit 4',
          title: 'Electricity: Ohm’s Law & Joule’s Heating',
          tamilTitle: 'மின்னியல்: ஓம் விதி & ஜூல் வெப்ப விதி',
          keywords: ['electricity', 'ohm law', 'resistors', 'series', 'parallel', 'joule heating', 'ஓம் விதி', 'மின்னியல்'],
          summaryEn: "Ohm's Law states that electric current (I) is directly proportional to potential difference (V) at constant temperature: V = I × R. Resistors in series: Rs = R1 + R2 + R3. Resistors in parallel: 1/Rp = 1/R1 + 1/R2 + 1/R3. Joule's Law of Heating: H = I² × R × t.",
          summaryTa: 'ஓம் விதி: மாறா வெப்பநிலையில் ஒரு கடத்தியில் பாயும் மின்னோட்டம் அதன் முனைகளுக்கு இடைப்பட்ட மின்னழுத்த வேறுபாட்டிற்கு நேர்தகவில் அமையும் (V = I × R). தொடர் இணைப்பு: Rs = R₁ + R₂. பக்க இணைப்பு: 1/Rp = 1/R₁ + 1/R₂. ஜூல் வெப்ப விதி: H = I²Rt.',
          formulas: '• Ohm’s Law: V = I × R (R in Ohms Ω)\n• Series Resistors: Rs = R1 + R2 + R3\n• Parallel Resistors: 1/Rp = 1/R1 + 1/R2 + 1/R3\n• Joule’s Heat: H = I² R t\n• Electric Power: P = V × I = I² R = V² / R (Unit: Watt)',
          analogy: 'Water flowing through a pipe: Potential difference (V) is the water pressure pump, current (I) is water flow rate, and resistance (R) is pipe narrowness.',
          keyPoints: [
            'Domestic electrical circuits are always connected in parallel so each appliance gets 220V.',
            'Fuse wire has high resistance and low melting point to prevent fire hazards.'
          ],
          examTips: 'Numerical problem calculating equivalent resistance in series and parallel circuits.'
        },
        {
          id: 'tn10-sci-u5',
          unit: 'Unit 5',
          title: 'Acoustics: Echo & Doppler Effect',
          tamilTitle: 'ஒலியியல்: எதிரொலி & டாப்ளர் விளைவு (Doppler Effect)',
          keywords: ['acoustics', 'echo', 'doppler effect', 'velocity of sound', 'ஒலியியல்', 'டாப்ளர் விளைவு', 'எதிரொலி'],
          summaryEn: 'Echo is the repetition of sound caused by reflection from an obstacle. Conditions for hearing an echo: Minimum obstacle distance must be 17.2 metres in air at 20°C, and time gap must exceed 0.1 seconds. Doppler Effect: The apparent change in frequency of sound heard by an observer whenever there is relative motion between sound source and observer.',
          summaryTa: 'எதிரொலி கேட்க குறைந்தபட்சம் 17.2 மீட்டர் தொலைவு மற்றும் 0.1 வினாடி கால இடைவெளி தேவை. டாப்ளர் விளைவு: ஒலி மூலத்திற்கும் கேட்பவருக்கும் இடையே சார்பு இயக்கம் இருக்கும் போது, ஒலியின் அதிர்வெண்ணில் ஏற்படும் தோற்ற மாற்றம் டாப்ளர் விளைவு எனப்படும்.',
          formulas: '• Echo Distance: 2d = v × t => d = (v × t) / 2\n• Minimum Distance for Echo in Air = 17.2 m\n• Apparent Frequency N\' = [(v ± vo) / (v ∓ vs)] × N',
          analogy: 'An ambulance siren sounding higher in pitch as it speeds toward you, and dropping sharply to a deeper pitch as it zooms past and drives away!',
          keyPoints: [
            'Doppler effect is used by traffic police radar guns to measure vehicle overspeeding.',
            'Astronomers use Doppler redshift to prove that distant galaxies are moving away from Earth.'
          ],
          examTips: 'State 2 conditions necessary for hearing a distinct echo.'
        },
        {
          id: 'tn10-sci-u6',
          unit: 'Unit 6',
          title: 'Nuclear Physics: Radioactivity, Fission & Fusion',
          tamilTitle: 'அணுக்கரு இயற்பியல்: கதிரியக்கம், அணுக்கரு பிளவு & இணைவு',
          keywords: ['nuclear physics', 'radioactivity', 'nuclear fission', 'nuclear fusion', 'alpha beta gamma', 'அணுக்கரு பிளவு', 'கதிரியக்கம்'],
          summaryEn: 'Radioactivity is the spontaneous disintegration of unstable heavy atomic nuclei with emission of Alpha (α), Beta (β), and Gamma (γ) radiations, discovered by Henri Becquerel. Nuclear Fission splits a heavy nucleus (U-235) into lighter nuclei releasing massive energy (atomic bomb, nuclear power reactor). Nuclear Fusion combines light hydrogen nuclei into helium under extreme heat (powers the Sun and Hydrogen bomb).',
          summaryTa: 'கதிரியக்கத்தை ஹென்றி பெக்கோரல் கண்டறிந்தார் (ஆல்பா, பீட்டா, காமா கதிர்கள் வெளியேற்றம்). அணுக்கரு பிளவு: கனமான உட்கரு (யுரேனியம்-235) நியூட்ரானால் தாக்கப்பட்டு இரு சிறிய உட்கருக்களாக உடைந்து ஆற்றல் வெளிப்படுவது (அணு உலை). அணுக்கரு இணைவு: குறைந்த நிறை கொண்ட ஹைட்ரஜன் அணுக்கள் இணைந்து ஹீலியமாக மாறுவது (சூரியனின் ஆற்றல் மூலம்).',
          formulas: '• Fission: ⁹²U²³⁵ + ₀n¹ -> ⁵⁶Ba¹⁴¹ + ³⁶Kr⁹² + 3 ₀n¹ + ~200 MeV Energy\n• Einstein’s Mass-Energy Equivalence: E = m · c² (c = 3 × 10⁸ m/s)\n• Fusion: 1 H² + 1 H³ -> 2 He⁴ + ₀n¹ + 17.6 MeV',
          analogy: 'Nuclear Fission is like breaking a large brittle melon into smaller pieces; Nuclear Fusion is like squishing two small balls of dough together under immense heat to make one bigger ball!',
          keyPoints: [
            'Control rods (Cadmium or Boron) in nuclear reactors absorb excess neutrons to control chain reaction.',
            'Radioactive Cobalt-60 is used in radiation cancer therapy.'
          ],
          examTips: 'Tabulate 3 differences between Nuclear Fission and Nuclear Fusion.'
        },
        {
          id: 'tn10-sci-u7',
          unit: 'Unit 10',
          title: 'Types of Chemical Reactions & pH Scale',
          tamilTitle: 'வேதிவினைகளின் வகைகள் & pH அளவீடு',
          keywords: ['chemical reactions', 'combination', 'decomposition', 'displacement', 'redox', 'ph scale', 'வேதிவினை', 'நடுநிலையாக்கல்'],
          summaryEn: 'Chemical reactions are classified into: Combination (A + B -> AB), Decomposition (AB -> A + B), Single Displacement (A + BC -> AC + B), Double Displacement (AB + CD -> AD + CB), and Oxidation-Reduction (Redox). S.P.L. Sorenson introduced the pH scale (0 to 14) to quantify hydrogen ion concentration: pH = -log10[H+].',
          summaryTa: 'வேதிவினைகளின் வகைகள்: 1. சேர்க்கை வினை (A + B -> AB), 2. சிதைவு வினை, 3. ஒற்றை இடப்பெயர்ச்சி, 4. இரட்டை இடப்பெயர்ச்சி, 5. ஆக்ஸிஜனேற்ற-ஒடுக்க வினை (Redox). சோரன்சன் pH அளவீட்டை அறிமுகப்படுத்தினார்: pH = -log₁₀[H⁺]. pH < 7 அமிலம்; pH = 7 நடுநிலை; pH > 7 காரம்.',
          formulas: '• pH = -log10 [H+] | pOH = -log10 [OH-]\n• pH + pOH = 14 (at 25 °C)\n• Neutralization: Acid + Base -> Salt + Water',
          analogy: 'A single displacement reaction is like musical chairs: A more reactive metal walks in and takes the chair of a less reactive metal in a chemical solution!',
          keyPoints: [
            'Pure water at 25 °C has [H+] = 10⁻⁷ M, so pH = 7.',
            'Acid rain has pH below 5.6.'
          ],
          examTips: 'Solve pH problems: If [H+] = 10⁻⁴ M, pH = -log(10⁻⁴) = 4 (Acidic).'
        },
        {
          id: 'tn10-sci-u8',
          unit: 'Unit 11',
          title: 'Carbon and its Compounds: Ethanol & Ethanoic Acid',
          tamilTitle: 'கார்பனும் அதன் சேர்மங்களும்: எத்தனால் & எத்தனாயிக் அமிலம்',
          keywords: ['carbon', 'catenation', 'tetravalency', 'ethanol', 'ethanoic acid', 'esterification', 'கார்பன்', 'எத்தனால்'],
          summaryEn: 'Carbon exhibits unique versatile bonding properties: Catenation (ability to form long continuous covalent chains with itself), Tetravalency (forms 4 covalent bonds), and Isomerism. Important compounds: Ethanol (C2H5OH, used in sanitizers and medicines) and Ethanoic/Acetic Acid (CH3COOH, 5-8% solution is Vinegar). Reaction between ethanol and ethanoic acid produces sweet-smelling Ester (Esterification).',
          summaryTa: 'கார்பனின் தனித்துவ பண்புகள்: சங்கிலித்தொடராக்கம் (Catenation) மற்றும் நான்கு இணைதிறன் (Tetravalency). முக்கிய சேர்மங்கள்: எத்தனால் (C₂H₅OH - ஆல்கஹால்), எத்தனாயிக் அமிலம் (CH₃COOH - வினிகர்). எத்தனாலும் எத்தனாயிக் அமிலமும் இணையும் போது நறுமணமுள்ள எஸ்டர் உருவாகிறது (எஸ்டராக்குதல் வினை).',
          formulas: '• Catenation: C-C-C-C chain formation\n• Ethanol: CH3-CH2-OH\n• Ethanoic Acid: CH3-COOH\n• Esterification: CH3COOH + C2H5OH (acid catalyst) -> CH3COOC2H5 (Ester) + H2O',
          analogy: 'Carbon is the Lego master of chemistry: With 4 connection pegs (tetravalency) and ability to connect to other carbon bricks infinitely, it builds millions of organic structures including plastics, fuels, and living DNA!',
          keyPoints: [
            'Allotrope of carbon: Diamond (hardest natural substance, electrical insulator) vs Graphite (layered, electrical conductor).',
            'Ethanol oxidizes to ethanoic acid with alkaline KMnO4.'
          ],
          examTips: 'Write chemical equation for Esterification reaction (CH3COOH + C2H5OH -> CH3COOC2H5 + H2O).'
        },
        {
          id: 'tn10-sci-u9',
          unit: 'Unit 12 & 14',
          title: 'Plant Photosynthesis & Human Heart Circulation',
          tamilTitle: 'தாவர ஒளிச்சேர்க்கை & மனித இதய இரத்த ஓட்டம்',
          keywords: ['photosynthesis', 'heart', 'circulation', 'double circulation', 'ஒளிச்சேர்க்கை', 'இதயம்'],
          summaryEn: 'Photosynthesis converts CO2 and H2O into glucose (C6H12O6) and O2 using solar energy and chlorophyll: 6CO2 + 6H2O -> C6H12O6 + 6O2. The human heart is a 4-chambered muscular pump exhibiting double circulation (pulmonary & systemic circulation).',
          summaryTa: 'ஒளிச்சேர்க்கை சமன்பாடு: 6CO₂ + 6H₂O + சூரியஒளி (பச்சையம்) -> C₆H₁₂O₆ + 6O₂. மனித இதயம் 4 அறைகளைக் கொண்டது (2 ஆரிக்கிள்கள், 2 வென்ட்ரிக்கிள்கள்). இது இரட்டை இரத்த ஓட்ட அமைப்பைக் (Double circulation) கொண்டுள்ளது.',
          formulas: 'Photosynthesis: 6CO2 + 6H2O -> C6H12O6 + 6O2\nNormal Blood Pressure = 120/80 mmHg (Systolic/Diastolic)',
          analogy: 'Double circulation is like a bus that picks up clean oxygen at the lung terminus, drops it off to city body cells, collects waste CO2, and returns back to the lungs.',
          keyPoints: [
            'Light reaction occurs in thylakoid grana; Dark reaction (Calvin cycle) in chloroplast stroma.',
            'Tricuspid valve is on right side of heart; Bicuspid (mitral) valve on left side.'
          ],
          examTips: 'Diagram of human heart and explanation of double circulation (7-mark guaranteed question).'
        },
        {
          id: 'tn10-sci-u10',
          unit: 'Unit 15 & 16',
          title: 'Nervous System & Endocrine Hormones',
          tamilTitle: 'நரம்பு மண்டலம் மற்றும் நாளமில்லாச் சுரப்பிகள் (ஹார்மோன்கள்)',
          keywords: ['nervous system', 'neuron', 'brain', 'hormones', 'insulin', 'thyroid', 'pituitary', 'நரம்பு மண்டலம்', 'ஹார்மோன்'],
          summaryEn: 'The nervous system comprises the Central Nervous System (Brain and Spinal cord) and Peripheral Nervous System. A Neuron (nerve cell) has cyton, dendrites, and axon. Reflex Arc enables involuntary instantaneous reactions. Endocrine glands secrete chemical messengers called Hormones directly into bloodstream: Pituitary (Master gland), Thyroid (Thyroxine - personality hormone), Pancreas (Insulin - regulates blood glucose), and Adrenal (Adrenaline - emergency/flight-or-fight hormone).',
          summaryTa: 'நரம்பு மண்டலம் மூளை, தண்டுவடம் மற்றும் நரம்புகளைக் கொண்டது. நியூரான்கள் தகவல்களை மின் தூண்டல்களாகக் கடத்துகின்றன. நாளமில்லாச் சுரப்பிகள் ஹார்மோன்களை ரத்தத்தில் சுரக்கின்றன: பிட்யூட்டரி (தலைமைச் சுரப்பி), தைராய்டு (தைராக்சின் - ஆளுமை ஹார்மோன்), கணையம் (இன்சுலின் - ரத்த சர்க்கரை கட்டுப்பாடு), அட்ரினலின் (அவசரகால ஹார்மோன்).',
          formulas: '• Master Gland = Pituitary Gland (regulates other glands)\n• Insulin deficiency -> Diabetes Mellitus\n• Thyroxine deficiency -> Simple Goitre (enlarged thyroid neck)',
          analogy: 'Adrenaline is like pressing the emergency turbo button in a video game: When you see a barking dog chasing you, adrenaline instantly surges your heart rate, dilates pupils, and pumps blood to leg muscles to run fast!',
          keyPoints: [
            'Synapse is the microscopic gap across which neurotransmitters transmit nerve impulses between two neurons.',
            'Insulin converts excess glucose into glycogen in the liver.'
          ],
          examTips: 'Draw and label the structure of a neuron (cyton, dendrites, axon, myelin sheath).'
        },
        {
          id: 'tn10-sci-u11',
          unit: 'Unit 18',
          title: 'Heredity & Mendel’s Monohybrid Cross',
          tamilTitle: 'மரபியல்: மெண்டலின் ஒரு பண்புக் கலப்பு & DNA அமைப்பு',
          keywords: ['mendel', 'genetics', 'monohybrid', 'dihybrid', 'dna', 'வாட்சன் கிரிக்', 'மரபியல்'],
          summaryEn: "Gregor Mendel, Father of Genetics, discovered laws of inheritance using pea plants (Pisum sativum). In a Monohybrid cross (Tall TT x Dwarf tt), the F1 generation is all tall (Tt), and the F2 generation exhibits a Phenotypic ratio of 3:1 (Tall:Dwarf) and Genotypic ratio of 1:2:1 (TT:Tt:tt). Watson and Crick elucidated the double-helix DNA structure.",
          summaryTa: 'மரபியலின் தந்தை கிரிகோர் மெண்டல் பட்டாணி செடியில் ஆய்வு செய்தார். ஒரு பண்புக் கலப்பில் F2 தலைமுறையின் புறத்தோற்ற விகிதம் 3 : 1 (நெட்டை : குட்டை) மற்றும் மரபணு வகை விகிதம் 1 : 2 : 1 (TT : Tt : tt) ஆகும். வாட்சன் மற்றும் கிரிக் DNA இரட்டைச் சுருள் அமைப்பை உருவாக்கினர்.',
          formulas: '• Monohybrid Phenotypic Ratio: 3 : 1 (Tall : Dwarf)\n• Monohybrid Genotypic Ratio: 1 : 2 : 1 (TT : Tt : tt)\n• Dihybrid Phenotypic Ratio: 9 : 3 : 3 : 1',
          analogy: 'Inheritance is like mixing paint: Dominant gene (like bright red paint T) hides the recessive trait (like white paint t) in the first mix.',
          keyPoints: [
            'Law of Segregation: Alleles separate during gamete formation so each gamete carries only one allele.',
            'DNA bases: Adenine pairs with Thymine (A=T with 2 H-bonds); Guanine pairs with Cytosine (G≡C with 3 H-bonds).'
          ],
          examTips: 'Draw Punnett square checkerboard for Monohybrid cross (3:1 and 1:2:1).'
        }
      ],
      'Mathematics': [
        {
          id: 'tn10-math-u1',
          unit: 'Unit 1',
          title: 'Relations and Functions: Cartesian Product',
          tamilTitle: 'உறவுகளும் சார்புகளும்: கார்டீசியன் பெருக்கல் & சார்புகள்',
          keywords: ['relations', 'functions', 'cartesian product', 'one-one', 'onto', 'உறவுகள்', 'சார்புகள்'],
          summaryEn: 'Cartesian Product A × B is the set of all ordered pairs (a, b) where a ∈ A and b ∈ B. If n(A) = p and n(B) = q, then n(A × B) = p × q. A Relation R from A to B is a subset of A × B. A Function f: A -> B is a relation where every element in domain A has one and only one image in co-domain B. Types: One-One (Injective), Onto (Surjective), and Bijective.',
          summaryTa: 'A மற்றும் B கணங்களின் கார்டீசியன் பெருக்கல் A × B என்பது அனைத்து வரிசை ஜோடிகளின் (a, b) கணம் ஆகும். n(A × B) = n(A) × n(B). ஒரு சார்பு (Function) என்பது மதிப்பகத்தில் உள்ள ஒவ்வொரு உறுப்பிற்கும் வீச்சகத்தில் ஒரே ஒரு நிழல் உரு மட்டுமே கொண்ட சிறப்பு உறவு ஆகும்.',
          formulas: '• Cartesian Product: n(A × B) = n(A) · n(B)\n• Total relations from A to B = 2^(p·q)\n• Composition of functions: (f ∘ g)(x) = f(g(x))',
          analogy: 'Every student in a class (Domain) has exactly one unique school Roll Number (Co-domain). No student has two roll numbers, so this assignment is a valid Function!',
          keyPoints: [
            'Vertical line test: A curve represents a function if any vertical line intersects the curve at at most one point.',
            'Function composition is generally not commutative: (f ∘ g) ≠ (g ∘ f).'
          ],
          examTips: 'State whether a given relation is a function using the vertical line test or mapping diagram.'
        },
        {
          id: 'tn10-math-u2',
          unit: 'Unit 2',
          title: 'Arithmetic Progression (AP) & Geometric Progression (GP)',
          tamilTitle: 'கூட்டுத்தொடர்வரிசை (AP) & பெருக்குத்தொடர்வரிசை (GP)',
          keywords: ['ap', 'gp', 'arithmetic progression', 'geometric progression', 'கூட்டுத்தொடர்', 'பெருக்குத்தொடர்'],
          summaryEn: 'An Arithmetic Progression (AP) has a constant common difference (d = t2 - t1). The nth term is tn = a + (n - 1)d, and sum of n terms is Sn = n/2 [2a + (n - 1)d]. A Geometric Progression (GP) has a constant common ratio (r = t2 / t1), with nth term tn = a · r^(n - 1).',
          summaryTa: 'கூட்டுத்தொடர்வரிசை (AP): tn = a + (n - 1)d மற்றும் கூடுதல் Sn = n/2 [2a + (n - 1)d]. பெருக்குத்தொடர்வரிசை (GP): tn = a · r^(n - 1) மற்றும் கூடுதல் Sn = a(rⁿ - 1) / (r - 1).',
          formulas: '• AP nth term: tn = a + (n - 1)d\n• AP Sum: Sn = n/2 [2a + (n - 1)d] = n/2 [a + l]\n• GP nth term: tn = a · r^(n - 1)\n• Special Series: 1 + 2 + 3 + ... + n = n(n + 1)/2\n• Sum of squares: 1² + 2² + ... + n² = n(n + 1)(2n + 1)/6\n• Sum of cubes: 1³ + 2³ + ... + n³ = [n(n + 1)/2]²',
          analogy: 'Climbing steps: If each step is 15 cm higher than the previous (constant gap), that is an AP. If your money doubles every year (100, 200, 400, 800), that is a GP.',
          keyPoints: [
            'Three numbers in AP: (a - d), a, (a + d).',
            'Three numbers in GP: a/r, a, ar.'
          ],
          examTips: 'Practice sum of special series: [1+2+...+n] and [1³+2³+...+n³] = [n(n+1)/2]².'
        },
        {
          id: 'tn10-math-u3',
          unit: 'Unit 3',
          title: 'Quadratic Equations & Formula',
          tamilTitle: 'இருபடிச் சமன்பாடுகள் & சூத்திர முறை (Quadratic Formula)',
          keywords: ['quadratic equation', 'quadratic formula', 'discriminant', 'roots', 'இருபடிச் சமன்பாடு'],
          summaryEn: 'A quadratic equation has the general form ax² + bx + c = 0 (a ≠ 0). The roots are given by x = [-b ± √(b² - 4ac)] / (2a). The discriminant Δ = b² - 4ac determines root nature: Δ > 0 (real and unequal), Δ = 0 (real and equal), Δ < 0 (no real roots).',
          summaryTa: 'இருபடிச் சமன்பாட்டின் பொது வடிவம் ax² + bx + c = 0. மூலங்களைக் காணும் சூத்திரம்: x = [-b ± √(b² - 4ac)] / 2a. மூலங்களின் தன்மை காட்டி Δ = b² - 4ac: Δ > 0 எனில் மெய் மற்றும் சமமில்லை; Δ = 0 எனில் மெய் மற்றும் சமம்; Δ < 0 எனில் மெய் மூலங்கள் இல்லை.',
          formulas: '• Roots: x = [-b ± √(b² - 4ac)] / (2a)\n• Discriminant: Δ = b² - 4ac\n• Sum of roots α + β = -b / a\n• Product of roots αβ = c / a',
          analogy: 'Trajectory of a cricket ball hit for a six forms a parabolic curve described by a quadratic equation!',
          keyPoints: [
            'Forming equation from roots: x² - (Sum of roots)x + (Product of roots) = 0.',
            'If roots are equal, set Δ = b² - 4ac = 0 to solve for unknown parameter k.'
          ],
          examTips: 'Guaranteed 5-mark question: Solve ax² + bx + c = 0 by formula method or determine root nature.'
        },
        {
          id: 'tn10-math-u4',
          unit: 'Unit 4',
          title: 'Pythagoras Theorem & Thales Theorem (BPT)',
          tamilTitle: 'பிதாகரஸ் தேற்றம் & தேல்ஸ் தேற்றம் (வடிவியல்)',
          keywords: ['pythagoras theorem', 'thales theorem', 'bpt', 'geometry', 'பிதாகரஸ் தேற்றம்', 'தேல்ஸ் தேற்றம்'],
          summaryEn: 'Pythagoras Theorem: In a right-angled triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides (c² = a² + b²). Basic Proportionality Theorem (Thales): A line parallel to one side of a triangle divides the other two sides in the same ratio.',
          summaryTa: 'பிதாகரஸ் தேற்றம்: ஒரு செங்கோண முக்கோணத்தில் கர்ணத்தின் வர்க்கமானது மற்ற இரு பக்கங்களின் வர்க்கங்களின் கூடுதலுக்குச் சமம் (கர்ணம்² = பக்கம்₁² + பக்கம்₂²). தேல்ஸ் தேற்றம்: ஒரு முக்கோணத்தின் ஒரு பக்கத்திற்கு இணையாக வரையப்படும் கோடு மற்ற இரு பக்கங்களை சம விகிதத்தில் பிரிக்கும்.',
          formulas: '• Pythagoras: Hypotenuse² = Adjacent² + Opposite² (c² = a² + b²)\n• Common triples: (3, 4, 5), (5, 12, 13), (8, 15, 17)\n• Thales (BPT): AD / DB = AE / EC',
          analogy: 'A ladder leaning against a wall: Wall height (a), distance of ladder foot from wall (b), ladder length is hypotenuse (c).',
          keyPoints: [
            'State and Prove Pythagoras Theorem is one of the most prominent 5-mark questions in TN Board exam.',
            'Converse of Pythagoras: If c² = a² + b², the angle opposite to hypotenuse is 90°.'
          ],
          examTips: 'Memorize the formal statement and step-by-step geometric proof with triangle similarity.'
        },
        {
          id: 'tn10-math-u5',
          unit: 'Unit 5',
          title: 'Coordinate Geometry: Area of Triangle & Slope of Line',
          tamilTitle: 'ஆயத்தொலை வடிவியல்: முக்கோணத்தின் பரப்பளவு & சாய்வு',
          keywords: ['coordinate geometry', 'slope', 'area of triangle', 'collinear', 'ஆயத்தொலை வடிவியல்', 'சாய்வு'],
          summaryEn: 'Area of triangle with vertices (x1, y1), (x2, y2), (x3, y3) is ½ [(x1(y2 - y3) + x2(y3 - y1) + x3(y1 - y2))]. If Area = 0, the three points are Collinear (lie on same line). Slope (m) of a straight line with angle of inclination θ is m = tan θ. Slope through two points = (y2 - y1) / (x2 - x1). Parallel lines have equal slopes (m1 = m2); Perpendicular lines have m1 × m2 = -1.',
          summaryTa: 'முக்கோணத்தின் பரப்பளவு = ½ [(x₁y₂ + x₂y₃ + x₃y₁) - (x₂y₁ + x₃y₂ + x₁y₃)]. பரப்பளவு 0 எனில் புள்ளிகள் ஒரே நேர்க்கோட்டில் அமையும் (Collinear). நேர்க்கோட்டின் சாய்வு m = tan θ = (y₂ - y₁) / (x₂ - x₁). இணைக்கோடுகள்: m₁ = m₂; செங்குத்துக் கோடுகள்: m₁ × m₂ = -1.',
          formulas: '• Slope: m = tan θ = (y2 - y1) / (x2 - x1)\n• Slope-Intercept Form: y = mx + c\n• Point-Slope Form: y - y1 = m(x - x1)\n• Parallel lines: m1 = m2 | Perpendicular lines: m1 · m2 = -1',
          analogy: 'Walking up a mountain road: A steep road has high slope (large m), while a flat highway has zero slope (m = 0)!',
          keyPoints: [
            'Slope of horizontal x-axis = 0; Slope of vertical y-axis is undefined (tan 90°).',
            'To prove points are collinear, show that Area of triangle = 0 or Slope AB = Slope BC.'
          ],
          examTips: 'Find value of k if given 3 points are collinear (set triangle area formula to 0).'
        },
        {
          id: 'tn10-math-u6',
          unit: 'Unit 6',
          title: 'Trigonometry: Identities & Heights and Distances',
          tamilTitle: 'முக்கோணவியல்: முற்றொருமைகள் & உயரங்களும் தொலைவுகளும்',
          keywords: ['trigonometry', 'identities', 'heights and distances', 'elevation', 'depression', 'முக்கோணவியல்'],
          summaryEn: 'Trigonometric identities: 1) sin²θ + cos²θ = 1, 2) 1 + tan²θ = sec²θ, 3) 1 + cot²θ = cosec²θ. Heights and distances use tan θ = Opposite / Adjacent to determine tower/building heights using angles of elevation and depression.',
          summaryTa: 'முக்கிய முக்கோணவியல் முற்றொருமைகள்:\n1. sin²θ + cos²θ = 1\n2. 1 + tan²θ = sec²θ\n3. 1 + cot²θ = cosec²θ\nஏற்றக்கோணம் (Angle of elevation) மற்றும் இறக்கக்கோணம் (Angle of depression) கணக்குகளுக்கு tan θ = எதிர்ப்பக்கம் / அடுத்துள்ளபக்கம் பயன்படுகிறது.',
          formulas: '• sin²θ + cos²θ = 1 => sin²θ = 1 - cos²θ\n• 1 + tan²θ = sec²θ => sec²θ - tan²θ = 1\n• 1 + cot²θ = cosec²θ => cosec²θ - cot²θ = 1\n• tan 30° = 1/√3, tan 45° = 1, tan 60° = √3',
          analogy: 'Looking up from the ground to the top of Chennai LIC building is angle of elevation; standing on terrace looking down at a car on the road is angle of depression.',
          keyPoints: [
            'Angle of depression from top of tower = Angle of elevation from ground (alternate interior angles).',
            'Always sketch the right-angled triangle figure first.'
          ],
          examTips: 'Heights and distances word problems (lighthouse/tower) are 5-mark favourites.'
        },
        {
          id: 'tn10-math-u7',
          unit: 'Unit 7',
          title: 'Mensuration: Cylinder, Cone, Sphere & Hemisphere',
          tamilTitle: 'அளவியல்: உருளை, கூம்பு, கோளம் மற்றும் அரைக்கோளம்',
          keywords: ['mensuration', 'cylinder', 'cone', 'sphere', 'hemisphere', 'volume', 'surface area', 'அளவியல்', 'உருளை', 'கூம்பு'],
          summaryEn: 'Surface areas and volumes of 3D solids: 1) Right Circular Cylinder: Curved Surface Area (CSA) = 2πrh, Total Surface Area (TSA) = 2πr(h + r), Volume V = πr²h. 2) Right Circular Cone: Slant height l = √(h² + r²), CSA = πrl, TSA = πr(l + r), Volume V = ⅓ πr²h. 3) Sphere: Surface Area = 4πr², Volume V = ⁴/₃ πr³. 4) Hemisphere: CSA = 2πr², TSA = 3πr², Volume = ⅔ πr³.',
          summaryTa: 'திண்மங்களின் புறப்பரப்பு & கனஅளவு:\n• உருளை (Cylinder): வளைபரப்பு = 2πrh, மொத்தப்பரப்பு = 2πr(h + r), கனஅளவு = πr²h\n• கூம்பு (Cone): சாயுயரம் l = √(h² + r²), வளைபரப்பு = πrl, கனஅளவு = ⅓ πr²h\n• கோளம் (Sphere): புறப்பரப்பு = 4πr², கனஅளவு = ⁴/₃ πr³\n• அரைக்கோளம் (Hemisphere): மொத்தப்பரப்பு = 3πr², கனஅளவு = ⅔ πr³.',
          formulas: '• Cylinder: CSA = 2πrh | V = πr²h\n• Cone: l = √(r² + h²) | CSA = πrl | V = ⅓ πr²h\n• Sphere: Surface Area = 4πr² | V = ⁴/₃ πr³\n• Hemisphere: TSA = 3πr² | V = ⅔ πr³',
          analogy: 'Filling an ice-cream cone: The conical waffle cup holds exactly one-third the volume of a cylinder with the same radius and height (V = ⅓ πr²h)!',
          keyPoints: [
            'When a solid of one shape is melted and recast into another shape, its Volume remains constant!',
            'Slant height of cone: l² = r² + h².'
          ],
          examTips: 'Melting and recasting problems (e.g. melting metallic spheres into a cylinder) are frequent 5-mark questions.'
        },
        {
          id: 'tn10-math-u8',
          unit: 'Unit 8',
          title: 'Statistics & Probability: Standard Deviation & Addition Theorem',
          tamilTitle: 'புள்ளியியல் & நிகழ்தகவு: திட்டவிலக்கம் & கூட்டல் தேற்றம்',
          keywords: ['statistics', 'probability', 'standard deviation', 'variance', 'coefficient of variation', 'addition theorem', 'திட்டவிலக்கம்', 'நிகழ்தகவு'],
          summaryEn: 'Standard Deviation (σ) measures the dispersion/spread of data from the mean: σ = √[Σ(x - x̄)² / n]. Variance is σ². Coefficient of Variation (CV) measures consistency: CV = (σ / x̄) × 100% (lower CV means more consistent). Addition Theorem of Probability for any two events A and B: P(A ∪ B) = P(A) + P(B) - P(A ∩ B). If mutually exclusive, P(A ∩ B) = 0.',
          summaryTa: 'திட்டவிலக்கம் σ = √[Σd² / n] (இங்கு d = x - x̄). மாறுபாட்டுக் கெழு CV = (σ / x̄) × 100% (CV குறைவாக இருந்தால் தரவு அதிக நிலைத்தன்மை கொண்டது). நிகழ்தகவின் கூட்டல் தேற்றம்: P(A ∪ B) = P(A) + P(B) - P(A ∩ B). ஒன்றையொன்று விலக்கும் நிகழ்ச்சிகளுக்கு P(A ∩ B) = 0.',
          formulas: '• Standard Deviation: σ = √[(Σd² / n) - (Σd / n)²]\n• Coefficient of Variation: CV = (σ / x̄) × 100\n• Addition Theorem: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)\n• Mutually Exclusive Events: P(A ∪ B) = P(A) + P(B)',
          analogy: 'Comparing two cricket batsmen: If both average 50 runs, the batsman with a lower Coefficient of Variation (CV) is the more consistent and dependable match-winner!',
          keyPoints: [
            'If each value in a dataset is multiplied or divided by k, the standard deviation is also multiplied or divided by k.',
            'Standard deviation of the first n natural numbers = √[(n² - 1) / 12].'
          ],
          examTips: 'State and prove the Addition Theorem of Probability P(A ∪ B) = P(A) + P(B) - P(A ∩ B).'
        }
      ],
      'Social Science': [
        {
          id: 'tn10-soc-u1',
          unit: 'History Unit 1 & 3',
          title: 'World War I, II & The United Nations',
          tamilTitle: 'முதல் மற்றும் இரண்டாம் உலகப்போர் & ஐக்கிய நாடுகள் சபை (UN)',
          keywords: ['world war', 'treaty of versailles', 'united nations', 'ஹிட்லர்', 'உலகப்போர்', 'ஐநா சபை'],
          summaryEn: 'World War I (1914-1918) ended with the Treaty of Versailles (1919) and established the League of Nations. World War II (1939-1945) was sparked by Hitler’s invasion of Poland and ended with the atomic bombing of Hiroshima and Nagasaki. The United Nations (UN) was established on October 24, 1945 to maintain world peace.',
          summaryTa: 'முதல் உலகப்போர் (1914-1918) வெர்சேல்ஸ் உடன்படிக்கையுடன் முடிவடைந்தது. இரண்டாம் உலகப்போர் (1939-1945) ஹிட்லரின் போலந்து ஆக்கிரமிப்பால் தொடங்கி, ஹிரோஷிமா, நாகசாகி அணு குண்டுவெடிப்புகளுடன் முடிந்தது. உலக அமைதிக்காக அக்டோபர் 24, 1945 இல் ஐக்கிய நாடுகள் சபை (UNO) தொடங்கப்பட்டது.',
          formulas: '• WWI: 1914 - 1918 | Treaty of Versailles: 1919\n• WWII: 1939 - 1945 | UN Day: October 24, 1945',
          analogy: 'The UN acts like an international panchayat court where countries resolve disputes through dialogue instead of destructive wars.',
          keyPoints: [
            'Six principal organs of the UN: General Assembly, Security Council, ECOSOC, Trusteeship, ICJ, Secretariat.',
            'Five permanent members of UN Security Council (P5): USA, UK, France, Russia, China with Veto power.'
          ],
          examTips: 'Explain causes of World War II and the objectives of the United Nations.'
        },
        {
          id: 'tn10-soc-u2',
          unit: 'History Unit 6 & 9',
          title: 'Early Revolts & Freedom Movement in Tamil Nadu',
          tamilTitle: 'தமிழ்நாட்டில் தொடக்க கால கிளர்ச்சிகள் & விடுதலைப் போராட்டம் (கட்டபொம்மன், பாரதியார், வ.உ.சி)',
          keywords: ['kattabomman', 'velu nachiyar', 'pulithevan', 'bharathiyar', 'voc', 'kamaraj', 'கட்டபொம்மன்', 'வேலுநாச்சியார்', 'வ.உ.சி'],
          summaryEn: 'Tamil Nadu was the cradle of early anti-colonial resistance: Pulithevan (first to resist British in 1755), Veerapandiya Kattabomman of Panchalankurichi (refused to pay tribute, executed at Kayathar in 1799), and Queen Velu Nachiyar of Sivagangai (first Indian queen to wage war and defeat British in 1780). In the 20th century, freedom was championed by VO Chidambaram (Swadeshi Steam Navigation), Subramania Bharati (revolutionary patriotic poet), and K. Kamaraj.',
          summaryTa: 'ஆங்கிலேயருக்கு எதிரான முதல் எதிர்ப்பு தமிழ்நாட்டிலேயே தொடங்கியது: பூலித்தேவன் (1755), பாஞ்சாலங்குறிச்சி வீரபாண்டிய கட்டபொம்மன் ("வானம் பொழிகிறது பூமி விளைகிறது... எதற்கு வரி?"), சிவகங்கை வீராங்கனை வேலுநாச்சியார் (ஆங்கிலேயரை போரில் வென்ற முதல் இந்திய அரசி). 20-ம் நூற்றாண்டில் கப்பலோட்டிய தமிழன் வ.உ.சிதம்பரனார், மகாகவி பாரதியார், காமராஜர் ஆகியோர் விடுதலைக்கு வழிநடத்தினர்.',
          formulas: '• Pulithevan: First revolt in 1755 at Nerkattumseval\n• Velu Nachiyar: Recaptured Sivagangai in 1780 with army and Kuyili\n• Kattabomman: Executed at Kayathar on 16 October 1799\n• VOC: Launched Swadeshi Steam Navigation Company (1906)',
          analogy: 'Queen Velu Nachiyar pioneered modern guerrilla warfare and women military wings (Udaiyal brigade) 75 years before Rani of Jhansi!',
          keyPoints: [
            'Vellore Revolt on 10 July 1806 was the precursor and spark to the Great Revolt of 1857.',
            'Subramania Bharati’s songs electrified the national spirit across South India.'
          ],
          examTips: 'Write an essay on the heroic resistance of Veerapandiya Kattabomman against British tax collectors.'
        },
        {
          id: 'tn10-soc-u3',
          unit: 'Geography Unit 1 & 2',
          title: 'India: Physical Features, Rivers & Monsoon Climate',
          tamilTitle: 'இந்தியா: நிலத்தோற்றம், ஆறுகள் மற்றும் பருவமழைக் காலநிலை',
          keywords: ['himalayas', 'rivers', 'monsoon', 'ganga', 'kaveri', 'peninsular plateau', 'இமயமலை', 'பருவமழை', 'காவிரி'],
          summaryEn: 'India features 6 physiographic divisions: Northern Great Himalayas (young fold mountains, source of perennial rivers), Northern Fertile Plains, Peninsular Plateau (Deccan), Coastal Plains, and Islands. Rivers are Himalayan (Ganga, Indus, Brahmaputra - snow-fed, perennial) and Peninsular (Kaveri, Godavari, Krishna - rain-fed). Climate is dominated by Tropical Monsoon: Southwest Monsoon (June-Sept, brings 75% of India’s rain) and Northeast Monsoon (Oct-Dec, gives primary rainfall to Tamil Nadu).',
          summaryTa: 'இந்தியாவின் நிலத்தோற்றம்: இமயமலை (இளம் மடிப்பு மலைகள்), வட பெரும் சமவெளி, தீபகற்ப பீடபூமி (தக்காண பீடபூமி), கடற்கரைச் சமவெளிகள் மற்றும் தீவுகள். ஆறுகள்: இமயமலை ஆறுகள் (கங்கை, சிந்து - வற்றாத ஜீவ நதிகள்) மற்றும் தீபகற்ப ஆறுகள் (காவிரி, கோதாவரி). தென்மேற்கு பருவக்காற்று (ஜூன்-செப்) இந்தியாவிற்கு பெரும்பான்மை மழையையும்; வடகிழக்கு பருவக்காற்று (அக்-டிச) தமிழ்நாட்டிற்கு அதிக மழையையும் தருகின்றன.',
          formulas: '• Highest peak in India: K2 (Godwin Austen, 8,611 m) | In Himalayas: Mt. Everest (8,848.86 m)\n• Southwest Monsoon: June - September (Kerala coast entry)\n• Northeast Monsoon: October - December (Tamil Nadu primary rainfall)',
          analogy: 'The Himalayas act as a giant cosmic northern wall: They block freezing Siberian winds from freezing India, while forcing monsoon rain-bearing clouds to pour water across Indian plains!',
          keyPoints: [
            'Mawsynram in Meghalaya receives the highest annual rainfall in the world.',
            'Kaveri river is known as the "Ganga of the South" (Dakshin Ganga).'
          ],
          examTips: 'Explain the mechanism of the Southwest Monsoon and why Tamil Nadu gets rainfall during the Northeast Monsoon.'
        },
        {
          id: 'tn10-soc-u4',
          unit: 'Civics Unit 1 & 2',
          title: 'Indian Constitution, Central Government & Parliament',
          tamilTitle: 'இந்திய அரசியலமைப்பு, மத்திய அரசு மற்றும் நாடாளுமன்றம்',
          keywords: ['constitution', 'fundamental rights', 'ambedkar', 'preamble', 'parliament', 'president', 'prime minister', 'அரசியலமைப்பு', 'நாடாளுமன்றம்'],
          summaryEn: 'The Constitution of India came into legal force on 26 January 1950. Dr. B.R. Ambedkar was Chairman of Drafting Committee. Part III guarantees 6 Fundamental Rights (Articles 14–32), with Article 32 (Right to Constitutional Remedies) hailed as the "Heart and Soul". The Central Government features: President (nominal head), Prime Minister (head of government), and Parliament with two houses: Lok Sabha (House of the People, 543 elected) and Rajya Sabha (Council of States, 250 members).',
          summaryTa: 'இந்திய அரசியலமைப்பு ஜனவரி 26, 1950 அன்று நடைமுறைக்கு வந்தது. டாக்டர் பி.ஆர். அம்பேத்கர் வரைவுக்குழு தலைவர். 6 அடிப்படை உரிமைகள் (பிரிவு 14-32) உள்ளன. மத்திய அரசில் குடியரசுத் தலைவர் (நாட்டின் தலைவர்), பிரதமர் (அரசாங்கத்தின் தலைவர்) மற்றும் நாடாளுமன்றம் (மக்களவை - 543 உறுப்பினர்கள், மாநிலங்களவை - 250 உறுப்பினர்கள்) செயல்படுகின்றன.',
          formulas: '• Republic Day: 26 January 1950\n• Lok Sabha: 543 elected MPs (5-year term, Min age 25)\n• Rajya Sabha: 250 members (Permanent house, 6-year term, Min age 30)\n• Supreme Court: Guardian of Constitution (New Delhi)',
          analogy: 'The Constitution is the ultimate national referee: No matter how powerful a Prime Minister, President, or Chief Minister is, everyone must strictly play within the rules written in the Constitution!',
          keyPoints: [
            'Money Bills can only be introduced in the Lok Sabha with prior recommendation of President.',
            'President appoints the Chief Justice of India and the Prime Minister.'
          ],
          examTips: 'List the 6 Fundamental Rights in Indian Constitution (guaranteed 5-mark question).'
        }
      ]
    },

    // =========================================================================
    // 11TH STANDARD (HIGHER SECONDARY - HSC 1)
    // =========================================================================
    '11th': {
      'Physics': [
        {
          id: 'tn11-phy-u1',
          unit: 'Unit 1 & 2',
          title: 'Vectors, Projectile Motion & Kinematics',
          tamilTitle: 'வெக்டர்கள் & எறிபொருள் இயக்கம் (Projectile Motion)',
          keywords: ['vectors', 'projectile', 'kinematics', 'dot product', 'cross product', 'எறிபொருள் இயக்கம்'],
          summaryEn: 'Vectors possess both magnitude and direction. Projectile motion is two-dimensional motion under constant gravitational acceleration: Horizontal motion has constant velocity (ux = u cos θ), while vertical motion has constant downward acceleration (uy = u sin θ, ay = -g).',
          summaryTa: 'எறிபொருள் இயக்கம்: ஒரு பொருள் தொடக்கத் திசைவேகத்துடன் கிடைமட்டத்திற்கு θ கோணத்தில் எறியப்படும்போது, அது பரவளையப் பாதையில் (Parabolic path) இயங்குகிறது. கிடைமட்ட வேகம் மாறிலியாகவும், செங்குத்து வேகம் புவியீர்ப்பு முடுக்கத்தால் மாற்றமடையும்.',
          formulas: '• Maximum Height: H = (u² sin² θ) / (2g)\n• Time of Flight: T = (2u sin θ) / g\n• Horizontal Range: R = (u² sin 2θ) / g\n• Maximum range occurs at launch angle θ = 45°',
          analogy: 'A cricket batsman hitting a lofted shot for six: The ball rises and arcs over the boundary rope following a parabolic trajectory.',
          keyPoints: [
            'At maximum height, vertical component of velocity vy = 0.',
            'Scalar (Dot) product: A · B = AB cos θ | Vector (Cross) product: A × B = AB sin θ n̂.'
          ],
          examTips: 'Derive expressions for Time of Flight, Maximum Height, and Horizontal Range of a projectile.'
        },
        {
          id: 'tn11-phy-u2',
          unit: 'Unit 6',
          title: 'Gravitation & Escape Velocity',
          tamilTitle: 'ஈர்ப்பியல் & விடுபடு வேகம் (Escape Velocity)',
          keywords: ['gravitation', 'kepler', 'escape velocity', 'orbital velocity', 'ஈர்ப்பியல்', 'விடுபடு வேகம்'],
          summaryEn: "Newton's Law of Gravitation: F = G(m1·m2)/r². Kepler's three laws govern planetary orbits. Escape velocity (ve) is the minimum speed needed for an object to break free from Earth's gravitational pull without further propulsion: ve = √(2gR) ≈ 11.2 km/s.",
          summaryTa: 'நியூட்டனின் ஈர்ப்பு விதி: F = G(m₁m₂) / r². விடுபடு வேகம் (Escape Velocity): ஒரு பொருள் புவியின் ஈர்ப்பு புலத்திலிருந்து விடுபட்டு மீண்டும் திரும்பாமல் விண்வெளிக்குச் செல்லத் தேவையான குறைந்தபட்ச வேகம் ஆகும். பூமியில் இதன் மதிப்பு 11.2 km/s.',
          formulas: '• Gravitational Force: F = G (m1 m2) / r²\n• Escape Velocity: ve = √(2GM/R) = √(2gR) ≈ 11.2 km/s\n• Orbital Velocity: vo = √(GM/R) = √(gR) ≈ 7.9 km/s\n• Relation: ve = √2 × vo',
          analogy: 'Throwing a ball upward: Throw it faster, it goes higher. Throw it at 11.2 km/s (40,320 km/h), and it escapes Earth completely, never falling back down!',
          keyPoints: [
            'Kepler’s 3rd Law (Law of Periods): T² ∝ a³ (square of period proportional to cube of semi-major axis).',
            'Value of G = 6.674 × 10⁻¹¹ N·m²/kg².'
          ],
          examTips: 'Derive escape velocity formula ve = √(2gR) and show that ve = √2 vo.'
        }
      ],
      'Chemistry': [
        {
          id: 'tn11-chem-u1',
          unit: 'Unit 1 & 2',
          title: 'Mole Concept & Quantum Numbers',
          tamilTitle: 'மோல் தத்துவம் & குவாண்டம் எண்கள் (Quantum Numbers)',
          keywords: ['mole concept', 'quantum numbers', 'avogadro', 'de broglie', 'மோல்', 'குவாண்டம் எண்கள்'],
          summaryEn: 'One mole is the amount of substance containing exactly 6.022 × 10²³ elementary entities (Avogadro’s number). Four quantum numbers fully specify an electron: Principal (n: shell size/energy), Azimuthal (l: orbital shape s,p,d,f), Magnetic (m: orientation in space), and Spin (s: +½ or -½).',
          summaryTa: 'ஒரு மோல் என்பது 6.022 × 10²³ துகள்களைக் (அவகாட்ரோ எண்) கொண்ட பொருளின் அளவு ஆகும். எலக்ட்ரானின் நிலையை விவரிக்கும் 4 குவாண்டம் எண்கள்:\n1. முதன்மை (n)\n2. கோண உந்தம் / துணை (l)\n3. காந்த (m)\n4. சுழற்சி (s = +½, -½).',
          formulas: '• Number of moles n = Mass in grams / Molar mass\n• Avogadro constant NA = 6.022 × 10²³ mol⁻¹\n• de Broglie: λ = h / p = h / (mv)\n• Heisenberg: Δx · Δp ≥ h / (4π)',
          analogy: 'Just as "one dozen" means 12 bananas, "one mole" means 6.022 × 10²³ atoms or molecules of any substance.',
          keyPoints: [
            'Aufbau principle: Electrons enter lowest available energy orbitals first (1s < 2s < 2p < 3s...).',
            'Pauli exclusion principle: No two electrons in an atom can have the same set of four quantum numbers.'
          ],
          examTips: 'Explain the significance of the four quantum numbers (n, l, m, s).'
        },
        {
          id: 'tn11-chem-u2',
          unit: 'Unit 10',
          title: 'Chemical Bonding & Hybridisation (sp, sp2, sp3)',
          tamilTitle: 'வேதிப் பிணைப்புகள் & இனக்கலப்பு (Hybridisation)',
          keywords: ['hybridisation', 'hybrid', 'chemical bonding', 'vsepr', 'sp3', 'sp2', 'sp', 'வேதிப் பிணைப்பு', 'இனக்கலப்பு'],
          summaryEn: 'Hybridisation is the intermixing of atomic orbitals of slightly different energies to form equivalent hybrid orbitals with identical shapes and energies. Types: sp (linear, 180°, BeCl2, ethyne), sp2 (trigonal planar, 120°, BF3, ethene), sp3 (tetrahedral, 109.5°, CH4, NH3, H2O). VSEPR theory predicts molecular geometry based on electron pair repulsion (lp-lp > lp-bp > bp-bp).',
          summaryTa: 'இனக்கலப்பு (Hybridisation): ஏறத்தாழ சம ஆற்றலுடைய அணு ஆர்பிட்டால்கள் தங்களுக்குள் கலந்து சம எண்ணிக்கையிலான, சம ஆற்றலும் வடிவமும் கொண்ட புதிய கலப்பின ஆர்பிட்டால்களை உருவாக்குவது ஆகும். வகைகள்:\n1. sp (நேர்க்கோடு, 180°)\n2. sp² (சமதள முக்கோணம், 120°)\n3. sp³ (நான்முகி, 109.5°).',
          formulas: '• sp: 50% s, 50% p (Linear 180°)\n• sp²: 33.3% s, 66.7% p (Trigonal Planar 120°)\n• sp³: 25% s, 75% p (Tetrahedral 109° 28\')\n• Bond Order = ½ (Nb - Na)',
          analogy: 'Mixing red and white paint gives uniform pink paint: Hybridisation mixes different s and p orbitals to create identical hybrid directional bonds!',
          keyPoints: [
            'VSEPR Repulsion Order: Lone pair - Lone pair > Lone pair - Bond pair > Bond pair - Bond pair.',
            'Water (H2O) has sp³ hybridisation but bent/V-shape (104.5°) due to 2 lone pairs.'
          ],
          examTips: 'Explain sp³ hybridisation in Methane (CH4) with orbital overlap diagrams (5-mark question).'
        }
      ]
    },

    // =========================================================================
    // 12TH STANDARD (HIGHER SECONDARY - HSC 2 / BOARD EXAM)
    // =========================================================================
    '12th': {
      'Physics': [
        {
          id: 'tn12-phy-u1',
          unit: 'Unit 1',
          title: 'Electrostatics: Coulomb’s & Gauss’s Law',
          tamilTitle: 'நிலைமின்னியல்: கூலும் விதி & காஸ் விதி (Gauss’s Law)',
          keywords: ['coulomb law', 'gauss law', 'electrostatics', 'capacitors', 'electric flux', 'நிலைமின்னியல்', 'காஸ் விதி'],
          summaryEn: "Coulomb's Law states electrostatic force between two charges is F = (1/4πε0)(q1·q2/r²). Electric flux is the number of field lines passing through a surface. Gauss's Law states that total electric flux through any closed surface equals net charge enclosed divided by ε0: ∮E·dA = q_enclosed / ε0.",
          summaryTa: 'கூலும் விதி: இரு மின்னூட்டங்களுக்கு இடைப்பட்ட விசை F = (1/4πε₀) · (q₁q₂ / r²). காஸ் விதி: எந்தவொரு மூடிய பரப்பின் வழியாகச் செல்லும் மொத்த மின்பாயமானது அப்பரப்பினால் சூழப்பட்ட நிகர மின்னூட்டத்தின் 1/ε₀ மடங்குக்குச் சமம் (∮E·dA = q / ε₀).',
          formulas: '• Coulomb’s Law: F = (1 / 4πε0) · (q1 q2 / r²), where 1/4πε0 = 9 × 10⁹ N·m²/C²\n• Gauss’s Law: ΦE = ∮ E · dA = q_in / ε0\n• Capacitor: C = ε0 A / d | Energy stored U = ½ CV² = ½ Q²/C',
          analogy: 'Imagine a bright light bulb inside a sphere: The total light rays spreading outward through the spherical surface depends only on the bulb wattage, just as electric flux depends solely on enclosed charge.',
          keyPoints: [
            'Electric field of an infinitely long charged wire: E = λ / (2πε0 r).',
            'Van de Graaff generator produces high potential difference of several million volts using electrostatic induction and corona discharge.'
          ],
          examTips: 'State Gauss’s law and derive the electric field due to an infinitely long straight charged wire (5-mark question).'
        },
        {
          id: 'tn12-phy-u2',
          unit: 'Unit 2',
          title: 'Current Electricity: Kirchhoff’s Rules & Wheatstone Bridge',
          tamilTitle: 'மின்னோட்டவியல்: கிர்க்காஃப் விதிகள் & வீட்ஸ்டோன் சமனச்சுற்று',
          keywords: ['kirchhoff', 'wheatstone bridge', 'current electricity', 'potentiometer', 'கிர்க்காஃப்', 'வீட்ஸ்டோன்'],
          summaryEn: "Kirchhoff's First Rule (Current Law - KCL): Algebraic sum of currents meeting at any junction is zero (conservation of charge). Second Rule (Voltage Law - KVL): Algebraic sum of product of current and resistance equals total emf in any closed loop (conservation of energy). Wheatstone Bridge balance condition is P/Q = R/S.",
          summaryTa: 'கிர்க்காஃபின் முதல் விதி (மின்னோட்ட விதி): சந்திப்பில் சந்திக்கும் மின்னோட்டங்களின் குறியியல் கூட்டுத்தொகை பூஜ்ஜியம் (மின்னூட்ட அழிவின்மை). இரண்டாம் விதி (மின்னழுத்த விதி): மூடிய சுற்றில் மின்னழுத்த வேறுபாடுகளின் கூட்டுத்தொகை பூஜ்ஜியம் (ஆற்றல் அழிவின்மை). வீட்ஸ்டோன் சமனச்சுற்று சமநிலை நிபந்தனை: P/Q = R/S.',
          formulas: '• Kirchhoff’s Current Law: ∑ I = 0 (at any junction)\n• Kirchhoff’s Voltage Law: ∑ IR = ∑ E (around any closed loop)\n• Wheatstone’s Bridge Balance: P / Q = R / S',
          analogy: 'Water pipes joining at a crossway junction: Total water entering the junction must exactly equal total water flowing out. Not a single drop is lost!',
          keyPoints: [
            'Metre bridge works on Wheatstone bridge principle to find unknown resistance X = R (l1 / l2).',
            'Potentiometer measures potential difference without drawing any current, acting as an ideal voltmeter.'
          ],
          examTips: 'State Kirchhoff’s rules and derive the Wheatstone bridge balance condition P/Q = R/S.'
        },
        {
          id: 'tn12-phy-u3',
          unit: 'Unit 4',
          title: 'Electromagnetic Induction & Transformers',
          tamilTitle: 'மின்காந்தத் தூண்டல் & மின்மாற்றி (Transformer)',
          keywords: ['electromagnetic induction', 'faraday', 'lenz', 'transformer', 'ac generator', 'மின்மாற்றி', 'மின்காந்தத் தூண்டல்'],
          summaryEn: "Faraday's Law states induced emf is directly proportional to rate of change of magnetic flux (e = -dΦB/dt). Lenz's Law indicates induced current opposes the flux change producing it. Transformers work on mutual induction to step up or step down AC voltage: Vs/Vp = Ns/Np = Ip/Is.",
          summaryTa: 'பாரடே விதி: காந்தப்பாயம் மாறும்போதெல்லாம் தூண்டப்பட்ட மின்னியக்கு விசை உருவாகிறது (e = -dΦ/dt). லென்ஸ் விதி: தூண்டப்பட்ட மின்னோட்டம் அது உருவாகக் காரணமான காந்தப்பாய மாற்றத்தை எதிர்க்கும். மின்மாற்றி (Transformer) பரிமாற்று மின்தூண்டல் தத்துவத்தில் இயங்கி மாறுதிசை மின்னழுத்தத்தை உயர்த்தவோ (Step-up) குறைக்கவோ (Step-down) செய்கிறது.',
          formulas: '• Faraday-Lenz: e = -dΦB / dt\n• Transformer Equation: Vs / Vp = Ns / Np = k (Transformation ratio)\n• For 100% efficient transformer: Power in = Power out => Vp Ip = Vs Is',
          analogy: 'A bicycle gear system changes pedalling speed to wheel speed without generating extra power; a transformer changes AC voltage to current inversely without creating extra energy.',
          keyPoints: [
            'Step-up transformer: Ns > Np, so Vs > Vp (voltage increases, current decreases).',
            'Transformer energy losses: Copper loss (I²R), Iron/Hysteresis loss, Eddy current loss (minimized using laminated core).'
          ],
          examTips: 'Explain the construction and working of a transformer with efficiency and energy losses.'
        },
        {
          id: 'tn12-phy-u4',
          unit: 'Unit 7 & 8',
          title: 'Wave Optics & Photoelectric Effect',
          tamilTitle: 'அலை ஒளியியல் & ஒளிமின் விளைவு (Photoelectric Effect)',
          keywords: ['wave optics', 'photoelectric', 'young double slit', 'fringe width', 'einstein', 'ஒளிமின் விளைவு'],
          summaryEn: "Wave optics explains interference and diffraction. Young’s Double Slit Experiment measures fringe width β = λD/d. Photoelectric effect (Einstein 1905) demonstrates light’s particle nature: photons of frequency ν strike metal, ejecting electrons if hν > work function (Φ0). Maximum kinetic energy KEmax = hν - hν0.",
          summaryTa: 'யங் இரட்டைப் பிளவு ஆய்வில் பட்டை அகலம் β = λD/d. ஐன்ஸ்டீனின் ஒளிமின் விளைவு (Photoelectric effect): ஒளியானது ஃபோட்டான்கள் எனப்படும் ஆற்றல் பொட்டலங்களாக வருகிறது. உமிழப்படும் எலக்ட்ரானின் பெரும இயக்க ஆற்றல் KE_max = hν - hν₀ (இங்கு hν₀ = வெளியேற்று ஆற்றல்).',
          formulas: '• Fringe Width: β = (λ × D) / d\n• Einstein’s Photoelectric Equation: hν = Φ0 + ½ m v²max = hν0 + eV0\n• Stopping Potential: eV0 = ½ m v²max',
          analogy: 'A coin-operated vending machine: If a snack costs ₹10 (work function), inserting a ₹15 coin (photon energy) releases the snack with ₹5 remaining change (kinetic energy of electron).',
          keyPoints: [
            'Photoelectric emission is instantaneous (time lag < 10⁻⁹ s).',
            'Number of emitted photoelectrons depends on light intensity; their kinetic energy depends strictly on light frequency.'
          ],
          examTips: 'State laws of photoelectric emission and explain Einstein’s photoelectric equation (hν = Φ0 + KEmax).'
        },
        {
          id: 'tn12-phy-u5',
          unit: 'Unit 9',
          title: 'Semiconductor Electronics & Logic Gates',
          tamilTitle: 'குறைக்கடத்தி எலக்ட்ரானியல் & தருக்க வாயில்கள் (Logic Gates)',
          keywords: ['semiconductor', 'diode', 'rectifier', 'logic gates', 'p-n junction', 'குறைக்கடத்தி', 'தருக்க வாயில்'],
          summaryEn: 'Semiconductors have electrical conductivity between conductors and insulators (Si, Ge). Doping creates p-type (trivalent, holes) and n-type (pentavalent, electrons). A p-n junction diode conducts in forward bias and blocks in reverse bias, acting as a rectifier (Half-wave & Full-wave). Logic gates (AND, OR, NOT, NAND, NOR) form the foundation of digital computation.',
          summaryTa: 'சிலிக்கான் (Si) மற்றும் ஜெர்மேனியம் (Ge) குறைக்கடத்திகள் ஆகும். மாசூட்டல் (Doping) மூலம் p-வகை மற்றும் n-வகை குறைக்கடத்திகள் உருவாக்கப்படுகின்றன. p-n சந்தி டையோடு மாறுதிசை மின்னோட்டத்தை நேர்திசை மின்னோட்டமாக மாற்றும் திருத்தியாக (Rectifier) செயல்படுகிறது. தருக்க வாயில்கள் (AND, OR, NOT, NAND, NOR) டிஜிட்டல் சுற்றுகளின் அடித்தளமாகும்.',
          formulas: '• Half-wave rectifier efficiency η_max = 40.6%\n• Full-wave rectifier efficiency η_max = 81.2%\n• Logic Gates: AND (Y = A·B), OR (Y = A+B), NOT (Y = Ā), NAND (Y = A·B), NOR (Y = A+B)',
          analogy: 'A p-n junction diode is like a bicycle tyre air valve: Air easily pumps in one direction (forward bias), but the valve firmly blocks air from leaking backward (reverse bias).',
          keyPoints: [
            'NAND and NOR gates are universal gates because any boolean logic circuit can be built using only them.',
            'Zener diode operates in reverse breakdown region as a voltage regulator.'
          ],
          examTips: 'Explain Full-Wave Rectifier with circuit diagram, working, and input/output waveforms.'
        }
      ],
      'Chemistry': [
        {
          id: 'tn12-chem-u1',
          unit: 'Unit 6',
          title: 'Solid State & Crystal Lattice Defects',
          tamilTitle: 'திண்ம நிலை & படிகக் குறைபாடுகள் (Schottky & Frenkel)',
          keywords: ['solid state', 'schottky defect', 'frenkel defect', 'unit cell', 'packing efficiency', 'படிகக் குறைபாடு'],
          summaryEn: 'Crystalline solids possess long-range order. Point defects include Stoichiometric defects: 1) Schottky Defect (equal numbers of cations and anions missing, decreases density, e.g., NaCl, KCl), 2) Frenkel Defect (an ion dislocates into an interstitial site, density unchanged, e.g., AgBr, ZnS). Packing efficiency: sc (52.4%), bcc (68%), fcc (74%).',
          summaryTa: 'படிக திண்மங்களின் புள்ளி குறைபாடுகள்:\n1. ஷாட்கி குறைபாடு (Schottky Defect): சம எண்ணிக்கையிலான நேர் மற்றும் எதிர் அயனிகள் படிகத்திலிருந்து விடுபடுகின்றன; அடர்த்தி குறைகிறது (எ.கா: NaCl).\n2. பிரெங்கல் குறைபாடு (Frenkel Defect): அயனி தன் இடத்தை விட்டு இடைச்செருகல் நிலைக்கு நகர்கிறது; அடர்த்தி மாறாது (எ.கா: AgBr).',
          formulas: '• Density of unit cell: ρ = (z × M) / (a³ × NA)\n• Packing Efficiency: sc = 52.4% | bcc = 68% | fcc/ccp = 74%\n• AgBr exhibits BOTH Schottky and Frenkel defects.',
          analogy: 'Schottky defect is like an absent student leaving school entirely (lowering class headcount density); Frenkel defect is a student simply moving from their assigned desk to an empty aisle bench.',
          keyPoints: [
            'Coordination numbers: sc = 6, bcc = 8, fcc = 12.',
            'Bragg’s Law for X-ray diffraction: 2d sin θ = nλ.'
          ],
          examTips: 'Tabulate differences between Schottky Defect and Frenkel Defect (very frequent 3-mark question).'
        },
        {
          id: 'tn12-chem-u2',
          unit: 'Unit 7',
          title: 'Chemical Kinetics & First Order Rate Law',
          tamilTitle: 'வேதி வினைவேகவியல் & முதல் வகை வினை (First Order Kinetics)',
          keywords: ['chemical kinetics', 'first order', 'half life', 'arrhenius', 'activation energy', 'வினைவேகவியல்'],
          summaryEn: "Chemical kinetics studies reaction rates and mechanisms. For a First Order reaction (A -> Products), rate is proportional to reactant concentration: rate = k[A]. Integrated rate equation: k = (2.303 / t) log([A]0 / [A]). The half-life is independent of initial concentration: t½ = 0.693 / k.",
          summaryTa: 'முதல் வகை வினை (First Order Reaction): வினையின் வேகம் வினைபடு பொருளின் முதல் அடுக்கு செறிவைச் சார்ந்தது. தொகைப்படுத்தப்பட்ட சமன்பாடு: k = (2.303 / t) log([A]₀ / [A]). அரைவாழ்வுக்காலம் தொடக்கச் செறிவைச் சார்ந்திருக்காது: t½ = 0.693 / k.',
          formulas: '• First-Order Rate Constant: k = (2.303 / t) · log([A]0 / [A])\n• Half-life: t½ = 0.693 / k\n• Arrhenius Equation: k = A · e^(-Ea / RT)\n• log(k2/k1) = (Ea / 2.303 R) · [(T2 - T1) / (T1 T2)]',
          analogy: 'Radioactive medicine in the human body: If a medicine has a half-life of 2 hours, 100 mg becomes 50 mg in 2 hours, 25 mg in 4 hours, and 12.5 mg in 6 hours.',
          keyPoints: [
            'Unit of rate constant k for first order: s⁻¹ or min⁻¹.',
            'Zero order reaction half-life is directly proportional to initial concentration: t½ = [A]0 / (2k).'
          ],
          examTips: 'Derive the integrated rate equation for a first-order reaction and its half-life.'
        }
      ],
      'Mathematics': [
        {
          id: 'tn12-math-u1',
          unit: 'Unit 1',
          title: 'Matrices: Inverses, Cramer’s Rule & Rank',
          tamilTitle: 'அணிகள் & கிராமரின் விதி (Cramer’s Rule)',
          keywords: ['matrices', 'cramer rule', 'rank of matrix', 'adjoint', 'inverse', 'அணிகள்', 'கிராமர் விதி'],
          summaryEn: 'The inverse of a square matrix A exists if |A| ≠ 0, given by A⁻¹ = (1 / |A|) adj(A). System of linear equations can be solved using Cramer’s Rule: x = Δx / Δ, y = Δy / Δ, z = Δz / Δ (provided Δ ≠ 0). Matrix inversion method solves AX = B via X = A⁻¹ B.',
          summaryTa: 'ஒரு சதுர அணியின் நேர்மாறு A⁻¹ = (1 / |A|) adj(A) (|A| ≠ 0). நேரியல் சமன்பாட்டுத் தொகுப்பைத் தீர்க்க கிராமரின் விதி (Cramer’s Rule) பயன்படுகிறது: x = Δx / Δ, y = Δy / Δ, z = Δz / Δ (இங்கு Δ ≠ 0).',
          formulas: '• Inverse: A⁻¹ = (1 / |A|) adj(A)\n• Cramer’s Rule: x = Δ1 / Δ, y = Δ2 / Δ, z = Δ3 / Δ\n• Properties: (AB)⁻¹ = B⁻¹ A⁻¹ | (Aᵀ)⁻¹ = (A⁻¹)ᵀ\n• |adj(A)| = |A|^(n - 1)',
          analogy: 'Cramer’s rule is like a precision balance: It takes determinants of coefficient columns to directly isolate each variable value in one clean calculation.',
          keyPoints: [
            'If Δ = 0 and at least one Δx, Δy, Δz ≠ 0, the system is inconsistent and has no solution.',
            'If Δ = 0 and all Δx = Δy = Δz = 0, the system may have infinitely many solutions.'
          ],
          examTips: 'Solve 3-variable system of linear equations by Cramer’s Rule or Matrix Inversion Method (5-mark guaranteed question).'
        },
        {
          id: 'tn12-math-u2',
          unit: 'Unit 2',
          title: 'Complex Numbers & de Moivre’s Theorem',
          tamilTitle: 'கலப்பு எண்கள் & டி மாய்வரின் தேற்றம் (de Moivre’s Theorem)',
          keywords: ['complex numbers', 'de moivre', 'argand', 'cube roots of unity', 'கலப்பு எண்கள்'],
          summaryEn: 'A complex number z = x + iy has real part x and imaginary part y (where i² = -1). Polar form: z = r(cos θ + i sin θ), where modulus r = √(x² + y²) and argument θ = tan⁻¹(y/x). de Moivre’s Theorem states that (cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ) for any integer or rational n.',
          summaryTa: 'கலப்பு எண் z = x + iy. துருவ வடிவம்: z = r(cos θ + i sin θ). டி மாய்வரின் தேற்றம் (de Moivre’s Theorem): (cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ). ஒன்றின் முப்படி மூலங்கள் 1, ω, ω² ஆகும்; இவற்றின் கூடுதல் 1 + ω + ω² = 0 மற்றும் பெருக்கற்பலன் ω³ = 1.',
          formulas: '• de Moivre’s Theorem: (cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ)\n• Modulus: |z| = √(x² + y²)\n• Cube roots of unity: 1, ω, ω² => 1 + ω + ω² = 0, ω³ = 1\n• Euler’s formula: e^(iθ) = cos θ + i sin θ',
          analogy: 'Complex multiplication in the Argand plane is a two-in-one move: It scales the distance from the origin by r and rotates the position counter-clockwise by angle θ.',
          keyPoints: [
            '|z1 + z2| ≤ |z1| + |z2| (Triangle Inequality).',
            'Roots of unity lie on the unit circle spaced at equal angles.'
          ],
          examTips: 'Simplify expressions using de Moivre’s theorem and solve cube roots of unity problems.'
        },
        {
          id: 'tn12-math-u3',
          unit: 'Unit 7 & 8',
          title: 'Differential Calculus & Maxima-Minima',
          tamilTitle: 'வகை நுண்கணிதம் & பெரும, சிறும மதிப்புகள் (Maxima and Minima)',
          keywords: ['calculus', 'derivatives', 'maxima', 'minima', 'rolle theorem', 'வகை நுண்கணிதம்'],
          summaryEn: 'Derivatives compute instantaneous rates of change and slopes of curves: dy/dx = tan θ. Critical points occur where f\'(x) = 0. Second derivative test: If f\'(c) = 0 and f\'\'(c) < 0, f(x) has a local MAXIMUM at c; if f\'\'(c) > 0, f(x) has a local MINIMUM at c.',
          summaryTa: 'வகை நுண்கணிதத்தில் dy/dx என்பது ஒரு வளைவரையின் சாய்வைக் (Slope) குறிக்கும். பெரும, சிறும மதிப்புகளைக் காணும் முறை:\n1. f\'(x) = 0 என வைத்து x = c புள்ளிகளைக் கண்டறிக.\n2. f\'\'(c) < 0 எனில் c இல் பெருமம் (Maximum) கிடைக்கும்.\n3. f\'\'(c) > 0 எனில் c இல் சிறுமம் (Minimum) கிடைக்கும்.',
          formulas: '• First derivative test: f\'(x) = 0 (critical points)\n• Maxima: f\'(c) = 0 and f\'\'(c) < 0\n• Minima: f\'(c) = 0 and f\'\'(c) > 0\n• Rolle’s Theorem: If f(a)=f(b), there exists c ∈ (a, b) where f\'(c) = 0.',
          analogy: 'Riding a roller coaster: At the highest peak (maximum) and lowest dip (minimum), your vertical velocity momentarily stops and becomes zero (f\'(x) = 0).',
          keyPoints: [
            'Equation of tangent at (x1, y1): y - y1 = m(x - x1), where m = [dy/dx].',
            'Equation of normal at (x1, y1): y - y1 = (-1/m)(x - x1).'
          ],
          examTips: '5-mark application problems: Finding dimensions of rectangle/cylinder to maximize volume or minimize surface area.'
        },
        {
          id: 'tn12-math-u4',
          unit: 'Unit 9 & 10',
          title: 'Integration & First Order Differential Equations',
          tamilTitle: 'தொகை நுண்கணிதம் & நேரியல் வகைக்கெழுச் சமன்பாடுகள்',
          keywords: ['integration', 'differential equations', 'integrating factor', 'தொகை நுண்கணிதம்', 'வகைக்கெழுச் சமன்பாடு'],
          summaryEn: 'Integration is the reverse process of differentiation and computes areas under curves. First Order Linear Differential Equation has the standard form dy/dx + P·y = Q (where P, Q are functions of x). The Integrating Factor is IF = e^(∫P dx), and the general solution is y · (IF) = ∫ Q · (IF) dx + c.',
          summaryTa: 'முதல் வரிசை நேரியல் வகைக்கெழுச் சமன்பாட்டின் பொது வடிவம் dy/dx + Py = Q ஆகும். இதன் தொகையீட்டுக் காரணி (Integrating Factor): IF = e^(∫P dx). இதன் பொதுத் தீர்வு:\ny · (IF) = ∫ Q · (IF) dx + c.',
          formulas: '• Standard Form: dy/dx + P y = Q\n• Integrating Factor: IF = e^(∫ P dx)\n• Solution: y · (IF) = ∫ Q · (IF) dx + c\n• Definite Integral Area: Area = ∫_a^b y dx',
          analogy: 'Accumulating water in a rainwater tank: Integration adds up every tiny drop flowing into the tank over time to calculate the total water volume collected.',
          keyPoints: [
            'Definite integral property: ∫_0^a f(x) dx = ∫_0^a f(a - x) dx is indispensable for solving tricky integrals.',
            'Order is the highest derivative; Degree is the power of the highest derivative.'
          ],
          examTips: 'Solve linear differential equation dy/dx + Py = Q using integrating factor e^(∫P dx).'
        }
      ]
    }
  };

  // =========================================================================
  // Intelligent Tamil Nadu Syllabus Engine
  // =========================================================================
  const TNSyllabusEngine = {
    // Return all topics matching a student's query across 6th - 12th
    findTopic(queryText, preferredGrade = '') {
      if (!queryText) return null;
      const q = queryText.toLowerCase().trim();

      // Check if query explicitly asks for a grade or student has a preferred grade
      let explicitGrade = '';
      for (const c of ['12th', '11th', '10th', '9th', '8th', '7th', '6th']) {
        const num = c.replace('th', '');
        const re = new RegExp(`\\b(${c}|${num}th|class\\s*${num}|std\\s*${num}|standard\\s*${num})\\b`, 'i');
        if (re.test(q)) {
          explicitGrade = c;
          break;
        }
      }

      // Stopwords to ignore in word-overlap scoring
      const stopwords = new Set([
        'what', 'is', 'the', 'a', 'an', 'and', 'or', 'in', 'of', 'for', 'to', 'with', 'about',
        'tell', 'me', 'explain', 'give', 'detail', 'details', 'difference', 'between', 'vs',
        'rule', 'formula', 'notes', 'study', 'question', 'questions', 'solved', 'problems',
        'please', 'can', 'you', 'how', 'does', 'work', 'standard', 'class', 'std', 'board'
      ]);

      // Normalize query words
      const cleanQ = q.replace(/[?,.!:;'"]/g, ' ');
      const words = cleanQ.split(/\s+/).filter(w => w.length > 2 && !stopwords.has(w));

      let bestMatch = null;
      let highestScore = 0;

      // Scan all classes and subjects
      const classes = ['10th', '12th', '11th', '9th', '8th', '7th', '6th'];

      for (const cls of classes) {
        const subjects = TNSyllabusData[cls] || {};

        for (const [subjName, topics] of Object.entries(subjects)) {
          for (const topic of topics) {
            let score = 0;

            // 1. Exact Title & Tamil Title Matches
            if (q.includes(topic.title.toLowerCase()) || q.includes(topic.tamilTitle.toLowerCase())) {
              score += 70;
            }

            // 2. Keyword hits (multi-word vs single word)
            for (const kw of topic.keywords) {
              const kwLower = kw.toLowerCase();
              if (q.includes(kwLower)) {
                // Multi-word phrase hit (e.g., "escape velocity", "gauss law", "archimedes")
                if (kwLower.includes(' ')) {
                  score += 65;
                } else {
                  score += 35;
                }
              }
            }

            // 3. Meaningful word overlap in title and keywords
            for (const word of words) {
              if (topic.title.toLowerCase().includes(word)) {
                score += 25;
              }
              if (topic.keywords.some(k => k.toLowerCase() === word)) {
                score += 20;
              }
              if (topic.summaryEn.toLowerCase().includes(word)) {
                score += 5;
              }
            }

            // 4. Explicit Grade Priority Bonus
            if (explicitGrade) {
              if (cls === explicitGrade) {
                score += 90;
              } else {
                score -= 30; // Deprioritize other grades when student specified a grade
              }
            } else if (preferredGrade && preferredGrade.includes(cls)) {
              score += 25;
            }

            // 5. Subject Name Bonus
            if (q.includes(subjName.toLowerCase())) {
              score += 20;
            }

            if (score > highestScore && score >= 35) {
              highestScore = score;
              bestMatch = {
                ...topic,
                classStandard: cls,
                subject: subjName,
                matchScore: score
              };
            }
          }
        }
      }

      return bestMatch;
    },

    // Format a comprehensive, student-friendly answer for the matched syllabus topic
    formatAnswer(topic, queryText, isTamil, personalization = {}) {
      const grade = topic.classStandard || '10th';
      const subj = topic.subject || 'Science';
      const style = personalization?.learningStyle || 'Bilingual Tanglish (தமிழ் விளக்கம்)';

      const wantsTamil = isTamil || /tamil|தமிழ்|விளக்கம்|tanglish/i.test(queryText) || (style.includes('Tamil') && !/in english|only english/i.test(queryText));

      if (wantsTamil) {
        return `### 📘 தமிழ்நாடு பாடத்திட்டம் (${grade} Standard) - ${subj}
#### 🎯 பாடம்: **${topic.title}** (${topic.tamilTitle})
*பிரிவு: ${topic.unit}*

---

#### 💡 எளிய விளக்கம் (Simple Concept):
${topic.summaryTa}

#### 📖 ஆங்கில விளக்கம் (English Definition):
> ${topic.summaryEn}

${topic.formulas ? `#### 📐 முக்கிய சூத்திரங்கள் & விதிகள் (Formulas & Laws):\n\`\`\`text\n${topic.formulas}\n\`\`\`` : ''}

#### 🏏 நிஜ வாழ்க்கை உதாரணம் (Everyday Life Analogy):
${topic.analogy}

#### 🌟 தேர்வில் அதிக மதிப்பெண் பெற (Board Exam Key Points):
${topic.keyPoints.map(pt => `- ${pt}`).join('\n')}

💡 **தேர்வு டிப்ஸ்:** ${topic.examTips}

---
*உங்களுக்கு இதில் மேலும் சந்தேகம் உள்ளதா? அல்லது கூடுதல் வினாக்கள் (Practice Questions) வேண்டுமா? கேளுங்கள், சொல்லித் தருகிறேன்!* 👋`;
      }

      // Default English Response
      return `### 📘 Tamil Nadu State Board (${grade} Standard) - ${subj}
#### 🎯 Topic: **${topic.title}**
*Chapter: ${topic.unit} · ${topic.tamilTitle}*

---

#### 💡 Core Concept & Definition:
${topic.summaryEn}

#### 🇮🇳 தமிழ் விளக்கம் (Tamil Summary):
> ${topic.summaryTa}

${topic.formulas ? `#### 📐 Key Formulas & Laws:\n\`\`\`text\n${topic.formulas}\n\`\`\`` : ''}

#### 🏏 Real-Life Relatable Analogy:
${topic.analogy}

#### 🌟 High-Yield Board Exam Points:
${topic.keyPoints.map(pt => `- ${pt}`).join('\n')}

💡 **Exam Tip & Common Pitfalls:** ${topic.examTips}

---
*Would you like me to quiz you on this topic, provide 3 practice questions, or explain any specific formula further? Just ask!* 👋`;
    },

    // Alias for formatAnswer backward compatibility
    formatTopicExplanation(topic, isTamil = true) {
      return this.formatAnswer(topic, '', isTamil);
    },

    // Get all units for a given standard and subject for the UI Syllabus Explorer modal
    getUnitsForClassAndSubject(classStandard = '10th', subject = 'Science') {
      const classKey = classStandard.toLowerCase().replace(/standard|class|\(|\)|sslc|hsc|\s+/gi, '').trim() || '10th';
      const clsData = TNSyllabusData[classKey] || TNSyllabusData['10th'];
      
      // Match subject
      let matchedSubjectKey = Object.keys(clsData).find(s => s.toLowerCase() === subject.toLowerCase());
      if (!matchedSubjectKey) {
        matchedSubjectKey = Object.keys(clsData)[0] || 'Science';
      }

      return clsData[matchedSubjectKey] || [];
    },

    // Get all supported classes list
    getSupportedClasses() {
      return [
        { id: '6th', name: '6th Standard (Middle School)' },
        { id: '7th', name: '7th Standard' },
        { id: '8th', name: '8th Standard' },
        { id: '9th', name: '9th Standard' },
        { id: '10th', name: '10th Standard (SSLC Board)' },
        { id: '11th', name: '11th Standard (HSC 1)' },
        { id: '12th', name: '12th Standard (HSC 2 Board)' }
      ];
    },

    // Get subjects for a class
    getSubjectsForClass(classStandard = '10th') {
      const classKey = classStandard.toLowerCase().replace(/standard|class|\(|\)|sslc|hsc|\s+/gi, '').trim() || '10th';
      const clsData = TNSyllabusData[classKey] || TNSyllabusData['10th'];
      return Object.keys(clsData);
    }
  };

  // Attach to window
  window.TNSyllabusData = TNSyllabusData;
  window.TNSyllabusEngine = TNSyllabusEngine;

})(typeof window !== 'undefined' ? window : global);
