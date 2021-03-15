class Program {

    async a() {
      setTimeout(() => console.log('a'), 100);
    }
  
    async b() {
      setTimeout(() => console.log('b'), 50);
    }
  
    async c() {
      setTimeout(() => console.log('c'), 90);
    }
  
    async main() {
      await this.a();
      await this.b();
      await this.c();
    }
  }
  const program = new Program();
  program.main();