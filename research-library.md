---
layout: page
title: Research Library
permalink: /research-library/
---

A collection of papers I have read and liked. 

<script src="https://unpkg.com/compromise"></script>

<script>
  var postsData = [
    {% for post in site.categories.research %}
      {
        "title": "{{ post.title | escape }}",
        "url": "{{ post.url | absolute_url }}",
        "date": "{{ post.date | date: '%B %d, %Y' }}",
        "summary": "{{ post.summary | escape | strip_newlines }}"
      },
    {% endfor %}
  ];

  var stopwords = ["algorithm", "model", "data", "results", "performance", "approach", "method", "system", "application", "technique", "framework", "analysis", "study", "research", "evaluation", "implementation", "experiment", "proposal", "contribution", "work", "process", "development", "use", "effect", "impact", "field", "area", "purpose", "goal", "objective", "introduction", "background", "conclusion", "discussion", "literature", "review", "theory", "practice", "methodology", "findings", "context", "concept", "aspect", "issue", "challenge", "opportunity", "strategy", "solution", "improvement", "potential", "significance", "benefit", "aim", "hypothesis", "question", "answer", "explanation", "experimentation", "validation", "verification", "assessment", "computation", "calculation", "inference", "learning", "training", "testing", "extraction", "representation", "integration", "transition", "scaling", "deployment", "publication", "citation", "introduce", "enhance", "paper", "show", "train", "our", "its", "improve", "better", "further", "novel", "achieve", "enhance", "advance", "innovate", "superior", "significant", "state-of-the-art", "cutting-edge", "leading-edge", "breakthrough", "pioneering", "incremental", "substantial", "remarkable", "exceed", "surpass", "refine", "upgrade", "revolutionize", "progress", "development", "innovation", "efficiency", "effectiveness", "productivity", "capability", "competence", "performance", "quality", "excellence", "precision", "accuracy", "viability", "feasibility", "intuitive", "streamline", "simplify", "enhancement", "improvement", "advancement", "benefit", "gain", "boost", "elevate", "heighten", "intensify", "strengthen", "deepen", "broaden", "expand", "extend", "enlarge", "increase", "maximize", "outperform", "demonstrate", "task", "which", "include", "test", "result", "not", "compare", "input", "output", "be", "offer", "propose", "reduce", "art", "error", "enable", "maintain", "do", "suggest", "address", "find", "need", "less", "methods", "allow", "show", "provide", "use", "support", "apply", "achieve", "consider", "indicate", "reveal", "display", "present", "utilize", "examine", "investigate", "observe", "determine", "assess", "measure", "evaluate", "describe", "explain", "discuss", "report", "conduct", "implement", "develop", "create", "design", "formulate", "build", "construct", "produce", "synthesize", "derive", "modify", "enhance", "improve", "increase", "decrease", "expand", "limit", "restrict", "adjust", "manage", "solve", "overcome", "tackle", "target", "aim", "focus", "prioritize", "emphasize", "highlight", "feature", "specify", "detail", "clarify", "summarize", "conclude", "predict", "estimate", "project", "anticipate", "expect", "assume", "hypothesize", "theorize", "model", "simulate", "replicate", "validate", "verify", "confirm", "justify", "rationalize", "interpret", "analyze", "survey", "research", "study", "investigation", "examination", "inquiry", "probe", "exploration", "analysis", "assessment", "evaluation", "appraisal", "interpretation", "perception", "observation", "insight", "understanding", "knowledge", "comprehension", "appreciation", "learning", "acquisition", "mastery", "expertise", "skill", "proficiency", "capability", "capacity", "competence", "efficiency", "effectiveness", "productivity", "performance", "execution", "operation", "action", "activity", "process", "procedure", "practice", "technique", "method", "approach", "strategy", "tactic", "plan", "program", "campaign", "initiative", "measure", "intervention", "procedure", "protocol", "guideline", "standard", "criterion", "benchmark", "marker", "reference", "index", "indicator", "signal", "sign", "clue", "hint", "evidence", "proof", "testimony", "confirmation", "verification", "validation", "authentication", "corroboration", "substantiation", "ratification", "endorsement", "approval", "acceptance", "consent", "agreement", "acquiescence", "compliance", "conformity", "adherence", "observance", "abidance", "harmony", "coordination", "integration", "unification", "consolidation", "merger", "range", "scale", "model", "prototype", "archetype", "paradigm", "exemplar", "ideal", "standard", "benchmark", "criterion", "reference", "guide", "direction", "advice", "recommendation", "suggestion", "proposal", "plan", "strategy", "approach", "method", "technique", "tactic", "maneuver", "move", "action", "activity", "endeavor", "effort", "attempt", "trial", "experiment", "test", "models", "size", "non", "mitigate", "rate", "when", "prevent", "sample", "lead", "like", "function", "explore", "key", "make", "tasks", "require", "level", "mechanism", "number", "example", "instance", "one", "capture", "sucess", "speed", "set", "where", "struggle", "inputs", "encourage", "preserve", "understand", "top", "bottom", "middle", "learn", "self", "shift", "unit", "network", "neural", "networks", "architecture", "sucess", "change", "finding", "base", "small", "large", "tiny", "code", "state", "success", "how", "facilitate", "computer", "source",
  "establish", "k", "rely", "processing", "alternative", "problem", "type", "architectures", "importance", "involves", "reach", "perform", "property", "remain", "necessity", "establish", "have", "a", "b", "c", "adjustment", "start", "end", "discovery", "advancements", "employ", "leverage", "image", "that", "category", "lose", "identify", "minimize", "reduction", "resource", "modification", "variation", "variant", "scheme", "integrate", "drive", "call", "content", "it39", "strength", "demand", "affect", "prove", "principle", "scenario", "view", "exhibit", "analysi", "interaction", "excel", 
  ];

  const wordMappings = {
    "distill": "distillation", 
    "outofdistribution": "distribution",
    "conv": "convolution",
    "convolve": "convolution",
    "convolutional": "convolution",
    "adapt": "adaptive",
    "adaptation": "adaptive",
    "combine": "combination",
    "invariant": "invariance", 
    "shoot": "shot",
    "tune": "tuning",
    "autoencoders": "autoencoder",
    "cnns": "cnn",
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
  };

  function preprocessText(text) {
      var doc = nlp(text.toLowerCase());
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

      // Remove punctuation and split into words
      var words = doc.text('root')
                    .replace(/[^\w\s]|_/g, '')
                    .replace(/\s+/g, ' ')
                    .split(' ')
                    .filter(word => word && isNaN(word));

      // Apply custom mapping
      words = words.map(word => wordMappings[word] || word);

      // Remove stopwords
      words = words.filter(word => !stopwords.includes(word));

      return words;
  }


</script>

<script>

function countWordFrequencies(postsData) {
  const wordToPostsMap = {};

  postsData.forEach(post => {
    const words = preprocessText(post.summary + post.title);
    words.forEach(word => {
      if (!wordToPostsMap[word]) {
        wordToPostsMap[word] = [];
      }
      // Check and add the post if it hasn't been added for the word
      if (!wordToPostsMap[word].find(p => p.url === post.url)) {
        wordToPostsMap[word].push({
          title: post.title,
          url: post.url,
          date: post.date, // Include the date
          summary: post.summary // Include the summary
        });
      }
    });
  });
  return wordToPostsMap;
}

const wordToPostsMap = countWordFrequencies(postsData);

function displayAllPosts() {
  const postsContainer = document.getElementById('posts-container');
  if (!postsContainer) return;
  postsContainer.innerHTML = ''; // Clear previous content

  const listElement = document.createElement('ul');
  postsData.forEach(post => {
    const postItem = document.createElement('li');
    
    const postLink = document.createElement('a');
    postLink.href = post.url;
    postLink.innerText = post.title;
    
    const postDate = document.createElement('div');
    postDate.innerText = post.date;
    
    const postSummary = document.createElement('div');
    postSummary.innerText = post.summary;

    postItem.appendChild(postLink);
    postItem.appendChild(document.createElement('br'));
    postItem.appendChild(postDate);
    postItem.appendChild(postSummary);
    postItem.appendChild(document.createElement('br'));
    
    listElement.appendChild(postItem);
  });
  postsContainer.appendChild(listElement);
}

document.addEventListener('DOMContentLoaded', function() {
  // Convert wordToPostsMap to an array of [word, posts] pairs
  const wordPostsPairs = Object.keys(wordToPostsMap).map(word => [word, wordToPostsMap[word]]);

  // Sort the pairs by the number of posts in descending order and keep only the top k
  const cloudSize = 100
  const topWords = wordPostsPairs.sort((a, b) => b[1].length - a[1].length).slice(0, cloudSize);

  const wordCloudContainer = document.getElementById('word-cloud');
  wordCloudContainer.innerHTML = ''; // Clear previous word cloud, if any

  // Assuming topWords is sorted by frequency, descending
  const maxFrequency = topWords[0][1].length; // The frequency of the most common word
  const minFrequency = topWords[topWords.length - 1][1].length; // The frequency of the least common word

  topWords.forEach(([word, posts]) => {
    const frequency = posts.length;
    const basefontsize = 16
    const scale = (frequency - minFrequency) / (maxFrequency - minFrequency);
    const fontSize = basefontsize + (scale * basefontsize); // 16px is the base size, and we scale up to double this size

    const wordElement = document.createElement('span');
    wordElement.style.fontSize = `${fontSize}px`; // Set the dynamically calculated font size
    wordElement.innerText = word;
    wordElement.style.cursor = 'pointer';
    wordElement.style.color = getRandomColor();
    wordElement.title = `Frequency: ${frequency}`;
    wordElement.onclick = function() { displayPostsForWord(word); };
    wordCloudContainer.appendChild(wordElement);
    wordCloudContainer.appendChild(document.createTextNode(' ')); // For spacing
  });

  displayAllPosts(); // Initially show all posts
});

function getRandomColor() {
    // Generate a random hue from 0 to 360
    const hue = Math.floor(Math.random() * 360);
    // Set saturation to 100% and lightness to 50% for vivid colors
    return `hsl(${hue}, 100%, 40%)`;
}

function displayPostsForWord(word) {
  const postsContainer = document.getElementById('posts-container');
  if (!postsContainer) return;
  postsContainer.innerHTML = ''; // Clear previous content
  
  const relatedPosts = wordToPostsMap[word];
  if (relatedPosts && relatedPosts.length > 0) {
    const listElement = document.createElement('ul');
    relatedPosts.forEach(post => {
      const postItem = document.createElement('li');
      
      const postLink = document.createElement('a');
      postLink.href = post.url;
      postLink.innerText = post.title;
      
      const postDate = document.createElement('div');
      postDate.innerText = post.date;
      
      const postSummary = document.createElement('div');
      postSummary.innerText = post.summary;

      postItem.appendChild(postLink);
      postItem.appendChild(document.createElement('br'));
      postItem.appendChild(postDate);
      postItem.appendChild(postSummary);
      postItem.appendChild(document.createElement('br'));
      
      listElement.appendChild(postItem);
    });
    postsContainer.appendChild(listElement);
  } else {
    postsContainer.innerHTML = '<p>No posts found for this word.</p>';
  }
}

</script>

<div id="word-cloud"></div>
<button id="show-all-posts">Show All Posts</button>
<script> document.getElementById('show-all-posts').addEventListener('click', displayAllPosts); </script>
<br><br>
<div id="posts-container"></div>

