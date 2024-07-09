import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { fetchUserData } from "./API";
import './CSS/Heders.css'


function Header() {
    const [menus, setMenus] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
      fetchMenus();
    }, []);
  
    const fetchMenus = () => {
        fetchUserData("api/menus", "GET", "")
         .then((response) => {
            // alert(response.status);
            if (response.status === 200) {
              console.log("User data:", response.data);
              setMenus(response.data);
            } else {
              // setErrorMessage(response);
              console.log("Failed to get menu data. " || response);
            }
          })
         .catch((error) => {
            navigate(`/no`);
            // console.error("Error fetching menu data:", error);
            // setErrorMessage("response not found!");
          });

      // axios.get(`${Config.API_BASE_URL}/api/menus`, {
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      //     },
      //   })
      //   .then((response) => {
      //     if (response.status !== 200) {
      //       throw new Error("Network response was not ok");
      //     }
      //     return response.data;
      //   })
      //   .then((data) => {
      //     setMenus(data);
      //   })
      //   .catch((error) => {
      //     console.error("Error fetching data:", error);
      //   });
    };
  
    const toggleSubMenu = (index) => {
      const updatedMenus = [...menus];
      updatedMenus[index].isOpen = !updatedMenus[index].isOpen;
      setMenus(updatedMenus);
    };
  
    return (
      <div>
         <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          <NavLink className="navbar-brand" to="/menu">
            DEALWATCHER.COM
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {menus &&
                menus.map((menu, index) => (
                  <li key={menu.id}>
                    <NavLink
                      className="nav-link"
                      to={menu.url || menu.menuName}
                     onClick={() => toggleSubMenu(index)}
                    >
                      {menu.menuName}
                    </NavLink>
                   
                    {menu.isOpen && menu.children && menu.children.length > 0 && (
                      <ul>
                        {menu.children.map((submenu, subIndex) => (
                          <li key={submenu.id}>
                            <NavLink className="nav-link submenu-link" to={submenu.url} data-has-grandchildren={!!submenu.children && submenu.children.length > 0}>
                              {submenu.menuName}
                            </NavLink>
                            {submenu.children && submenu.children.length > 0 && (
                              <ul className="grandchild-menu">
                                {submenu.children.map((grandchild) => (
                                  <li key={grandchild.id}>
                                    <NavLink className="nav-link" to={grandchild.url}>
                                      {grandchild.menuName}
                                    </NavLink>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
            </ul>
    
            <ul className="my-2 my-lg-0 nav-item ">
              <h6>
                <Link to="/">Sign In</Link>
              </h6>
            </ul>
          </div>
        </nav> 
        {/* <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'salmon' }}>
            <div className="container-fluid">
                <a className="navbar-brand fw-bold" href="/menu">Coding Yaar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                submenu
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li className="nav-item dropend">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li className="nav-item dropend">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Dropdown
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li className="nav-item dropend">
                                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Dropdown
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="/about">Action</a></li>
                                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                                        <li><hr className="dropdown-divider" /></li>
                                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Link</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light" type="submit">Search</button>
                    </form>
                    <ul className="my-2 my-lg-0 nav-item ">
              <h6>
                <Link to="/">Sign In</Link>
              </h6>
            </ul>
                </div>
                
            </div>
            
        </nav> */}
    
        <p>{JSON.stringify(menus)}</p>
      </div>
    );
  }

export default Header;