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
"examination", "inquiry", "probe", "exploration", "analysis", "assessment", "evaluation", "appraisal", "interpretation", 
"perception", "observation", "insight", "understanding", "knowledge", "comprehension", "appreciation", "learning", 
"acquisition", "mastery", "expertise", "skill", "proficiency", "capability", "capacity", "competence", "efficiency", 
"effectiveness", "productivity", "performance", "execution", "operation", "action", "activity", "process", "procedure", 
"practice", "technique", "method", "approach", "strategy", "tactic", "plan", "program", "campaign", "initiative", 
"measure", "intervention", "procedure", "protocol", "guideline", "standard", "criterion", "benchmark", "marker", 
"reference", "index", "indicator", "signal", "sign", "clue", "hint", "evidence", "proof", "testimony", "confirmation", 
"verification", "validation", "authentication", "corroboration", "substantiation", "ratification", "endorsement", 
"approval", "acceptance", "consent", "agreement", "acquiescence", "compliance", "conformity", "adherence", "observance", 
"abidance", "harmony", "coordination", "integration", "unification", "consolidation", "merger", "range", "scale", 
"model", "prototype", "archetype", "paradigm", "exemplar", "ideal", "standard", "benchmark", "criterion", "reference", 
"guide", "direction", "advice", "recommendation", "suggestion", "proposal", "plan", "strategy", "approach", "method", 
"technique", "tactic", "maneuver", "move", "action", "activity", "endeavor", "effort", "attempt", "trial", "experiment", 
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
"component", 
];
const wordMappings = {
    "convnet": "convolution",
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
    "outofdistribution": "distribution",
    "conv": "convolution",
    "adapt": "adaptation",
    "adaptive": "adaptation",
    "combine": "combination",
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
            .remove('#Pronoun')
            .remove('#Auxiliary')
            .remove('#Interjection')
            .remove('#Adjective')
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

fs.readdirSync(postsDirectory).forEach(file => {
    const filePath = path.join(postsDirectory, file);
    // Check if the path is a file
    if (fs.statSync(filePath).isFile()) {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data: frontMatter } = matter(fileContents);

        if (frontMatter.categories && frontMatter.categories.includes('research')) {
            const words = preprocessText(`${frontMatter.title} ${frontMatter.summary}`);
            words.forEach(word => {
                if (!wordToPostsMap[word]) {
                    wordToPostsMap[word] = [];
                }
                // Check if the post is already in the array for this word
                const postExists = wordToPostsMap[word].some(post => post.url === filePath.replace(postsDirectory, '').replace(/\\/g, '/'));
                if (!postExists) {
                    wordToPostsMap[word].push({
                        title: frontMatter.title,
                        url: filePath.replace(postsDirectory, '').replace(/\\/g, '/'),
                        date: frontMatter.date,
                        summary: frontMatter.summary
                    });
                }
            });
        }
    }
});

// Write the word-to-posts map to a JSON file
fs.writeFileSync(path.join(outputDirectory, 'wordToPostsMap.json'), JSON.stringify(wordToPostsMap, null, 2));
