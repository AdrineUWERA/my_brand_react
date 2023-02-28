import AllComments from "../components/SingleBlogComponents/AllComments"
import BlogContent from "../components/SingleBlogComponents/BlogContent";
import CommentForm from "../components/SingleBlogComponents/CommentForm";
const SingleBlog = () => {
    return ( <div>
        <BlogContent/>
        <CommentForm/>
        <AllComments />
    </div> );
}
 
export default SingleBlog;