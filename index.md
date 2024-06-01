---
layout: home
list_title: 
---

<html>
  <style>
  .container {
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
    flex: 40%;
  }

.text {
    text-align: left;
    flex: 60%;
    padding-left: 50px;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    text-align: center;
  }

  .text {
    padding-left: 0;
    padding-top: 10px;
  }
}
  </style>

  <body>
    <div class="container">
      <div class="image">
        <img src="Tomato_small.png">
      </div>
      <div class="text">
        <h1>I'm Luke</h1>I used to design robots; now I'm doing a PhD in machine vision. I use this website to collect research papers I've read and loved, and to journal my ideas.
        
        All posts are listed bellow in chronological order.
      </div>
    </div>
  </body>
</html>