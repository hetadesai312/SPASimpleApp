import React, { Component } from 'react';
import axios from 'axios';
import'./posts.css';


export default class Posts extends Component {
    state={
        posts:[]
    }

    getPosts(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            this.setState({
                posts:response.data
            })
        })
    }

    componentDidMount(){
        this.getPosts();
    }
    
    render() {
        let posts="";
        posts=(
            <div>
            {
                this.state.posts.map(post=>{
                    return (
                        <div className='postDiv'>                            
                            <h2>User Id : {post.id}</h2>
                            <h2>Title : {post.title}</h2>
                        </div>
                    )
                })
            }
            </div>
        )
        return(
        <div>
            <div style={{textAlign:'center'}}> <h2 style={{fontColor:'white', backgroundColor:'lightblue', width:'70%', marginLeft:'200px'}}>Posts </h2></div>
            {
                posts
            }
        </div>
    )
    }
}
