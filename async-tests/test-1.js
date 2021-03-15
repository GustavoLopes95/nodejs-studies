class Program {

    a() {
      console.log('a');
    }
  
    b() {
      console.log('b');
    }
  
    c() {
      console.log('c');
    }
  
    main() {
        this.a();
        this.b();
        this.c();
    }
  }
  const program = new Program();
  program.main();