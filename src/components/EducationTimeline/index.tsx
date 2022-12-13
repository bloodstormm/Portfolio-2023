import { education } from "../../constants/Education";
import moment from "moment";
import "moment/locale/pt-br";

export const EducationTimeline = () => {
  const today = moment(moment().toISOString());

  // Transformando a data em formato americano para poder fazer a condicional de Concluido ou não
  const formatDate = (date: String) => {
    let dateFinal = date.split("/").reverse().join("/");

    return dateFinal;
  };

  return (
    <div className="pl-16">
      <h2 className="mb-6 text-lg">Meus Estudos: </h2>
      {/*Solucao encontrada no discord */}
      <ul className=" [&>*:last-child_div:first-child]:before:w-0">
        {education.map(
          ({
            institution,
            initialDate,
            finalDate,
            degree,
            description,
            course,
          }) => (
            <li
              key={institution}
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

                {/* Se o curso ja estiver concluido, adicionar um concluido */}
                {today.isAfter(formatDate(finalDate)) ? (
                  <p className="absolute top-2 right-2 rounded-xl bg-accent/60 py-1 px-3 text-xs">
                    Concluído!
                  </p>
                ) : (
                  <p className="absolute top-2 right-2 rounded-xl bg-accent/60 py-1 px-3 text-xs">
                    {degree}
                  </p>
                )}
                <h2 className=" font-semibold">{institution}</h2>
                <h4 className="text-sm font-medium text-accent/80">{course}</h4>

                <p className="my-4">
                  {description
                    ? description
                    : "Não há descrição do estudo em questão."}
                </p>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
