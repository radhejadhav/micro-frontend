export type Pages = "Products" | "Pricing" | "Blog"
export type NavbarPropsType = {
    setCurrentPage: React.Dispatch<React.SetStateAction<Pages>>
}

export type DashboardPropsType = {
    children: React.ReactNode
    page:Pages
}