---
layout: paper
title:  "Optimal learning rate schedules in high-dimensional non-convex optimization problems"
date:   9 Feb 2022
categories: research
paper_url: https://arxiv.org/pdf/2202.04509
code_url: 
summary: "This paper explores the role of learning rate schedules in high-dimensional and non-convex optimization problems, focusing on Langevin optimization with a decaying learning rate. Analyzing models with Gaussian random functions on N-dimensional spheres, the study reveals that to accelerate optimization without getting trapped in saddles, a decay rate β < 1 is optimal, contrary to convex settings where β = 1 is preferred. Introducing a signal recovery component, the dynamics involve an exploration phase navigating through rough landscape parts and a convergence phase entering convex basins. It's found optimal to maintain a large learning rate during exploration to swiftly exit non-convex regions, then transition to β = 1 for rapid convergence to the solution. These findings are validated in a neural network regression task."
---

