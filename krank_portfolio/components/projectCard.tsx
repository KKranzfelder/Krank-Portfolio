const ProjectCard = function ({ cardNum }) {

  const colorOptions = ['red', 'orange', 'blue', 'purple'];

  const chosenOption = colorOptions[Number(cardNum)];

  return (
    <div className={`h-72 w-1/4 m-2 rounded-md bg-opacity-80 bg-${chosenOption}-300 dark:bg-slate-800  dark:text-slate-400 dark:bg-opacity-80 hover:mix-blend-hard-light`}>
      <span>ProjectCard {chosenOption}</span>
    </div>
  )
}

export default ProjectCard;