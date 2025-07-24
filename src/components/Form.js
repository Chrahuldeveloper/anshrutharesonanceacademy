export default function Form({ contactref, userdata, setuserdata, save }) {
  return (
    <>
      <div ref={contactref}>
        <h1 className="text-xl font-bold text-center text-black pt-7 md:text-2xl lg:text-3xl">
          Talk to our expert
        </h1>
        <div className="w-20 h-1 mx-auto mt-3 bg-blue-600 rounded"></div>

        <div className="p-8 max-w-2xl mx-auto bg-white shadow-2xl border-[1px] border-gray-300 rounded-lg my-6">
          <h2 className="mb-6 text-2xl font-bold text-center text-[#00337e]">
            Contact Us
          </h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  className="block mb-2 font-semibold text-gray-700"
                  for="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  onChange={(e) => {
                    setuserdata({ ...e, Name: e.target.value });
                  }}
                  value={userdata.Name}
                  placeholder="Enter your name"
                  className="w-full p-3 border border-gray-300 rounded-md outline-none cursor-pointer"
                />
              </div>
              <div>
                <label
                  className="block mb-2 font-semibold text-gray-700"
                  for="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={(e) => {
                    setuserdata({ ...e, Name: e.target.value });
                  }}
                  value={userdata.Email}
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-md outline-none cursor-pointer"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className="block mb-2 font-semibold text-gray-700"
                  for="class"
                >
                  Class
                </label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-md outline-none cursor-pointer"
                  name=""
                  id=""
                  value={userdata.class}
                  onChange={(e) => {
                    setuserdata({ ...e, Name: e.target.value });
                  }}
                >
                  <option value="">class</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>
              <div>
                <label
                  className="block mb-2 font-semibold text-gray-700"
                  for="stream"
                >
                  Stream
                </label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-md outline-none cursor-pointer"
                  name=""
                  value={userdata.strem}
                  onChange={(e) => {
                    setuserdata({ ...e, Name: e.target.value });
                  }}
                  id=""
                >
                  <option value="">Select</option>
                  <option value="IIT">IIT</option>
                  <option value="NEET">NEET</option>
                </select>
              </div>
            </div>


            <div className="text-center">
              <button
                onClick={save}
                className="w-full px-8 py-3 text-white bg-blue-500 rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
