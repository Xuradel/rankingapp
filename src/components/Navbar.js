import React, { useEffect } from 'react'
import './Navbar.css'

function script() {
    const dropdownBtn = document.querySelectorAll(".dropdown-btn");
    const dropdown = document.querySelectorAll(".dropdown");
    const hamburgerBtn = document.getElementById("hamburger");
    const navMenu = document.querySelector(".menu");
    const links = document.querySelectorAll(".dropdown a");

    function setAriaExpandedFalse() {
        dropdownBtn.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
    }

    function closeDropdownMenu() {
        dropdown.forEach((drop) => {
            drop.classList.remove("active");
            drop.addEventListener("click", (e) => e.stopPropagation());
        });
    }

    function toggleHamburger() {
        navMenu.classList.toggle("show");
    }

    dropdownBtn.forEach((btn) => {
        btn.addEventListener("click", function (e) {
            const dropdownIndex = e.currentTarget.dataset.dropdown;
            const dropdownElement = document.getElementById(dropdownIndex);

            dropdownElement.classList.toggle("active");
            dropdown.forEach((drop) => {
                if (drop.id !== btn.dataset["dropdown"]) {
                    drop.classList.remove("active");
                }
            });
            e.stopPropagation();
            btn.setAttribute(
                "aria-expanded",
                btn.getAttribute("aria-expanded") === "false" ? "true" : "false"
            );
        });
    });

    // close dropdown menu when the dropdown links are clicked
    links.forEach((link) =>
        link.addEventListener("click", () => {
            closeDropdownMenu();
            setAriaExpandedFalse();
            toggleHamburger();
        })
    );

    // close dropdown menu when you click on the document body
    document.documentElement.addEventListener("click", () => {
        closeDropdownMenu();
        setAriaExpandedFalse();
    });

    // close dropdown when the escape key is pressed
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeDropdownMenu();
            setAriaExpandedFalse();
        }
    });

    // toggle hamburger menu
    hamburgerBtn.addEventListener("click", toggleHamburger);

}

const Navbar = () => {

    useEffect(() => {
        script()
    }, [])

    return (
        <header id="nav-menu" aria-label="navigation bar">
            <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.css" />
            <link rel="stylesheet" type="text/css" href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
            <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
            <div class="container">
                <div class="nav-start">
                    <a class="logo" href="/">
                        <img src={require('../images/LOGO.webp')} width="180" height="40" alt="Logo" />
                    </a>
                    <nav class="menu">
                        <ul class="menu-bar">
                            <li>
                                <button class="nav-link dropdown-btn" data-dropdown="dropdown1" aria-haspopup="true" aria-expanded="false" aria-label="browse">
                                    Browse
                                    <i class="bx bx-chevron-down" aria-hidden="true"></i>
                                </button>
                                <div id="dropdown1" class="dropdown">
                                    <ul role="menu">
                                        <li role="menuitem">
                                            <a class="dropdown-link" href="/Proviews">
                                                <img src={require('../images/LPLPROVIEWS.webp')} class="icon" width="25px" height="15px" />
                                                <div>
                                                    <span class="dropdown-link-title">Proviews</span>
                                                    <p>POV Players LPL Summer Season 2023 </p>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul role="menu">
                                        <li class="dropdown-title">
                                            <span class="dropdown-link-title">Browse by apps</span>
                                        </li>
                                        <li role="menuitem">
                                            <a class="dropdown-link" href="/Proviews">
                                                <img src={require('../images/LPLPROVIEWS.webp')} width="30px" height="18px" />
                                                Proviews
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li><a class="nav-link" href="/ProviewsGuide">Guide Proviews 1080p </a></li>
                        </ul>
                    </nav>
                </div>
                <div class="nav-end">
                    <div class="right-container">
                        <a href="https://discord.gg/mgzzzg8AEb" aria-label="Join to Discord"><button class="btn btn-primary">Join Discord Server</button></a>
                    </div>
                    <button id="hamburger" aria-label="hamburger" aria-haspopup="true" aria-expanded="false">
                        <i class="bx bx-menu" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar
