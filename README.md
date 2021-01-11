# SPP - StockBot

A historical and live day-trading bot with a front end to display various stock information and performance metrics.

### Proposed Development Stages
1. CURRENT - Retrieve stock information for any given day and display it graphically on the website.
    - The front end should only interact with the back end server (the method of information gathering should be transparent to the website e.g. web scrapting or an API such as IEX Cloud).
2. Apply a "dumb" trading algorithm (e.g. buy/hold on each 30s interval increase, and sell on each 10s interval decrease) which can be viewed on the same graph from stage 1.
    - All algorithm processing should occur on the back end - the website will request buy/sell/earnings/description/etc data from the back end.
3. Create several more trading algorithms which can be selected from the website.
4. Train a machine or deep learning algorithm on historical stock data and apply it as a trading algorithm.
5. Interface the bot with a real trading platform to allow it to trade on the live market.

### Language/Design Plans
- front end will either be built in pure html/css/js or as a node project using Angular or Vue.js
- back end will either be a Node.js server written in TypeScript or a server written in Go
    - a database may be used to store stock data to be served to the website and trained on by the machine learning algorithm