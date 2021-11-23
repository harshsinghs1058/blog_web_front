import { useNavigate } from "react-router";

export default function BlogCard({ element }) {
  const navigate = useNavigate();
  return (
    <div
      className='m-5 h-96 rounded-lg overflow-hidden shadow-lg inline transform bg-mauve hover:scale-110'
      onClick={() => {
        navigate(`/${element._id}/blog`);
      }}
      key={element._id}
    >
      <img
        className='w-full h-44 object-cover'
        src={element.imgURL}
        alt='Sunset in the mountains'
      />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>
          {String(element.title).substring(0, 22) + "..."}
        </div>
        <p className='text-gray-700 text-base'>
          {String(element.desc).substring(0, 100)}
        </p>
      </div>
      <div className='px-6 pt-4 pb-2 '>
        <span className='inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #{element.category}
        </span>
      </div>
    </div>
  );
}
