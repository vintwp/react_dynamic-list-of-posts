import React from 'react';
import cn from 'classnames';
import { Post } from '../../types/Post';

type Props = {
  post: Post;
  handlerOpenComments: (post: Post) => void;
  openedPostId: number;
};

export const PostItem: React.FC<Props> = ({
  post,
  handlerOpenComments,
  openedPostId,
}) => {
  return (
    <tr data-cy="Post">
      <td data-cy="PostId">{post.id}</td>

      <td data-cy="PostTitle">
        {post.title}
      </td>

      <td className="has-text-right is-vcentered">
        <button
          type="button"
          data-cy="PostButton"
          className={cn(
            'button',
            'is-link',
            { 'is-light': openedPostId !== post.id },
          )}
          onClick={() => handlerOpenComments(post)}
        >
          {openedPostId === post.id ? (
            'Close'
          ) : (
            'Open'
          )}
        </button>
      </td>
    </tr>
  );
};