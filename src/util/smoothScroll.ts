interface ScrollProps {
  id: string;
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>;
}
export function handleScroll({ id, event }: ScrollProps) {
  event?.preventDefault();

  const element = document.getElementById(id);

  if (element) {
    let yOffset = -70;
    if (id === "home") {
      yOffset = -1000;
    }
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }
}
