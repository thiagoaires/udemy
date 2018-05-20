import React from 'react'
import PropTypes from 'prop-types'

const UserInfo = ({userinfo}) => (
  <div className='user-info'>
    <img src={userinfo.photo} alt={userinfo.username}/>
    <h1 className='username'> 
      <a href={`https://www.github.com/${userinfo.login}`}>{userinfo.username}</a>
    </h1>

    <ul className='repos-info'>
      <li>- Repositorios: {userinfo.public_repos}</li>
      <li>- Seguidores: {userinfo.followers}</li>
      <li>- Seguindo: {userinfo.following}</li>
    </ul>
  </div>

)

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string,
    photo: PropTypes.string,
    login: PropTypes.string,
    public_repos: PropTypes.number,
    following: PropTypes.number,
    followers: PropTypes.number
  })
}

export default UserInfo