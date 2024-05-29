---
layout: paper
title:  "The Road Less Scheduled"
date:   24 May 2024
categories: research
paper_url: https://arxiv.org/pdf/2405.15682
code_url: https://github.com/facebookresearch/schedule_free
summary: "This is Aaron Defazios much hyped schedule free optimizaiion method. Traditional convergence theory advocates for the Polyak-Ruppert (PR) average over the last iterate of SGD, but empirical evidence shows better performance with the latter. Defazio proposes a new averaging approach that matches the empirical performance of learning rate schedules without sacrificing theoretical guarantees. This method tracks the Pareto frontier of loss versus training time, requires no additional hyperparameters, and utilizes an alternative form of momentum with worst-case optimal properties. The key contribution is an online-to-batch conversion theorem, validating the optimality of the method and unifying existing theories. Extensive evaluations across 28 problems confirm that Schedule-Free methods perform comparably to or better than heavily-tuned schedules. Very cool."
---