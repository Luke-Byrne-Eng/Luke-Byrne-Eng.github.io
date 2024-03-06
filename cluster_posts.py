import os
import re
from typing import List

def extract_summaries_from_posts(posts_directory: str) -> List[str]:
    summaries = []
    yaml_frontmatter_pattern = re.compile(r'^---(.*?)---', re.DOTALL | re.MULTILINE)
    
    for filename in os.listdir(posts_directory):
        if filename.endswith('.md'):
            with open(os.path.join(posts_directory, filename), 'r', encoding='utf-8') as file:
                content = file.read()
                frontmatter_match = yaml_frontmatter_pattern.search(content)
                if frontmatter_match:
                    frontmatter_content = frontmatter_match.group(1)
                    summary_match = re.search(r'^summary:\s*(.*)$', frontmatter_content, re.MULTILINE)
                    if summary_match:
                        summaries.append(summary_match.group(1).strip())
    
    return summaries

import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
import string

# Ensure you have the necessary NLTK data
nltk.download('punkt')
nltk.download('stopwords')

def preprocess_text(text: str) -> List[str]:
    # Convert to lowercase
    text = text.lower()
    # Remove punctuation
    text = text.translate(str.maketrans('', '', string.punctuation))
    # Tokenize
    tokens = word_tokenize(text)
    # Remove stopwords
    tokens = [word for word in tokens if word not in stopwords.words('english')]
    
    return tokens


from gensim.models import Word2Vec, KeyedVectors

def load_pretrained_word2vec_model(model_path: str):
    # Load a pre-trained Word2Vec model
    model = KeyedVectors.load_word2vec_format(model_path, binary=True)
    return model

def get_summary_embeddings(summaries: List[str], word2vec_model) -> List[List[float]]:
    embeddings = []
    for summary in summaries:
        words = preprocess_text(summary)
        word_embeddings = [word2vec_model[word] for word in words if word in word2vec_model]
        if word_embeddings:
            summary_embedding = sum(word_embeddings) / len(word_embeddings)
            embeddings.append(summary_embedding)
        else:
            embeddings.append(None)  # Handle case where no words in the summary are in the model's vocabulary
    
    return embeddings

from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score
import numpy as np

def cluster_embeddings(embeddings: List[List[float]], n_clusters: int = 5) -> (List[int], float):
    # Filter out None embeddings if there are any
    valid_embeddings = [emb for emb in embeddings if emb is not None]
    
    # Convert the list of embeddings into a numpy array for scikit-learn
    embeddings_array = np.array(valid_embeddings)
    
    # Perform K-Means clustering
    kmeans = KMeans(n_clusters=n_clusters, random_state=42).fit(embeddings_array)
    
    # Predict the cluster for each embedding
    labels = kmeans.predict(embeddings_array)
    
    # Calculate the silhouette score for the clustering
    silhouette_avg = silhouette_score(embeddings_array, labels)
    
    return labels, silhouette_avg

def find_optimal_clusters(embeddings: List[List[float]], max_clusters: int = 10):
    silhouette_scores = {}
    for n_clusters in range(2, max_clusters + 1):  # At least 2 clusters
        _, score = cluster_embeddings(embeddings, n_clusters=n_clusters)
        silhouette_scores[n_clusters] = score
        print(f"Number of clusters: {n_clusters}, Silhouette Score: {score:.2f}")
    
    best_n_clusters = max(silhouette_scores, key=silhouette_scores.get)
    print(f"Best number of clusters based on silhouette score: {best_n_clusters}")
    return best_n_clusters
