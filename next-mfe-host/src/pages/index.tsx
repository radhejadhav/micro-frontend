import { DashboardPropsType, NavbarPropsType, Pages } from "@/ts_types/global";
import dynamic from "next/dynamic";
import { useState } from "react";
//@ts-ignore
const AppNav: React.FC<NavbarPropsType> = dynamic(import("remote2/Navbar"), { ssr: false })
//@ts-ignore
const Dashboard: React.FC<DashboardPropsType> = dynamic(import("remote2/Dashboard"), { ssr: false })
//@ts-ignore
const ProductList: React.FC<any> = dynamic(import("remote2/ProductList"), { ssr: false })

export default function Home() {
  const [currentPage, setCurrentPage] = useState<Pages>("Blog")

  const renderPages = (page: Pages) => {
    switch (page) {
      case "Products":
        return <ProductList />
      case "Pricing":
        return <>Princing Page</>
      case "Blog":
        return <>Blogs Page</>
      default:
        return <>No Page to show</>
    }
  }
  return (
    <>
      <div>
        <AppNav setCurrentPage={setCurrentPage} />
        <Dashboard page={currentPage}>
          {renderPages(currentPage)}
        </Dashboard>

      </div>
    </>
  );
}
