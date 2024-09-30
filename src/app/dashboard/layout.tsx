import Nav from "@/app/ui/dashboard/nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <p>Dashboard Page</p>
      <div>{children}</div>
    </>
  );
}
