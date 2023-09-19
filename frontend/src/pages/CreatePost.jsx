import { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { ImCross } from "react-icons/im";

const CreatePost = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
 
  const deleteCategory = (i) => {
    let updatedCategories = [...categories];
    updatedCategories.splice(i);
    setCategories(updatedCategories);
  };

  const addCategory = () => {
    let updatedCategories = [...categories];
    updatedCategories.push(category);
    setCategory("");
    setCategories(updatedCategories);
  };
  
  return (
    <div>
      <NavBar />
      <div className="px-6 md:px-[200px] mt-8">
        <h1 className="font-bold md:text-2xl text-xl mt-8">Create a post</h1>
        <form className="w-full flex flex-col space-y-4 md:space-y-8 my-2">
          <input
            className="px-4 py-2 outline"
            type="text"
            placeholder="Enter post title"
          />
          <input className="px-4" type="file" />
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="px-4 py-2 outline"
                placeholder="Enter post category"
                type="text"
              />
              <div
                onClick={addCategory}
                className="bg-black text-white px-4 py-2 font-semibold cursor-pointer"
              >
                Add
              </div>

              {/* categories */}
              <div className="flex px-4 mt-3">
                {categories?.map((c, i) => (
                  <div
                    key={i}
                    className="flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md"
                  >
                    <p>{c}</p>
                    <p
                      onClick={()=>deleteCategory(i)}
                      className="text-white bg-black rounded-full cursor-pointer p-1 text-sm"
                    >
                      <ImCross />
                    </p>
                  </div>
                ))}
              </div>
              {/* text area */}
            </div>
          </div>
          <textarea
            cols={30}
            rows={15}
            className="px-4 py-2  border-2"
            placeholder="Enter post description"
          />
          <button className="bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg">
            Update
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreatePost;
