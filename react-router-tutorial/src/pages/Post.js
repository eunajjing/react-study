import React from 'react';

const Post = ({ match }) => {
    console.log(match);
    console.log(match.params);
    return (
        <p>
            포스트 #{match.params.id}
        </p>
    );
};

export default Post;