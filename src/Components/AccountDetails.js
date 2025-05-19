import React from 'react';
import '../Styles/account_details.css';

const AccountDetails = ({ account, balance, connectWallet, ethPrice, gasPrice }) => {
    if (!account) {
        return (
            <div className="account-details">
                <button className="connect-button" onClick={connectWallet}>
                    Connect Wallet
                </button>
            </div>
        );
    }

    return (
        <div className="account-details connected">
            <div className="wallet-info">
                <div className="wallet-avatar">
                    <span className="wallet-icon">👛</span>
                </div>
                <div className="wallet-data">
                    <div className="data-item">
                        <label>Wallet Address:</label>
                        <span>{account.slice(0, 6)}...{account.slice(-4)}</span>
                    </div>
                    <div className="data-item">
                        <label>Balance:</label>
                        <span>{balance} ETH</span>
                    </div>
                    <div className="data-item">
                        <label>ETH Price:</label>
                        <span>{ethPrice ? `$${ethPrice}` : 'Loading...'}</span>
                    </div>
                    <div className="data-item">
                        <label>Gas Price:</label>
                        <span>{gasPrice ? `${gasPrice} Gwei` : 'Loading...'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountDetails;
