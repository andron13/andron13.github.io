function test() {
  const a = "Кто прочитал этот текст в консоли, тот скоро умрёт";
  console.log(this.a);
}
test(); // не волнуйтесь, никто не умрёт