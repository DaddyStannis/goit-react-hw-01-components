import Profile from './modules/Profile/Profile';
import Statistics from './modules/Statistics/Statistics';
import FriendList from './modules/FriendList/FriendList';
import TransactionHistory from './modules/TransactionHistory/TransactionHistory';
import user from './data/user.json';
import statistics from './data/statistics.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import './shared/styles/reset.css';
import './shared/styles/common.css';

export const App = () => {
  return (
    <div className="container">
      <Profile {...user} />
      <Statistics title={'Upload stats'} statistics={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
