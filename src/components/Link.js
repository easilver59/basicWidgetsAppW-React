import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    //   Allow user to hold control or command to open in new tab
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, "", href);

    //URL has just changed
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
