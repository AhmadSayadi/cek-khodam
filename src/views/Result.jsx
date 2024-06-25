import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import generateKhodam from "../services/generateRandomResult";
import capitalizeEachWord from "../services/capitalizeOutput";

function Result() {
  const navigate = useNavigate();
  const location = useLocation();

  const data = location.state;
  const khodam = generateKhodam(data.name.toLowerCase());

  const handleClick = () => navigate("/");

  return (
    <>
      <div className="bg-[url('/bg.jpg')] bg-cover bg-center">
        <div className="flex flex-col items-center justify-center h-screen w-full">
          <div className="max-w-3xl w-full md:w-auto p-20 text-center rounded-lg bg-black bg-opacity-90 border shadow-[2px_5px_8px_0px_#ffffff] filter">
            <h1 className="text-2xl font-semibold text-wrap text-white">
              {capitalizeEachWord(data.name)}, khodam Anda adalah:
            </h1>
            <p className="mt-5 text-4xl font-bold text-white">{khodam.name}</p>
            <p className="mt-5 text-white">{khodam.description}</p>
            <button
              type="button"
              onClick={handleClick}
              className="mt-5 py-2 px-5 w-full md:w-40 rounded-md border-2 border-gray-500 bg-gray-500 hover:bg-gray-600 hover:border-gray-600 active:bg-gray-700 active:border-gray-700 text-white"
            >
              Kembali
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Result;
