import { Suspense } from 'react';
import { fetchData } from '../data/user-services';
import Spinner from '../spinner.gif'
const resource = fetchData();
const SuspensefulUserProfile = ({ userId }) => {
  return (
    <Suspense fallback={<Spins/>}>
      <UserProfile userId={userId} />
    </Suspense>
  );
};
const UserProfile = ({ userId }) => {
    const users = resource.users.read();
    const user = users && users.filter(user => user.id === userId)
    console.log(user[0].name)
  return (
    <div className="cards">
      <h2>{user[0].name}</h2>
      <h5>{user[0].email}</h5>
    </div>
  );
};

const Spins =()=>{
    return(
        <div className="spinner-container">
            <img className="spinner" src={Spinner} alt='spinner'/>
        </div>
        
    )
}
export default SuspensefulUserProfile;