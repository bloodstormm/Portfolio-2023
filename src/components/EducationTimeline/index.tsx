import moment from "moment";

import { motion } from "framer-motion";

import { education } from "../../constants/Education";

import { StaggerContainer, itemAnimation } from "../../utils/Animations";
import { formattedDate } from "../../utils/FormattedDate";

export const EducationTimeline = () => {
  const today = moment(moment().toISOString());

  return (
    <div className="xl:pl-16">
      <h2 className="mb-6 px-6 text-lg lg:px-0">Meus Estudos:</h2>
      <motion.ul
        variants={StaggerContainer}
        initial="hidden"
        animate="show"
        exit="exit"
        // Solucao encontrada no discord p
        // fazer a ultima perninha da timeline sumir 👇🏽
        className="[&>*:last-child_div:first-child]:before:w-0"
      >
        {education.map(
          ({
            institution,
            initialDate,
            finalDate,
            degree,
            description,
            course,
          }) => (
            <motion.li
              variants={itemAnimation}
              key={institution}
              className="relative mx-auto flex items-baseline gap-6 pl-4 pb-5 sm:max-w-none"
            >
              <div
                className="right-0 h-3 w-3 rounded-full bg-darkerAccent before:absolute before:left-[22px] before:h-full
                before:w-[1px] before:bg-darkerAccent"
              />

              <div
                className="flex w-4/5 flex-col justify-center rounded-xl bg-accent/20 
                p-4 text-base transition duration-300 hover:brightness-110 sm:w-[29rem]"
              >
                <p className="mb-1 text-xs text-darkerAccent font-semibold">
                  {initialDate} - {finalDate}
                </p>

                {/* Se o curso ja estiver concluido, adicionar um concluido */}
                {today.isAfter(formattedDate(finalDate)) ? (
                  <p className="absolute top-3 right-12 rounded-xl bg-accent/60 py-1 px-3 text-xs lg:right-3">
                    Concluído!
                  </p>
                ) : (
                  <p className="absolute top-3 right-12 rounded-xl bg-accent/60 py-1 px-3 text-xs lg:right-3">
                    {degree}
                  </p>
                )}
                <h2 className=" font-semibold">{institution}</h2>
                <h4 className="text-sm font-medium text-darkerAccent">
                  {course}
                </h4>

                <p className="my-4">
                  {description
                    ? description
                    : "Não há descrição do estudo em questão."}
                </p>
              </div>
            </motion.li>
          )
        )}
      </motion.ul>
    </div>
  );
};
