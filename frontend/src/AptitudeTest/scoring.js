export const categories = {
  "Science": {
    description: "You have strong analytical, observational, and problem-solving skills.",
    streams: ["B.Sc. (Physics, Chemistry, Biology, Math)", "B.Tech/B.E."],
    careers: ["Doctor", "Engineer", "Scientist", "Researcher", "Exams: IIT-JEE, NEET, UPSC (IFS)"],
    higherStudies: ["M.Sc.", "M.Tech", "PhD", "MBA"]
  },
  "Arts & Humanities": {
    description: "You are creative, enjoy critical thinking, and understanding human culture and society.",
    streams: ["B.A. (History, Sociology, Literature, Political Science, Fine Arts, Psychology)"],
    careers: ["Lawyer", "Journalist", "Teacher", "Civil Servant", "Artist", "Psychologist", "Exams: UPSC CSE, CLAT"],
    higherStudies: ["M.A.", "Law (LLB)", "Journalism Diploma", "PhD"]
  },
  "Commerce": {
    description: "You are good with numbers, business, economics, and management.",
    streams: ["B.Com.", "BBA", "Economics (Hons)"],
    careers: ["Accountant", "Banker", "Entrepreneur", "Manager", "Financial Analyst", "Exams: CA, CS, Bank PO"],
    higherStudies: ["MBA", "M.Com.", "Chartered Accountancy (CA)"]
  },
  "Computers": {
    description: "You are logical, enjoy technology, and excel at algorithmic thinking.",
    streams: ["B.Tech (Computer Science)", "BCA", "B.Sc. (IT)"],
    careers: ["Software Developer", "Data Scientist", "Cybersecurity Analyst", "IT Manager", "AI/ML Engineer"],
    higherStudies: ["M.Tech", "MCA", "MS in Computer Science"]
  },
  "Vocational": {
    description: "You prefer hands-on, practical skills and real-world application.",
    streams: ["Vocational Diplomas (IT, Hospitality, Agriculture)", "B.Voc."],
    careers: ["Technician", "Chef", "Farmer-Entrepreneur", "Electrician", "Plumber", "Govt schemes: PMKVY"],
    higherStudies: ["Advanced Certificate courses", "Specialized Diplomas"]
  }
};

// Extract category from option string
export const getCategory = (optionStr) => optionStr.split("(").pop().replace(")", "").trim();

// Calculate top category
export const calculateResults = (answers) => {
  const scores = {};
  Object.keys(categories).forEach((cat) => (scores[cat] = 0));
  answers.forEach((ans) => {
    const cat = getCategory(ans);
    if (scores[cat] !== undefined) scores[cat] += 1;
  });
  const maxScore = Math.max(...Object.values(scores));
  const topCategories = Object.keys(scores).filter((cat) => scores[cat] === maxScore);
  return topCategories;
};
