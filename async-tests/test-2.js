class Program {

    async a() {
      console.log('a');
    }
  
    async b() {
      console.log('b');
    }
  
    async c() {
      console.log('c');
    }
  
    main() {
        await this.a();
        await this.b();
        await this.c();
    }
  }
  const program = new Program();
  program.main();