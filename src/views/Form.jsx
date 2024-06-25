import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const [name, setName] = useState("");
  const [errorNoName, setErrorNoName] = useState("");
  let navigate = useNavigate();

  const handleNameInputChange = (event) => {
    setName(event.target.value);

    if (errorNoName) {
      setErrorNoName("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim()) {
      setErrorNoName("Nama harus diisi");
      return;
    }
    const now = new Date();
    const second = now.getSeconds();
    const millisecond = now.getMilliseconds();

    // Combine second and millisecond to form a random number
    const randomNumber = `${second}${millisecond}`;

    // Navigate to the result page with the random number in the query string
    navigate(`/result?${randomNumber}`);

    const data = { name: name.trim() };
    navigate(`/result?${randomNumber}`, { state: data });
  };

  return (
    <>
      <div className="bg-[url('/bg.jpg')] bg-cover bg-center">
        <div className="flex flex-col items-center justify-center h-screen w-full">
          <div className="max-w-80 md:max-w-2xl w-full md:w-auto p-20 text-center rounded-lg bg-black bg-opacity-90 border shadow-[2px_5px_8px_0px_#ffffff] backdrop-blur-lg filter ">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold">Cek Khodam</h1>
              <p className="mt-3 md:mt-1 text-lg text-justify">
                Masukkan nama untuk mengecek khodam anda
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleNameInputChange}
                placeholder="Masukkan nama anda"
                className="text-center px-2 py-2 w-full mt-5 border-2 rounded-md border-gray-500 focus:outline-none focus:border-gray-600 bg-gray-800 text-white"
              />
              {errorNoName && (
                <p className="mt-1 py-1 rounded-md bg-red-200 text-red-800 font-bold">
                  Nama harus diisi
                </p>
              )}
              <button
                type="submit"
                className="mt-5 py-2 w-full md:w-40 rounded-md border-2 border-gray-500 bg-gray-700 hover:bg-gray-600 active:bg-gray-800 text-white"
              >
                Cek khodam
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
