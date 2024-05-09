import Nav from "./components/nav";
import Body from "./components/body"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 duration-100 overflow-hidden">
      <Nav />
      <Body />
    </main>
  );
}
