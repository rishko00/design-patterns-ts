interface LanguageStrategy {
  sayHello(): void;
}

class Ukrainian implements LanguageStartegy {
  sayHello() {
    console.log('Привіт!');
  }
}

class English implements LanguageStartegy {
  sayHello() {
    console.log('Hello!');
  }
}

class Spanish implements LanguageStartegy {
  sayHello() {
    console.log('Hola!');
  }
}

class LanguageContext {
  private languageStrategy: LanguageStrategy;
  
  setStrategy(strategy: LanguageStrategy) {
    this.languageStrategy = strategy;
  }
  
  execute() {
    return this.languageStrategy.sayHello();
  }
}

const langContext = new LanguageContext();
const ukrainian = new Ukrainian();
langContext.setStrategy(ukrainian);
langContext.execute();
