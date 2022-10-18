import { SuperTest, Test } from 'supertest';

declare global {
  namespace globalThis {
    var testRequest: SuperTest<Test>;
  }
}

export {};
