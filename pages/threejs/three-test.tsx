import NavBar from "../components/Navbar";

export default function ThreeTest() {
  return (
    <div>
      <NavBar />
      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-bold text-center text-gray-700">
            Three JS Rendering part.
          </h1>
        </div>
        <div></div>
      </div>
    </div>
  );
}
