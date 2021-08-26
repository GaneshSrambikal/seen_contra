import React from 'react'
import SuspensefulUserProfile from './SuspensefulUserProfile' 
const UserProfileList = () => {
    return (
        <div className="lists">
            <SuspensefulUserProfile userId={1}/>
            <SuspensefulUserProfile userId={2}/>
            <SuspensefulUserProfile userId={3}/>
        </div>
    )
}

export default UserProfileList
