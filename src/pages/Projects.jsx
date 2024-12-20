export const Projects = () => (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((project, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Project {project}</h2>
            <p className="text-sm">A brief description of this project goes here. It's a cool project that showcases my skills and creativity.</p>
          </div>
        ))}
      </div>
    </div>
  );