const ProjectCard = function () {

  const colorOptions = ['red', 'orange', 'blue', 'purple'];

  const chosenOption = ((colors) => {
    return colorOptions[Math.floor(Math.random() * colors.length)];
  })(colorOptions);

  console.log(chosenOption);

  return (
    <div className={`h-72 w-1/4 m-2 rounded-md bg-opacity-80 bg-${chosenOption}-300 dark:bg-slate-800  dark:text-slate-400 dark:bg-opacity-80 hover:mix-blend-hard-light`}>
      <span>ProjectCard</span>
    </div>
  )
}

export default ProjectCard;