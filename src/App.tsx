import Incorporate from "./components/Incorporate";

function App() {
  return (
    <>
      <div className="flex flex-col items-center bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mt-12 mb-14">
          Arraste Para o Lado Para Atribuir
        </h1>
        <Incorporate />
      </div>
      <footer className="bg-gray-100 text-center text-gray-500 py-4 pt-7">
        <p>
          Desenvolvido por{" "}
          <a
            href=""
            className="text-blue-500 hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Carlos Eduardo Dias Batista
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
