import { experiences } from "../../constants/Experiences";

export const Timeline = () => {
  return (
    <div>
      <h2 className="mb-6 text-lg">Minhas Experiências: </h2>
      {/*Solucao encontrada no discord */}
      <ul className=" [&>*:last-child_div:first-child]:before:w-0">
        {experiences.map(
          ({ company, initialDate, finalDate, role, description }) => (
            <li className="relative flex items-baseline gap-6 pb-5">
              <div
                className=" h-3 w-3 rounded-full bg-[#785d38] before:absolute
               before:left-[5.5px] before:h-full before:w-[1px] before:bg-[#785d38]"
              ></div>

              <div
                className="flex w-64 flex-col justify-center
               rounded-xl bg-accent/20 p-4 text-base transition duration-300 hover:brightness-110"
              >
                <h2 className="text-semibold mb-1 text-accent">{company}</h2>
                <p className="text-xs">
                  {initialDate} - {finalDate}
                </p>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
