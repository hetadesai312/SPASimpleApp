import React,{ Component } from 'react';
import axios from 'axios';
import '../Comments/comments.css';

export default class Comments extends Component {
    state={
        comments:[]
    }

    getComments(){
        axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
        .then(response=>{
            this.setState({
                comments:response.data
            })
        })
    }

    componentDidMount(){
        this.getComments();
    }

    render(){
        let comments = "";
        comments=(
            <div>
                {
                    this.state.comments.map(comment=>{
                        return(
                            <div className='commentDiv'>
                                <h2>Id : {comment.id}</h2>
                                <h2>Comments : {comment.body}</h2>
                            </div>
                        )
                    })
                }
            </div>
        )
        return(
            <div>
                <div style={{textAlign:'center'}}> <h2 style={{fontColor:'white', backgroundColor:'lightblue', width:'70%', marginLeft:'200px'}}>Comments </h2></div>
                {
                comments
                }
            </div>
        )
    }
}