# Project Overview

This project is a web application built using React, providing users with features like account management and transaction history. It leverages Ethereum blockchain APIs to fetch real-time data.

## Prerequisites

- Node.js and npm installed on your machine
- MetaMask extension installed for Ethereum wallet connectivity

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/14258296/tier1.git
   cd tier1
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file at the root of the project and add your API keys:
   ```
   REACT_APP_ETHERSCAN_API_KEY=your_etherscan_api_key
   ```

4. **Run the application:**
   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Assumptions and Decisions

- The application assumes users have MetaMask installed for interacting with the Ethereum network.
- Data fetching relies on the Etherscan API for Ethereum prices and transaction details.

## Known Issues and Limitations

- The application is currently optimized for desktop viewports.
- Error handling for network requests is basic and may need enhancements for production use.

