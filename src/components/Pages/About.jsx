function About() {
  return (
    <div className="container animate-fadein transition-all mx-auto mb-auto mt-24 px-8 flex gap-y-6 flex-col justify-center items-start">
      <h1 className="text-4xl font-semibold">Github Finder Project</h1>
      <p className="text-2xl font-light w-2/3">
        A React app to search Github profiles and see profile details. This
        projects is part of the React Front To Back Udemy Course by Brad
        Traversy.
      </p>
      <p className="text-2xl">
        Version <span className="text-accent font-bold">1.0.0</span>
      </p>
    </div>
  );
}

export default About;
