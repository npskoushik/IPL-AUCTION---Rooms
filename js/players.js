// ============================================================
// IPL AUCTION 2026 — MASTER DATA
// Amounts in Lakhs. 0.5Cr=50, 50L=50, 75L=75, 1Cr=100,
// 1.5Cr=150, 2Cr=200, 5Cr=500
// ============================================================

// ─── LEGEND IDs (10 players) ───
const LEGEND_IDS = new Set([
  'leg_01','leg_02','leg_03','leg_04','leg_05',
  'leg_06','leg_07','leg_08','leg_09','leg_10'
]);

const PLAYERS_DATA = [
  // ─── BATSMEN (43 players — exact Excel order) ───
  { id:'bat_01', name:'Shikhar Dhawan',      category:'Batsman',      rating:82,  basePrice:50,  uncapped:false, foreign:false },
  { id:'bat_02', name:'Steve Smith',         category:'Batsman',      rating:81,  basePrice:50,  uncapped:false, foreign:true  },
  { id:'bat_03', name:'Karun Nair',          category:'Batsman',      rating:70,  basePrice:50,  uncapped:false, foreign:false },
  { id:'bat_04', name:'Dewald Brevis',       category:'Batsman',      rating:80,  basePrice:50,  uncapped:false, foreign:true  },
  { id:'bat_05', name:'Shreyas Iyer',        category:'Batsman',      rating:90,  basePrice:200, uncapped:false, foreign:false },
  { id:'bat_06', name:'Jason Roy',           category:'Batsman',      rating:82,  basePrice:150, uncapped:false, foreign:true  },
  { id:'bat_07', name:'Yashasvi Jaiswal',    category:'Batsman',      rating:73,  basePrice:50,  uncapped:false, foreign:false },
  { id:'bat_08', name:'Rachin Ravindra',     category:'Batsman',      rating:87,  basePrice:150, uncapped:false, foreign:true  },
  { id:'bat_09', name:'Shubman Gill',        category:'Batsman',      rating:89,  basePrice:200, uncapped:false, foreign:false },
  { id:'bat_10', name:'David Miller',        category:'Batsman',      rating:84,  basePrice:100, uncapped:false, foreign:true  },
  { id:'bat_11', name:'Nitish Rana',         category:'Batsman',      rating:69,  basePrice:50,  uncapped:false, foreign:false },
  { id:'bat_12', name:'Aiden Markram',       category:'Batsman',      rating:80,  basePrice:100, uncapped:false, foreign:true  },
  { id:'bat_13', name:'Rahul Tripathi',      category:'Batsman',      rating:70,  basePrice:50,  uncapped:false, foreign:false },
  { id:'bat_14', name:'Ramandeep Singh',     category:'Batsman',      rating:75,  basePrice:50,  uncapped:false, foreign:false },
  { id:'bat_15', name:'Rilee Rossouw',       category:'Batsman',      rating:75,  basePrice:50,  uncapped:false, foreign:true  },
  { id:'bat_16', name:'Sai Sudharsan',       category:'Batsman',      rating:83,  basePrice:100, uncapped:false, foreign:false },
  { id:'bat_17', name:'Kane Williamson',     category:'Batsman',      rating:90,  basePrice:200, uncapped:false, foreign:true  },
  { id:'bat_18', name:'Cheteshwar Pujara',   category:'Batsman',      rating:65,  basePrice:50,  uncapped:false, foreign:false },
  { id:'bat_19', name:'Manish Pandey',       category:'Batsman',      rating:76,  basePrice:50,  uncapped:false, foreign:false },
  { id:'bat_20', name:'David Warner',        category:'Batsman',      rating:97,  basePrice:200, uncapped:false, foreign:true  },
  { id:'bat_21', name:'Mayank Agarwal',      category:'Batsman',      rating:79,  basePrice:50,  uncapped:false, foreign:false },
  { id:'bat_22', name:'Faf du Plessis',      category:'Batsman',      rating:91,  basePrice:200, uncapped:false, foreign:true  },
  { id:'bat_23', name:'Prithvi Shaw',        category:'Batsman',      rating:73,  basePrice:50,  uncapped:false, foreign:false },
  { id:'bat_24', name:'Heinrich Klaasen',    category:'Batsman',      rating:92,  basePrice:200, uncapped:false, foreign:true  },
  { id:'bat_25', name:'Ajinkya Rahane',      category:'Batsman',      rating:82,  basePrice:100, uncapped:false, foreign:false },
  { id:'bat_26', name:'Evin Lewis',          category:'Batsman',      rating:78,  basePrice:50,  uncapped:false, foreign:true  },
  { id:'bat_27', name:'Shimron Hetmyer',     category:'Batsman',      rating:80,  basePrice:100, uncapped:false, foreign:true  },
  { id:'bat_28', name:'Rohit Sharma',        category:'Batsman',      rating:99,  basePrice:500, uncapped:false, foreign:false },
  { id:'bat_29', name:'Sarfaraz Khan',       category:'Batsman',      rating:70,  basePrice:50,  uncapped:false, foreign:false },
  { id:'bat_30', name:'Travis Head',         category:'Batsman',      rating:89,  basePrice:200, uncapped:false, foreign:true  },
  { id:'bat_31', name:'Abhishek Sharma',     category:'Batsman',      rating:90,  basePrice:200, uncapped:false, foreign:false },
  { id:'bat_32', name:'Phil Salt',           category:'Batsman',      rating:86,  basePrice:100, uncapped:false, foreign:true  },
  { id:'bat_33', name:'Tilak Varma',         category:'Batsman',      rating:85,  basePrice:100, uncapped:false, foreign:false },
  { id:'bat_34', name:'Ruturaj Gaikwad',     category:'Batsman',      rating:84,  basePrice:100, uncapped:false, foreign:false },
  { id:'bat_35', name:'Virat Kohli',         category:'Batsman',      rating:99,  basePrice:500, uncapped:false, foreign:false },
  { id:'bat_36', name:'Riyan Parag',         category:'Batsman',      rating:69,  basePrice:50,  uncapped:false, foreign:false },
  { id:'bat_37', name:'Suryakumar Yadav',    category:'Batsman',      rating:96,  basePrice:200, uncapped:false, foreign:false },
  { id:'bat_38', name:'Rajat Patidar',       category:'Batsman',      rating:86,  basePrice:100, uncapped:false, foreign:false },
  { id:'bat_39', name:'Devdutt Padikkal',    category:'Batsman',      rating:70,  basePrice:50,  uncapped:false, foreign:false },
  { id:'bat_40', name:'Rinku Singh',         category:'Batsman',      rating:79,  basePrice:50,  uncapped:false, foreign:false },
  { id:'bat_41', name:'Joe Root',            category:'Batsman',      rating:86,  basePrice:200, uncapped:false, foreign:true  },
  { id:'bat_42', name:'Harry Brook',         category:'Batsman',      rating:83,  basePrice:150, uncapped:false, foreign:true  },
  { id:'bat_43', name:'Devon Conway',        category:'Batsman',      rating:88,  basePrice:200, uncapped:false, foreign:true  },

  // ─── WICKET KEEPERS (24 players — exact Excel order) ───
  { id:'wk_01', name:'Dhruv Jurel',          category:'Wicket Keeper', rating:69,  basePrice:50,  uncapped:false, foreign:false },
  { id:'wk_02', name:'Jos Buttler',          category:'Wicket Keeper', rating:97,  basePrice:200, uncapped:false, foreign:true  },
  { id:'wk_03', name:'Tom Latham',           category:'Wicket Keeper', rating:65,  basePrice:50,  uncapped:false, foreign:true  },
  { id:'wk_04', name:'Sam Billings',         category:'Wicket Keeper', rating:67,  basePrice:50,  uncapped:false, foreign:true  },
  { id:'wk_05', name:'KS Bharat',            category:'Wicket Keeper', rating:70,  basePrice:50,  uncapped:false, foreign:false },
  { id:'wk_06', name:'Tim Seifert',          category:'Wicket Keeper', rating:72,  basePrice:100, uncapped:false, foreign:true  },
  { id:'wk_07', name:'Jitesh Sharma',        category:'Wicket Keeper', rating:70,  basePrice:50,  uncapped:false, foreign:false },
  { id:'wk_08', name:'Jonny Bairstow',       category:'Wicket Keeper', rating:92,  basePrice:200, uncapped:false, foreign:true  },
  { id:'wk_09', name:'Wriddhiman Saha',      category:'Wicket Keeper', rating:72,  basePrice:50,  uncapped:false, foreign:false },
  { id:'wk_10', name:'Matthew Wade',         category:'Wicket Keeper', rating:70,  basePrice:50,  uncapped:false, foreign:true  },
  { id:'wk_11', name:'Sanju Samson',         category:'Wicket Keeper', rating:90,  basePrice:200, uncapped:false, foreign:false },
  { id:'wk_12', name:'Nicholas Pooran',      category:'Wicket Keeper', rating:86,  basePrice:100, uncapped:false, foreign:true  },
  { id:'wk_13', name:'KL Rahul',             category:'Wicket Keeper', rating:95,  basePrice:200, uncapped:false, foreign:false },
  { id:'wk_14', name:'Ishan Kishan',         category:'Wicket Keeper', rating:88,  basePrice:150, uncapped:false, foreign:false },
  { id:'wk_15', name:'Rishabh Pant',         category:'Wicket Keeper', rating:89,  basePrice:150, uncapped:false, foreign:false },
  { id:'wk_16', name:'Quinton de Kock',      category:'Wicket Keeper', rating:90,  basePrice:200, uncapped:false, foreign:true  },
  { id:'wk_17', name:'Ben Foakes',           category:'Wicket Keeper', rating:79,  basePrice:100, uncapped:false, foreign:true  },
  { id:'wk_18', name:'Jamie Smith',          category:'Wicket Keeper', rating:80,  basePrice:100, uncapped:false, foreign:true  },
  { id:'wk_19', name:'Josh Inglis',          category:'Wicket Keeper', rating:84,  basePrice:150, uncapped:false, foreign:true  },
  { id:'wk_20', name:'Alex Carey',           category:'Wicket Keeper', rating:80,  basePrice:100, uncapped:false, foreign:true  },
  { id:'wk_21', name:'Kusal Perera',         category:'Wicket Keeper', rating:79,  basePrice:50,  uncapped:false, foreign:true  },
  { id:'wk_22', name:'Kusal Mendis',         category:'Wicket Keeper', rating:78,  basePrice:50,  uncapped:false, foreign:true  },
  { id:'wk_23', name:'Litton Das',           category:'Wicket Keeper', rating:75,  basePrice:50,  uncapped:false, foreign:true  },
  { id:'wk_24', name:'Mushfiqur Rahim',      category:'Wicket Keeper', rating:76,  basePrice:50,  uncapped:false, foreign:true  },
  { id:'wk_25', name:'Shai Hope',            category:'Wicket Keeper', rating:84,  basePrice:100, uncapped:false, foreign:true  },

  // ─── BOWLERS (54 players — exact Excel order) ───
  { id:'bwl_01', name:'Mohammed Shami',      category:'Bowler',        rating:90,  basePrice:150, uncapped:false, foreign:false },
  { id:'bwl_02', name:'Mukesh Kumar',        category:'Bowler',        rating:75,  basePrice:50,  uncapped:false, foreign:false },
  { id:'bwl_03', name:'Rashid Khan',         category:'Bowler',        rating:96,  basePrice:200, uncapped:false, foreign:true  },
  { id:'bwl_04', name:'Mujeeb Ur Rahman',    category:'Bowler',        rating:81,  basePrice:100, uncapped:false, foreign:true  },
  { id:'bwl_05', name:'Matheesha Pathirana', category:'Bowler',        rating:81,  basePrice:100, uncapped:false, foreign:true  },
  { id:'bwl_06', name:'Noor Ahmad',          category:'Bowler',        rating:83,  basePrice:100, uncapped:false, foreign:true  },
  { id:'bwl_07', name:'Adam Zampa',          category:'Bowler',        rating:86,  basePrice:100, uncapped:false, foreign:true  },
  { id:'bwl_08', name:'Bhuvneshwar Kumar',   category:'Bowler',        rating:93,  basePrice:150, uncapped:false, foreign:false },
  { id:'bwl_09', name:'Avesh Khan',          category:'Bowler',        rating:77,  basePrice:50,  uncapped:false, foreign:false },
  { id:'bwl_10', name:'Mark Wood',           category:'Bowler',        rating:83,  basePrice:100, uncapped:false, foreign:true  },
  { id:'bwl_11', name:'Daniel Sams',         category:'Bowler',        rating:71,  basePrice:50,  uncapped:false, foreign:true  },
  { id:'bwl_12', name:'Jofra Archer',        category:'Bowler',        rating:95,  basePrice:200, uncapped:false, foreign:true  },
  { id:'bwl_13', name:'Chris Jordan',        category:'Bowler',        rating:75,  basePrice:50,  uncapped:false, foreign:true  },
  { id:'bwl_14', name:'Umran Malik',         category:'Bowler',        rating:80,  basePrice:100, uncapped:false, foreign:false },
  { id:'bwl_15', name:'Gerald Coetzee',      category:'Bowler',        rating:88,  basePrice:150, uncapped:false, foreign:true  },
  { id:'bwl_16', name:'Gus Atkinson',        category:'Bowler',        rating:79,  basePrice:100, uncapped:false, foreign:true  },
  { id:'bwl_17', name:'Arshdeep Singh',      category:'Bowler',        rating:89,  basePrice:150, uncapped:false, foreign:false },
  { id:'bwl_18', name:'Trent Boult',         category:'Bowler',        rating:95,  basePrice:200, uncapped:false, foreign:true  },
  { id:'bwl_19', name:'Kuldeep Sen',         category:'Bowler',        rating:69,  basePrice:50,  uncapped:false, foreign:false },
  { id:'bwl_20', name:'Mohammed Siraj',      category:'Bowler',        rating:89,  basePrice:150, uncapped:false, foreign:false },
  { id:'bwl_21', name:'Lockie Ferguson',     category:'Bowler',        rating:88,  basePrice:150, uncapped:false, foreign:true  },
  { id:'bwl_22', name:'Shivam Mavi',         category:'Bowler',        rating:65,  basePrice:50,  uncapped:false, foreign:false },
  { id:'bwl_23', name:'T Natarajan',         category:'Bowler',        rating:80,  basePrice:50,  uncapped:false, foreign:false },
  { id:'bwl_24', name:'Prasidh Krishna',     category:'Bowler',        rating:69,  basePrice:50,  uncapped:false, foreign:false },
  { id:'bwl_25', name:'Navdeep Saini',       category:'Bowler',        rating:68,  basePrice:50,  uncapped:false, foreign:false },
  { id:'bwl_26', name:'Umesh Yadav',         category:'Bowler',        rating:76,  basePrice:50,  uncapped:false, foreign:false },
  { id:'bwl_27', name:'Pat Cummins',         category:'Bowler',        rating:94,  basePrice:200, uncapped:false, foreign:true  },
  { id:'bwl_28', name:'Ravi Bishnoi',        category:'Bowler',        rating:80,  basePrice:50,  uncapped:false, foreign:false },
  { id:'bwl_29', name:'Josh Hazlewood',      category:'Bowler',        rating:92,  basePrice:100, uncapped:false, foreign:true  },
  { id:'bwl_30', name:'Adil Rashid',         category:'Bowler',        rating:84,  basePrice:100, uncapped:false, foreign:true  },
  { id:'bwl_31', name:'Shahbaz Nadeem',      category:'Bowler',        rating:60,  basePrice:50,  uncapped:false, foreign:false },
  { id:'bwl_32', name:'Kagiso Rabada',       category:'Bowler',        rating:89,  basePrice:150, uncapped:false, foreign:true  },
  { id:'bwl_33', name:'Harshit Rana',        category:'Bowler',        rating:78,  basePrice:50,  uncapped:false, foreign:false },
  { id:'bwl_34', name:'Anrich Nortje',       category:'Bowler',        rating:89,  basePrice:150, uncapped:false, foreign:true  },
  { id:'bwl_35', name:'Yash Dayal',          category:'Bowler',        rating:69,  basePrice:50,  uncapped:false, foreign:false },
  { id:'bwl_36', name:'Kuldeep Yadav',       category:'Bowler',        rating:93,  basePrice:200, uncapped:false, foreign:false },
  { id:'bwl_37', name:'Lungi Ngidi',         category:'Bowler',        rating:69,  basePrice:50,  uncapped:false, foreign:true  },
  { id:'bwl_38', name:'Ravichandran Ashwin', category:'Bowler',        rating:90,  basePrice:150, uncapped:false, foreign:false },
  { id:'bwl_39', name:'Deepak Chahar',       category:'Bowler',        rating:84,  basePrice:150, uncapped:false, foreign:false },
  { id:'bwl_40', name:'Nandre Burger',       category:'Bowler',        rating:80,  basePrice:100, uncapped:false, foreign:true  },
  { id:'bwl_41', name:'Reece Topley',        category:'Bowler',        rating:81,  basePrice:100, uncapped:false, foreign:true  },
  { id:'bwl_42', name:'Jasprit Bumrah',      category:'Bowler',        rating:100, basePrice:500, uncapped:false, foreign:false },
  { id:'bwl_43', name:'Mohit Sharma',        category:'Bowler',        rating:80,  basePrice:100, uncapped:false, foreign:false },
  { id:'bwl_44', name:'Sandeep Sharma',      category:'Bowler',        rating:81,  basePrice:100, uncapped:false, foreign:false },
  { id:'bwl_45', name:'Khaleel Ahmed',       category:'Bowler',        rating:83,  basePrice:100, uncapped:false, foreign:false },
  { id:'bwl_46', name:'Chetan Sakariya',     category:'Bowler',        rating:78,  basePrice:75,  uncapped:false, foreign:false },
  { id:'bwl_47', name:'Luke Wood',           category:'Bowler',        rating:76,  basePrice:100, uncapped:false, foreign:true  },
  { id:'bwl_48', name:'Alzarri Joseph',      category:'Bowler',        rating:82,  basePrice:150, uncapped:false, foreign:true  },
  { id:'bwl_49', name:'Obed McCoy',          category:'Bowler',        rating:79,  basePrice:100, uncapped:false, foreign:true  },
  { id:'bwl_50', name:'Mitchell Starc',      category:'Bowler',        rating:97,  basePrice:200, uncapped:false, foreign:true  },
  { id:'bwl_51', name:'Akeal Hosein',        category:'Bowler',        rating:80,  basePrice:100, uncapped:false, foreign:true  },
  { id:'bwl_52', name:'Tim Southee',         category:'Bowler',        rating:86,  basePrice:150, uncapped:false, foreign:true  },
  { id:'bwl_53', name:'Ish Sodhi',           category:'Bowler',        rating:76,  basePrice:100, uncapped:false, foreign:true  },
  { id:'bwl_54', name:'Maheesh Theekshana',  category:'Bowler',        rating:75,  basePrice:150, uncapped:false, foreign:true  },
  { id:'bwl_55', name:'Yuzvendra Chahal',    category:'Bowler',        rating:94,  basePrice:200, uncapped:false, foreign:false },

  // ─── ALL ROUNDERS (36 players — exact Excel order) ───
  { id:'ar_01', name:'Mitchell Marsh',       category:'All Rounder',   rating:72,  basePrice:100, uncapped:false, foreign:true  },
  { id:'ar_02', name:'Washington Sundar',    category:'All Rounder',   rating:80,  basePrice:100, uncapped:false, foreign:false },
  { id:'ar_03', name:'Mitchell Santner',     category:'All Rounder',   rating:93,  basePrice:200, uncapped:false, foreign:true  },
  { id:'ar_04', name:'Chris Woakes',         category:'All Rounder',   rating:87,  basePrice:200, uncapped:false, foreign:true  },
  { id:'ar_05', name:'Jason Holder',         category:'All Rounder',   rating:72,  basePrice:50,  uncapped:false, foreign:true  },
  { id:'ar_06', name:'Ravindra Jadeja',      category:'All Rounder',   rating:96,  basePrice:200, uncapped:false, foreign:false },
  { id:'ar_07', name:'Axar Patel',           category:'All Rounder',   rating:87,  basePrice:150, uncapped:false, foreign:false },
  { id:'ar_08', name:'Krunal Pandya',        category:'All Rounder',   rating:83,  basePrice:100, uncapped:false, foreign:false },
  { id:'ar_09', name:'Sam Curran',           category:'All Rounder',   rating:92,  basePrice:200, uncapped:false, foreign:true  },
  { id:'ar_10', name:'Moeen Ali',            category:'All Rounder',   rating:88,  basePrice:150, uncapped:false, foreign:true  },
  { id:'ar_11', name:'Deepak Hooda',         category:'All Rounder',   rating:78,  basePrice:75,  uncapped:false, foreign:false },
  { id:'ar_12', name:'Glenn Maxwell',        category:'All Rounder',   rating:94,  basePrice:200, uncapped:false, foreign:true  },
  { id:'ar_13', name:'Andre Russell',        category:'All Rounder',   rating:97,  basePrice:200, uncapped:false, foreign:true  },
  { id:'ar_14', name:'Cameron Green',        category:'All Rounder',   rating:89,  basePrice:150, uncapped:false, foreign:true  },
  { id:'ar_15', name:'Ben Stokes',           category:'All Rounder',   rating:95,  basePrice:200, uncapped:false, foreign:true  },
  { id:'ar_16', name:'Marcus Stoinis',       category:'All Rounder',   rating:88,  basePrice:150, uncapped:false, foreign:true  },
  { id:'ar_17', name:'Shivam Dube',          category:'All Rounder',   rating:82,  basePrice:100, uncapped:false, foreign:false },
  { id:'ar_18', name:'Hardik Pandya',        category:'All Rounder',   rating:95,  basePrice:200, uncapped:false, foreign:false },
  { id:'ar_19', name:'Venkatesh Iyer',       category:'All Rounder',   rating:84,  basePrice:100, uncapped:false, foreign:false },
  { id:'ar_20', name:'Rahul Tewatia',        category:'All Rounder',   rating:80,  basePrice:75,  uncapped:false, foreign:false },
  { id:'ar_21', name:'Wanindu Hasaranga',    category:'All Rounder',   rating:92,  basePrice:200, uncapped:false, foreign:true  },
  { id:'ar_22', name:'Shakib Al Hasan',      category:'All Rounder',   rating:85,  basePrice:200, uncapped:false, foreign:true  },
  { id:'ar_23', name:'Marco Jansen',         category:'All Rounder',   rating:90,  basePrice:150, uncapped:false, foreign:true  },
  { id:'ar_24', name:'Glenn Phillips',       category:'All Rounder',   rating:88,  basePrice:150, uncapped:false, foreign:true  },
  { id:'ar_25', name:'Michael Bracewell',    category:'All Rounder',   rating:85,  basePrice:150, uncapped:false, foreign:true  },
  { id:'ar_26', name:'Jimmy Neesham',        category:'All Rounder',   rating:82,  basePrice:150, uncapped:false, foreign:true  },
  { id:'ar_27', name:'Kyle Mayers',          category:'All Rounder',   rating:80,  basePrice:150, uncapped:false, foreign:true  },
  { id:'ar_28', name:'Romario Shepherd',     category:'All Rounder',   rating:87,  basePrice:150, uncapped:false, foreign:true  },
  { id:'ar_29', name:'Dasun Shanaka',        category:'All Rounder',   rating:86,  basePrice:150, uncapped:false, foreign:true  },
  { id:'ar_30', name:'Mohammad Nabi',        category:'All Rounder',   rating:88,  basePrice:150, uncapped:false, foreign:true  },
  { id:'ar_31', name:'Azmatullah Omarzai',   category:'All Rounder',   rating:86,  basePrice:150, uncapped:false, foreign:true  },
  { id:'ar_32', name:'Roston Chase',         category:'All Rounder',   rating:85,  basePrice:100, uncapped:false, foreign:true  },
  { id:'ar_33', name:'Andile Phehlukwayo',   category:'All Rounder',   rating:84,  basePrice:100, uncapped:false, foreign:true  },
  { id:'ar_34', name:'Wiaan Mulder',         category:'All Rounder',   rating:83,  basePrice:100, uncapped:false, foreign:true  },
  { id:'ar_35', name:'Dhananjaya de Silva',  category:'All Rounder',   rating:84,  basePrice:100, uncapped:false, foreign:true  },
  { id:'ar_36', name:'Liam Livingstone',     category:'All Rounder',   rating:90,  basePrice:200, uncapped:false, foreign:true  },

  // ─── UNCAPPED PLAYERS (32 players — exact Excel order) ───
  { id:'uc_01', name:'Anuj Rawat',           category:'Wicket Keeper', rating:77,  basePrice:20,  uncapped:true,  foreign:false },
  { id:'uc_02', name:'Robin Minz',           category:'Wicket Keeper', rating:72,  basePrice:20,  uncapped:true,  foreign:false },
  { id:'uc_03', name:'Tushar Deshpande',     category:'Bowler',        rating:72,  basePrice:20,  uncapped:true,  foreign:false },
  { id:'uc_04', name:'Arjun Tendulkar',      category:'All Rounder',   rating:65,  basePrice:20,  uncapped:true,  foreign:false },
  { id:'uc_05', name:'Vishnu Vinod',         category:'Wicket Keeper', rating:73,  basePrice:20,  uncapped:true,  foreign:false },
  { id:'uc_06', name:'Akash Madhwal',        category:'Bowler',        rating:81,  basePrice:20,  uncapped:true,  foreign:false },
  { id:'uc_07', name:'Harpreet Brar',        category:'Bowler',        rating:73,  basePrice:20,  uncapped:true,  foreign:false },
  { id:'uc_08', name:'Swapnil Singh',        category:'Bowler',        rating:65,  basePrice:20,  uncapped:true,  foreign:false },
  { id:'uc_09', name:'Anukul Roy',           category:'Bowler',        rating:63,  basePrice:20,  uncapped:true,  foreign:false },
  { id:'uc_10', name:'Abdul Samad',          category:'All Rounder',   rating:79,  basePrice:20,  uncapped:true,  foreign:false },
  { id:'uc_11', name:'Priyam Garg',          category:'Batsman',       rating:67,  basePrice:20,  uncapped:true,  foreign:false },
  { id:'uc_12', name:'Shashank Singh',       category:'Batsman',       rating:75,  basePrice:20,  uncapped:true,  foreign:false },
  { id:'uc_13', name:'Rashik Dar',           category:'Bowler',        rating:78,  basePrice:20,  uncapped:true,  foreign:false },
  { id:'uc_14', name:'Anshul Kamboj',        category:'Bowler',        rating:70,  basePrice:20,  uncapped:true,  foreign:false },
  { id:'uc_15', name:'Prabhsimran Singh',    category:'Batsman',       rating:82,  basePrice:20,  uncapped:true,  foreign:false },
  { id:'uc_16', name:'Angkrish Raghuvanshi', category:'Batsman',       rating:80,  basePrice:50,  uncapped:true,  foreign:false },
  { id:'uc_17', name:'Simarjeet Singh',      category:'All Rounder',   rating:62,  basePrice:20,  uncapped:true,  foreign:false },
  { id:'uc_18', name:'Vaibhav Suryavanshi',  category:'Batsman',       rating:80,  basePrice:20,  uncapped:true,  foreign:false },
  { id:'uc_19', name:'Ayush Mhatre',         category:'Batsman',       rating:77,  basePrice:20,  uncapped:true,  foreign:false },
  { id:'uc_20', name:'Nehal Wadhera',        category:'Batsman',       rating:82,  basePrice:50,  uncapped:true,  foreign:false },
  { id:'uc_21', name:'Uday Saharan',         category:'Batsman',       rating:69,  basePrice:20,  uncapped:true,  foreign:false },
  { id:'uc_22', name:'Yash Dhull',           category:'Batsman',       rating:79,  basePrice:20,  uncapped:true,  foreign:false },
  { id:'uc_23', name:'Kartik Sharma',        category:'Batsman',       rating:79,  basePrice:20,  uncapped:true,  foreign:false },
  { id:'uc_24', name:'Mangesh Yadav',        category:'Bowler',        rating:76,  basePrice:20,  uncapped:true,  foreign:false },
  { id:'uc_25', name:'Satvik Deswal',        category:'Bowler',        rating:78,  basePrice:20,  uncapped:true,  foreign:false },
  { id:'uc_26', name:'MS Dhoni',             category:'Wicket Keeper', rating:98,  basePrice:200, uncapped:true,  foreign:false },
  { id:'uc_27', name:'Vaibhav Arora',        category:'Bowler',        rating:78,  basePrice:20,  uncapped:true,  foreign:false },
  { id:'uc_28', name:'Mayank Yadav',         category:'Bowler',        rating:76,  basePrice:20,  uncapped:true,  foreign:false },
  { id:'uc_29', name:'Upendra Yadav',        category:'Wicket Keeper', rating:76,  basePrice:20,  uncapped:true,  foreign:false },
  { id:'uc_30', name:'Luvnith Sisodia',      category:'Wicket Keeper', rating:75,  basePrice:20,  uncapped:true,  foreign:false },
  { id:'uc_31', name:'Narayan Jagadeesan',   category:'Wicket Keeper', rating:77,  basePrice:50,  uncapped:true,  foreign:false },
  { id:'uc_32', name:'Sameer Rizvi',         category:'Batsman',       rating:80,  basePrice:50,  uncapped:true,  foreign:false },

  // ─── LEGENDS (10 players) ───
  { id:'leg_01', name:'Sachin Tendulkar',    category:'Batsman',       rating:100, basePrice:500, uncapped:false, foreign:false },
  { id:'leg_02', name:'Ricky Ponting',       category:'Batsman',       rating:99,  basePrice:500, uncapped:false, foreign:true  },
  { id:'leg_03', name:'Brian Lara',          category:'Batsman',       rating:98,  basePrice:500, uncapped:false, foreign:true  },
  { id:'leg_04', name:'AB de Villiers',      category:'Wicket Keeper', rating:97,  basePrice:500, uncapped:false, foreign:true  },
  { id:'leg_05', name:'Adam Gilchrist',      category:'Wicket Keeper', rating:97,  basePrice:500, uncapped:false, foreign:true  },
  { id:'leg_06', name:'Kumar Sangakkara',    category:'Wicket Keeper', rating:96,  basePrice:500, uncapped:false, foreign:true  },
  { id:'leg_07', name:'Jacques Kallis',      category:'All Rounder',   rating:97,  basePrice:500, uncapped:false, foreign:true  },
  { id:'leg_08', name:'Yuvraj Singh',        category:'All Rounder',   rating:96,  basePrice:500, uncapped:false, foreign:false },
  { id:'leg_09', name:'Dale Steyn',          category:'Bowler',        rating:97,  basePrice:500, uncapped:false, foreign:true  },
  { id:'leg_10', name:'Muttiah Muralitharan',category:'Bowler',        rating:97,  basePrice:500, uncapped:false, foreign:true  },
];

// Pool order: BAT → WK → BOWLERS → AR → UNCAPPED → LEGENDS
function getOrderedPool() {
  const r = [];
  PLAYERS_DATA.filter(p=>p.category==='Batsman'&&!p.uncapped&&!LEGEND_IDS.has(p.id)).forEach(p=>r.push(p.id));
  PLAYERS_DATA.filter(p=>p.category==='Wicket Keeper'&&!p.uncapped&&!LEGEND_IDS.has(p.id)).forEach(p=>r.push(p.id));
  PLAYERS_DATA.filter(p=>p.category==='Bowler'&&!p.uncapped&&!LEGEND_IDS.has(p.id)).forEach(p=>r.push(p.id));
  PLAYERS_DATA.filter(p=>p.category==='All Rounder'&&!p.uncapped&&!LEGEND_IDS.has(p.id)).forEach(p=>r.push(p.id));
  PLAYERS_DATA.filter(p=>p.uncapped).forEach(p=>r.push(p.id));
  PLAYERS_DATA.filter(p=>LEGEND_IDS.has(p.id)).forEach(p=>r.push(p.id));
  return r;
}

// Team color text — used for team name display
const TEAM_TEXT_COLORS = {
  CSK:    '#FFD700', // yellow
  DC:     '#003087', // dark blue
  GT:     '#1C3E6E', // navy blue
  KKR:    '#7B2FBE', // purple
  LSG:    '#00A651', // green
  MI:     '#4a7ae8', // light blue
  PBKS:   '#ED1F27', // red
  RR:     '#E91E8C', // pink
  RCB:    '#CFB53B', // gold
  SRH:    '#F26522', // orange
  DECCAN: '#9E9E9E', // grey
  KOCHI:  '#450f4f', // black (show on light bg)
  PUNE:   '#FFFFFF', // white
  RPS:    '#E91E8C', // pink
  GL:     '#C8960C', // golden brown
};

// Logo extension map
const TEAM_LOGO_EXT = {
  CSK:'png', DC:'png', GT:'png', KKR:'png', LSG:'png',
  MI:'png',  PBKS:'png', RR:'png', RCB:'png', SRH:'png',
  DECCAN:'jpg', KOCHI:'jpg', PUNE:'png', RPS:'png', GL:'png'
};

function getTeamLogo(teamId) {
  const ext = TEAM_LOGO_EXT[teamId] || 'png';
  return `logos/${teamId}.${ext}`;
}

// ─── TEAMS (2026 passwords) ───
const TEAMS_DATA = [
  { id:'CSK',    name:'Chennai Super Kings',         shortName:'CSK',  password:'CSK2026',
    primary:'#FFD700', bg:'#050F1F', gradient:'135deg,#050F1F 0%,#0D2650 100%' },
  { id:'DC',     name:'Delhi Capitals',              shortName:'DC',   password:'DC2026',
    primary:'#003087', bg:'#020D18', gradient:'135deg,#020D18 0%,#04243D 100%' },
  { id:'GT',     name:'Gujarat Titans',              shortName:'GT',   password:'GT2026',
    primary:'#1C3E6E', bg:'#060E16', gradient:'135deg,#060E16 0%,#0E2233 100%' },
  { id:'KKR',    name:'Kolkata Knight Riders',       shortName:'KKR',  password:'KKR2026',
    primary:'#7B2FBE', bg:'#0A0018', gradient:'135deg,#0A0018 0%,#200040 100%' },
  { id:'LSG',    name:'Lucknow Super Giants',        shortName:'LSG',  password:'LSG2026',
    primary:'#00A651', bg:'#001A0D', gradient:'135deg,#001A0D 0%,#00331A 100%' },
  { id:'MI',     name:'Mumbai Indians',              shortName:'MI',   password:'MI2026',
    primary:'#5BC8F5', bg:'#010D1C', gradient:'135deg,#010D1C 0%,#002448 100%' },
  { id:'PBKS',   name:'Punjab Kings',                shortName:'PBKS', password:'PBKS2026',
    primary:'#ED1F27', bg:'#0F0000', gradient:'135deg,#0F0000 0%,#280000 100%' },
  { id:'RR',     name:'Rajasthan Royals',            shortName:'RR',   password:'RR2026',
    primary:'#E91E8C', bg:'#110012', gradient:'135deg,#110012 0%,#270030 100%' },
  { id:'RCB',    name:'Royal Challengers Bengaluru', shortName:'RCB',  password:'RCB2026',
    primary:'#CFB53B', bg:'#0C0000', gradient:'135deg,#0C0000 0%,#1E0000 100%' },
  { id:'SRH',    name:'Sunrisers Hyderabad',         shortName:'SRH',  password:'SRH2026',
    primary:'#F26522', bg:'#100500', gradient:'135deg,#100500 0%,#2A0D00 100%' },
  { id:'DECCAN', name:'Deccan Chargers',             shortName:'DC2',  password:'DECCAN2026',
    primary:'#9E9E9E', bg:'#0A0A0A', gradient:'135deg,#0A0A0A 0%,#1A1A1A 100%' },
  { id:'KOCHI',  name:'Kochi Tuskers Kerala',        shortName:'KTK',  password:'KOCHI2026',
    primary:'#888888', bg:'#050505', gradient:'135deg,#050505 0%,#111111 100%' },
  { id:'PUNE',   name:'Pune Warriors India',         shortName:'PWI',  password:'PUNE2026',
    primary:'#CCCCCC', bg:'#080808', gradient:'135deg,#080808 0%,#141414 100%' },
  { id:'RPS',    name:'Rising Pune Supergiant',      shortName:'RPS',  password:'RPS2026',
    primary:'#E91E8C', bg:'#080010', gradient:'135deg,#080010 0%,#160030 100%' },
  { id:'GL',     name:'Gujarat Lions',               shortName:'GL',   password:'GL2026',
    primary:'#C8960C', bg:'#100800', gradient:'135deg,#100800 0%,#261500 100%' },
];

const BUDGET_PER_TEAM   = 10000; // 100 Crore
const MIN_BID_INCREMENT = 5;
const MAX_SQUAD_SIZE    = 13;
const MIN_SQUAD_SIZE    = 11;
const MAX_FOREIGN       = 6;
const ADMIN_PASSWORD    = 'ADMIN2026';

// Total player count
const TOTAL_PLAYERS = PLAYERS_DATA.length; // 43+25+55+36+32+10 = 201... let's compute
// Note: actual total = PLAYERS_DATA.length

function isLegend(id) { return LEGEND_IDS.has(id); }

function getRatingTier(rating) {
  if (rating >= 96) return 'gold';   // gold panel
  if (rating >= 90) return 'silver'; // silver panel
  return 'normal';
}

function formatAmount(l) {
  if (l == null) return '—';
  if (l < 100) return l + 'L';
  const c = l / 100;
  return (Number.isInteger(c) ? c : c.toFixed(2)) + ' Cr';
}
function getCategoryEmoji(cat) {
  if (!cat) return '🏏';
  const c = cat.toLowerCase();
  if (c.includes('wicket') || c.includes('wk')) return '🧤';
  if (c.includes('bowler'))  return '🎳';
  if (c.includes('all'))     return '⚡';
  return '🏏';
}
function getCategoryColor(cat) {
  if (!cat) return '#f4a114';
  const c = cat.toLowerCase();
  if (c.includes('wicket') || c.includes('wk')) return '#00b4d8';
  if (c.includes('bowler'))  return '#ff6b6b';
  if (c.includes('all'))     return '#a8e063';
  return '#f4a114';
}
function getTeam(id) { return TEAMS_DATA.find(t => t.id === id); }
function getTeamColor(id) { return TEAM_TEXT_COLORS[id] || '#f4a114'; }
