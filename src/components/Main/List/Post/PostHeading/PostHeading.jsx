import style from './PostHeading.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../UI/Text/Text';
import {Link, useParams} from 'react-router-dom';

export const PostHeading = ({postTitle, postAuthor, id}) => {
  const {page} = useParams();

  return (
    <div className={style.content}>
      <Text
        As='h2'
        size={20} tsize={22}
        className={style.title}
      >
        <Link className={style.linkPost} to={`/category/${page}/post/${id}`}>
          <Text className={style.linkPost} size={14} tsize={22} >
            {postTitle}
          </Text>
        </Link>
      </Text>

      <Text
        As='a'
        className={style.linkAuthor}
        href='#author'
      >
        {postAuthor}
      </Text>
    </div>
  );
};

PostHeading.propTypes = {
  postTitle: PropTypes.string,
  postAuthor: PropTypes.string,
  id: PropTypes.string,
};
