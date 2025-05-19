import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import AccountDetails from '../Components/AccountDetails';
import Transactions from '../Components/Transactions';
import { API_KEY, ETHERSCAN_API } from '../Constants/Endpoints';
import '../Styles/home_screen.css';

const HomeScreen = () => {
    const [account, setAccount] = useState(null);
    const [balance, setBalance] = useState(null);
    const [transactions, setTransactions] = useState([]);
    const [ethPrice, setEthPrice] = useState(null);
    const [gasPrice, setGasPrice] = useState(null);
    const [error, setError] = useState(null);

    const dummyTransactions = Array.from({ length: 10 }, (_, i) => ({
        hash: `0xdummyhash${i}`,
        from: '0xabc123...',
        to: `0xdef45${i}...`,
        value: (Math.random() * 2).toFixed(3),
        timeStamp: `16500000${i}`,
        status: i % 2 === 0 ? 'Success' : 'Pending',
    }));

    useEffect(() => {
        // setTransactions(dummyTransactions);
        fetchEthPrice();
        fetchGasPrice();
    }, []);

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(window.ethereum);
    
                const selectedAccount = accounts[0];
                setAccount(selectedAccount);
    
                const accountBalance = await web3.eth.getBalance(selectedAccount);
                setBalance(web3.utils.fromWei(accountBalance, 'ether'));
    
                await fetchTransactions(selectedAccount);
            } catch (error) {
                if (error.code === 4001) {
                    alert("Connection request rejected by the user.");
                } else {
                    alert("An error occurred while connecting the wallet.");
                }
            }
        } else {
            alert("MetaMask not detected. Please install MetaMask!");
        }
    };

    const fetchTransactions = async (account) => {
        const response = await fetch(`${ETHERSCAN_API.TRANSACTIONS(account)}&apikey=${API_KEY}`);
        const data = await response.json();
    
        if (data.status === "1") {
            setTransactions(data.result);
        } else {
            console.error("Error fetching transactions:", data.message);
        }
    };

    const fetchEthPrice = async () => {
        try {
            const response = await fetch(`${ETHERSCAN_API.ETH_PRICE}&apikey=${API_KEY}`);
            const data = await response.json();
            if (data.status === '1') {
                setEthPrice(parseFloat(data.result.ethusd).toFixed(2));
            } else {
                setError('Error fetching ETH price');
            }
        } catch (error) {
            setError('Failed to fetch ETH price');
        }
    };

    const fetchGasPrice = async () => {
        try {
            const response = await fetch(`${ETHERSCAN_API.GAS_PRICE}&apikey=${API_KEY}`);
            const data = await response.json();
            if (data.status === '1') {
                setGasPrice(parseFloat(data.result.SafeGasPrice).toFixed(3));
            } else {
                setError('Error fetching gas price');
            }
        } catch (error) {
            setError('Failed to fetch gas price');
        }
    };

    return (
        <div className="home-layout">
            <AccountDetails
                account={account}
                balance={balance}
                connectWallet={connectWallet}
                ethPrice={ethPrice}
                gasPrice={gasPrice}
            />
            <Transactions
                account={account}
                transactions={transactions}
            />
        </div>
    );
};

export default HomeScreen;

