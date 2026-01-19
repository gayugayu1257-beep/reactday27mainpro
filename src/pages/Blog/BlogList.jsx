import { useDispatch, useSelector } from "react-redux";
import { addBlog } from "../../features/blog/blogSlice";


export default function BlogList() {
  const blogs = useSelector(state => state.blog);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() =>
        dispatch(addBlog({ id: Date.now(), title: "New Blog" }))
      }>
        Add Blog
      </button>

      {blogs.map(b => (
        <p key={b.id}>{b.title}</p>
      ))}
    </>
  );
}
