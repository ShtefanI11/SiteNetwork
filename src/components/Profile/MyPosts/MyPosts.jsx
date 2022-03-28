import React from 'react';
import Post from './Posts/Post';
import css from './MyPosts.module.css'
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
const maxLength10 = maxLengthCreator(10)
const MyPosts = React.memo(props => {
    console.log("heasdzv")
    let myposts = props.post.map(p => <Post message={p.message} like={p.like} />)
    let newPostElement = React.createRef();
    const onAddPost = (values) => {
        props.addPost(values.newMessageText);
    }
    return (
        <div className={css.mypostsitem}>
            <h3 className={css.text}>MyPost</h3>
            <AddMessageReduxForm onSubmit={onAddPost} />
            {myposts}
        </div>
    )
})
const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field name='newMessageText' component={Textarea} placeholder={'Post message'} validate={[required, maxLength10]} />
                </div>
                <div>
                    <button>addPost</button>
                </div>
            </div>
        </form>
    )
}
let AddMessageReduxForm = reduxForm({ form: 'profileAddNewPostForm' })(AddNewPostForm)
export default MyPosts;