// Transformando a data em formato americano para poder fazer a condicional de Concluido ou não
export const formattedDate = (date: String) => {
  let dateFinal = date.split("/").reverse().join("-");

  return dateFinal;
};
