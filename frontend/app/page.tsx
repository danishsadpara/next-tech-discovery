export default function Home() {
  type optional<Type> = {
    [Property in keyof Type]+?: Type[Property];
  };
  type user = {
    name: string;
    email: string;
    password: string;
    age: string;
  };
  type mutableUser = optional<user>;
  return (
    <main className="">
      <header className="bg-gray w-full h-25">Hello world</header>
    </main>
  );
}
