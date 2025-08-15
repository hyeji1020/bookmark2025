import { auth } from "@/lib/auth";
import { use } from "react";

export default function Home() {
  const session = use(auth());
  return <div className=''></div>;
}
