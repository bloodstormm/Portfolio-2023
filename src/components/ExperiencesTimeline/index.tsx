import { motion } from "framer-motion";
import { experiences } from "../../constants/Experiences";
import { container, itemAnimation } from "../../utils/StaggerItems";

export const ExperiencesTimeline = () => {
  return (
    <div>
      <h2 className="mb-6 text-lg">Minhas Experiências: </h2>
      {/*Solucao encontrada no discord */}
      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        className=" [&>*:last-child_div:first-child]:before:w-0"
      >
        {experiences.map(
          ({ company, initialDate, finalDate, role, description, stack }) => (
            <motion.li
              variants={itemAnimation}
              key={company}
              className="relative flex items-baseline gap-6  pb-5"
            >
              <div
                className="right-0 h-3 w-3 rounded-full bg-[#785d38] before:absolute
               before:left-[5.5px] before:h-full before:w-[1px] before:bg-[#785d38]"
              ></div>

              <div
                className="flex w-[29rem] flex-col justify-center
               rounded-xl bg-accent/20 p-4 text-base transition duration-300 hover:brightness-110"
              >
                <p className="mb-1 text-xs text-accent">
                  {initialDate} - {finalDate}
                </p>
                <h2 className=" font-semibold">{company}</h2>
                <h4 className="text-sm font-medium text-accent/80">{role}</h4>

                <p className="my-4">
                  {description
                    ? description
                    : "Não há descrição das atividades exercidas"}
                </p>

                <div>
                  <h4 className="font-medium">Stack:</h4>
                  <div className="mt-2 flex items-center gap-4">
                    {stack.map((Item, index) => (
                      <p
                        key={index}
                        className="text-xl transition hover:text-accent"
                      >
                        {<Item />}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.li>
          )
        )}
      </motion.ul>
    </div>
  );
};
