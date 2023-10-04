import {
  Typography,
  Breadcrumbs,
  Link,
} from "@mui/material";
// ICONS
import { MdOutlineNavigateNext } from "react-icons/md";

export default function BreadcrumbsMovie({ name }) {
  return (
    <Breadcrumbs
      aria-label='breadcrumbs'
      maxItems={3}
      separator={<MdOutlineNavigateNext />}
      style={{ marginLeft: "45px", marginTop: "80px" }}
    >
      <Link href='/' underline='hover'>
        Accueil
      </Link>
      <Link href='/movies' underline='hover'>
        Catalogue de fims
      </Link>
      {/* <Link href='#' underline='hover'>
            Accessoires
          </Link> */}
      <Typography color='text.primary'>Film : {name}</Typography>
    </Breadcrumbs>
  );
}
