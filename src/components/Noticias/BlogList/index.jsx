
import BlogItem from './BlogItem';
import './styles.css';

const BlogList = ({ news }) => {

  return (
    <div className='container blogList-wrap'>
      {news.sort((a, b) => b.id - a.id).map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
