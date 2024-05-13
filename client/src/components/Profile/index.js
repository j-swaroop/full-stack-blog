import React, {useContext} from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Header from '../Header'
import { AuthContext } from '../../context/AuthContextt'
import { BiLike, BiSolidLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import Cookies from 'js-cookie'
import './index.css'

const Profile = () => {
    let { id } = useParams()
    let history = useHistory()
    const [username, setUsername] = useState('')
    const [listOfPosts, setListOfPosts] = useState([])

    const getProfileInfo = async () => {
        const response = await axios.get(`http://localhost:3001/auth/profile-info/${id}`)

        setUsername(response.data.username)
    }

    const getPostsInfo = async () => {
        const response = await axios.get(`http://localhost:3001/posts/byuserId/${id}`)
        // console.log(response)
        setListOfPosts(response.data)
    }

    useEffect(() => {
        getProfileInfo()
        getPostsInfo()
    }, [])

    return (
        <>
            <Header/>
            <div className='profile-container'>
                <div className='profile-responsive-container'>
                    <p className='profile-username'> PROFILE {username.toUpperCase()} </p>
                    <ul className='user-posts'>
                     {listOfPosts.map(eachPost => 
                        <li key={eachPost.id} className='each-post'> 
                           
                            <p className='post-username cc'> {eachPost.username.slice(0, 1).toUpperCase() + eachPost.username.slice(1, )}</p>
                            {eachPost.imgUrl !== null && <img src={eachPost.imgUrl}
                                alt='' className='img'/>}
                            <p className='post-title'> {eachPost.title} </p>
                            <p className='post-text'> {eachPost.postText} </p>
                            
                            <div className='like-comments new-custom'>
                                <div className='like-containerr'>
                                    <BiLike className='icon'/>
                                    <label className='length' > {eachPost.Likes.length}</label>
                                </div>
                                <FaRegComment onClick={() => {history.push(`/post/${eachPost.id}`)}}
                                    className='comments-icon'/>
                            </div>
                        </li>)}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Profile
