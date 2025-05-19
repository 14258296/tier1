import React from 'react';
import '../Styles/transactions.css';

const Transactions = ({ transactions, account }) => {
    return (
        <div className="transactions-container">
            <h2 className="transactions-heading">Recent Transactions</h2>

            {!account ? (
                <p className="not-connected">🔌 Wallet not connected</p>
            ) : (
                <div className="table-wrapper">
                    <table className="transactions-table">
                        <thead>
                            <tr>
                                <th>Tx Hash</th>
                                <th>Amount (ETH)</th>
                                <th>To</th>
                                <th>From</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="no-transactions">
                                        No transactions yet.
                                    </td>
                                </tr>
                            ) : (
                                transactions.map((tx) => (
                                    <tr key={tx.hash}>
                                        <td title={tx.hash}>{tx.hash.slice(0, 10)}...{tx.hash.slice(-6)}</td>
                                        <td>{tx.value}</td>
                                        <td title={tx.to}>{tx.to.slice(0, 8)}...{tx.to.slice(-4)}</td>
                                        <td title={tx.from}>{tx.from.slice(0, 8)}...{tx.from.slice(-4)}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Transactions;
