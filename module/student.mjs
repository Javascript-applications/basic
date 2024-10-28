export const student = {
  name: 'ramesh',
  class: 10,
  age: 16,
};

export const professor = {
  name: 'Mr rakesh',
};

export default function Root() {
  return {
    professor,
    student,
  };
}
