---
layout: page
title: Research Library
permalink: /research-library/
---

A collection of papers I have read and liked.
Click a word to filter the collection.

<style>
  #back-to-top {
    display: none;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 99;
    font-size: 18px;
    border: none;
    outline: none;
    background-color: #555;
    color: white;
    cursor: pointer;
    padding: 10px;
    border-radius: 4px;
  }

  #back-to-top:hover {
    background-color: #333;
  }
</style>

<script>
  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById('back-to-top').style.display = 'block';
    } else {
      document.getElementById('back-to-top').style.display = 'none';
    }
  }
</script>

<script>
  // Load the precomputed word-to-posts map
  const wordToPostsMap = {{ site.data.wordToPostsMap | jsonify }};

  var postsData = [
    {% for post in site.categories.research %}
      {
        "title": "{{ post.title | escape | replace: '&amp;', '&' | replace: '&lt;', '<' | replace: '&gt;', '>' | replace: '&quot;', '"' | replace: '&#39;', "'" }}",
        "url": "{{ post.url | absolute_url }}",
        "date": "{{ post.date | date: '%B %d, %Y' }}",
        "summary": "{{ post.summary | escape | strip_newlines | replace: '&amp;', '&' | replace: '&lt;', '<' | replace: '&gt;', '>' | replace: '&quot;', '"' | replace: '&#39;', "'" }}"
      },
    {% endfor %}
  ];


function displayAllPosts() {
  document.querySelectorAll('#word-cloud span').forEach(el => el.classList.remove('clicked-word'));
  const postsContainer = document.getElementById('posts-container');
  if (!postsContainer) return;
  postsContainer.innerHTML = ''; // Clear previous content

  const listElement = document.createElement('ul');
  postsData.forEach(post => {
    const postItem = document.createElement('li');
    
    const postLink = document.createElement('a');
    postLink.href = post.url;
    postLink.innerText = post.title;
    postLink.target = "_blank"; // open in new tab
    
    const postDate = document.createElement('div');
    postDate.innerText = post.date;
    postDate.className = 'date-italic';
    postDate.style.color = '#0197d3';
    
    const postSummary = document.createElement('div');
    postSummary.innerText = post.summary;

    postItem.appendChild(document.createElement('h4')).appendChild(postLink);
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
  const cloudSize = 80
  const topWords = wordPostsPairs.sort((a, b) => b[1].length - a[1].length).slice(0, cloudSize);

  const wordCloudContainer = document.getElementById('word-cloud');
  wordCloudContainer.innerHTML = ''; // Clear previous word cloud, if any

  // Assuming topWords is sorted by frequency, descending
  const maxFrequency = topWords[0][1].length; // The frequency of the most common word
  const minFrequency = topWords[topWords.length - 1][1].length; // The frequency of the least common word

  topWords.forEach(([word, posts]) => {
    const frequency = posts.length;
    const basefontsize = 20
    const scale = (frequency - minFrequency) / (maxFrequency - minFrequency);
    const fontSize = basefontsize + (scale * basefontsize); // 16px is the base size, and we scale up to double this size

    const wordElement = document.createElement('span');
    wordElement.style.fontSize = `${fontSize}px`; // Set the dynamically calculated font size
    wordElement.innerText = word;
    wordElement.style.cursor = 'pointer';
    wordElement.style.color = getRandomColor();
    wordElement.style.fontFamily = "Averia Serif Libre";
    wordElement.style.fontWeight = "bold";
    wordElement.title = `Frequency: ${frequency}`;
    wordElement.onclick = function() {
      displayPostsForWord(word); 
      document.querySelectorAll('#word-cloud span').forEach(el => el.classList.remove('clicked-word'));
      this.classList.add('clicked-word');
      };
    wordCloudContainer.appendChild(wordElement);
    wordCloudContainer.appendChild(document.createTextNode(' ')); // For spacing
  });

  displayAllPosts(); // Initially show all posts

  // Add Back-To-Top button
    document.getElementById('back-to-top').addEventListener('click', function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
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
  
  let relatedPosts = wordToPostsMap[word];
  if (relatedPosts && relatedPosts.length > 0) {
    // Sort posts by date
    relatedPosts = relatedPosts.sort((a, b) => {
      // Assuming the date is in a format like "5 Jun 2017"
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA; // Sort in descending order (newest first)
    });

    const listElement = document.createElement('ul');
    relatedPosts.forEach(post => {
      const postItem = document.createElement('li');
      
      const postLink = document.createElement('a');
      postLink.href = post.url;
      postLink.innerText = post.title;
      postLink.target = "_blank"; // open in new tab
      
      const postDate = document.createElement('div');
      postDate.innerText = post.date;
      postDate.className = 'date-italic';
      postDate.style.color = '#0197d3';
      
      const postSummary = document.createElement('div');
      postSummary.innerText = post.summary;

      postItem.appendChild(document.createElement('h4')).appendChild(postLink);
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

<head>
  <!-- Other head elements -->
  <style>
    #word-cloud {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: flex-start;
      text-align: justify;
      line-height: 0.9;
    }
    #word-cloud span {
      margin-right: 10px; /* Horizontal spacing between words */
      margin-left: 10px; /* Horizontal spacing between words */
      margin-top: 4px; /* Vertical spacing between lines of words */
      margin-bottom: 4px; /* Vertical spacing between lines of words */
    }
    .date-italic {
      font-style: italic;
    }
    .clicked-word {
      font-weight: bold;
      text-decoration: underline;
    }
  </style>
</head>


<div id="word-cloud"></div>
<br>
<button id="show-all-posts">Show All Posts</button>
<script> document.getElementById('show-all-posts').addEventListener('click', displayAllPosts); </script>
<br><br>
<div id="posts-container"></div>

<button id="back-to-top" title="Go to top">&#8593;</button>
