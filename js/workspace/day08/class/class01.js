class Animal {

  static age = 10;

  constructor(name, age, species, feed) {
    this.name = name || "";
    this.age = age || 0;
    this.species = species || "";
    this.feed = feed || "";
  }
}

const rabbit = new Animal("규혁", 20, "포유류", "누네띠네");
const cat = new Animal("냥아치", 5, "고양이", "사료");
const dog = new Animal("댕멍청이", 3, "강아지", "사료");
