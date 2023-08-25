import React, { useEffect, useState } from 'react';

import { Loader } from '../Loader';
import { NewCommentForm } from '../NewCommentForm';

import { Post } from '../../types/Post';
import { Comment } from '../../types/Comment';

type Props = {
  post: Post;
  comments: Comment[];
  hasError: boolean;
  isLoading: boolean;
  onDeleteComment: (commentId: number) => void;
  onAddComment: (comment: Omit<Comment, 'id'>) => Promise<void>;
};

export const PostDetails: React.FC<Props> = ({
  post,
  comments,
  hasError,
  isLoading,
  onDeleteComment,
  onAddComment,
}) => {
  const { id, title, body } = post;
  const [isFormShown, setIsFormShown]
    = useState<boolean>(false);

  useEffect(() => {
    setIsFormShown(false);
  }, [post]);

  return (
    <div className="content" data-cy="PostDetails">
      <div className="content" data-cy="PostDetails">
        <div className="block">
          <h2 data-cy="PostTitle">
            {`${id}: ${title}`}
          </h2>

          <p data-cy="PostBody">
            {body}
          </p>
        </div>

        <div className="block">
          {isLoading && (
            <Loader />
          )}

          {hasError && !isLoading && (
            <div className="notification is-danger" data-cy="CommentsError">
              Something went wrong
            </div>
          )}

          {!comments.length && !isLoading && (
            <p className="title is-4" data-cy="NoCommentsMessage">
              No comments yet
            </p>
          )}

          {!!comments.length && !isLoading && (
            <>
              <p className="title is-4">Comments:</p>
              {comments.map(comment => (
                <article
                  className="message is-small"
                  data-cy="Comment"
                  key={comment.id}
                >
                  <div className="message-header">
                    <a
                      href={`mailto:${comment.email}`}
                      data-cy="CommentAuthor"
                    >
                      {comment.name}
                    </a>
                    <button
                      data-cy="CommentDelete"
                      type="button"
                      className="delete is-small"
                      aria-label="delete"
                      onClick={() => onDeleteComment(comment.id)}
                    >
                      delete button
                    </button>
                  </div>
                  <div className="message-body" data-cy="CommentBody">
                    {comment.body}
                  </div>
                </article>
              ))}
            </>
          )}

          {!hasError
            && !isLoading
            && !isFormShown
            && (
              <button
                data-cy="WriteCommentButton"
                type="button"
                className="button is-link"
                onClick={() => setIsFormShown(true)}
              >
                Write a comment
              </button>
            )}
        </div>

        {isFormShown && (
          <NewCommentForm
            postId={id}
            onAddComment={onAddComment}
          />
        )}
      </div>
    </div>
  );
};
