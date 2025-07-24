import { ChevronRight, Home } from "lucide-react";
import { dataAppSidebar } from "./_data";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb";
import { Fragment } from "react/jsx-runtime";

export const Breadcrumbs = ({ currentPath = "/" }) => {
  const generateBreadcrumbs = (path: string) => {
    const breadcrumbs = [];
    
    // Always start with Dashboard/Home
    breadcrumbs.push({
      title: "Dashboard",
      url: "/",
      icon: Home,
      isLast: path === "/"
    });

    if (path === "/") {
      return breadcrumbs;
    }

    // Find the matching navigation item
    for (const navItem of dataAppSidebar.navMain) {
      // Check if any child item matches the current path
      if (navItem.items) {
        const matchingChild = navItem.items.find(item => item.url === path);
        if (matchingChild) {
          // Add parent
          breadcrumbs.push({
            title: navItem.title,
            url: navItem.url,
            icon: navItem.icon,
            isLast: false
          });
          
          // Add child
          breadcrumbs.push({
            title: matchingChild.title,
            url: matchingChild.url,
            icon: matchingChild.icon,
            isLast: true
          });
          break;
        }
      } else if (navItem.url === path) {
        // Direct match with top-level item
        breadcrumbs.push({
          title: navItem.title,
          url: navItem.url,
          icon: navItem.icon,
          isLast: true
        });
        break;
      }
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs(currentPath);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((crumb, index) => (
          <Fragment key={index}>
            <BreadcrumbItem className={index === 0 ? "hidden md:block" : ""}>
              {crumb.isLast ? (
                <BreadcrumbPage>{crumb.title}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={crumb.url}>
                  {crumb.title}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {!crumb.isLast && (
              <BreadcrumbSeparator className={index === 0 ? "hidden md:block" : ""} />
            )}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
