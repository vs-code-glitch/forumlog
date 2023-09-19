import Comment from "../components/Comment";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const PostDetails = () => {
  return (
    <div>
      <NavBar />
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">
            10 uses of Artificial Intelligence in Day to Day
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>@Vivek Singh</p>

          <div className="flex space-x-2">
            <p>13/09/2023</p>
            <p>10:45</p>
          </div>
        </div>
        <img
          className="h-full w-full"
          src="https://static.timesofisrael.com/www/uploads/2019/12/iStock-1029035836-e1575983057612.jpg"
          alt=""
        />
        <p className="mx-auto t-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
          deleniti officiis mollitia quae accusantium eveniet nam quisquam,
          aliquam, nulla ducimus dicta, quasi cumque sunt totam in corrupti
          saepe! Consectetur eaque repellendus reiciendis impedit minima vel
          incidunt est, tenetur facilis facere a quasi sed eum, quia modi alias?
          Mollitia, minus in?
        </p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories</p>
          <div className="flex justify-center items-center space-x-2">
            <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">AI</div>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <h3 className="mt-6 mb-4 font-semibold">Comments</h3>
          {/* comments */}

          <Comment />
          <Comment />
        </div>
        {/* write a comment */}
        <div className="w-full flex flex-col mt-4 md:flex-row">
          <input
            type="text"
            placeholder="Write a comment"
            className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"
          />
          <button className="bg-black text-white text-sm px-4 py-2 md:w-[20%] mt-4 md:mt-0">
            Add Comment
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetails;
