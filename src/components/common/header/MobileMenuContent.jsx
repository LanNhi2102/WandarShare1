

// import "react-pro-sidebar/dist/css/styles.css";
import {

  Menu,
  MenuItem,
  SubMenu,

} from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



const home = [
  {
    name: "Home 1",
    routerPath: "/",
  },

];

const listing = [
  {
    id: 1,
    title: "Listing Grid",
    items: [
      {
        name: "Grid v1",
        routerPath: "/listing-grid-v1",
      },
      {
        name: "Grid v2",
        routerPath: "/listing-grid-v2",
      },
      {
        name: "Grid v3",
        routerPath: "/listing-grid-v3",
      },
      {
        name: "Grid v4",
        routerPath: "/listing-grid-v4",
      },
      {
        name: "Grid v5",
        routerPath: "/listing-grid-v5",
      },
      {
        name: "Grid v6",
        routerPath: "/listing-grid-v6",
      },
    ],
  },
  {
    id: 2,
    title: "Listing List",
    items: [
      {
        name: "List V1",
        routerPath: "/listing-list-v1",
      },
    ],
  },
  {
    id: 3,
    title: "Listing Style",
    items: [
      {
        name: "Parallax Style",
        routerPath: "/parallax-style",
      },
      {
        name: "Slider Style",
        routerPath: "/slider-style",
      },
      {
        name: "Map Header",
        routerPath: "/map-header",
      },
    ],
  },
  {
    id: 4,
    title: "Listing Half",
    items: [
      {
        name: "Map V1",
        routerPath: "/listing-map-v1",
      },
      {
        name: "Map V2",
        routerPath: "/listing-map-v2",
      },
      {
        name: "Map V3",
        routerPath: "/listing-map-v3",
      },
      {
        name: "Map V4",
        routerPath: "/listing-map-v4",
      },
    ],
  },
  {
    id: 5,
    title: "Agent View",
    items: [
      {
        name: "Agent V1",
        routerPath: "/agent-v1",
      },
      {
        name: "Agent V2",
        routerPath: "/agent-v2",
      },
      {
        name: "Agent Details",
        routerPath: "/agent-details/2",
      },
    ],
  },
  {
    id: 6,
    title: "Agencies View",
    items: [
      {
        name: "Agencies V1",
        routerPath: "/agency-v1",
      },
      {
        name: "Agencies V2",
        routerPath: "/agency-v2",
      },
      {
        name: "Agencies Details",
        routerPath: "/agency-details/2",
      },
    ],
  },
  {
    id: 7,
    title: "Create Listing",
    items: [
      {
        name: "Create Listing",
        routerPath: "/create-listing",
      },
    ],
  },
];

const property = [
  {
    id: 1,
    title: "User Admin",
    items: [

      {
        name: "My Properties",
        routerPath: "/my-properties",
      },

    ],
  },
  {
    id: 2,
    title: "Listing Single",
    items: [
      {
        name: "Single V1",
        routerPath: "/listing-details-v1/2",
      },
      {
        name: "Single V2",
        routerPath: "/listing-details-v2/3",
      },
      {
        name: "Single V3",
        routerPath: "/listing-details-v3",
      },
      {
        name: "Single V4",
        routerPath: "/listing-details-v4",
      },
    ],
  },
];

const blog = [
  { id: 1, name: "Blog List 1", routerPath: "/blog-list-1" },
  { id: 2, name: "Blog List 2", routerPath: "/blog-list-2" },
  { id: 3, name: "Blog List 3", routerPath: "/blog-list-3" },
  {
    id: 4,
    name: "Blog Details",
    routerPath: "/blog-details/2",
  },
];

const pages = [
  {
    name: "About Us",
    routerPath: "/about-us",
  },
  {
    name: "Gallery",
    routerPath: "/gallery",
  },
  {
    name: "Faq",
    routerPath: "/faq",
  },
  {
    name: "LogIn",
    routerPath: "/login",
  },
  { name: "Compare", routerPath: "/compare" },
  { name: "Membership", routerPath: "/membership" },

  {
    name: "Register",
    routerPath: "/register",
  },
  {
    name: "Service",
    routerPath: "/service",
  },
  {
    name: "404 Page",
    routerPath: "/404",
  },
  {
    name: "Terms & Conditions",
    routerPath: "/terms",
  },
];

const MobileMenuContent = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate();

  return (
    <>
      <div className="sidebar-header">
        <Link to="/" className="sidebar-header-inner">
          <img

            className="nav_logo_img img-fluid mt20"
            src="/assets/images/header-logo2.png"
            alt="header-logo.png"
          />
          <span className="brand-text">FindHouse</span>
        </Link>
        {/* End .logo */}

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <span className="flaticon-close"></span>
        </div>
        {/* Mobile Menu close icon */}
      </div>

      {/* End logo */}
      {/* <Sidebar> */}
      <div style={{ maxHeight: 'calc(100vh - 100px)', overflowY: 'auto' }}>
        <Menu>
          <SubMenu
            label="Home"

            className={
              home.some((page) => page.routerPath?.split('/')[1] === pathname.split('/')[1])
                ? "parent-menu-active"
                : 'inactive-mobile-menu'
            }
          >
            {home.map((val, i) => (
              <MenuItem key={i} active={true}>
                <div

                  onClick={() => navigate(val.routerPath)}
                  className={
                    val.routerPath?.split('/')[1] === pathname.split('/')[1] ? "ui-active" : 'inactive-mobile-menu'
                  }
                >
                  {val.name}
                </div>
              </MenuItem>
            ))}
          </SubMenu>
          {/* End Home Home */}

          <SubMenu
            label="Listing"
            className={
              listing.some((parent) => {
                return parent.items.some(
                  (page) => page.routerPath?.split('/')[1] === pathname.split('/')[1]
                );
              })
                ? "parent-menu-active"
                : 'inactive-mobile-menu'
            }
          >
            {listing.map((item) => (
              <SubMenu
                label={item.title}
                className={
                  item.items.some((page) => page.routerPath?.split('/')[1] === pathname.split('/')[1])
                    ? "ui-active plus alt"
                    : "plus alt inactive-mobile-menu"
                }
                key={item.id}
              >
                {item.items.map((val, i) => (
                  <MenuItem key={i}>
                    <div
                      onClick={() => navigate(val.routerPath)}
                      className={
                        pathname?.split('/')[1] === val.routerPath?.split('/')[1]
                          ? "ui-active"
                          : 'inactive-mobile-menu'
                      }
                    >
                      {val.name}
                    </div>
                  </MenuItem>
                ))}
              </SubMenu>
            ))}
          </SubMenu>
          {/* End Pages Listing */}

          <SubMenu
            label="Property"
            className={
              property.some((parent) => {
                return parent.items.some(
                  (page) =>
                    page.routerPath?.split('/')[1] === pathname.split('/')[1] ||
                    page.routerPath?.split('/')[1] + "/[id]" === pathname.split('/')[1]
                );
              })
                ? "parent-menu-active"
                : 'inactive-mobile-menu'
            }
          >
            {property.map((item) => (
              <SubMenu
                label={item.title}
                className={
                  item.items.some(
                    (page) =>
                      page.routerPath?.split('/')[1] === pathname.split('/')[1] ||
                      page.routerPath?.split('/')[1] + "/[id]" === pathname.split('/')[1]
                  )
                    ? "ui-active plus alt"
                    : "plus alt inactive-mobile-menu"
                }
                key={item.id}
              >
                {item.items.map((val, i) => (
                  <MenuItem key={i}>
                    <div
                      onClick={() => navigate(val.routerPath)}
                      className={
                        pathname.split('/')[1] === val.routerPath?.split('/')[1]
                          // val.routerPath === pathname.split('/')[1]
                          ? "ui-active"
                          : 'inactive-mobile-menu'
                      }
                    >
                      {val.name}
                    </div>
                  </MenuItem>
                ))}
              </SubMenu>
            ))}
          </SubMenu>
          {/* End Pages Property */}

          <SubMenu
            label="Blog"
            className={
              blog.some(
                (page) =>
                  page.routerPath?.split('/')[1] === pathname.split('/')[1]
                // page.routerPath?.split('/')[1] + "/[id]" === pathname.split('/')[1]
              )
                ? "parent-menu-active"
                : 'inactive-mobile-menu'
            }
          >
            {blog.map((val, i) => (
              <MenuItem key={i}>
                <div
                  onClick={() => navigate(val.routerPath)}
                  className={
                    pathname?.split('/')[1] === val.routerPath?.split('/')[1]
                      // val.routerPath + "/[id]" === pathname.split('/')[1]
                      ? "ui-active"
                      : 'inactive-mobile-menu'
                  }
                >
                  {val.name}
                </div>
              </MenuItem>
            ))}
          </SubMenu>
          {/* End pages Blog */}

          <SubMenu
            label="Pages"
            className={
              pages.some((page) => page.routerPath?.split('/')[1] === pathname.split('/')[1])
                ? "parent-menu-active"
                : 'inactive-mobile-menu'
            }
          >
            {pages.map((val, i) => (
              <MenuItem key={i}>
                <div
                  onClick={() => navigate(val.routerPath)}
                  className={
                    pathname?.split('/')[1] === val.routerPath?.split('/')[1] ? "ui-active" : 'inactive-mobile-menu'
                  }
                >
                  {val.name}
                </div>
              </MenuItem>
            ))}
          </SubMenu>
          {/* End pages Pages */}

          <MenuItem>
            <div
              onClick={() => navigate("/contact")}

              className={
                pathname === "/contact" ? "ui-active" : 'inactive-mobile-menu'
              }
            >
              Contact
            </div>
          </MenuItem>

          <MenuItem>
            <div
              onClick={() => navigate("/login")}

              className={pathname === "/login" ? "ui-active" : 'inactive-mobile-menu'}
            >
              <span className="flaticon-user"></span> Login
            </div>
          </MenuItem>

          <MenuItem>
            <div
              onClick={() => navigate("/register")}

              className={
                pathname === "/register" ? "ui-active" : 'inactive-mobile-menu'
              }
            >
              <span className="flaticon-edit"></span> Register
            </div>
          </MenuItem>
        </Menu>
      </div>
      {/* </Sidebar> */}


      <Link
        to="/create-listing"
        className="btn btn-block btn-lg btn-thm circle"
        style={{ width: '90%', margin: '0px auto' }}
      >
        <span className="flaticon-plus"></span> Add New TimeShare
      </Link></>


  );
};

export default MobileMenuContent;
