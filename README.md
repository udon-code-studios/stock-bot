# SPP - StockBot

A historical and live day-trading bot with a front end to display various stock information and performance metrics.

### Proposed Development Stages
1. CURRENT - Retrieve stock information for any given day and display it graphically on the website.
2. Apply a "dumb" trading algorithm (e.g. buy/hold on each 30s interval increase, and sell on each 10s interval decrease) which can be viewed on the same graph from stage 1.
3. Create several more trading algorithms which can be selected from the website.
4. Train a machine or deep learning algorithm on historical stock data and apply it as a trading algorithm.
5. Interface the bot with a real trading platform to allow it to trade on the live market.

### Language/Design Plans
- front end will either be built in pure html/css/js or Angular or Vue.js
- back end will either be a Node.js server written in TypeScript or a server written in Go
    - a database may be used to store stock data to be served to the website and trained on by the machine learning algorithm