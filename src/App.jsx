import Profile from './components/modules/Profile/Profile';
import Statistics from './components/modules/Statistics/Statistics';
import FriendList from './components/modules/FriendList/FriendList';
import TransactionHistory from './components/modules/TransactionHistory/TransactionHistory';
import user from './components/data/user.json';
import statistics from './components/data/statistics.json';
import friends from './components/data/friends.json';
import transactions from './components/data/transactions.json';
import reset from './components/shared/styles/reset.css';
import common from './components/shared/styles/common.css';

export const App = () => {
  return (
    <div className="container">
      <Profile {...user} />
      <Statistics title={'Upload stats'} objects={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
