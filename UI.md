# HPSC Website User Interface

This document provides an overview of the user interface (UI) for the Hartbeespoortdam Practical Shooting Club (HPSC)
website.

## Table of Contents

- [🎨 Design Philosophy](#-design-philosophy)
- [📐 Layout Structure](#-layout-structure)
    - [🔝 Header](#-header)
    - [📄 Body](#-body)
    - [⬇️ Footer](#-footer)
- [🧭 Navigation](#-navigation)
- [📱 Responsive Design](#-responsive-design)
- [💻 Technical Implementation](#-technical-implementation)
- [👤 Designers](#-designers)

---

## 🎨 Design Philosophy

The HPSC website is designed to be informative, accessible and user-friendly. It follows a clean and modern aesthetic,
using a consistent layout across all pages to ensure ease of navigation for both members and visitors.

---

## 📐 Layout Structure

The application uses a standard three-part layout structure, managed by the `Layout` component:

1. **Header**: Contains branding, logos and the primary navigation menu.
2. **Body**: The main content area, which may include sidebars for additional imagery or context.
3. **Footer**: Contains contact information, social media links, a venue map and copyright details.

### 🔝 Header

The Header is consistent across all pages and consists of:

- **Club Logo**: Located on the left, linking back to the Home page.
- **Association Logo**: Located on the right, linking to the provincial association's website.
- **Club Name**: Displayed prominently in the centre.
- **Navigation Menu**: A responsive menu below the club name, providing links to key areas of the site.

### 📄 Body

The Body component is flexible and adapts to the content being displayed. It features:

- **Main Content Area**: Centred and contained within a Bootstrap `Container`.
- **Sidebars**: Optional left and right sidebars used for displaying theme-related images (`ImageSidebar`), enhancing
  the visual experience of the page.

### ⬇️ Footer

The Footer provides essential information and links:

- **Association Logos**: Links to national and international shooting associations.
- **Venue Map**: An interactive map showing the location of the club's shooting range.
- **Contact Details**: Email addresses for enquiries and webmaster support.
- **Social Media**: Links to the HPSC Facebook page and group.
- **Copyright Information**: Standard copyright notice and year.

---

## 🧭 Navigation

The primary navigation menu includes the following routes:

- **Home**: The landing page with general club information.
- **Members**: Information specifically for club members.
- **Links**: Useful external links related to practical shooting.
- **History**: The history of the Hartbeespoortdam Practical Shooting Club.
- **About Us**: General information about the club.
- **Contact Us**: A page for getting in touch with the club.
- **Events**: Information about upcoming and past events.
- **Shooting Ranges**: Details and locations of shooting ranges.

---

## 📱 Responsive Design

The UI is built using **Bootstrap 5**, ensuring that the website is fully responsive and works seamlessly across various
devices and screen sizes (desktops, tablets and smartphones). The navigation menu automatically collapses into a
"hamburger" menu on smaller screens.

---

## 💻 Technical Implementation

- **Framework**: [React 19](https://react.dev/)
- **Styling**: [SCSS (Sass)](https://sass-lang.com/) for custom styles and [Bootstrap 5](https://getbootstrap.com/) for
  the component framework.
- **Icons**: [FontAwesome](https://fontawesome.com/) for social media and contact icons.
- **Content**: A mix of TSX components and **MDX** for content-heavy pages.
- **Routing**: [React Router](https://reactrouter.com/) for client-side navigation.

---

## 👤 Designers

_Leoni Lubbinge_

- [![Gmail Badge](https://img.shields.io/badge/tahoni%40gmail.com-blue?logo=gmail)](mailto:tahoni@gmail.com)

_**Jan Lubbinge**_

- [![Gmail Badge](https://img.shields.io/badge/janlub16753%40gmail.com-blue?logo=gmail)](mailto:janlub16753i@gmail.com)

**_Engela Lubbinge_**

- [![Gmail Badge](https://img.shields.io/badge/engelalubbinge%40gmail.com-blue?logo=gmail)](mailto:engelalubbinge@gmail.com)
