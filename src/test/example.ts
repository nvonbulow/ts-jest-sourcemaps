import { Min } from 'class-validator';

class PaddingClass {
  @Min(2)
  readonly thisIsHereToOffsetLines: number;
}

export async function dontThrowError() {

}

export async function throwError() {
  await dontThrowError();
  throw new Error();
}
