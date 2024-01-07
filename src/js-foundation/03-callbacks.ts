interface User {
  id: Number;
  name: String;
}

const users: User[] = [
  {
    id: 1,
    name: 'John Doe'
  },
  {
    id: 2,
    name: 'Jane Doe'
  }
];

export function getUserById(
  id: Number,
  callback: (err?: String, user?: User) => void
) {
  const user = users.find(function (user) {
    return user.id === id;
  });
  if (!user) callback(`User not found with id ${id}`);

  return callback(undefined, user);
}
