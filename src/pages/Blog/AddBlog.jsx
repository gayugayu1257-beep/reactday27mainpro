import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlog } from "../../features/blog/blogSlice";
import { useNavigate } from "react-router-dom";

export default function AddBlog() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!title.trim()) return;

    dispatch(
      addBlog({
        id: Date.now(),
        title
      })
    );

    navigate("/blog");
  };

  return (
    <>
      <h2>Add Blog</h2>

      <input
        type="text"
        placeholder="Enter blog title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={handleSubmit}>Save</button>
    </>
  );
}
