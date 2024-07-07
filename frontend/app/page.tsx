import Avatar from "../utils/Avatar";
import Tag from "../utils/Tag";
import Resume from "./resume/page";

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
    <main className=" flex justify-center align-middle items-center pt-6 space-x-6"></main>
  );
}
