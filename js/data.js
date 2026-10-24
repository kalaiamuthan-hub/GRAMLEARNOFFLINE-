/**
 * GramLearn AI - Tamil Nadu Samacheer Kalvi Question Bank (Classes 6–10)
 * Verified Maths & Science questions organized by Class, Subject, Chapter, Topic & Difficulty.
 * 100% Offline-capable, zero external dependencies.
 */

(function (window) {
  'use strict';

  function normalizeClass(c) {
    if (!c) return '';
    const str = String(c).toLowerCase().trim();
    if (str.includes('6')) return 'Class 6';
    if (str.includes('7')) return 'Class 7';
    if (str.includes('8')) return 'Class 8';
    if (str.includes('9')) return 'Class 9';
    if (str.includes('10')) return 'Class 10';
    return c;
  }

  const TNQuizQuestionBank = [
  {
    "id": "tn6-sci-ch1-q1",
    "classLevel": "Class 6",
    "class": "6th",
    "subject": "Science",
    "chapter": "Measurements & SI Units",
    "topic": "SI Units of Length",
    "difficulty": "Easy",
    "question": "What is the standard International System of Units (SI unit) for measuring length?",
    "options": [
      "Centimetre (cm)",
      "Metre (m)",
      "Kilometre (km)",
      "Millimetre (mm)"
    ],
    "correct": 1,
    "explanation": "The SI unit of length is the Metre (m). Centimetres and millimetres are sub-multiples, while kilometres are multiples of the metre.",
    "conceptKey": "SI_UNIT_LENGTH",
    "correctAnswer": "Metre (m)"
  },
  {
    "id": "tn6-sci-ch1-q2",
    "classLevel": "Class 6",
    "class": "6th",
    "subject": "Science",
    "chapter": "Measurements & SI Units",
    "topic": "Mass and Weight",
    "difficulty": "Medium",
    "question": "Which instrument is commonly used to measure the mass of an object in a school laboratory?",
    "options": [
      "Thermometer",
      "Beam Balance",
      "Measuring Cylinder",
      "Stopwatch"
    ],
    "correct": 1,
    "explanation": "A Beam Balance measures mass by comparing an unknown mass with known standard reference masses. Thermometers measure temperature, and measuring cylinders measure volume.",
    "conceptKey": "MEASUREMENT_INSTRUMENTS",
    "correctAnswer": "Beam Balance"
  },
  {
    "id": "tn6-sci-ch1-q3",
    "classLevel": "Class 6",
    "class": "6th",
    "subject": "Science",
    "chapter": "Measurements & SI Units",
    "topic": "Measurement Errors",
    "difficulty": "Hard",
    "question": "What type of error occurs when the eye is not positioned vertically above the measurement mark on a ruler?",
    "options": [
      "Zero Error",
      "Parallax Error",
      "Systematic Error",
      "Instrumental Error"
    ],
    "correct": 1,
    "explanation": "Parallax error is the apparent shift in the position of an object viewed along different lines of sight. To avoid it, your eye must be directly vertical to the reading mark.",
    "conceptKey": "PARALLAX_ERROR",
    "correctAnswer": "Parallax Error"
  },
  {
    "id": "tn6-sci-ch1-q4",
    "classLevel": "Class 6",
    "class": "6th",
    "subject": "Science",
    "chapter": "Measurements & SI Units",
    "topic": "SI Unit of Time",
    "difficulty": "Easy",
    "question": "What is the base SI unit of time in the metric system?",
    "options": [
      "Minute (min)",
      "Hour (h)",
      "Second (s)",
      "Day"
    ],
    "correct": 2,
    "explanation": "The base SI unit of time is the Second (s). One minute contains 60 seconds, and one hour contains 3,600 seconds.",
    "conceptKey": "SI_UNIT_TIME",
    "correctAnswer": "Second (s)"
  },
  {
    "id": "tn6-sci-ch1-q5",
    "classLevel": "Class 6",
    "class": "6th",
    "subject": "Science",
    "chapter": "Measurements & SI Units",
    "topic": "Conversion of Units",
    "difficulty": "Medium",
    "question": "How many metres are there in a distance of 3.5 kilometres?",
    "options": [
      "35 metres",
      "350 metres",
      "3,500 metres",
      "35,000 metres"
    ],
    "correct": 2,
    "explanation": "Since 1 kilometre (km) = 1,000 metres (m), 3.5 km = 3.5 × 1,000 = 3,500 metres.",
    "conceptKey": "UNIT_CONVERSION_METRIC",
    "correctAnswer": "3,500 metres"
  },
  {
    "id": "tn6-sci-ch2-q1",
    "classLevel": "Class 6",
    "class": "6th",
    "subject": "Science",
    "chapter": "Force and Motion",
    "topic": "Types of Forces",
    "difficulty": "Easy",
    "question": "Which of the following is an example of a non-contact force?",
    "options": [
      "Frictional force",
      "Muscular force",
      "Gravitational force",
      "Tension in a rope"
    ],
    "correct": 2,
    "explanation": "Gravitational force acts across space without direct physical contact. Friction, muscular force, and tension require direct physical contact between surfaces.",
    "conceptKey": "CONTACT_VS_NONCONTACT_FORCE",
    "correctAnswer": "Gravitational force"
  },
  {
    "id": "tn6-sci-ch2-q2",
    "classLevel": "Class 6",
    "class": "6th",
    "subject": "Science",
    "chapter": "Force and Motion",
    "topic": "Calculation of Speed",
    "difficulty": "Medium",
    "question": "A bus travels a distance of 120 km in 3 hours. What is its average speed?",
    "options": [
      "30 km/h",
      "40 km/h",
      "60 km/h",
      "360 km/h"
    ],
    "correct": 1,
    "explanation": "Speed = Distance / Time = 120 km / 3 h = 40 km/h.",
    "conceptKey": "SPEED_DISTANCE_TIME_FORMULA",
    "correctAnswer": "40 km/h"
  },
  {
    "id": "tn6-sci-ch2-q3",
    "classLevel": "Class 6",
    "class": "6th",
    "subject": "Science",
    "chapter": "Force and Motion",
    "topic": "Periodic Motion",
    "difficulty": "Hard",
    "question": "The back and forth movement of a simple pendulum is an example of which type of motion?",
    "options": [
      "Linear Motion",
      "Curvilinear Motion",
      "Oscillatory and Periodic Motion",
      "Random Motion"
    ],
    "correct": 2,
    "explanation": "The motion of a pendulum repeats at equal intervals of time around a central mean position, making it oscillatory and periodic.",
    "conceptKey": "PERIODIC_OSCILLATORY_MOTION",
    "correctAnswer": "Oscillatory and Periodic Motion"
  },
  {
    "id": "tn6-sci-ch2-q4",
    "classLevel": "Class 6",
    "class": "6th",
    "subject": "Science",
    "chapter": "Force and Motion",
    "topic": "SI Unit of Speed",
    "difficulty": "Easy",
    "question": "What is the standard SI unit of speed?",
    "options": [
      "km/h",
      "m/s",
      "cm/s",
      "miles/hour"
    ],
    "correct": 1,
    "explanation": "The SI unit of distance is metre (m) and time is second (s), so the SI unit of speed is metre per second (m/s).",
    "conceptKey": "SI_UNIT_SPEED",
    "correctAnswer": "m/s"
  },
  {
    "id": "tn6-sci-ch2-q5",
    "classLevel": "Class 6",
    "class": "6th",
    "subject": "Science",
    "chapter": "Force and Motion",
    "topic": "Rotational Motion",
    "difficulty": "Medium",
    "question": "Which of the following objects demonstrates rotational motion around a fixed axis?",
    "options": [
      "A falling apple",
      "A spinning top",
      "A car on a straight road",
      "A vibrating guitar string"
    ],
    "correct": 1,
    "explanation": "A spinning top rotates around its internal central axis, representing rotational motion.",
    "conceptKey": "ROTATIONAL_MOTION",
    "correctAnswer": "A spinning top"
  },
  {
    "id": "tn6-sci-ch3-q1",
    "classLevel": "Class 6",
    "class": "6th",
    "subject": "Science",
    "chapter": "The Living World of Plants",
    "topic": "Plant Root Systems",
    "difficulty": "Easy",
    "question": "Which plant possesses a fibrous root system?",
    "options": [
      "Mango Tree",
      "Bean Plant",
      "Grass",
      "Neem Tree"
    ],
    "correct": 2,
    "explanation": "Monocotyledonous plants like grass, paddy, and maize have fibrous root systems consisting of a cluster of slender roots arising from the base of the stem.",
    "conceptKey": "ROOT_SYSTEMS_TAP_FIBROUS",
    "correctAnswer": "Grass"
  },
  {
    "id": "tn6-sci-ch3-q2",
    "classLevel": "Class 6",
    "class": "6th",
    "subject": "Science",
    "chapter": "The Living World of Plants",
    "topic": "Photosynthesis & Leaf Anatomy",
    "difficulty": "Medium",
    "question": "What green pigment in plant leaves absorbs sunlight energy for photosynthesis?",
    "options": [
      "Anthocyanin",
      "Carotenoid",
      "Chlorophyll",
      "Haemoglobin"
    ],
    "correct": 2,
    "explanation": "Chlorophyll is the green pigment in chloroplasts that absorbs sunlight energy to convert carbon dioxide and water into glucose.",
    "conceptKey": "PHOTOSYNTHESIS_CHLOROPHYLL",
    "correctAnswer": "Chlorophyll"
  },
  {
    "id": "tn6-sci-ch3-q3",
    "classLevel": "Class 6",
    "class": "6th",
    "subject": "Science",
    "chapter": "The Living World of Plants",
    "topic": "Transpiration in Leaves",
    "difficulty": "Hard",
    "question": "Through which microscopic pores on leaves does the loss of excess water vapour (transpiration) occur?",
    "options": [
      "Stomata",
      "Lenticels",
      "Xylem vessels",
      "Chloroplasts"
    ],
    "correct": 0,
    "explanation": "Stomata are tiny microscopic pores on the lower epidermis of leaves bounded by guard cells that regulate gas exchange and transpiration.",
    "conceptKey": "STOMATA_TRANSPIRATION",
    "correctAnswer": "Stomata"
  },
  {
    "id": "tn6-sci-ch3-q4",
    "classLevel": "Class 6",
    "class": "6th",
    "subject": "Science",
    "chapter": "The Living World of Plants",
    "topic": "Parts of a Flower",
    "difficulty": "Easy",
    "question": "Which part of a flower attracts pollinators like bees with bright colours and scents?",
    "options": [
      "Sepals",
      "Petals",
      "Roots",
      "Stem"
    ],
    "correct": 1,
    "explanation": "Petals (the corolla) are brightly coloured and scented to attract insects and birds for pollination.",
    "conceptKey": "FLOWER_PETALS_POLLINATION",
    "correctAnswer": "Petals"
  },
  {
    "id": "tn6-sci-ch3-q5",
    "classLevel": "Class 6",
    "class": "6th",
    "subject": "Science",
    "chapter": "The Living World of Plants",
    "topic": "Aquatic Adaptations",
    "difficulty": "Medium",
    "question": "Why do lotus and water lily leaves float on the water surface?",
    "options": [
      "They are made of heavy wood",
      "Their petioles contain air spaces",
      "They have no roots",
      "They produce oil"
    ],
    "correct": 1,
    "explanation": "The stems and leaf stalks (petioles) of aquatic plants have large air chambers (aerenchyma) that provide buoyancy for floating.",
    "conceptKey": "AQUATIC_PLANT_ADAPTATION",
    "correctAnswer": "Their petioles contain air spaces"
  },
  {
    "id": "tn6-math-ch1-q1",
    "classLevel": "Class 6",
    "class": "6th",
    "subject": "Mathematics",
    "chapter": "Numbers & BODMAS Rule",
    "topic": "Order of Operations (BODMAS)",
    "difficulty": "Easy",
    "question": "Evaluate the expression using BODMAS: 20 + 10 ÷ 2",
    "options": [
      "15",
      "25",
      "30",
      "20"
    ],
    "correct": 1,
    "explanation": "By BODMAS, Division precedes Addition: 10 ÷ 2 = 5, then 20 + 5 = 25.",
    "conceptKey": "BODMAS_ORDER_OF_OPERATIONS",
    "correctAnswer": "25"
  },
  {
    "id": "tn6-math-ch1-q2",
    "classLevel": "Class 6",
    "class": "6th",
    "subject": "Mathematics",
    "chapter": "Numbers & BODMAS Rule",
    "topic": "Brackets & Multi-step BODMAS",
    "difficulty": "Medium",
    "question": "Simplify the expression: (100 - 40) ÷ 3 + 5",
    "options": [
      "20",
      "25",
      "15",
      "35"
    ],
    "correct": 1,
    "explanation": "First evaluate inside Brackets: 100 - 40 = 60. Then Division: 60 ÷ 3 = 20. Then Addition: 20 + 5 = 25.",
    "conceptKey": "BODMAS_BRACKETS_DIVISION",
    "correctAnswer": "25"
  },
  {
    "id": "tn6-math-ch1-q3",
    "classLevel": "Class 6",
    "class": "6th",
    "subject": "Mathematics",
    "chapter": "Numbers & BODMAS Rule",
    "topic": "Complex Nested Operations",
    "difficulty": "Hard",
    "question": "Solve: 50 - [20 + {30 - (15 + 5)}]",
    "options": [
      "20",
      "30",
      "15",
      "10"
    ],
    "correct": 0,
    "explanation": "Innermost round bracket: 15 + 5 = 20. Curly bracket: 30 - 20 = 10. Square bracket: 20 + 10 = 30. Finally: 50 - 30 = 20.",
    "conceptKey": "NESTED_BRACKETS_BODMAS",
    "correctAnswer": "20"
  },
  {
    "id": "tn6-math-ch1-q4",
    "classLevel": "Class 6",
    "class": "6th",
    "subject": "Mathematics",
    "chapter": "Numbers & BODMAS Rule",
    "topic": "Place Value in Indian System",
    "difficulty": "Easy",
    "question": "In the Indian number system, how many zeroes are in 1 Lakh?",
    "options": [
      "4 zeroes",
      "5 zeroes",
      "6 zeroes",
      "7 zeroes"
    ],
    "correct": 1,
    "explanation": "One Lakh is written as 1,00,000 which has exactly 5 zeroes.",
    "conceptKey": "INDIAN_PLACE_VALUE_SYSTEM",
    "correctAnswer": "5 zeroes"
  },
  {
    "id": "tn6-math-ch1-q5",
    "classLevel": "Class 6",
    "class": "6th",
    "subject": "Mathematics",
    "chapter": "Numbers & BODMAS Rule",
    "topic": "Estimation & Rounding Off",
    "difficulty": "Medium",
    "question": "What is 8,467 rounded off to the nearest hundred?",
    "options": [
      "8,400",
      "8,460",
      "8,500",
      "9,000"
    ],
    "correct": 2,
    "explanation": "The tens digit is 6 (which is ≥ 5), so the hundreds digit increases from 4 to 5, giving 8,500.",
    "conceptKey": "ROUNDING_OFF_NUMBERS",
    "correctAnswer": "8,500"
  },
  {
    "id": "tn6-math-ch2-q1",
    "classLevel": "Class 6",
    "class": "6th",
    "subject": "Mathematics",
    "chapter": "Ratio and Proportion",
    "topic": "Simplifying Ratios",
    "difficulty": "Easy",
    "question": "What is the simplest form of the ratio 24 : 36?",
    "options": [
      "4 : 6",
      "3 : 2",
      "2 : 3",
      "1 : 2"
    ],
    "correct": 2,
    "explanation": "Divide both terms by their GCD of 12: 24 ÷ 12 = 2 and 36 ÷ 12 = 3. The simplest form is 2 : 3.",
    "conceptKey": "RATIO_SIMPLIFICATION",
    "correctAnswer": "2 : 3"
  },
  {
    "id": "tn6-math-ch2-q2",
    "classLevel": "Class 6",
    "class": "6th",
    "subject": "Mathematics",
    "chapter": "Ratio and Proportion",
    "topic": "Unitary Method",
    "difficulty": "Medium",
    "question": "If the cost of 6 notebooks is ₹120, what is the cost of 10 such notebooks?",
    "options": [
      "₹150",
      "₹180",
      "₹200",
      "₹240"
    ],
    "correct": 2,
    "explanation": "Cost of 1 notebook = ₹120 / 6 = ₹20. Cost of 10 notebooks = 10 × ₹20 = ₹200.",
    "conceptKey": "UNITARY_METHOD_CALCULATION",
    "correctAnswer": "₹200"
  },
  {
    "id": "tn6-math-ch2-q3",
    "classLevel": "Class 6",
    "class": "6th",
    "subject": "Mathematics",
    "chapter": "Ratio and Proportion",
    "topic": "Proportion Extremes and Means",
    "difficulty": "Hard",
    "question": "Find the unknown value x in the proportion: 4 : 5 :: 12 : x",
    "options": [
      "10",
      "15",
      "20",
      "25"
    ],
    "correct": 1,
    "explanation": "Product of Extremes = Product of Means => 4 × x = 5 × 12 => 4x = 60 => x = 60 / 4 = 15.",
    "conceptKey": "PROPORTION_EXTREMES_MEANS",
    "correctAnswer": "15"
  },
  {
    "id": "tn6-math-ch2-q4",
    "classLevel": "Class 6",
    "class": "6th",
    "subject": "Mathematics",
    "chapter": "Ratio and Proportion",
    "topic": "Comparing Quantities",
    "difficulty": "Easy",
    "question": "In a class of 40 students, 24 are girls and 16 are boys. What is the ratio of girls to boys?",
    "options": [
      "3 : 2",
      "2 : 3",
      "4 : 5",
      "5 : 4"
    ],
    "correct": 0,
    "explanation": "Ratio = 24 : 16. Dividing by 8 gives 3 : 2.",
    "conceptKey": "RATIO_COMPARISON",
    "correctAnswer": "3 : 2"
  },
  {
    "id": "tn6-math-ch2-q5",
    "classLevel": "Class 6",
    "class": "6th",
    "subject": "Mathematics",
    "chapter": "Ratio and Proportion",
    "topic": "Dividing a Quantity by Ratio",
    "difficulty": "Medium",
    "question": "Divide ₹500 between Priya and Karthik in the ratio 3 : 2. How much does Priya receive?",
    "options": [
      "₹200",
      "₹250",
      "₹300",
      "₹350"
    ],
    "correct": 2,
    "explanation": "Total ratio parts = 3 + 2 = 5. Priya gets 3/5 of ₹500 = 3 × 100 = ₹300.",
    "conceptKey": "DIVIDING_QUANTITY_IN_RATIO",
    "correctAnswer": "₹300"
  },
  {
    "id": "tn7-sci-ch1-q1",
    "classLevel": "Class 7",
    "class": "7th",
    "subject": "Science",
    "chapter": "Heat and Temperature",
    "topic": "SI Unit of Temperature",
    "difficulty": "Easy",
    "question": "What is the SI unit of temperature?",
    "options": [
      "Celsius (°C)",
      "Fahrenheit (°F)",
      "Kelvin (K)",
      "Joule (J)"
    ],
    "correct": 2,
    "explanation": "The SI unit of thermodynamic temperature is the Kelvin (K). Celsius and Fahrenheit are common practical scales, while Joule is the unit of heat energy.",
    "conceptKey": "TEMPERATURE_SI_UNIT",
    "correctAnswer": "Kelvin (K)"
  },
  {
    "id": "tn7-sci-ch1-q2",
    "classLevel": "Class 7",
    "class": "7th",
    "subject": "Science",
    "chapter": "Heat and Temperature",
    "topic": "Clinical Thermometer Features",
    "difficulty": "Medium",
    "question": "Why does a clinical thermometer have a slight kink or constriction in its capillary tube near the bulb?",
    "options": [
      "To increase the flow rate of mercury",
      "To prevent backflow of mercury before taking the reading",
      "To measure higher temperatures above 100°C",
      "To make the thermometer unbreakable"
    ],
    "correct": 1,
    "explanation": "The constriction (kink) prevents the mercury column from dropping immediately on removal from the patient mouth, enabling an accurate reading.",
    "conceptKey": "CLINICAL_THERMOMETER_KINK",
    "correctAnswer": "To prevent backflow of mercury before taking the reading"
  },
  {
    "id": "tn7-sci-ch1-q3",
    "classLevel": "Class 7",
    "class": "7th",
    "subject": "Science",
    "chapter": "Heat and Temperature",
    "topic": "Modes of Heat Transfer",
    "difficulty": "Hard",
    "question": "How does heat energy from the Sun travel across millions of kilometres of empty space to reach the Earth?",
    "options": [
      "Conduction",
      "Convection",
      "Radiation",
      "Advection"
    ],
    "correct": 2,
    "explanation": "Radiation transmits heat energy through electromagnetic waves without requiring any intervening material medium. Conduction and convection require a medium.",
    "conceptKey": "HEAT_TRANSFER_RADIATION",
    "correctAnswer": "Radiation"
  },
  {
    "id": "tn7-sci-ch1-q4",
    "classLevel": "Class 7",
    "class": "7th",
    "subject": "Science",
    "chapter": "Heat and Temperature",
    "topic": "Normal Human Body Temperature",
    "difficulty": "Easy",
    "question": "What is the normal internal temperature of a healthy human body on the Celsius scale?",
    "options": [
      "35.0 °C",
      "37.0 °C",
      "39.0 °C",
      "42.0 °C"
    ],
    "correct": 1,
    "explanation": "Normal human body temperature is approximately 37.0 °C (98.6 °F).",
    "conceptKey": "NORMAL_BODY_TEMPERATURE",
    "correctAnswer": "37.0 °C"
  },
  {
    "id": "tn7-sci-ch1-q5",
    "classLevel": "Class 7",
    "class": "7th",
    "subject": "Science",
    "chapter": "Heat and Temperature",
    "topic": "Thermal Expansion in Solids",
    "difficulty": "Medium",
    "question": "Why are small gaps left between successive steel rails in railway tracks in Tamil Nadu?",
    "options": [
      "To save steel during manufacturing",
      "To allow for thermal expansion during hot summer days",
      "To decrease the speed of trains",
      "To let rainwater drain out"
    ],
    "correct": 1,
    "explanation": "Metals expand on heating. Gaps provide room for linear expansion during summer, preventing buckling and derailment.",
    "conceptKey": "THERMAL_EXPANSION_RAILS",
    "correctAnswer": "To allow for thermal expansion during hot summer days"
  },
  {
    "id": "tn7-sci-ch2-q1",
    "classLevel": "Class 7",
    "class": "7th",
    "subject": "Science",
    "chapter": "Electricity and Circuits",
    "topic": "Electric Cell Energy Conversion",
    "difficulty": "Easy",
    "question": "An electric cell transforms which form of energy into electrical energy?",
    "options": [
      "Mechanical energy",
      "Chemical energy",
      "Light energy",
      "Sound energy"
    ],
    "correct": 1,
    "explanation": "An electric cell contains chemicals (electrolyte and electrodes) that undergo chemical reactions to generate electrical current.",
    "conceptKey": "ELECTRIC_CELL_ENERGY_TRANSFORMATION",
    "correctAnswer": "Chemical energy"
  },
  {
    "id": "tn7-sci-ch2-q2",
    "classLevel": "Class 7",
    "class": "7th",
    "subject": "Science",
    "chapter": "Electricity and Circuits",
    "topic": "Electric Fuse Wire Principle",
    "difficulty": "Medium",
    "question": "On which physical effect of electric current does an electric safety fuse work?",
    "options": [
      "Magnetic effect",
      "Chemical effect",
      "Heating effect",
      "Mechanical effect"
    ],
    "correct": 2,
    "explanation": "A fuse relies on Joule heating: when excessive current flows, the low-melting-point alloy wire heats up and melts, breaking the circuit.",
    "conceptKey": "FUSE_HEATING_EFFECT",
    "correctAnswer": "Heating effect"
  },
  {
    "id": "tn7-sci-ch2-q3",
    "classLevel": "Class 7",
    "class": "7th",
    "subject": "Science",
    "chapter": "Electricity and Circuits",
    "topic": "Series vs Parallel Circuits",
    "difficulty": "Hard",
    "question": "In household wiring across Tamil Nadu homes, why are electrical appliances connected in parallel rather than in series?",
    "options": [
      "Parallel circuits consume zero electricity",
      "Each appliance receives full voltage and can operate independently",
      "Appliances in parallel do not need grounding wires",
      "Parallel wiring eliminates all resistance"
    ],
    "correct": 1,
    "explanation": "In parallel connection, every appliance receives the full supply voltage (230V) and if one appliance is turned off or burns out, others continue working.",
    "conceptKey": "PARALLEL_CIRCUITS_HOUSEHOLD",
    "correctAnswer": "Each appliance receives full voltage and can operate independently"
  },
  {
    "id": "tn7-sci-ch2-q4",
    "classLevel": "Class 7",
    "class": "7th",
    "subject": "Science",
    "chapter": "Electricity and Circuits",
    "topic": "Conductors and Insulators",
    "difficulty": "Easy",
    "question": "Which of the following materials is a good conductor of electricity?",
    "options": [
      "Rubber eraser",
      "Copper wire",
      "Plastic ruler",
      "Dry wood"
    ],
    "correct": 1,
    "explanation": "Copper has free mobile electrons that easily carry electric current, making it an excellent electrical conductor.",
    "conceptKey": "ELECTRICAL_CONDUCTORS",
    "correctAnswer": "Copper wire"
  },
  {
    "id": "tn7-sci-ch2-q5",
    "classLevel": "Class 7",
    "class": "7th",
    "subject": "Science",
    "chapter": "Electricity and Circuits",
    "topic": "Electromagnets",
    "difficulty": "Medium",
    "question": "What happens to the magnetic field of an electromagnet when the electric current is switched off?",
    "options": [
      "It doubles in strength",
      "It changes direction",
      "It disappears immediately",
      "It turns into an electric charge"
    ],
    "correct": 2,
    "explanation": "Electromagnets are temporary magnets whose magnetic field exists only while electric current flows through the coil.",
    "conceptKey": "ELECTROMAGNET_CURRENT",
    "correctAnswer": "It disappears immediately"
  },
  {
    "id": "tn7-math-ch1-q1",
    "classLevel": "Class 7",
    "class": "7th",
    "subject": "Mathematics",
    "chapter": "Number System & Integers",
    "topic": "Addition of Negative Integers",
    "difficulty": "Easy",
    "question": "Calculate: (-18) + (-22)",
    "options": [
      "-4",
      "+4",
      "-40",
      "+40"
    ],
    "correct": 2,
    "explanation": "Adding two negative integers yields a negative integer: -(18 + 22) = -40.",
    "conceptKey": "INTEGER_ADDITION_RULES",
    "correctAnswer": "-40"
  },
  {
    "id": "tn7-math-ch1-q2",
    "classLevel": "Class 7",
    "class": "7th",
    "subject": "Mathematics",
    "chapter": "Number System & Integers",
    "topic": "Multiplication of Mixed Integers",
    "difficulty": "Medium",
    "question": "What is the product of: (-7) × (-6) × (-2)?",
    "options": [
      "+84",
      "-84",
      "+42",
      "-42"
    ],
    "correct": 1,
    "explanation": "An odd number of negative signs produces a negative result: (-7) × (-6) = +42, and (+42) × (-2) = -84.",
    "conceptKey": "INTEGER_MULTIPLICATION_SIGNS",
    "correctAnswer": "-84"
  },
  {
    "id": "tn7-math-ch1-q3",
    "classLevel": "Class 7",
    "class": "7th",
    "subject": "Mathematics",
    "chapter": "Number System & Integers",
    "topic": "Distributive Property of Integers",
    "difficulty": "Hard",
    "question": "Using the distributive property, evaluate: (-25) × 37 + (-25) × 63",
    "options": [
      "-250",
      "-2,500",
      "+2,500",
      "-25,000"
    ],
    "correct": 1,
    "explanation": "(-25) × (37 + 63) = (-25) × 100 = -2,500.",
    "conceptKey": "DISTRIBUTIVE_PROPERTY_INTEGERS",
    "correctAnswer": "-2,500"
  },
  {
    "id": "tn7-math-ch1-q4",
    "classLevel": "Class 7",
    "class": "7th",
    "subject": "Mathematics",
    "chapter": "Number System & Integers",
    "topic": "Integer Comparison",
    "difficulty": "Easy",
    "question": "Which of the following integers has the smallest value?",
    "options": [
      "0",
      "-1",
      "-15",
      "+5"
    ],
    "correct": 2,
    "explanation": "On the number line, numbers further to the left are smaller. -15 is further left than -1, 0, or +5.",
    "conceptKey": "INTEGER_NUMBER_LINE_ORDER",
    "correctAnswer": "-15"
  },
  {
    "id": "tn7-math-ch1-q5",
    "classLevel": "Class 7",
    "class": "7th",
    "subject": "Mathematics",
    "chapter": "Number System & Integers",
    "topic": "Division of Integers",
    "difficulty": "Medium",
    "question": "Compute: (-144) ÷ (-12)",
    "options": [
      "-12",
      "+12",
      "-132",
      "+132"
    ],
    "correct": 1,
    "explanation": "Dividing a negative integer by another negative integer gives a positive quotient: (-144) ÷ (-12) = +12.",
    "conceptKey": "INTEGER_DIVISION_RULES",
    "correctAnswer": "+12"
  },
  {
    "id": "tn7-math-ch2-q1",
    "classLevel": "Class 7",
    "class": "7th",
    "subject": "Mathematics",
    "chapter": "Algebraic Expressions",
    "topic": "Identifying Like Terms",
    "difficulty": "Easy",
    "question": "Which pair consists of like algebraic terms?",
    "options": [
      "3x and 3y",
      "7xy and -2xy",
      "4x² and 4x",
      "5a and 5ab"
    ],
    "correct": 1,
    "explanation": "Like terms have the identical algebraic variable factors raised to the same powers. 7xy and -2xy both have the variable factor xy.",
    "conceptKey": "LIKE_TERMS_ALGEBRA",
    "correctAnswer": "7xy and -2xy"
  },
  {
    "id": "tn7-math-ch2-q2",
    "classLevel": "Class 7",
    "class": "7th",
    "subject": "Mathematics",
    "chapter": "Algebraic Expressions",
    "topic": "Evaluating Expressions by Substitution",
    "difficulty": "Medium",
    "question": "If x = 3 and y = -2, find the value of the algebraic expression: 2x² - 3y + 5",
    "options": [
      "17",
      "29",
      "23",
      "15"
    ],
    "correct": 1,
    "explanation": "Substitute values: 2(3)² - 3(-2) + 5 = 2(9) - (-6) + 5 = 18 + 6 + 5 = 29.",
    "conceptKey": "ALGEBRAIC_SUBSTITUTION",
    "correctAnswer": "29"
  },
  {
    "id": "tn7-math-ch2-q3",
    "classLevel": "Class 7",
    "class": "7th",
    "subject": "Mathematics",
    "chapter": "Algebraic Expressions",
    "topic": "Degree of Polynomials",
    "difficulty": "Hard",
    "question": "What is the degree of the polynomial: 4x³y² - 5x²y + 7xy⁴ - 9?",
    "options": [
      "3",
      "4",
      "5",
      "9"
    ],
    "correct": 2,
    "explanation": "The degree of a term is the sum of exponents of its variables. For 4x³y², sum = 3 + 2 = 5. For 7xy⁴, sum = 1 + 4 = 5. The highest degree is 5.",
    "conceptKey": "POLYNOMIAL_DEGREE",
    "correctAnswer": "5"
  },
  {
    "id": "tn7-math-ch2-q4",
    "classLevel": "Class 7",
    "class": "7th",
    "subject": "Mathematics",
    "chapter": "Algebraic Expressions",
    "topic": "Coefficient of Variables",
    "difficulty": "Easy",
    "question": "What is the numerical coefficient of y in the expression 8 - 5y?",
    "options": [
      "8",
      "5",
      "-5",
      "1"
    ],
    "correct": 2,
    "explanation": "The term containing y is -5y, so its numerical coefficient is -5.",
    "conceptKey": "ALGEBRAIC_COEFFICIENT",
    "correctAnswer": "-5"
  },
  {
    "id": "tn7-math-ch2-q5",
    "classLevel": "Class 7",
    "class": "7th",
    "subject": "Mathematics",
    "chapter": "Algebraic Expressions",
    "topic": "Adding Algebraic Expressions",
    "difficulty": "Medium",
    "question": "Add the expressions: (3a - 4b + 2) and (2a + 7b - 5)",
    "options": [
      "5a + 3b - 3",
      "5a - 3b - 3",
      "a + 11b - 7",
      "5a + 11b + 3"
    ],
    "correct": 0,
    "explanation": "Combine like terms: (3a + 2a) + (-4b + 7b) + (2 - 5) = 5a + 3b - 3.",
    "conceptKey": "ADDING_ALGEBRAIC_EXPRESSIONS",
    "correctAnswer": "5a + 3b - 3"
  },
  {
    "id": "tn8-sci-ch1-q1",
    "classLevel": "Class 8",
    "class": "8th",
    "subject": "Science",
    "chapter": "Measurement and Pascal’s Law",
    "topic": "Pressure and Thrust Formula",
    "difficulty": "Easy",
    "question": "What is the SI unit of pressure?",
    "options": [
      "Newton (N)",
      "Joule (J)",
      "Pascal (Pa)",
      "Watt (W)"
    ],
    "correct": 2,
    "explanation": "Pressure is defined as thrust per unit area (P = F / A). Its SI unit is Newton per square metre (N/m²), named Pascal (Pa).",
    "conceptKey": "PRESSURE_SI_UNIT_PASCAL",
    "correctAnswer": "Pascal (Pa)"
  },
  {
    "id": "tn8-sci-ch1-q2",
    "classLevel": "Class 8",
    "class": "8th",
    "subject": "Science",
    "chapter": "Measurement and Pascal’s Law",
    "topic": "Pascal Law Application",
    "difficulty": "Medium",
    "question": "Which automotive device operates on the fundamental principle of Pascal Law?",
    "options": [
      "Car spark plug",
      "Hydraulic brake system",
      "Exhaust silencer",
      "Air conditioning compressor"
    ],
    "correct": 1,
    "explanation": "Pascal Law states that pressure applied to an enclosed fluid is transmitted equally in all directions, which is the working basis of hydraulic brakes and car jacks.",
    "conceptKey": "PASCALS_LAW_HYDRAULIC_BRAKES",
    "correctAnswer": "Hydraulic brake system"
  },
  {
    "id": "tn8-sci-ch1-q3",
    "classLevel": "Class 8",
    "class": "8th",
    "subject": "Science",
    "chapter": "Measurement and Pascal’s Law",
    "topic": "Atmospheric Pressure Variation",
    "difficulty": "Hard",
    "question": "What happens to atmospheric pressure as altitude increases above sea level in mountain regions like Ooty or Kodaikanal?",
    "options": [
      "It increases steadily due to cold air",
      "It decreases because the column of air above becomes shorter and less dense",
      "It remains constant at 1 atmosphere everywhere",
      "It fluctuates randomly between day and night"
    ],
    "correct": 1,
    "explanation": "As altitude increases, the density of air decreases and the vertical column of air exerting downward gravitational weight becomes shorter, reducing atmospheric pressure.",
    "conceptKey": "ATMOSPHERIC_PRESSURE_ALTITUDE",
    "correctAnswer": "It decreases because the column of air above becomes shorter and less dense"
  },
  {
    "id": "tn8-sci-ch1-q4",
    "classLevel": "Class 8",
    "class": "8th",
    "subject": "Science",
    "chapter": "Measurement and Pascal’s Law",
    "topic": "Atmospheric Pressure Barometer",
    "difficulty": "Easy",
    "question": "Which instrument is used to measure atmospheric pressure?",
    "options": [
      "Barometer",
      "Hydrometer",
      "Anemometer",
      "Voltmeter"
    ],
    "correct": 0,
    "explanation": "A barometer (such as a mercury barometer invented by Torricelli) measures atmospheric pressure.",
    "conceptKey": "BAROMETER_ATMOSPHERIC_PRESSURE",
    "correctAnswer": "Barometer"
  },
  {
    "id": "tn8-sci-ch1-q5",
    "classLevel": "Class 8",
    "class": "8th",
    "subject": "Science",
    "chapter": "Measurement and Pascal’s Law",
    "topic": "Surface Area and Pressure",
    "difficulty": "Medium",
    "question": "Why are school bag shoulder straps made wide rather than thin?",
    "options": [
      "To increase the pressure on the shoulder",
      "To decrease the pressure exerted on the shoulder by increasing surface area",
      "To make the bag heavier",
      "To save cloth material"
    ],
    "correct": 1,
    "explanation": "Pressure = Force / Area. A larger contact area reduces the pressure on the student shoulder for the same bag weight.",
    "conceptKey": "SURFACE_AREA_PRESSURE_RELATION",
    "correctAnswer": "To decrease the pressure exerted on the shoulder by increasing surface area"
  },
  {
    "id": "tn8-sci-ch2-q1",
    "classLevel": "Class 8",
    "class": "8th",
    "subject": "Science",
    "chapter": "Sound and Waves",
    "topic": "Audible Frequency Range of Humans",
    "difficulty": "Easy",
    "question": "What is the audible frequency hearing range for a healthy human ear?",
    "options": [
      "2 Hz to 200 Hz",
      "20 Hz to 20,000 Hz",
      "200 Hz to 200,000 Hz",
      "0 Hz to 20 Hz"
    ],
    "correct": 1,
    "explanation": "The human ear can detect sound frequencies between 20 Hz and 20,000 Hz (20 kHz). Below 20 Hz is infrasound, and above 20 kHz is ultrasound.",
    "conceptKey": "AUDIBLE_FREQUENCY_RANGE",
    "correctAnswer": "20 Hz to 20,000 Hz"
  },
  {
    "id": "tn8-sci-ch2-q2",
    "classLevel": "Class 8",
    "class": "8th",
    "subject": "Science",
    "chapter": "Sound and Waves",
    "topic": "Speed of Sound Across Media",
    "difficulty": "Medium",
    "question": "In which medium does sound travel at the highest speed?",
    "options": [
      "Air (Gas)",
      "Water (Liquid)",
      "Steel (Solid)",
      "Vacuum"
    ],
    "correct": 2,
    "explanation": "Sound is a mechanical wave requiring particle collisions. Since particles are packed most tightly in solids, sound travels fastest in solids (e.g. ~5,900 m/s in steel).",
    "conceptKey": "SPEED_OF_SOUND_MEDIA",
    "correctAnswer": "Steel (Solid)"
  },
  {
    "id": "tn8-sci-ch2-q3",
    "classLevel": "Class 8",
    "class": "8th",
    "subject": "Science",
    "chapter": "Sound and Waves",
    "topic": "Echo Distance Calculation",
    "difficulty": "Hard",
    "question": "What is the minimum distance required between the sound source and an obstacle to hear a distinct echo in air at 20°C (speed of sound = 340 m/s)?",
    "options": [
      "17 metres",
      "34 metres",
      "8.5 metres",
      "340 metres"
    ],
    "correct": 0,
    "explanation": "Human hearing persistence of sound is 0.1 s. Total round trip distance = v × t = 340 × 0.1 = 34 m. Obstacle distance = 34 / 2 = 17 metres.",
    "conceptKey": "ECHO_MINIMUM_DISTANCE",
    "correctAnswer": "17 metres"
  },
  {
    "id": "tn8-sci-ch2-q4",
    "classLevel": "Class 8",
    "class": "8th",
    "subject": "Science",
    "chapter": "Sound and Waves",
    "topic": "Sound in Vacuum",
    "difficulty": "Easy",
    "question": "Can sound travel through a vacuum?",
    "options": [
      "Yes, faster than in air",
      "Yes, but very slowly",
      "No, sound needs a material medium",
      "Only ultrasound can travel in a vacuum"
    ],
    "correct": 2,
    "explanation": "Sound waves are mechanical longitudinal waves that require a material medium (solid, liquid, or gas) to propagate. They cannot travel through a vacuum.",
    "conceptKey": "SOUND_NEEDS_MEDIUM",
    "correctAnswer": "No, sound needs a material medium"
  },
  {
    "id": "tn8-sci-ch2-q5",
    "classLevel": "Class 8",
    "class": "8th",
    "subject": "Science",
    "chapter": "Sound and Waves",
    "topic": "Pitch and Frequency",
    "difficulty": "Medium",
    "question": "Which characteristic of a sound wave determines its pitch (shrillness or flatness)?",
    "options": [
      "Amplitude",
      "Frequency",
      "Speed",
      "Loudness"
    ],
    "correct": 1,
    "explanation": "Pitch depends directly on frequency: higher frequency produces a higher pitched, shriller sound (like a whistle or bird chirp).",
    "conceptKey": "PITCH_AND_FREQUENCY",
    "correctAnswer": "Frequency"
  },
  {
    "id": "tn8-math-ch1-q1",
    "classLevel": "Class 8",
    "class": "8th",
    "subject": "Mathematics",
    "chapter": "Rational Numbers",
    "topic": "Additive and Multiplicative Inverses",
    "difficulty": "Easy",
    "question": "What is the additive inverse of -5/8?",
    "options": [
      "-8/5",
      "+5/8",
      "+8/5",
      "1"
    ],
    "correct": 1,
    "explanation": "The additive inverse of a/b is -a/b, because a/b + (-a/b) = 0. Therefore, the additive inverse of -5/8 is +5/8.",
    "conceptKey": "ADDITIVE_INVERSE_RATIONAL",
    "correctAnswer": "+5/8"
  },
  {
    "id": "tn8-math-ch1-q2",
    "classLevel": "Class 8",
    "class": "8th",
    "subject": "Mathematics",
    "chapter": "Rational Numbers",
    "topic": "Addition of Rational Numbers",
    "difficulty": "Medium",
    "question": "Evaluate: 3/4 + (-5/6)",
    "options": [
      "-1/12",
      "+1/12",
      "-2/10",
      "-8/24"
    ],
    "correct": 0,
    "explanation": "LCM of 4 and 6 is 12: (3 × 3)/12 + (-5 × 2)/12 = 9/12 - 10/12 = -1/12.",
    "conceptKey": "RATIONAL_NUMBER_ADDITION",
    "correctAnswer": "-1/12"
  },
  {
    "id": "tn8-math-ch1-q3",
    "classLevel": "Class 8",
    "class": "8th",
    "subject": "Mathematics",
    "chapter": "Rational Numbers",
    "topic": "Rational Numbers Between Two Numbers",
    "difficulty": "Hard",
    "question": "Find a rational number lying exactly midway between 1/3 and 1/2.",
    "options": [
      "5/12",
      "2/5",
      "7/12",
      "3/8"
    ],
    "correct": 0,
    "explanation": "Midpoint = (1/3 + 1/2) / 2 = (2/6 + 3/6) / 2 = (5/6) / 2 = 5/12.",
    "conceptKey": "RATIONAL_NUMBER_MIDPOINT",
    "correctAnswer": "5/12"
  },
  {
    "id": "tn8-math-ch1-q4",
    "classLevel": "Class 8",
    "class": "8th",
    "subject": "Mathematics",
    "chapter": "Rational Numbers",
    "topic": "Multiplicative Identity",
    "difficulty": "Easy",
    "question": "Which number is the multiplicative identity for rational numbers?",
    "options": [
      "0",
      "1",
      "-1",
      "Infinity"
    ],
    "correct": 1,
    "explanation": "Any rational number multiplied by 1 remains unchanged: a/b × 1 = a/b. Thus, 1 is the multiplicative identity.",
    "conceptKey": "MULTIPLICATIVE_IDENTITY",
    "correctAnswer": "1"
  },
  {
    "id": "tn8-math-ch1-q5",
    "classLevel": "Class 8",
    "class": "8th",
    "subject": "Mathematics",
    "chapter": "Rational Numbers",
    "topic": "Multiplication and Division of Fractions",
    "difficulty": "Medium",
    "question": "Calculate: (-4/9) ÷ (8/15)",
    "options": [
      "-5/6",
      "+5/6",
      "-32/135",
      "-6/5"
    ],
    "correct": 0,
    "explanation": "Divide by multiplying with the reciprocal: (-4/9) × (15/8) = (-4 × 15) / (9 × 8) = -60 / 72 = -5/6.",
    "conceptKey": "RATIONAL_NUMBER_DIVISION",
    "correctAnswer": "-5/6"
  },
  {
    "id": "tn8-math-ch2-q1",
    "classLevel": "Class 8",
    "class": "8th",
    "subject": "Mathematics",
    "chapter": "Algebraic Identities & Factorisation",
    "topic": "Difference of Two Squares Identity",
    "difficulty": "Easy",
    "question": "Expand using identity: (2x + 3)(2x - 3)",
    "options": [
      "4x² + 9",
      "4x² - 9",
      "2x² - 9",
      "4x² - 12x + 9"
    ],
    "correct": 1,
    "explanation": "Using (a + b)(a - b) = a² - b²: (2x)² - (3)² = 4x² - 9.",
    "conceptKey": "DIFFERENCE_OF_SQUARES_IDENTITY",
    "correctAnswer": "4x² - 9"
  },
  {
    "id": "tn8-math-ch2-q2",
    "classLevel": "Class 8",
    "class": "8th",
    "subject": "Mathematics",
    "chapter": "Algebraic Identities & Factorisation",
    "topic": "Factorisation of Quadratic Trinomial",
    "difficulty": "Medium",
    "question": "Factorise the quadratic expression: x² + 7x + 12",
    "options": [
      "(x + 2)(x + 6)",
      "(x + 3)(x + 4)",
      "(x - 3)(x - 4)",
      "(x + 1)(x + 12)"
    ],
    "correct": 1,
    "explanation": "Find two numbers whose product is 12 and sum is 7: 3 × 4 = 12 and 3 + 4 = 7. Thus, (x + 3)(x + 4).",
    "conceptKey": "FACTORISE_QUADRATIC_TRINOMIAL",
    "correctAnswer": "(x + 3)(x + 4)"
  },
  {
    "id": "tn8-math-ch2-q3",
    "classLevel": "Class 8",
    "class": "8th",
    "subject": "Mathematics",
    "chapter": "Algebraic Identities & Factorisation",
    "topic": "Cubic Identity Expansion",
    "difficulty": "Hard",
    "question": "Expand: (x + 2)³",
    "options": [
      "x³ + 8",
      "x³ + 6x² + 12x + 8",
      "x³ + 2x² + 4x + 8",
      "x³ + 8x² + 6x + 8"
    ],
    "correct": 1,
    "explanation": "Identity: (a + b)³ = a³ + 3a²b + 3ab² + b³ = x³ + 3(x²)(2) + 3(x)(4) + 8 = x³ + 6x² + 12x + 8.",
    "conceptKey": "EXPANSION_CUBIC_IDENTITY",
    "correctAnswer": "x³ + 6x² + 12x + 8"
  },
  {
    "id": "tn8-math-ch2-q4",
    "classLevel": "Class 8",
    "class": "8th",
    "subject": "Mathematics",
    "chapter": "Algebraic Identities & Factorisation",
    "topic": "Square of a Binomial",
    "difficulty": "Easy",
    "question": "What is the expansion of (a - b)²?",
    "options": [
      "a² - b²",
      "a² - 2ab + b²",
      "a² + 2ab + b²",
      "a² - 2ab - b²"
    ],
    "correct": 1,
    "explanation": "(a - b)² = a² - 2ab + b².",
    "conceptKey": "SQUARE_OF_BINOMIAL",
    "correctAnswer": "a² - 2ab + b²"
  },
  {
    "id": "tn8-math-ch2-q5",
    "classLevel": "Class 8",
    "class": "8th",
    "subject": "Mathematics",
    "chapter": "Algebraic Identities & Factorisation",
    "topic": "Factorisation by Common Monomial",
    "difficulty": "Medium",
    "question": "Factorise: 12x²y + 18xy²",
    "options": [
      "6xy(2x + 3y)",
      "6x(2y + 3x)",
      "3xy(4x + 6y)",
      "12xy(x + y)"
    ],
    "correct": 0,
    "explanation": "The greatest common factor of 12x²y and 18xy² is 6xy. Factoring out 6xy gives 6xy(2x + 3y).",
    "conceptKey": "COMMON_FACTOR_ALGEBRA",
    "correctAnswer": "6xy(2x + 3y)"
  },
  {
    "id": "tn9-sci-ch1-q1",
    "classLevel": "Class 9",
    "class": "9th",
    "subject": "Science",
    "chapter": "Fluids & Archimedes’ Principle",
    "topic": "Archimedes Principle Definition",
    "difficulty": "Easy",
    "question": "According to Archimedes’ Principle, what is the magnitude of the buoyant upthrust acting on a submerged body?",
    "options": [
      "Equal to the total volume of the body",
      "Equal to the weight of the fluid displaced by the body",
      "Equal to atmospheric pressure",
      "Equal to double the mass of the body"
    ],
    "correct": 1,
    "explanation": "Archimedes’ principle states that a body wholly or partially immersed in a fluid experiences an upward buoyant force equal to the weight of the fluid it displaces.",
    "conceptKey": "ARCHIMEDES_PRINCIPLE_BUOYANCY",
    "correctAnswer": "Equal to the weight of the fluid displaced by the body"
  },
  {
    "id": "tn9-sci-ch1-q2",
    "classLevel": "Class 9",
    "class": "9th",
    "subject": "Science",
    "chapter": "Fluids & Archimedes’ Principle",
    "topic": "Hydrometer Operating Principle",
    "difficulty": "Medium",
    "question": "A hydrometer used to test the purity of milk (lactometer) is based on which scientific principle?",
    "options": [
      "Bernoulli Principle",
      "Principle of Flotation and Archimedes Principle",
      "Hooke Law",
      "Boyle Law"
    ],
    "correct": 1,
    "explanation": "Hydrometers and lactometers float at different depths according to the density of the liquid, based on the Law of Flotation and Archimedes’ principle.",
    "conceptKey": "HYDROMETER_FLOTATION",
    "correctAnswer": "Principle of Flotation and Archimedes Principle"
  },
  {
    "id": "tn9-sci-ch1-q3",
    "classLevel": "Class 9",
    "class": "9th",
    "subject": "Science",
    "chapter": "Fluids & Archimedes’ Principle",
    "topic": "Fluid Pressure Depth Formula",
    "difficulty": "Hard",
    "question": "How does hydrostatic pressure (P) at a depth h inside a stationary liquid relate to liquid density (ρ) and acceleration due to gravity (g)?",
    "options": [
      "P = h / (ρ · g)",
      "P = h · ρ · g",
      "P = h² · ρ · g",
      "P = ρ / (h · g)"
    ],
    "correct": 1,
    "explanation": "Hydrostatic pressure P = h · ρ · g, meaning pressure increases linearly with depth (h) and fluid density (ρ).",
    "conceptKey": "HYDROSTATIC_PRESSURE_FORMULA",
    "correctAnswer": "P = h · ρ · g"
  },
  {
    "id": "tn9-sci-ch1-q4",
    "classLevel": "Class 9",
    "class": "9th",
    "subject": "Science",
    "chapter": "Fluids & Archimedes’ Principle",
    "topic": "Relative Density Concept",
    "difficulty": "Easy",
    "question": "What is the unit of relative density?",
    "options": [
      "kg/m³",
      "g/cm³",
      "No unit (dimensionless ratio)",
      "Pascal"
    ],
    "correct": 2,
    "explanation": "Relative density is the ratio of density of substance to density of water at 4°C. Being a ratio of two identical units, it has no units.",
    "conceptKey": "RELATIVE_DENSITY_UNITLESS",
    "correctAnswer": "No unit (dimensionless ratio)"
  },
  {
    "id": "tn9-sci-ch1-q5",
    "classLevel": "Class 9",
    "class": "9th",
    "subject": "Science",
    "chapter": "Fluids & Archimedes’ Principle",
    "topic": "Why Iron Ships Float",
    "difficulty": "Medium",
    "question": "Why does an iron nail sink in water, while a huge ocean ship made of iron floats?",
    "options": [
      "The ship is lighter than the nail",
      "The ship hollow design displaces an amount of water whose weight exceeds the ship weight",
      "Sea water has no gravity",
      "Iron becomes less dense in large sheets"
    ],
    "correct": 1,
    "explanation": "The hollow shape of a ship increases its volume, allowing it to displace a huge volume of water whose weight (buoyant force) equals the ship total weight.",
    "conceptKey": "SHIP_FLOTATION_PRINCIPLE",
    "correctAnswer": "The ship hollow design displaces an amount of water whose weight exceeds the ship weight"
  },
  {
    "id": "tn9-sci-ch2-q1",
    "classLevel": "Class 9",
    "class": "9th",
    "subject": "Science",
    "chapter": "Structure of the Atom",
    "topic": "Discovery of Subatomic Particles",
    "difficulty": "Easy",
    "question": "Who discovered the neutron inside the atomic nucleus in 1932?",
    "options": [
      "J.J. Thomson",
      "Ernest Rutherford",
      "James Chadwick",
      "Niels Bohr"
    ],
    "correct": 2,
    "explanation": "James Chadwick discovered the electrically neutral subatomic particle, the neutron, in 1932.",
    "conceptKey": "DISCOVERY_OF_NEUTRON",
    "correctAnswer": "James Chadwick"
  },
  {
    "id": "tn9-sci-ch2-q2",
    "classLevel": "Class 9",
    "class": "9th",
    "subject": "Science",
    "chapter": "Structure of the Atom",
    "topic": "Isotopes Definition",
    "difficulty": "Medium",
    "question": "Atoms of the same element that have the identical atomic number (Z) but different mass numbers (A) are termed:",
    "options": [
      "Isobars",
      "Isotopes",
      "Isotones",
      "Allotropes"
    ],
    "correct": 1,
    "explanation": "Isotopes have the same number of protons (atomic number) but differing numbers of neutrons, resulting in different mass numbers (e.g. Carbon-12 and Carbon-14).",
    "conceptKey": "ISOTOPES_ATOMIC_STRUCTURE",
    "correctAnswer": "Isotopes"
  },
  {
    "id": "tn9-sci-ch2-q3",
    "classLevel": "Class 9",
    "class": "9th",
    "subject": "Science",
    "chapter": "Structure of the Atom",
    "topic": "Bohr-Bury Electron Configuration Rule",
    "difficulty": "Hard",
    "question": "According to the Bohr-Bury rule (2n²), what is the maximum number of electrons that can occupy the M shell (n = 3)?",
    "options": [
      "8 electrons",
      "18 electrons",
      "32 electrons",
      "50 electrons"
    ],
    "correct": 1,
    "explanation": "Maximum electrons in an orbit = 2n². For M shell (n = 3), max electrons = 2 × (3)² = 2 × 9 = 18 electrons.",
    "conceptKey": "BOHR_BURY_ELECTRONIC_CAPACITY",
    "correctAnswer": "18 electrons"
  },
  {
    "id": "tn9-sci-ch2-q4",
    "classLevel": "Class 9",
    "class": "9th",
    "subject": "Science",
    "chapter": "Structure of the Atom",
    "topic": "Charges on Subatomic Particles",
    "difficulty": "Easy",
    "question": "What is the electrical charge of an electron?",
    "options": [
      "Positive charge (+1)",
      "Negative charge (-1)",
      "Neutral (0 charge)",
      "Variable charge"
    ],
    "correct": 1,
    "explanation": "Electrons carry a unit negative charge (-1), protons carry a unit positive charge (+1), and neutrons have no charge.",
    "conceptKey": "ELECTRON_NEGATIVE_CHARGE",
    "correctAnswer": "Negative charge (-1)"
  },
  {
    "id": "tn9-sci-ch2-q5",
    "classLevel": "Class 9",
    "class": "9th",
    "subject": "Science",
    "chapter": "Structure of the Atom",
    "topic": "Mass Number Calculation",
    "difficulty": "Medium",
    "question": "An atom has 11 protons, 12 neutrons, and 11 electrons. What is its Mass Number (A)?",
    "options": [
      "11",
      "12",
      "23",
      "34"
    ],
    "correct": 2,
    "explanation": "Mass Number (A) = Number of Protons + Number of Neutrons = 11 + 12 = 23 (Sodium, Na).",
    "conceptKey": "MASS_NUMBER_CALCULATION",
    "correctAnswer": "23"
  },
  {
    "id": "tn9-math-ch1-q1",
    "classLevel": "Class 9",
    "class": "9th",
    "subject": "Mathematics",
    "chapter": "Set Language & Venn Diagrams",
    "topic": "Union and Intersection of Sets",
    "difficulty": "Easy",
    "question": "If A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, what is A ∩ B (intersection)?",
    "options": [
      "{1, 2, 5, 6}",
      "{3, 4}",
      "{1, 2, 3, 4, 5, 6}",
      "{}"
    ],
    "correct": 1,
    "explanation": "The intersection A ∩ B contains elements common to both sets A and B, which are {3, 4}.",
    "conceptKey": "SET_INTERSECTION_OPERATION",
    "correctAnswer": "{3, 4}"
  },
  {
    "id": "tn9-math-ch1-q2",
    "classLevel": "Class 9",
    "class": "9th",
    "subject": "Mathematics",
    "chapter": "Set Language & Venn Diagrams",
    "topic": "Cardinality Formula for Two Sets",
    "difficulty": "Medium",
    "question": "If n(A) = 25, n(B) = 30, and n(A ∪ B) = 45, what is n(A ∩ B)?",
    "options": [
      "10",
      "15",
      "5",
      "20"
    ],
    "correct": 0,
    "explanation": "Cardinality formula: n(A ∪ B) = n(A) + n(B) - n(A ∩ B) => 45 = 25 + 30 - n(A ∩ B) => n(A ∩ B) = 55 - 45 = 10.",
    "conceptKey": "SET_CARDINALITY_FORMULA",
    "correctAnswer": "10"
  },
  {
    "id": "tn9-math-ch1-q3",
    "classLevel": "Class 9",
    "class": "9th",
    "subject": "Mathematics",
    "chapter": "Set Language & Venn Diagrams",
    "topic": "De Morgan’s Laws",
    "difficulty": "Hard",
    "question": "According to De Morgan’s Laws for set complementation, what is (A ∪ B)′ equal to?",
    "options": [
      "A′ ∪ B′",
      "A′ ∩ B′",
      "(A ∩ B)′",
      "A ∪ B′"
    ],
    "correct": 1,
    "explanation": "De Morgan’s Law states: (A ∪ B)′ = A′ ∩ B′ (the complement of union equals the intersection of complements).",
    "conceptKey": "DE_MORGANS_LAWS_SETS",
    "correctAnswer": "A′ ∩ B′"
  },
  {
    "id": "tn9-math-ch1-q4",
    "classLevel": "Class 9",
    "class": "9th",
    "subject": "Mathematics",
    "chapter": "Set Language & Venn Diagrams",
    "topic": "Null or Empty Set",
    "difficulty": "Easy",
    "question": "What is the cardinal number (number of elements) of an empty set ∅?",
    "options": [
      "0",
      "1",
      "-1",
      "Undefined"
    ],
    "correct": 0,
    "explanation": "An empty set contains no elements, so its cardinality n(∅) is 0.",
    "conceptKey": "EMPTY_SET_CARDINALITY",
    "correctAnswer": "0"
  },
  {
    "id": "tn9-math-ch1-q5",
    "classLevel": "Class 9",
    "class": "9th",
    "subject": "Mathematics",
    "chapter": "Set Language & Venn Diagrams",
    "topic": "Power Set Cardinality",
    "difficulty": "Medium",
    "question": "If a set A has 4 elements, how many subsets does its power set P(A) contain?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "correct": 2,
    "explanation": "Number of subsets in power set P(A) = 2ⁿ. Here n = 4, so 2⁴ = 16 subsets.",
    "conceptKey": "POWER_SET_FORMULA",
    "correctAnswer": "16"
  },
  {
    "id": "tn9-math-ch2-q1",
    "classLevel": "Class 9",
    "class": "9th",
    "subject": "Mathematics",
    "chapter": "Coordinate Geometry",
    "topic": "Quadrants and Sign Conventions",
    "difficulty": "Easy",
    "question": "In which quadrant does the coordinate point (-4, 5) lie?",
    "options": [
      "Quadrant I",
      "Quadrant II",
      "Quadrant III",
      "Quadrant IV"
    ],
    "correct": 1,
    "explanation": "In Quadrant II, x-coordinates are negative (x < 0) and y-coordinates are positive (y > 0). Hence (-4, 5) is in Quadrant II.",
    "conceptKey": "COORDINATE_QUADRANTS",
    "correctAnswer": "Quadrant II"
  },
  {
    "id": "tn9-math-ch2-q2",
    "classLevel": "Class 9",
    "class": "9th",
    "subject": "Mathematics",
    "chapter": "Coordinate Geometry",
    "topic": "Midpoint Formula",
    "difficulty": "Medium",
    "question": "Find the coordinates of the midpoint M of the line segment joining P(2, 4) and Q(6, 8):",
    "options": [
      "(4, 6)",
      "(3, 5)",
      "(8, 12)",
      "(4, 4)"
    ],
    "correct": 0,
    "explanation": "Midpoint formula: M = ((x₁ + x₂)/2, (y₁ + y₂)/2) = ((2 + 6)/2, (4 + 8)/2) = (8/2, 12/2) = (4, 6).",
    "conceptKey": "MIDPOINT_FORMULA_GEOMETRY",
    "correctAnswer": "(4, 6)"
  },
  {
    "id": "tn9-math-ch2-q3",
    "classLevel": "Class 9",
    "class": "9th",
    "subject": "Mathematics",
    "chapter": "Coordinate Geometry",
    "topic": "Distance Formula",
    "difficulty": "Hard",
    "question": "Calculate the Euclidean distance between points A(1, 2) and B(4, 6):",
    "options": [
      "3 units",
      "4 units",
      "5 units",
      "7 units"
    ],
    "correct": 2,
    "explanation": "Distance d = √[(x₂ - x₁)² + (y₂ - y₁)²] = √[(4 - 1)² + (6 - 2)²] = √[3² + 4²] = √[9 + 16] = √25 = 5 units.",
    "conceptKey": "DISTANCE_FORMULA_COORDINATE",
    "correctAnswer": "5 units"
  },
  {
    "id": "tn9-math-ch2-q4",
    "classLevel": "Class 9",
    "class": "9th",
    "subject": "Mathematics",
    "chapter": "Coordinate Geometry",
    "topic": "Origin Coordinates",
    "difficulty": "Easy",
    "question": "What are the coordinates of the origin where the x-axis and y-axis intersect?",
    "options": [
      "(1, 1)",
      "(0, 0)",
      "(0, 1)",
      "(1, 0)"
    ],
    "correct": 1,
    "explanation": "The origin is the reference point (0, 0) where the horizontal x-axis and vertical y-axis meet.",
    "conceptKey": "ORIGIN_COORDINATES",
    "correctAnswer": "(0, 0)"
  },
  {
    "id": "tn9-math-ch2-q5",
    "classLevel": "Class 9",
    "class": "9th",
    "subject": "Mathematics",
    "chapter": "Coordinate Geometry",
    "topic": "Section Formula",
    "difficulty": "Medium",
    "question": "If point P divides line segment AB joining A(1, 1) and B(4, 4) in the ratio 1 : 2, what is the x-coordinate of P?",
    "options": [
      "2",
      "3",
      "2.5",
      "1.5"
    ],
    "correct": 0,
    "explanation": "Section formula: x = (m·x₂ + n·x₁) / (m + n) = (1·4 + 2·1) / (1 + 2) = (4 + 2) / 3 = 6 / 3 = 2.",
    "conceptKey": "SECTION_FORMULA_INTERNAL",
    "correctAnswer": "2"
  },
  {
    "id": "tn10-sci-ch1-q1",
    "classLevel": "Class 10",
    "class": "10th",
    "subject": "Science",
    "chapter": "Laws of Motion",
    "topic": "Newton First Law & Inertia",
    "difficulty": "Easy",
    "question": "Newton’s First Law of Motion is fundamentally also known as the Law of:",
    "options": [
      "Conservation of Energy",
      "Inertia",
      "Gravitation",
      "Momentum"
    ],
    "correct": 1,
    "explanation": "Newton’s First Law defines inertia: an object continues in its state of rest or uniform motion in a straight line unless compelled by an external unbalanced force.",
    "conceptKey": "NEWTON_FIRST_LAW_INERTIA",
    "correctAnswer": "Inertia"
  },
  {
    "id": "tn10-sci-ch1-q2",
    "classLevel": "Class 10",
    "class": "10th",
    "subject": "Science",
    "chapter": "Laws of Motion",
    "topic": "Newton Second Law Formula",
    "difficulty": "Medium",
    "question": "If a resultant force of 20 N acts upon a mass of 4 kg, what is the acceleration produced?",
    "options": [
      "80 m/s²",
      "5 m/s²",
      "0.2 m/s²",
      "16 m/s²"
    ],
    "correct": 1,
    "explanation": "From Newton’s Second Law: F = m × a => a = F / m = 20 N / 4 kg = 5 m/s².",
    "conceptKey": "NEWTON_SECOND_LAW_FORCE_FORMULA",
    "correctAnswer": "5 m/s²"
  },
  {
    "id": "tn10-sci-ch1-q3",
    "classLevel": "Class 10",
    "class": "10th",
    "subject": "Science",
    "chapter": "Laws of Motion",
    "topic": "Conservation of Linear Momentum",
    "difficulty": "Hard",
    "question": "A rocket propulsion system functions on which two foundational physical principles?",
    "options": [
      "Newton Third Law of Motion and Law of Conservation of Linear Momentum",
      "Newton First Law of Motion and Pascal Law",
      "Law of Conservation of Energy and Archimedes Principle",
      "Hooke Law and Newton Law of Gravitation"
    ],
    "correct": 0,
    "explanation": "Rocket propulsion expels exhaust gases backwards with high momentum (action), creating an equal and opposite thrust forwards (reaction), conserving total linear momentum.",
    "conceptKey": "ROCKET_PROPULSION_CONSERVATION_MOMENTUM",
    "correctAnswer": "Newton Third Law of Motion and Law of Conservation of Linear Momentum"
  },
  {
    "id": "tn10-sci-ch1-q4",
    "classLevel": "Class 10",
    "class": "10th",
    "subject": "Science",
    "chapter": "Laws of Motion",
    "topic": "SI Unit of Force",
    "difficulty": "Easy",
    "question": "What is the SI unit of force?",
    "options": [
      "Dyne",
      "Newton (N)",
      "Joule (J)",
      "Watt (W)"
    ],
    "correct": 1,
    "explanation": "The SI unit of force is the Newton (N). In CGS units, force is measured in dynes (1 N = 10⁵ dynes).",
    "conceptKey": "SI_UNIT_FORCE",
    "correctAnswer": "Newton (N)"
  },
  {
    "id": "tn10-sci-ch1-q5",
    "classLevel": "Class 10",
    "class": "10th",
    "subject": "Science",
    "chapter": "Laws of Motion",
    "topic": "Impulse of Force",
    "difficulty": "Medium",
    "question": "Why does a cricket fielder in Tamil Nadu pull his hands backward while catching a fast cricket ball?",
    "options": [
      "To reduce the time of impact",
      "To increase the time of impact and reduce the impulsive force on his hands",
      "To make the ball rebound faster",
      "To look stylish"
    ],
    "correct": 1,
    "explanation": "Impulse = Force × Time. By pulling hands back, the fielder increases the time duration to stop the ball, which decreases the impact force felt on the palms.",
    "conceptKey": "IMPULSE_FORCE_CRICKET",
    "correctAnswer": "To increase the time of impact and reduce the impulsive force on his hands"
  },
  {
    "id": "tn10-sci-ch2-q1",
    "classLevel": "Class 10",
    "class": "10th",
    "subject": "Science",
    "chapter": "Electricity: Ohm’s Law & Joule’s Heating",
    "topic": "Ohm’s Law Statement",
    "difficulty": "Easy",
    "question": "According to Ohm’s Law, at constant temperature, the electric current (I) is directly proportional to:",
    "options": [
      "Electric Resistance (R)",
      "Potential Difference / Voltage (V)",
      "Heat dissipated (H)",
      "Magnetic flux (Φ)"
    ],
    "correct": 1,
    "explanation": "Ohm’s law states that V ∝ I at constant temperature, which yields the formula V = I × R.",
    "conceptKey": "OHMS_LAW_VOLTAGE_CURRENT",
    "correctAnswer": "Potential Difference / Voltage (V)"
  },
  {
    "id": "tn10-sci-ch2-q2",
    "classLevel": "Class 10",
    "class": "10th",
    "subject": "Science",
    "chapter": "Electricity: Ohm’s Law & Joule’s Heating",
    "topic": "Equivalent Resistance in Parallel",
    "difficulty": "Medium",
    "question": "Two resistors of 6 Ω and 3 Ω are connected in parallel. What is their effective total resistance?",
    "options": [
      "9 Ω",
      "2 Ω",
      "18 Ω",
      "4.5 Ω"
    ],
    "correct": 1,
    "explanation": "For resistors in parallel: 1/Rp = 1/R₁ + 1/R₂ = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Thus, Rp = 2 Ω.",
    "conceptKey": "PARALLEL_RESISTANCE_CALCULATION",
    "correctAnswer": "2 Ω"
  },
  {
    "id": "tn10-sci-ch2-q3",
    "classLevel": "Class 10",
    "class": "10th",
    "subject": "Science",
    "chapter": "Electricity: Ohm’s Law & Joule’s Heating",
    "topic": "Joule’s Law of Heating Formula",
    "difficulty": "Hard",
    "question": "According to Joule’s Law of Heating, the thermal heat H generated in a conductor is proportional to:",
    "options": [
      "H = I · R · t",
      "H = I² · R · t",
      "H = I · R² · t",
      "H = I / (R · t)"
    ],
    "correct": 1,
    "explanation": "Joule’s Law states that heat energy H = I² · R · t (proportional to square of current, resistance, and time).",
    "conceptKey": "JOULES_LAW_HEATING_FORMULA",
    "correctAnswer": "H = I² · R · t"
  },
  {
    "id": "tn10-sci-ch2-q4",
    "classLevel": "Class 10",
    "class": "10th",
    "subject": "Science",
    "chapter": "Electricity: Ohm’s Law & Joule’s Heating",
    "topic": "SI Unit of Resistance",
    "difficulty": "Easy",
    "question": "What is the SI unit of electrical resistance?",
    "options": [
      "Volt (V)",
      "Ampere (A)",
      "Ohm (Ω)",
      "Coulomb (C)"
    ],
    "correct": 2,
    "explanation": "The SI unit of electrical resistance is the Ohm (Ω), named after Georg Simon Ohm.",
    "conceptKey": "RESISTANCE_SI_UNIT_OHM",
    "correctAnswer": "Ohm (Ω)"
  },
  {
    "id": "tn10-sci-ch2-q5",
    "classLevel": "Class 10",
    "class": "10th",
    "subject": "Science",
    "chapter": "Electricity: Ohm’s Law & Joule’s Heating",
    "topic": "Electrical Power Calculation",
    "difficulty": "Medium",
    "question": "An electric bulb is rated at 220 V and draws a current of 0.5 A. What is its power rating?",
    "options": [
      "110 W",
      "440 W",
      "220 W",
      "55 W"
    ],
    "correct": 0,
    "explanation": "Electrical Power P = V × I = 220 V × 0.5 A = 110 Watts (W).",
    "conceptKey": "ELECTRICAL_POWER_FORMULA",
    "correctAnswer": "110 W"
  },
  {
    "id": "tn10-sci-ch3-q1",
    "classLevel": "Class 10",
    "class": "10th",
    "subject": "Science",
    "chapter": "Heredity & Genetics",
    "topic": "Father of Genetics",
    "difficulty": "Easy",
    "question": "Who is universally regarded as the Father of Modern Genetics for his landmark pea plant experiments?",
    "options": [
      "Charles Darwin",
      "Gregor Johann Mendel",
      "Jean-Baptiste Lamarck",
      "Thomas Hunt Morgan"
    ],
    "correct": 1,
    "explanation": "Gregor Johann Mendel conducted hybridization experiments on garden peas (Pisum sativum) and formulated the basic laws of inheritance.",
    "conceptKey": "MENDEL_FATHER_OF_GENETICS",
    "correctAnswer": "Gregor Johann Mendel"
  },
  {
    "id": "tn10-sci-ch3-q2",
    "classLevel": "Class 10",
    "class": "10th",
    "subject": "Science",
    "chapter": "Heredity & Genetics",
    "topic": "Monohybrid Cross Phenotypic Ratio",
    "difficulty": "Medium",
    "question": "What is the classic phenotypic ratio in the F₂ generation of Mendel’s monohybrid cross?",
    "options": [
      "9 : 3 : 3 : 1",
      "3 : 1",
      "1 : 2 : 1",
      "1 : 1"
    ],
    "correct": 1,
    "explanation": "In the F₂ generation of a monohybrid cross (e.g. Tall vs Dwarf), the visible phenotypic ratio is 3 Tall : 1 Dwarf (3 : 1), while the genotypic ratio is 1 : 2 : 1 (TT : Tt : tt).",
    "conceptKey": "MONOHYBRID_CROSS_PHENOTYPIC_RATIO",
    "correctAnswer": "3 : 1"
  },
  {
    "id": "tn10-sci-ch3-q3",
    "classLevel": "Class 10",
    "class": "10th",
    "subject": "Science",
    "chapter": "Heredity & Genetics",
    "topic": "Human Sex Determination Mechanism",
    "difficulty": "Hard",
    "question": "Which parent chromosome combination scientifically determines the biological sex of a human child?",
    "options": [
      "The ovum from the mother carrying an X chromosome",
      "The sperm from the father carrying either an X or a Y chromosome",
      "The environmental temperature during conception",
      "The age of the mother"
    ],
    "correct": 1,
    "explanation": "Human females produce only X-carrying eggs (XX), whereas human males produce 50% X and 50% Y sperm (XY). Fusion with a Y sperm yields a male (XY), while fusion with an X sperm yields a female (XX).",
    "conceptKey": "SEX_DETERMINATION_CHROMOSOME_XY",
    "correctAnswer": "The sperm from the father carrying either an X or a Y chromosome"
  },
  {
    "id": "tn10-sci-ch3-q4",
    "classLevel": "Class 10",
    "class": "10th",
    "subject": "Science",
    "chapter": "Heredity & Genetics",
    "topic": "Structure of DNA",
    "difficulty": "Easy",
    "question": "Which model describes the molecular structure of DNA proposed by Watson and Crick?",
    "options": [
      "Single strand",
      "Double helix",
      "Triple spiral",
      "Flat sheet"
    ],
    "correct": 1,
    "explanation": "James Watson and Francis Crick described the DNA molecule as a double helix composed of two complementary nucleotide strands.",
    "conceptKey": "DNA_DOUBLE_HELIX",
    "correctAnswer": "Double helix"
  },
  {
    "id": "tn10-sci-ch3-q5",
    "classLevel": "Class 10",
    "class": "10th",
    "subject": "Science",
    "chapter": "Heredity & Genetics",
    "topic": "Dihybrid Cross Ratio",
    "difficulty": "Hard",
    "question": "What is the phenotypic ratio in the F₂ generation of Mendel’s dihybrid cross?",
    "options": [
      "3 : 1",
      "1 : 2 : 1",
      "9 : 3 : 3 : 1",
      "9 : 7"
    ],
    "correct": 2,
    "explanation": "Mendel’s dihybrid cross (tracking two pairs of contrasting traits like seed shape and colour) produces a 9 : 3 : 3 : 1 phenotypic ratio in the F₂ generation.",
    "conceptKey": "DIHYBRID_CROSS_RATIO",
    "correctAnswer": "9 : 3 : 3 : 1"
  },
  {
    "id": "tn10-math-ch1-q1",
    "classLevel": "Class 10",
    "class": "10th",
    "subject": "Mathematics",
    "chapter": "Numbers and Sequences (AP & GP)",
    "topic": "Nth Term of Arithmetic Progression",
    "difficulty": "Easy",
    "question": "What is the formula for the nth term (tn) of an Arithmetic Progression with first term a and common difference d?",
    "options": [
      "tn = a + nd",
      "tn = a + (n - 1)d",
      "tn = a × rⁿ⁻¹",
      "tn = n/2 [2a + d]"
    ],
    "correct": 1,
    "explanation": "The nth term of an AP is given by tn = a + (n - 1)d.",
    "conceptKey": "AP_NTH_TERM_FORMULA",
    "correctAnswer": "tn = a + (n - 1)d"
  },
  {
    "id": "tn10-math-ch1-q2",
    "classLevel": "Class 10",
    "class": "10th",
    "subject": "Mathematics",
    "chapter": "Numbers and Sequences (AP & GP)",
    "topic": "Sum of First n Natural Numbers",
    "difficulty": "Medium",
    "question": "What is the sum of the first 20 natural numbers (1 + 2 + 3 + ... + 20)?",
    "options": [
      "200",
      "210",
      "190",
      "400"
    ],
    "correct": 1,
    "explanation": "Sum formula: S = n(n + 1)/2 = 20(21)/2 = 10 × 21 = 210.",
    "conceptKey": "SUM_FIRST_N_NATURAL_NUMBERS",
    "correctAnswer": "210"
  },
  {
    "id": "tn10-math-ch1-q3",
    "classLevel": "Class 10",
    "class": "10th",
    "subject": "Mathematics",
    "chapter": "Numbers and Sequences (AP & GP)",
    "topic": "Geometric Progression Common Ratio",
    "difficulty": "Hard",
    "question": "In a Geometric Progression (GP), if the 1st term is 3 and the 4th term is 24, what is the common ratio r?",
    "options": [
      "2",
      "3",
      "4",
      "8"
    ],
    "correct": 0,
    "explanation": "In a GP, t₄ = a · r³ => 24 = 3 · r³ => r³ = 8 => r = 2.",
    "conceptKey": "GP_COMMON_RATIO_FORMULA",
    "correctAnswer": "2"
  },
  {
    "id": "tn10-math-ch1-q4",
    "classLevel": "Class 10",
    "class": "10th",
    "subject": "Mathematics",
    "chapter": "Numbers and Sequences (AP & GP)",
    "topic": "Euclid Division Lemma",
    "difficulty": "Easy",
    "question": "According to Euclid’s Division Lemma, for positive integers a and b, a = bq + r, the remainder r must satisfy:",
    "options": [
      "0 < r < b",
      "0 ≤ r < b",
      "0 ≤ r ≤ b",
      "r > b"
    ],
    "correct": 1,
    "explanation": "Euclid’s Division Lemma states that a = bq + r, where 0 ≤ r < b.",
    "conceptKey": "EUCLID_DIVISION_LEMMA",
    "correctAnswer": "0 ≤ r < b"
  },
  {
    "id": "tn10-math-ch1-q5",
    "classLevel": "Class 10",
    "class": "10th",
    "subject": "Mathematics",
    "chapter": "Numbers and Sequences (AP & GP)",
    "topic": "Common Difference of AP",
    "difficulty": "Medium",
    "question": "Find the 10th term of the AP: 5, 9, 13, 17, ...",
    "options": [
      "37",
      "41",
      "45",
      "49"
    ],
    "correct": 1,
    "explanation": "Here a = 5, d = 9 - 5 = 4. t₁₀ = a + (10 - 1)d = 5 + 9(4) = 5 + 36 = 41.",
    "conceptKey": "AP_TERM_CALCULATION",
    "correctAnswer": "41"
  },
  {
    "id": "tn10-math-ch2-q1",
    "classLevel": "Class 10",
    "class": "10th",
    "subject": "Mathematics",
    "chapter": "Algebra: Quadratic Equations",
    "topic": "Quadratic Discriminant & Nature of Roots",
    "difficulty": "Easy",
    "question": "What is the discriminant (Δ) formula for the standard quadratic equation ax² + bx + c = 0?",
    "options": [
      "Δ = b² - 4ac",
      "Δ = b² + 4ac",
      "Δ = 4ac - b²",
      "Δ = -b ± √(4ac)"
    ],
    "correct": 0,
    "explanation": "The discriminant is defined as Δ = b² - 4ac. When Δ > 0, roots are real and unequal; when Δ = 0, roots are real and equal; when Δ < 0, there are no real roots.",
    "conceptKey": "QUADRATIC_DISCRIMINANT",
    "correctAnswer": "Δ = b² - 4ac"
  },
  {
    "id": "tn10-math-ch2-q2",
    "classLevel": "Class 10",
    "class": "10th",
    "subject": "Mathematics",
    "chapter": "Algebra: Quadratic Equations",
    "topic": "Finding Roots by Factoring",
    "difficulty": "Medium",
    "question": "What are the roots of the quadratic equation x² - 5x + 6 = 0?",
    "options": [
      "x = -2, -3",
      "x = 2, 3",
      "x = 1, 6",
      "x = -1, -6"
    ],
    "correct": 1,
    "explanation": "Factorize: (x - 2)(x - 3) = 0 => x = 2 and x = 3.",
    "conceptKey": "FACTORING_QUADRATIC_ROOTS",
    "correctAnswer": "x = 2, 3"
  },
  {
    "id": "tn10-math-ch2-q3",
    "classLevel": "Class 10",
    "class": "10th",
    "subject": "Mathematics",
    "chapter": "Algebra: Quadratic Equations",
    "topic": "Relations Between Roots and Coefficients",
    "difficulty": "Hard",
    "question": "If α and β are the roots of 2x² - 7x + 3 = 0, what is the value of the product of roots (α · β)?",
    "options": [
      "7/2",
      "-7/2",
      "3/2",
      "-3/2"
    ],
    "correct": 2,
    "explanation": "For ax² + bx + c = 0, sum of roots α + β = -b/a, and product of roots α · β = c/a. Here c/a = 3/2.",
    "conceptKey": "ROOTS_COEFFICIENTS_RELATION",
    "correctAnswer": "3/2"
  },
  {
    "id": "tn10-math-ch2-q4",
    "classLevel": "Class 10",
    "class": "10th",
    "subject": "Mathematics",
    "chapter": "Algebra: Quadratic Equations",
    "topic": "Square Root of Polynomials",
    "difficulty": "Medium",
    "question": "What is the square root of the algebraic expression 16x⁴y²?",
    "options": [
      "4x²y",
      "8x²y",
      "4x²y²",
      "16x²y"
    ],
    "correct": 0,
    "explanation": "√(16x⁴y²) = √16 · √(x⁴) · √(y²) = 4x²y.",
    "conceptKey": "SQUARE_ROOT_MONOMIAL",
    "correctAnswer": "4x²y"
  },
  {
    "id": "tn10-math-ch2-q5",
    "classLevel": "Class 10",
    "class": "10th",
    "subject": "Mathematics",
    "chapter": "Algebra: Quadratic Equations",
    "topic": "Quadratic Formula",
    "difficulty": "Hard",
    "question": "What is the quadratic formula to solve for x in ax² + bx + c = 0?",
    "options": [
      "x = (-b ± √(b² - 4ac)) / (2a)",
      "x = (b ± √(b² - 4ac)) / (2a)",
      "x = (-b ± √(b² + 4ac)) / (2a)",
      "x = -b / (2a)"
    ],
    "correct": 0,
    "explanation": "The standard quadratic formula is x = (-b ± √(b² - 4ac)) / (2a).",
    "conceptKey": "QUADRATIC_FORMULA_ROOTS",
    "correctAnswer": "x = (-b ± √(b² - 4ac)) / (2a)"
  },
  {
    "id": "tn10-math-ch3-q1",
    "classLevel": "Class 10",
    "class": "10th",
    "subject": "Mathematics",
    "chapter": "Geometry: Pythagoras & Thales Theorem",
    "topic": "Pythagoras Theorem Application",
    "difficulty": "Easy",
    "question": "In a right-angled triangle, if the two legs are 6 cm and 8 cm, what is the length of the hypotenuse?",
    "options": [
      "14 cm",
      "10 cm",
      "12 cm",
      "48 cm"
    ],
    "correct": 1,
    "explanation": "Pythagoras theorem: Hypotenuse² = 6² + 8² = 36 + 64 = 100 => Hypotenuse = √100 = 10 cm.",
    "conceptKey": "PYTHAGORAS_THEOREM_CALCULATION",
    "correctAnswer": "10 cm"
  },
  {
    "id": "tn10-math-ch3-q2",
    "classLevel": "Class 10",
    "class": "10th",
    "subject": "Mathematics",
    "chapter": "Geometry: Pythagoras & Thales Theorem",
    "topic": "Thales / Basic Proportionality Theorem",
    "difficulty": "Medium",
    "question": "In △ABC, line DE is drawn parallel to BC intersecting AB at D and AC at E. If AD/DB = 2/3 and AE = 4 cm, what is EC?",
    "options": [
      "5 cm",
      "6 cm",
      "8 cm",
      "7.5 cm"
    ],
    "correct": 1,
    "explanation": "By Thales Theorem: AD / DB = AE / EC => 2 / 3 = 4 / EC => 2 · EC = 12 => EC = 6 cm.",
    "conceptKey": "THALES_THEOREM_CALCULATION",
    "correctAnswer": "6 cm"
  },
  {
    "id": "tn10-math-ch3-q3",
    "classLevel": "Class 10",
    "class": "10th",
    "subject": "Mathematics",
    "chapter": "Geometry: Pythagoras & Thales Theorem",
    "topic": "Angle Bisector Theorem",
    "difficulty": "Hard",
    "question": "In △ABC, AD is the internal bisector of ∠A meeting BC at D. If AB = 6 cm, AC = 8 cm, and BD = 3 cm, what is DC?",
    "options": [
      "3 cm",
      "4 cm",
      "5 cm",
      "6 cm"
    ],
    "correct": 1,
    "explanation": "By Angle Bisector Theorem: BD / DC = AB / AC => 3 / DC = 6 / 8 => 3 / DC = 3 / 4 => DC = 4 cm.",
    "conceptKey": "ANGLE_BISECTOR_THEOREM",
    "correctAnswer": "4 cm"
  },
  {
    "id": "tn10-math-ch3-q4",
    "classLevel": "Class 10",
    "class": "10th",
    "subject": "Mathematics",
    "chapter": "Geometry: Pythagoras & Thales Theorem",
    "topic": "Similar Triangles Ratio of Areas",
    "difficulty": "Medium",
    "question": "If two triangles are similar and the ratio of their corresponding sides is 3 : 5, what is the ratio of their areas?",
    "options": [
      "3 : 5",
      "6 : 10",
      "9 : 25",
      "27 : 125"
    ],
    "correct": 2,
    "explanation": "The ratio of areas of two similar triangles is equal to the square of the ratio of their corresponding sides: (3/5)² = 9 / 25.",
    "conceptKey": "SIMILAR_TRIANGLES_AREA_RATIO",
    "correctAnswer": "9 : 25"
  },
  {
    "id": "tn10-math-ch3-q5",
    "classLevel": "Class 10",
    "class": "10th",
    "subject": "Mathematics",
    "chapter": "Geometry: Pythagoras & Thales Theorem",
    "topic": "Tangent to a Circle",
    "difficulty": "Easy",
    "question": "What is the angle between a tangent to a circle and the radius drawn through the point of contact?",
    "options": [
      "45°",
      "60°",
      "90° (Perpendicular)",
      "180°"
    ],
    "correct": 2,
    "explanation": "A tangent to a circle is always perpendicular (at an angle of 90°) to the radius drawn through the point of contact.",
    "conceptKey": "TANGENT_RADIUS_PERPENDICULAR",
    "correctAnswer": "90° (Perpendicular)"
  }
];

  // Helper utility functions for filtering questions
  window.TNQuizData = {
    allQuestions: TNQuizQuestionBank,

    getAll() {
      return TNQuizQuestionBank;
    },

    matchClass(c1, c2) {
      if (!c1 || !c2) return false;
      return normalizeClass(c1) === normalizeClass(c2);
    },

    getQuestions(filter = {}) {
      return TNQuizQuestionBank.filter(q => {
        if (filter.class && !this.matchClass(q.class, filter.class) && !this.matchClass(q.classLevel, filter.class)) {
          return false;
        }
        if (filter.classLevel && !this.matchClass(q.classLevel, filter.classLevel) && !this.matchClass(q.class, filter.classLevel)) {
          return false;
        }
        if (filter.subject && q.subject.toLowerCase() !== filter.subject.toLowerCase()) {
          return false;
        }
        if (filter.chapter && filter.chapter !== 'ALL' && q.chapter !== filter.chapter) {
          return false;
        }
        if (filter.topic && filter.topic !== 'ALL' && q.topic !== filter.topic) {
          return false;
        }
        if (filter.difficulty && filter.difficulty !== 'ALL' && q.difficulty !== filter.difficulty) {
          return false;
        }
        return true;
      });
    },

    getAvailableClasses() {
      return ['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'];
    },

    getSubjectsForClass(classLevel) {
      const qs = this.getQuestions({ classLevel });
      return [...new Set(qs.map(q => q.subject))];
    },

    getChapters(classLevel, subject) {
      const filtered = this.getQuestions({ classLevel, subject });
      return [...new Set(filtered.map(q => q.chapter))];
    },

    getChapterDetails(classLevel, subject) {
      const chapters = this.getChapters(classLevel, subject);
      return chapters.map(ch => {
        const qs = this.getQuestions({ classLevel, subject, chapter: ch });
        return {
          chapter: ch,
          count: qs.length,
          questionCount: qs.length,
          topics: [...new Set(qs.map(q => q.topic))],
          difficulties: [...new Set(qs.map(q => q.difficulty))]
        };
      }).filter(c => c.count > 0);
    },

    getTopics(classLevel, subject, chapter) {
      const filtered = this.getQuestions({ classLevel, subject, chapter });
      return [...new Set(filtered.map(q => q.topic))];
    },

    getQuestionCount(classLevel, subject, chapter = 'ALL') {
      return this.getQuestions({ classLevel, subject, chapter }).length;
    },

    getQuestionById(id) {
      return TNQuizQuestionBank.find(q => q.id === id) || null;
    }
  };

  console.log(`[TNQuizData] Initialized ${TNQuizQuestionBank.length} verified Tamil Nadu Samacheer Kalvi quiz questions across Classes 6–10.`);
})(typeof window !== 'undefined' ? window : global);
