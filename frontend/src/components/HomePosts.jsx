const HomePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
      <div className="w-[35%] h-[200px] flex justify-normal items-center">
        <img
          src="https://static.timesofisrael.com/www/uploads/2019/12/iStock-1029035836-e1575983057612.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          10 Uses of Artificial Intelligence in Day to Day Life
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between space-x-4 md:mb-4">
          <p>@Vivek Singh</p>

          <div className="flex space-x-2">
            <p>13/09/2023</p>
            <p>10:45</p>
          </div>
        </div>
        <p className="text-sm">
          Prominents examples of AI software used in everydays life incldue
          voice assistants
        </p>
      </div>
    </div>
  );
};

export default HomePosts;
