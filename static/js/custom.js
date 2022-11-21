const navContainer = document.getElementById("topNav");
const pages = [...navContainer.getElementsByClassName("page-collection")];

const currentPage = pages.findIndex((page) => {
  return (
    page.firstElementChild.href.replace(/\/$/, "") ===
    document.URL.replace(/\/$/, "")
  );
});

pages.forEach((page, index) => {
  page.classList.toggle("active-page", index === currentPage);
});
