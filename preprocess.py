import os
import json
import spacy
import re
from pathlib import Path
from datetime import datetime
from dateutil import parser as date_parser
import yaml

# Initialize spaCy model
nlp = spacy.load('en_core_web_sm')

# Directory paths
posts_directory = Path('_posts/research')
output_directory = Path('_data')

# Ensure the output directory exists
output_directory.mkdir(parents=True, exist_ok=True)

# Stopwords and word mappings (you should fill these in)
stopwords = set(["algorithm", "model", "data", "results", "performance", "approach", "method", "system", 
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
])
word_mappings = {
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
}

# Preprocess text
def preprocess_text(text):
    doc = nlp(text.lower())

    # Lemmatize text and remove stopwords and punctuation
    words = [
        token.lemma_ for token in doc
        if token.is_alpha and not token.is_stop and token.lemma_ not in stopwords
    ]

    # Apply custom mappings
    words = [word_mappings.get(word, word) for word in words]

    return words

# Normalize categories
def normalize_categories(categories):
    if isinstance(categories, str):
        return [category.strip() for category in categories.split(',')]
    elif isinstance(categories, list):
        return categories
    else:
        return []

# Read and process all posts
word_to_posts_map = {}

for file in posts_directory.glob('*.markdown'):
    with file.open('r', encoding='utf-8') as f:
        content = f.read()
        front_matter = content.split('---\n', 2)[1:]

    if 'categories' in front_matter and 'research' in front_matter['categories']:
        print("x")
        words = preprocess_text(f"{front_matter['title']} {front_matter['summary']}")
        post_date = date_parser.parse(front_matter['date'])
        year = post_date.year
        month = f"{post_date.month:02d}"
        day = f"{post_date.day:02d}"
        title_slug = re.sub(r'\s+', '-', re.sub(r'^(\d{4})-(\d{2})-(\d{2})-', '', file.stem))

        categories = normalize_categories(front_matter['categories'])
        category_path = '/'.join(categories)
        url = f"/{category_path}/{year}/{month}/{day}/{title_slug}.html"

        for word in words:
            if word not in word_to_posts_map:
                word_to_posts_map[word] = []

            # Avoid duplicate entries
            if not any(post['url'] == url for post in word_to_posts_map[word]):
                word_to_posts_map[word].append({
                    'title': front_matter['title'],
                    'url': url,
                    'date': post_date.strftime('%B %d, %Y'),
                    'summary': front_matter['summary']
                })

# Write the results to a JSON file
with (output_directory / 'wordToPostsMap.json').open('w', encoding='utf-8') as f:
    json.dump(word_to_posts_map, f, indent=2)
