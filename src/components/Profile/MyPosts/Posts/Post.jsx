import React from 'react';
import css from './Post.module.css';

const Post = (props) => {
return (
<div>
    <div className={css.onep1}>
        <img className={css.dsp} src='https://cdn.igromania.ru/mnt/news/1/8/8/c/e/1/112876/0f21a9ec9506a892_1920xH.jpg'/>
        { props.message}
        <div className={css.buttonitem}>
            <button>like</button>
            { props.like }
        </div>
    </div>    
    </div>
)
}
export default Post;