import {useState} from 'react';
import style from './PostHeading.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../UI/Text/Text';
import {Modal} from '../../../../Modal/Modal';

export const PostHeading = ({postTitle, postAuthor, markdown}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className={style.content}
      onClick={() => setIsModalOpen(true)}
    >
      <Text
        As='h2'
        size={20} tsize={22}
        className={style.title}
      >
        <Text
          As='a'
          size={26} tsize={32}
          className={style.linkPost}
          href='#post'
        >
          {postTitle}
        </Text>
      </Text>

      <Text
        As='a'
        className={style.linkAuthor}
        href='#author'
      >
        {postAuthor}
      </Text>
      {isModalOpen && (
        <Modal
          title={postTitle}
          author={postAuthor}
          markdown={markdown}
          closeModal={() => setIsModalOpen(false)}
        />)}
    </div>
  );
};

PostHeading.propTypes = {
  postTitle: PropTypes.string,
  postAuthor: PropTypes.string,
  markdown: PropTypes.string,
};
