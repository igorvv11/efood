class Dish {
  title: string;
  infos: string[];
  image: string;
  description: string;
  avaliation: number;
  id: number;

  constructor(
    title: string,
    infos: string[],
    image: string,
    description: string,
    avaliation: number,
    id: number
  ) {
    this.title = title;
    this.infos = infos;
    this.image = image;
    this.description = description;
    this.avaliation = avaliation;
    this.id = id;
  }
}

export default Dish;
