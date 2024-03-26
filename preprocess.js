const fs = require('fs');
const path = require('path');
const nlp = require('compromise');
const matter = require('gray-matter');

const postsDirectory = path.join(__dirname, '_posts/research');
const outputDirectory = path.join(__dirname, '_data');

const stopwords = ["algorithm", "model", "data", "results", "performance", "approach", "method", "system", 
"application", "technique", "framework", "analysis", "study", "research", "evaluation", "implementation", 
"experiment", "proposal", "contribution", "work", "process", "development", "use", "effect", "impact", "field", 
"area", "purpose", "goal", "objective", "introduction", "background", "conclusion", "discussion", "literature", 
"review", "theory", "practice", "methodology", "findings", "context", "concept", "aspect", "issue", "challenge", 
"opportunity", "strategy", "solution", "improvement", "potential", "significance", "benefit", "aim", "hypothesis", 
"question", "answer", "explanation", "experimentation", "validation", "verification", "assessment", "computation", 
"calculation", "inference", "learning", "training", "testing", "extraction", "representation", "integration", 
"transition", "scaling", "deployment", "publication", "citation", "introduce", "enhance", "paper", "show", 
"train", "our", "its", "improve", "better", "further", "novel", "achieve", "enhance", "advance", "innovate", 
"superior", "significant", "state-of-the-art", "cutting-edge", "leading-edge", "breakthrough", "pioneering", 
"incremental", "substantial", "remarkable", "exceed", "surpass", "refine", "upgrade", "revolutionize", "progress", 
"development", "innovation", "efficiency", "effectiveness", "productivity", "capability", "competence", "performance", 
"quality", "excellence", "precision", "accuracy", "viability", "feasibility", "intuitive", "streamline", "simplify", 
"enhancement", "improvement", "advancement", "benefit", "gain", "boost", "elevate", "heighten", "intensify", 
"strengthen", "deepen", "broaden", "expand", "extend", "enlarge", "increase", "maximize", "outperform", "demonstrate", 
"task", "which", "include", "test", "result", "not", "compare", "input", "output", "be", "offer", "propose", 
"reduce", "art", "error", "enable", "maintain", "do", "suggest", "address", "find", "need", "less", "methods", 
"allow", "show", "provide", "use", "support", "apply", "achieve", "consider", "indicate", "reveal", "display", 
"present", "utilize", "examine", "investigate", "observe", "determine", "assess", "measure", "evaluate", "describe", 
"explain", "discuss", "report", "conduct", "implement", "develop", "create", "design", "formulate", "build", 
"construct", "produce", "synthesize", "derive", "modify", "enhance", "improve", "increase", "decrease", "expand", 
"limit", "restrict", "adjust", "manage", "solve", "overcome", "tackle", "target", "aim", "focus", "prioritize", 
"emphasize", "highlight", "feature", "specify", "detail", "clarify", "summarize", "conclude", "predict", "estimate", 
"project", "anticipate", "expect", "assume", "hypothesize", "theorize", "model", "simulate", "replicate", "validate", 
"verify", "confirm", "justify", "rationalize", "interpret", "analyze", "survey", "research", "study", "investigation", 
"examination", "inquiry", "exploration", "analysis", "assessment", "evaluation", "appraisal", "interpretation", 
"perception", "observation", "insight", "understanding", "knowledge", "comprehension", "appreciation", "learning", 
"acquisition", "mastery", "expertise", "skill", "proficiency", "capability", "competence", "efficiency", 
"effectiveness", "productivity", "performance", "execution", "process", "procedure", 
"practice", "technique", "method", "approach", "strategy", "tactic", "plan", "program", "campaign", "initiative", 
"measure", "intervention", "procedure", "protocol", "guideline", "standard", "criterion", "benchmark",
"reference", "index", "indicator", "signal", "sign", "clue", "hint", "evidence", "proof", "testimony", "confirmation", 
"verification", "validation", "authentication", "corroboration", "substantiation", "ratification", "endorsement", 
"approval", "acceptance", "consent", "agreement", "acquiescence", "compliance", "conformity", "adherence", "observance", 
"abidance", "harmony", "coordination", "integration", "unification", "consolidation", "merger", "range", "scale", 
"model", "prototype", "archetype", "paradigm", "exemplar", "ideal", "standard", "benchmark", "criterion", "reference", 
"guide", "direction", "advice", "recommendation", "suggestion", "proposal", "plan", "approach", "method", 
"technique", "tactic", "maneuver", "move", "endeavor", "effort", "attempt", "trial", "experiment", 
"test", "models", "size", "non", "mitigate", "rate", "when", "prevent", "sample", "lead", "like", "function", "explore", 
"key", "make", "tasks", "require", "level", "mechanism", "number", "example", "one", "capture", "sucess", 
"speed", "set", "where", "struggle", "inputs", "encourage", "preserve", "understand", "top", "bottom", "middle", "learn", 
"self", "shift", "unit", "network", "neural", "networks", "architecture", "sucess", "change", "finding", "base", "small", 
"large", "tiny", "code", "state", "success", "how", "facilitate", "computer", "source", "establish", "k", "rely", 
"processing", "alternative", "problem", "type", "architectures", "importance", "involves", "reach", "perform", "property", 
"remain", "necessity", "establish", "have", "a", "b", "c", "adjustment", "start", "end", "discovery", "advancements", 
"employ", "leverage", "image", "that", "category", "lose", "identify", "minimize", "reduction", "resource", "modification", 
"variation", "variant", "scheme", "integrate", "drive", "call", "content", "it39", "strength", "demand", "affect", "prove", 
"principle", "scenario", "view", "exhibit", "analysi", "interaction", "excel", "no", "semi", "help", "demonstrate",
"component", "involve", "dificulty", "share", "inspire", "involve", "version", "match", "github", "com", "https", "www",
"d", "stage", "learner", "face", "ability", "incorporate", "influence", "underlying", "new", "old", "previous", "current",
"high", "low", "medium", "best", "worst", "better", "worse", "good", "bad", "great", "small", "big", "large", "tiny",
"over", "under", "above", "below", "before", "after", "front", "back", "left", "right", "up", "down", "in", "out", "on",
"based", "extensive", "simple", "complex", "complicated", "difficult", "easy", "hard", "challenging", "straightforward",
"problematic", "trivial", "significant", "insignificant", "important", "unimportant", "critical", "crucial", "vital",
"essential", "nonessential", "necessary", "unnecessary", "required", "optional", "mandatory", "voluntary", "obligatory",
"exist", "depth", "dnn", "replace", "point", "combine", "combination", "author", "setting", "lack", "solve", 
];
const wordMappings = {
    "minimum": "minima", 
    "stable": "stability",
    "init": "initialize",
    "initial": "initialize",
    "corrupt": "corruption",
    "overfit": "overfitting",
    "reconstruct": "reconstruction",
    "dimensionality": "dimension",
    "reconstruct": "reconstruction",
    "unlabelled": "unlabeled",
    "unlabel": "unlabeled",
    "peturb": "perturbation",
    "gradients": "gradient",
    "noisy": "noise",
    "reconstruction": "reconstruct",
    "transform": "transformation",
    "pretrain": "pretraining",
    "converge": "convergence",
    "convnet": "convolution",
    "transferability": "transfer",
    "convnets": "convolution",
    "cnn": "convolution",
    "cnns": "convolution",
    "convolve": "convolution",
    "convolutional": "convolution",
    "convolutions": "convolution",
    "classifier": "classification",
    "generate": "generation",
    "generative": "generation",
    "transformers": "transformer",
    "distill": "distillation",
    "distil": "distillation",
    "outofdistribution": "distribution",
    "conv": "convolution",
    "adaptive": "adapt",
    "adaptation": "adapt",
    "invariant": "invariance", 
    "shoot": "shot",
    "tune": "tuning",
    "autoencoders": "autoencoder",
    "masked": "mask",
    "masking": "mask",
    "vits": "vit",
    "datasets": "dataset",
    "images": "image",
    "regularize": "regularization",
    "generalize": "generalization",
    "detect": "detection",
    "supervise": "supervision",
    "supervised": "supervision",
    "segment": "segmentation",
    "robust": "robustness",
    "optimize": "optimization",
    "augment": "augmentation",
    "layernorm": "layer normalization",
    "batchnorm": "batch normalization",
    "groupnorm": "group normalization",
    "instancenorm": "instance normalization",
    "norm": "normalization",
    "normalize": "normalization",
    "distll": "distillation",
  };

// Ensure the output directory exists
if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory, { recursive: true });
}

// Preprocess text similar to the client-side function
function preprocessText(text) {

  let doc = nlp(text.toLowerCase());
  doc = doc.normalize();

  // Change tenses
  doc.verbs().toInfinitive();
  doc.nouns().toSingular();

  // Remove insignificant words
  doc = doc.remove('#Determiner')
            .remove('#Preposition')
            .remove('#Conjunction')
            .remove('#Possessive')
            .remove('#Adjective')
            .remove('#Pronoun')
            .remove('#Auxiliary')
            .remove('#Interjection')
            .remove('#Article')
            .remove('#Particle')
            .remove('#Participle')
            .remove('#Modal')
            .remove('#Copula')
            .remove('#Adverb')
            .remove('#Date')
            .remove('#Value')
            ;

  doc.compute('root');

  // Split into words, remove punctuation, and filter non-word entities
  let words = doc.text('root')
                 .replace(/[^\w\s]|_/g, '') // Remove punctuation
                 .replace(/\s+/g, ' ') // Collapse whitespace
                 .split(' ')
                 .filter(word => word && !word.match(/^\W+$/) && isNaN(word)); // Filter out non-words and numbers

  // Apply custom mappings and remove stopwords
  words = words.map(word => wordMappings[word] || word)
               .filter(word => !stopwords.includes(word));

  return words;
}

// Read and process all posts
let wordToPostsMap = {};

const normalizeCategories = (categories) => {
    if (Array.isArray(categories)) {
      return categories;
    } else if (typeof categories === 'string') {
      // If categories is a string, split by comma to support comma-separated lists
      return categories.split(',').map(category => category.trim());
    } else {
      // Fallback to an empty array or a default category as needed
      return [];
    }
  };
  

fs.readdirSync(postsDirectory).forEach(file => {
    if (fs.statSync(path.join(postsDirectory, file)).isFile()) {
      const fileContents = fs.readFileSync(path.join(postsDirectory, file), 'utf8');
      const { data: frontMatter } = matter(fileContents);
  
      if (frontMatter.categories && frontMatter.categories.includes('research')) {
        const words = preprocessText(`${frontMatter.title} ${frontMatter.summary}`);
        words.forEach(word => {
          if (!wordToPostsMap[word]) {
            wordToPostsMap[word] = [];
          }
  
          const postDate = new Date(frontMatter.date);
          const year = postDate.getFullYear();
          const month = (`0${postDate.getMonth() + 1}`).slice(-2); // Months are 0-indexed
          const day = (`0${postDate.getDate()}`).slice(-2);
          const titleSlug = file.replace(/\.markdown$/, '').replace(/^(\d{4})-(\d{2})-(\d{2})-/, '').replace(/ /g, '-');
          const categories = normalizeCategories(frontMatter.categories);
          const categoryPath = categories.join('/'); // Assuming categories is an array

          const url = `/${categoryPath}/${year}/${month}/${day}/${titleSlug}.html`;
  
          // Avoid duplicate entries
          if (!wordToPostsMap[word].some(post => post.url === url)) {
            wordToPostsMap[word].push({
              title: frontMatter.title,
              url: url,
              date: new Date(frontMatter.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }),
              summary: frontMatter.summary
            });
          }
        });
      }
    }
  });

fs.writeFileSync(path.join(outputDirectory, 'wordToPostsMap.json'), JSON.stringify(wordToPostsMap, null, 2));

